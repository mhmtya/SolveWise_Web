import { useEffect, useState } from 'react'
import './App.css'

type RouteKey = 'home' | 'product' | 'about' | 'contact'

const homeLinks = [
  { label: 'Ana Sayfa', href: '#/' },
  { label: 'Urun', href: '#/urun' },
  { label: 'Hakkimizda', href: '#/hakkimizda' },
  { label: 'Iletisim', href: '#/iletisim' },
]

const homeFooterProductLinks = [
  'Ozellikler',
  'Entegrasyonlar',
  'Cozumler',
  'Surum Notlari',
]

const companyLinks = ['Hakkimizda', 'Kariyer', 'Blog', 'Destek']
const legalLinks = [
  'Gizlilik Politikasi',
  'Kullanim Kosullari',
  'Cerez Politikasi',
  'DPA',
]

const productFeatures = [
  {
    icon: 'monitoring',
    title: 'Real-time Analytics',
    text: 'Deep-dive into live data streams with zero latency processing and predictive modeling.',
  },
  {
    icon: 'sync',
    title: 'Cross-platform Sync',
    text: 'Seamless data flow between desktop, cloud, and mobile environments with end-to-end encryption.',
  },
  {
    icon: 'calendar_month',
    title: 'Automated Scheduling',
    text: "AI-driven task prioritization that adapts to your team's velocity and upcoming deadlines.",
  },
]

const screenshots = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBrwedivDHZLzys6HFEOQYxbCOkVaKQfyR70xgzR26jZF3uyKxZu3q9tt6Zkl-zTCJ3C5XVsl50FvOsprZ4o-F8YGJ0jtAszdeZa_vQtAVDA2qLp4K3UAh41tVuyG4z3NlgBmUej7zzspLd2PyJoFN7J43B5Tzgs-JO9zrQNhq766xMIAIvD0zYfnyViIYWwID0eT9RoZvTQE6TRUk3C9PAx8e8URNmJUtThdHzUFL_tQEZFJc_MruX7RKwsQdsyp7fYhc5Ob8wV40',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_-m0dnSYB3cEAywZ9ZprEeFpKt0w5H0HcG7tjN-YLPxouzx3gy5NiFlPX2V9Q8CViMeQae8TUTw-BODLUUJ_UJ2T7_CsSairiY4_-sLD9iOEAe9tQZeATPvkGCyXCHjrAvY2wCDrvFwnKuw21toR46kMPHv6fchYVO6A6DV0N-b0xTfdShiGbTVrMmKcsIIw6j1q1LZdNW5g2VQY1A_hT6ZfxyNIfuaMz07uHQ8sZboI87r-CLSsogG4CTCIseeg4nQhPbkJ62S4',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDXSEaMYHzKfVIlxpNEeN2PJ6jwaFYeaRXr039bum4ak2k4RjtsfUKyhnkdUqm6WyghgPxbR3Hpa0hQqDLOqh1oHe9lxsR7ReIQvrUBoclt71DSJVl07V7HipUn3KJlmCDYYqREuj1r0iStNdPwAFMrUrXz8zmWKlIzEw-n7jpoNVp20lSB2R8MIjISGwrGQC6BqvKQ8uZYsnGNPVUnu8Lb9GoHRzRRcVLytYiCBI6fVAgePvYkHydGiGB5V3AJeDBiEephfGrXJhI',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB2toqxG5_rRbiyhAj56n8KdlGJ4wYWmKzmUsM8eQZRJPTpIL-nWpUCttLVQmycqEdKGmobdoSL56m-h0FSs9qbxDmd2ypt_l9AAdsH2wPGHc9Gq185qoqLxkxtWqvfHOj0tr3Rkd4HZTRO22vZjba5uD0FYvBq_21p6kIlbe5o4B64AtnL_N6DRu1BWoDMQjdlTwuhKejkEKznlksvwrCa62FTd4yKA3C9VpgngXtJOEpmzj37Edr8fnmG4WfnDfMbPghAWulyp3w',
]

