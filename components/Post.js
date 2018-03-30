import React from 'react';
import { Switch,Route, Link } from 'react-router-dom';
import PostList from './PostList.js';
import PostView from './PostView.js';

class Post extends React.Component{
	
	render(){
		return(
		  <div>
		    <ul>
		      <li><Link to="/posts">Posts</Link></li>
		    </ul>
		    <Switch>
		    	<Route path="/post/:id" component={PostView}/>
					<Route path="/posts"   component={PostList}/>
				</Switch>
		  </div>
		);
	}
}

export default Post;
