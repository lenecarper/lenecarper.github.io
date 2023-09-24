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
    var projectInformation = document.getElementById('project-information');
    var projectDisplay = document.getElementById('project-display')
    var caption = document.getElementById('caption');
    let projectDescription = ["<b>Group project with 3 classmates. I was the primary back-end developer.</b><br>IMDBoxd: a combination between <a href='https://imdb.com'>IMDb</a> and <a href='https://letterboxd.com'>Letterboxd</a>. A site I created for my end-of-the-year project with a group where I did most of the back-end development. The goal of the website was to guess a random movie from the top 250 movies of all time on IMDb and to save it to your account in a collection.<br><br>This website was created with HTML, PHP, JavaScript, MySQL & Bootstrap", "<b>Solo project</b><br>Coincap CryptoMania: a project fetching and displaying the history of cryptocurrencies using the <a href='https://docs.coincap.io/'>Coincap API</a>. Currently still a work-in-progress, but it will display the past 7 days' history of the cryptocurrency in a graph when finished, along with current market price and USD market cap. The coins can be tracked in a wallet when signed in, along with their original values and current profits/losses.<br><br>This project was created with HTML, PHP, JavaScript (jQuery), AJAX, MySQL & MustacheJS for rendering templates.", "<b>Solo project</b><br>PHP Survey: a dynamic server with session-saving where the user can select how many questions they select, what kind of questions go into it and their own answers. When the survey is complete, the user can choose to save their data into a database or delete the data and start over. All of this is loaded in one singular page, working primarily with $_SESSION variables.<br><br>This website was created with HTML, PHP & MySQL. The difficulty in this project came from the $_SESSION variables being the only allowed method to save questions & answers.", "<b>Solo project</b><br>ROC Memory Match: a memory match game created in HTML, where the user plays to win with the least amount of moves possible. A time limit of two minutes is imposed once the first move is set, the user must find all the correct matches on the board before the time runs out. Every time the page is reloaded, the matches are reset and the board is randomized; the pieces are fetched through a random JavaScript fetch command.<br><br>This website was created with HTML, PHP, JavaScript (jQuery), AJAX, MySQL"];
    if (id == "imdboxd")
    {
        projectDisplay.src = "img/IMDBoxd_New.mp4";
        caption.innerHTML = projectDescription[0];
    }
    else if (id == "coincap")
    {
        projectDisplay.src = "img/CryptoMania_Temp.mp4";
        caption.innerHTML = projectDescription[1];
    }
    else if (id == "survey")
    {
        projectDisplay.src = "img/PHP_Survey.mp4";
        caption.innerHTML = projectDescription[2];
    }
    else if (id == "memorymatch")
    {
        projectDisplay.src = "img/Memory_Match.mp4";
        caption.innerHTML = projectDescription[3];
    }
    projectInformation.style.display = "block";
    caption.style.display = "block";
    console.log('Displaying project information for ' + id + '..');
}
