import { NoteScreen } from '../notes/NoteScreen'
import { Sidebar } from './Sidebar'

export const JornalScreen = (props: {}) => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      {/* <NothingSelected /> */}
      <NoteScreen />
    </div>
  )
}
