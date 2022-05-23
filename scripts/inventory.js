function append(){
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let div  = document.getElementById("all_products");
   
   data.forEach(function(el,index){
    all_products.innerHtml=null;
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    let type = document.createElement("h2");
    type.innerText = el.type;
    let desc = document.createElement("p");
    desc.innerText = el.desc;
    let price = document.createElement("h3");
    price.innerText = el.price;
   
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click",function(){
     remove(index);
    });

    div.append(img,type,desc,price,btn)
    all_products.append(div);

   });
       
     
}

append();




function remove(index){
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let newData = data.filter(function(el,i){

        if(i===index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i!==index;
        }
    });

    localStorage.setItem("products",JSON.stringify(newData));

    append();
    
    window.location.reload();
}
















// function calculate(){
//     let data = JSON.parse(localStorage.getItem("products")) || [];
//     let obj= {};
//     for(var i=0;i<data.length;i++){
//         if(!obj[data[i].price]){
//             obj[data[i].price]=1;

//         }else{
//             obj[data[i].price]++;
//         }
//     }
    
//     for(var key in obj){
//          let show = document.getElementById("navbar");
//          var div = document.createElement("div");

//          var p1 = document.createElement("p");
//          p1.innerText = key+":-";

//          var p2 =document.createElement("p");
//          p2.innerText = obj[key];

//          div.append(p1,p2);
//          show.append(div);
//     }
// }

// calculate();