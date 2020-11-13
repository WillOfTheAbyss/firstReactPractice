import React from "react";
import './post-status-filter.css';

const PostStatusFilter = (props) => {

    const buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'}
    ]
    const {filter, onUpdateFilter} = props;
    return (
        <div className = 'btn-group'>
            {buttons.map(({name, label}) => {
                const active = (filter === name) ? 'btn-info' : 'btn-outline-secondary' ;

                return (<button 
                            key = {name}
                            className = {`btn ${active}`}
                            onClick = {() => onUpdateFilter(name)}>{label}
                        </button>)
            })}
        </div>
    )
}

export default PostStatusFilter;