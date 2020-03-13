const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {

   
    if (clickEvent.target.name === "pixelsize") {

       
        const chosenPixel = clickEvent.target.value

   
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
