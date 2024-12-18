import mongoose from 'mongoose';

const {Schema} = mongoose;

const StormtrooperSchema = new Schema({
    name: String,
    nickname: String,
    divisions: [String],
    patent: {
        type: String,
        enum: ['General', 'Colonel', 'Major', 'Captain', 'Lieutenant', 'Sergeant', 'Soldier']
    }
})

export default StormtrooperSchema;