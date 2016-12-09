import React from 'react';
import { Link } from 'react-router';

class StoryIndexItem extends React.Component {
  render(){
    const img = window.plant;
    const { story } = this.props;
     return (
      <li className="story-index-item">
        <section className="indexItem">
          <h3 className="story-index-title">{ story.title }</h3>
          <img className="story-index-image"src={img}/>
          <p className="story-index-body-preview"> { story.body.slice(0, 100) }</p>
        </section>
      </li>
    );
  }
}
// TODO: style this
// TODO: add create, update and destroy
export default StoryIndexItem;
