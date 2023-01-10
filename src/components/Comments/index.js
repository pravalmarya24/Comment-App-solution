import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', newComment: '', count: 0}

  onAddingName = event => {
    this.setState({name: event.target.value})
  }

  onAddingComment = event => {
    this.setState({newComment: event.target.value})
  }

  onToggleTheImg = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onDeleteingComments = id => {
    const {commentList} = this.state
    const deletedCommentsList = commentList.filter(
      eachCommen => eachCommen.id !== id,
    )

    this.setState(prevState => ({
      commentList: deletedCommentsList,
      count: prevState.count - 1,
    }))
  }

  addingCommentInList = event => {
    event.preventDefault()
    const {name, newComment} = this.state
    const initialContainerBackground = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComments = {
      id: uuidv4(),
      name,
      newComment,
      date: formatDistanceToNow(new Date()),
      isLike: false,
      initialBgColor: initialContainerBackground,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComments],
      name: '',
      newComment: '',
      count: prevState.count + 1,
    }))
  }

  render() {
    const {commentList, count} = this.state
    return (
      <div className="bg-commments-container">
        <div className="form-img-container">
          <div className="form-container">
            <h1 className="comment-heading">Comments</h1>
            <form className="form-ele" onSubmit={this.addingCommentInList}>
              <p className="label-ele" htmlFor="input-element-id">
                Say something about 4.0 Technologies
              </p>
              <br />
              <input
                type="text"
                placeholder="Your Name"
                className="input-element"
                id="input-element-id"
                onChange={this.onAddingName}
              />
              <br />
              <textarea
                rows="6"
                cols="33"
                placeholder="Your Comment"
                className="textarea-element"
                onChange={this.onAddingComment}
              />
              <br />

              <button type="submit" className="add-comment-btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-img-size"
          />
        </div>
        <hr className="horizontal-line" />
        <div className="comment-count-container">
          <div className="count-container">
            <p className="comment-count">{count}</p>
          </div>
          <p className="comment-para">Comments</p>
        </div>
        <ul className="unordered-list">
          {commentList.map(eachitem => (
            <CommentItem
              eachitemList={eachitem}
              key={eachitem.id}
              onToggleTheImg={this.onToggleTheImg}
              onDeleteingComments={this.onDeleteingComments}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
