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
    this.props.fetchUserStories(userId);
  }

  render(){
    const { user } = this.props;
    const profile = window.profilePic;

    return(
      <section className="userDetail">
        <div className="author-bio">
          <ul>
          </ul>
        </div>
      </section>
    );
  }


}

export default withRouter(UserShow);
