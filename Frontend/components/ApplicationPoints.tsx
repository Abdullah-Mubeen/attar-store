"use client";

import { motion } from "framer-motion";

export const NeckPoints = () => (
  <svg
    width="200"
    height="250"
    viewBox="0 0 200 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <motion.path
      d="M80 180C80 180 75 150 75 130C75 110 85 100 100 100C115 100 125 110 125 130C125 150 120 180 120 180"
      stroke="#9b692e"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5 }}
    />
    <motion.circle
      cx="85"
      cy="140"
      r="4"
      fill="#f0d173"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ delay: 1, duration: 0.5 }}
    />
    <motion.circle
      cx="115"
      cy="140"
      r="4"
      fill="#f0d173"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ delay: 1.2, duration: 0.5 }}
    />
  </svg>
);

export const WristPoints = () => (
  <svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <motion.path
      d="M40 50C40 50 60 40 100 40C140 40 160 50 160 50"
      stroke="#9b692e"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5 }}
    />
    <motion.circle
      cx="100"
      cy="45"
      r="4"
      fill="#f0d173"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ delay: 1, duration: 0.5 }}
    />
  </svg>
);

export const ClothingPoints = () => (
  <svg
    width="200"
    height="250"
    viewBox="0 0 200 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <motion.path
      d="M60 50C60 50 80 80 100 80C120 80 140 50 140 50L130 200L70 200L60 50Z"
      stroke="#9b692e"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5 }}
    />
    <motion.circle
      cx="85"
      cy="120"
      r="4"
      fill="#f0d173"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ delay: 1, duration: 0.5 }}
    />
    <motion.circle
      cx="115"
      cy="120"
      r="4"
      fill="#f0d173"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ delay: 1.2, duration: 0.5 }}
    />
    <motion.circle
      cx="100"
      cy="160"
      r="4"
      fill="#f0d173"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ delay: 1.4, duration: 0.5 }}
    />
  </svg>
);

export const SprayCloud = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <motion.path
      d="M60 100C60 100 80 90 100 90C120 90 140 100 140 100"
      stroke="#9b692e"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.circle
      cx="100"
      cy="100"
      r="30"
      stroke="#f0d173"
      strokeWidth="2"
      strokeDasharray="5 5"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1.5, opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);