/*jshint esversion: 6 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userDB = new Schema({
  login: { type: String, required: true }, //поле обязательное
  password: { type: String, required: true } //поле обязательное
}); //описываем БД, типы данных тут: http://mongoosejs.com/docs/schematypes.html

const user = mongoose.model('user', userDB); //модель
