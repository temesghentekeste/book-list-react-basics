import React from 'react';
import {data} from './books'
import SpecificBook from './Book'
// CSS
import './app.css';

function App() {
  return (
    <section className="bookList">
     {data.map(book => <SpecificBook key={book.id} {...book}/>)}
    </section>
  );
}

export default App;
