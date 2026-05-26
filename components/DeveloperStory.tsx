export function DeveloperStory() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#f8edca] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236e3726' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <h2 className="font-redressed text-4xl md:text-5xl text-[#6e3726] text-center mb-16">
          Why Pagemarked exists
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-brand-dark/90 leading-relaxed font-redressed text-lg">
            <p>
              There were months I didn&apos;t read at all. Weeks turned into
              months, and the books on my shelf collected dust while I told
              myself &ldquo;I&apos;ll get back to it soon.&rdquo;
            </p>
            <p>
              I love sharing what I do — and I realized there&apos;s something
              powerful about accountability through sharing. When you post a
              workout on Strava, you feel seen. You feel committed. Your friends
              notice. That social layer adds a gentle pressure that keeps you
              going.
            </p>
            <p className="font-redressed text-2xl text-[#6e3726] italic border-l-4 border-[#6e3726] pl-6 my-8">
              So I thought: what if reading had that?
            </p>
            <p>
              Not a competition. Not a leaderboard. Just a beautiful little card
              that says — &ldquo;I read today. I showed up for my mind
              today.&rdquo;
            </p>
            <p>
              Because reading one page is infinitely more than reading nothing.
              A single paragraph can change how you see the world.
            </p>
            <p>
              Pagemarked is for readers who want to celebrate the small wins.
              Post it to your story. Tag a friend. Let it be the reason you pick
              up the book tomorrow.
            </p>
            <p className="text-[#6e3726] font-redressed text-xl pt-4">
              — Built by a reader, for readers. 🔖
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-64 h-80">
              <div
                className="absolute w-48 h-64 rounded-lg shadow-xl transform -rotate-6"
                style={{ background: "#1a2744", top: 20, left: 0 }}
              >
                <div className="p-4 text-[#f5f0e6] font-redressed text-sm opacity-80">
                  Pagemarked
                </div>
              </div>
              <div
                className="absolute w-48 h-64 rounded-lg shadow-xl transform rotate-3"
                style={{ background: "#f5e6d3", top: 40, left: 60 }}
              >
                <div className="p-4 text-[#5c4033] font-redressed text-sm">
                  cozy read
                </div>
              </div>
              <div
                className="absolute w-48 h-64 rounded-lg shadow-2xl transform rotate-8"
                style={{ background: "#0a0a0a", top: 60, left: 100 }}
              >
                <div
                  className="p-4 text-sm font-mono"
                  style={{ color: "#00ff88" }}
                >
                  42 pg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
