import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetRandomPhotosQuery } from '../../api/photos'
import { Layout } from '../../components/Layout'
import { PhotoList } from '../../components/PhotoList'
import { setQuery } from '../../services/photosSlice'

export const HomePage = () => {
  const { data: photos, error, isLoading } = useGetRandomPhotosQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setQuery(''))
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading photos</p>

  return (
    <Layout>
      <h2>Trending Photos Right Now</h2>
      <PhotoList photos={photos} />
    </Layout>
  )
}
