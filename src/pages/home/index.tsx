import React, { useEffect, useState } from 'react';
import './app.css';
import './sidebar.css';
import './main.css';
import { NoteForm, NoteItem } from '../../components';
import api from '../../services/api';
import { Note } from '../../domain/models';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function handleLoadDevs() {
      const response = await api.get('/notes');
      setNotes(response.data);
    }
    handleLoadDevs();
  }, []);

  const handleAddNote = async (title: string, description: string) => {
    const response = await api.post('/notes', { title, description });
    setNotes([...notes, response.data]);
  };

  const handleDeleteNote = async (id: string) => {
    const filtered = notes.filter((item) => item.id !== id);
    setNotes(filtered);
    await api.delete(`/notes/${id}`);
  };

  return (
    <div id="app">
      <aside>
        <strong>Bloco de notas</strong>
        <NoteForm onSubmit={handleAddNote} />
      </aside>
      <main>
        <strong>Suas notas</strong>
        <ul>
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} onClick={handleDeleteNote} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
