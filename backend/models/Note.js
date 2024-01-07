const mongoose =require('mongoose')

const NoteSchema =new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        default:"general"
    },
    dete:{
        type:date,
        default:Date.now
    }
});

module.exports =mongoose.model('notes',NoteSchema);