import React from 'react'
import { motion } from 'framer-motion'
import LeaderboardRow from '../components/LeaderboardRow'

const leaderboardData = [
  { rank: 1, username: "Alice", plan: "Beginner", score: 150 },
  { rank: 2, username: "Bob", plan: "Intermediate", score: 130 },
  { rank: 3, username: "Charlie", plan: "Advanced", score: 120 }
]

function Leaderboard() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Leaderboard
        </motion.h1>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderboardData.map((entry, index) => (
                <LeaderboardRow key={index} {...entry} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard