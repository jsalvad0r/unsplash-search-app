import { HomePage } from '../pages/HomePage'
import { TagPage } from '../pages/TagPage'

export const pagesData = [
  { path: '/', element: <HomePage /> },
  { path: '/tag/:tag', element: <TagPage /> },
]
