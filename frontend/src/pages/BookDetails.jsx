import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/books/${id}`)
            .then(response => setBook(response.data))
            .catch(error => console.error("Erreur:", error));
    }, [id]);

    const deleteBook = () => {
        axios.delete(`http://localhost:3000/api/books/${id}`)
            .then(() => navigate("/"))
            .catch(error => console.error("Erreur:", error));
    };

    if (!book) return <p>Chargement...</p>;

    return (
        <div className="container mt-4">
            <h2>{book.titre}</h2>
            <p>Auteur: {book.auteur}</p>
            <p>ISBN: {book.ISBN}</p>
            <button onClick={deleteBook} className="btn btn-danger">Supprimer</button>
        </div>
    );
}

export default BookDetails;