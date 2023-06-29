import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import api_detail from "./components/api_detail";

export default Book;

function Book(){
    const [detail, setDetails] = useState([]);
    const {book} = useParams();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted &&
        api_detail.getBook(book).then((json) => {
            setDetails(json);
            setIsMounted(true);
        });
    }, [isMounted])

    return (
        <main>
            <NavBar/>
            <div className="flex items-center w-full min-h-screen justify-center md:px-44 px-2">
                <section className="my-20">
                    <h1 className="text-xl md:text-4xl text-center mb-10">{detail.title}</h1>
                    <article className="flex">
                        <aside>
                            <div className="xl:h-5/6">
                                <p className="text-justify text-sm md:text-xl mb-2 md:mb-0">{detail.description}</p>
                                <p className="text-right text-sm md:text-xl">{detail.author}</p>
                            </div>
                            <div className="xl:h-1/6">
                                <p className="text-righ text-sm md:text-xl">Edition : {detail.edition}</p>
                                <p className="text-right text-sm md:text-xl">ISBN : {detail.isbn}</p>
                            </div>
                        </aside>
                    </article>
                </section>
            </div>
            <Footer/>
        </main>
    )
}