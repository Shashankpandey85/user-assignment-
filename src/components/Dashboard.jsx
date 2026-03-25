import { useState, useEffect, useMemo } from 'react'
import { initials, getColor } from '../utils/helpers.js'

function Dashboard({ onSelect }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(d => { setUsers(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const filtered = useMemo(() => {
    let list = [...users]
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(u =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      )
    }
    if (sortKey) {
      list.sort((a, b) => {
        const av = sortKey === 'name' ? a.name : a.company.name
        const bv = sortKey === 'name' ? b.name : b.company.name
        return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
      })
    }
    return list
  }, [users, query, sortKey, sortDir])

  const SortBtn = ({ label, k }) => {
    const active = sortKey === k
    const arrow = active ? (sortDir === 'asc' ? '↑' : '↓') : '↕'
    return (
      <button className={`sort-btn ${active ? 'active' : ''}`} onClick={() => handleSort(k)}>
        {label} <span className="sort-arrow">{arrow}</span>
      </button>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">User <span>Directory</span></h1>
        <p className="page-subtitle">All registered users — search, sort, and explore profiles.</p>
      </div>

      <div className="controls">
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            placeholder="Search by name or email…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="sort-group">
          <SortBtn label="Name" k="name" />
          <SortBtn label="Company" k="company" />
        </div>
        <div className="count-badge">
          {loading ? '…' : `${filtered.length} / ${users.length} users`}
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i} className="skeleton-row">
                    <td><div className="skel w60" /></td>
                    <td><div className="skel w50" /></td>
                    <td><div className="skel w40" /></td>
                    <td><div className="skel w40" /></td>
                    <td><div className="skel w30" style={{ marginLeft: 'auto' }} /></td>
                  </tr>
                ))
              : filtered.length === 0
              ? (
                  <tr>
                    <td colSpan={5}>
                      <div className="empty">
                        <div className="empty-icon">◎</div>
                        <div className="empty-text">No users match your search.</div>
                      </div>
                    </td>
                  </tr>
                )
              : filtered.map((u, idx) => (
                  <tr
                    key={u.id}
                    onClick={() => onSelect(u)}
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    <td>
                      <div className="td-name">
                        <div className="avatar" style={{ color: getColor(u.name) }}>
                          {initials(u.name)}
                        </div>
                        {u.name}
                      </div>
                    </td>
                    <td><span className="td-email">{u.email.toLowerCase()}</span></td>
                    <td><span className="td-phone">{u.phone}</span></td>
                    <td>
                      <span className="td-company">
                        <span className="company-dot" style={{ background: getColor(u.company.name) }} />
                        {u.company.name}
                      </span>
                    </td>
                    <td>
                      <button className="view-btn" onClick={e => { e.stopPropagation(); onSelect(u) }}>
                        VIEW →
                      </button>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
