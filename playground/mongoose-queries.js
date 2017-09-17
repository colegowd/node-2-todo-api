const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59bdca6e687fe58022fdaf22';
var id2 = '59b88d327f2fb55c0fcb3bff';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id2).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user,undefined, 2));
}).catch((e) => console.log(e));
