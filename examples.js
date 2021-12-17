const button = document.querySelector('.continue-button');

button.addEventListener('click', function(e) {
    e.preventDefault();

    // DEFINE UI ELEMENTS
    const column = document.getElementById('column2');
    const button = document.querySelector('.continue-button'); 
    const message = document.querySelector('.appended');

    // CREATE ELEMENT TO PLACE INFO IN
    let content = document.createElement('div');

    // CREATING THE ELEMENT
    content.classList.add('examples-content')
    content.innerHTML = '<p class=\"example-header\">This post <strong>would not be classified as hate speech</strong> by our system becuase it expresses an opinion but does expressing hatred toward a group based on their religion:</p>\
    <img class=\"example-image" src="\images/nhs-tweet.png" alt=\"hate speech tweet">'
    column.appendChild(content)

    // CHANGE BACKGROUND COLOR OF COLUMN TO WHITE
    column.style.backgroundColor = 'green'

    // ADD MESSAGE AFTER BEING APPENDED
    message.textContent = 'Now we would like to show you our system in action!';

    // CHANGE THE INSIDE OF A BUTTON
    button.textContent = 'continue';

    if(button.textContent = 'continue') {
        button.href = 'tryit-out.html'
    }
    
    }, {once : true}
);