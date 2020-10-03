import React from 'react';

function App() {
  return (
    <section>
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
      <article>
        <Image/>
        <Title/>
        <Author/>
      </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81l7K528xDL._AC_UL320_SR208,320_.jpg" alt=""/>

const Title = () => <h1>Cracking the Tech Career: Insider Advice on Landing a Job at Google, Microsoft, Apple, or any Top Tech Company 
</h1>

const Author = () => <p>Gayle Laakmann McDowell</p>

export default App;
