import { Check } from 'lucide-react'

const features = [
  {
    title: 'Discover Brands Buying Your Ingredients',
    intro: "Find out who's buying your ingredient — in one click.",
    points: [
      'See all the brands using your ingredients across thousands of products.',
      'Filter by market, size, or location to zero in on your best leads.',
      'Get direct contacts of the people who make the buying decisions.',
    ],
    accent: '#e8edff',
    flip: false,
  },
  {
    title: 'Discover Brands Buying Your Packaging',
    intro: "Find out who's buying your packaging — in one click.",
    points: [
      'See which brands use your packaging across multiple categories and products.',
      'Filter by market, size, or location to find your best leads.',
      'Connect directly with packaging development and procurement teams.',
    ],
    accent: '#dff0ff',
    flip: true,
  },
  {
    title: 'Reach the Buyers Behind the Brands',
    intro: 'Get verified emails, mobile numbers, and LinkedIn profiles of the people who decide whom to buy from.',
    points: [
      'Identify procurement decision-makers in seconds.',
      'Access verified contacts — phone, email, and LinkedIn.',
      'Go straight to buyers instead of chasing middlemen.',
    ],
    accent: '#fff0e4',
    flip: false,
  },
]

function FeatureMock() {
  return (
    <div className="feat-table-shell">
      <div className="feat-toolbar">
        <div className="feat-logo">A</div>
        {['Apply Filters','Export All','Select All'].map(t => (
          <span key={t} className="feat-chip">{t}</span>
        ))}
      </div>
      <div className="feat-col-headers">
        {['Product Name','Pkg Type','Category','Marketer'].map(h => (
          <div key={h} className="feat-col-h">{h}</div>
        ))}
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="feat-data-row">
          {[82, 55, 38, 68].map((w, j) => (
            <div key={j} className="feat-cell">
              <div className="feat-skel" style={{ width: `${w - i * 4}%` }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function Benefits() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <header className="benefits-header">
          <span className="pill">Benefits</span>
          <h2 className="benefits-h2">Experience the Advantages</h2>
          <p className="benefits-sub">Discover how Aydentify supercharges your sales</p>
        </header>

        {features.map(f => (
          <div key={f.title} className="feature-row">
            {/* Text col */}
            <div className="feature-text" style={{ order: f.flip ? 2 : 1 }}>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-intro">{f.intro}</p>
              <ul className="check-list">
                {f.points.map(p => (
                  <li key={p} className="check-item">
                    <span className="check-icon">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock col */}
            <div
              className="feature-mock"
              style={{ order: f.flip ? 1 : 2, background: f.accent }}
            >
              <FeatureMock />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
