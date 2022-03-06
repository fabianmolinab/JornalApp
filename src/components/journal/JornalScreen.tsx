import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JornalScreen = (props: {}) => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <NothingSelected />
    </div>
  )
}
