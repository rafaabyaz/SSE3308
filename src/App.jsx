import { useState, useEffect } from 'react'
import { firestoreService } from './services/firebase'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dbStatus, setDbStatus] = useState('Connecting to Firestore...')
  const [items, setItems] = useState([])

  // Test Firestore connection on mount
  useEffect(() => {
    firestoreService.getCollection('test-connection')
      .then((data) => {
        setDbStatus('Connected to Firestore successfully!')
        setItems(data)
      })
      .catch((err) => {
        console.error(err)
        setDbStatus('Failed to connect to Firestore. Check console.')
      })
  }, [])

  // Function to write test data
  const handleAddDocument = async () => {
    try {
      await firestoreService.addDocument('test-connection', { 
        message: 'Hello from React & Firebase!',
        timestamp: new Date().toISOString()
      })
      // Refresh list
      const updated = await firestoreService.getCollection('test-connection')
      setItems(updated)
    } catch (err) {
      console.error('Error adding document:', err)
    }
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
          {/* Firestore Status Banner */}
          <p className="mt-2 text-sm font-semibold text-primary">
            Status: {dbStatus}
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        {/* Firestore Test Button */}
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition mt-2"
          onClick={handleAddDocument}
        >
          Add Firestore Record
        </button>

        {/* Display Firestore Items */}
        <div className="w-full max-w-md px-4 mt-4 text-left">
          <h3 className="text-lg font-bold">Firestore Records:</h3>
          <ul className="mt-2 space-y-1">
            {items.map((item) => (
              <li key={item.id} className="p-2 bg-gray-100 dark:bg-zinc-800 rounded text-sm">
                {item.message || JSON.stringify(item)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App