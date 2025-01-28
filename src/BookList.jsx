import { useState, useEffect } from "react"
import "./index.css"
const BookList = (props) => {
  const [listOfBooks, setListOfBooks] = useState([])
  try {
    useEffect(() => {
      const getBooksList = async () => {
        const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
        const result = await response.json()
        setListOfBooks(result.books)
      }
      getBooksList()
    }, [])
  }
  catch (err) { console.log(err) }

  const bookDetails = async (book) => {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${book.id}`)
    const singleBook = await response.json()
    console.log(singleBook.book.author)
    props.setSingleBookDetails(singleBook)
  }


  return (

    <div className="book-display">
      <div >
        <h2 className="page-title">Books List</h2>
        {
          listOfBooks.map((book) => {
            return (<>
              <h4 key={book.id}
                onClick={() => { bookDetails(book) }}
                className="book-link" >{book.title}
              </h4>
              <p className="book-author"> Author: {book.author}</p>
            </>)
          })
        }

      </div>
    </div>
  )
}
export default BookList