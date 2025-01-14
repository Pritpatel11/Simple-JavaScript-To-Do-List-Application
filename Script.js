var ul = document.getElementById("taskList");
var btn = document.querySelectorAll("button");
var inp = document.querySelector("input");
var li;

var cir = document.querySelector(".cir");

    btn[0].addEventListener("click",function(){
        if(inp.value !== ""){
            li = document.createElement("li");
            li.innerHTML = inp.value.trim();
            ul.appendChild(li);
            inp.value = "";
            var dbtn = document.createElement("button");
            dbtn.innerHTML = "delete";
            dbtn.classList.add("Remove")
            li.appendChild(dbtn)

            dbtn.addEventListener("click",function(elm){
                if (elm.target.classList == "Remove") {
                    elm.target.parentElement.remove();
                } else {
                    alert("No tasks to remove!");
                }
            })
        }
        else{
            alert("input fild are empty!")
        }
    })

