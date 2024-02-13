



//main div

export function Add_todo(text){
  
  let li_form = ElementCreater("li" , ["li-dynamic-item-holder"]) 

  //main div
  let main_div = ElementCreater("div" ,["item-holder"] )

  todotxt = ElementCreater("p" , ["todo-context-p"])
  todotxt.innerHTML = text;
  

  let todo_checkox = ElementCreater("input" , ["floatleft", "todo-context-checkbox"])
  
  todo_checkox.setAttribute("type" , "checkbox")
  
  




  let inner_div = ElementCreater("div" , [])
  let inner_div2 = ElementCreater("div" , [])
  


  let btn_td = ElementCreater("button" , ["no-style-textbox"])

  let three_dots = ElementCreater("i" , ["bi" , "bi-three-dots" , "three-dots-todo-context"])
  
  



  let ul= ElementCreater("ul",["dynamic-todo-pop" , "popovers"])
  
  let li1 = ElementCreater("li",["popover-item"])
  let li2 = ElementCreater("li",["popover-item"])
  let li3 = ElementCreater("li",["popover-item"])

  li1.innerHTML = "Delete"
  li2.innerHTML = "Move to today"
  li3.innerHTML = "Edit"

  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)


  li_form.appendChild(main_div)


  inner_div.appendChild(todo_checkox)
  btn_td.appendChild(three_dots)
  inner_div2.appendChild(btn_td)
  inner_div2.appendChild(ul)
  main_div.appendChild(inner_div)

  main_div.appendChild(inner_div)
  main_div.appendChild(todotxt)
  main_div.appendChild(inner_div2)


  


  return li_form;

}




let todotxt , todo_checkox,three_dots,main_div ;

function aaa(){
  console.log("Here is aa fom the other file")
}


function ElementCreater(element_name,items ){
  let created_element = document.createElement(element_name)
  for( var i=0 ; i<items.length ; i++){
    created_element.classList= items[i]
  }
  return created_element;
}

function Event_Adder(){
  // if(todo_checkox!=null){
    todo_checkox.addEventListener("change", ()=>{
      if(this.checked){
        todotxt.style.textDecoration = "line-through";
      }else{
        todotxt.style.textDecoration = "";
      }
      
    })
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        console.log("Checkbox is checked..");
      } else {
        console.log("Checkbox is not checked..");
      }
    });
  // }
  
}

  
// main_div.addEventListener("onmouseover", (e)=>{
//   three_dots.style.visibility="visible"
// })
// main_div.addEventListener("onmouseleave", (e)=>{
//   three_dots.style.visibility="hidden"
// })






function todo_context_mouseover(){
  three_dots.style.visibility="visible"
}
  
function todo_context_mouseleave(){
  three_dots.style.visibility="hidden"
}



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















