import { Link } from 'react-router-dom'

export default function Navbar({ onLoginSuccess }) {
    const token = localStorage.getItem('token')

    const handleLogout = () => {
        localStorage.removeItem('token')
        onLoginSuccess?.()
    }

    return (
        <header className="shadow-md">
            <nav className="rpg-nav container mx-auto">
                <Link to="/" className="text-2xl">
                    Vallact 2.0
                </Link>
                <div className="space-x-4">
                    <Link to="/ranking" className="hover:underline">Ranking</Link>
                    <Link to="/faq" className="hover:underline">FAQ</Link>
                    <a
                        href="https://wiki.vallact.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Wiki
                    </a>
                    {token ? (
                        <>
                            <Link to="/profile" className="hover:underline">
                                Profil
                            </Link>
                            <button onClick={handleLogout} className="hover:underline">
                                Wyloguj
                            </button>
                        </>
                    ) : (
                        <>
                            <a href="#login" className="hover:underline">
                                Zaloguj
                            </a>
                            <Link to="/register" className="hover:underline">
                                Zarejestruj
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}
