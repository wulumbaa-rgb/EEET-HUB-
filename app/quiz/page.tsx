'use client'
import { useState } from 'react'
import jsPDF from 'jspdf'

const questions = {
  beginner: [{q:'Ohm Law?', a:['V=IR','V=I+R','V=I/R'], c:0},{q:'Unit of Power?', a:['Watt','Volt','Amp'], c:0}],
  intermediate: [{q:'Hartley uses?', a:['LC Tank','RC','RL'], c:0}],
  advanced: [{q:'Colpitts feedback?', a:['Capacitive','Inductive','Resistive'], c:0}]
}

export default function Quiz(){
  const [level,setLevel]=useState<'beginner'|'intermediate'|'advanced'>('beginner')
  const [idx,setIdx]=useState(0); const [score,setScore]=useState(0); const [done,setDone]=useState(false)
  const qs = questions[level]

  const answer = (i:number)=>{
    if(i===qs[idx].c) setScore(s=>s+1)
    if(idx+1 < qs.length) setIdx(idx+1)
    else setDone(true)
  }

  const downloadCert = ()=>{
    const doc = new jsPDF()
    doc.text('EEET HUB Certificate',20,20)
    doc.text(`Level: ${level}`,20,30)
    doc.text(`Score: ${score}/${qs.length}`,20,40)
    doc.text('Issued by Wulumba Andrew - Founder EEET HUB',20,50)
    doc.save('EEET-HUB-Certificate.pdf')
  }

  if(done) return <div className="max-w-xl mx-auto p-10 text-center"><h1 className="text-2xl font-bold">Done! Score {score}/{qs.length}</h1><button onClick={downloadCert} className="bg-green-600 text-white px-6 py-2 rounded mt-4">Download PDF Certificate</button><button onClick={()=>{setDone(false);setIdx(0);setScore(0)}} className="block mx-auto mt-3 underline">Restart</button></div>

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Quiz</h1>
      <div className="flex gap-2 mt-4">{['beginner','intermediate','advanced'].map(l=><button key={l} onClick={()=>{setLevel(l as any);setIdx(0);setScore(0)}} className={`px-3 py-1 rounded ${level===l?'bg-green-600 text-white':'bg-gray-200'}`}>{l}</button>)}</div>
      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <p className="font-semibold">{qs[idx].q}</p>
        <div className="mt-3 grid gap-2">{qs[idx].a.map((opt,i)=><button key={i} onClick={()=>answer(i)} className="border p-2 rounded text-left hover:bg-gray-50">{opt}</button>)}</div>
        <p className="mt-4 text-sm text-gray-500">{idx+1}/{qs.length}</p>
      </div>
    </div>
  )
}
