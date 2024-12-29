import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'

const products = [
  { name: "Dumbbells", priceFiat: "$50", priceTokens: "10 Tokens", image: "https://source.unsplash.com/random/800x600/?dumbbells" },
  { name: "Protein Powder", priceFiat: "$30", priceTokens: "6 Tokens", image: "https://source.unsplash.com/random/800x600/?protein" },
  { name: "Fitness Clothes", priceFiat: "$40", priceTokens: "8 Tokens", image: "https://source.unsplash.com/random/800x600/?fitness-clothes" }
]

function Shop() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-gray-900"
          >
            Shop
          </motion.h1>
          <div className="bg-white px-4 py-2 rounded-lg shadow">
            <span className="text-primary font-semibold">20 Tokens Available</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop