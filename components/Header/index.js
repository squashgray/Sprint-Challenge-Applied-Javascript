// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const addP = document.querySelector('.header-container');

addP.appendChild(Header());

function Header() {
    const div1 = document.createElement('div');
    const span1 = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    div1.classList.add(header);
    span1.classList.add(date);
    span2.classList.add(temp);

    div1.appendChild(span1);
    div1.appendChild(h1);
    div1.appendChild(span2);

    span1.textContent = "SMARCH 28, 2019";
    h1.textContent = "Lambda Times";
    span2.textContent = "98°";

    return div1;
}
