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

const articleInfo = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response);
    const artCont = response.data.articles
        for( let info in artCont) {
            artCont[info].forEach(article => articleInfo.append(articleCards(article)))
        }
    })
    .catch(error => {
        console.log("Data did not return", error);
    });

    function articleCards (article) {
        const aCard = document.createElement('div');
        const aHeadline = document.createElement('div');
        const aAuthor = document.createElement('div');
        const imgC = document.createElement('div');
        const aImg = document.createElement('img');
        const aAName = document.createElement('span');

        aCard.append(aHeadline);
        aCard.append(aAuthor);
        aCard.append(imgC);
        imgC.append(aImg);
        aCard.append(aAName);

        aCard.classList.add('card');
        aHeadline.classList.add('headline');
        aAuthor.classList.add('author');
        imgC.classList.add('img-container');

        aHeadline.textContent = article.headline
        aImg.src = article.authorPhoto
        aAName.textContent = article.authorName

        return aCard

    }