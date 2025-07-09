// app/contact/Contact.jsx

"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <FiMail className="h-6 w-6 text-indigo-400" />,
      title: "Email Us",
      details: "support@timetools.com",
      action: "mailto:support@timetools.com",
    },
    {
      icon: <FiPhone className="h-6 w-6 text-blue-400" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: <FiMapPin className="h-6 w-6 text-emerald-400" />,
      title: "Visit Us",
      details: "123 Time Street, Chronoville",
      action: "https://maps.google.com",
    },
    {
      icon: <FiClock className="h-6 w-6 text-amber-400" />,
      title: "Support Hours",
      details: "Mon-Fri: 9AM - 5PM (GMT)",
      action: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-10 sm:pt-16 pb-10 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="text-indigo-400">Zippler</span>
              </h1>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                We'd love to hear from you! Reach out for support, feedback, or
                partnerships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {method.title}
                    </h3>
                  </div>
                  <p className="text-white/80 mb-4">{method.details}</p>
                  {method.action && (
                    <a
                      href={method.action}
                      className="text-indigo-300 hover:text-indigo-200 text-sm font-medium transition-colors"
                    >
                      Contact via {method.title.split(" ")[0]} →
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-white/80 mb-8">
                    Have questions about our tools or suggestions for new
                    features? Fill out the form and our team will get back to
                    you as soon as possible.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Typically respond within 24 hours",
                      "All inquiries are confidential",
                      "We read every message we receive",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                        </div>
                        <p className="text-white/70">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 hover:bg-white/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 hover:bg-white/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 hover:bg-white/15"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${
                        isSubmitting
                          ? "bg-indigo-700"
                          : "bg-indigo-600 hover:bg-indigo-700"
                      } text-white transition-all duration-200`}
                    >
                      <FiSend className="h-4 w-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>

                    {submitMessage && (
                      <div className="text-emerald-400 text-sm">
                        {submitMessage}
                      </div>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 sm:py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                Quick answers to common inquiries
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How do I suggest a new time calculation tool?",
                  answer:
                    "We welcome all suggestions! Use our contact form above to share your idea. Our team reviews every suggestion and prioritizes based on user demand.",
                },
                {
                  question:
                    "Are your time calculations accurate across timezones?",
                  answer:
                    "Absolutely! All our time-related tools account for timezone differences and daylight saving time where applicable.",
                },
                {
                  question: "Is Time Tools free to use?",
                  answer:
                    "Yes, all our current tools are completely free to use with no hidden costs. We may offer premium features in the future but will always maintain free access to core functionality.",
                },
                {
                  question: "Can I integrate your tools into my website?",
                  answer:
                    "We're working on an API for developers. In the meantime, you can link directly to our tools or contact us about potential partnerships.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-white/70">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
