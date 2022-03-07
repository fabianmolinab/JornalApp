import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = (props: {}) => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__images">
          <img
            src="https://cdn.pixabay.com/photo/2014/09/07/21/34/child-438373_960_720.jpg"
            alt="notes images"
          />
        </div>
      </div>
    </div>
  )
}
