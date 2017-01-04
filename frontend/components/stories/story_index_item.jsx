import React from 'react';
import { Link } from 'react-router';
import LikeContainer from '../likes/like_container';

class StoryIndexItem extends React.Component {
  render(){
    const { story } = this.props;
    const image = this.defineImage(story);
    const imgPath = story.image_url;
     return (
      <li className="story-index-item">
        <section className="index-item">
          <h3 className="story-index-title">{ story.title }</h3>
          <p className="story-index-author-info">by {story.author.username} </p>
          { image }
          <p className="story-index-body-preview"> { story.body.slice(0, 65) }...</p>
          <Link to={ `/stories/${ story.id }`} className="read-more">Read more...</Link>
          < LikeContainer storyId={ story.id } likes={ story.likes }/>
        </section>
      </li>
    );
  }
  defineImage(story){
    if (story.image_url){
      let width = this.getMeta(story.image_url);
      if (width > 800) {
        return (<img className="story-index-image"src={ story.image_url }/>);
      } else {
        return (<img className="story-index-image-small"src={ story.image_url }/>);
      }
    } else {
      return;
    }
  }

  getMeta(url){
    var img = new Image();
    img.src = url;
    return img.naturalWidth
  }
}

export default StoryIndexItem;
