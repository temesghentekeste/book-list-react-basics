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
        <Image/>
        <Title/>
        <Author/>
      </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81l7K528xDL._AC_UL320_SR208,320_.jpg" alt=""/>

const Title = () => <h1>Cracking the Tech Career: Insider Advice on Landing a Job at Google, Microsoft, Apple, or any Top Tech Company 
</h1>

const Author = () => <h4 style={{color: '#617d98', fontSize: '0.98rem', marginTop:'0.5rem'}}>Gayle Laakmann McDowell</h4>

export default App;
