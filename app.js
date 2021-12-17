
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
    const goback = document.querySelector('.go-back');

    // REMOVE OLD IMAGE
    image.remove();

    // APPEND NEW IMAGE
    const classified = document.createElement('div');
    classified.innerHTML = "<img src=\"images/classified-tweet.png\" alt=\"\" class=\"classified-tweet\" id=\"classified\">"
    imgcontainer.appendChild(classified);

    // BUTTON EDITS
    button.remove();

    // ADD NEW BUTTON
    const cont = document.createElement('div');
    cont.classList.add('btn-spacing');
    cont.innerHTML = '<a id="btn" class="continue-btn" href="#">Continue</a>';
    container.insertBefore(cont, goback);

    // SHOW REFRESH BUTTON
    const refresh = document.createElement('div');
    refresh.innerHTML = '<i class="fa fa-refresh" style="font-size:36px;"></i>';
    imgcontainer.appendChild(refresh);

    // ISSUE: WHEN THE CLASSLIST IS REMOVED IT IS REMOVING THE WHOLE TAG, SO WHEN THE ELSE STATEMENT REUNS THE classified IS NULL

    refresh.addEventListener('click', function(){
        const classifiedImage = document.getElementById('classified');
        if(classifiedImage.classList.contains('classified-tweet')) { 
            imgcontainer.removeChild(classified);
            imgcontainer.insertBefore(image, refresh);
            classifiedImage.classList.remove('classified-tweet');
            refresh.remove();
            note.remove();
        }
    });

    // ADD NOTE
    const note = document.createElement('p');
    note.classList.add('sub-content', 'white');
    note.textContent = 'Click refresh to view post';
    imgcontainer.appendChild(note);
};