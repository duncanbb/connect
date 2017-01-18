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
    const { user } = this.props;
    // need to add to story reducer so it merges into state - then pull it out and render story index items
    this.props.fetchUserStories(user.id);
  }



}

export default withRouter(UserShow);
