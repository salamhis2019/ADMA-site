
function readMore() {
    const readMoreText = document.querySelector('.read-more-content');
    const container = document.createElement('div');
    container.classList.add('appended-content')
    var button = document.getElementById('btn');
    readMoreText.style.display = 'block';
    button = button.remove();
}