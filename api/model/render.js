let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//https://mongoosejs.com/docs/schematypes.html
let RenderSchema = new Schema({
    assignment: { type: Schema.Types.ObjectId, ref: 'Assignment' },
    student: String,
    rendu: Boolean,
    note: { type: Number, default: null },
    remarques: { type: String, default: null },
});

const Render = mongoose.model('Render', RenderSchema);
module.exports = Render;