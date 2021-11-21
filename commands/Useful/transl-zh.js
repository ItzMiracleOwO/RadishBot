const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('transl-zh')
    .setDescription('要求機器人翻譯指定內容至中文')
    .addStringOption(option => option
        .setName('content')
        .setDescription('要翻譯的內容')
        .setRequired(true));

module.exports = { data };