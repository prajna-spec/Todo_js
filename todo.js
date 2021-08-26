var listarr =[];
 var count = 0;
 var bool = false;
 var poplist = document.getElementById("popup-container");
  var container = document.getElementById("main-container");
  
var popup = function (){
  poplist.style.display = "block";
  container.classList.add("blur");
}
var closelist = function(){
    poplist.style.display = "none";
  container.classList.remove("blur");

}


var addvalue = ()=>{
  var inputBox = document.getElementById("inputbox").value;
  var uid = Date.now();
   count++;
   if(inputBox != ""){
     const create_new_element = document.createElement("div");
     create_new_element.innerHTML =` <div class="todo-list-container todomobile" id="${Date.now()}">
     <p class="inner-text-1" onclick="opentodo(this)" id="Innertext">${inputBox}</p>
     <div class="inner-container">
     <hr class="horizontal-line">
     <div>
     <span> <i class="fa fa-plus-circle addlist" onclick="addsubtodo(this)" id="add-item-icon style="font-size:36px"></i></span>
     <span><i class="fas fa-trash-alt delicon" onclick="deleteitem(this)" id="del-icon" style=font-size:"36px"></i></span>
     
     </div>
     <div id="subtodo-list-container"></div>
     </div> `;
     
     var adddiv = document.querySelector("#div-add")
     adddiv.appendChild(create_new_element);
     checknoitemdiv();
   }
   else{
     addvalue();
   }

    
     console.log(listarr)
     poplist.style.display = "none";
     container.classList.remove("blur");
     
     }
  
   
     


var noItem = document.getElementById("div-container")
checknoitemdiv = ()=>{
  if(count == 0){
    noItem.style.display = "block";
  }
  else{
    noItem.style.display = "none";
  }
}

function deleteitem(currentelement){
//  var currentelement = document.getElementById("del-icon");
var currentdiv = currentelement.parentNode.parentElement.parentElement.parentElement;

 var currentid = currentdiv.getAttribute("id")
 var currentTodo = document.getElementById(currentid);
 currentTodo.remove()
 count--;

    checknoitemdiv();
    

}
var currentTodoId;
  function addsubtodo(current) {
    
   var currentelemntid = current.parentElement.parentElement.parentElement.parentElement;
   var currentId = currentelemntid.getAttribute("id")
   document.getElementById("pop-container").style.display = "block";
   container.classList.add("blur");
   document.getElementById("maincontainer2").classList.add("blur")
   var addsublist = document.getElementById("subtodoaddbtn");
   currentTodoId = currentId;
    }
   function addsubtodolist(){
    
        var sublistvalue = document.getElementById("subtodovalue").value;
        
        var innerdiv = document.getElementById(currentTodoId).childNodes[3].childNodes[5];
      if(sublistvalue != ""){
        var newnode = document.createElement('div');
        newnode.innerHTML = `<p class="subtodo-heading" >${sublistvalue}</p>
        <button class="markdown-button" onclick="marklist(this)" id="${Date.now()}">Mark Done</button>
        `
        innerdiv.appendChild(newnode);
        var pop = document.getElementById("pop-container");
      }
      else{
        addsubtodolist();
      }
        pop.style.display = "none";
        container.classList.remove("blur");
        document.getElementById("maincontainer2").classList.remove("blur")
    
    }
function closesubtodo(){
  var pop = document.getElementById("pop-container");
  pop.style.display = "none";
  container.classList.remove("blur");
 
}
function marklist(markedId) {
  var markid = markedId.getAttribute("id")
  var prevelement = document.getElementById(markid).previousElementSibling;
  prevelement.classList.add("markheading")
  document.getElementById(markid).style.display = "none";
  
}
function opentodo(currenthead){
  
  document.getElementById("maincontainer2").style.display = "block";
  document.getElementById("container1").style.display = "none";
  var currentheadId = currenthead.parentNode.getAttribute("id");
  console.log(currentheadId);
  var childnode = document.getElementById("div-add")
  bool = true;
 $(".todo-list-container").removeClass("todomobile");
 
  var n = childnode.children.length;
  for(let i=0;i<n;i++){
    if((childnode.children[i].children[0].getAttribute("id")) != currentheadId){
      document.getElementById(childnode.children[i].children[0].getAttribute("id")).style.display="none";
      
    }
  }
  }

function backbtn(){
   
  document.getElementById("maincontainer2").style.display = "none";
  document.getElementById("container1").style.display = "block";
  childnode = document.getElementById("div-add")
  $(".todo-list-container").addClass("todomobile");
  n = childnode.children.length;
  console.log(n)
  for(let i=0;i<n;i++){
   
      document.getElementById(childnode.children[i].children[0].getAttribute("id")).style.display="block";
 }
}