"use client"

import React, { useState } from 'react';
import NoteList from '../../components/NoteList';
import NoteForm from '../../components/NoteForm';
import { Note } from '@/interfaces';
import Link from 'next/link';

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const addNote = (newNote: { title: string; text: string; tags: string[] }) => {
    const currentDate = new Date().toLocaleDateString();
    const newNoteWithDate = {
      ...newNote,
      id: Date.now(),
      date: currentDate,
    };
    setNotes([...notes, newNoteWithDate]);
  };

  const deleteNote = (noteId: number) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const editNote = (noteId: number) => {
    setEditingNoteId(noteId);
  };

  const handleTagClick = (tag: string) => {
    setFilterTag(tag);
  };

  const filteredNotes = filterTag
    ? notes.filter((note) => note.tags.includes(filterTag))
    : notes;

  const updateNote = (updatedNote: Note) => {
    const noteIndex = notes.findIndex((note) => note.id === updatedNote.id);

    if (noteIndex !== -1) {
      const updatedNotes = [...notes];
      updatedNotes[noteIndex] = updatedNote;
      setNotes(updatedNotes);
      console.log(notes)
      console.log(1)
      setEditingNoteId(null);
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Notes</h1>
      <NoteForm onSubmit={addNote} />
      <div className="mb-4">
        <label className="mr-2 text-lg">Filter by the tags:</label>
        <select
          value={filterTag || ''}
          onChange={(e) => setFilterTag(e.target.value || null)}
        >
          <option value="">Without filter</option>
          {Array.from(new Set(notes.flatMap((note) => note.tags))).map(
            (tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            )
          )}
        </select>
      </div>
      <NoteList
        notes={filteredNotes}
        onDelete={deleteNote}
        onEdit={editNote}
        editingNoteId={editingNoteId}
        onUpdate={updateNote}
        onTagClick={handleTagClick}
      />
      <Link
        className="mb-4 text-3xl font-bold text-fuchsia-600"
        href="/"
      >
        Home
      </Link>
    </div>
  );
};

export default NotesPage