import React from 'react';
import { Link } from 'react-router';
import LikeContainer from '../likes/like_container';

class StoryIndexItem extends React.Component {
  render(){
    const { story } = this.props;
    const preview = this.createPreview(story);
    const image = this.defineImage(story);
    const imgPath = story.image_url;
     return (
      <li className="story-index-item">
        <section className="index-item">
          <Link to={ `/stories/${ story.id }`}>
            <p className="story-index-title">{ story.title }</p>
          </Link>
          <Link to={ `/users/${ story.author.id }`}>
            <p className="story-index-author-info">by {story.author.username} </p>
          </Link>
          <Link to={ `/stories/${ story.id }`}>
            { image }
            <div className="story-index-body-preview"> { preview }...</div>
            <div className="story-footer">
              <p className="read-more">Read more...</p>
              < LikeContainer storyId={ story.id } likes={ story.likes }/>
            </div>
        </Link>
        </section>
      </li>
    );
  }

  createPreview(story) {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = story.body;
    return wrapper.textContent;
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
