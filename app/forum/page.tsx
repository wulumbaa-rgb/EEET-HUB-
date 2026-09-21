'use client'
import { useState,useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export default function Forum(){
  const [posts,setPosts]=useState<any[]>([]); const [text,setText]=useState('')
  useEffect(()=>{ getDocs(collection(db,'forum')).then(s=>setPosts(s.docs.map(d=>d.data()))) },[])
  const send = async()=>{
    if(!text) return
    await addDoc(collection(db,'forum'),{text, date:new Date().toISOString()})
    setText(''); alert('Posted!'); location.reload()
  }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Forum</h1>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Ask a question..." className="border w-full p-3 rounded mt-4"/>
      <button onClick={send} className="bg-green-600 text-white px-4 py-2 rounded mt-2">Post</button>
      <div className="mt-6 grid gap-3">{posts.map((p,i)=><div key={i} className="bg-white p-4 rounded shadow"><p>{p.text}</p><p className="text-xs text-gray-400 mt-1">{new Date(p.date).toLocaleString()}</p></div>)}</div>
    </div>
  )
}
