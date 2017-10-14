import React from 'react'
import Book from './Book'

const Bookshelf = (props) => (
    <div className="bookshelf">
      {/* <h2 className="bookshelf-title">{props.bookshelfs[props.index].title}</h2> */}
      <h2 className="bookshelf-title">{props.bookshelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li key={book.title}>
              <Book book={book} bookshelfs={props.bookshelfs} bookshelf={props.bookshelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
)

export default Bookshelf
