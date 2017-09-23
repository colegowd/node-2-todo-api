const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '59c472536956e4b63024764e'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('59c472536956e4b63024764e').then((todo) => {
  console.log(todo);
});
