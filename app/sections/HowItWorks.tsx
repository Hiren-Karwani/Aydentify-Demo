import { Search, Users, FolderOpen, Check } from 'lucide-react'

const steps = [
  { Icon: Search,     title: 'Find Product', body: 'Type in an ingredient or packaging and see consumer brands buying it.'              },
  { Icon: Users,      title: 'Find People',  body: 'Get direct mobile, email, and LinkedIn contacts of decision-makers.'               },
  { Icon: FolderOpen, title: 'Save Lists',   body: 'Save contacts in a list and export them to CSV anytime.'                           },
]

const rows = [
  { name: 'Aarav Shah',  email: 'aarav@barentz.com',        verified: true,  phone: 'Get Phone',        title: 'Purchase Manager' },
  { name: 'Meera Joshi', email: 'meera@briohospitality.com', verified: true,  phone: '+91 99••• •••85',  title: 'Head of Product'  },
  { name: 'Ankit Rao',   email: 'ankit@lupinph.com',         verified: false, phone: '—',                title: 'Manager — R&D'    },
]

export function HowItWorks() {
  return (
    <section id="features" className="section">
      <div className="container">
        <header className="hiw-header">
          <span className="pill">How it works</span>
          <h2 className="hiw-h2">
            Identify Your Ideal Customers{' '}
            <span style={{ color: 'var(--c-orange-500)' }}>in Seconds</span>
          </h2>
          <p className="hiw-sub">
            Aydentify shows you which brands buy your ingredients or packaging and gives you
            verified contacts of the decision makers, so you can approach them directly.
          </p>
        </header>

        <div className="hiw-card">
          {/* Steps */}
          <div className="hiw-steps">
            {steps.map(({ Icon, title, body }) => (
              <div key={title}>
                <Icon size={18} color="var(--c-ink-muted)" />
                <h3 className="hiw-step-title">{title}</h3>
                <p className="hiw-step-body">{body}</p>
              </div>
            ))}
          </div>

          {/* App mock table */}
          <div className="hiw-table-wrap">
            <div className="hiw-tab-bar">
              <div className="hiw-tab-logo">A</div>
              {['People', 'Ingredient', 'Packaging'].map((tab, i) => (
                <span key={tab} className={`hiw-tab${i === 0 ? ' active' : ''}`}>{tab}</span>
              ))}
              <div className="hiw-tab-actions">
                <button className="hiw-tab-btn">↺ Refresh</button>
                <button className="hiw-tab-btn primary">↑ Export CSV</button>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="hiw-table">
                <thead>
                  <tr>
                    {['Name','Work Email','Email Status','Phone','Title'].map(h => (
                      <th key={h} className="hiw-th">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(r => (
                    <tr key={r.name}>
                      <td className="hiw-td name">
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--c-surface-alt)', display: 'inline-block', flexShrink: 0 }} />
                          {r.name}
                        </span>
                      </td>
                      <td className="hiw-td email">{r.email}</td>
                      <td className="hiw-td">
                        {r.verified
                          ? <span className="badge-verified"><Check size={10} strokeWidth={3} /> Verified</span>
                          : <span style={{ color: 'var(--c-ink-subtle)' }}>—</span>}
                      </td>
                      <td className="hiw-td">
                        {r.phone === 'Get Phone'
                          ? <span className="badge-phone">{r.phone}</span>
                          : <span>{r.phone}</span>}
                      </td>
                      <td className="hiw-td">{r.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
