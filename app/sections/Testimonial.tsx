import { Star } from 'lucide-react'

interface Props { quote: string; role: string; avatarSeed: string }

export function Testimonial({ quote, role, avatarSeed }: Props) {
  return (
    <section className="testimonial-wrap">
      <div className="container">
        <figure className="testimonial-card">
          <div className="testimonial-stars" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="var(--c-orange-500)" color="var(--c-orange-500)" />
            ))}
          </div>
          <blockquote className="testimonial-quote">"{quote}"</blockquote>
          <figcaption className="testimonial-author">
            <img
              src={`https://picsum.photos/seed/${avatarSeed}/80/80`}
              alt=""
              width={48} height={48}
              className="testimonial-avatar"
              loading="lazy"
            />
            <span className="testimonial-role">{role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
