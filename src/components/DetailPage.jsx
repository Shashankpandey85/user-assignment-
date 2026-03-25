import { initials, getColor } from '../utils/helpers.js'

function DetailPage({ user, onBack }) {
  const { name, username, email, phone, website, address, company } = user

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={onBack}>← Back to Directory</button>

      <div className="detail-hero">
        <div className="detail-avatar" style={{ color: getColor(name) }}>
          {initials(name)}
        </div>
        <div>
          <div className="detail-name">{name}</div>
          <div className="detail-username">@{username}</div>
          <div className="detail-company-badge">
            ◆ {company.name}
          </div>
        </div>
      </div>

      <div className="detail-grid">

        <div className="detail-card">
          <div className="card-label">Contact</div>
          <div className="detail-field">
            <div className="field-key">Email</div>
            <div className="field-val"><a href={`mailto:${email}`}>{email.toLowerCase()}</a></div>
          </div>
          <div className="detail-field">
            <div className="field-key">Phone</div>
            <div className="field-val">{phone}</div>
          </div>
          <div className="detail-field">
            <div className="field-key">Website</div>
            <div className="field-val">
              <a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
            </div>
          </div>
        </div>

        <div className="detail-card">
          <div className="card-label">Address</div>
          <div className="detail-field">
            <div className="field-key">Street</div>
            <div className="field-val">{address.street}, {address.suite}</div>
          </div>
          <div className="detail-field">
            <div className="field-key">City</div>
            <div className="field-val">{address.city} — {address.zipcode}</div>
          </div>
          <div className="detail-field">
            <div className="field-key">Coordinates</div>
            <div className="field-val" style={{ fontFamily: 'DM Mono,monospace', fontSize: '.78rem', color: 'var(--muted2)' }}>
              {address.geo.lat}, {address.geo.lng}
            </div>
          </div>
        </div>

        <div className="detail-card">
          <div className="card-label">Company</div>
          <div className="detail-field">
            <div className="field-key">Name</div>
            <div className="field-val">{company.name}</div>
          </div>
          <div className="detail-field">
            <div className="field-key">Catch Phrase</div>
            <div className="field-val" style={{ fontStyle: 'italic', color: 'var(--muted2)' }}>"{company.catchPhrase}"</div>
          </div>
          <div className="detail-field">
            <div className="field-key">Business</div>
            <div className="field-val">{company.bs}</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailPage
