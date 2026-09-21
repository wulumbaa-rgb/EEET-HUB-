'use client'
import { useState } from 'react'
import { ADMIN_EMAIL } from '@/lib/firebase'

export default function Admin(){
  const [email,setEmail]=useState('')
  const isAdmin = email===ADMIN_EMAIL
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter admin email" className="border p-2 w-full mt-4 rounded"/>
      {isAdmin? <div className="mt-6 bg-green-50 p-4 rounded border border-green-200"><p className="font-bold text-green-700">Welcome Admin Wulumba Andrew!</p><p className="text-sm mt-2">You can manage uploads via Library. You can also delete materials from Firebase Console.</p><p className="text-sm mt-2">Email: {ADMIN_EMAIL} | WhatsApp: 09026966549</p></div> : <p className="mt-4 text-sm text-gray-500">Enter admin email to unlock.</p>}
    </div>
  )
}
