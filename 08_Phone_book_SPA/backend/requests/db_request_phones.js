/*подключения:*/
import mongoose from 'mongoose';

import '../db/phones';

/*запись ссылок на класс:*/
const phones = mongoose.model('phones');

/*подключение*/
export function connection() {
  mongoose.createConnection(`mongodb://localhost/phones`);
}

/*полуение из db данных*/
export function allPhone() {
  return phones.find();
}

/*для записи в db*/
export function createNewPhone(data) {
  const phoneDB = new phones({
    name: data.name,
    phone: data.phone,
    email: data.email,
  }); //создаем ссылку из полученных данных
  return phoneDB.save(); //сохраняем новую ссылку
}

/*удаление из db*/
export function deletePhone(id) {
  return phones.findById(id).remove();
}
