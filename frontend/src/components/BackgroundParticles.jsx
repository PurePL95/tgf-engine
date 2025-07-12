import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function BackgroundParticles(props) {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine)
    }, [])

    return (
        <Particles
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: { repulse: { distance: 100, duration: 0.4 } },
                },
                particles: {
                    number: { value: 50, density: { enable: true, area: 800 } },
                    color: { value: "#a9743b" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: { min: 1, max: 3 } },
                    move: { enable: true, speed: 1, outModes: { default: "bounce" } },
                },
            }}
            className={`absolute inset-0 z-0 ${props.className || ""}`}
        />
    )
}
