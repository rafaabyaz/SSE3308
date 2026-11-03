export default function Navbar({ searchOpen, onSearchToggle }) {
  return (
    <header className="crave-header">
      <a className="crave-brand" href="#center" aria-label="Crave home">
        <span className="crave-brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 14a3.5 3.5 0 0 1-.2-7A4.6 4.6 0 0 1 12 4.3 4.6 4.6 0 0 1 19.2 7a3.5 3.5 0 0 1-.2 7v4H5v-4Z" />
            <path d="M5 14h14M7 17.5v-2m10 2v-2" />
          </svg>
        </span>
        <span>crave<span className="crave-brand-period">.</span></span>
      </a>

      <nav className="crave-nav" aria-label="Main navigation">
        <a href="#center">Home</a>
        <a href="#center">Restaurants</a>
        <a href="#center">Categories</a>
        <a href="#next-steps">About</a>
        <a href="#next-steps">Contact</a>
      </nav>

      <div className="crave-actions">
        <button
          className="crave-icon-button"
          type="button"
          aria-label="Search"
          aria-expanded={searchOpen}
          onClick={onSearchToggle}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.2 4.2" />
          </svg>
        </button>
        <button className="crave-icon-button" type="button" aria-label="Favorites">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20.8 8.8c0 5.1-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.8A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.4Z" />
          </svg>
        </button>
        <button className="crave-icon-button" type="button" aria-label="Profile">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
          </svg>
        </button>
        <button className="crave-icon-button" type="button" aria-label="Cart">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 2-1.6L21 8H6" />
            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        </button>
      </div>

      {searchOpen && (
        <label className="crave-search">
          <span className="sr-only">Search</span>
          <input autoFocus type="search" placeholder="Search restaurants or dishes" />
        </label>
      )}
    </header>
  )
}
