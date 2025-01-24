import { useState,useEffect } from "react"
import "./index.css"
const BookDetails =(props) => {
  const [listOfBooks, setListOfBooks] = useState([])
  
  useEffect(() => {
    const getBooksList = async () => {
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
      const result = await response.json()
      setListOfBooks(result.books)
    }
    getBooksList()
  }, [])

  const bookDetails = async(book) => {
    const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${book.id}`)
    const singleBook = await response.json()
    console.log(singleBook.book.author)
    props.setSingleBookDetails(singleBook)
  }


  return (

    <>

      <h1>Book Buddy</h1>
      {
        listOfBooks.map((book) => {
          return (<div>
            {/* <img src ={assets/generci_book.png} alt={book.title} image /> */}
            <h3 key={book.id} onClick={() => { bookDetails(book) }} className ="book-link" >{book.title}</h3><p>Author: {book.author}</p>
            </div>)
        })
      }


    </>
  )}
export default BookDetails