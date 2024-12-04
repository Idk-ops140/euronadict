// Script for the Translate Page
function translateWord() {
    const word = document.getElementById('translate-input').value.trim();
    const translationResult = document.getElementById('translation-result');

    // Example translation data (replace with real data or API later)
    const dictionary = {
        sun: 'Helias',
        water: 'Vatra',
        earth: 'Geia',
        light: 'Luminós',
        love: 'Lyubero'
    };

    if (word in dictionary) {
        translationResult.textContent = `The Eurona translation for "${word}" is "${dictionary[word]}".`;
    } else {
        translationResult.textContent = `Sorry, the word "${word}" is not in our database yet.`;
    }
}
