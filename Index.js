
import {Add_todo} from "./tc.js";

//const aaa = require( "./tc.js");
let toggle= 0;


function setClock() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let hh = hour>=10 ? hour:"0" + hour;
    let mm = min>=10 ? min:"0" + min;
    
    document.getElementById("clock-num").innerText = hh +":"+ mm
    let t = setTimeout(function(){setClock()} , 1000)

}


setClock();
////////////////////////////////document.getElementById("Clock").innerText = "aaa";
feather.replace()
let ip_address;





function ss(){
  hideSearch();




}

function open_todo_pop(){
  


}
let owner_hover = document.getElementById("all-todos-presenter");
let target_hover = document.getElementById("todo-popover-tl-arrow");

//.style.backgroundColor = '' ; .style.backgroundColor = 'green' ;

owner_hover.addEventListener("mouseover" , ()=>
target_hover.style.backgroundColor = 'red' 
)
owner_hover.addEventListener("mouseout" , ()=>
target_hover.style.backgroundColor = '' 
)



// JSON.parse(ip_address)
function unhideSearch(){
  //console.log("Fuck");
  //document.getElementById("hover_visible").style.backgroundColor= 'green';
  let show_Items = document.getElementsByClassName('hover_visible');
  
  for (let item of show_Items) {
    item.style.visibility="visible";
  }
}
function hideSearch() {
  if(document.activeElement != document.getElementById("search_TxtBox"))
  {
    Items_Collection = document.getElementsByClassName("hover_visible");
    for(let item of Items_Collection) {
      item.style.visibility = "hidden";
    }
  }
  
  




}

fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=9b7ab5991fc147a08b127b9807a75879&ip=${ip_address}&lang=en`)
  .then(response => response.json())
  .then(data => {
    // You can now access the location data in the "data" object
    console.log(data);
  })

//-----------------todo---------

let object = {
	text : "",
  istoday : false,
  isDone : false
};

var todo_list= [];







//const enterEvent = new KeyboardEvent('keydown',{key:'Enter' , code :'Enter', which:13 , keycode:13});

let todo_txt = document.getElementById("todo-txt-newTodo");

todo_txt.addEventListener('keypress' , function(event){
  if(event.key == "Enter"){
    event.preventDefault();
    if(todo_txt.value!=null){
      //let modular_element = document.createElement(Add_todo(todo_txt.value));

      document.getElementById("ul-dynamic-itemholder").appendChild(Add_todo(todo_txt.value));
      todo_txt.value = null;
      hide_todo_main();
      


    }
    
  }
})




// function insert_todo(text){
//   fetch('./todo-component/tc.html')
//   .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.text();
// })
// .then(componentHtml => {
//   console.log('Successfully fetched component HTML:', componentHtml);
//   componentHtml.
//   document.getElementById('aa').innerHTML = componentHtml;
//   document.get
// });
// }




const all_todos = document.getElementById("all-todos");


function todo_tl_cick(){
  if(toggle == 0 ){
    toggle =1 ;
    all_todos.style.visibility= "visible";
  }
  else{
    toggle =0 ;
    all_todos.style.visibility= "hidden";
  }
  
}

document.addEventListener('click' , e =>{

  if(!document.getElementById("all-todos-presenter").contains(e.target))
  {
    
    all_todos.style.visibility= "hidden";
    toggle =0 ;
    
  }
  //all_todos.style.visibility= "hidden";

  
})


function hide_todo_main(){
  let todo_main_items = document.getElementsByClassName("todo-main-item");
  if(todo_main_items!=null){
    for(let i= 0 ; i<todo_main_items.length ; i++){
    
      todo_main_items[i].style.display = "none";
    }
  }
  
  
  
  
  
  
}

//--------------------------------------------TC------------------------------------


// todo_checkox = document.getElementById("todo-check");
// let todotxt = document.getElementById("todo-txt");

// function todo_context_mouseover(){
//     document.getElementById("todo-three-dots").style.visibility="visible"
//   }
  
//   function todo_context_mouseleave(){
//     document.getElementById("todo-three-dots").style.visibility="hidden"
//   }



// todo_checkox.addEventListener("click", (e)=>{
//   if(e.currentTarget.checked){
//     todotxt.style.color = "#515151";
//     todotxt.style.textDecoration = "line-through";

//   }
//   else{
//     todotxt.style.textDecoration = "";
//     todotxt.style.color = "#000000";
//   }
// })

//--------------------------------------------TC------------------------------------




function simplealert(){
  alert('aaaa');
}



//   function getLocation() {
//     console.log("ff")
//     if (navigator.geolocation) {
//         console.log(navigator.geolocation.getCurrentPosition("Latitude: " + position.coords.latitude + 
//         "<br>Longitude: " + position.coords.longitude));
//     } else { 
//         console.log("Geolocation is not supported by this browser.");
//     }
//   }
//   getLocation(); 


//----------------------------------- Settings ----------------------------

let btn_setting = document.getElementById("btn-setting-wheel")

btn_setting.addEventListener("click" ,()=>{
  
  let setting_popover = document.getElementsByClassName("setting-popover")
  for(let item of setting_popover){
    if(item.style.visibility==="visible"){
      item.style.visibility = "hidden";
      item.style.opacity = "0"
    }else{
      item.style.visibility = "visible";
      item.style.opacity = "0.9"
    }
    
  }

})








const setting_buttons = document.getElementsByClassName("setting-checkbox");
        for(let btn of setting_buttons){
            btn.addEventListener("click", clickedtn)
        }
        function clickedtn(e){
            if(e.target.tagName == "P"){
                callme(e.target.parentElement.childNodes[3].childNodes[1]);
            }
            else if(e.target.tagName == "BUTTON"){
                callme(e.target.childNodes[3].childNodes[1]);
            }
        }
        function callme(checkox){
            
            if(checkox.checked == true)
                checkox.checked = false;
            else
                checkox.checked = true;
        }