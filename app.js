let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector(".ul");

btn.addEventListener('click',function() {
    let value = "- "+inp.value.trim();
    if (value!== "- ") {
        let item = document.createElement("p");
        let delbtn = document.createElement("button");
        let div=document.createElement("div");
        delbtn.className = "delbtn";
        delbtn.innerHTML = "X";
        item.innerHTML = value;
        div.appendChild(item);
        item.appendChild(delbtn);
        ul.appendChild(div);
        inp.value = "";
        ul.scrollTop = ul.scrollHeight;
    }
});

inp.addEventListener("keypress",function(event){
    if (event.keyCode === 13) {
        btn.click();
    }
});

ul.addEventListener('click',function(event){
    if(event.target.tagName=="BUTTON") {
        let itm=event.target.parentElement;
        itm.remove();
    }
});