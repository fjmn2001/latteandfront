export interface Book {
  createdAt: string
  id: string
  title: string
  image: string | null
  description: string | null
  score: number | null
  readAt: string | null
  authors: Array<string>
  categories: Array<string>
}
