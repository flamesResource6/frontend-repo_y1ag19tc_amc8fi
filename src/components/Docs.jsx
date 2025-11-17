export default function Docs() {
  return (
    <section id="docs" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="prose prose-slate max-w-none">
          <h2>Documentation</h2>
          <p>
            The extension adds an Optimize button next to any prompt textarea. Click once to
            reframe, reduce ambiguity, enforce tone, and budget tokens based on your selected model.
          </p>
          <h3>Quick Start</h3>
          <ol>
            <li>Install the extension from the Chrome Web Store or Firefox Add-ons.</li>
            <li>Sign in and pick your default model profile.</li>
            <li>Type your idea and click Optimize. Submit anywhere with one keystroke.</li>
          </ol>
          <h3>Features</h3>
          <ul>
            <li>Recipes: Save reusable prompt patterns and share with your team.</li>
            <li>Constraints: Enforce output structure, tone, and safety rules automatically.</li>
            <li>Analytics: See tokens saved and quality improvements over time.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
