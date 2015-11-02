import Backbone from 'Backbone';

let ImageModel = Backbone.Model.extend({

  urlRoot: 'https://www.parse.com/apps/sportsfigures/collections#class/Sports_Figures',

  idAttribute: 'objectId'

});

export default ImageModel;