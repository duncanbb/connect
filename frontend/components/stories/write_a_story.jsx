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
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidUpdate() {
    this.redirectUnlessLoggedIn();
  }

  redirectUnlessLoggedIn() {
      if (this.props.loggedIn === false) {
        this.props.router.push("/");
      }
  }

  clearForm(){
    this.setState({title:"", body:""});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createStory } = this.props;
    const story = Object.assign({}, this.state);
    createStory(story);
    this.clearForm();
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
      <div className="write-a-story-wrapper">
        { errors }
        <form onSubmit={this.handleSubmit} className ="write-a-story-form">
            <label className="WriteStoryLabel">
              <input type="text"
                value={ title }
                onChange={this.update("title")}
                placeholder="Title Here..."
                className="title-input" />
            </label><br/>
          <label className="WriteStoryLabel">
              <textarea
                className="story-text-area"
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
