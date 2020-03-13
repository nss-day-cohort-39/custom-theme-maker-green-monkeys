import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

const eventHub = document.querySelector("#container")


export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

const render = favoriteCollection => {
    return `
        <article class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}

eventHub.addEventListener("colorChosen", event => {

    const color = event.detail.color

    const contentTarget = document.querySelector(".favorites")
    contentTarget.classList = []
    contentTarget.classList.add(color, "container__panel", "favorites")

})

// const eventHub = document.querySelector("#container")

// export const NewsList = () => {
//     const newsItems = useNews()
//     return render(newsItems)
// }

// const render = newsCollection => {
//     return `
//     <article class="container__panel news">
//     ${newsCollection.map(news => NewsItem(news)).join("")}
//     </article>
//     `
// }

// eventHub.addEventListener("fontChosen", event => {
//     const font = event.detail.fontSize
    
//     const contentTarget = document.querySelector('.news')
//     contentTarget.classList = []
//     contentTarget.classList.add(font, "container__panel", "news")
// })




