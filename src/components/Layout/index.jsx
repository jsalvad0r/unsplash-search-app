import { SearchBar } from '../SearchBar'
import './styles.css'

export const Layout = ({ children }) => {
  return (
    <div className="main">
      <SearchBar />
      {children}
    </div>
  )
}
