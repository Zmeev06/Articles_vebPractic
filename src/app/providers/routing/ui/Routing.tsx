import { ArticlePageLazy } from 'pages/article'
import { CreateArticlePageLazy } from 'pages/CreateArticlePage'
import { CreateArticlePage } from 'pages/CreateArticlePage/ui/CreateArticlePage'
import { NotFoundPageLazy } from 'pages/not-found'
import NotFoundPage from 'pages/not-found/ui/NotFoundPage'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/page-loader/PageLoader'

export const Routing = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* <Route path={pathRoutes.article} element={<ArticlePageLazy />} /> */}
        <Route
          path="/article/:normalised_title"
          element={<ArticlePageLazy />}
        />
        <Route path="/constructor" element={<CreateArticlePage />} />
        <Route path="/" element={<CreateArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
