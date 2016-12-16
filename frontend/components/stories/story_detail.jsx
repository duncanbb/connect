import React from 'react';
import { Link } from 'react-router';
import WriteCommentContainer from '../comments/write_comment_container';
import LikeContainer from '../likes/like_container';
import FollowContainer from '../follows/follow_container';

class StoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.options = this.options.bind(this);
    this.delete = this.delete.bind(this);
    this.makeComment = this.makeComment.bind(this);
    this.commentOptions = this.commentOptions.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleStory(this.props.params.storyId);
    this.props.fetchAllComments();
  }

  makeComment(comment){
    return(
      <li key={ comment.id } className="commentStreamItem">
        <p className="authorAboutComment">{ comment.user.username }</p>
        <p className="commentTimeStamp">{ comment.created_at }</p>
        <p className="commentBody">{ comment.body }</p>
        { this.commentOptions(comment) }
      </li>
    );
  }

  commentOptions(comment){
    //  not a currently functional component
    const { currentUser } = this.props;
    if (1 === 1 || comment.user_id === null){
      return (<div></div>)
    } else if (comment.user_id === currentUser.id) {
      let id = comment.id;
      return (
        <ul>
          <li key="edit"><Link to={`/comment/edit/${ id }`}
            className="editLink">Edit</Link></li>
          <li key="delete" onClick={ ()=> this.props.deleteComment(id) }>Delete</li>
        </ul>
      )} else {
        return (<div></div>)
      }
  }

  responseCount(){
    if (this.props.comments.length === 0) {
      return "";
    } else {
      return this.props.comments.length;
    }
  }

  delete(){
    const { story } = this.props;
    this.props.deleteStory(story);
  }

  render(){
    debugger
    const { story, currentUser, comments } = this.props;
    let commentsArr = {};
    let likeCount = story.likes.length;
    let noOfResponses = this.responseCount();
    if (comments) {
      commentsArr = comments.map((comment) => this.makeComment(comment));
    }

    let userOptions;
    userOptions = this.options();
    const profile = window.profilePic;
    return (
      <section className="postDetail">
        <div className="author-bio"><img src={ profile }/>{ story.author.username }< FollowContainer
          authorId={ story.author_id } follows={ story.author.follows }/>
      </div>
        <h1 className="postDetailTitle">{ story.title }</h1>
        <section className="postDetailBody">
          { story.body }
          <div className="userOptionsContainer">{ userOptions }</div>
          < LikeContainer storyId={ story.id } likes={ story.likes }/>
        </section>
        <section className="commentsSection">
          { noOfResponses } Responses
        <ul className="">
          < WriteCommentContainer />
          { commentsArr }
        </ul>
        </section>
      </section>
    );
  }

  options(){
    const { currentUser, story } = this.props;
    if (currentUser === null || story.author.id === null){
      return (<div></div>)
    } else if (story.author.id === currentUser.id) {
      let id = this.props.params.storyId;
      return (
        <ul>
          <li key="edit"><Link to={`/stories/edit/${ id }`}
            className="editLink">Edit</Link></li>
          <li key="delete" onClick={ this.delete }>Delete</li>
        </ul>
      )} else {
        return (<div></div>)
      }
  }
}

export default StoryDetail;
