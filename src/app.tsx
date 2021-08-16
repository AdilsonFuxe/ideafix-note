import React from 'react';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Bloco de notas</strong>
        <form>
          <div className="input-block">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Assunto"
              required
            />
          </div>
          <div className="input-block">
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Texto"
              required
            />
          </div>
          <div className="button-block">
            <button type="submit">CRIAR NOTA</button>
          </div>
        </form>
      </aside>
      <main>
        <strong>Suas notas</strong>
        <ul>
          <li className="note-item">
            <header>
              <strong>Tarefa IdeiaFix</strong>
            </header>
            <p>terminar o back e o front</p>
            <button id="close-button">X</button>
          </li>
          <li className="note-item">
            <header>
              <strong>Tarefa IdeiaFix</strong>
            </header>
            <p>terminar o back e o front</p>
            <button id="close-button">X</button>
          </li>
          <li className="note-item">
            <header>
              <strong>Tarefa IdeiaFix</strong>
            </header>
            <p>terminar o back e o front</p>
            <button id="close-button">X</button>
          </li>
          <li className="note-item">
            <header>
              <strong>Tarefa IdeiaFix</strong>
            </header>
            <p>terminar o back e o front</p>
            <button id="close-button">X</button>
          </li>
          <li className="note-item">
            <header>
              <strong>Tarefa IdeiaFix</strong>
            </header>
            <p>terminar o back e o front</p>
            <button id="close-button">X</button>
          </li>
          <li className="note-item">
            <header>
              <strong>Tarefa IdeiaFix</strong>
            </header>
            <p>terminar o back e o front</p>
            <button id="close-button">X</button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
