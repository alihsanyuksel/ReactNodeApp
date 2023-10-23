import React from 'react';
import './Book.css';
import axios from 'axios';
import {Navigate, useParams} from "react-router-dom";
import FlashMessage from './FlashMessage';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
 
 class Book extends React.Component{

    validation = {
        author: {
            rule: /^\S.{0,48}\S$/,
            message: 'Author field must have 2-50 characters'
        },
        title: {
            rule: /^\S.{0,68}\S$/,
            message: 'Title field must have 2-68 characters'
        },
        published: {
            rule: /^\d{4}$/,
            message: 'Published date must have a 4-digit year'
        }
    };

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            id: props.match.params.id,
            author: "",
            title: "",
            published: "",
            warningCount: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(!this.state.id) {
            return;
        }

        axios.get(process.env.REACT_APP_SERVER_URL + '/' + this.state.id)
            .then(result => {
                let {author, title, published} = result.data[0];

                this.setState({
                    author: author,
                    title: title,
                    published: published.substr(0, 4)
                });
            })
            .catch(error => {
                this.warning("Unable to load book");
            })
    }


    warning(message) {
        this.setState({message: message, warningCount: this.state.warningCount + 1});
    }

    validate() {

        for (let field in this.validation) {
            const rule = this.validation[field].rule;
            const message = this.validation[field].message;
            const value = this.state[field];
            
            if (!rule.test(value)) {
                this.warning(message);
                return false;
            }
        }
        return true;
    }


    handleSubmit(event) {

        event.preventDefault();
        
        if(!this.validate()){
            return;
        };

        let {id, author, title, published} = this.state;
        published += "-01-01";

        const book = {
            id: id,
            author: author,
            title: title,
            published: published
        }

        let updateFunc = axios.post;
        let url = process.env.REACT_APP_SERVER_URL;

        if(id) {
            updateFunc = axios.put;
            url += '/' + id;
        }

        updateFunc(url, book)
            .then(result => {
                this.setState({created: true});
            })
            .catch(error => {
                this.warning("Unable to save");
            });

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        }); 
    }


    render() {

        if(this.state.created) {
            return <Navigate to='/' />;
        }

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='author'>Author:</label>
                    <input value={this.state.author} onChange={this.handleChange} type="text" name="author" id="author"/>
                    <label htmlFor='title'>Title:</label>
                    <input value={this.state.title} onChange={this.handleChange} type="text" name="title" id="title"/>
                    <label htmlFor='published'>Published:</label>
                    <input value={this.state.published} onChange={this.handleChange} type="text" name="published" id="published"/>
                    <input type="submit" value="Save"/>
                    <FlashMessage key={this.state.warningCount} message={this.state.message} duration="3000"/>
                    
                </form>
            </div>
        );

    }
}


export default withRouter(Book);
