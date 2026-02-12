/*
 * Add a button to the page that says "Click me!"
 */
const button = document.createElement("button");

button.textContent = "Click me!";
// button.innerText = "Click me!";
// button.innerHTML = "Click me!";
    // these all work

document.body.appendChild(button);


/*
 * Change the button to have green text.
 */
button.style.color = "green";


/*
 * When clicked, make the button show a popup window with the text "Button clicked."
 */
button.addEventListener("click", (e) => {
    // alert("Button clicked.");
});
    // e will hold information about the event (where it was clicked, the element that was clicked, etc.)


/*
 * Remove the button from the page.
 */
// button.remove();
// document.body.removeChild(button);
    // also works


/*
 * On button click, call the PokeAPI to get Bulbasaur's information and display it on the page
 * in the element with the id "info-text".
 */
button.addEventListener("click", async (event) => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
        const data = await response.text();
            // .text() gives you a string version of the .json() method
            // or you can do    data = await response.json();
            //                  infoText.innerText = JSON.stringify(data);

        const infoText = document.getElementById("info-text");
        infoText.innerText = data;
    } catch (err) {
        console.error(err);
    }
});