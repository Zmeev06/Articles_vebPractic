import { ArticlePageLazy } from 'pages/article'
import { CreateArticlePageLazy } from 'pages/CreateArticlePage'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { pathRoutes } from 'shared/config/path'
import { PageLoader } from 'widgets/page-loader/PageLoader'

export const Routing = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={pathRoutes.article} element={<ArticlePageLazy />} />
        <Route
          path={pathRoutes.constructor}
          element={<CreateArticlePageLazy />}
        />
        <Route path="/" element={<CreateArticlePageLazy />} />
      </Routes>
    </Suspense>
  )
}
