import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetContactArticle, IArticle } from 'shared/interfaces/article'
import { baseQuery } from './settings'

interface ICreateArticle {
  content: string
  subtitle: string
  theme: string
  title: string
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery,
  endpoints: (builder) => ({
    getArticles: builder.query<IArticle[], void>({
      query: () => ({
        url: `/articles`,
        method: 'GET',
      }),
    }),
    getArticleByTitle: builder.query<IArticle, string>({
      query: (id) => ({
        url: `article/${id}`,
        method: 'GET',
      }),
    }),
    getArticleQrCode: builder.query<IArticle, number>({
      query: (id) => ({
        url: `qr-codes/${id}`,
        method: 'GET',
      }),
    }),
    createArticle: builder.mutation<GetContactArticle, ICreateArticle>({
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
