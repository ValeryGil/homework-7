import { Link, NavLink } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#e3f2fd' }}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Main</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <CustomLink to="about">About</CustomLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="info">Info</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="posts">Posts</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
