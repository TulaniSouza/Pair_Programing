import React from 'react';
import {Link} from 'react-router-dom';

export default function Page(){
    return(
        <>
            <h1>Esta é uma Página para escrever o que quiser</h1>
            <Link to='/'><button>Vá para home</button></Link>
        </>
    )
}