document.getElementById('noButton').addEventListener('click', function() {
    alert('That\'s still a Yes!');
});

document.getElementById('yesButton').addEventListener('click', function() {
    var messageElement = document.getElementById('message');
    messageElement.textContent = 'You clicked Yes!';
    messageElement.classList.remove('hidden');
});
