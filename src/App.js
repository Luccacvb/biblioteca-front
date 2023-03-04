import { Fragment } from 'react'
import Aluguel from './Aluguel/Aluguel'
import NavBar from './Menu/NavBar'
import Livro from './Livro/Livro'
import Cliente from './Cliente/Cliente'
import Home from './Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HistoricoAlugueis from './Aluguel/Historico'

function App() {
    return (
        <Fragment>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route key="aluguel" path="/aluguel" element={<Aluguel />} />
                    <Route key="livro" path="/livro" element={<Livro />} />
                    <Route key="cliente" path="/cliente" element={<Cliente />} />
                    <Route key="home" path="/home" element={<Home />} />
                    <Route key="historico" path="/historico" element={<HistoricoAlugueis />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default App