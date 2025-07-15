// app/time-allocation/page.js
"use client";

import { useState, useEffect } from "react";
import { FiPieChart, FiPlus, FiTrash2, FiEdit2 } from "react-icons/fi";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

// Color palette matching your theme
const COLORS = [
  "#6366F1", // indigo-500
  "#8B5CF6", // purple-500
  "#EC4899", // pink-500
  "#F59E0B", // amber-500
  "#10B981", // emerald-500
  "#3B82F6", // blue-500
  "#F97316", // orange-500
  "#06B6D4", // cyan-500
];

export default function TimeAllocation() {
  const [categories, setCategories] = useState([
    { name: "Sleep", hours: 56, editable: false },
    { name: "Work", hours: 40, editable: true },
    { name: "Leisure", hours: 20, editable: true },
    { name: "Exercise", hours: 5, editable: true },
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [newHours, setNewHours] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Calculate total hours
  const totalHours = categories.reduce((sum, cat) => sum + cat.hours, 0);
  const remainingHours = 168 - totalHours;

  // Format data for pie chart
  const chartData = categories.map((cat) => ({
    name: cat.name,
    value: cat.hours,
    percentage: ((cat.hours / 168) * 100).toFixed(1) + "%",
  }));

  const addCategory = () => {
    if (newCategory && newHours && remainingHours >= Number(newHours)) {
      setCategories([
        ...categories,
        {
          name: newCategory,
          hours: Number(newHours),
          editable: true,
        },
      ]);
      setNewCategory("");
      setNewHours("");
    }
  };

  const updateCategory = (index, field, value) => {
    const updated = [...categories];
    updated[index][field] = field === "hours" ? Number(value) : value;
    setCategories(updated);
  };

  const deleteCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-4 sm:p-6">
      <div className="pt-20 pb-10">
        <div className="w-full mx-auto max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
            <div className="flex items-center justify-center gap-3">
              <FiPieChart className="h-8 w-8" />
              <h1 className="text-2xl sm:text-3xl font-bold">
                Weekly Time Allocation
              </h1>
            </div>
            <h2 className="text-indigo-100 text-center mt-2">
              Visualize how you spend your 168 hours each week
            </h2>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="h-80 lg:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percentage }) => `${name}: ${percentage}`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value} hours`, ""]}
                    contentStyle={{
                      background: "rgba(15, 23, 42, 0.9)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-medium text-white mb-4 flex items-center gap-2">
                  <FiPieChart />
                  Time Breakdown
                </h3>

                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-3 p-2 bg-white/5 rounded hover:bg-white/10 transition-colors"
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />

                      {editingIndex === index ? (
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            value={category.name}
                            onChange={(e) =>
                              updateCategory(index, "name", e.target.value)
                            }
                            className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 text-white"
                          />
                          <input
                            type="number"
                            value={category.hours}
                            onChange={(e) =>
                              updateCategory(index, "hours", e.target.value)
                            }
                            className="w-20 bg-white/10 border border-white/20 rounded px-2 py-1 text-white"
                          />
                          <button
                            onClick={() => setEditingIndex(null)}
                            className="text-white/70 hover:text-white"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="flex-1 flex justify-between items-center">
                          <span>
                            {category.name} -{" "}
                            <span className="text-indigo-300">
                              {category.hours}h
                            </span>
                            <span className="text-white/50 text-sm ml-2">
                              ({((category.hours / 168) * 100).toFixed(1)}%)
                            </span>
                          </span>
                          {category.editable && (
                            <div className="flex gap-2">
                              <button
                                onClick={() => setEditingIndex(index)}
                                aria-label="Edit menu"
                                className="text-white/50 hover:text-white cursor-pointer"
                              >
                                <FiEdit2 size={14} />
                              </button>
                              <button
                                onClick={() => deleteCategory(index)}
                                aria-label="Close menu"
                                className="text-white/50 hover:text-rose-400 cursor-pointer"
                              >
                                <FiTrash2 size={14} />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Total allocated:</span>
                    <span className="font-medium">{totalHours}h / 168h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Remaining:</span>
                    <span
                      className={`font-medium ${
                        remainingHours < 0
                          ? "text-rose-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {remainingHours}h
                    </span>
                  </div>
                </div>
              </div>

              {/* Add new category */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                  <FiPlus />
                  Add Activity
                </h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Activity name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-white/50"
                  />
                  <input
                    type="number"
                    placeholder="Hours"
                    value={newHours}
                    onChange={(e) => setNewHours(e.target.value)}
                    className="w-20 bg-white/10 border border-white/20 rounded px-3 py-2 text-white"
                  />
                  <button
                    onClick={addCategory}
                    disabled={
                      !newCategory ||
                      !newHours ||
                      remainingHours < Number(newHours)
                    }
                    className={`px-4 py-2 rounded ${
                      !newCategory ||
                      !newHours ||
                      remainingHours < Number(newHours)
                        ? "bg-white/5 text-white/30 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white"
                    }`}
                  >
                    Add
                  </button>
                </div>
                {remainingHours < Number(newHours) && (
                  <p className="text-rose-400 text-sm mt-2">
                    Exceeds remaining {remainingHours}h
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Tips section */}
          <div className="bg-white/5 border-t border-white/10 p-6">
            <h3 className="font-medium text-white mb-3">
              Tips for Better Time Management
            </h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Aim for 7-9 hours of sleep daily (49-63h weekly)</li>
              <li>• Limit work to 40-50 hours per week to prevent burnout</li>
              <li>• Schedule at least 10h weekly for exercise and self-care</li>
              <li>
                • Track where your time actually goes vs where you want it to go
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
