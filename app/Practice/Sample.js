var todo = Backbone.model.extend({
    defaults: {
        title: '',
        completed: false
    },
    initialize: function() {

    }
});
var todo = new todo();