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

function displayInfo(id)
{
    var projectDisplay = document.getElementById('project-information');
    var caption = document.getElementById('caption');
    let projectDescription = ["IMDBoxd: a combination between IMDb and Letterboxd. A site I created for my end-of-the-year project with a group where I did most of the back-end development. The goal of the website was to guess a random movie from the top 250 movies of all time on IMDb and to save it to your account in a collection. "];
    if (id == "imdboxd")
    {
        
    }
    projectDisplay.style.display = "block";
    caption.style.display = "block";
    console.log('Displaying project information for ' + id + '..');
}