
var TodoItem = Backbone.Model.extend({
	defaults: {
		isCompleted: false
	},

	urlRoot: "/todos",
	
	validate: function(attrs){
		if (!attrs.title)
			return "Title is required.";
	},

	toggle:function(){
		this.set("completed",!this.get("completed"));
	}
	
});