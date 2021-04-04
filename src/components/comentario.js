import React from 'react';
import './comentario.css';

//JSX
const Comentario = props => {
    return <div className="Comentario">
        <h2>Nome: {props.nome}</h2>
        <p>{props.mail}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
    </div>
};

export default Comentario;
