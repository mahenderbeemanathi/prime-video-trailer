// Write your code here
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="movie-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="close-container">
              <button
                type="button"
                className="close-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
            </div>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
