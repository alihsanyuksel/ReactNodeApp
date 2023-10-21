import React from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './BookLibrary.css';
import {Link} from 'react-router-dom';

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
        };

        this.handleDelete = this.handleDelete.bind(this);
    }


    componentDidMount(){
        this.refresh();
        
    }

    refresh() {
        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => {
                this.setState({ books: result.data }, () => {
                    console.log("State updated:", this.state.books);
                });
            })
            .catch(error => console.log(error));
    }

    handleDelete(id) {
        axios.delete(process.env.REACT_APP_SERVER_URL + '/' + id)
        .then(result => {
             this.refresh();
        })
        .catch(error => {
            console.log(error);
        })
    }


    render() {
        let books = this.state.books.map((book) => {

        let date = book.published.toString().substr(0, 4);

        return (
            <tr key={book.id}>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{date}</td>
                <td><Link to={'/edit/' + book.id}><EditIcon /></Link></td>
                <td><Link onClick = {() => {if(window.confirm("deeelete?")) this.handleDelete(book.id)}} to='/'><DeleteIcon /></Link></td>
            </tr>)
        });
        return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Published</th>   
                </tr>
                </thead>
                <tbody>
                    {books} 
                </tbody>
                
            </table>
        </div>
        );
    }
}

export default BookLibrary;