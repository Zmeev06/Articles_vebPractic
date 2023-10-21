import ArticleWidgets from 'widgets/article/ArticleWidgets'
import './styles/index.scss'
import { Input } from 'shared/ui/input/Input'
import { Autocomplete } from 'shared/ui/autocomplete/Autocomplete'

export const App = () => {
  const suggestions = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
  return (
    <>
      {/* <ArticleWidgets /> */}
      <Autocomplete suggestions={suggestions} />
    </>
  )
}
