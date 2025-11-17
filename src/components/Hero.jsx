import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-white/70 backdrop-blur text-gray-700 border border-white/60">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Now available as a Chrome & Firefox extension
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
          Optimize your prompts for any AI model
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
          Turn rough ideas into high-performing prompts with one click. Consistent tone, reduced tokens, and higher quality outputs across GPT, Claude, Llama and more.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#pricing" className="w-full sm:w-auto px-6 py-3 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">Get the Extension</a>
          <a href="#docs" className="w-full sm:w-auto px-6 py-3 rounded-md bg-white/80 backdrop-blur border border-white/60 hover:bg-white transition-colors">Read the Docs</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  )
}
