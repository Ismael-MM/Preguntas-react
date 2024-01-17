import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "./components/FormularioPregunta"
import FormularioPregunta from './components/FormularioPregunta';
import PreguntasCreadas from './components/PreguntasCreadas';
import { useState } from 'react';

let idActualPregunta = 1;

function App() {
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) =>{

    nueva.id = idActualPregunta;
    idActualPregunta++;
    setPreguntas([...preguntas, nueva])
  }

  const removeQuestion = (pregunta) =>{
    const filtredData = preguntas.filter(e => e.id !== pregunta.id);
    setPreguntas(filtredData);
  }


  return (
    <div className="App">
      <FormularioPregunta
      aniadePregunta={addQuestion}
      >
      </FormularioPregunta>
      <PreguntasCreadas 
      preguntas={preguntas}
      borrarPregunta={removeQuestion}
      ></PreguntasCreadas>
    </div>
  );
}

export default App;
