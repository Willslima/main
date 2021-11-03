import React from 'react'

import './App.css'
import Me from './image/me.jpg'

import Navbar from './components/Navbar'
import TextBar from './components/TextBar'
import Article from './components/Article'
import Apresentation from './components/Apresentation'
import Media from './components/Medias'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <TextBar text="Olá, eu sou um front-end developer 😎" />
        <Apresentation
          title="Willian SLima"
          paragraph=" 
        ( Músico/ Developer/ Gamer )"
          image={Me}
        />
        <Article
          title="Trabalho"
          article=" Atualmente trabalhando como Assistente de NOC (Network operation center) com monitoramento de redes e manutenção do sistema. "
        />

        {
          <button>
            <a href="https://github.com/Willslima/" target='_blank'> Portfolio </a>
          </button>
        }

        <Article
          title="Bio"
          article=" Me chamo Willian, tenho 27 anos, sou dev front-end em busca do fullstack, estudando para ter uma melhora constante, buscando novos desafios para a carreira."
        />

        <Article
          title="Eu 🤍"
          article="Técnologia, música, jogos, desenvolver, aprender, me desafiar, e Deus acima de tudo."
        />

        <Article title="On the web" article="">
          <Media github="Willslima" instagram="Willsl123" />
        </Article>
      </header>
    </div>
  )
}

export default App
