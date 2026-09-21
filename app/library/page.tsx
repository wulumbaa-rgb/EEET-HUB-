'use client'
import { useState, useEffect } from 'react'
import { db, storage, ADMIN_EMAIL } from '@/lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default function Library(){
  const [files,setFiles]=useState<any[]>([])
  const [email,setEmail]=useState('')
  useEffect(()=>{ getDocs(collection(db,'materials')).then(s=>setFiles(s.docs.map(d=>d.data()))) },[])
  const isAdmin = email.toLowerCase() === ADMIN_EMAIL

  const upload = async(e:any)=>{
    const file=e.target.files[0]
    const r=ref(storage,'materials/'+file.name)
    await uploadBytes(r,file)
    const url=await getDownloadURL(r)
    await addDoc(collection(db,'materials'),{name:file.name, url, date:new Date().toISOString()})
    alert('Uploaded!')
    location.reload()
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Library</h1>
      <input placeholder="Type your admin email to unlock upload" className="border p-2 rounded w-full mt-4" value={email} onChange={e=>setEmail(e.target.value)} />
      {isAdmin && <div className="mt-4"><input type="file" onChange={upload} className="bg-green-600 text-white p-2 rounded"/></div>}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {files.map((f,i)=><div key={i} className="bg-white p-4 rounded shadow"><p className="font-bold">{f.name}</p><a href={f.url} target="_blank" className="text-blue-600 text-sm underline">Preview / Download</a></div>)}
      </div>
      {!files.length && <p className="text-gray-500 mt-6">No files yet. As Admin you can upload.</p>}
    </div>
  )
    }
