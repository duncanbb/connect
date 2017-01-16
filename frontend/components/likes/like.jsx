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
    if ( this.props.currentUser === null ){
      this.props.openModal();
    } else {
      this.disabled = true;
      const { createLike, deleteLike } = this.props;
      const like = Object.assign({}, this.state);
      const likeSearchResult = this.alreadyLiked();
      if ( likeSearchResult.length === 0){
        createLike(like);
      } else {
        const unlike = Object.assign(like, {id: likeSearchResult[0].id});
        deleteLike(unlike);
      }
    }
    this.disabled = false;
  }

  alreadyLiked() {
      const { currentUser, likes } = this.props;
      const filtered = values(likes)
        .filter(like => like.user_id === parseInt(currentUser.id));
        return filtered;
  }

  render(){
    const likes = this.props.likes.length;

    const likeSearchResult = (this.props.currentUser) ? this.alreadyLiked() : "";
    const img = window.heart;
    const fullHeart = window.fullHeart;
    if ( likeSearchResult.length >= 1)
      {  return (
            <div className="like-wrapper">
              <input type="image"src={ fullHeart }className="alreadyLikedButton" onClick={ this.handleSubmit }/> { likes }
            </div>
        ) } else {
          return (
            <div className="like-wrapper">
                <div><input type="image"src={ img }className="LikeButton" onClick={ this.handleSubmit }/> { likes }</div>
            </div>
    );
    }
  }

}


export default Like;
