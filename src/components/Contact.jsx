import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Submission failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-white to-purple-50" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-600">Questions about plans, billing, or the extension? We’ll respond within 1 business day.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <input name="name" required placeholder="Full name" className="col-span-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input name="email" required type="email" placeholder="Email" className="col-span-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input name="company" placeholder="Company" className="col-span-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <select name="plan" className="col-span-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="">Plan (optional)</option>
            <option>Starter</option>
            <option>Pro</option>
            <option>Team</option>
          </select>
          <input name="subject" placeholder="Subject" className="sm:col-span-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <textarea name="message" required rows="5" placeholder="How can we help?" className="sm:col-span-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />

          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" disabled={status==='loading'} className="px-5 py-2 rounded-md bg-gray-900 text-white hover:bg-black disabled:opacity-60">
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'success' && <span className="text-emerald-600">Thanks! We’ll be in touch.</span>}
            {status === 'error' && <span className="text-red-600">{error}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
