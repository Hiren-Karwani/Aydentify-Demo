import { AccordionItem } from '@/app/components/AccordionItem'

const faqs = [
  { q: 'How do I start using Aydentify for free?', a: 'You can sign up for the Free Plan with just an email - no credit card needed. It gives you basic filters to explore leads in 1 country. Click "Get Started" on our pricing section to begin!' },
  { q: "What's the difference between Free and Starter Plans?", a: "The Free Plan lets you explore leads with 15 people credits/week and basic filters, but no exports. Starter ($249/mo) adds 1,000 people credits/mo, 15 product credits/mo, and lets you export people lists. Both cover 1 country." },
  { q: "Can I export my leads, and which plans allow it?", a: "You can export people lists with Starter, Growth, and Enterprise Plans. Only Enterprise lets you export product lists up to your custom limit. Free Plan does not support exports." },
  { q: 'What happens to my unused credits?', a: 'Free Plan credits expire weekly, Starter credits expire monthly. Growth and Enterprise plan credit rollover policies will be announced soon.' },
  { q: 'When will Growth and Enterprise Plans be available?', a: "Growth and Enterprise Plans are launching soon! They will offer more filters, credits, and countries. Join the waitlist on our pricing section to get notified." },
  { q: 'What is your refund policy?', a: "We are here to help! Paid plans do not offer cash refunds, as noted in our terms of use, but if you spot incorrect product or people data, just let us know. We will review it and add credits back to your account within 24 hours." },
]

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="faq-wrap">
          <h2 className="faq-h2">Frequently Asked Questions</h2>
          {faqs.map(item => (
            <AccordionItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
