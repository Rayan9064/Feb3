import React from 'react'
import { motion } from 'framer-motion'

function ProductCard({ name, priceFiat, priceTokens, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="space-y-1 mb-4">
          <p className="text-gray-600">{priceFiat}</p>
          <p className="text-primary">{priceTokens}</p>
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
          Buy Now
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard