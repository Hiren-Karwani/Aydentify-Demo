import { PricingToggle } from '@/app/components/PricingToggle'

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <header className="pricing-header">
          <h2 className="pricing-h2">Simple, credit-based pricing</h2>
          <p className="pricing-sub">Choose the plan that fits your sales goals</p>
        </header>
        <PricingToggle />
      </div>
    </section>
  )
}
