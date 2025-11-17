export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-purple-50 via-white to-blue-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when you need more volume and controls.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-2 text-gray-600">For individuals exploring prompt workflows.</p>
            <div className="mt-6 text-4xl font-semibold">$0<span className="text-base text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• 100 optimizations/mo</li>
              <li>• Chrome & Firefox extension</li>
              <li>• Basic prompt recipes</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Get started</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-md scale-105">
            <div className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-gray-900 text-white">Most Popular</div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">Pro</h3>
            <p className="mt-2 text-gray-600">For power users and small teams shipping features.</p>
            <div className="mt-6 text-4xl font-semibold">$19<span className="text-base text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• 5,000 optimizations/mo</li>
              <li>• Model-aware tuning</li>
              <li>• Versioned recipes</li>
              <li>• Email support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Start Pro</a>
          </div>

          {/* Team */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Team</h3>
            <p className="mt-2 text-gray-600">For teams needing governance and control.</p>
            <div className="mt-6 text-4xl font-semibold">$79<span className="text-base text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• 50,000 optimizations/mo</li>
              <li>• SSO & governance</li>
              <li>• PII guardrails</li>
              <li>• Priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
