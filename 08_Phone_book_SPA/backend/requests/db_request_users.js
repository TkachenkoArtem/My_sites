/*подключения:*/
import mongoose from 'mongoose';

import '../db/users';


/*запись ссылок на класс:*/
const user = mongoose.model('user');

/*подключение*/
export function connection() {
  mongoose.createConnection(`mongodb://localhost/users`);
}

/*полуение из db данных*/
export function allUsers() {
  return user.find();
}

/*для записи в db*/
export function createNewUser (data) {
  const userDB = new user({
    login: data.login,
    password: data.password
  }); //создаем ссылку из полученных данных
  return userDB.save(); //сохраняем новую ссылку
}
