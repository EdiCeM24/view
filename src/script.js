const container = document.querySelector('.info-container'); 


const createAnime = () => {
    const anime = document.createElement('div');

    anime.classList.add('anime');

    const size = Math.random()*3;

    anime.style.width = `${size}px`;
    anime.style.height = `${size+5}px`;

    anime.style.left = `${Math.random()*100}%`;
    anime.style.top = `${Math.random()*100}%`;

    anime.style.animationDelay = `${Math.random() + 5}s`;
    anime.style.animationDelay = `${Math.random()*3+2}s`;

    return anime;
}

for(let i = 0; i < 30; i++){
    container.appendChild(createAnime());
    
}