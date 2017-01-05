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
    this.updateFile = this.updateFile.bind(this);
    this.formatImage = this.formatImage.bind(this);
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
    this.setState({title:"", body:"", imageUrl:""});
  }

  handleSubmit(e) {
    e.preventDefault();
    let file = this.state.imageFile;
    let formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[body]", this.state.body);
    if (file) {
      formData.append("story[image]", file);
    }
    const { createStory } = this.props;
    createStory(formData);
    this.clearForm();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  render(){
    const { errors } = this.props;
    const { title, body, imageUrl } = this.state;
    let width = this.getMeta(imageUrl);
    const imagePreview = imageUrl === undefined ? null : this.formatImage(width);
    if (this.props.currentUser === null){
      return (
        <div></div>
      )
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
              { imagePreview }
            </label><br/>
          <label className="WriteStoryLabel">
              <textarea
                className="story-text-area"
                 value={ body }
                 placeholder="Write Here..."
                 onChange={this.update("body")}/>
            </label>
            <label className="fileupload">Image Upload
              <input type="file" onChange={this.updateFile} className="image-upload"/>
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

  formatImage(width){
    const { imageUrl } = this.state;
    if (imageUrl){
      if (width > 800) {
        return (<img className="story-index-image"src={ story.image_url }/>);
      } else {
        return (<img className="small-img"src={ story.image_url }/>);
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


export default withRouter(WriteAStory);
