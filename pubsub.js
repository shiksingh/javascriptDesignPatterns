var pubsub = {
	events: {},
	publish: function(eventName){
		if(this.events[eventName] && this.events[eventName].length > 0){
			this.events[eventName].forEach((eventHandler,index) => {
				eventHandler();
			})
		}
	},
	subscribe: function(eventName,fn){
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fn);
	},
	unsubscribe: function(eventName,fn){
		if(this.events[eventName] && this.events[eventName].length > 0){
			this.events[eventName].forEach(function(eventHandler,index){
				if(this.eventHandler == fn){
					this.events[eventName].splice(index,1);
				}
			});
		}
	}
}