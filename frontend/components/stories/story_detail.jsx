import React from 'react';
import { Link } from 'react-router';
import WriteCommentContainer from '../comments/write_comment_container';


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
    let link;
    if (currentUser === undefined || story.author.id === undefined){
      link = (<div></div>);
    } else if
      (story.author.id === currentUser.id)
    {
      let id = this.props.params.storyId;
      link = <Link to={`/stories/edit/${ id }`}>Edit this story</Link>;
    } else {
      link = (<div></div>);
    }
    return (
      <section className="postDetail">
        <p className="author-bio">{ story.author.username }</p>
        <h1 className="postDetailTitle">{ story.title }</h1>
        <section className="postDetailBody">
          { story.body }
          <p className="linkContainer">{ link }</p>
        </section>
        <section className="commentsSection">
          < WriteCommentContainer />
        </section>
      </section>
    );
  }
}

export default StoryDetail;
