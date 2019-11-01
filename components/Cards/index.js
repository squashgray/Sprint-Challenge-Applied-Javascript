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

let cardLocation = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then(response => {
          console.log(response.data.articles);
          Object.values(response.data.articles).forEach(topics => {
            topics.forEach(articles => {
              cardLocation.appendChild(createCard(articles));
            });
         });

      });

function createCard(articles) {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const img1 = document.createElement('img');
    const span1 = document.createElement('span');

    div1.classList.add('card');
    div2.classList.add('headline');
    div3.classList.add('author');
    div4.classList.add('img-container');

    div1.appendChild(div2);
    div1.appendChild(div3);
    div3.appendChild(div4);
    div3.appendChild(span1);
    div4.appendChild(img1);

    img1.src = articles.authorPhoto;
    div2.textContent = articles.headline;
    span1.textContent = articles.authorName;

    return div1;

}


      