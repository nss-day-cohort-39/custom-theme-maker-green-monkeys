import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

const eventHub = document.querySelector("#container")

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
    contentTarget.classList = []
    contentTarget.classList.add(font, "container__panel", "news")
})
