import { ArticlePageLazy } from 'pages/article'
import { CreateArticlePageLazy } from 'pages/CreateArticlePage'
import { NotFoundPageLazy } from 'pages/not-found'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { pathRoutes } from 'shared/config/path'
import { PageLoader } from 'widgets/page-loader/PageLoader'

export const Routing = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route 
            path={pathRoutes.article}  
            element={<ArticlePageLazy />} 
        />
        <Route
          path={pathRoutes.constructor}
          element={<CreateArticlePageLazy />}
        />
        <Route 
            path="/" 
            element={<CreateArticlePageLazy />} 
        />
        <Route
            path={pathRoutes.not_found}
            element={<NotFoundPageLazy/>}
        />
      </Routes>
    </Suspense>
  )
}
