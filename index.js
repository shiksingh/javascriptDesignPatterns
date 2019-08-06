let todos = [];

document.getElementById('addTodo').addEventListener('click',function(){
	//add to the list of todos
	let newTodo = {};
	newTodo.description = document.getElementById('todoTextArea').value;
	newTodo.done = false;
	todos.push(newTodo);

	//render the new todo on the UI
	renderTodo();
});

removeTodo = (index) => {
	todos.splice(index,1);
	renderTodo();
}

renderTodo = () => {
	document.getElementById('todoList').innerHTML = null;
	todos.forEach((todo,index) => {
		let li = document.createElement('li');
		li.innerText = todo.description;
		li.setAttribute('data-id',index);
		if(todo.done){
			li.setAttribute('class','done');
		}

		let markDone = document.createElement('span');
		markDone.innerText = 'Mark Done';
		markDone.setAttribute('class','mark-done');
		markDone.addEventListener('click',markTaskDone.bind(this,li,index));
		li.appendChild(markDone);

		let cross = document.createElement('span');
		cross.innerText = 'x';
		cross.setAttribute('class','cross');
		cross.addEventListener('click',removeTodo.bind(this,index));
		li.appendChild(cross);

		document.getElementById('todoList').appendChild(li);
	});
}

markTaskDone = (elem,index) => {
	todos[index].done = true;
	renderTodo();
}

