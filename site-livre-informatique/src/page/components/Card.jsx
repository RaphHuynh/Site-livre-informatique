import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <section className="flex flex-wrap items-center justify-center">
            {books.map((book) =>(
                <Link to={`${book.title}`} key={book.title} className="flex transition delay-75 bg-slate-100 dark:bg-white/5 rounded-lg m-2 hover:shadow-2xl dark:hover:shadow-lg hover:shadow-green-500/50 dark:hover:shadow-green-500 hover:text-green-500 border md:border-0">
                    <img src={book.image} className="rounded-l-lg image-size"></img>
                    <aside className="p-4 w-60 text-sm lg:text-base">
                        <h1 className="w-full h-3/4 md:text-justify">{book.title}</h1>
                        <span className="flex w-full h-1/4">
                            <p className="md:w-4/5">{book.author}</p>
                        </span>
                    </aside>
                </Link>
            ))}
        </section>
    );
}

export default Card;