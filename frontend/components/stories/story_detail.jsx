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
    const { story, currentUser } = this.props;
    let button;
    if (currentUser === undefined || story.author.id === undefined){
      button = (<div></div>);
    } else if
      (story.author.id === currentUser.id)
    {
      button = (<button>Edit</button>);
    } else {
      button = (<div></div>);
    }
    return (
      <section className="postDetail">
        <p className="author-bio">{ story.author.username }</p>
        <h1 className="postDetailTitle">{ story.title }</h1>
        <section className="postDetailBody">
          { story.body }
          { button }
        </section>
      </section>
    );
  }
}

export default StoryDetail;
