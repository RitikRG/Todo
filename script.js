const addContainer = document.getElementById("addContainer");
const inputFeild = document.getElementById("inputFeild");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addContainer.addEventListener('submit', (e)=>{e.preventDefault()});

const addTask=()=>{
    let task = inputFeild.value;
    if(task!=""){
        const markup = `
            <div class="task" >
                <div>
                    <input type="radio" class='completeBtn' name="done">
                    <p>${task}</p>
                </div>
                <button><img src="./assets/cross.png" alt=""></button>
            </div>
        `;
        taskList.innerHTML+=markup;
        inputFeild.value='';
    }
    
}

addBtn.addEventListener('click', addTask);


taskList.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName === 'INPUT'){
        e.target.parentElement.classList.toggle('completed');
    }else if(e.target.tagName=== 'IMG'){
        e.target.parentElement.parentElement.remove();
    }
})