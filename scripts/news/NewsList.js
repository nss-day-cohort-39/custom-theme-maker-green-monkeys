import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

const eventHub = document.querySelector("#container")
let childrenVisible = true
export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
    <article class="container__panel news">
    ${newsCollection.map(news => NewsItem(news)).join("")}
    </article>
    `
}

eventHub.addEventListener("fontChosen", event => {
    
    const font = event.detail.fontSize

    const contentTarget = document.querySelector('.news')

    contentTarget.classList.remove('xsmall', 'small', 'large', 'xlarge')

    contentTarget.classList.add(font)
})

eventHub.addEventListener("colorChosen", event => {

    const color = event.detail.color

    const contentTarget = document.querySelector(".news")

    contentTarget.classList.remove('blue', 'green', 'red', 'purple')

    contentTarget.classList.add(color)

})

eventHub.addEventListener("pixelChosen", event => {

    const score = event.detail.pixel

    const contentTarget = document.querySelector('.news')

    contentTarget.classList.remove('onepixel', 'threepixels', 'fivepixels')

    contentTarget.classList.add(score)

})

