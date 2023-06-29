import { Link } from "react-router-dom";

export default NavBar;


function NavBar(){

    return(
        <nav className="fixed w-full z-10 md:px-40 bg-white dark:bg-slate-900 dark:text-green-300">
            <div className='flex items-center border-b dark:border-0'>
                <h1 className="text-left mx-2 my-2 text-sm md:text-xl font-title-nav">{"</RaynhCoding>"}</h1>
                <div className='flex flex-row mr-0 ml-auto my-2'>
                    <Link to="/" className="transition delay-75 mx-2 bg-black dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-700 rounded-full text-white py-1 px-2 md:py-2 md:px-4 font-nav text-sm md:text-base">Accueil</Link>
                    <Link to="/books" className="transition delay-75 mx-2 bg-black dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-700 rounded-full text-white py-1 px-2 md:py-2 md:px-4 font-nav text-sm md:text-base">Livres</Link>     
                </div>
            </div>
        </nav> 
    );
  
  }