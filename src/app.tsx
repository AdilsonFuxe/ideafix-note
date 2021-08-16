import React from 'react';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';
import { NoteForm, NoteItem } from './components';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Bloco de notas</strong>
        <NoteForm />
      </aside>
      <main>
        <strong>Suas notas</strong>
        <ul>
          {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((item) => (
            <NoteItem />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
