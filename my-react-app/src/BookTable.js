import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './BookTable.css';
import {Link} from 'react-router-dom';

function BookTable(props) {
    let books = props.books.map((book) => {

        let date = book.published.toString().substr(0, 4);

        return (
            <tr key={book.id}>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{date}</td>
                <td><Link to={'/edit/' + book.id}><EditIcon /></Link></td>
                <td><Link onClick = {() => {if(window.confirm("deeelete?")) props.handleDelete(book.id)}} to='/'><DeleteIcon /></Link></td>
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


export default BookTable;