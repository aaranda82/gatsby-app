import React from 'react'
import { Link } from 'gatsby'

const NameStyle = {
  fontSize: '1.5rem',
  margin: '10px',
  textDecoration: 'none',
  color: 'black',
}
const LinkStyles = {
  textDecoration: 'none',
  color: 'black',
  margin: '0 10px',
}

const headingStyles = {
  backgroundColor: 'lightblue',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default function NavBar() {
  return (
    <header style={headingStyles}>
      <title>Gatsby App</title>
      <div style={{ width: '70%', padding: '10px' }}>
        <Link to="/" style={NameStyle}>
          Gatsby App
        </Link>
      </div>
      <div style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
        <Link to="/todo" style={LinkStyles}>
          Todo App
        </Link>
        <Link to="/counter" style={LinkStyles}>
          Counter
        </Link>
      </div>
    </header>
  )
}
