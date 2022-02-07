import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'

export const JornalApp = (props: {}) => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
