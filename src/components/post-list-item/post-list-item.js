import React from "react";
import { ListGroupItem } from "reactstrap";
import "./post-list-item.css";

 const PostListItem = (props) => {

    const {
      label,
      onDelete,
      onImportant,
      onLike,
      important,
      like,
    } = props;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }

    return (
      <ListGroupItem className={classNames} onClick={onLike}>
        <span className="app-list-item-label"> {label} </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm fa fa-star"
            onClick={onImportant}
          ></button>
          <button
            type="button"
            className="btn-trash btn-sm fa fa-trash-o"
            onClick={onDelete}
          ></button>
          <i className="fa fa-heart"> </i>
        </div>
      </ListGroupItem>
    );
}
export default PostListItem