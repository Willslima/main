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
        <TextBar text="Hello, I'm a front-end developer based in Brazil!" />
        <Apresentation
          title="Willian SLima"
          paragraph=" 
        ( Musician/ Developer/ Gamer )"
          image={Me}
        />
        <Article
          title="Work"
          article="   Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum..."
        />

        {
          <button>
            <a href="#"> Portfolio </a>
          </button>
        }

        <Article
          title="Bio"
          article="   Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum..."
        />

        <Article
          title="I 🤍"
          article="   Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum..."
        />

        <Article title="On the web" article="">
          <Media github="Willslima" instagram="Willsl123" />
        </Article>
      </header>
    </div>
  )
}

export default App
