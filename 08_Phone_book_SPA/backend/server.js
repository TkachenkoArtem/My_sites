/*jshint esversion: 6 */

import express from 'express';

const app = express(); //инициализация экспресс

app.get('/', (req, res) => {
  res.send('GET request to homepage');
}); //Routes HTTP GET requests to the specified path with the specified callback functions. request - в нем все, что пришло с URL, в response ответ на запрос

const server = app.listen(8888, () => {
  console.info(`Server started on port 8888!`);
}); //Starts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen().
