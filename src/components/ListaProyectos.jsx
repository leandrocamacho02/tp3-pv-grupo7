import { useState } from "react";
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {
    const[proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
    const[busqueda, setBusqueda] = useState('')
    const[nuevoTitulo, setNuevoTitulo] =useState('')
    const[nuevaCategoria, setNuevaCategoria] =useState('')
    const[nuevoEstado, setNuevoEstado] = useState('En curso')

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id)
        setProyectos(proyectoService.obtenerProyectos())
    }

    const handleBuscar = (e) => {
         setBusqueda(e.target.value)
         setProyectos(proyectoService.buscarProyecto(e.target.value))
    }

    const handleAgregar = () => {
        if (nuevoTitulo.trim() === '') return
        const nuevo = {
            id: Date.now(),
            titulo: nuevoTitulo,
            categoria: nuevaCategoria,
            estado: nuevoEstado
        }

        proyectoService.agregarProyecto(nuevo)
        setProyectos(proyectoService.obtenerProyectos())
        setNuevoTitulo('')
        setNuevoEstado('En Curso')
    }

     return (
    <main>
      <h2>Listado de Proyectos</h2>

      <section className="filtros from-filtros">
        <h3>Buscar Proyecto</h3>
        <input
          type="text"
          placeholder="Buscá un proyecto..."
          value={busqueda}
          onChange={handleBuscar}
        />
      </section>

      <section className="filtros from-filtros">
        <h3>Agregar Proyecto</h3>
        <input
          type="text"
          placeholder="Título"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoría"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
        />
        <select
          value={nuevoEstado}
          onChange={(e) => setNuevoEstado(e.target.value)}
        >
          <option value="En curso">En curso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        <button className="btn-detalle" onClick={handleAgregar}>Agregar</button>
      </section>

      <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Proyectos</h3>
      <section className="proyecto-container cards-container">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="card">
            <h4>{proyecto.titulo}</h4>
            <p><strong>Categoría:</strong> {proyecto.categoria}</p>
            <p><strong>Estado:</strong> {proyecto.estado}</p>
            <button className="btn-detalle" onClick={() => handleEliminar(proyecto.id)}>Eliminar</button>
          </article>
        ))}
      </section>

    </main>
  
    )
}

export default ListaProyectos