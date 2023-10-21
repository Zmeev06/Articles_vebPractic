import './styles/index.scss'
import ArticlePage from 'pages/article/ArticlePage'
import { CreateArticlePage } from 'pages/CreateArticlePage/CreateArticlePage'
import { Provider } from 'react-redux'
import { Autocomplete } from 'shared/ui/autocomplete/Autocomplete'
import { Input } from 'shared/ui/input/Input'
import { store } from './providers/store'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <ArticleWidgets /> */}
        <CreateArticlePage />
      </Provider>
    </>
  )
}
