import React from 'react';

function NoteItem() {
  return (
    <li className="note-item">
      <header>
        <strong>Tarefa IdeiaFix</strong>
      </header>
      <p>terminar o back e o front</p>
      <button id="close-button">X</button>
    </li>
  );
}

export default NoteItem;
