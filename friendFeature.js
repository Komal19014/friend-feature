let hading = document.querySelector("h5");
let add = document.querySelector("#add");

let click = 0;

add.addEventListener("click" , function(){
    if(click == 0){
        hading.innerHTML = 'Friend';
        hading.style.color = "green" ;
        add.style.backgroundColor = "#dadada";
        add.style.color = "black";
        add.innerHTML = 'Remove friend';

        click = 1;
    }
    else{
        hading.innerHTML = 'Stranger';
        hading.style.color = "red" ;
        add.style.backgroundColor = "cadetblue";
        add.style.color = "white";
        add.innerHTML = 'Add friend';

        click = 0;
    }
})
