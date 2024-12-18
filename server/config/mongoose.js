import debug from 'debug';
import mongoose from 'mongoose';
import config from 'config';

const log = debug('livro-nodejs:config:mongoose');
mongoose.connect(config.get('mongo.uri'), {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', (err) => log('mongodb error:', err));

export default mongoose;
