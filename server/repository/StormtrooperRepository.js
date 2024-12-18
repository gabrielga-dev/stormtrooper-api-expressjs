import mongoose from '../config/mongoose.js';
import schema from '../schema/StormtrooperSchema.js';

const model = mongoose.model('stormtrooper', schema);


const StormtrooperRepository = {
    list(q, page = 1) {
        const query = {}
        const DEFAULT_LIMIT = 3
        if (q) query.name = new RegExp(q, 'i');
        const skip = Math.abs(page - 1) * DEFAULT_LIMIT;
        return model.find(query)
            .skip(skip)
            .limit(DEFAULT_LIMIT)

        // with mongoist
        // return db.stormtroopers.find(query, {}, {skip, limit: DEFAULT_LIMIT});
    },
    byId(id) {
        return model.findOne({_id: id})

        // with mongoist
        // return db.stormtroopers.findOne({_id: new ObjectId(id)})
    },
    create(data) {
        const trooper = new model(data);
        return trooper.save();
        // with mongoist
        // return db.stormtroopers.insert(data)
    },
    update(data, id) {
        return model.updateOne({_id: id}, data);

        // with mongoist
        // return db.stormtroopers.update({_id: new ObjectId(id)}, {$set: data})
    },
    delete(id) {
        return model.deleteOne({_id: id})

        // with mongoist
        // return db.stormtroopers.remove({_id: new ObjectId(id)})
    }
}

export default StormtrooperRepository;