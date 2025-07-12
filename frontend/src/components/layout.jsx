import { Link } from "react-router-dom"

export default function Layout({ children }) {
    const token = localStorage.getItem("token")
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-primary-600 text-white shadow">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-display">
                        Vallheru 2.0
                    </Link>
                    <div className="space-x-4">
                        {token ? (
                            <>
                                <Link to="/profile" className="hover:underline">
                                    Profil
                                </Link>
                                <Link to="/logout" className="hover:underline">
                                    Wyloguj
                                </Link>
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
            <main className="flex-grow container mx-auto px-6 py-10">
                {children}
            </main>
            <footer className="bg-gray-200 text-center py-4 text-sm">
                © 2025 Vallheru 2.0. All rights reserved.
            </footer>
        </div>
    )
}
