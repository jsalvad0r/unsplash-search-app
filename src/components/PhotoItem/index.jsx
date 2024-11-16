import { Link } from 'react-router-dom'
import { formatAuthorName, formatDate } from '../../services/utils'

import './styles.css'

export const PhotoItem = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.urls.thumb} alt={photo.alt_description} />

      <div className="photo-info">
        <div className="photographer">
          <p>By {`${formatAuthorName(photo.user)}`}</p>
          <p className="date"> Taken on {formatDate(photo.created_at)} </p>
        </div>
        <div className="tags">
          {Object.keys(photo.topic_submissions || [])
            .slice(0, 3)
            .map((tag) => (
              <Link key={tag} to={`/tag/${tag}`} className="tag">
                {tag}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
