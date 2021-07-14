import './style.css';

function CardGame(icon="alura-pixel", alt="Logo da Alura"){
    return `
        <article class="card-game" id="game-card">
            <img src="src/images/${icon}.png" alt="${alt}">
        </article>
    `;

}

export default CardGame;