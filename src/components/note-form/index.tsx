import React from 'react';

function NoteForm() {
  return (
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
  );
}

export default NoteForm;
