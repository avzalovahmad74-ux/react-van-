import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API = 'https://to-dos-api.softclub.tj'

export default function Home() {
  return (
    <div className="text-gray-800">
      
      <header className="bg-white border-b border-gray-100">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-bold text-slate-800">
            CREATE<span className="text-[#FF5C35]">X</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-[#FF5C35] font-semibold">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#FF5C35]">About Us</Link>
          </div>
          <button className="bg-[#FF5C35] text-white px-4 py-2 rounded text-sm">Get consultation</button>
        </nav>
      </header>

    
      <section className="bg-[#FFD9D0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-4 py-20 md:py-28">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Enjoy studying with Createx Online Courses
            </h1>
            <div className="flex gap-3 mt-8">
              <Link to="/about" className="border border-[#FF5C35] text-[#FF5C35] px-6 py-2.5 rounded text-sm font-medium">About us</Link>
              <button className="bg-[#FF5C35] text-white px-6 py-2.5 rounded text-sm font-medium">Explore courses</button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700" alt="hero" className="rounded-2xl w-full h-72 object-cover" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 px-4 py-24">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700" alt="why" className="rounded-2xl w-full h-80 object-cover" />
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Who we are</p>
          <h2 className="text-3xl font-bold mb-5">Why Createx?</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-3"><span className="text-[#FF5C35]">◆</span>A time-tested method of teaching with real examples</li>
            <li className="flex gap-3"><span className="text-[#FF5C35]">◆</span>Vestibulum quis lorem sit amet nisi</li>
            <li className="flex gap-3"><span className="text-[#FF5C35]">◆</span>Consequat elit volutpat quam tellus</li>
            <li className="flex gap-3"><span className="text-[#FF5C35]">◆</span>Etiam sit blandit ut mauris porttitor</li>
            <li className="flex gap-3"><span className="text-[#FF5C35]">◆</span>Tincidunt sapien nunc sed lacus</li>
            <li className="flex gap-3"><span className="text-[#FF5C35]">◆</span>Ut ultricies eget amet pretium</li>
          </ul>
          <Link to="/about" className="inline-block bg-[#FF5C35] text-white px-6 py-2.5 rounded text-sm font-medium mt-7">More about us</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Ready to learn?</p>
            <h2 className="text-3xl font-bold">Featured Courses</h2>
          </div>
          <button className="border border-[#FF5C35] text-[#FF5C35] px-5 py-2 rounded text-sm">View all courses</button>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://i.pravatar.cc/200?img=12" alt="" className="w-28 h-32 object-cover bg-yellow-400 shrink-0" />
            <div className="p-4">
              <span className="text-[10px] px-2 py-1 rounded bg-green-100 text-green-600">Marketing</span>
              <h3 className="font-semibold text-sm mt-2">The Ultimate Google Ads Training Course</h3>
              <p className="text-sm mt-2"><span className="text-[#FF5C35] font-bold">$100</span><span className="text-gray-400"> | by Jerome Bell</span></p>
            </div>
          </div>
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://i.pravatar.cc/200?img=33" alt="" className="w-28 h-32 object-cover bg-yellow-400 shrink-0" />
            <div className="p-4">
              <span className="text-[10px] px-2 py-1 rounded bg-blue-100 text-blue-600">Management</span>
              <h3 className="font-semibold text-sm mt-2">Product Management Fundamentals</h3>
              <p className="text-sm mt-2"><span className="text-[#FF5C35] font-bold">$480</span><span className="text-gray-400"> | by Marvin McKinney</span></p>
            </div>
          </div>
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://i.pravatar.cc/200?img=15" alt="" className="w-28 h-32 object-cover bg-yellow-400 shrink-0" />
            <div className="p-4">
              <span className="text-[10px] px-2 py-1 rounded bg-orange-100 text-orange-600">HR & Recruiting</span>
              <h3 className="font-semibold text-sm mt-2">HR Management and Analytics</h3>
              <p className="text-sm mt-2"><span className="text-[#FF5C35] font-bold">$200</span><span className="text-gray-400"> | by Leslie Alexander Li</span></p>
            </div>
          </div>
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://i.pravatar.cc/200?img=45" alt="" className="w-28 h-32 object-cover bg-yellow-400 shrink-0" />
            <div className="p-4">
              <span className="text-[10px] px-2 py-1 rounded bg-green-100 text-green-600">Marketing</span>
              <h3 className="font-semibold text-sm mt-2">Brand Management & PR Communications</h3>
              <p className="text-sm mt-2"><span className="text-[#FF5C35] font-bold">$530</span><span className="text-gray-400"> | by Kristin Watson</span></p>
            </div>
          </div>
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://i.pravatar.cc/200?img=47" alt="" className="w-28 h-32 object-cover bg-yellow-400 shrink-0" />
            <div className="p-4">
              <span className="text-[10px] px-2 py-1 rounded bg-blue-100 text-blue-600">Management</span>
              <h3 className="font-semibold text-sm mt-2">Business Development Management</h3>
              <p className="text-sm mt-2"><span className="text-[#FF5C35] font-bold">$400</span><span className="text-gray-400"> | by Dianne Russell</span></p>
            </div>
          </div>
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://i.pravatar.cc/200?img=53" alt="" className="w-28 h-32 object-cover bg-yellow-400 shrink-0" />
            <div className="p-4">
              <span className="text-[10px] px-2 py-1 rounded bg-pink-100 text-pink-600">Design</span>
              <h3 className="font-semibold text-sm mt-2">Graphic Design Basic</h3>
              <p className="text-sm mt-2"><span className="text-[#FF5C35] font-bold">$500</span><span className="text-gray-400"> | by Guy Hawkins</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <p className="text-xs text-gray-400 uppercase tracking-wide text-center">Our benefits</p>
        <h2 className="text-3xl font-bold text-center mb-8">That's how we do it</h2>
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-12">
          <span className="px-5 py-3 text-sm border-b-2 -mb-px border-[#FF5C35] text-[#FF5C35] font-semibold">Experienced Tutors</span>
          <span className="px-5 py-3 text-sm text-gray-400">Feedback & Support</span>
          <span className="px-5 py-3 text-sm text-gray-400">24/7 Online Library</span>
          <span className="px-5 py-3 text-sm text-gray-400">Community</span>
        </div>
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-3">Only practicing tutors</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our tutors are practicing specialists who share real experience, not only theory.
              Every lesson is built on real work cases.
            </p>
          </div>
          <div className="bg-[#E6F7F1] rounded-2xl h-56 flex items-center justify-center text-gray-400 text-sm">Illustration</div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Meet tutors are all here</p>
              <h2 className="text-3xl font-bold">Meet our team</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-full border border-gray-300 text-gray-500">←</button>
              <button className="w-9 h-9 rounded-full bg-[#FF5C35] text-white">→</button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="text-center">
              <img src="https://i.pravatar.cc/300?img=47" alt="" className="w-full h-64 object-cover bg-yellow-400" />
              <h3 className="font-semibold text-sm mt-3">Dianne Russell</h3>
              <p className="text-xs text-gray-500">Founder and CEO</p>
            </div>
            <div className="text-center">
              <img src="https://i.pravatar.cc/300?img=12" alt="" className="w-full h-64 object-cover bg-yellow-400" />
              <h3 className="font-semibold text-sm mt-3">Jerome Bell</h3>
              <p className="text-xs text-gray-500">Founder and Program Director</p>
            </div>
            <div className="text-center">
              <img src="https://i.pravatar.cc/300?img=45" alt="" className="w-full h-64 object-cover bg-yellow-400" />
              <h3 className="font-semibold text-sm mt-3">Kristin Watson</h3>
              <p className="text-xs text-gray-500">Marketing Course Curator</p>
            </div>
            <div className="text-center">
              <img src="https://i.pravatar.cc/300?img=33" alt="" className="w-full h-64 object-cover bg-yellow-400" />
              <h3 className="font-semibold text-sm mt-3">Marvin McKinney</h3>
              <p className="text-xs text-gray-500">PR Course Curator</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Our blog</p>
            <h2 className="text-3xl font-bold">Latest posts</h2>
          </div>
          <button className="bg-[#FF5C35] text-white px-5 py-2 rounded text-sm">Go to blog</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="bg-blue-200 h-44 rounded-lg" />
            <p className="text-xs text-gray-400 mt-3">Marketing</p>
            <h3 className="font-semibold text-sm mt-1">What is traffic arbitrage and does it really make money?</h3>
            <p className="text-xs text-gray-500 mt-2">Pharetra, nulla ipsum, parturient pellentesque.</p>
            <button className="text-[#FF5C35] text-xs mt-3">Read →</button>
          </div>
          <div>
            <div className="bg-green-200 h-44 rounded-lg" />
            <p className="text-xs text-gray-400 mt-3">Management</p>
            <h3 className="font-semibold text-sm mt-1">What to do and who to talk to if you want to get feedback on the product</h3>
            <p className="text-xs text-gray-500 mt-2">Sodales in non ultrices purus morbi.</p>
            <button className="text-[#FF5C35] text-xs mt-3">Read →</button>
          </div>
          <div>
            <div className="bg-yellow-100 h-44 rounded-lg" />
            <p className="text-xs text-gray-400 mt-3">Design</p>
            <h3 className="font-semibold text-sm mt-1">Should you choose a creative profession if you are attracted to creativity?</h3>
            <p className="text-xs text-gray-500 mt-2">Curabitur at risus mi, sed amet quisque.</p>
            <button className="text-[#FF5C35] text-xs mt-3">Read →</button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#FFD9D0] to-[#FFE8E2] py-16 text-center px-4">
        <p className="text-xs text-gray-500 uppercase">Don't miss anything</p>
        <h3 className="text-3xl font-bold mb-6">Subscribe to the Createx School announcements</h3>
        <div className="flex justify-center gap-2">
          <input type="email" placeholder="Your working email" className="bg-white px-4 py-2 rounded w-72 outline-none" />
          <button className="bg-[#FF5C35] text-white px-5 py-2 rounded">Subscribe</button>
        </div>
      </section>

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

      <Todos />
    </div>
  )
}


function Todos() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')

  const [addOpen, setAddOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const [editTodo, setEditTodo] = useState(null)
  const [editName, setEditName] = useState('')
  const [editDescription, setEditDescription] = useState('')

  const [infoTodo, setInfoTodo] = useState(null)

  async function getTodos() {
    const res = await fetch(`${API}/api/to-dos`)
    const json = await res.json()
    setTodos(json.data)
  }

  useEffect(() => {
    getTodos()
  }, [])

  async function addTodo(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('Name', name)
    formData.append('Description', description)
    if (image) formData.append('Images', image)

    await fetch(`${API}/api/to-dos`, { method: 'POST', body: formData })

    setName('')
    setDescription('')
    setImage(null)
    setAddOpen(false)
    getTodos()
  }

  async function deleteTodo(id) {
    await fetch(`${API}/api/to-dos?id=${id}`, { method: 'DELETE' })
    getTodos()
  }

  async function toggleTodo(id) {
    await fetch(`${API}/api/to-dos/completed?id=${id}`, { method: 'PUT' })
    getTodos()
  }

  function openEdit(todo) {
    setEditTodo(todo)
    setEditName(todo.name)
    setEditDescription(todo.description)
  }

  async function saveEdit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('Id', editTodo.id)
    formData.append('Name', editName)
    formData.append('Description', editDescription)

    await fetch(`${API}/api/to-dos`, { method: 'PUT', body: formData })
    setEditTodo(null)
    getTodos()
  }

  async function openInfo(id) {
    const res = await fetch(`${API}/api/to-dos/${id}`)
    const json = await res.json()
    setInfoTodo(json.data)
  }

  const filteredTodos = todos.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  )

  function imgUrl(todo) {
    if (todo.images && todo.images.length > 0) {
      return `${API}/images/${todo.images[0].imageName}`
    }
    return 'https://placehold.co/300x200?text=No+image'
  }

  return (
    <section className="bg-white py-10 text-black">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h2 className="text-3xl font-bold">Todo list</h2>
        <p className="text-gray-500 mt-1">Manage your tasks</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
          className="border border-gray-300 px-3 py-2 outline-none"
        />
        <button
          onClick={() => setAddOpen(true)}
          className="border border-black px-4 py-2 hover:bg-gray-100"
        >
          + Add todo
        </button>
      </div>
    </div>

    <div className="flex flex-wrap gap-5">
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="w-full sm:w-64 border border-gray-300 flex flex-col"
        >
          <img
            src={imgUrl(todo)}
            alt={todo.name}
            className="w-full h-40 object-cover bg-gray-100"
          />

          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
                className="mt-1"
              />
              <h3
                className={`font-semibold break-words ${
                  todo.isCompleted ? 'line-through text-gray-400' : ''
                }`}
              >
                {todo.name}
              </h3>
            </div>

            <p className="text-sm text-gray-600 mt-3 break-words">
              {todo.description}
            </p>

            <p className="text-sm text-gray-500 mt-3">
              Status: {todo.isCompleted ? 'Completed' : 'In progress'}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <button
                onClick={() => openInfo(todo.id)}
                className="border border-gray-300 px-2 py-1 text-sm hover:bg-gray-100"
              >
                Info
              </button>
              <button
                onClick={() => openEdit(todo)}
                className="border border-gray-300 px-2 py-1 text-sm hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="border border-gray-300 px-2 py-1 text-sm hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {filteredTodos.length === 0 && (
      <p className="text-center text-gray-500 mt-8">Nothing found</p>
    )}
  </div>

  {addOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <form
        onSubmit={addTodo}
        className="w-full max-w-md bg-white border border-gray-300 p-5"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold">Add new todo</h3>
          <button
            type="button"
            onClick={() => setAddOpen(false)}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border border-gray-300 px-3 py-2 outline-none"
          />

          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border border-gray-300 px-3 py-2 outline-none h-28 resize-none"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 px-3 py-2 text-sm"
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="w-full h-36 object-cover border border-gray-300"
            />
          )}

          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="flex-1 border border-black py-2 hover:bg-gray-100"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setAddOpen(false)}
              className="flex-1 border border-gray-300 py-2 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )}

  {editTodo && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <form
        onSubmit={saveEdit}
        className="w-full max-w-md bg-white border border-gray-300 p-5"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold">Edit todo</h3>
          <button
            type="button"
            onClick={() => setEditTodo(null)}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <input
            required
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Name"
            className="border border-gray-300 px-3 py-2 outline-none"
          />

          <textarea
            required
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description"
            className="border border-gray-300 px-3 py-2 outline-none h-28 resize-none"
          />

          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="flex-1 border border-black py-2 hover:bg-gray-100"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditTodo(null)}
              className="flex-1 border border-gray-300 py-2 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )}

  {infoTodo && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-300 p-5">
        <img
          src={imgUrl(infoTodo)}
          alt={infoTodo.name}
          className="w-full h-48 object-cover bg-gray-100"
        />

        <h3 className="text-2xl font-bold mt-4 break-words">
          {infoTodo.name}
        </h3>

        <p className="text-gray-600 mt-2 break-words">
          {infoTodo.description}
        </p>

        <p className="mt-4 text-sm">
          Status: {infoTodo.isCompleted ? 'Completed' : 'In progress'}
        </p>

        <button
          onClick={() => setInfoTodo(null)}
          className="w-full mt-5 border border-black py-2 hover:bg-gray-100"
        >
          Close
        </button>
      </div>
    </div>
  )}
</section>
  )
}