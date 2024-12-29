import React from 'react'
import { motion } from 'framer-motion'

function LeaderboardRow({ rank, username, plan, score }) {
  const isTopThree = rank <= 3
  
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${isTopThree ? 'bg-green-50' : ''}`}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`${isTopThree ? 'text-primary font-bold' : ''}`}>
          {rank}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{username}</td>
      <td className="px-6 py-4 whitespace-nowrap">{plan}</td>
      <td className="px-6 py-4 whitespace-nowrap font-semibold">{score}</td>
    </motion.tr>
  )
}

export default LeaderboardRow