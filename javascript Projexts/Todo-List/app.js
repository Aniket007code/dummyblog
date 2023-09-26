const Alltodos = document.getElementById("Alltodos")


const addBtn = document.getElementById("addBtn");
addBtn.addEventListener(
    "click",
    function(){
        // console.log("btn clicked"xtt);
        const text = document.getElementById("inputText").value;
        console.log(text);
        const todo = document.createElement('div')
        todo.classList.add('todos')
        todo.innerHTML = ` <div class="todoDesign">
                           <div>${text}</div>
                           <button onclick="deleteFun()">Delete</button>
                           </div>`
        Alltodos.appendChild(todo)
        
    //     <div class="todoDesign">
    //     <span>ider to aayega</span>
    //     <button>Delete</button>
    // </div>

 
    }
)

function deleteFun(){
    console.log("del fun");
}



