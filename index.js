let CARD = document.getElementById('card');

_CHEZY.colHeads.forEach(ltr =>{
    let headerbox = document.createElement('div');
    headerbox.className ="header-box";
    headerbox.id = ltr;
    headerbox.innerText = ltr;

    _CHEZY.fivePacks().forEach(pack => {
        let cheesebox = document.createElement('div');
        cheesebox.classList.add('cheese-box', `col-${ltr}`);
        cheesebox.id=pack;
        cheesebox.innerText = pack;
        headerbox.appendChild(cheesebox);
    });

    CARD.appendChild(headerbox);

    
});