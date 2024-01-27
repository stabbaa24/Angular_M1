let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

//https://mongoosejs.com/docs/schematypes.html
let AssignmentSchema = new Schema({
    id: Number,
    nom: String,
    dateDeRendu: Date,
    //rendu: Boolean,
    rendu: { type: Number, default: 0 },
    
    auteur: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    matiere: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    groupe: String,
    promo: String
});

AssignmentSchema.plugin(aggregatePaginate);

const Assignment = mongoose.model('Assignment', AssignmentSchema);
module.exports = Assignment;