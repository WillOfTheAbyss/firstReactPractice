import React, { Component } from "react";
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';
import './app.css';

export default class App extends Component {

    constructor(props){
        super();
        this.state = {
            data: [
                {label: 'Going to learn React', important: false, like: true, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a break', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }   
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.statusToogle = this.statusToogle.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onUpdateFilter = this.onUpdateFilter.bind(this);
    }
    
    deleteItem(id) {
        this.setState(({data}) => {
            const newArr = data.filter(item => item.id !== id);
            return {
                data: newArr
            }
        });

    }

    searchPost(data, term, filter){
        if (filter === 'all'){
            return data.filter(item => item.label.toLowerCase().indexOf(term) > -1);
        }
        return data.filter(item => item.label.toLowerCase().indexOf(term) > -1 && item[filter] === true);

    }    

    onUpdateSearch(term){
        this.setState({term});
    }

    onUpdateFilter(filter){
        this.setState({filter});
    }

    addItem(label) {
        this.setState(({data}) => {
            const newItem = {
                label,
                important: false, 
                id: data[data.length - 1].id + 1
            }
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    statusToogle(id, statusName){
        this.setState(({data}) => {
            const newArr = data.map(item => {
                if(item.id === id){
                    return {...item, [statusName]: !item[statusName]};
                }
                return item;
            });
            return {
                data: newArr
            }
        });
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPost = data.length;

        const visiblePost = this.searchPost(data, term, filter);
        return (
            <div className = 'app'>
                <AppHeader
                liked = {liked}
                allPost = {allPost}/>
                <div className = 'search-panel d-flex'> 
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStatusFilter
                    onUpdateFilter = {this.onUpdateFilter}
                    filter = {filter}/>
                </div>
                <PostList 
                posts = {visiblePost}
                onDelete = {this.deleteItem}
                onStatusToogle = {this.statusToogle}/>
                <PostAddForm 
                onAdd = {this.addItem}/>
            </div>
        )
    }
}