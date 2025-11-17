import { Sparkles, Gauge, ShieldCheck, Wand2 } from 'lucide-react'

const items = [
  {
    icon: Wand2,
    title: '1-click optimization',
    desc: 'Rewrite prompts to be clearer, shorter, and more controllable while preserving intent.',
  },
  {
    icon: Gauge,
    title: 'Model-aware tuning',
    desc: 'Profiles for GPT-4o, Claude 3.5, Llama, Mistral, and more with auto token budgeting.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance & safety',
    desc: 'Guardrails, PII scrubbing, and constraint templates for compliant teams.',
  },
  {
    icon: Sparkles,
    title: 'Reusable recipes',
    desc: 'Share prompt patterns across your org and keep versions in sync.',
  },
]

export default function Features() {
  return (
    <section id="product" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-white to-purple-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Built for speed and quality</h2>
          <p className="mt-3 text-gray-600">Everything you need to craft reliable prompts that ship faster and cost less.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-purple-600" />
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
