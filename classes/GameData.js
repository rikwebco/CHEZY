class GAMEDATA {
    constructor(colHeads, colA, colB, colC, colD, colE){
        this.colHeads = colHeads.split('');
        this.colA = colA;
        this.colB = colB;
        this.colC = colC;
        this.colD = colD;
        this.colE = colE;
        this.hopper = [...this.colA, ...this.colB, ...this.colC, ...this.colD, ...this.colE];   
    }
    callList(){
        return this.shuffled(this.hopper);
    }

    fivePacks(){
        let packstock = [this.colA, this.colB, this.colC, this.colD, this.colE];
        let filepacks = [];
        packstock.forEach(pack=>{
            let tmp = this.shuffled(pack);
            filepacks.push(tmp.slice(0,5));
        });
        return filepacks;
    }
    shuffled(arr){
        if(Array.isArray(arr)){
            let shuffled = arr;
            let i = shuffled.length;
            let j;
            let temp;
            while(--i > 0){
                j = Math.floor(Math.random() * (i));
                temp = shuffled[j];
                shuffled[j] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled;
        }else{
            alert('An array is required for proper function.');
        }
    }

    
}