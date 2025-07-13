import Slider from 'react-slick'
import { FaDice, FaDragon, FaUsers } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  { icon: <FaDice />, title: 'Turn based combat', desc: 'Plan your moves and defeat foes.' },
  { icon: <FaDragon />, title: 'Massive bestiary', desc: 'Hundreds of monsters await.' },
  { icon: <FaUsers />, title: 'Guild wars', desc: 'Team up with friends in epic wars.' },
]

export default function FeaturesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div className="container mx-auto my-16">
      <Slider {...settings}>
        {slides.map((s, i) => (
          <div key={i} className="px-4">
            <div className="rpg-panel text-center py-10">
              <div className="text-4xl text-accent mb-4">{s.icon}</div>
              <h3 className="text-xl font-title mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
