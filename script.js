const animals = {
    Dog: { image: 'dog.jpg', text: 'У собак унікальний відбиток носу».', sound: 'dog.mp3' },
    Cat: { image: 'cat.jpeg', text: 'Коти сплять до 70% свого життя.', sound: 'cat.mp3' },
    Parrot: { image: 'parrot.jpg', text: 'Папуги можуть повторити до 1000 слів!', sound: 'parrot.mp3' }
};

let currentSound = '';

function showAnimal(animal) {
    const data = animals[animal];
    if (!data) return;

    document.getElementById('animal-image').src = data.image;
    document.getElementById('animal-text').textContent = data.text;

    currentSound = data.sound;

    const playButton = document.getElementById('animal-sound');
    playButton.classList.remove('hidden');
    playButton.disabled = false;
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.sound');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const animal = button.getAttribute('data-animal');
            showAnimal(animal);
        });
    });

    document.getElementById('animal-sound').addEventListener('click', function () {
        if (currentSound) {
            const audio = new Audio(currentSound);
            audio.play();
        } else {
            alert('Виберіть тварину перед початком)');
        }
    });
});
