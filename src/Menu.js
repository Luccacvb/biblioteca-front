import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Aluguel from './aluguel/Aluguel';
import Livros from './livro/Livro';
import './Menu.css';
import Cliente from './cliente/Cliente';
import { BsList } from 'react-icons/bs';

function Sidebar() {
  const [showAlugueis, setShowAlugueis] = useState(true);
  const [showLivros, setShowLivros] = useState(false);
  const [showClientes, setshowClientes] = useState(false);
  const [selectedTable, setSelectedTable] = useState('aluguel')

  const handleAlugueisClick = () => {
    setShowAlugueis(true)
    setShowLivros(false)
    setshowClientes(false)
    setSelectedTable('aluguel')
  };

  const handleLivrosClick = () => {
    setShowLivros(true);
    setShowAlugueis(false)
    setshowClientes(false)
    setSelectedTable('livros')
  };

  const handleClientesClick = () => {
    setshowClientes(true)
    setShowLivros(false)
    setShowAlugueis(false)
    setSelectedTable('clientes')
  }

  return (
    <Container>
      <div className='sidebar'>
        <div class="sidebar-header">
          <BsList size={30} />
        </div>
        <div class="sidebar-body">
          <ul>
            <li>
              <Button variant={showAlugueis ? 'primary' : 'secondary'} onClick={handleAlugueisClick} >
                aluguel
              </Button>
            </li>
            <li>
              <Button variant={showLivros ? 'primary' : 'secondary'} onClick={handleLivrosClick}>
                Livros
              </Button>
            </li>
            <li>
              <Button variant={showClientes ? 'primary' : 'secondary'} onClick={handleClientesClick}>
                Clientes
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div class='menu'>
        {selectedTable === 'aluguel' ? <Aluguel /> : null}
        {selectedTable === 'livros' ? <Livros /> : null}
        {selectedTable === 'clientes' ? <Cliente /> : null}
      </div>
    </Container>
  );
}

export default Sidebar;