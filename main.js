const adbut=document.querySelector('.adbut');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName)
    {this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";


        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editbut =document.createElement('button');
        editbut.innerHTML = "Edit";
        editbut.classList.add('editbut');


        let rebut =document.createElement('button');
        rebut.innerHTML = "Remove";
        rebut.classList.add('rebut');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editbut);
        itemBox.appendChild(rebut);

        editbut.addEventListener('click' , () => this.edit(input));

        rebut.addEventListener('click', () => this.remove(itemBox));
    }
    edit(input){
       input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
   }

        

    
}
  function check(){
    if(input.value !=""){
        new item(input.value);
        input.value = "";
    }
}
adbut.addEventListener('click', check);
window.addEventListener('keydown',(e) =>{
    if(e.which == 13){
        click();
    }
})