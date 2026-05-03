export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect AI-Generated<br />Student Submissions
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Upload any assignment and get an instant confidence score. OriginCheck analyzes writing patterns, sentence complexity, and stylistic fingerprints to flag AI-written content.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8 / month
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["98%", "Detection Accuracy"],
            ["<5s", "Analysis Time"],
            ["12+", "Pattern Signals"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited assignment uploads",
              "AI confidence score per submission",
              "Detailed pattern breakdown report",
              "Supports PDF, DOCX, and plain text",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does OriginCheck detect AI-generated text?",
              "It measures sentence entropy, vocabulary diversity, burstiness, and perplexity patterns that differ between human and AI writers, then combines them into a single confidence score."
            ],
            [
              "What file formats are supported?",
              "You can upload PDF, DOCX, and plain-text (.txt) files. Minimum 150 words are required for a reliable analysis."
            ],
            [
              "Is my students' data kept private?",
              "Uploaded documents are analyzed in memory and never stored on our servers. No assignment content is retained after the report is generated."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} OriginCheck. All rights reserved.
      </footer>
    </main>
  );
}
