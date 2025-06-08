document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const exitButton = document.getElementById('exitButton');
    const prideText = document.getElementById('prideText'); 
    const body = document.body;

    const rainbowColors = [
        '#FF0000', // Red
        '#FF7F00', // Orange
        '#FFFF00', // Yellow
        '#00FF00', // Green
        '#0000FF', // Blue
        '#4B0082', // Indigo
        '#9400D3'  // Violet
    ];

    
    function getContrastTextColor(hexColor) {
        
        hexColor = hexColor.replace(/^#/, '');

       
        const r = parseInt(hexColor.substring(0, 2), 16);
        const g = parseInt(hexColor.substring(2, 4), 16);
        const b = parseInt(hexColor.substring(4, 6), 16);

        
       
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        
        
        return luminance > 0.5 ? '#000000' : '#FFFFFF'; 
    }
    


    colorButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * rainbowColors.length);
        const randomColor = rainbowColors[randomIndex];

        body.style.backgroundColor = randomColor;
        prideText.style.color = getContrastTextColor(randomColor); 
    });

    exitButton.addEventListener('click', function() {
        body.style.backgroundColor = 'white';
        prideText.style.color = getContrastTextColor('white'); 
    });

    
    prideText.style.color = getContrastTextColor('#f0f0f0');
});