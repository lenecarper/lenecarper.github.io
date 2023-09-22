// Typing effect

// Wait for the document to load
document.addEventListener("DOMContentLoaded", function ()
{
    // Get the ID of the portfolio header text
    const textElement = document.getElementById("type-smooth");
    // Text to add into the header
    const textToType = "Milan van Houts Portfolio";
    // Current character position
    let charIndex = 0;

    // Function to type the characters out
    function typeCharacter()
    {
        // If the character position is less than the entire word length, run below code
        if (charIndex < textToType.length)
        {
            // Save the letters into a variable
            const char = textToType.charAt(charIndex);
            // Append the letters one by one into the header text element, delay by 75ms
            textElement.innerHTML += char;
            charIndex++;
            setTimeout(typeCharacter, 75);
        }
    }

    // Start the typing effect
    typeCharacter();
});

function displayModal()
{
    console.log('Displaying modal..');
    this.style.display = "none";
}