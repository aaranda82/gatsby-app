import React, { useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`

const Sub = styled.div`
  width: 100%;
  margin: 20px 0;
  text-align: center;
  font-size: 50px;
`
const Button = styled.button`
  width: 75px;
  height: 50px;
  font-size: 30px;
`

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <Layout>
      <Container>
        <Sub>{count}</Sub>
        <Sub>
          <Button
            onClick={() => {
              setCount(count + 1)
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              setCount(count - 1)
            }}
          >
            -
          </Button>
        </Sub>
      </Container>
    </Layout>
  )
}

export default Counter
