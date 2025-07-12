// frontend/src/components/WelcomeSection.jsx
import React from 'react'

export default function WelcomeSection() {
    return (
        <section className="container mx-auto rpg-panel my-8">
            <h2 className="text-3xl font-title mb-2">Witaj</h2>
            <div className="rpg-divider mb-4" />
            <p className="font-text mb-4">
                Vallheru to tekstowa gra RPG osadzona w świecie fantasy, rozgrywana
                wyłącznie w przeglądarce. Atmosfera klasycznego Vallheru, luźne
                zasady i wspólnota graczy – to nas wyróżnia.
            </p>
            <p className="font-text">
                Walcz z potworami, gromadź surowce, handluj na rynku, zarządzaj
                strażnicą i zawieraj sojusze. Ścieżek rozwoju jest bardzo wiele!
            </p>
        </section>
    )
}
