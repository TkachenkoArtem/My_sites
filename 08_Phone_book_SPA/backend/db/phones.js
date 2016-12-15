/*jshint esversion: 6 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const phoneDB = new Schema({
  name: { type: String, required: true }, //поле обязательное
  phone: { type: Number, required: true }, //поле обязательное
  email: { type: String }
}); //описываем БД, типы данных тут: http://mongoosejs.com/docs/schematypes.html


const phones = mongoose.model('phones', phoneDB); //модель
