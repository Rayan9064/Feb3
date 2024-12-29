import React from 'react'
import { motion } from 'framer-motion'
import CartItem from '../components/CartItem'

const cartItems = [
  { name: "Dumbbells", quantity: 1, price: "$50" },
  { name: "Protein Powder", quantity: 1, price: "$30" }
]

function Cart() {
  const total = "$80"

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          Your Cart
        </motion.h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} onRemove={() => {}} />
          ))}
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-primary">{total}</span>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart