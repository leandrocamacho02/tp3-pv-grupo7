import './css/styles.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ListaProyectos from './components/ListaProyectos'

const App = () => {
    return(
        <div>
            <header />
            <Nav />
            <ListaProyectos />
            <Footer />
        </div>
    )
}
export default App