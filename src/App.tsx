import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import './App.css'

type RouteKey = 'home' | 'product' | 'about' | 'contact'

const homeLinks = [
  { label: 'Home', href: '#/' },
  { label: 'Product', href: '#/product' },
  { label: 'About', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
]

const homeFooterProductLinks = [
  'Question Solver',
  'Study Planner',
  'Mistake Analysis',
  'Exam Insights',
]

const companyLinks = ['About', 'Mission', 'Vision', 'Support']

const productFeatures = [
  {
    icon: 'menu_book',
    title: 'AI Question Solver',
    text: 'Students can upload or type difficult questions and get step-by-step explanations that teach the logic, not just the final answer.',
  },
  {
    icon: 'event_note',
    title: 'Adaptive Study Plans',
    text: 'SolveWise builds personalized study schedules based on upcoming exams, weak topics, available time, and daily goals.',
  },
  {
    icon: 'analytics',
    title: 'Mistake & Mock Exam Analysis',
    text: 'The platform detects patterns in wrong answers, shows where the student loses points, and recommends what to review next.',
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
    title: 'Upload Questions',
    text: 'Take a photo or paste the question to get a clear AI explanation in seconds.',
  },
  {
    step: '02',
    title: 'Build a Smart Plan',
    text: 'Set your exam date, subjects, and weekly availability to generate a realistic study routine.',
  },
  {
    step: '03',
    title: 'Track and Improve',
    text: 'Review mistake reports, focus on weak topics, and keep improving with guided next steps.',
  },
]

const getRouteFromHash = (): RouteKey => {
  const currentHash = window.location.hash.replace('#', '')

  if (currentHash.startsWith('/product')) {
    return 'product'
  }

  if (currentHash.startsWith('/about')) {
    return 'about'
  }

  if (currentHash.startsWith('/contact')) {
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
    <RouteLink className="font-headline text-2xl font-black tracking-tighter text-white" href="#/">
      SolveWise
    </RouteLink>
  )
}

function RouteLink({
  href,
  className,
  children,
  onNavigate,
}: {
  href: string
  className?: string
  children: ReactNode
  onNavigate?: () => void
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#/')) {
      onNavigate?.()
      return
    }

    event.preventDefault()

    if (window.location.hash !== href) {
      window.location.hash = href
      onNavigate?.()
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    onNavigate?.()
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}

function SiteNavbar({ current }: { current: RouteKey }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#131313]/40 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <button
        aria-hidden={!mobileMenuOpen}
        className={`absolute left-0 top-full h-[calc(100vh-80px)] w-full bg-black/60 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        tabIndex={mobileMenuOpen ? 0 : -1}
        type="button"
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Brand />
        <div className="hidden items-center space-x-8 font-headline font-bold tracking-tight md:flex">
          {homeLinks.map((item) => {
            const isActive =
              (current === 'home' && item.href === '#/') ||
              (current === 'product' && item.href === '#/product') ||
              (current === 'about' && item.href === '#/about') ||
              (current === 'contact' && item.href === '#/contact')

            return (
              <RouteLink
                key={item.label}
                className={
                  isActive
                    ? 'border-b-2 border-[#D4F000] pb-1 text-[#D4F000]'
                    : 'text-[#B6B4B8] transition-colors hover:text-white'
                }
                href={item.href}
              >
                {item.label}
              </RouteLink>
            )
          })}
        </div>
        <RouteLink
          className="neon-glow hidden rounded-full bg-primary-fixed px-6 py-2.5 font-bold text-on-primary-fixed transition-transform duration-200 hover:scale-95 md:inline-flex"
          href="#/product"
        >
          Start Free
        </RouteLink>
        <button
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low text-white transition-colors hover:border-primary-fixed/50 hover:text-primary-fixed md:hidden"
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <AppIcon name={mobileMenuOpen ? 'close' : 'menu'} />
        </button>
      </div>
      <div
        className={`mobile-menu-panel overflow-hidden border-t border-outline-variant/10 bg-[#131313]/95 md:hidden ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4">
          {homeLinks.map((item) => {
            const isActive =
              (current === 'home' && item.href === '#/') ||
              (current === 'product' && item.href === '#/product') ||
              (current === 'about' && item.href === '#/about') ||
              (current === 'contact' && item.href === '#/contact')

            return (
              <RouteLink
                key={`mobile-${item.label}`}
                className={
                  isActive
                    ? 'rounded-2xl border border-primary-fixed/30 bg-primary-fixed/10 px-4 py-3 font-headline font-bold text-primary-fixed'
                    : 'rounded-2xl border border-transparent bg-surface-container-low px-4 py-3 font-headline font-bold text-white transition-colors hover:border-outline-variant/20 hover:text-primary-fixed'
                }
                href={item.href}
                onNavigate={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </RouteLink>
            )
          })}
          <RouteLink
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-fixed px-6 py-3 font-bold text-on-primary-fixed"
            href="#/product"
            onNavigate={() => setMobileMenuOpen(false)}
          >
            Start Free
          </RouteLink>
        </div>
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
              AI Study Support for <span className="text-primary-fixed">High School Students</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-secondary-container md:text-xl">
              SolveWise helps students solve difficult questions, build personalized study plans, and analyze exam mistakes so they can improve faster and study with confidence.
            </p>
            <div className="flex items-center justify-center">
              <RouteLink className="neon-glow rounded-full bg-primary-fixed px-10 py-4 text-lg font-bold text-on-primary-fixed transition-all hover:bg-primary-fixed-dim" href="#/product">
                Explore the Product
              </RouteLink>
            </div>
          </div>
        </section>
        <section id="product" className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-20">
            <span className="font-headline text-sm font-bold uppercase tracking-widest text-primary-fixed">What Students Get</span>
            <h2 className="mt-4 font-headline text-4xl font-black text-white md:text-6xl">Why SolveWise?</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="glass-panel group flex min-h-[400px] flex-col justify-between rounded-lg border border-outline-variant/15 p-12 transition-all hover:bg-surface-container-high md:col-span-2">
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed/10">
                  <AppIcon name="auto_awesome" />
                </div>
                <h3 className="mb-4 font-headline text-3xl font-bold text-white">A Tutor That Explains Every Step</h3>
                <p className="max-w-md text-lg leading-relaxed text-on-secondary-container">
                  Instead of dropping a final answer, SolveWise breaks questions into understandable steps so students can learn the method and solve similar problems on their own.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 font-bold text-primary-fixed transition-transform group-hover:translate-x-2">
                See Student Experience <AppIcon name="arrow_forward" />
              </div>
            </div>
            <div className="glass-panel rounded-lg border border-outline-variant/15 p-10 transition-all hover:bg-surface-container-high">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed/10">
                <AppIcon name="school" />
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold text-white">Exam-Focused Guidance</h3>
              <p className="text-on-secondary-container">Study recommendations stay aligned with school exams, university prep, and the topics that matter most.</p>
            </div>
            <div className="glass-panel rounded-lg border border-outline-variant/15 p-10 transition-all hover:bg-surface-container-high">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed/10">
                <AppIcon name="track_changes" />
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold text-white">Targeted Improvement</h3>
              <p className="text-on-secondary-container">Students see which topics, question types, and habits are slowing them down, then get a focused plan to improve.</p>
            </div>
            <div className="glass-panel flex flex-col items-center gap-12 rounded-lg border border-outline-variant/15 p-12 transition-all hover:bg-surface-container-high md:col-span-2 md:flex-row">
              <div className="flex-1">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed/10">
                  <AppIcon name="insights" />
                </div>
                <h3 className="mb-4 font-headline text-3xl font-bold text-white">From Wrong Answers to Better Scores</h3>
                <p className="text-lg leading-relaxed text-on-secondary-container">
                  After every exam, SolveWise highlights recurring mistakes, reveals knowledge gaps, and tells students exactly what to revisit before the next test.
                </p>
              </div>
              <div className="h-48 w-full flex-1 overflow-hidden rounded-lg">
                <img
                  alt="Students reviewing progress"
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
                Ready to help students <br />
                <span className="text-primary-fixed">study smarter?</span>
              </h2>
              <p className="mb-10 mt-6 text-xl leading-relaxed text-on-secondary-container">
                SolveWise is designed for the next generation of learners who want clearer explanations, better routines, and measurable academic growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <RouteLink className="rounded-full bg-primary-fixed px-8 py-4 font-extrabold text-on-primary-fixed shadow-xl shadow-primary-fixed/10 transition-all hover:scale-105" href="#/product">
                  View Product
                </RouteLink>
                <RouteLink className="px-8 py-4 font-bold text-white transition-colors hover:text-primary-fixed" href="#/contact">
                  Contact Us
                </RouteLink>
              </div>
            </div>
          </div>
        </section>  
      </main>
      <SiteFooter />
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
              Your AI Partner for <span className="text-primary-fixed">Better Study Outcomes</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-on-secondary-container md:text-2xl">
              SolveWise turns hard questions, scattered notes, and mock exam mistakes into a focused study system students can actually follow.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 pt-4 md:flex-row">
              <a className="neon-glow w-full rounded-full bg-primary-fixed px-10 py-5 text-center text-lg font-bold text-on-primary transition-transform hover:scale-105 md:w-auto" href="#versions">
                See How It Works
              </a>
              <a className="glass-card w-full rounded-full border border-outline-variant/15 px-10 py-5 text-center text-lg font-bold text-white transition-colors hover:bg-surface-variant md:w-auto" href="#versions">
                Explore Core Features
              </a>
            </div>
            <p className="font-label text-sm uppercase tracking-widest text-on-secondary-container/60">Built for high school learning journeys</p>
          </div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary-fixed/5 blur-[120px]"></div>
          <div className="absolute left-[-6rem] top-1/2 h-64 w-64 rounded-full bg-primary-fixed/5 blur-[100px]"></div>
        </section>
        <section id="overview" className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="glass-card overflow-hidden rounded-xl border border-outline-variant/10 p-1">
              <img
                alt="Student analytics dashboard"
                className="h-auto w-full rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi9wGFVbAgPYVUXtqC3jIpylcIVOiMOeV1wl8d1rNXUZ82-vWOJNjDf4Av1dOrKP1e0AO2FGQW4yk8g4X9ZBgnWY70qBXZFfAoBZBvelbFpqjlQoSKTubcL8-EBXzO-p30thKLyJHJ6_dcdzZaySFvgVB09zp_pGNYEFpHYIuYOyFr8UQDOVElAO8a7L3cWF5IpeFtg55sQrMwhSjRIZE-jyRZM0o1v1H5EpnDqkCQ0QbVe9jqdX_fDlDtonuQJGT24mH_2bQN90E"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-white md:text-5xl">
                One platform for questions, <br />
                planning, and progress.
              </h2>
              <p className="text-lg leading-relaxed text-on-secondary-container">
                SolveWise helps students understand what they missed, what they should study next, and how to use their limited time more effectively. It is academic support designed to feel personal, practical, and consistent.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="24/7" label="Question Support" />
                <StatCard value="3-in-1" label="Learn Plan Improve" />
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
                <img alt={`SolveWise screen ${index + 1}`} className="rounded-lg border border-outline-variant/20 shadow-2xl" src={src} />
              </div>
            ))}
          </div>
        </section>
        <section id="versions" className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-12 lg:col-span-3">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-white">How SolveWise Helps</h2>
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
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Student Success Snapshot</span>
                </div>
                <div className="space-y-6">
                  <InfoRow label="Primary Users" value="High school students" />
                  <InfoRow label="Key Use Case" value="Daily study optimization" />
                  <InfoRow label="AI Support" value="Question solving and feedback" />
                  <InfoRow label="Core Outcome" value="Stronger exam performance" compact />
                </div>
                <button className="mt-8 w-full rounded-lg bg-primary-fixed py-4 font-bold text-on-primary transition-all hover:brightness-110">
                  Request Early Access
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
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
              SolveWise: AI Built for <br /> <span className="text-primary-fixed">Student Achievement</span>
            </h1>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-on-secondary-container md:text-2xl">
              We are building an academic companion that helps students understand more, plan better, and perform with greater confidence.
            </p>
          </div>
          <div className="absolute -right-20 bottom-0 h-[600px] w-[600px] rounded-full border border-primary-fixed/10 blur-3xl"></div>
        </section>

        <section className="bg-surface-container-low px-8 py-24 lg:px-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="group relative">
              <div className="aspect-square overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-high">
                <img
                  alt="Students learning with AI"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEqcXCLT1koHaXcPU59ZL0vx_9DZfmZEqyFwC-mNGlvCQ8K0tBK1pCj2WlY25X_npGD6p5bCjRs2DGM6MZf1GUdgbletUy0OgCvIC2qPmocMOw9kN8uXOpoDzAhZCys7NhcBhTv6O7NnrWsMAzUCLQ4nkEgf1NTzvf-UAmrL00vTM20qNpkcYim1XZlFCSLcex7uZfMt8SP0SJvg02xJ85XJ44kejPprCvRPzE_a1dOXIgO-TMd7gfcRwVywoL8FfBI16WCssaO4M"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-primary-fixed/10 blur-[80px]"></div>
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">What is SolveWise?</h2>
              <div className="space-y-6 text-lg leading-relaxed text-on-secondary-container">
                <p>SolveWise is a startup focused on helping high school students improve academic performance with practical, everyday AI support.</p>
                <p>Our platform can solve difficult questions, create personalized study plans, and analyze mistakes from mock exams to guide smarter preparation.</p>
                <ul className="space-y-4 pt-4">
                  <AboutBullet icon="check_circle" text="Step-by-step academic explanations" />
                  <AboutBullet icon="check_circle" text="Personalized routines for each student" />
                  <AboutBullet icon="check_circle" text="Data-informed improvement after every test" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-32 lg:px-24">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">Purpose &amp; Perspective</h2>
            <div className="mx-12 mb-4 hidden h-[2px] flex-grow bg-outline-variant/20 md:block"></div>
            <p className="max-w-xs font-label text-xs uppercase tracking-widest text-on-secondary-container">Building practical AI for real student progress</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="glass-card relative overflow-hidden rounded-xl border border-outline-variant/10 p-12 md:col-span-7">
              <div className="absolute right-0 top-0 p-8">
                <span className="material-symbols-outlined text-6xl text-primary-fixed opacity-20">visibility</span>
              </div>
              <span className="mb-4 block font-headline text-lg font-bold text-primary-fixed">Our Mission</span>
              <h3 className="mb-6 font-headline text-3xl font-bold md:text-4xl">Make high-quality academic support accessible to every student.</h3>
              <p className="text-lg leading-relaxed text-on-secondary-container">
                We want students to get clear explanations, realistic study structure, and actionable feedback without needing expensive one-to-one support at every step.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-primary-fixed p-12 text-on-primary md:col-span-5">
              <span className="mb-4 block font-headline text-lg font-bold">Our Vision</span>
              <h3 className="font-headline text-3xl font-bold leading-tight">To become the most trusted AI study companion for the next generation.</h3>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <span className="material-symbols-outlined text-[12rem]">language</span>
              </div>
            </div>
            <AboutMiniCard icon="verified_user" title="Student Trust" text="Students and families need support they can understand, rely on, and use consistently." />
            <AboutMiniCard icon="auto_graph" title="Measurable Progress" text="We focus on outcomes students can feel: fewer repeated mistakes and stronger scores over time." />
            <AboutMiniCard icon="psychology" title="Human-Centered AI" text="Our AI is designed to support student learning habits, not replace effort or curiosity." />
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24 lg:px-24">
          <div className="flex flex-col items-center gap-20 lg:flex-row">
            <div className="order-2 lg:order-1 lg:w-1/2">
              <h2 className="mb-8 font-headline text-4xl font-bold tracking-tight md:text-5xl">How We Think</h2>
              <p className="mb-12 text-xl leading-relaxed text-on-secondary-container">
                We believe academic technology should be clear, encouraging, and genuinely useful in the daily life of a student preparing for important exams.
              </p>
              <div className="space-y-8">
                <MindsetRow step="01" title="Clarity First" text="Explanations should reduce stress and make difficult topics feel manageable." />
                <MindsetRow step="02" title="Consistency Wins" text="Small daily improvements and smart routines create long-term academic gains." />
                <MindsetRow step="03" title="AI with Purpose" text="Every feature should help students learn, reflect, and perform better." />
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
                  <div className="text-xs uppercase tracking-widest">Student-Centered Focus</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-32 text-center lg:px-24">
          <h2 className="mb-20 font-headline text-4xl font-bold tracking-tight md:text-5xl">Impact on Learning</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <ImpactCard icon="history" title="Better Time Use" text="Students spend less time feeling stuck and more time working on the right topics." value="Daily" meta="Guided study structure" />
            <ImpactCard icon="groups" title="Stronger Feedback Loops" text="Every solved question and every mock exam becomes a chance to improve intelligently." value="Focused" meta="Weak-topic review" />
            <ImpactCard icon="insights" title="Clearer Progress" text="Students can see what is improving, what still needs work, and where to focus next." value="Actionable" meta="Performance insights" />
          </div>
        </section>
      </main>

      <SiteFooter />
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
            Let&apos;s <span className="text-primary-fixed">Talk</span>
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-on-secondary-container md:text-xl">
            Reach out if you want to learn more about SolveWise, discuss partnerships, or explore how AI can support student success.
          </p>
        </header>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="glass-card relative overflow-hidden rounded-lg border border-outline-variant/15 p-8 md:p-12">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-primary-fixed/20 blur-[80px]"></div>
              <form action="#" className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <ContactField id="name" label="Full Name" placeholder="John Doe" type="text" />
                  <ContactField id="email" label="Email Address" placeholder="john@example.com" type="email" />
                </div>
                <ContactField id="subject" label="Subject" placeholder="How can we help?" type="text" />
                <div className="space-y-2">
                  <label className="font-label text-sm text-on-secondary-container" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="w-full resize-none rounded-md border-none bg-surface-container-highest px-6 py-4 text-white outline-none transition-all placeholder:text-on-secondary-container/40 focus:ring-2 focus:ring-primary-fixed/40"
                    id="message"
                    placeholder="Tell us about your question, school use case, or partnership idea..."
                    rows={5}
                  ></textarea>
                </div>
                <button className="w-full rounded-full bg-primary-fixed py-4 font-headline text-lg font-bold text-on-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,240,0,0.3)]" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
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
            <RouteLink className="inline-block text-[#B6B4B8] transition-transform hover:translate-x-1 hover:text-[#D4F000]" href={href}>
              {item}
            </RouteLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#464932]/15 bg-[#131313]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-12 py-16 md:grid-cols-3">
        <FooterColumn title="Product" items={homeFooterProductLinks} href="#/product" />
        <FooterColumn title="Company" items={companyLinks} href="#/about" />
        <div className="space-y-6">
          <div className="text-xl font-bold text-white">SolveWise</div>
          <p className="text-sm leading-relaxed text-[#B6B4B8]">
            AI-powered academic support for high school students preparing for better results.
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#464932]/10 px-12 py-8 md:flex-row">
        <div className="text-sm text-[#B6B4B8]">© 2026 SolveWise. AI for student growth.</div>
        <a
          aria-label="LinkedIn"
          className="text-[#B6B4B8] transition-colors hover:text-[#D4F000]"
          href="https://www.linkedin.com/in/mehmetefeyagcioglu/"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.19h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.79c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24h-4V8Z" />
          </svg>
        </a>
      </div>
    </footer>
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
