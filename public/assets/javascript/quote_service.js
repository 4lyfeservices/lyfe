document.addEventListener('DOMContentLoaded', function () {
    fetch('./assets/list.txt')
        .then(response => response.text())
        .then(data => {
            const quotes = data.split('\n');
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('quote').textContent = randomQuote;
        })
        .catch(error => console.error('Error fetching the quotes:', error));
});