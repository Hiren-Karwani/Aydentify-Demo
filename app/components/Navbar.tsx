'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing',  href: '#pricing'  },
  { label: 'Contact',  href: '#faq'      },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">AYDENTIFY</a>

          {/* Desktop */}
          <nav className="navbar-links" aria-label="Primary">
            {links.map(l => (
              <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>
            ))}
          </nav>
          <div className="navbar-ctas">
            <a href="#pricing" className="btn btn-outline btn-sm">Get started</a>
            <a href="#contact" className="btn btn-primary btn-sm">Book a Demo</a>
          </div>

          {/* Mobile burger */}
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="navbar-burger"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`drawer-overlay${open ? ' open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          className="drawer-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={e => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span className="navbar-logo">AYDENTIFY</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{ width: 36, height: 36, border: '1px solid var(--c-border)', borderRadius: 'var(--r-sm)', background: 'transparent', display: 'grid', placeItems: 'center', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '12px 14px', borderRadius: 'var(--r-sm)', fontSize: 15, fontWeight: 500, color: 'var(--c-ink)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 24 }}>
            <a href="#pricing" className="btn btn-outline btn-md" style={{ width: '100%' }}>Get started</a>
            <a href="#contact" className="btn btn-primary btn-md" style={{ width: '100%' }}>Book a Demo</a>
          </div>
        </div>
      </div>
    </>
  )
}
