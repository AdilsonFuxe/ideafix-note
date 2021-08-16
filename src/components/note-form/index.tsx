import React, { useState } from 'react';

type NoteFormParams = {
  onSubmit: (title: string, description: string) => Promise<void>;
};

function NoteForm(props: NoteFormParams) {
  const { onSubmit } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await onSubmit(title, description);
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Assunto"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-block">
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Texto"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="button-block">
        <button type="submit">CRIAR NOTA</button>
      </div>
    </form>
  );
}

export default NoteForm;
