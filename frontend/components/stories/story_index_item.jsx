import React from 'react';
import { Link } from 'react-router';
import LikeContainer from '../likes/like_container';

class StoryIndexItem extends React.Component {
  render(){
    const { story } = this.props;
     return (
      <li className="story-index-item">
        <section className="index-item">
          <h3 className="story-index-title">{ story.title }</h3>
          <p className="story-index-author-info">by {story.author.username} </p>
          <img className="story-index-image"src={ story.image.imageurl }/>
          <p className="story-index-body-preview"> { story.body.slice(0, 65) }...</p>
          <Link to={ `/stories/${ story.id }`} className="read-more" onClick={() =>$('body').animate({scrollTop: 0}, "fast")}>Read more...</Link>
          < LikeContainer storyId={ story.id } likes={ story.likes }/>
        </section>
      </li>
    );
  }
}
// TODO: style this
// TODO: add create, update and destroy
export default StoryIndexItem;
