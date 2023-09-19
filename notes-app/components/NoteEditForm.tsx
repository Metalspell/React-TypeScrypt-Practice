import React, { useEffect, useState } from 'react'
import { NoteEditFormProps } from '@/interfaces'
import { Note } from '@/interfaces';

const NoteEditForm = ({ note, onCancel, onUpdate }: NoteEditFormProps) => {
  const [editedNote, setEditedNote] = useState<Note>({ ...note });
  const [editedTags, setEditedTags] = useState(editedNote.tags.join(', '));

  const handleUpdate = () => {
    const updatedTagsArray = editedTags.split(',').map((tag: string) => tag.trim());
    const updatedNoteWithTags = { ...editedNote, tags: updatedTagsArray };
    onUpdate(updatedNoteWithTags);
  };

  return (
    <div className="p-4 m-2 border">
      <h3 className="text-xl font-semibold">
        <input
          type="text"
          value={editedNote.title}
          onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
        />
      </h3>
      <div className="mt-2">
        <textarea
          value={editedNote.text}
          onChange={(e) => setEditedNote({ ...editedNote, text: e.target.value })}
        />
      </div>
      <div className="mt-2">
        <input
          type="text"
          value={editedTags}
          onChange={(e) => setEditedTags(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <button
          className="px-2 py-1 mr-2 text-white bg-green-500 rounded"
          onClick={handleUpdate}
        >
          Save
        </button>
        <button
          className="px-2 py-1 text-white bg-red-500 rounded"
          onClick={onCancel}
        >
          Cansel
        </button>
      </div>
    </div>
  );
}

export default NoteEditForm