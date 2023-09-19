import React from 'react'
import { NoteProps } from '@/interfaces'

const Note = ({ note, onDelete, onEdit, onTagClick }: NoteProps) => {
  return (
    <div className="p-4 m-2 border">
      <h3 className="text-xl font-semibold">{note.title}</h3>
      <p className="mt-2">{note.text}</p>
      <p className="mt-4">Date: {note.date}</p>
      <div className="mt-4">
        <button
          className="px-2 py-1 mr-2 text-white bg-red-500 rounded"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
        <button
          className="px-2 py-1 text-white bg-blue-500 rounded"
          onClick={() => onEdit(note.id)}
        >
          Edit
        </button>
        <div className="mt-2">
          <p
            className="text-sm text-gray-500"
          >
            Теги: {note.tags.map((tag: string) =>
              <span
                key={tag}
                className="text-blue-500 cursor-pointer"
                onClick={() => onTagClick(tag)}
              >
                #{tag}
              </span>
            )
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Note