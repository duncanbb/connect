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
    return(
      <div>
        <p>
          test
        </p>
      </div>
    );
  }


}

export default withRouter(UserShow);
