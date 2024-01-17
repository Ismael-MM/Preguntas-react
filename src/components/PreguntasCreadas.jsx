import Pregunta from "./Pregunta"
export default function PreguntasCreadas({ preguntas,borrarPregunta}) {
    console.log(borrarPregunta)
    return (
        <ul>
            {preguntas.map(e =>
                <li key={e.id}>
                    <Pregunta pregunta={e} borrarPregunta={borrarPregunta} />
                </li>)}
        </ul>
    )
}