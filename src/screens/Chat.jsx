import React from 'react'
import SimpleForm from '../components/ChatBot'
import { Navbar } from '../components/Navbar'

export const Chat = () => {
  return (
    <div className="bg-green-200 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center h-[90vh]">
        <SimpleForm />
      </div>
    </div>
  )
}
