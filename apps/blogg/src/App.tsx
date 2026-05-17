import './App.css'
import { formatDate } from '@myapp/utils'

function App() {


  return (
    <>
      <h1>Welcome to first monorepo</h1>
      <h3>{formatDate(new Date())}</h3>
    </>
  )
}

export default App
