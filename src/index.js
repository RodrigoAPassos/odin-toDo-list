let toDo = [];

//task factory
const Task = (project, title, description, dueDate, priority, done) => {
    return {project, title, description, dueDate, priority, done};
}

const newTask = (()=> {
    document.querySelector(".new-task").addEventListener("click", ()=> {

        //task form

    })
})();

/*
toDo.push(Task("Projeto Teste", "Task Teste", "teste", "", 3, false));
const teste2 = Task("Projeto Teste", "Task Teste", "teste", "", 3, false);
const teste3 = Task("Teste", "Task Teste", "teste", "", 3, false);
toDo.push(teste3);

console.log(teste2, toDo, teste3);*/