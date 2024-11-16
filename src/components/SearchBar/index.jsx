import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setQuery } from '../../services/photosSlice'
import './styles.css'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const query = useSelector((state) => state.photos.query)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const value = e.target.value.trim()
    dispatch(setQuery(value))
  }

  const handleSearch = () => {
    if (query !== '') {
      navigate(`/tag/${query}`)
    } else {
      navigate(`/`)
    }
  }

  return (
    <div>
      <section>
        <h2>Search by tag</h2>
        <div className="search-box">
          <input
            placeholder="search..."
            value={query}
            onChange={handleInputChange}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </section>
    </div>
  )
}
