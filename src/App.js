import React from 'react';

// CSS
import './app.css';

function App() {
  return (
    <section className="bookList">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return (
      <article className='book'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/81l7K528xDL._AC_UL320_SR208,320_.jpg" alt=""/>
        <h1>Cracking the Tech Career: Insider Advice on Landing a Job at Google, Microsoft, Apple, or any Top Tech Company</h1>
        <h4>Gayle Laakmann McDowell</h4>
      </article>
  )
}

export default App;
