import ArticlePage from 'pages/article/ArticlePage'
import './styles/index.scss'
import { Input } from 'shared/ui/input/Input'
import { Autocomplete } from 'shared/ui/autocomplete/Autocomplete'
import { CreateArticlePage } from 'pages/CreateArticlePage/CreateArticlePage'

export const App = () => {
  return (
    <>
      {/* <ArticleWidgets /> */}
      <CreateArticlePage />
    </>
  )
}
