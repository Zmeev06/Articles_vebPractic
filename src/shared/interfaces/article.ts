export interface IArticle {
  content: string
  cover: string
  created_at: string
  id: number
  normalised_title: string
  subtitle: string
  theme: string
  title: string
  times_visited: number
}

export interface GetContactArticle {
  link: string
  qr_code: string
}
