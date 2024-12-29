import React from 'react'
import { motion } from 'framer-motion'

const userData = {
  username: "John Doe",
  walletAddress: "0x1234...",
  selectedPlan: { title: "Beginner", coach: "Jane Smith", progress: 70 },
  partner: "Alice"
}

function Profile() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          {/* User Details */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">Username:</span> {userData.username}</p>
              <p><span className="font-semibold">Wallet:</span> {userData.walletAddress}</p>
            </div>
          </div>

          {/* Selected Plan */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Current Plan</h2>
            <div className="space-y-4">
              <p><span className="font-semibold">Plan:</span> {userData.selectedPlan.title}</p>
              <p><span className="font-semibold">Coach:</span> {userData.selectedPlan.coach}</p>
              <div>
                <p className="font-semibold mb-2">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${userData.selectedPlan.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{userData.selectedPlan.progress}% Complete</p>
              </div>
            </div>
          </div>

          {/* Staking Partner */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Staking Partner</h2>
            <p><span className="font-semibold">Partner:</span> {userData.partner}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile