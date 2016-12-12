import React from 'react';

class StoryDetail extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStory(this.props.params.storyId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.storyId !== this.props.params.storyId){
      this.props.fetchSingleStory(newProps.params.storyId);
    }
  }

  render(){
    const { story } = this.props;
    return (
      <section className="postDetail">
        <p className="author-bio">{ story.author.username }</p>
        <h1 className="postDetailTitle">{ story.title }</h1>
        <section className="postDetailBody">
          { story.body }
        </section>
      </section>
    );
  }
}

export default StoryDetail;
