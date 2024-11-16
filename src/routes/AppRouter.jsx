import { pagesData } from '../pages/pagesData'
import { useRoutes } from 'react-router-dom'

export const AppRouter = () => {
  return useRoutes(pagesData)
}
