import React from 'react';

const Book = (props) => {
  const {img, title, author} = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  }

  const clickHandlerComplex = author => alert(author);

  const handleMouseOver = ()=>console.log(author);
  return (
      <article className='book' onMouseOver={handleMouseOver}>
        <img src={img} alt=""/>
        <h1 onClick= {()=>console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Refernce example</button>
        <button type='button' onClick={()=>clickHandlerComplex(author)}>Complex Event Handler</button>
      </article>
  )
}

export default Book;