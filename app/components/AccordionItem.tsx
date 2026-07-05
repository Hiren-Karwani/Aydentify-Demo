'use client'
import { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'

interface Props { question: string; answer: string }

export function AccordionItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <div className="accordion-item">
      <button
        id={`q-${id}`}
        aria-controls={`a-${id}`}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className="accordion-btn"
      >
        {question}
        <span className={`accordion-chevron${open ? ' open' : ''}`}>
          <ChevronDown size={16} strokeWidth={2.5} />
        </span>
      </button>

      <div
        id={`a-${id}`}
        role="region"
        aria-labelledby={`q-${id}`}
        className="accordion-body"
        style={{ maxHeight: open ? 600 : 0 }}
      >
        <p className="accordion-text">{answer}</p>
      </div>
    </div>
  )
}
