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

eventHub.addEventListener("fontChosen", event => {
    const font = event.detail.fontSize

    const contentTarget = document.querySelector('.favorites')

    if (contentTarget.classList.contains("xsmall")) {
       contentTarget.classList.remove("xsmall")
    }
    else if (contentTarget.classList.contains("small")){
        contentTarget.classList.remove("small")
    }
    else if (contentTarget.classList.contains("large")){
        contentTarget.classList.remove("large")
    }
    else if (contentTarget.classList.contains("xlarge")){
        contentTarget.classList.remove("xlarge")
    }

    // contentTarget.classList = []
    contentTarget.classList.add(font)
})

eventHub.addEventListener("colorChosen", event => {

    const color = event.detail.color

    const contentTarget = document.querySelector(".favorites")

    if (contentTarget.classList.contains("blue")) {
        contentTarget.classList.remove("blue")
     }
     else if (contentTarget.classList.contains("green")){
         contentTarget.classList.remove("green")
     }
     else if (contentTarget.classList.contains("purple")){
         contentTarget.classList.remove("purple")
     }
     else if (contentTarget.classList.contains("red")){
         contentTarget.classList.remove("red")
     }

    // contentTarget.classList = []
    contentTarget.classList.add(color)

})

eventHub.addEventListener("pixelChosen", event => {
    const score = event.detail.pixel
    
    const contentTarget = document.querySelector('.favorites')

    if (contentTarget.classList.contains("onepixel")) {
        contentTarget.classList.remove("onepixel")
     }
     else if (contentTarget.classList.contains("threepixels")){
         contentTarget.classList.remove("threepixels")
     }
     else if (contentTarget.classList.contains("fivepixels")){
         contentTarget.classList.remove("fivepixels")
     }
    // contentTarget.classList = []
    contentTarget.classList.add(score)
    })