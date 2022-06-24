import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { Sidebar } from './Sidebar'

export const JornalScreen: React.FC = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      {/* <NothingSelected /> */}
      <NoteScreen />
    </div>
  )
}
