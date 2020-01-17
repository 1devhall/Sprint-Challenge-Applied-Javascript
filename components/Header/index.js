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
const headerItems = document.querySelector('.header-container');

function Header() {

const heade = document.createElement('div');
const aDate = document.createElement('span');
const hTitle = document.createElement('h1');
const temprature = document.createElement('span');

heade.append(aDate);
heade.append(hTitle);
heade.append(temprature);

heade.classList.add('header');
aDate.classList.add('date');
temprature.classList.add('temp');

aDate.textContent = "SMARCH 28, 2019"
hTitle.textContent = "Lambda Times"
temprature.textContent = "98°"

return heade

}


headerItems.append(Header());