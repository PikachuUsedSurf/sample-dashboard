const cardData = [
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
    {header: 'Report header', content: 'Here is teh card content and everythin inside', footer:'Report footer'},
   
];

const cardsContainer = document.getElementById('cards');

cardData.forEach(data => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  cardElement.innerHTML = `
    <div class="card-header">${data.header}</div>
    <div class="card-content">${data.content}</div>
    <div class="card-footer">${data.footer}</div>
  `;

  cardsContainer.appendChild(cardElement);
});