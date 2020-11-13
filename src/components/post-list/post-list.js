import React from "react";
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onStatusToogle}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <PostListItem 
            key = {id}  
            {...itemProps} 
            onDelete = {() => onDelete(id)}
            onImportant = {() => onStatusToogle(id, 'important')}
            onLike = {(e) => {
                if(e.target.tagName !== 'BUTTON'){
                    onStatusToogle(id, 'like')
                }}}
            />
        )
    });

    return (
        <ListGroup className = "app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;