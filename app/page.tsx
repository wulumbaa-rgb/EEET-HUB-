import Link from 'next/link'
export default function Home(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-green-700">Welcome to EEET HUB</h1>
      <p className="mt-4 text-gray-600 max-w-2xl">Your all-in-one companion for Electrical/Electronic Engineering Technology. Download materials, calculate circuits, test yourself with quiz and discuss with mates. Founder: Wulumba Andrew</p>
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        <Link href="/library" className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold">Library</h3><p className="text-sm text-gray-500 mt-1">Upload & preview PDFs</p></Link>
        <Link href="/calculators" className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold">Calculators</h3><p className="text-sm text-gray-500 mt-1">Ohm, Power, Hartley</p></Link>
        <Link href="/quiz" className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold">Quiz</h3><p className="text-sm text-gray-500 mt-1">3 levels + Certificate</p></Link>
        <Link href="/forum" className="bg-white p-6 rounded-xl shadow"><h3 className="font-bold">Forum</h3><p className="text-sm text-gray-500 mt-1">Ask & answer</p></Link>
      </div>
    </div>
  )
}
