import React from 'react';
import data from '../data.json';
import './postview.css';

class PostView extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      post: {}
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    const post = data.find(d => d.id === id);
    this.setState({ post });
  }

  render(){

    const { post } = this.state;

    return(
      <div className='polaroid'>
        <div className='container'>
          <img src={post.image} height={100} width={100}  alt="Smiley face" />
        </div>
        <div className='container'>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Description:</strong> {post.description}</p>
          <p><strong>Author:</strong> {post.author}</p>
          <p><strong>Votes:</strong> {post.votes}</p>
        </div>
      </div>
    )
  }
}

export default PostView;