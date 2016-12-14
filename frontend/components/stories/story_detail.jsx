import React from 'react';
import { Link } from 'react-router';
import WriteCommentContainer from '../comments/write_comment_container';


class StoryDetail extends React.Component {

  componentDidMount() {
    this.props.fetchSingleStory(this.props.params.storyId);
    this.props.fetchAllComments();
  }

  makeComment(comment){
    return(
      <li key={comment.id} className="commentStreamItem">
        <p className="authorAboutComment">{ comment.user.username }</p>
        <p className="commentTimeStamp">{ comment.created_at }</p>
        <p className="commentBody">{ comment.body }</p>
      </li>
    );
  }

  render(){
    const { story, currentUser, comments } = this.props;
    let commentsArr = {};
    if (comments) {
      commentsArr = comments.map((comment) => this.makeComment(comment));
    }

    let link;
    if (currentUser === undefined || story.author.id === undefined){
      link = (<div></div>);
    } else if
      (story.author.id === currentUser.id)
    {
      let id = this.props.params.storyId;
      link = <Link to={`/stories/edit/${ id }`} className="editLink">Edit</Link>;
    } else {
      link = (<div></div>);
    }

    return (
      <section className="postDetail">
        <p className="author-bio">{ story.author.username }</p>
        <h1 className="postDetailTitle">{ story.title }</h1>
        <section className="postDetailBody">
          { story.body }
          <div className="linkContainer">{ link }</div>
        </section>
        <section className="commentsSection">
          Responses
        <ul className="">
          < WriteCommentContainer />
          { commentsArr }
        </ul>
        </section>
      </section>
    );
  }
}

export default StoryDetail;
