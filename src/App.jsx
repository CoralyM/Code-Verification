import { useState } from 'react'
import Title from './components/Title'
import Layout from './components/Layout'
import Input from './components/Input'
import Keyboard from './components/Keyboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Title title="Vérification du code"/>
        <Keyboard />
      </Layout>
    </>
  )
}

export default App
