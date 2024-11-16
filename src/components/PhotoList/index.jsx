import { PhotoItem } from '../PhotoItem'
import './styles.css'

export const PhotoList = ({ photos }) => {
  return (
    <div>
      <section>
        <div className="photo-grid">
          {photos.map((photo) => (
            <PhotoItem key={photo.id} photo={photo} />
          ))}
        </div>
      </section>
    </div>
  )
}
