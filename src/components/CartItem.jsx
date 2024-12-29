import React from 'react'
import { motion } from 'framer-motion'

function CartItem({ name, quantity, price, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-between p-4 border-b"
    >
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600">Quantity: {quantity}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-semibold">{price}</p>
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </motion.div>
  )
}

export default CartItem