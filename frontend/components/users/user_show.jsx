import React from 'react';
import StoryIndexItem from '../stories/story_index_item';
import { Link, withRouter } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  componentDidMount(){
    const { userId } = this.props;
    // need to add to story reducer so it merges into state - then pull it out and render story index items
    this.props.fetchUserStories(userId);
  }

  render(){
    const { story, currentUser, comments } = this.props;
    let commentsArr = {};
    let likeCount = story.likes.length;
    let image = this.defineImage(story);
    let noOfResponses = this.responseCount();
    if (comments) {
      commentsArr = comments.map((comment) => this.makeComment(comment));
    }

    let userOptions;
    userOptions = this.options();
    const profile = window.profilePic;
    
    return(
      <section className="userDetail">
        <div className="author-bio">
          <ul>
            <li className="authorbio author-image">
              <img src={ profile }/>
            </li>
            <li>
              { story.author.username }
            </li>
            <li className="authorbio authorfollows">
              < FollowContainer authorId={ story.author_id } follows={ story.author.follows }/>
            </li>
          </ul>
        </div>
        <h1 className="postDetailTitle">{ story.title }</h1>
        { image }
        <div className="story-footer">
          <section className="postDetailBody">
            { story.body }
          </section>
          <section>
            <div className="userOptionsContainer">{ userOptions }</div>
          </section>
          <section className="commentsSection">
            < LikeContainer storyId={ story.id } likes={ story.likes }/>
          <div className="replies">
            { noOfResponses } Responses
          </div>
          <ul className="comments-wrapper">
            < WriteCommentContainer />
            { commentsArr }
          </ul>
          </section>
        </div>
      </section>
    );
  }


}

export default withRouter(UserShow);
