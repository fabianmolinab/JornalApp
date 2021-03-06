import React, { Dispatch } from 'react'
import { startLogout } from '../../actions/auth'
import { useAppDispatch } from '../../hooks/hooks'
import { JournalEntries } from './JournalEntries'

export const Sidebar: React.FC = () => {

  const dispatch: Dispatch<any> = useAppDispatch()

  const handleLogout = () => {

    dispatch(startLogout())
  }
  return (
    <aside className="journal__sidebar">
      <div className="journal__side-navbar">
        <h3 className="mt-5">
          <i className="fa-regular fa-moon"></i>
          <span className="ml-1">Fabian</span>
        </h3>

        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="journal__new-entry">
        <i className="fa-regular fa-calendar fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>

      <JournalEntries />
    </aside>
  )
}
