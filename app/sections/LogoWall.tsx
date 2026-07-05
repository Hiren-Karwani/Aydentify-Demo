const brands = ['Hindustan Unilever','Cipla','Godrej','Britannia','Revlon','Lakmé','M·A·C','Nestlé','VLCC']

export function LogoWall() {
  return (
    <section className="logo-wall">
      <div className="container">
        <p className="logo-wall-label">Connect with decision makers at</p>
        <ul className="logo-wall-grid" role="list">
          {brands.map(b => (
            <li key={b} className="logo-wall-item">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
