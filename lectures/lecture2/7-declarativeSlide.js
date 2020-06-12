const SLIDE = {
    title: "React is declarative"
    bullets: [
        "1",
        "@",
        "..."
    ],
}

function createSlide(slide) {
    return (
        <Slide>
            <div>
                <h1> {SLIDE.title} </h1>
                <ul>
                    {SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
                </ul>
            </div>
        </Slide>
    )
}
