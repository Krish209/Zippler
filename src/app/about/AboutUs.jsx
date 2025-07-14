// app/about/AboutUs.jsx

"use client";

import { motion } from "framer-motion";
import { FiClock, FiUsers, FiCode, FiHeart, FiAward } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";

export default function AboutUs() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      bio: "Time management enthusiast with a passion for building useful tools.",
      funFact:
        "Can calculate time differences in my head for any two timezones.",
    },
    {
      name: "Samira Khan",
      role: "UI/UX Designer",
      bio: "Creates beautiful interfaces that make complex calculations simple.",
      funFact: "Organizes my entire life using the tools I helped design.",
    },
    {
      name: "Jamie Chen",
      role: "Frontend Developer",
      bio: "Turns designs into functional, animated experiences.",
      funFact: "Built my first clock app when I was 12 years old.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      event: "Concept Born",
      icon: <FaRegLightbulb className="text-amber-400" />,
    },
    {
      year: "2021",
      event: "First Tool Launched",
      icon: <FiClock className="text-blue-400" />,
    },
    {
      year: "2022",
      event: "10,000 Users",
      icon: <FiUsers className="text-emerald-400" />,
    },
    {
      year: "2023",
      event: "Featured in Tech Blogs",
      icon: <FiAward className="text-purple-400" />,
    },
    {
      year: "2024",
      event: "15+ Time Tools",
      icon: <FiCode className="text-indigo-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900">
      <div className="pt-20 pb-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-10 sm:pt-16 pb-10 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-indigo-400">Zippler</span>
              </h1>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                We build precise, beautiful time calculators to help you master
                your schedule
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Zippler began as a simple sleep calculator built by
                      founder Alex Johnson to solve his own struggles with
                      waking up refreshed. What started as a personal project
                      quickly grew into a suite of time-related tools used by
                      thousands worldwide.
                    </p>
                    <p>
                      We believe that understanding and managing time should be
                      effortless. Our calculators remove the complexity from
                      time calculations, letting you focus on what matters most.
                    </p>
                    <p>
                      Every tool we build is designed with precision, beauty,
                      and simplicity in mind. We obsess over details to create
                      experiences that feel magical to use.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-8 border border-white/10 h-full flex items-center justify-center">
                  <FiHeart className="h-24 w-24 text-pink-400/30" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Milestones */}
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
                Our Journey
              </h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                Key moments in our development
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-full max-w-md ${
                        index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                      } bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all duration-300`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-2 bg-white/10 rounded-lg">
                          {milestone.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {milestone.event}
                        </h3>
                      </div>
                      <div className="text-indigo-300 font-medium">
                        {milestone.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Meet The Team
              </h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                The passionate people behind Zippler
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full bg-indigo-500/10 mb-4 flex items-center justify-center text-2xl font-bold text-indigo-300">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-300 mb-4">{member.role}</p>
                  <p className="text-white/80 mb-4">{member.bio}</p>
                  <div className="text-sm text-white/60">
                    <span className="font-medium">Fun fact: </span>
                    {member.funFact}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-10 sm:py-20 bg-gradient-to-br from-indigo-900/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <FiClock className="h-12 w-12 text-indigo-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-indigo-200 max-w-4xl mx-auto">
                  To create the most accurate, beautiful, and easy-to-use time
                  calculation tools that help people around the world make the
                  most of their time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
