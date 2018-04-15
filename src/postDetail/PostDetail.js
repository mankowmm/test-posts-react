import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader';
import './PostDetail.css';

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.currentPostId = this.props.match.params.id;
        this.state = {
            loading: true,
            currentPost: {}
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.currentPostId}`)
        .then((response) => {
            return response.json();
        })
        .then((singlePostJson) => {
            this.setState({ 
                loading: false,
                currentPost: singlePostJson
            });
        });
    }

    renderCard() {
            return <Card>
                <CardBody>
                    <CardTitle><b>Title</b>: {this.state.currentPost.title}</CardTitle>
                    <CardSubtitle><b>UserId</b>:{this.state.currentPost.userId}</CardSubtitle>
                    <CardText><b>Body</b>: {this.state.currentPost.body}</CardText>
                    <Link className="btn btn-light" to="/posts">Go back to list</Link>
                </CardBody>
            </Card>
    }

    renderLoader() {
        return <Loader loading={this.state.loading}/>    
    }

    render() {
        const content = this.state.loading ? this.renderLoader() : this.renderCard();
        return  <div className="PostDetail">
            {content}
        </div>
            
    }
}

export default PostDetail;