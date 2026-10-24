import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="text-gray-800">
      {/* NAVBAR */}
      <header className="bg-white border-b border-gray-100">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-bold text-slate-800">
            CREATE<span className="text-[#FF5C35]">X</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-gray-700 hover:text-[#FF5C35]">Home</Link>
            <Link to="/about" className="text-[#FF5C35] font-semibold">About Us</Link>
          </div>
          <button className="bg-[#FF5C35] text-white px-4 py-2 rounded text-sm">Get consultation</button>
        </nav>
      </header>

      {/* ABOUT US */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-4 py-16">
        <div>
          <p className="text-xs text-gray-400 uppercase">About us</p>
          <h1 className="text-3xl font-bold mb-4">Createx Online School</h1>
          <p className="text-sm text-gray-500">
            Createx Online School is a leader in online studying. We have lots of courses and
            programs from the main market sectors.
          </p>
          <div className="flex gap-3 mt-6">
            <button className="border border-[#FF5C35] text-[#FF5C35] px-5 py-2 rounded text-sm">Explore events</button>
            <Link to="/" className="bg-[#FF5C35] text-white px-5 py-2 rounded text-sm">Back to home</Link>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" alt="about" className="rounded-2xl w-full h-72 object-cover" />
      </section>

      {/* VIDEO + STATS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center px-4 pb-20">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" alt="video" className="md:col-span-2 rounded-lg w-full h-72 object-cover" />
        <div className="space-y-4">
          <div className="flex items-baseline gap-3"><span className="text-3xl font-bold text-[#FF5C35]">1200</span><span className="text-sm text-gray-500">students graduated</span></div>
          <div className="flex items-baseline gap-3"><span className="text-3xl font-bold text-[#FF5C35]">84</span><span className="text-sm text-gray-500">completed courses</span></div>
          <div className="flex items-baseline gap-3"><span className="text-3xl font-bold text-[#FF5C35]">16</span><span className="text-sm text-gray-500">qualified tutors</span></div>
          <div className="flex items-baseline gap-3"><span className="text-3xl font-bold text-[#FF5C35]">5</span><span className="text-sm text-gray-500">years of experience</span></div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-6xl mx-auto px-4 pb-20 text-center">
        <p className="text-xs text-gray-400 uppercase">We always stand for</p>
        <h2 className="text-3xl font-bold mb-8">Our core values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div><div className="w-12 h-12 rounded-full bg-pink-100 mx-auto mb-3" /><h3 className="font-semibold text-sm">Structural Approach</h3><p className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</p></div>
          <div><div className="w-12 h-12 rounded-full bg-pink-100 mx-auto mb-3" /><h3 className="font-semibold text-sm">Professional Feedback</h3><p className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</p></div>
          <div><div className="w-12 h-12 rounded-full bg-pink-100 mx-auto mb-3" /><h3 className="font-semibold text-sm">Efficiency</h3><p className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</p></div>
          <div><div className="w-12 h-12 rounded-full bg-pink-100 mx-auto mb-3" /><h3 className="font-semibold text-sm">Flexible Schedule</h3><p className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</p></div>
        </div>
      </section>

      {/* WHAT DO WE TEACH */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <p className="text-xs text-gray-400 uppercase text-center">Our main directions</p>
        <h2 className="text-3xl font-bold text-center mb-8">What do we teach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="shadow rounded-lg overflow-hidden"><div className="bg-pink-300 h-36" /><div className="p-4"><span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Marketing</span><p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet.</p></div></div>
          <div className="shadow rounded-lg overflow-hidden"><div className="bg-teal-300 h-36" /><div className="p-4"><span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Management</span><p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet.</p></div></div>
          <div className="shadow rounded-lg overflow-hidden"><div className="bg-blue-300 h-36" /><div className="p-4"><span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">HR & Recruiting</span><p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet.</p></div></div>
          <div className="shadow rounded-lg overflow-hidden"><div className="bg-gray-300 h-36" /><div className="p-4"><span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">Design</span><p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet.</p></div></div>
          <div className="shadow rounded-lg overflow-hidden"><div className="bg-slate-700 h-36" /><div className="p-4"><span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">Development</span><p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet.</p></div></div>
          <div className="bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-500 p-6">New studying program coming soon...</div>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <p className="text-xs text-gray-400 uppercase">Studying process</p>
        <h2 className="text-3xl font-bold mb-8">That's how we do it</h2>
        <div className="space-y-5 border-l-2 border-[#FF5C35] pl-6">
          <div><p className="text-xs text-[#FF5C35]">Step 1</p><h3 className="font-semibold">Watching online video lectures</h3></div>
          <div><p className="text-xs text-[#FF5C35]">Step 2</p><h3 className="font-semibold">Passing test</h3></div>
          <div><p className="text-xs text-[#FF5C35]">Step 3</p><h3 className="font-semibold">Curator's feedback</h3></div>
          <div><p className="text-xs text-[#FF5C35]">Step 4</p><h3 className="font-semibold">Corrections if needed</h3></div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs text-gray-400 uppercase text-center">Meet tutors are all here</p>
          <h2 className="text-3xl font-bold text-center mb-8">Meet our team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="text-center"><img src="https://i.pravatar.cc/300?img=47" alt="" className="w-full h-52 object-cover bg-yellow-400" /><h3 className="font-semibold mt-3 text-sm">Dianne Russell</h3><p className="text-xs text-gray-500">Founder and CEO</p></div>
            <div className="text-center"><img src="https://i.pravatar.cc/300?img=12" alt="" className="w-full h-52 object-cover bg-yellow-400" /><h3 className="font-semibold mt-3 text-sm">Jerome Bell</h3><p className="text-xs text-gray-500">Program Director</p></div>
            <div className="text-center"><img src="https://i.pravatar.cc/300?img=45" alt="" className="w-full h-52 object-cover bg-yellow-400" /><h3 className="font-semibold mt-3 text-sm">Kristin Watson</h3><p className="text-xs text-gray-500">Marketing Curator</p></div>
            <div className="text-center"><img src="https://i.pravatar.cc/300?img=33" alt="" className="w-full h-52 object-cover bg-yellow-400" /><h3 className="font-semibold mt-3 text-sm">Marvin McKinney</h3><p className="text-xs text-gray-500">PR Curator</p></div>
            <div className="text-center"><img src="https://i.pravatar.cc/300?img=15" alt="" className="w-full h-52 object-cover bg-yellow-400" /><h3 className="font-semibold mt-3 text-sm">Leslie Alexander</h3><p className="text-xs text-gray-500">HR Curator</p></div>
            <div className="text-center"><img src="https://i.pravatar.cc/300?img=49" alt="" className="w-full h-52 object-cover bg-yellow-400" /><h3 className="font-semibold mt-3 text-sm">Kathryn Murphy</h3><p className="text-xs text-gray-500">Analyst</p></div>
            <div className="text-center"><img src="https://i.pravatar.cc/300?img=52" alt="" className="w-full h-52 object-cover bg-yellow-400" /><h3 className="font-semibold mt-3 text-sm">Brooklyn Simmons</h3><p className="text-xs text-gray-500">Development Curator</p></div>
            <div className="text-center"><img src="https://i.pravatar.cc/300?img=11" alt="" className="w-full h-52 object-cover bg-yellow-400" /><h3 className="font-semibold mt-3 text-sm">Cody Fisher</h3><p className="text-xs text-gray-500">UX Designer</p></div>
          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <p className="text-xs text-gray-400 uppercase">Our blog</p>
        <h2 className="text-3xl font-bold mb-8">Latest posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div><div className="bg-blue-200 h-44 rounded-lg" /><p className="text-xs text-gray-400 mt-3">Marketing</p><h3 className="font-semibold text-sm">What is traffic arbitrage and does it really make money?</h3></div>
          <div><div className="bg-green-200 h-44 rounded-lg" /><p className="text-xs text-gray-400 mt-3">Management</p><h3 className="font-semibold text-sm">What to do and who to talk to if you want to get feedback</h3></div>
          <div><div className="bg-yellow-100 h-44 rounded-lg" /><p className="text-xs text-gray-400 mt-3">Design</p><h3 className="font-semibold text-sm">Should you choose a creative profession?</h3></div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="bg-gradient-to-b from-[#FFD9D0] to-[#FFE8E2] py-16 text-center px-4">
        <p className="text-xs text-gray-500 uppercase">Don't miss anything</p>
        <h3 className="text-3xl font-bold mb-6">Subscribe to the Createx School announcements</h3>
        <div className="flex justify-center gap-2">
          <input type="email" placeholder="Your working email" className="bg-white px-4 py-2 rounded w-72 outline-none" />
          <button className="bg-[#FF5C35] text-white px-5 py-2 rounded">Subscribe</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F2133] text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-white font-bold text-lg mb-2">CREATEX</h4>
            <p>Createx Online School is a leader in online studying.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Site map</h5>
            <ul className="space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Contact us</h5>
            <p>(405) 555-0128</p>
            <p>hello@createx.com</p>
          </div>
        </div>
        <p className="text-center text-xs mt-10">© All rights reserved. Made with love by Createx Studio</p>
      </footer>
    </div>
  )
}