import Backbone from 'backbone';
import TodoModel from './todo_model';

let TodosCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/Todo',

  model: TodoModel,

  parse: function(data) {
    return data.results;
  }

});

export default TodosCollection;