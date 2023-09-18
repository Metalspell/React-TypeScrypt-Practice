export interface Note {
  [x: string]: any;
  id: number;
  title: string;
  text: string;
  date: string;
}

export interface NoteProps {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onTagClick: (tag: string) => void;
}

export interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  editingNoteId: number | null;
  onUpdate: (updatedNote: Note) => void;
  onTagClick: (tag: string) => void;
}

export interface NoteFormProps {
  onSubmit: (newNote: {
    title: string;
    text: string,
    tags: string[]
  }) => void;
}

export interface NoteEditFormProps {
  note: Note;
  onCancel: () => void;
  onUpdate: (updatedNote: Note) => void;
}