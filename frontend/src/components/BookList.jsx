import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/books")
            .then(response => setBooks(response.data))
            .catch(error => console.error("Erreur:", error));
    }, []);

    return (
        <div className="container">
            <h2 className="mt-4">Liste des Livres</h2>
            <Link to="/add" className="btn btn-primary my-2">Ajouter un Livre</Link>
            <ul className="list-group">
                {books.map(book => (
                    <li key={book._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{book.titre} - {book.auteur}</span>
                        <Link to={`/books/${book._id}`} className="btn btn-info btn-sm">Détails</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;