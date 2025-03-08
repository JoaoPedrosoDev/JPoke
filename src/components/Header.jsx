function Header(){
    return (
        <div>
            <header className="border rounded-2xl flex flex-col w-full items-center justify-center p-5">
                <h1 className="text-center text-4xl">JPoke</h1>
                <nav>
                    <ul className="flex space-x-10 mt-10 ">
                        <li>
                            <a href="/" className="text-lg hover:text-red-500">Busca Pokemon</a>
                        </li>
                        <li>
                            <a href="/dex" className="text-lg hover:text-red-500">Pokedex</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>

            </main>
        </div>
    )
}

export default Header;