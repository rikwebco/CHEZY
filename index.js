let CARD = document.getElementById('cardbox');
let HDR_ROW;
let CALLCOLUMNS;

// GAME PAGE SETTINGS AND FILLS

function setButtonDisplay() {
  // capture reset buttons container
  let resetButtons = document.getElementById('resets');
  // set button display on screens by width
  if (window.innerWidth <= 1200) {
    let hdrChild = resetButtons.closest('#game-header');
    // if reset buttons are in game header move to footer
    if (hdrChild) {
      hdrChild.removeChild(resetButtons);
      document.querySelector('#FooterA').appendChild(resetButtons);
    }
  } else { // for screens 1201+
    let ftrChild = resetButtons.closest('#footer');
    // if reset buttons are in footer move to game header
    if (ftrChild) {
      ftrChild.removeChild(resetButtons);
      document.querySelector('#game-header').appendChild(resetButtons);
    }
  }
}

function setCurrentList(theClass) {
  if (localStorage.currentList === undefined) {
    theClass.currentList = theClass.callList();
    localStorage.currentList = JSON.stringify(theClass.currentList);
  }
}

function setCardLists(theClass) {
  if (localStorage.currentCard === undefined) {
    theClass.currentCard = theClass.fivePacks();
    localStorage.currentCard = JSON.stringify(theClass.currentCard);
  }
}

function resetCard(theClass) {
  let p = prompt("This action will reset your card. Click OK to continue");
  if (p !== null) {
    theClass.currentCard = theClass.fivePacks();
    localStorage.currentCard = JSON.stringify(theClass.currentCard);
    setCardContent(theClass);
  } else {
    alert('Your card was not reset.');
  }
}

function resetGame(theClass) {
  localStorage.removeItem('currentCard');
  localStorage.removeItem('currentList');
  console.log('game is now reset.');
  init();
}


// BOARD FUNCTIONS AND FILLS

// set up Card framework
// outercard, headerrow, contentbox
function buildCardStructure() {
  let CardOuter = document.createElement('div');
  CardOuter.id = "card-outer-container";
  let HeaderRow = document.createElement('div');
  HeaderRow.id = "card-header-row";
  let ContentBox = document.createElement('div');
  ContentBox.id = "card-content-box";
  CardOuter.appendChild(HeaderRow);
  CardOuter.appendChild(ContentBox);
  CARD.appendChild(CardOuter);
  HDR_ROW = document.getElementById('card-header-row');
  CALLCOLUMNS = document.getElementById('card-content-box');
}

function setCardHeaderRow(theClass){
  if(HDR_ROW){
    HDR_ROW.innerHTML = "";
    let hdrs = theClass.colHeads;
    hdrs.forEach(hdr => {
      let hdrOuter = document.createElement('div');
      hdrOuter.className = "card-column-label";
      let hdrInner = document.createElement('span');
      hdrInner.className = "card-column-value";
      hdrInner.textContent = hdr;
      hdrOuter.appendChild(hdrInner);
      HDR_ROW.appendChild(hdrOuter);
    });
  }
}

function setCardContent(theClass){
  let cardbox = document.getElementById('card-content-box');
  cardbox.innerHTML = "";
  let columnLists = JSON.parse(localStorage.currentCard);
  columnLists.forEach((list,i) => {
    let colContainer = document.createElement('div');
    colContainer.id = theClass.colHeads[i];
    list.forEach(item=>{
      let contentItem = document.createElement('div');
      contentItem.className = 'content-item';
      contentItem.innerText = item;
      colContainer.appendChild(contentItem);
    });
    cardbox.appendChild(colContainer);
  });

}

// if (localStorage.currentList) {
//   setColumns(_CHEZY, CARD);
// }

// function setColumns(theClass, CARD) {
//   // set col Headers/Letters
//   theClass.colHeads.forEach(ltr => {
//     let headerbox = document.createElement('div');
//     headerbox.className = "header-box";
//     headerbox.id = ltr;
//     headerbox.innerText = ltr;
//     CALLROW.appendChild(headerbox);
//   });

//   console.log(localStorage.currentCard);
// }