import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Layout from './components/Layout'
import FormRegister from './pages/FormRegister'
function App() {  
  return (
    <Layout>
      <FormRegister/>
    </Layout>
  )
}

export default App
