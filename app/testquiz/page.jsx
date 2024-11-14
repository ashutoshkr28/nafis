import Quiz from '@/components/Quiz'
import React from 'react'

const Testquiz = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Quiz App</h1>
      <Quiz />
    </div>
  )
}

export default Testquiz
