const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "App de Reciclaje Urbano", categoria: "Medio Ambiente", estado: "En curso" },
    { id: 2, titulo: "Sistema de Alertas Escolares", categoria: "Educación Digital", estado: "En curso" },
    { id: 3, titulo: "Biblioteca Digital Interactiva", categoria: "Desarrollo de Software", estado: "Finalizado" },
    { id: 4, titulo: "Portal de Tutorías", categoria: "Educación Digital", estado: "Finalizado" },
    { id: 5, titulo: "Monitor de Salud Estudiantil", categoria: "Salud y Bienestar", estado: "En curso" }
  ]

  const obtenerProyectos = () => [...proyectos]

  const agregarProyecto = (nuevoProyecto) => {
    proyectos = [...proyectos, nuevoProyecto]
  }

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((proyecto) => proyecto.id !== id)
  }

  const buscarProyecto = (texto) => {
    return proyectos.filter((proyecto) =>
      proyecto.titulo.toLowerCase().includes(texto.toLowerCase())
    )
  }

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  }
})()

export default proyectoService