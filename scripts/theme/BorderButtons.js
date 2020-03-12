const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".themes")

// Listen for browser generated click event in this component
contentTarget.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id.startsWith("pixelsize")) {

        // Get the chosen color
        const [chosenPixel] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
        const pixelChosenEvent = new CustomEvent("pixelChosen", {
            detail: {
                pixel: chosenPixel
            }
        })

        eventHub.dispatchEvent(pixelChosenEvent)
    }
})

export const BorderButtons = () => {
    return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}
