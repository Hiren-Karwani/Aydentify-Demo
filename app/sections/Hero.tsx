import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero">
      <div aria-hidden className="hero-glow" />

      <div className="container hero-content">
        <h1 className="hero-h1">
          Identify Your<br />Ideal Customers in Seconds
        </h1>
        <p className="hero-sub">
          Find brands buying your ingredients or packaging
          and get verified contacts of the people in charge
        </p>
        <div className="hero-cta">
          <a href="#pricing" className="btn btn-primary btn-lg">
            Try Aydentify For Free
          </a>
        </div>

        {/* Mockup */}
        <div className="hero-mockup-wrap">
          {/* ── Main app window ── */}
          <div className="mockup-main">
            <div className="mockup-toolbar">
              AYDENTIFY
            </div>
            <div className="mockup-body">
              {/* Sidebar */}
              <div className="mockup-sidebar">
                <div className="sidebar-icon active" />
                <div className="sidebar-icon" />
                <div className="sidebar-icon" />
                <div className="sidebar-icon" />
              </div>

              {/* Content */}
              <div className="mockup-content">
                <p className="mockup-greeting">Hi Jay,</p>

                <div className="mockup-search">
                  <Search size={11} color="var(--c-ink-subtle)" />
                  Search for Products
                </div>

                <div className="mockup-grid">
                  {/* People */}
                  <div>
                    <div className="mockup-section-label">
                      <span className="mockup-label">People</span>
                      <span className="mockup-viewall">View All</span>
                    </div>
                    {['Priya S.', 'Rohan M.', 'Sana I.'].map(n => (
                      <div key={n} className="mockup-person-row">
                        <div className="mockup-avatar" />
                        <span className="mockup-person-name">{n}</span>
                      </div>
                    ))}
                  </div>

                  {/* Products */}
                  <div>
                    <div className="mockup-section-label">
                      <span className="mockup-label">Products</span>
                      <span className="mockup-viewall">View All</span>
                    </div>
                    <div className="mockup-products">
                      {[
                        { name: 'Lactose',   color: '#fde68a' },
                        { name: 'Titanium\nDioxide',   color: '#bfdbfe' },
                        { name: 'Microcryst.\nCellulose', color: '#bbf7d0' },
                      ].map(p => (
                        <div key={p.name} className="mockup-product-thumb">
                          <div className="mockup-product-img" style={{ background: p.color }} />
                          <span className="mockup-product-name">{p.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* My Lists */}
                  <div className="mockup-lists-section">
                    <div className="mockup-section-label">
                      <span className="mockup-label">My Lists</span>
                      <span className="mockup-viewall">View All</span>
                    </div>
                    {[
                      { name: 'Lactose Monohydrate',    meta: '48 Products' },
                      { name: 'Purchase Managers Goa',  meta: '24 People'   },
                    ].map(l => (
                      <div key={l.name} className="mockup-list-row">
                        <span className="mockup-list-name">{l.name}</span>
                        <span className="mockup-list-meta">{l.meta}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Floating: Find People ── */}
          <div className="float-card float-find-people">
            <div className="float-card-header">Find People</div>
            <div className="float-card-body">
              {['R**** D****', 'N**** C****', 'A**** S****'].map((n, i) => (
                <div key={i} className="float-row">
                  <div className="mockup-avatar" />
                  <span>{n}</span>
                  <div className="float-skel" style={{ width: '40%', marginLeft: 'auto' }} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Floating: Search Products ── */}
          <div className="float-card float-search-products">
            <div className="float-card-header">Search Products</div>
            <div style={{ padding: 'clamp(8px, 1vw, 14px)' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                border: '1px solid var(--c-border)', borderRadius: 'var(--r-xs)',
                padding: '5px 10px', marginBottom: 10,
                fontSize: 'clamp(8px, 0.8vw, 11px)', color: 'var(--c-ink-faint)',
              }}>
                <Search size={10} color="var(--c-ink-subtle)" />
                Enter an ingredient
              </div>
              {[75, 58, 42].map((w, i) => (
                <div key={i} className="float-skel" style={{ width: `${w}%`, marginBottom: 8 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
