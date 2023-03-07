import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Card } from './Components/Card'

function App() {
  
  const [user, setUser] = useState({
    nombre : "",
    apellido : "",
    email : "",
    cancionFavorita : ""
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const nombreSinEspacios = (user.nombre).trim()

    console.log(nombreSinEspacios)
    
    if(nombreSinEspacios.length >= 3 && (user.apellido).length >= 6) {
      setShow(true)
      setErr(false)
    }else{
      setErr(true)
    }
  }

  return (
    <div className="App">
      <h1>Cuéntanos cuál es tu canción favorita</h1>
      <form onSubmit={handleSubmit} className="formulario">
            <div>
              <label>Nombre: </label>
              <input type="text" value = {user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})} />
            </div>

            <div>
              <label>Apellido: </label>
              <input type="text" value = {user.apellido} onChange={(e) => setUser({...user, apellido: e.target.value})}/>
            </div>

            <div>
              <label>Email: </label>
              <input type="email" value = {user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
            </div>
            
            <div>
            <label>Canción Favorita: </label>
            <input type="text" value = {user.cancionFavorita} onChange={(e) => setUser({...user, cancionFavorita: e.target.value})}/>
            </div>

            <button>Enviar</button>

            <div className='error'>
              {err && 'Por favor chequea que la información sea correcta'}  
            </div>
      </form>

      {show && <Card user={user}/> }
      
    </div>
  )
}

export default App
