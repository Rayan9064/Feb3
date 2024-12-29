import React from 'react'
import { motion } from 'framer-motion'
import PlanCard from '../components/PlanCard'

const plans = [
  { title: "Beginner", duration: "30 mins", intensity: "Low", image: "https://source.unsplash.com/random/800x600/?fitness-beginner" },
  { title: "Intermediate", duration: "45 mins", intensity: "Medium", image: "https://source.unsplash.com/random/800x600/?fitness-intermediate" },
  { title: "Advanced", duration: "60 mins", intensity: "High", image: "https://source.unsplash.com/random/800x600/?fitness-advanced" }
]

function Plans() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900">Choose Your Plan</h1>
          <p className="mt-4 text-xl text-gray-600">Select a plan that matches your fitness level</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Plans