function agregarParrafo(){
    //1
    let contenedor = document.querySelector("#contenedor");
    //2
    let p = document.createElement("p");
    //3
    p.innerText =  "lorem";
    //4
    contenedor.appendChild(p);
    /*una sola linea
    document.getElementById("#contenedor").innerHTML += "<p>sdbgafgb</p>"*/
}
///////////
function agregarLista(){
    let ul = document.querySelector("ul");
   // let contenedor = document.querySelectorAll("ul")[0];
    let producto = prompt("producto");
    let producto2 = prompt("producto");
    let  item1 = document.createElement("li");
    let  item2 = document.createElement("li");
    item1.innerText =  producto;
    item2.innerHTML=  producto2;
    ul.appendChild(item1);
    ul.appendChild(item2);
}
///////////
function creaConEstilo(){
    let div = document.createElement('div');
    div.innerHTML="andres molina";
    div.style.color="red";
    div.style.fontSize="300px";
   // div.style="font-weight:bold,font...."
   document.body.append(div);

}