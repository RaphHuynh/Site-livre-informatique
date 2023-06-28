import { Link } from "react-router-dom";

export default NavBar;


function NavBar(){

    return(
        <nav className="fixed w-full z-10 px-40">
            <div className='flex items-center border-b'>
                <h1 className="text-left mx-2 my-2 text-xl font-title-nav">RaynhCoding</h1>
                <div className='flex flex-row mr-0 ml-auto my-2'>
                    <Link to="/" className="transition delay-75 mx-2 bg-black hover:bg-green-500 rounded-full text-white py-2 px-4 font-nav">Accueil</Link>
                    <Link to="/books" className="transition delay-75 mx-2 bg-black hover:bg-green-500 rounded-full text-white py-2 px-4 font-nav">Livres</Link>     
                </div>
            </div>
        </nav> 
    );
  
  }