/*jshint esversion: 6 */

import express from 'express';
import bodyParser from 'body-parser'; //для удобной работы с json`ом
import * as dbLinks from './requests/db_request_links'; //импорт всего, что нужно для работы с db
import * as dbPhones from './requests/db_request_phones'; //импорт всего, что нужно для работы с db
import * as dbUsers from './requests/db_request_users'; //импорт всего, что нужно для работы с db


/*подключаем базы данных*/
dbLinks.connection();
dbPhones.connection();
dbUsers.connection();

const app = express(); //инициализация экспресс
app.use(bodyParser.json());

/*получаем все данные*/
//http://expressjs.com/en/4x/api.html#app.get.method
app.get('/links', (req, res) => {
  dbLinks.allLinks().then(data => res.send(data));
}); //request - в нем все, что пришло с URL, в response ответ на запрос
app.get('/phone', (req, res) => {
  dbPhones.allPhone().then(data => res.send(data));
});


/*создаем новые данные*/
//http://expressjs.com/en/4x/api.html#app.post.method
app.post('/links', (req, res) => {
  dbLinks.createNewlink(req.body).then(data => res.send(data));
}); //request - в нем все, что пришло с URL, в response ответ на запрос
app.post('/phone', (req, res) => {
  dbPhones.createNewPhone(req.body).then(data => res.send(data));
});
app.post('/users', (req, res) => {
  dbUsers.createNewUser(req.body).then(data => res.send(data));
});

/*удаляем данные*/
//http://expressjs.com/en/4x/api.html#app.delete.method
app.delete('/links/:id', (req, res) => {
  dbLinks.deleteLink(req.params.id).then(data => res.send(data));
}); //request - в нем все, что пришло с URL, в response ответ на запрос
app.delete('/phone/:id', (req, res) => {
  dbPhones.deletePhone(req.params.id).then(data => res.send(data));
});

const server = app.listen(8888, () => {
  console.info(`Server started on port 8888!`);
}); //Starts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen().