const setupSteps = [
  {
    step: '01',
    title: 'Download APK',
    text: 'Tap the primary button to get the latest signed binary.',
  },
  {
    step: '02',
    title: 'Enable Unknown Sources',
    text: 'Navigate to Settings > Security and toggle APK installation permissions.',
  },
  {
    step: '03',
    title: 'Install & Launch',
    text: 'Open the downloaded file and follow the on-screen prompts to initialize.',
  },
]

const getRouteFromHash = (): RouteKey => {
  const currentHash = window.location.hash.replace('#', '')

  if (currentHash.startsWith('/urun')) {
    return 'product'
  }

  if (currentHash.startsWith('/hakkimizda')) {
    return 'about'
  }

  if (currentHash.startsWith('/iletisim')) {
    return 'contact'
  }

  return 'home'
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#/')
  const route = getRouteFromHash()

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || '#/')

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [hash])

  if (route === 'product') {
    return <ProductPage />
  }

  if (route === 'about') {
    return <AboutPage />
  }

  if (route === 'contact') {
    return <ContactPage />
  }

  return <HomePage />
}

function Brand() {
  return (
    <a className="font-headline text-2xl font-black tracking-tighter text-white" href="#/">
      SolveWise
    </a>
  )
}

function SiteNavbar({ current }: { current: RouteKey }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#131313]/40 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Brand />
        <div className="hidden items-center space-x-8 font-headline font-bold tracking-tight md:flex">
          {homeLinks.map((item) => {
            const isActive =
              (current === 'home' && item.href === '#/') ||
              (current === 'product' && item.href === '#/urun') ||
              (current === 'about' && item.href === '#/hakkimizda') ||
              (current === 'contact' && item.href === '#/iletisim')

            return (
              <a
                key={item.label}
                className={
                  isActive
                    ? 'border-b-2 border-[#D4F000] pb-1 text-[#D4F000]'
                    : 'text-[#B6B4B8] transition-colors hover:text-white'
                }
                href={item.href}
              >
                {item.label}
              </a>
            )
          })}
        </div>
        <a
          className="neon-glow rounded-full bg-primary-fixed px-6 py-2.5 font-bold text-on-primary-fixed transition-transform duration-200 hover:scale-95"
          href="#/urun"
        >
          Baslayin
        </a>
      </div>
    </nav>
  )
}

function AppIcon({ name }: { name: string }) {
  return <span className="material-symbols-outlined">{name}</span>
}

