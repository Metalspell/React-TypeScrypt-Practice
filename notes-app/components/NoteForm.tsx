import React, { useState } from 'react'
import { NoteFormProps } from '@/interfaces'

const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, text, tags: tags.split(',') });
    setTitle('');
    setText('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Title"
          className="flex w-full p-2 border rounded bg-blend-color-burn"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <textarea
          placeholder="Note`s text"
          className="w-full p-2 border rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Tags (devide by commas)"
          className="w-full p-2 border rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-green-500 rounded"
      >
        Create note
      </button>
    </form>
  )
}

export default NoteForm