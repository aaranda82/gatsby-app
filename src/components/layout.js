import React from 'react'
import NavBar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
    </>
  )
}
