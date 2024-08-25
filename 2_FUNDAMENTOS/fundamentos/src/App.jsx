import './App.css'
import Challenge from './components/Challenge'
import Events from './components/Events'
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplatesExpressions from './components/TemplateExpressions'

function App() {

  // COMENTÁRIO

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      {/* COMENTÁRIO */}
      <TemplatesExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  )
}

export default App
