import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"

const eventHub = document.querySelector("#container")

export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}

const render = scoreCollection => {
    return `
        <article class="container__panel scores">
            ${scoreCollection.map(score => Score(score)).join("")}
        </article>
    `
}


eventHub.addEventListener("pixelChosen", event => {
const score = event.detail.pixel

const contentTarget = document.querySelector('.scores')
contentTarget.classList = []
contentTarget.classList.add(score, "container__panel", "scores")
})