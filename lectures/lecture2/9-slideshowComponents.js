const slides = [
    {
        title: "React"
        bullets: [
            'Bullet 1',
            'Bullet 2',
            'Bullet 3',
        ],
    },
    {
        title: "React again"
        bullets: [
            'React 1',
            'React 2',
            'React 3',
        ],
    },
    {
        title: "React one more time"
        bullets: [
            'Slide bullet 1',
            'Slide bullet 2',
            'Slide bullet 3',
        ],
    },
]


const slideShow = (
    <div>
        {slides.map(slide => <Slide>slide={slide}</Slide>)}
    </div>
)

const Slide = slide => (
    <div>
        <h1>{slide.title}</h1>
        <ul>
            {slide.bullets.map(bullet => <li>{bullet}</li>)}
        </ul>
    </div>
)
