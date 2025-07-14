"use client";

import { useState } from "react";
import { FiSun, FiMoon, FiMapPin, FiCalendar, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

export default function GoldenHourCalculator() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // const reverseGeocode = async (lat, lon) => {
  //   const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
  //   const data = await res.json();
  //   return data.display_name || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
  // };

  const reverseGeocode = async (lat, lon) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await res.json();

    const addr = data.address || {};

    // Priority order for locality name:
    const city =
      addr.city ||
      addr.town ||
      addr.village ||
      addr.hamlet ||
      addr.county ||
      addr.state ||
      addr.country;

    return city || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
  };

  const fetchGoldenHour = async (lat, lon) => {
    try {
      const apiUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${date}&formatted=0`;
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error("Failed to fetch sun data");
      const body = await res.json();

      if (body.status !== "OK")
        throw new Error(body.message || "Sun API error");

      const { sunrise, sunset } = body.results;

      const sr = new Date(sunrise);
      const ss = new Date(sunset);

      // Calculate golden and blue hours
      const ghStartAM = sr;
      const ghEndAM = new Date(sr.getTime() + 60 * 60 * 1000);
      const ghStartPM = new Date(ss.getTime() - 60 * 60 * 1000);
      const ghEndPM = ss;
      const buStartAM = new Date(sr.getTime() - 30 * 60 * 1000);
      const buEndAM = sr;
      const buStartPM = ss;
      const buEndPM = new Date(ss.getTime() + 30 * 60 * 1000);

      setResults({
        sunrise: sr.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sunset: ss.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        goldenHourAM: `${ghStartAM.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })} – ${ghEndAM.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`,
        goldenHourPM: `${ghStartPM.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })} – ${ghEndPM.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`,
        blueHourAM: `${buStartAM.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })} – ${buEndAM.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`,
        blueHourPM: `${buStartPM.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })} – ${buEndPM.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`,
        location: `${lat.toFixed(4)}, ${lon.toFixed(4)}`,
      });
    } catch (err) {
      setError(err.message || "Failed to process sun data");
      throw err;
    }
  };

  const getCurrentLocation = () => {
    setError("");
    setResults(null);
    setIsLoading(true);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const placeName = await reverseGeocode(latitude, longitude);
          setLocation(placeName);
          await fetchGoldenHour(latitude, longitude, placeName);
        } catch (err) {
          setError(err.message || "Failed to get golden hour data");
        } finally {
          setIsLoading(false);
        }
      },
      (err) => {
        setError(
          err.message || "Location access was denied. Please enter manually."
        );
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const calculateGoldenHour = async () => {
    setError("");
    setResults(null);

    if (!location.trim()) {
      setError("Please enter a location");
      return;
    }

    setIsLoading(true);

    try {
      let lat, lon;
      if (location.includes(",")) {
        [lat, lon] = location.split(",").map((x) => parseFloat(x.trim()));
        if (isNaN(lat) || isNaN(lon))
          throw new Error("Invalid coordinates format");
      } else {
        const geo = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            location
          )}`
        );
        const places = await geo.json();
        if (!places.length) throw new Error("Location not found");
        lat = parseFloat(places[0].lat);
        lon = parseFloat(places[0].lon);
      }

      await fetchGoldenHour(lat, lon);
    } catch (err) {
      setError(err.message || "Failed to calculate golden hours");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-4 sm:p-6">
      <div className="pt-20 pb-10">
        <div className="w-full mx-auto max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-2">
              <FiSun className="h-8 w-8" />
              Golden Hour Calculator
            </h1>
            <h2 className="text-amber-100 text-center mt-2">
              Find the perfect natural lighting for photography
            </h2>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Form */}
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="location-input"
                    className="text-sm font-medium text-white/80 mb-2 flex items-center gap-2"
                  >
                    <FiMapPin className="text-amber-400" />
                    Location
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="location-input"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City or coordinates"
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 hover:bg-white/15"
                    />
                    <button
                      type="button"
                      onClick={getCurrentLocation}
                      className="px-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center"
                      title="Use current location"
                      aria-label="Use current location"
                    >
                      <FiMapPin className="h-5 w-5 text-amber-400 cursor-pointer" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                    <FiCalendar className="text-amber-400" />
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 hover:bg-white/15 [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>

                <button
                  onClick={calculateGoldenHour}
                  disabled={isLoading}
                  className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer ${
                    isLoading
                      ? "bg-amber-700 text-white/80 cursor-not-allowed"
                      : "bg-amber-600 hover:bg-amber-700 text-white"
                  } transition-all duration-200`}
                >
                  {isLoading ? "Calculating..." : "Calculate Golden Hours"}
                </button>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-red-300">{error}</p>
                  </div>
                )}
              </div>

              {/* Results */}
              <div>
                {results && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <p className="text-lg font-medium text-white">
                        Photography Times for{" "}
                        <span className="text-amber-400">
                          {results.location}
                        </span>
                      </p>
                      <p className="text-sm text-white/60">
                        {new Date(date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Sunrise */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                          <FiSun className="h-5 w-5 text-amber-400" />
                          <h3 className="font-medium text-white">Sunrise</h3>
                        </div>
                        <p className="text-2xl font-bold text-amber-400">
                          {results.sunrise}
                        </p>
                      </div>

                      {/* Sunset */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                          <FiMoon className="h-5 w-5 text-purple-400" />
                          <h3 className="font-medium text-white">Sunset</h3>
                        </div>
                        <p className="text-2xl font-bold text-purple-400">
                          {results.sunset}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Morning Golden Hour */}
                      <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-400/30">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-white flex items-center gap-2">
                            <FiSun className="text-amber-400" />
                            Morning Golden Hour
                          </h3>
                          <span className="text-amber-400 font-bold">
                            {results.goldenHourAM}
                          </span>
                        </div>
                        <p className="text-sm text-white/70">
                          Warm, soft light perfect for portraits and landscapes
                        </p>
                      </div>

                      {/* Evening Golden Hour */}
                      <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-400/30">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-white flex items-center gap-2">
                            <FiSun className="text-amber-400" />
                            Evening Golden Hour
                          </h3>
                          <span className="text-amber-400 font-bold">
                            {results.goldenHourPM}
                          </span>
                        </div>
                        <p className="text-sm text-white/70">
                          Beautiful warm tones with long shadows
                        </p>
                      </div>

                      {/* Blue Hour */}
                      <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/30">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-white flex items-center gap-2">
                            <FiMoon className="text-blue-400" />
                            Blue Hour
                          </h3>
                          <span className="text-blue-400 font-bold">
                            {results.blueHourAM} and {results.blueHourPM}
                          </span>
                        </div>
                        <p className="text-sm text-white/70">
                          Cool, diffused light ideal for cityscapes and moody
                          shots
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                        <FiClock className="text-amber-400" />
                        Photography Tips
                      </h3>
                      <ul className="text-sm text-white/70 space-y-2">
                        <li>• Arrive 15 minutes before golden hour begins</li>
                        <li>
                          • Use a tripod during blue hour for longer exposures
                        </li>
                        <li>
                          • Shoot in RAW format for better post-processing
                        </li>
                        <li>
                          • For portraits, position subjects facing the sun
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* How It Works */}
                {!results && (
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                      <FiSun className="text-amber-400" />
                      About Golden Hour
                    </h3>
                    <p className="text-sm text-white/70 mb-3">
                      Golden hour occurs shortly after sunrise and before sunset
                      when the sun is low in the sky, producing soft, warm light
                      with beautiful shadows.
                    </p>
                    <h5 className="text-sm font-medium text-white mt-3 mb-1">
                      Blue Hour
                    </h5>
                    <p className="text-sm text-white/70">
                      The period of twilight before sunrise and after sunset
                      when the sun is below the horizon, creating cool blue
                      tones.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
