'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'

type Billing = 'monthly' | 'annual'

const plans = [
  {
    name: 'Free Forever',
    tagline: 'Start finding customers without spending a penny.',
    monthly: 0, annual: 0,
    features: ['Basic Search Filters','15 people credits / week','1 product credit / week','Access to 1 country','Credits expire weekly','Email support'],
    cta: 'Get started', variant: 'btn-outline', featured: false, enterprise: false,
  },
  {
    name: 'Lite Plan',
    tagline: 'Grow your Indian sales with affordable lead discovery.',
    monthly: 149, annual: 119,
    features: ['Advanced Search Filters','400 people credits / month','15 product credits / month','Access to India','Credits expire monthly','Support via live chat'],
    cta: 'Buy Now', variant: 'btn-primary', featured: false, enterprise: false,
  },
  {
    name: 'Starter Plan',
    tagline: 'Grow your sales with affordable lead discovery.',
    monthly: 249, annual: 199,
    features: ['Advanced Search Filters','1,000 people credits / month','30 product credits / month','Access to any 1 country','Credits expire monthly','Support via live chat'],
    cta: 'Buy Now', variant: 'btn-primary', featured: true, enterprise: false,
  },
  {
    name: 'Growth & Enterprise',
    tagline: 'Supercharge global sales for your whole team.',
    monthly: null, annual: null,
    features: ['Premium Search Filters','Custom limit of people credits','Custom limit of product credits','Job change alerts','Access to 121 countries','Credits expire yearly','Premium support'],
    cta: 'Join Waitlist', variant: 'btn-dark', featured: false, enterprise: true,
  },
]

export function PricingToggle() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <>
      {/* Toggle */}
      <div className="billing-toggle">
        <div className="billing-toggle-inner">
          {(['monthly', 'annual'] as Billing[]).map(b => (
            <button
              key={b}
              className={`billing-btn${billing === b ? ' active' : ''}`}
              onClick={() => setBilling(b)}
            >
              {b === 'monthly' ? 'Monthly' : 'Annual'}
              {b === 'annual' && <span style={{ fontSize: '0.85em', opacity: 0.85 }}> · Save ~20%</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Credit tags */}
      <div className="credit-tags">
        <span className="credit-tag">1 Email = 2 People Credits</span>
        <span className="credit-tag">1 Mobile = 10 People Credits</span>
      </div>

      {/* Cards */}
      <div className="pricing-grid">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`plan-card${plan.featured ? ' featured' : ''}${plan.enterprise ? ' enterprise' : ''}`}
          >
            <p className="plan-name">{plan.name}</p>
            <p className="plan-tagline">{plan.tagline}</p>

            {plan.monthly === null ? (
              <p className="plan-coming">Coming Soon</p>
            ) : (
              <div className="plan-price">
                <span className="plan-price-amount">
                  ${billing === 'monthly' ? plan.monthly : plan.annual}
                </span>
                <span className="plan-price-period">per user/month</span>
              </div>
            )}

            <p className="plan-features-label">{"What's included:"}</p>
            <ul className="plan-features">
              {plan.features.map(f => (
                <li key={f} className="plan-feature">
                  <span className={`plan-check ${plan.featured ? 'filled' : 'outline'}`}>
                    <Check size={9} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#" className={`btn ${plan.variant} btn-md plan-cta`}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
