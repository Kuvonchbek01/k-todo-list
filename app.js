const form = document.querySelector('#todo-form')
const input = document.querySelector('#todo-input')
const tasks = document.querySelector('#tasks')
const h2 = document.querySelector('h2')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const textTodo = input.value.trim()

    if(textTodo){

        const task = document.createElement('div')
        task.classList.add('task')
        tasks.appendChild(task)

        const content = document.createElement('div')
        content.classList.add('content')
        content.innerHTML = textTodo
        task.appendChild(content)


        // Cleaning

        input.value  = '';

        // Buttons

        const buttons = document.createElement('div')
        buttons.classList.add('buttons')
        task.appendChild(buttons)

        // save button
        const save = document.createElement('button');
        save.classList.add('save');
        save.innerHTML = 'Save';
        buttons.appendChild(save);

        //delete button
        const del = document.createElement('button')
        del.classList.add('delete')
        del.innerHTML = 'Delete'
        buttons.appendChild(del)

        const len = document.querySelectorAll('.content')
        h2.innerHTML = `Tasks: ${len.length}`
        

    }else {
        alert("Ups!🤷‍♂️You have to fill the form in order to add your task.");
        input.value = "";
      }
})

document.addEventListener('click', (e) => {

    const item = e.target.parentElement.parentElement

    if(e.target.classList[0] == 'save'){
        item.classList.add('done')
    }

    if(e.target.classList[0] == 'delete'){
        item.remove()
        const len = document.querySelectorAll('.content')
        h2.innerHTML = `Tasks: ${len.length}`
    }
})