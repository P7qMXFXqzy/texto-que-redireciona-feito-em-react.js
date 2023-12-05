import './App.css';
import React from 'react'
import {Helmet} from 'react-helmet';


const textoClicavel = () => {
    //definição da url que será aberta
    const targetUrl = 'https://www.youtube.com/';

    //Comando para abrir a página em uma nova guia
    window.open(targetUrl, '_blank');
}

function App() {
  return (
    <div>
      <>
        {/*definição da cor de fundo*/}
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
        {/*texto clicável que redirecionará para o youtube*/}
        <a id="abrirTexto" href="/" onClick={textoClicavel}>
            abrir Youtube
        </a>
      </>
    </div>
  );
}

export default App;
