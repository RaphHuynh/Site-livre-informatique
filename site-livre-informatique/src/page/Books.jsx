import Footer from "./Footer";
import NavBar from "./NavBar";
import Card from "./components/Card";

export default Books;

function Books(){
    return(
        <body>
            <NavBar/>
            <main className="flex items-center w-full min-h-screen justify-center px-44">
                <section className="">
                    <h1 className="text-4xl text-center">Liste des livres</h1>
                    <article className="flex flex-wrap justify-center">
                        <Card/>
                    </article>
                </section>
            </main>
            <Footer/>
        </body>
    )
}