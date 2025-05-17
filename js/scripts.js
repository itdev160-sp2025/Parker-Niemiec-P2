var todayTasks = [];
var tomorrowTasks = [];

var taskStatus = {
    active: 'active',
    completed: 'completed'
};

function Task (id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElemToday(task){
    var listEl = document.getElementById('today-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);
    taskEl.appendChild(textEl);
    listEl.appendChild(taskEl)
}

function addTaskElemTomorrow(task){
    var listEl = document.getElementById('tomorrow-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);
    taskEl.appendChild(textEl);
    listEl.appendChild(taskEl)
} 

function addTaskToday (event){
    var inputEl = document.getElementById('input-task');
    if(inputEl.value != ""){
        var id = 'item-'+todayTasks.length;

        var task = new Task(id, inputEl.value, taskStatus.active);
        todayTasks.push(task);

        addTaskElemToday(task);

        inputEl.value="";
    }
}

function addTaskTomorrow (event){
    var inputEl = document.getElementById('input-task');
    if(inputEl.value != ""){
        var id = 'item-'+tomorrowTasks.length;

        var task = new Task(id, inputEl.value, taskStatus.active);
        tomorrowTasks.push(task);

        addTaskElemTomorrow(task);

        inputEl.value="";
    }
}

function completeTaskToday (event){
    var taskEl = event.target;
    var id = taskEl.id;

    for(var i = 0; i < todayTasks.length; i++){
        if(todayTasks[i].id === id){
            todayTasks[i].status = taskStatus.completed;
            break;
        }
    }

    taskEl.remove();
    document.getElementById('today-completed').appendChild(taskEl);
}

function completeTaskTomorrow (event){
    var taskEl = event.target;
    var id = taskEl.id;

    for(var i = 0; i < tomorrowTasks.length; i++){
        if(tomorrowTasks[i].id === id){
            tomorrowTasks[i].status = taskStatus.completed;
            break;
        }
    }
    
    taskEl.remove();
    document.getElementById('tomorrow-completed').appendChild(taskEl);
}

function keyPressHandler(event) {
    if(event.keyCode === 13) {
        if (event.shiftKey) {
            document.getElementById('tomorrow-task').click();
        } else {
            document.getElementById('today-task').click();
        }
    } 
}


function init() {
    document.getElementById('today-task').onclick = addTaskToday;
    document.getElementById('today-list').onclick = completeTaskToday;

    document.getElementById('tomorrow-task').onclick = addTaskTomorrow;
    document.getElementById('tomorrow-list').onclick = completeTaskTomorrow;

    document.getElementById('input-task').onkeypress = keyPressHandler;



}

init();