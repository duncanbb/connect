import React from 'react';
import { Link, withRouter } from 'react-router';

class EditAStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      id: this.props.params.storyId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
     this.props.fetchSingleStory(this.props.params.storyId).then(
       function ({ id, title, body }) {
         this.setState({ id, title, body });
       }.bind(this)
     );
   }

  componentWillReceiveProps(newProps) {
    if (newProps.params.storyId !== this.props.params.storyId){
      this.props.fetchSingleStory(newProps.params.storyId);
    }
  }

  clearForm(){
    this.setState({title:"", body:""});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { updateStory } = this.props;
    const story = Object.assign({}, this.state);
    updateStory(story);
    this.clearForm();
    this.props.router.push(`/stories/${this.state.id}`);
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
      <div className="edit-a-story-wrapper">
        { errors }
        <form onSubmit={this.handleSubmit} className ="write-a-story-form">
            <label className="edit WriteStoryLabel">
              <input type="text"
                value={ title }
                onChange={this.update("title")}
                placeholder="Title Here..."
                className="title-input" />
            </label><br/>
          <label className="edit WriteStoryLabel">
              <textarea
                className="story-text-area"
                 value={ body }
                 placeholder="Write Here..."
                 onChange={this.update('body')}>
              </textarea>
            </label>
            <br/>
          <input className="submitButton" type ="submit" value="Update" />
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


export default withRouter(EditAStory);