function HomePage() {
  return (
    <>
      <SiteNavbar current="home" />

      <main className="pt-24">
        <section className="relative flex min-h-[921px] flex-col items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary-fixed/5 blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-primary-fixed/5 blur-[100px]"></div>
          </div>
          <div className="relative z-10 max-w-5xl space-y-8 text-center">
            <h1 className="font-headline text-5xl font-black leading-[0.9] tracking-tighter text-white md:text-8xl">
              The Ultimate Solution for <span className="text-primary-fixed">Smarter Workflows</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-secondary-container md:text-xl">
              Unleash the power of Kinetic Intelligence. Optimize every friction point in your enterprise cycle with professional editorial precision.
            </p>
            <div className="flex items-center justify-center">
              <a className="neon-glow rounded-full bg-primary-fixed px-10 py-4 text-lg font-bold text-on-primary-fixed transition-all hover:bg-primary-fixed-dim" href="#/urun">
                Get Started Free
              </a>
            </div>
          </div>
        </section>
        <section id="product" className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-20">
            <span className="font-headline text-sm font-bold uppercase tracking-widest text-primary-fixed">Capabilities</span>
            <h2 className="mt-4 font-headline text-4xl font-black text-white md:text-6xl">Why SolveWise?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="glass-panel group flex min-h-[400px] flex-col justify-between rounded-lg border border-outline-variant/15 p-12 transition-all hover:bg-surface-container-high md:col-span-2">
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed/10">
                  <AppIcon name="auto_awesome" />
                </div>
                <h3 className="mb-4 font-headline text-3xl font-bold text-white">Neural Process Mapping</h3>
                <p className="max-w-md text-lg leading-relaxed text-on-secondary-container">
                  Our AI engine maps your entire workflow ecosystem in real-time, identifying bottlenecks before they impact your velocity.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 font-bold text-primary-fixed transition-transform group-hover:translate-x-2">
                Explore Engine <AppIcon name="arrow_forward" />
              </div>
            </div>
            <div className="glass-panel rounded-lg border border-outline-variant/15 p-10 transition-all hover:bg-surface-container-high">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed/10">
                <AppIcon name="speed" />
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold text-white">Hyper-Velocity</h3>
              <p className="text-on-secondary-container">Latency-free data synchronization across global teams and edge networks.</p>
            </div>
            <div className="glass-panel rounded-lg border border-outline-variant/15 p-10 transition-all hover:bg-surface-container-high">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed/10">
                <AppIcon name="lock" />
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold text-white">Quantum Security</h3>
              <p className="text-on-secondary-container">Military-grade encryption that evolves with your organization&apos;s threat landscape.</p>
            </div>
            <div className="glass-panel flex flex-col items-center gap-12 rounded-lg border border-outline-variant/15 p-12 transition-all hover:bg-surface-container-high md:col-span-2 md:flex-row">
              <div className="flex-1">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed/10">
                  <AppIcon name="groups" />
                </div>
                <h3 className="mb-4 font-headline text-3xl font-bold text-white">Collaborative Logic</h3>
                <p className="text-lg leading-relaxed text-on-secondary-container">
                  Bring your entire stack together. Seamless integrations with 200+ enterprise tools right out of the box.
                </p>
              </div>
              <div className="h-48 w-full flex-1 overflow-hidden rounded-lg">
                <img
                  alt="Team Collaboration"
                  className="h-full w-full object-cover grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbSTTJvLsy4c1kjo8wlsxWVG6GpKg6JVDi9GfqeBTPBw-vMCwSFvYqWVAj7djOuL-fux90GKhfB6AlVUhd_L7fZ0p7TtjvTDGp1-JB4f-QWsZ6Tn6rOwInfDrc1FmDgj9qegPjin-dDh6dX-DBIm1WARU8I5OjWl-VObfYinI3KsI5ToFaPyUcJZZUlweJCQ3lr9izqp-MJtQCqFgEtbKDEChpWr1wYq1D0C-rXE-qs7nbkvlzz0wU9QhQdlFdNTsruWHzM3Djc_k"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="relative px-6 py-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-outline-variant/5 bg-surface-container-low p-12 md:p-24">
            <div className="absolute right-0 top-0 h-full w-1/3 translate-x-1/2 -rotate-12 bg-primary-fixed/5 blur-[80px]"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-headline text-4xl font-black leading-tight text-white md:text-6xl">
                Ready to evolve your <br />
                <span className="text-primary-fixed">productivity?</span>
              </h2>
              <p className="mb-10 mt-6 text-xl leading-relaxed text-on-secondary-container">
                Join 15,000+ teams worldwide already using SolveWise to redefine their daily operational standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="rounded-full bg-primary-fixed px-8 py-4 font-extrabold text-on-primary-fixed shadow-xl shadow-primary-fixed/10 transition-all hover:scale-105" href="#/urun">
                  Download the App
                </a>
                <a className="px-8 py-4 font-bold text-white transition-colors hover:text-primary-fixed" href="#/iletisim">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>  
      </main>
      <footer id="about" className="w-full border-t border-[#464932]/15 bg-[#131313]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-12 py-16 md:grid-cols-4">
          <FooterColumn title="Product" items={homeFooterProductLinks} href="#/urun" />
          <FooterColumn title="Company" items={companyLinks} href="#/hakkimizda" />
          <FooterColumn title="Legal" items={legalLinks} href="#" />
          <div className="space-y-6">
            <div className="text-xl font-bold text-white">SolveWise</div>
            <p className="text-sm leading-relaxed text-[#B6B4B8]">
              Redefining enterprise workflows through kinetic intelligence and fluid design.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#464932]/10 px-12 py-8 md:flex-row">
          <div className="text-sm text-[#B6B4B8]">© 2024 SolveWise. The Kinetic Luminary.</div>
          <div className="flex gap-6">
            <a className="text-[#B6B4B8] transition-colors hover:text-[#D4F000]" href="#"><AppIcon name="public" /></a>
            <a className="text-[#B6B4B8] transition-colors hover:text-[#D4F000]" href="#"><AppIcon name="hub" /></a>
            <a className="text-[#B6B4B8] transition-colors hover:text-[#D4F000]" href="#"><AppIcon name="terminal" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

function ProductPage() {
  return (
    <>
      <SiteNavbar current="product" />
      <main className="hero-gradient pt-24">
        <section className="relative flex min-h-[819px] flex-col items-center justify-center overflow-hidden px-6">
          <div className="relative z-10 max-w-4xl space-y-8 text-center">
            <h1 className="font-headline text-5xl font-bold leading-none tracking-tighter text-white md:text-8xl">
              Redefining <span className="text-primary-fixed">Workflow</span> Intelligence
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-on-secondary-container md:text-2xl">
              The next-generation engine for enterprise automation. Deploy AI-driven logic directly to your mobile infrastructure.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 pt-4 md:flex-row">
              <a className="neon-glow w-full rounded-full bg-primary-fixed px-10 py-5 text-center text-lg font-bold text-on-primary transition-transform hover:scale-105 md:w-auto" href="#versions">
                Download APK
              </a>
              <a className="glass-card w-full rounded-full border border-outline-variant/15 px-10 py-5 text-center text-lg font-bold text-white transition-colors hover:bg-surface-variant md:w-auto" href="#versions">
                View Version History
              </a>
            </div>
            <p className="font-label text-sm uppercase tracking-widest text-on-secondary-container/60">Optimized for Android 10 and above</p>
          </div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary-fixed/5 blur-[120px]"></div>
          <div className="absolute left-[-6rem] top-1/2 h-64 w-64 rounded-full bg-primary-fixed/5 blur-[100px]"></div>
        </section>
        <section id="overview" className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="glass-card overflow-hidden rounded-xl border border-outline-variant/10 p-1">
              <img
                alt="Analytics Dashboard"
                className="h-auto w-full rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi9wGFVbAgPYVUXtqC3jIpylcIVOiMOeV1wl8d1rNXUZ82-vWOJNjDf4Av1dOrKP1e0AO2FGQW4yk8g4X9ZBgnWY70qBXZFfAoBZBvelbFpqjlQoSKTubcL8-EBXzO-p30thKLyJHJ6_dcdzZaySFvgVB09zp_pGNYEFpHYIuYOyFr8UQDOVElAO8a7L3cWF5IpeFtg55sQrMwhSjRIZE-jyRZM0o1v1H5EpnDqkCQ0QbVe9jqdX_fDlDtonuQJGT24mH_2bQN90E"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-white md:text-5xl">
                Enterprise Automation, <br />
                Unbound.
              </h2>
              <p className="text-lg leading-relaxed text-on-secondary-container">
                SolveWise leverages the Kinetic Luminary Engine to bridge the gap between complex backend logic and mobile execution. Our system interprets enterprise workflows in real-time, providing your team with actionable intelligence exactly when they need it.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="99.9%" label="Uptime Reliability" />
                <StatCard value="0.4s" label="Latency Response" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-white">Core Capabilities</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {productFeatures.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>
        <section id="screenshots" className="overflow-hidden py-24">
          <div className="mx-auto mb-12 max-w-7xl px-8">
            <h2 className="text-center font-headline text-4xl font-bold tracking-tighter text-white">Interface Preview</h2>
          </div>
          <div className="no-scrollbar flex snap-x gap-8 overflow-x-auto px-8 pb-8">
            {screenshots.map((src, index) => (
              <div key={src} className="w-80 flex-shrink-0 snap-center">
                <img alt={`App Screenshot ${index + 1}`} className="rounded-lg border border-outline-variant/20 shadow-2xl" src={src} />
              </div>
            ))}
          </div>
        </section>
        <section id="versions" className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-12 lg:col-span-3">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-white">Quick Setup</h2>
              <div className="space-y-4">
                {setupSteps.map((item) => (
                  <div key={item.step} className="surface-container flex items-start gap-6 rounded-xl border-l-2 border-primary-fixed p-6">
                    <span className="font-headline text-4xl font-bold text-primary-fixed/20">{item.step}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-on-secondary-container">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-32 rounded-xl border border-outline-variant/10 bg-surface-container-high p-8">
                <div className="mb-8 flex items-center gap-3">
                  <AppIcon name="verified" />
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Official Build</span>
                </div>
                <div className="space-y-6">
                  <InfoRow label="Current Version" value="v2.4.1" mono />
                  <InfoRow label="Release Date" value="Oct 2024" />
                  <InfoRow label="File Size" value="48MB" />
                  <InfoRow label="MD5" value="a8f2c3d4e5f6..." mono compact />
                </div>
                <button className="mt-8 w-full rounded-lg bg-primary-fixed py-4 font-bold text-on-primary transition-all hover:brightness-110">
                  Start Secure Download
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="support" className="w-full border-t border-[#464932]/15 bg-[#131313]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-8 px-8 py-12 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <div className="text-lg font-bold text-white">SolveWise</div>
            <div className="text-center text-sm text-[#B6B4B8] md:text-left">© 2024 SolveWise. All rights reserved. Kinetic Luminary Engine.</div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-sm text-[#B6B4B8] transition-colors hover:text-[#D4F000]" href="#">Privacy Policy</a>
            <a className="text-sm text-[#B6B4B8] transition-colors hover:text-[#D4F000]" href="#">Terms of Service</a>
            <a className="text-sm text-[#B6B4B8] transition-colors hover:text-[#D4F000]" href="#versions">Installation Guide</a>
            <a className="text-sm text-[#B6B4B8] transition-colors hover:text-[#D4F000]" href="#versions">MD5 Checksum</a>
          </div>
        </div>
      </footer>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <SiteNavbar current="about" />

      <main className="pt-24">
        <section className="relative flex min-h-[819px] items-center overflow-hidden px-8 lg:px-24">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30">
            <div className="h-full w-full bg-gradient-to-l from-primary-fixed/20 to-transparent"></div>
          </div>
          <div className="z-10 max-w-4xl">
            <span className="mb-4 block font-headline text-sm font-bold uppercase tracking-widest text-primary-fixed">Brand Story</span>
            <h1 className="mb-8 font-headline text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
              SolveWise: The <br /> <span className="text-primary-fixed">Intelligence Layer</span>
            </h1>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-on-secondary-container md:text-2xl">
              Building the cognitive bridge between raw data and kinetic action. We don&apos;t just process information; we illuminate possibilities.
            </p>
          </div>
          <div className="absolute -right-20 bottom-0 h-[600px] w-[600px] rounded-full border border-primary-fixed/10 blur-3xl"></div>
        </section>

        <section className="bg-surface-container-low px-8 py-24 lg:px-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="group relative">
              <div className="aspect-square overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-high">
                <img
                  alt="Abstract neural network visualization"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEqcXCLT1koHaXcPU59ZL0vx_9DZfmZEqyFwC-mNGlvCQ8K0tBK1pCj2WlY25X_npGD6p5bCjRs2DGM6MZf1GUdgbletUy0OgCvIC2qPmocMOw9kN8uXOpoDzAhZCys7NhcBhTv6O7NnrWsMAzUCLQ4nkEgf1NTzvf-UAmrL00vTM20qNpkcYim1XZlFCSLcex7uZfMt8SP0SJvg02xJ85XJ44kejPprCvRPzE_a1dOXIgO-TMd7gfcRwVywoL8FfBI16WCssaO4M"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-primary-fixed/10 blur-[80px]"></div>
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">SolveWise Nedir?</h2>
              <div className="space-y-6 text-lg leading-relaxed text-on-secondary-container">
                <p>Born from the intersection of quantum logic and human intuition, SolveWise is a sovereign intelligence framework designed to orchestrate complex digital ecosystems.</p>
                <p>Our core technology utilizes a proprietary &quot;Kinetic Obsidian&quot; engine, a low-latency processing layer that transforms static datasets into dynamic, actionable intelligence streams.</p>
                <ul className="space-y-4 pt-4">
                  <AboutBullet icon="bolt" text="Ultra-Low Latency Inference" />
                  <AboutBullet icon="security" text="Zero-Trust Intelligence Architecture" />
                  <AboutBullet icon="auto_awesome" text="Autonomous Optimization Loops" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-32 lg:px-24">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">Purpose &amp; Perspective</h2>
            <div className="mx-12 mb-4 hidden h-[2px] flex-grow bg-outline-variant/20 md:block"></div>
            <p className="max-w-xs font-label text-xs uppercase tracking-widest text-on-secondary-container">Architecting the future of cognition</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="glass-card relative overflow-hidden rounded-xl border border-outline-variant/10 p-12 md:col-span-7">
              <div className="absolute right-0 top-0 p-8">
                <span className="material-symbols-outlined text-6xl text-primary-fixed opacity-20">visibility</span>
              </div>
              <span className="mb-4 block font-headline text-lg font-bold text-primary-fixed">Our Mission</span>
              <h3 className="mb-6 font-headline text-3xl font-bold md:text-4xl">Democratizing complex intelligence through weightless design.</h3>
              <p className="text-lg leading-relaxed text-on-secondary-container">
                We aim to strip away the friction of technical complexity, allowing creators and enterprises to move at the speed of thought. Our mission is to provide the invisible foundation for the next generation of digital breakthroughs.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-primary-fixed p-12 text-on-primary md:col-span-5">
              <span className="mb-4 block font-headline text-lg font-bold">Our Vision</span>
              <h3 className="font-headline text-3xl font-bold leading-tight">To become the universal synapse for global intelligence.</h3>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <span className="material-symbols-outlined text-[12rem]">language</span>
              </div>
            </div>
            <AboutMiniCard icon="verified_user" title="Uncompromising Trust" text="Integrity is embedded in our code. Every operation is transparent and secure." />
            <AboutMiniCard icon="auto_graph" title="Exponential Growth" text="We build systems that learn, adapt, and scale ahead of market demands." />
            <AboutMiniCard icon="psychology" title="Human-Centric AI" text="Technology should serve as an extension of human potential, not a replacement." />
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24 lg:px-24">
          <div className="flex flex-col items-center gap-20 lg:flex-row">
            <div className="order-2 lg:order-1 lg:w-1/2">
              <h2 className="mb-8 font-headline text-4xl font-bold tracking-tight md:text-5xl">The Luminary Mindset</h2>
              <p className="mb-12 text-xl leading-relaxed text-on-secondary-container">
                Our team is a collective of polymaths, engineers, and visionaries. We operate in a high-trust, decentralized environment that prioritizes radical transparency and kinetic execution.
              </p>
              <div className="space-y-8">
                <MindsetRow step="01" title="Deep Expertise" text="Masters of distributed systems and neural architecture." />
                <MindsetRow step="02" title="Agile Logic" text="Moving from concept to deployment with surgical precision." />
                <MindsetRow step="03" title="Radical Innovation" text="Challenging status quo paradigms every single day." />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2">
              <div className="relative">
                <img
                  alt="Team collaboration"
                  className="rounded-xl border border-white/5 shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjfFfHbzLba6RSamc-2tyglAwETll9JYdf9grmCpuHFXlmQw_sjZOrCKtE7J1MBtej0kxjLw36x_M5Z3VDdQRvCLBc8KNc9uD5JLgO2sjn0BPp5pnDMqI2z91lGQKm_YKkzhhn8D0unjOuuX3uuv1aeukyzdTHK6j2ysDl-oSzvVpFodCufqGhdEMdwIiMyCNi03rkVewLP0ItcK4lN4wG06eOEPSBdRomvhVKWhkXyhzHkyrIHB_V0TND_8PRD7OMigH1tJAVTjc"
                />
                <div className="absolute -left-6 -top-6 rounded-lg bg-primary-fixed px-8 py-6 font-headline font-bold text-on-primary">
                  <div className="text-4xl">42+</div>
                  <div className="text-xs uppercase tracking-widest">Global Patents</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-32 text-center lg:px-24">
          <h2 className="mb-20 font-headline text-4xl font-bold tracking-tight md:text-5xl">Impact on Productivity</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <ImpactCard icon="history" title="Reclaimed Time" text="Automate cognitive drudgery and focus on high-level strategic architecture." value="340%" meta="Average Efficiency Gain" />
            <ImpactCard icon="groups" title="Unified Workflow" text="Synchronize disparate teams and data streams into a single cohesive pulse." value="0.4s" meta="Decision-to-Action Latency" />
            <ImpactCard icon="insights" title="Clarity at Scale" text="Transform noise into signal with AI-driven pattern recognition." value="99.9%" meta="Predictive Accuracy" />
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/5 bg-[#131313] py-12">
        <div className="flex w-full flex-col items-center justify-between gap-8 px-12 md:flex-row">
          <div className="font-headline text-xl font-bold text-[#D4F000]">SolveWise</div>
          <div className="flex gap-8 text-sm">
            <a className="text-[#B6B4B8] transition-colors hover:text-white" href="#">Privacy</a>
            <a className="text-[#B6B4B8] transition-colors hover:text-white" href="#">Terms</a>
            <a className="text-[#B6B4B8] transition-colors hover:text-white" href="#">Security</a>
            <a className="text-[#B6B4B8] transition-colors hover:text-white" href="#/iletisim">Contact</a>
          </div>
          <div className="text-sm text-[#B6B4B8] opacity-80">© 2024 SolveWise. Kinetic Luminary Intelligence.</div>
        </div>
      </footer>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <SiteNavbar current="contact" />

      <main className="mx-auto max-w-[1440px] px-6 pb-20 pt-32">
        <header className="relative mb-16 flex flex-col items-center text-center md:mb-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-fixed/5 blur-[120px]"></div>
          <h1 className="mb-6 max-w-4xl font-headline text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
            Hadi <span className="text-primary-fixed">Konusalim</span>
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-on-secondary-container md:text-xl">
            Gelecegin yapay zeka cozumlerini birlikte insa edelim. Ekibimiz teknik sorulariniz, ortaklik teklifleriniz veya sadece bir merhaba icin burada.
          </p>
        </header>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="glass-card relative overflow-hidden rounded-lg border border-outline-variant/15 p-8 md:p-12">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-primary-fixed/20 blur-[80px]"></div>
              <form action="#" className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <ContactField id="name" label="Ad Soyad" placeholder="John Doe" type="text" />
                  <ContactField id="email" label="E-posta Adresi" placeholder="john@example.com" type="email" />
                </div>
                <ContactField id="subject" label="Konu" placeholder="Nasil yardimci olabiliriz?" type="text" />
                <div className="space-y-2">
                  <label className="font-label text-sm text-on-secondary-container" htmlFor="message">
                    Mesajiniz
                  </label>
                  <textarea
                    className="w-full resize-none rounded-md border-none bg-surface-container-highest px-6 py-4 text-white outline-none transition-all placeholder:text-on-secondary-container/40 focus:ring-2 focus:ring-primary-fixed/40"
                    id="message"
                    placeholder="Projenizden veya sorunuzdan bahsedin..."
                    rows={5}
                  ></textarea>
                </div>
                <button className="w-full rounded-full bg-primary-fixed py-4 font-headline text-lg font-bold text-on-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,240,0,0.3)]" type="submit">
                  Mesaji Gonder
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 w-full border-t border-[#464932]/15 bg-[#131313]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between px-12 py-10 md:flex-row">
          <div className="mb-6 md:mb-0">
            <div className="mb-2 font-headline text-lg font-bold text-white">SolveWise AI</div>
            <p className="text-sm text-[#B6B4B8]">© 2024 SolveWise AI. Kinetic Luminary Engine.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-sm text-[#B6B4B8] opacity-80 transition-colors hover:text-[#D4F000] hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-sm text-[#B6B4B8] opacity-80 transition-colors hover:text-[#D4F000] hover:opacity-100" href="#">Terms of Service</a>
            <a className="text-sm text-[#B6B4B8] opacity-80 transition-colors hover:text-[#D4F000] hover:opacity-100" href="#">Security</a>
            <a className="text-sm text-[#B6B4B8] opacity-80 transition-colors hover:text-[#D4F000] hover:opacity-100" href="#">Status</a>
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterColumn({ title, items, href }: { title: string; items: string[]; href: string }) {
  return (
    <div className="space-y-4">
      <div className="text-sm font-medium text-white">{title}</div>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a className="inline-block text-[#B6B4B8] transition-transform hover:translate-x-1 hover:text-[#D4F000]" href={href}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactField({
  id,
  label,
  placeholder,
  type,
}: {
  id: string
  label: string
  placeholder: string
  type: string
}) {
  return (
    <div className="space-y-2">
      <label className="font-label text-sm text-on-secondary-container" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full rounded-md border-none bg-surface-container-highest px-6 py-4 text-white outline-none transition-all placeholder:text-on-secondary-container/40 focus:ring-2 focus:ring-primary-fixed/40"
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

function AboutBullet({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-center space-x-3">
      <span className="material-symbols-outlined text-primary-fixed">{icon}</span>
      <span className="font-medium text-primary">{text}</span>
    </li>
  )
}

function AboutMiniCard({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="glass-card rounded-xl border border-outline-variant/10 p-8 transition-all duration-300 hover:bg-surface-container-highest md:col-span-4">
      <span className="material-symbols-outlined mb-4 text-primary-fixed">{icon}</span>
      <h4 className="mb-2 font-headline text-xl font-bold">{title}</h4>
      <p className="text-sm text-on-secondary-container">{text}</p>
    </div>
  )
}

function MindsetRow({
  step,
  title,
  text,
}: {
  step: string
  title: string
  text: string
}) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed/10 font-bold text-primary-fixed">
        {step}
      </div>
      <div>
        <h4 className="mb-1 font-headline text-xl font-bold">{title}</h4>
        <p className="text-on-secondary-container">{text}</p>
      </div>
    </div>
  )
}

function ImpactCard({
  icon,
  title,
  text,
  value,
  meta,
}: {
  icon: string
  title: string
  text: string
  value: string
  meta: string
}) {
  return (
    <div className="space-y-6">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary-fixed/20 bg-surface-container-high">
        <span className="material-symbols-outlined text-3xl text-primary-fixed">{icon}</span>
      </div>
      <h3 className="font-headline text-2xl font-bold">{title}</h3>
      <p className="mx-auto max-w-xs text-on-secondary-container">{text}</p>
      <div className="font-headline text-4xl font-bold text-primary-fixed">{value}</div>
      <div className="text-xs uppercase text-on-secondary-container">{meta}</div>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border-l-4 border-primary-fixed bg-surface-container-low p-4">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="font-label text-xs uppercase tracking-tighter text-on-secondary-container">{label}</div>
    </div>
  )
}

function FeatureCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="glass-card space-y-6 rounded-xl border border-outline-variant/10 p-8 transition-transform duration-300 hover:-translate-y-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed/10">
        <AppIcon name={icon} />
      </div>
      <h3 className="font-headline text-2xl font-bold text-white">{title}</h3>
      <p className="leading-relaxed text-on-secondary-container">{text}</p>
    </div>
  )
}

function InfoRow({
  label,
  value,
  mono,
  compact,
}: {
  label: string
  value: string
  mono?: boolean
  compact?: boolean
}) {
  return (
    <div className="flex items-center justify-between border-b border-outline-variant/10 py-4 last:border-b-0">
      <span className="text-on-secondary-container">{label}</span>
      <span className={`${mono ? 'font-mono ' : ''}${compact ? 'max-w-[140px] truncate text-xs ' : ''}text-white`}>
        {value}
      </span>
    </div>
  )
}

export default App
