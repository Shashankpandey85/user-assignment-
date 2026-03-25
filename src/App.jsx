import { useState } from 'react'
import Dashboard from './components/Dashboard.jsx'
import DetailPage from './components/DetailPage.jsx'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <div className="logo-dot" />
          BuyerForeSight
        </div>
        <div className="header-tag">FRONTEND ASSESSMENT</div>
      </header>
      <main className="container">
        {selected
          ? <DetailPage user={selected} onBack={() => setSelected(null)} />
          : <Dashboard onSelect={setSelected} />
        }
      </main>
    </div>
  )
}

export default App
