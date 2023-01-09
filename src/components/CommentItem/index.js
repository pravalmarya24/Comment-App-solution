import './index.css'

// Write your code here
const CommentItem = props => {
  const {eachitemList, onToggleTheImg} = props
  const {name, newComment, initialBgColor, date, isLike, id} = eachitemList
  const slicename = name[0]
  const thumbsUpImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const like = isLike ? 'like-color' : 'like-remove'

  const onClickThumbsImg = () => {
    onToggleTheImg(id)
  }

  return (
    <li className="comment-list">
      <div className="comment-container">
        <div className={`${initialBgColor} initial-container`}>
          <p className="initial-para">{slicename}</p>
        </div>
        <div className="name-comment-container">
          <h1 className="name">{name}</h1>
          <p className="date">{date}</p>
        </div>
      </div>
      <p className="comment">{newComment}</p>
      <div className="like-btn">
        <img src={thumbsUpImg} alt="thumbs" />
        <button
          type="button"
          className={`like-btn ${like}`}
          onClick={onClickThumbsImg}
        >
          Like
        </button>
      </div>
      <div className="delete-btn">
        <button type="button" className={`like-btn ${like}`} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon-size"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem
