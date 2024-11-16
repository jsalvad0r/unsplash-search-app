import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSearchPhotosQuery } from '../../api/photos'
import { Layout } from '../../components/Layout'
import { PhotoList } from '../../components/PhotoList'
import { setQuery } from '../../services/photosSlice'

export const TagPage = () => {
  const { tag } = useParams()
  const dispatch = useDispatch()

  dispatch(setQuery(tag))

  const { data: photos, isLoading, error } = useSearchPhotosQuery(tag)

  if (isLoading) return <p>Loading photos for tag "{tag}"...</p>
  if (error) return <p>Error loading photos for tag "{tag}".</p>

  return (
    <Layout>
      <h2>Results</h2>
      <PhotoList photos={photos} />
    </Layout>
  )
}
