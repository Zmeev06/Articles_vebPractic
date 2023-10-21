import './styles/index.scss'
import { CreateArticlePage } from 'pages/CreateArticlePage/CreateArticlePage'
import { Provider } from 'react-redux'
import { Autocomplete } from 'shared/ui/autocomplete/Autocomplete'
import { Input } from 'shared/ui/input/Input'
import { ArticlePage } from '../pages/article/ui/ArticlePage'
import { store } from './providers/store'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <ArticleWidgets /> */}
        <CreateArticlePage />
        <ArticlePage />
      </Provider>
      {/* <CreateArticlePage /> */}
    </>
  )
}
