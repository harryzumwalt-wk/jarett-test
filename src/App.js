import './App.css'
import Paragraph from './components/paragraph'
import Form from './components/form'



function App() {
  return (
    <div className="App">
      <Paragraph name={"harry"} age={27}/><br />
      <Paragraph name={"jarett"} age={23}/><br />
      <Paragraph name={"sonia"} age={80}/>
      <Form />
    </div>
  );
}

export default App


// components have 2 main features
// - Props
// - State