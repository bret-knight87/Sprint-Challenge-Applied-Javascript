// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        response.data.articles.bootstrap.forEach(article => {
            const finishedArticle = cardCreator(article);
            cardContainer.appendChild(finishedArticle);
        })
        response.data.articles.javascript.forEach(article => {
            const finishedArticle = cardCreator(article);
            cardContainer.appendChild(finishedArticle);
        })
        response.data.articles.jquery.forEach(article => {
            const finishedArticle = cardCreator(article);
            cardContainer.appendChild(finishedArticle);
        })
        response.data.articles.node.forEach(article => {
            const finishedArticle = cardCreator(article);
            cardContainer.appendChild(finishedArticle);
        })
        response.data.articles.technology.forEach(article => {
            const finishedArticle = cardCreator(article);
            cardContainer.appendChild(finishedArticle);
        })
        
    })


function cardCreator(article) {
    const newCard = document.createElement('div');
    newCard.classList.add('card')

    const cardHeadline = document.createElement('div');
    cardHeadline.classList.add('headline');
    cardHeadline.textContent = article.headline;

    const authorContainer = document.createElement('div');
    authorContainer.classList.add('author');

    const cardImg = document.createElement('div');
    cardImg.classList.add('img-container');

    const imgSrc = document.createElement('img');
    imgSrc.src = article.authorPhoto;

    const cardAuthor = document.createElement('span');
    cardAuthor.textContent = `By ${article.authorName}`;

    newCard.appendChild(cardHeadline);
    newCard.appendChild(authorContainer);
    authorContainer.appendChild(cardImg);
    cardImg.appendChild(imgSrc);
    authorContainer.appendChild(cardAuthor);
    

    return newCard;
};