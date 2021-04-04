import { Component } from 'react';
import './App.css';
import Comentario from './components/comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: "João",
        email: "Joao@joao.com",
        data: new Date(2021, 3, 3),
        mensagem: "Ola"
      },
      {
        nome: "José",
        email: "Jose@jose.com",
        data: new Date(2021, 3, 3),
        mensagem: "Ola"
      }
    ]
  }

  adicionarComentario = () => {
    const novoComentario = {
      nome: "Maria",
      email: "Maria@maria.com",
      data: new Date(),
      mensagem: "Ola"
    }
    this.setState({comentarios : [ ...this.state.comentarios, novoComentario]});
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario key={indice} nome={comentario.nome} mail={comentario.email} data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <button onClick={this.adicionarComentario}>Adicionar comentário</button>
      </div>
    );
  }
}

export default App;
