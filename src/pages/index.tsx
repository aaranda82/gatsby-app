import React from 'react'
import Layout from '../components/layout'

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const ContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div style={ContainerStyles}>
        <main style={pageStyles}>
          <h1>Welcome to my Gatsby App</h1>
          <p>This site was created to test out Gatsby</p>
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage
