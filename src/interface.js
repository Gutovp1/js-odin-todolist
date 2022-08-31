import application from "./app";
import Project from "./project";

const taskContainer = document.querySelector(".task-section");
const ulTasks = document.querySelector(".ul-container");
const projectContainer = document.querySelector(".project-section");
const btnNewProject = document.querySelector(".new-project");
const listOfProjects = document.querySelector(".list-projects");
const projectTitleCurrent = document.querySelector(".project-title-dash");
const btnNewTask = document.querySelector(".new-task");

let newarr = [];

const updateTasksList = (array) => {
  ulTasks.innerHTML = ""; //clear the list beforehand
  console.log(array);
  array.forEach((obj, index) => {
    let li = document.createElement("li");
    li.innerText = obj.title;
    li.setAttribute("data-key", obj.id);
    // li.setAttribute('data-key', index);
    // console.log('ID do objeto= ' +obj.id);

    const btnDeleteTask = document.createElement("button");
    btnDeleteTask.classList.add("btn-delete-task");
    btnDeleteTask.textContent = "X";
    btnDeleteTask.onclick = (e) => {
      console.log(
        array.findIndex(
          (task) => task.id == Number(e.target.parentElement.dataset.key)
        )
      );
      console.log(
        "ParentElementID: " + Number(e.target.parentElement.dataset.key)
      );
      console.log(obj.id);
      // let aux = array.findIndex ((task) => task.id == Number(e.target.parentElement.dataset.key));
      array = array.filter(
        (task) => task.id !== Number(e.target.parentElement.dataset.key)
      );
      console.log(array);
      btnDeleteTask.parentElement.outerHTML = "";
    };
    // btnDeleteTask.classList.add('hidden');});
    li.append(btnDeleteTask);
    ulTasks.append(li);
  });
  // ulTasks.addEventListener('click',e =>{
  //     if(e.target.classList.contains('btn-delete-task')){
  //         let auxInd = array.findIndex( (item) => { return item.id == Number(e.target.parentElement.dataset.key)});
  //         console.log(auxInd);
  //         console.log(array[auxInd]);
  //         newarr= array.splice(auxInd,1);
  //          console.log(newarr);
  //         e.target.parentElement.remove();
  //         array = newarr;
  //     }
  // });

  // const find2delete = function(index, obj1){
};

btnNewProject.onclick = createFormProject;

function createFormProject() {
  btnNewProject.classList.toggle("hidden");
  const formProject = document.createElement("form");
  formProject.innerHTML = `
    <input type="text" id="project-input" placeholder="Project Name" name="name">
    <button class="btn-project" id="cancel-project">Cancel</button>
    <button class="btn-project" id="add-project">Add</button>
    `;
  projectContainer.insertBefore(formProject, listOfProjects);

  let btnAddProject = document.getElementById("add-project");
  const projectName = document.getElementById("project-input");

  btnAddProject.addEventListener("click", (e) => {
    e.preventDefault();
    let prima = new Project(projectName.value);
    projectTitleCurrent.textContent = projectName.value;
    taskContainer.insertBefore(projectTitleCurrent, btnNewTask);
    // taskContainer.appendChild(projectTitleCurrent);
    console.log(prima.getName());
    formProject.remove();
    btnNewProject.classList.toggle("hidden");
  });

  let btnCancel = document.getElementById("cancel-project");
  btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    formProject.remove();
    btnNewProject.classList.toggle("hidden");
  });
}

const createNewProject = function () {
  createFormProject();
  listProject();
};

export { createNewProject, updateTasksList };
