import './index.css'

const Thumbnail = props => {
  const {imageDetails, onClickThumbnail} = props
  const {thumbnailUrl, id} = imageDetails

  const onClickButton = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-button"
        onClick={onClickButton}
        type="button"
      >
        <img className="thumbnail-img" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}
export default Thumbnail
