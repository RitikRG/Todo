const inputFeild = document.getElementById("inputFeild");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let taskCount = 0;

const addTask=()=>{
    let task = inputFeild.value;
    if(task!=""){
        taskCount+=1;
        let taskId = 't'+taskCount;
        console.log(task);
        inputFeild.value='';

        // Creating the specific task
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.id=taskId;

        let innerDiv = document.createElement('div');
        

        let completedBtn = document.createElement('input');
        completedBtn.type='checkbox';
        completedBtn.id='c'+taskId;
        innerDiv.appendChild(completedBtn);

        let taskDisplay = document.createElement('p');
        taskDisplay.innerText=task;
        innerDiv.appendChild(taskDisplay);

        taskDiv.appendChild(innerDiv);

        let deleteBtn = document.createElement('button');
        let delIcon = document.createElement('i');
        delIcon.classList.add("fa-solid");
        delIcon.classList.add("fa-xmark");
        deleteBtn.appendChild(delIcon);

        taskDiv.appendChild(deleteBtn);

        taskList.appendChild(taskDiv);
    }
    
}

addBtn.addEventListener('click', addTask);


taskList.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName === 'INPUT'){
        e.target.parentElement.classList.toggle('completed');
    }else if(e.target.tagName=== 'BUTTON'){
        e.target.parentElement.remove();
    }
})