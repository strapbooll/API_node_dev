import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

import DevForm from './components/DevForm/index';
import DevItem from './components/DevItem/index';

// Componente: Bloco isolado de HTML. CSS e JS, no qual não interfere no restante da aplicação
// Propriedade: informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data)
    
    setDevs([...devs, response.data]);
  }

  return (
    <div className="App" id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (   
             <DevItem key={dev._id} dev={dev} />
          ))}               
        </ul>
      </main>
    </div>
  );
}

export default App;
