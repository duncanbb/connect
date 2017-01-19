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
    this.props.fetchAllStories();
    this.props.fetchUser(userId);
  }

  render(){
    const { user, stories } = this.props;
    const profile = window.profilePic;
    const storyItems = stories.sort().reverse().map(story => (
      <StoryIndexItem key={ story.id } story={ story } author = { story.author }/>)
    );

    return(
      <div className="home-stream-background">
        <div className="home-stream-container">
          <div className="author-bio">
            <ul>
              <li className="authorbio author-image">
                <img src={ profile }/>
              </li>
              <li>
                { user.username }
              </li>
            </ul>
          </div>
              <ul>
                {storyItems}
              </ul>
          </div>
      </div>
    );
  }


}

export default withRouter(UserShow);
