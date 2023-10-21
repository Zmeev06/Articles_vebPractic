import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query'

export const API_URL = 'http://195.2.93.178/api'

export const baseQuery = async (args: FetchArgs, api: BaseQueryApi) => {
  const query = await fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json')
      return headers
    },
  })(args, api, {})

  return query
}
