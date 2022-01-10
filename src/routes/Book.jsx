import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {BookData} from "../Components/Books/BookData";
import Title from "../Components/UI/Title/Title";
import Body from "../Components/UI/Body/Body";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState({})
  useEffect(() => {
   const book =  BookData.find(book => book.id === +id)
    if(Object.keys(book).length) {
      setBook((prev) => ({...prev, ...book}))
    }
  }, [id])

  return (
      <div>
        <Title headingText={book.title} headingLevel='h2' />
        <Body text={book.snippet}/>
      </div>
  )
};

export default Book;
