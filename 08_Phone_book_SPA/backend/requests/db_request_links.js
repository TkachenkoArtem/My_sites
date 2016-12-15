/*подключения:*/
import mongoose from 'mongoose';

import '../db/links';

/*запись ссылок на класс:*/
const links = mongoose.model('links');

/*подключение*/
export function connection() {
  mongoose.createConnection(`mongodb://localhost/links`);
}

/*полуение из db данных*/
export function allLinks() {
  return links.find();
}

/*для записи в db*/
export function createNewLink(data) {
  const linksDB = new links({
    link: data.link,
    saved: new Date()
  }); //создаем ссылку из полученных данных
  return linksDB.save(); //сохраняем новую ссылку
}

/*удаление из db*/
export function deleteLink(id) {
  return links.findById(id).remove();
}
