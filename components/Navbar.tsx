'use client'
import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-green-700">EEET HUB</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/library">Library</Link>
          <Link href="/calculators">Calculators</Link>
          <Link href="/quiz">Quiz</Link>
          <Link href="/forum">Forum</Link>
        </div>
      </div>
    </nav>
  )
}
