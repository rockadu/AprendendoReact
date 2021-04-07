import React from 'react';
import './comentario.css';
import imagemUsuario from '../img/avatar.png';

//JSX
const Comentario = props => {
    const estilo = {
        color: 'red',
        padding: '10px',
        fontSize: '30px'
    }

    return <div className="Comentario">
        <img src={imagemUsuario} alt="avatar" className="avatar"></img>
        <div className="conteudo">
            <h2 className="nome">Nome: {props.nome}</h2>
            <p className="mail">{props.mail}</p>
            <p className="menssage">{props.children}</p>
            <p className="data">{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>
};

export default Comentario;
