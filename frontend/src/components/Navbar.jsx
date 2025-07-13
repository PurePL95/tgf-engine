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
                            <Link to="/login" className="hover:underline">
                                Zaloguj
                            </Link>
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
