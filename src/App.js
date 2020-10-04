import React from 'react';
import './app.css';

// Books
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81l7K528xDL._AC_UL320_SR208,320_.jpg',
  title: 'Cracking the Tech Career: Insider Advice on Landing a Job at Google, Microsoft, Apple, or any Top Tech Company',
  author: 'Gayle Laakmann McDowell'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg',
  title: 'Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition',
  author: 'Gayle Laakmann McDowell'
}


// CSS

function App() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({img, title, author}) => {
  return (
      <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </article>
  )
}

export default App;
