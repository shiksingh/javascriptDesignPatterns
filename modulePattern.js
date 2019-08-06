var todoHelper = {
	todos: [],
	init: function(){
		this.cacheDom();
		this.bindEvents();
	},
	cacheDom: function(){
		this.todoList = document.getElementById('todoList');
		this.todoTextArea = document.getElementById('todoTextArea');
		this.button = document.getElementById('addTodo');
	},
	bindEvents: function(){
		this.button.addEventListener('click',this.addTodo.bind(this));
		this.todoList.addEventListener('click',this.markDone.bind(this));
		this.todoList.addEventListener('click',this.removeTodo.bind(this));
	},
	addTodo: function(){
		let newTodo = {};
		newTodo.description = this.todoTextArea.value;
		newTodo.done = false;
		this.todos.push(newTodo);
		this.renderTodos();
	},
	renderTodos: function(){
		this.todoList.innerHTML = null;
		this.todos.forEach((todo,index) => {
			let li = document.createElement('li');
			li.innerText = todo.description;
			li.setAttribute('data-id',index);
			if(todo.done){
				li.setAttribute('class','done');
			}

			let markDone = document.createElement('span');
			markDone.innerText = 'Mark Done';
			markDone.setAttribute('class','mark-done');
			//markDone.addEventListener('click',markTaskDone.bind(this,li,index));
			li.appendChild(markDone);

			let cross = document.createElement('span');
			cross.innerText = 'x';
			cross.setAttribute('class','cross');
			//cross.addEventListener('click',removeTodo.bind(this,index));
			li.appendChild(cross);

			this.todoList.appendChild(li);
		});
	},
	markDone: function(e){
		if(event.target.getAttribute('class').indexOf('mark-done') != -1){
			this.todos[parseInt(event.target.closest('li').getAttribute('data-id'))].done = true;
			this.renderTodos();
		}
	},
	removeTodo: function(e){
		if(event.target.getAttribute('class').indexOf('cross') != -1){
			this.todos.splice(parseInt(event.target.closest('li').getAttribute('data-id')),1);
			this.renderTodos();
		}
	}
}

todoHelper.init();