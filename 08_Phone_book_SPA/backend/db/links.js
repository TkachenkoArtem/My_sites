/*jshint esversion: 6 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const linksDB = new Schema({
  link: { type: String, required: true }, //поле обязательное
  saved: { type: Date }
}); //описываем БД, типы данных тут: http://mongoosejs.com/docs/schematypes.html

const links = mongoose.model('links', linksDB); //модель
