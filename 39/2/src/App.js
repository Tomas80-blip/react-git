import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "http://127.0.0.1:5000/books";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log("Klaida gaunant duomenis", error);
    }
  };

  const addBook = async () => {
    if (!newBook.title.trim() || !newBook.author.trim() || !newBook.year.trim()) {
      alert("Užpildykite visus laukus");
      return;
    }
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });
      if (response.ok) {
        fetchBooks();
        setNewBook({ title: "", author: "", year: "" });
      }
    } catch (error) {
      console.log("Klaida pridedant knygą", error);
    }
  };

  const updateBook = async () => {
    if (!editingBook) return;
    try {
      const response = await fetch(`${API_URL}/${editingBook.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingBook),
      });
      if (response.ok) {
        fetchBooks();
        setEditingBook(null);
      }
    } catch (error) {
      console.log("Klaida atnaujinant knygą", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        setBooks(books.filter((book) => book.id !== id));
      }
    } catch (error) {
      console.log("Klaida trinant knygą", error);
    }
  };

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditingBook({ ...editingBook, [e.target.name]: e.target.value });
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Knygų valdymo aplikacija</h1>
      <input
        type="text"
        placeholder="Ieškoti knygos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      
      <h2>Pridėti knygą</h2>
      <div className="input">
        <input type="text" name="title" value={newBook.title} onChange={handleInputChange} placeholder="Knygos pavadinimas" /><br/>
        <input type="text" name="author" value={newBook.author} onChange={handleInputChange} placeholder="Autorius" /><br/>
        <input type="number" name="year" value={newBook.year} onChange={handleInputChange} placeholder="Leidimo metai" /><br/>
        <button onClick={addBook}>Pridėti</button>
      </div>
      
      {editingBook && (
        <div className="edit">
          <h2>Redaguoti knygą</h2>
          <input type="text" name="title" value={editingBook.title} onChange={handleEditChange} /><br/>
          <input type="text" name="author" value={editingBook.author} onChange={handleEditChange} /><br/>
          <input type="number" name="year" value={editingBook.year} onChange={handleEditChange} /><br/>
          <div className="buttons" >
          <button onClick={updateBook}>Išsaugoti</button>
          <button onClick={() => setEditingBook(null)}>Atšaukti</button>
          </div>
        </div>
      )}

      <h2>Knygų sąrašas</h2>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.year})
            <div className="buttons">
            <button className="edit-button" onClick={() => setEditingBook(book)}>Redaguoti</button>
            <button className="delete-button" onClick={() => deleteBook(book.id)}>Trinti</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
