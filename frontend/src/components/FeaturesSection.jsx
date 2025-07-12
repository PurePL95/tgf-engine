// frontend/src/components/FeaturesSection.jsx
import React from 'react'
import { FaDice, FaDragon, FaUsers } from 'react-icons/fa'

const features = [
    { icon: <FaDice size={32} />, title: 'Turowa walka', desc: 'Punkty akcji, taktyka i adrenalina.' },
    { icon: <FaDragon size={32} />, title: 'Bestiariusz', desc: 'Setki potworów do pokonania.' },
    { icon: <FaUsers size={32} />, title: 'Społeczność', desc: 'Klanowe wojny i sojusze.' },
]

export default function FeaturesSection() {
    return (
        <section className="container mx-auto my-8 text-center">
            <h2 className="text-3xl font-title mb-6">Zróżnicowana rozgrywka RPG</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="rpg-panel p-6">
                        <div className="mb-4 text-accent">{f.icon}</div>
                        <h3 className="text-xl font-title mb-2">{f.title}</h3>
                        <p className="font-text">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
