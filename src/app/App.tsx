import './styles/index.scss'
import { Provider } from 'react-redux'
import { Routing } from './providers/routing'
import { store } from './providers/store'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routing />
      </Provider>
    </>
  )
}
