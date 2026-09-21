'use client'
import { useState } from 'react'
export default function Calculators(){
  const [v,setV]=useState(0); const [i,setI]=useState(0); const [r,setR]=useState(0);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">EEET Calculators</h1>
      <div className="grid gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Ohm Law V=I*R</h3>
          <div className="flex gap-2 mt-3">
            <input type="number" placeholder="V" value={v} onChange={e=>setV(+e.target.value)} className="border p-2 w-20 rounded"/>
            <input type="number" placeholder="I" value={i} onChange={e=>setI(+e.target.value)} className="border p-2 w-20 rounded"/>
            <input type="number" placeholder="R" value={r} onChange={e=>setR(+e.target.value)} className="border p-2 w-20 rounded"/>
          </div>
          <p className="mt-3 text-sm">Result: V={i*r} | I={r? v/r : 0} | R={i? v/i : 0}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Power P=V*I</h3>
          <p className="text-sm mt-2">Power = {v*i} Watts</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold">Hartley Oscillator f=1/(2π√LC)</h3>
          <p className="text-sm mt-2">Enter in next update, working.</p>
        </div>
      </div>
    </div>
  )
}
