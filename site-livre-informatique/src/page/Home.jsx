import NavBar from "./NavBar";
import ImageLecture from "../assets/lecture.svg"
import Footer from "./Footer";

export default Home;

function Home(){
    return (
        <main className="h-scree">
            <NavBar/>
            <section className="flex items-center w-full min-h-screen justify-center px-10 md:px-44">
                <article className="m-auto">
                    <h1 className="text-2xl md:text-4xl lg:text-8xl border-dashed border-b-4 dark:border-0 w-max mb-5 pb-2">Liste de mes lectures</h1>
                    <p className="text-sm md:text-xl mb-10">Suite à une demande de ma communauté de développeur, j'ai réalisé ce site afin de partager mes lectures informatiques. J'y partage donc mes livres et mes e-books.</p>
                    <a href="https://discord.gg/8nKN4fduVD" className="flex items-center lg:text-xl w-fit text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill mr-2 hover:fill-green-500" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                        Rejoins la communauté dès maintenant
                    </a>
                </article>
                <aside>
                    <img src={ImageLecture} className="invers-img"></img>
                </aside>
            </section>
            <Footer/>
        </main>
    )
}