import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Menu, X, MapPin, Phone, Mail,
  ShieldCheck, Clock3, Users, HardHat, Package, FileText,
  ChevronRight, Building2, Eye, Compass, CheckCircle2
} from 'lucide-react'

const phone = '+234 (0) 803 545 8521'
const email = 'upadtechgloballtd@gmail.com'
const address = '32 King Pereku Street, GRA Phase 2, Port Harcourt, Rivers State'

const services = [
  { icon: Package, title: 'Roofing Supply', text: 'Premium roofing materials supplied for residential and commercial projects.' },
  { icon: HardHat, title: 'Construction', text: 'Expert building and construction services delivered to high quality standards.' },
  { icon: Building2, title: 'Procurement', text: 'Reliable sourcing and procurement of construction materials and equipment.' },
  { icon: FileText, title: 'General Contracts', text: 'Comprehensive contracting services for building and infrastructure projects.' },
]

const projects = [
  { src: '/images/construction-project.jpeg', title: 'Building Construction', tag: 'Construction' },
  { src: '/images/exterior-finishing.jpeg', title: 'Exterior Finishing', tag: 'Building works' },
  { src: '/images/roofing-project.jpeg', title: 'Roofing Project', tag: 'Roofing' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Construction', message: '' })
  const [sent, setSent] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const submitEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry: ${form.service}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span><MapPin size={14} /> RC: 1350857&nbsp; | &nbsp;{address}</span>
          <span><Phone size={14} /> {phone}</span>
          <a href={`mailto:${email}`}><Mail size={14} /> {email}</a>
        </div>
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="UPADTECH GLOBAL LTD home">
          <span className="brand-mark"><span /></span>
          <span className="brand-copy"><strong>UPAD<span>TECH</span></strong><small>G L O B A L&nbsp; L T D</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item === 'Home' ? 'home' : item.toLowerCase().replace(' ', '-')}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-quote" href="#contact" onClick={closeMenu}>Get a Quote <ArrowUpRight size={17} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src="/images/construction-project.jpeg" alt="UPADTECH building construction project" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">UPADTECH GLOBAL LTD · EST. 2016</p>
            <h1>Roofing Supply, Procurement, Construction and General Contracts</h1>
            <p className="hero-sub">We Build Roofs That Last. We Deliver Quality You Can Trust.</p>
            <div className="hero-actions">
              <a className="btn btn-orange" href="#contact">Get a Free Quote <ArrowRight size={18} /></a>
              <a className="btn btn-outline" href="#services">Explore Services</a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <span className="eyebrow orange-text">WHAT WE DO</span>
            <h2>Our Services</h2>
            <p>Comprehensive solutions tailored to your construction and procurement needs.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <span className="service-icon"><Icon size={25} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-item"><ShieldCheck /><div><h3>Quality Materials</h3><p>We focus on durable materials and dependable workmanship.</p></div></div>
          <div className="trust-item"><Clock3 /><div><h3>On-Time Delivery</h3><p>Committed to delivering projects on schedule.</p></div></div>
          <div className="trust-item"><Users /><div><h3>Expert Team</h3><p>Experienced professionals dedicated to quality and service.</p></div></div>
        </section>

        <section className="section about-section" id="about-us">
          <div className="about-photo">
            <img src="/images/roofing-project.jpeg" alt="Roofing project completed by UPADTECH" />
            <div className="photo-note"><strong>Since 2016</strong><span>Building with purpose</span></div>
          </div>
          <div className="about-copy">
            <span className="eyebrow orange-text">WHO WE ARE</span>
            <h2>About UPADTECH GLOBAL LTD</h2>
            <p>UPADTECH GLOBAL LTD is a construction and procurement company established in 2016. The company provides roofing supply, building construction, procurement and general contracting services.</p>
            <p>We are committed to quality, integrity and professionalism, working to deliver dependable solutions that meet our clients' needs.</p>
            <div className="mission-card"><Compass /><div><h3>Our Mission</h3><p>To deliver reliable, innovative and sustainable construction solutions while upholding high standards of safety, quality and integrity.</p></div></div>
            <div className="mission-card"><Eye /><div><h3>Our Vision</h3><p>To be a trusted construction and procurement partner recognised for excellence and lasting contributions to communities and infrastructure.</p></div></div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="eyebrow orange-text">OUR WORK</span>
            <h2>Selected Projects</h2>
            <p>A look at real project photographs supplied by UPADTECH GLOBAL LTD.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.src} alt={project.title} />
                <div className="project-caption"><span>{project.tag}</span><h3>{project.title}</h3><ChevronRight /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="values-section">
          <div className="values-title"><span className="eyebrow">WHAT GUIDES US</span><h2>Our Core Values</h2></div>
          {['Integrity', 'Professionalism', 'Quality', 'Reliability', 'Customer Satisfaction'].map(v => <span className="value-pill" key={v}><CheckCircle2 size={16} />{v}</span>)}
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <span className="eyebrow orange-text">LET'S DISCUSS YOUR PROJECT</span>
            <h2>Build with confidence.</h2>
            <p>Contact UPADTECH GLOBAL LTD to discuss your roofing, construction, procurement or general contracting needs.</p>
            <div className="contact-line"><MapPin /><span>{address}</span></div>
            <div className="contact-line"><Phone /><a href="tel:+2348035458521">{phone}</a></div>
            <div className="contact-line"><Mail /><a href={`mailto:${email}`}>{email}</a></div>
            <a className="btn btn-orange whatsapp" href="https://wa.me/2348035458521" target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight size={18} /></a>
          </div>
          <form className="contact-form" onSubmit={submitEnquiry}>
            <h3>Request a Quote</h3>
            <label>Full name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Your name" /></label>
            <div className="form-row">
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@example.com" /></label>
              <label>Phone number<input required value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} placeholder="Your phone" /></label>
            </div>
            <label>Service required<select value={form.service} onChange={e => setForm({...form, service:e.target.value})}>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label>
            <label>Tell us about your project<textarea required rows={4} value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Briefly describe what you need..." /></label>
            <button className="btn btn-orange submit-btn" type="submit">Send Enquiry <ArrowRight size={18} /></button>
            {sent && <p className="form-note">Your email app should open with your enquiry ready to send.</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div><a className="footer-brand" href="#home">UPADTECH GLOBAL LTD</a><p>Building stronger homes and infrastructure through trusted expertise and quality service.</p></div>
          <div><h3>Contact Us</h3><p>{address}</p><p>{phone}</p><p>{email}</p></div>
          <div><h3>Quick Links</h3><div className="footer-links"><a href="#home">Home</a><a href="#about-us">About Us</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div></div>
        </div>
        <div className="footer-bottom"><span>RC 1350857 · Founder & Managing Director: Uchenna Daniel Akanu</span><span>© {new Date().getFullYear()} UPADTECH GLOBAL LTD. All Rights Reserved.</span><strong>Building Trust. Delivering Excellence.</strong></div>
      </footer>
    </>
  )
}

export default App
