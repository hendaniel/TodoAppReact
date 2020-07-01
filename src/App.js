import React from 'react';
import './App.css';
import Header from './Components/Header';

class App extends React.Component {


  state = {
    todo: [
      {
        name: 'Elevar estado de task',
        description: 'Para manejar onchange de iconos'
      }
    ],
    doing: [
      {
        name: 'Boton de agregar',
        description: 'Definir si es modal o inputs'
      },
      {
        name: 'Iconos para 3 estados',
        description: 'Para pasar a las pages'
      }
    ],
    done: [
      {
        name: 'Estructura de la app',
        description: 'Organizar componentes y directorios'
      },
      {
        name: 'Hacer routing',
        description: 'Se haran 3 columnas'
      },
      {
        name: 'Usar local storage',
        description: 'Se guarda un objeto JSON'
      }
    ]
  }

  handleOnChange = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state))

  }

  render() {
    const { children } = this.props;
    localStorage.setItem('tasks', JSON.stringify(this.state))
    return (
      <div>
        <Header></Header>
        <div>{children}</div>
      </div>
    )
  }
}

export default App;
