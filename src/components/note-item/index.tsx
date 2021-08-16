import React from 'react';
import { Note } from '../../domain/models';

type NoteItemProps = {
  note: Note;
  onClick: (id: string) => Promise<void>;
};

function NoteItem(props: NoteItemProps) {
  const { note, onClick } = props;
  return (
    <li className="note-item">
      <header>
        <strong>{note.title}</strong>
      </header>
      <p>{note.description}</p>
      <button
        id="close-button"
        onClick={() => {
          onClick(note.id).then();
        }}
      >
        X
      </button>
    </li>
  );
}

export default NoteItem;
