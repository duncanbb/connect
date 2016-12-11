import React from 'react';
import { Link, withRouter } from 'react-router';

class WriteAStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectUnlessLoggedIn();
  }

  redirectUnlessLoggedIn() {
      if (this.props.loggedIn === false) {
        this.props.router.push("/");
      }
  }


  handleSubmit(e) {
    e.preventDefault();
    const { createStory } = this.props;
    const story = Object.assign({}, this.state);
    createStory(story).then(() => this.props.router.push("/"));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const { errors } = this.props;
    const { title, body } = this.state;
    if (window.currentUser === undefined){
      return ( <div></div> )
    }
    return (
      <div>
        { errors }
        <form onSubmit={this.handleSubmit} className ="write-a-story-form">
            <label className="WriteStoryLabel">Title:
              <input type="text"
                value={ title }
                onChange={this.update("title")}
                className="title-input" />
            </label><br/>
          <label className="WriteStoryLabel">Body:
              <textarea
                 value={ body }
                 placeholder="Write Here..."
                 onChange={this.update('body')}>
              </textarea>
            </label>
            <br/>
          <input className="storysubmitButton" type ="submit" value="Publish" />
        </form>
      </div>
    );
  }


  errors(){
    const { errors } = this.props;
    if (errors.length === 0){
      return;
    } else {
      return(
        <ul className="story-writing-errors">
          { errors.map((error, idx) => <li key={idx}> {error} </li>) }
        </ul>
      );
    }
  }

}


export default withRouter(WriteAStory);
