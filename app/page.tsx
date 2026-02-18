import CopyButton from "./components/CopyButton";
import PresetViewer from "./components/PresetViewer";
import AdminShowcase from "./components/AdminShowcase";
import RelayPatterns from "./components/RelayPatterns";

const INSTALL_CMD = "curl -fsSL https://raw.githubusercontent.com/barrydeen/moar/master/install.sh | bash";
const GITHUB_URL = "https://github.com/barrydeen/moar";

// Features focused on benefits
const features = [
  {
    name: "Multi-Tenant Architecture",
    description: "One binary, infinite relays. Spin up a public relay, a private inbox, and a paid community node on a single $5 VPS.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    name: "Sovereign Media (Blossom)",
    description: "Stop relying on imgur. Host your own images and videos with built-in BUD-01 Blossom support. Hash-addressed and authenticated.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: "Web of Trust Filtering",
    description: "Kill spam at the network layer. Only accept events from your friends, or friends of friends. Mathematically verified.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-fuchsia-500/30">

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 bg-[#030014]">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[100px]" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#030014]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
            <span className="font-mono text-lg font-bold tracking-tight text-white">
              MOAR
            </span>
          </div>
          <div className="flex items-center gap-8 font-mono text-xs font-medium uppercase tracking-wider text-zinc-400">
            <a href="#command-center" className="hover:text-white transition-colors">Admin</a>
            <a href="#deploy" className="hover:text-white transition-colors">Deploy</a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-fuchsia-400 transition-colors">
              GitHub →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500"></span>
            </span>
            v0.1.0 Open Source Release
          </div>

          <h1 className="select-none font-sans text-6xl font-black tracking-tighter text-white sm:text-8xl">
            The Mother <br />
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">of All Relays.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-2xl font-light leading-relaxed text-zinc-300">
            It&apos;s the mother relay from which relays spring
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 px-2">
            <p className="flex items-center gap-2 font-mono text-sm font-medium tracking-wide text-fuchsia-400 uppercase">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Install with one command
              <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </p>
            <div className="glass-panel group relative flex w-full max-w-xl items-center gap-4 rounded-lg px-4 py-3 transition-all hover:border-fuchsia-500/30">
              <div className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto">
                <span className="font-mono text-fuchsia-500 shrink-0">$</span>
                <code className="font-mono text-sm text-zinc-300 whitespace-nowrap">
                  {INSTALL_CMD}
                </code>
              </div>
              <div className="shrink-0">
                <CopyButton text={INSTALL_CMD} />
              </div>
            </div>
          </div>
          <p className="mt-4 font-mono text-xs text-zinc-600">Linux / macOS / x86_64</p>
        </div>
      </section>

      {/* Meme Section */}
      <section className="relative px-6 py-12 -mt-20 flex flex-col items-center">
        <div className="glass-panel overflow-hidden rounded-2xl border-white/10 bg-white/5 p-2 shadow-2xl">
          <img
            src="/moar.gif"
            alt="need moar relays"
            className="w-full max-w-md rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <p className="mt-6 font-mono text-xl font-bold tracking-widest text-fuchsia-500 uppercase animate-pulse">
          need moar relays
        </p>
      </section>

      {/* Admin Command Center */}
      <section id="command-center" className="overflow-hidden bg-[#050508] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white">Complete Control</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Manage your infrastructure with a powerful, visual interface.
              No more fighting with config files in the dark.
            </p>
          </div>

          <AdminShowcase />
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white">Everything you need. <span className="text-zinc-500">Nothing you don&apos;t.</span></h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.name}
                className="glass-panel group relative overflow-hidden rounded-xl p-8 hover:-translate-y-1 hover:border-fuchsia-500/20 transition-all duration-300"
              >
                <div className="mb-4 text-fuchsia-500 group-hover:text-cyan-400 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white max-w-[80%]">{f.name}</h3>
                <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
                  {f.description}
                </p>
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-fuchsia-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relay Patterns Grid */}
      <section className="px-6 py-24 bg-zinc-950/30 border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Popular Presets</h2>
            <p className="mt-4 text-zinc-400">
              Configure your relay for any use case. Mix and match policies.
            </p>
          </div>
          <RelayPatterns />
        </div>
      </section>

      {/* Deploy Section */}
      <section id="deploy" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">Vibe Your Relays into Existence</h2>
          <p className="mb-12 text-zinc-400 text-sm">Describe your dream stack. Let AI generate the MOAR config. Deploy instantly.</p>

          <PresetViewer />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-zinc-950 px-6 py-12">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-mono text-lg font-bold text-white">MOAR</span>
            <p className="text-xs text-zinc-500 mt-2">© {new Date().getFullYear()} Barry Deen</p>
          </div>

          <div className="text-zinc-500 font-mono text-xs sm:text-sm italic">
            &quot;i hope you like it, dad&quot;
          </div>
        </div>
      </footer>
    </div>
  );
}
