const SLIDE = {
    title: "React is declarative"
    bullets: [
        "1",
        "@",
        "..."
    ],
}

function createSlide(slide) {
    const slideElement = document.createElement('div')

    const title = document.createElement('h1')
    title.innerHTML = SLIDE.title

    return slideElement
}
