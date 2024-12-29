import React from 'react'
import { motion } from 'framer-motion'

function PlanCard({ title, duration, intensity, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-gray-600 mb-4">
          <p>Duration: {duration}</p>
          <p>Intensity: {intensity}</p>
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
          Select Plan
        </button>
      </div>
    </motion.div>
  )
}

export default PlanCard