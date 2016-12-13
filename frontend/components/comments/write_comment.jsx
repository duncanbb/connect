import React from 'react';
import { Link, withRouter } from 'react-router';

class WriteComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      story_id: this.props.params.storyId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  clearForm(){
    this.setState({body:""});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createComment } = this.props;
    const comment = Object.assign({}, this.state);
    createComment(comment);
    this.clearForm();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const { errors } = this.props;
    const { body } = this.state;
    if (window.currentUser === undefined){
      return ( <div></div> )
    }
    return (
      <div className="write-a-comment-wrapper">
        { errors }
        <form onSubmit={this.handleSubmit} className ="write-a-comment-form">
          <label className="WriteCommentLabel">
              <textarea
                className="comment-text-area"
                 value={ body }
                 placeholder="Write Here..."
                 onChange={this.update('body')}>
              </textarea>
            </label>
            <br/>
          <input className="commentsubmitButton" type ="submit" value="Publish" />
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
        <ul className="comment-writing-errors">
          { errors.map((error, idx) => <li key={idx}> {error} </li>) }
        </ul>
      );
    }
  }

}


export default withRouter(WriteComment);
