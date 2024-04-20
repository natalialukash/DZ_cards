'use strict'
export class cardView {
    constructor(card){
        this.oneCard=card;
    }
    createCardBlock(){
        let div=document.createElement('div');
        div.setAttribute('class', 'cards-block')
        let img=document.createElement('img');
        img.setAttribute("src",`img/${this.oneCard.imgSrc}`)
        let h5=document.createElement("h5");
        h5.innerHTML=`${this.oneCard.nameTovar}`;
        let p1=document.createElement("p");
        p1.innerHTML=`<br>Корпус: ${this.oneCard.corpus}
        <br>Ремешок: ${this.oneCard.remen}
        <br>Размер дисплея: ${this.oneCard.displaySize}
        <br>Тип дисплея: ${this.oneCard.displayType}`
        let p2=document.createElement("p")
        //нужно ли упаковать в функцию или во что?
        if (this.oneCard.bluetooth==true) p2="Блютуз: есть";
        else p2="Блютуз: нет";
        let p3=document.createElement("p")
        p3.innerHTML=`Операционные системы: ${this.oneCard.OS.os1}, ${this.oneCard.OS.os2}`
        document.querySelector(".container").append(div);
        div.append(img);
        div.append(h5);
        div.append(p1);
        div.append(p2);
        div.append(p3);
}
    removeCardBlock(){
        let div=document.querySelector(".cards-block");
        div.remove();
    }
}