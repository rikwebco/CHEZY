let CARD = document.getElementById('card');
let CALLROW = document.getElementById('call-row');
let CALLCOLUMNS = document.getElementById('call-columns');

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



function setButtonDisplay() {
  if (window.innerWidth <= 1200) {
    if(header.children[2]){
      let r = header.children[2];
      header.removeChild(r);
      document.querySelector('#FooterA').appendChild(r);
    }
    // console.dir(header);
    
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

function setCardContent(theClass){
  let theCells = JSON.parse(localStorage.currentCard);
  theCells.forEach(cell => {
    console.log(cell);
  });
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

function resetGame(theClass){
  localStorage.removeItem('currentCard');
  localStorage.removeItem('currentList');
  console.log('game is now reset.');
  init();
}