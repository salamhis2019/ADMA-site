
function readMore() {
    const readMoreText = document.querySelector('.read-more-content');
    const container = document.createElement('div');
    container.classList.add('appended-content')
    var button = document.getElementById('btn');
    readMoreText.style.display = 'block';
    button = button.remove();
}

function seeClassification() {
    // DEFINE UI VARIABLE
    const imgcontainer = document.getElementById('images-container');
    const image = document.querySelector('.example-tweet');
    const button = document.getElementById('btn');
    const container = document.getElementById('container');
    const goback = document.querySelector('.go-back')

    // REMOVE OLD IMAGE
    image.remove();

    // APPEND NEW IMAGE
    const classified = document.createElement('div');
    classified.innerHTML = "<img src=\"images/classified-tweet.png\" alt=\"\" class=\"classified-tweet\">"
    imgcontainer.appendChild(classified);

    // BUTTON EDITS
    button.remove();

    // ADD NEW BUTTON
    const cont = document.createElement('div');
    cont.classList.add('btn-spacing')
    cont.innerHTML = '<a id="btn" href="#">Continue</a>';
    container.insertBefore(cont, goback)
}
