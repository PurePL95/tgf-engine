// frontend/src/components/Footer.jsx
import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-neutral text-base-100 py-6 mt-12">
            <div className="container mx-auto text-center space-y-4">
                <div className="space-x-4 text-2xl">
                    <a href="https://facebook.com/vallheru"><FaFacebook /></a>
                    <a href="https://youtube.com/vallheru"><FaYoutube /></a>
                </div>
                <p className="font-text text-sm">
                    © 2025 Vallheru based on Vallheru Engine |
                    <a href="/rules" className="underline px-1">Regulamin</a> |
                    <a href="/privacy" className="underline px-1">Polityka prywatności</a>
                </p>
            </div>
        </footer>
    )
}
