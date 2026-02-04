import { useState } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 shadow-md p-4 text-white backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto flex sm:justify-center items-center">

                <button 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden focus:outline-none bg-white/10 p-2 rounded-md z-50 relative"
                >
                    {isOpen ? 'Fechar' : 'Menu'}
                </button>

                <ul className={`
                    fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 h-screen w-full transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    sm:relative sm:inset-auto sm:bg-transparent sm:flex-row sm:h-auto sm:w-auto sm:translate-x-0 sm:space-y-0 sm:space-x-6 md:space-x-12 lg:space-x-16
                `}>
                    <li><a href="#design" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Design</a></li>
                    <li><a href="#camera" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Câmera</a></li>
                    <li><a href="#performance" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Performance</a></li>
                    <li><a href="#colors" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Cores</a></li>
                    <li>
                        <button type="button" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">
                            Comprar
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar