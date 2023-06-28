import Footer from "./Footer";
import NavBar from "./NavBar";
import Card from "./components/Card";

export default Books;

function Books(){
    return(
        <div>
            <NavBar/>
            <section className="flex items-center w-full min-h-screen justify-center px-44">
                <h1 className="text-4xl">Liste des livres</h1>
                <article className="items-center">
                    <Card/>
                </article>
            </section>
            <Footer/>
        </div>
    )
}