export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-white text-lg">EEET HUB</h3>
          <p className="mt-2 text-sm">All-in-one for EEET students</p>
          <p className="mt-3 text-sm"><b>Founder:</b> Wulumba Andrew</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <a href="https://wa.me/2349026966549" target="_blank" className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm">WhatsApp: 09026966549</a>
          <div className="mt-3"><a href="mailto:wulumbaandrew@gmail.com" className="text-sm underline">wulumbaandrew@gmail.com</a></div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-800 text-xs">© 2026 EEET HUB - Built by Wulumba Andrew</div>
    </footer>
  )
}
