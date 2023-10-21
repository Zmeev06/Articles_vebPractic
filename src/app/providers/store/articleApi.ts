import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle } from 'shared/interfaces/article'

interface CreateArticle {
  content: 'string'
  subtitle: 'string'
  theme: 'string'
  title: 'string'
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://195.2.93.178/api' }),
  endpoints: (builder) => ({
    getArticles: builder.query<IArticle[], void>({
      query: () => `/articles`,
    }),
    getArticleByTitle: builder.query<IArticle, string>({
      query: (id) => `article/${id}`,
    }),
    getArticleQrCode: builder.query<IArticle, number>({
      query: (id) => `qr-codes/${id}`,
    }),
    createArticle: builder.mutation<IArticle, CreateArticle>({
      query: ({ content, subtitle, theme, title }) => ({
        url: `create/article`,
        method: 'POST',
        body: {
          content,
          subtitle,
          theme,
          title,
        },
      }),
    }),
  }),
})
