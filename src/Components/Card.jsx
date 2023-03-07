import React from 'react'
import './Card.css'

export const Card = ({user}) => {
  return (
    <div className='contenedor'>
        <h2 className='saludo'>¡Hola {user.nombre}!</h2>
        <h2 className='leyenda'>Sabemos que tu canción favorita es:</h2>
        <h2 className='cancion'>🎵 {user.cancionFavorita} 🎵</h2>
    </div>
  )
}
