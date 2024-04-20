import {tovarsObj} from './tovars.js';
import {cardView} from './1.js';
let cardBlockObjList=[];
tovarsObj.forEach(function(card){
    let newCardBlock=new cardView(card);
    cardBlockObjList.push(newCardBlock);
});
console.log(cardBlockObjList)
document.querySelector("#addData").onclick=function(){
    cardBlockObjList.forEach(function(cardDiv){
        cardDiv.createCardBlock();
    });
}
document.querySelector("#removeData").onclick=function(){
    cardBlockObjList.forEach(function(card){
        card.removeCardBlock();
});
}