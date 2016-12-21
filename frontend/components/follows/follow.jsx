import React from 'react';
import { Link } from 'react-router';
import { values } from 'lodash';

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.authorId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alreadyFollowed = this.alreadyFollowed.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if ( this.props.currentUser === null ){
      this.props.openModal();
    } else {
      const { createFollow, deleteFollow } = this.props;
      const follow = Object.assign({}, this.state);
      const followSearchResult = this.alreadyFollowed();
      if ( followSearchResult.length >= 1){
        const unfollow = Object.assign(follow, {id: followSearchResult[0].id});
        deleteFollow(unfollow);
      } else {
        createFollow(follow);
      }
    }
  }

  alreadyFollowed() {
      const { currentUser, follows, authorId } = this.props;
      const filtered = values(follows)
        .filter(follow => follow.follower_id === parseInt(currentUser.id) && follow.author_id === parseInt(authorId));
        return filtered;
  }

  render(){
    const follows = this.props.follows.length;
    const followSearchResult = (this.props.currentUser) ? this.alreadyFollowed() : "";
    if ( followSearchResult.length >= 1)
      {  return (
            <div className="follow-wrapper">
              <button className="alreadyFollowedButton" onClick={ this.handleSubmit }>Following</button> { follows }
            </div>
        ) } else {
          return (
            <div className="follow-wrapper">
                <div><button className="FollowButton" onClick={ this.handleSubmit }>Follow</button> { follows }</div>
            </div>
    );
    }
  }

}


export default Follow;
