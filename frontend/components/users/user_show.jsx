import React from 'react';
import StoryIndexItem from '../stories/story_index_item';
import { Link, withRouter } from 'react-router';
import FollowContainer from '../follows/follow_container';

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
    this.props.fetchAllStories().then(() => $('body').scrollTop(0));
    this.props.fetchUser(userId);
    this.props.fetchAllFollows();

  }


  render(){
    const { user, userId, stories } = this.props;
    const profile = window.profilePic;
    const storyItems = stories.sort().reverse().map(story => (
      <StoryIndexItem key={ story.id } story={ story } author = { story.author }/>)
    );
    let [in_follows, out_follows] = user.in_follows ? [user.in_follows.length, user.out_follows.length] : [0, 0];

    return(
      <div className="home-stream-background">
        <div className="home-stream-container">
            <section className="index-item group">
                <ul className="followsList group">
                  <li className="author-image">
                    <img src={ profile }/>
                  </li>
                  <li className="authorbio authorfollows">
                    < FollowContainer authorId={ userId } follows={ in_follows }/>
                  </li>
                </ul>
                <ul>
                  <li className="user-name">
                    { user.username }
                  </li>
                  <ul className="followsList group">
                    <li>Following: {out_follows}</li>
                    <li>Followers: {in_follows}</li>
                  </ul>
                </ul>
              </section>
              <ul>
                {storyItems}
              </ul>
          </div>
      </div>
    );
  }


}

export default withRouter(UserShow);
