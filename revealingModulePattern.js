var todoHelper = (function(name){
	//console.log(name);

	let todos = [];

	let todoList = document.getElementById('todoList');
	let todoTextArea = document.getElementById('todoTextArea');
	let button = document.getElementById('addTodo');

	button.addEventListener('click', addTodo);
	todoList.addEventListener('click', markDone);
	todoList.addEventListener('click', removeTodo);

	function addTodo(newTodo){
		let todoToAdd;
		if(typeof newTodo == 'object' && newTodo.description != null){
			todoToAdd = newTodo;
		}else{
			todoToAdd = {};
			todoToAdd.description = todoTextArea.value;
			todoToAdd.done = false;
		}
		todos.push(todoToAdd);
		renderTodos();
	}

	function markDone(){
		if(event.target.getAttribute('class').indexOf('mark-done') != -1){
			todos[parseInt(event.target.closest('li').getAttribute('data-id'))].done = true;
			renderTodos();
		}
	}

	function removeTodo(index){
		let i;
		if(typeof index == 'number'){
			i = index;
		}else{
			if(index.target.getAttribute('class').indexOf('cross') != -1){
				i = parseInt(index.target.closest('li').getAttribute('data-id'));
			}
		}
		if(typeof i == 'number'){
			todos.splice(i,1);
			renderTodos();
		}
	}

	function renderTodos(){
		todoList.innerHTML = null;
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
			li.appendChild(markDone);

			let cross = document.createElement('span');
			cross.innerText = 'x';
			cross.setAttribute('class','cross');
			li.appendChild(cross);

			todoList.appendChild(li);
		});
	}

	return {
		addTodo,
		removeTodo,
		markDone
	}
})("Sneha");