import Footer from "./Footer";
import NavBar from "./NavBar";
import Card from "./components/Card";

export default Books;

function Books(){
    return(
        <main>
            <NavBar/>
            <div className="flex items-center w-full min-h-screen justify-center md:px-44 mb-10">
                <section className="flex flex-col items-center">
                    <h1 className="text-2xl mt-20 md:text-4xl lg:text-7xl text-center mb-10 border-dashed border-b-4 w-fit dark:border-0">Liste des livres</h1>
                    <article className="flex flex-wrap justify-center">
                        <Card/>
                    </article>
                </section>
            </div>
            <Footer/>
        </main>
    )
}