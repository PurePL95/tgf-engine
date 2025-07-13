import React from 'react'
import Slider from 'react-slick'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const features = [
  { title: 'Turn based combat', text: 'Plan your moves and defeat foes.' },
  { title: 'Massive bestiary', text: 'Hundreds of monsters await.' },
  { title: 'Guild wars', text: 'Team up with friends in epic wars.' }
]

export default function FeaturesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Container className="my-16">
      <Slider {...settings}>
        {features.map((f, i) => (
          <div key={i} className="px-4">
            <Paper className="p-8 rpg-panel text-center" elevation={3}>
              <Typography variant="h4" className="font-title mb-2">
                {f.title}
              </Typography>
              <Typography>{f.text}</Typography>
            </Paper>
          </div>
        ))}
      </Slider>
    </Container>
  )
}
