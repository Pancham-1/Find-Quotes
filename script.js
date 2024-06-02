document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const button = document.getElementById('new-quote');

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            quoteElement.textContent = `${data.content} - ${data.author}`;
        } catch (error) {
            quoteElement.textContent = "An error occurred while fetching a new quote. Please try again.";
            console.error('Error fetching quote:', error);
        }
    }

    button.addEventListener('click', fetchQuote);
});
