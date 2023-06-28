import { useEffect, useState } from "react";
import api from "./api";

const Card = () => {
        const [books, setBooks] = useState([]);
        const [isMounted, setIsMounted] = useState(false);

        useEffect(() => {
            !isMounted &&
              api.getBooks().then((json) => {
                setBooks(json);
                setIsMounted(true);
              });
          }, [isMounted]);

          console.log(api.getBooks())

        return (
    -       <div>
                {books && books.map((book, index) => {
                    return (
                        <article key={index}>
                            <img>{book.imgage}</img>
                            <h4>{book.title}</h4>
                            <p>{book.author}</p>
                        </article>
                    );
                })}
            </div>
        );
};

export default Card;