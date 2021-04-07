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
    ],
    novoComentario : {
      nome: '',
      email: '',
      mensagem: ''
    }  
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario, data: new Date() };
    this.setState({comentarios : [ ...this.state.comentarios, novoComentario], novoComentario: {nome:'', mensagem:'', data: '', email: ''} });
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios.filter(c => c !== comentario);
    this.setState({ comentarios: lista});
  }

  digitacao = evento => {
    this.setState({ novoComentario: {...this.state.novoComentario, [evento.target.name]: evento.target.value}})
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario key={indice} nome={comentario.nome} mail={comentario.email} data={comentario.data} onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario} className="NovoComentario">
          <h2>Adicionar Comentário</h2>
          <div>
            <input type="text" name="nome" placeholder="Digite seu nome" value={this.state.novoComentario.nome} onChange={this.digitacao} required/>
          </div>
          <div>
            <input type="email" name="email" placeholder="Digite seu email" value={this.state.novoComentario.email} onChange={this.digitacao} required/>
          </div>
          <div>
            <textarea name="mensagem" rows="4 " value={this.state.novoComentario.mensagem} onChange={this.digitacao} required></textarea>
          </div>
          <button type="submit">Adicionar comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
