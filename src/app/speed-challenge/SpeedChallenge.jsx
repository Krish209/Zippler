// app/speed-challenge/SpeedChallenge.jsx

'use client';

import { useState, useEffect, useRef } from 'react';
import { FiFlag, FiPlay, FiPause, FiRotateCcw, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function SpeedChallenge() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const timerRef = useRef(null);

  // Target time (10.00 seconds)
  const TARGET_TIME = 10.00;

  // Start the stopwatch
  const startStopwatch = () => {
    setIsRunning(true);
    const startTime = Date.now() - time * 1000;
    
    timerRef.current = setInterval(() => {
      setTime((Date.now() - startTime) / 1000);
    }, 10);
  };

  // Stop the stopwatch
  const stopStopwatch = () => {
    if (!isRunning) return;
    
    clearInterval(timerRef.current);
    setIsRunning(false);
    
    // Calculate score
    const difference = Math.abs(TARGET_TIME - time);
    const score = Math.max(0, 100 - Math.round(difference * 100));
    
    setAttempts(prev => [
      { time, difference, score, timestamp: new Date() },
      ...prev.slice(0, 9) // Keep only last 10 attempts
    ]);
    
    setShowResult(true);
  };

  // Reset the stopwatch
  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    setShowResult(false);
  };

  // Format time display (00:00.00)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(2);
    return `${mins.toString().padStart(2, '0')}:${secs.padStart(5, '0')}`;
  };

  // Clean up intervals on unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // Get best attempt
  const bestAttempt = attempts.length > 0 
    ? attempts.reduce((best, current) => 
        current.score > best.score ? current : best
      ) 
    : null;

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-2">
            <FiAward className="h-8 w-8" />
            Stopwatch Challenge
          </h1>
          <p className="text-indigo-100 text-center mt-2">
            Try to stop at exactly {TARGET_TIME.toFixed(2)} seconds!
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-8">
          {/* Stopwatch Display */}
          <div className="text-center">
            <motion.div
              key="time"
              className={`text-7xl font-mono font-bold ${
                isRunning ? 'text-white' : 
                showResult ? (Math.abs(time - TARGET_TIME) < 0.1 ? 'text-emerald-400' : 'text-rose-400') : 
                'text-white'
              } h-32 flex items-center justify-center`}
            >
              {formatTime(time)}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            {!isRunning && time === 0 && (
              <button
                onClick={startStopwatch}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center gap-2"
              >
                <FiPlay /> Start
              </button>
            )}

            {isRunning && (
              <button
                onClick={stopStopwatch}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg flex items-center gap-2"
              >
                <FiFlag /> Stop
              </button>
            )}

            {(time > 0 || isRunning) && (
              <button
                onClick={resetStopwatch}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg flex items-center gap-2"
              >
                <FiRotateCcw /> Reset
              </button>
            )}
          </div>

          {/* Results */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg border ${
                Math.abs(time - TARGET_TIME) < 0.1
                  ? 'bg-emerald-500/10 border-emerald-400/30'
                  : 'bg-rose-500/10 border-rose-400/30'
              }`}
            >
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">
                  {Math.abs(time - TARGET_TIME) < 0.1 ? (
                    <span className="text-emerald-400">Perfect Stop! 🎯</span>
                  ) : (
                    <span className="text-rose-400">Nice Try!</span>
                  )}
                </h3>
                <p className="text-sm">
                  You stopped at {time.toFixed(2)}s ({Math.abs(TARGET_TIME - time).toFixed(2)}s {time > TARGET_TIME ? 'over' : 'under'})
                </p>
                <p className="text-lg font-bold mt-2">
                  Score: <span className="text-amber-400">{Math.max(0, 100 - Math.round(Math.abs(TARGET_TIME - time) * 100))}</span>/100
                </p>
              </div>
            </motion.div>
          )}

          {/* Best Scores */}
          {attempts.length > 0 && (
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h3 className="font-medium text-white/90 mb-3 flex items-center gap-2">
                <FiAward className="text-amber-400" /> Your Best Attempts
              </h3>
              <div className="space-y-2">
                {attempts.slice(0, 3).map((attempt, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <span className="text-white/80">{attempt.time.toFixed(2)}s</span>
                      <span className="text-xs text-white/60 ml-2">
                        ({Math.abs(TARGET_TIME - attempt.time).toFixed(2)}s {attempt.time > TARGET_TIME ? 'over' : 'under'})
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      attempt.score >= 90 ? 'bg-emerald-500/20 text-emerald-400' :
                      attempt.score >= 50 ? 'bg-amber-500/20 text-amber-400' :
                      'bg-rose-500/20 text-rose-400'
                    }`}>
                      {attempt.score}/100
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How to Play */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h3 className="font-medium text-white/90 mb-2">How to Play</h3>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• Click "Start" to begin the stopwatch</li>
              <li>• Press "Stop" when you think it's exactly 10.00 seconds</li>
              <li>• The closer you are, the higher your score (100 = perfect)</li>
              <li>• Your best attempts are saved during this session</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}