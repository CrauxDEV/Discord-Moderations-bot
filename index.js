const discord = require("discord.js");
const client = new discord.Client();
const db = require('quick.db');
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

