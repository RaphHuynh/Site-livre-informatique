import { useEffect, useState } from "react";
import api from "./api";

function Card(){
    const [books, setBooks] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted &&
        api.getBooks().then((json) => {
            setBooks(json);
            setIsMounted(true);
        });
    }, [isMounted]);

    return (
        <figure className="flex flex-wrap">
            {books.map((book) =>(
                <article key={book.title} className="flex">
                    <img src={book.image} height="100" width="100"></img>
                    <aside>
                        <h1>{book.title}</h1>
                        <p>{book.author}</p>
                    </aside>
                </article>
            ))}
        </figure>
    );
}

export default Card;