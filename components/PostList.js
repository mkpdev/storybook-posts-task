import React from 'react';
import { Route, Link } from 'react-router-dom';
import data from '../data.json';

class PostList extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			posts: []
		}
	}

	componentWillMount(){
		const posts = data.sort((a,b) => { return b.votes - a.votes });
		this.setState({ posts });
	}

	render(){

		 const { posts } = this.state;
		return(
			<div className='container'>
				<table>
					<thead>
						<tr>
							<th>CreatedAt</th>
							<th>Title</th>
							<th>Description</th>
							<th>Image</th>
							<th>Author</th>
							<th>Votes</th>
						</tr>
					</thead>
   				<tbody>
     					{posts.map((val,index) => <tr key={index}>
        					<td>{val.createdAt}</td>
        					<td><Link to={`/post/${val.id}`}>{val.title}</Link></td>
        					<td>{val.description}</td>
        					<td><img src={val.image} height={100} width={100} alt="Smiley face" /></td>
        					<td>{val.author}</td>
        					<td>{val.votes}</td>
      					</tr>)}
    				</tbody>
  				</table>
			</div>
		);
	}
}

export default PostList;