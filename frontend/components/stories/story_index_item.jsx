import React from 'react';
import { Link } from 'react-router';

class StoryIndexItem extends React.Component {
  render(){
    const { story } = this.props;
     return (
      <li className="story-index-item">
        <section>
          <h3 className="story-index-title">{ story.title }</h3>

          <p className="story-index-body-preview"> { story.body.slice(0, 100) }</p>
          { story.body.slice }
        
        </section>
      </li>
    );
  }
}

export default StoryIndexItem;
