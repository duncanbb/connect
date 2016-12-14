import React from 'react';
import { Link } from 'react-router';
import { values } from 'lodash';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story_id: this.props.storyId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alreadyLiked = this.alreadyLiked.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createLike, deleteLike } = this.props;
    const like = Object.assign({}, this.state);
    const likeSearchResult = this.alreadyLiked();
    if ( likeSearchResult.length >= 1){
      const unlike = Object.assign(like, {id: likeSearchResult[0].id});
      deleteLike(unlike);
    } else {
      createLike(like);
    }
  }

  alreadyLiked() {
      const { currentUser, likes } = this.props;
      const filtered = values(likes)
        .filter(like => like.user_id === parseInt(currentUser.id));
        return filtered;
  }

  render(){
    const likeSearchResult = this.alreadyLiked();
    if ( likeSearchResult.length >= 1)
      {  return (
            <div className="like-wrapper">
              <button className="alreadyLikedButton" onClick={ this.handleSubmit }>Test</button>
            </div>
        ) } else {
          return (
            <div className="like-wrapper">
                <button className="LikeButton" onClick={ this.handleSubmit }>Test</button>
            </div>
    );
    }
  }

}


export default Like;
