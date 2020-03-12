

const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the font buttons
    if (clickEvent.target.id.startsWith("btnFont--")) {

        // Get the chosen font
        const [prefix, chosenSize] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
        const fontChosenEvent = new CustomEvent("fontChosen", {
            detail: {
                fontSize: chosenSize
            }
        })

        eventHub.dispatchEvent(fontChosenEvent)
    }
})
export const FontButtons = () => {
    return `
        <article class="fonts">
            <fieldset>
                <legend>Font Sizes</legend>

                <button id="btnFont--xsmall">Extra Small</button>
                <button id="btnFont--small">Small</button>
                <button id="btnFont--large">Large</button>
                <button id="btnFont--xlarge">Extra Large</button>
            </fieldset>
        </article>
    `
}