import React from 'react'
import Note from './Note';
import { NoteListProps } from '@/interfaces';
import NoteEditForm from './NoteEditForm';

const NoteList = ({
  notes,
  onDelete,
  onEdit,
  editingNoteId,
  onUpdate,
  onTagClick
}: NoteListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) =>
        editingNoteId === note.id ? (
          <NoteEditForm
            key={note.id}
            note={note}
            onCancel={() => onEdit(0)}
            onUpdate={onUpdate}
          />
        ) : (
          <Note
            key={note.id}
            note={note}
            onDelete={onDelete}
            onEdit={onEdit}
            onTagClick={onTagClick}
          />
        )
      )}
    </div>
  )
}

export default NoteList