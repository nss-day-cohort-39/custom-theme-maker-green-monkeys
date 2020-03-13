
const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the font buttons
    if (clickEvent.target.id.startsWith("btnTheme--")) {

        // Get the chosen font
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
        const fontChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                fontSize: chosenColor
            }
        })

        eventHub.dispatchEvent(colorChosenEvent)
    }
})




export const ColorButtons = () => {
    return `
        <article class="colors">
            <fieldset>
                <legend>Background Colors</legend>

                <button id="btnTheme--red">Red</button>
                <button id="btnTheme--purple">Purple</button>
                <button id="btnTheme--blue">Blue</button>
                <button id="btnTheme--green">Green</button>
            </fieldset>
        </article>
    `
}
