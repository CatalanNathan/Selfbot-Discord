/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all helps commands, for commands explications
*/

import BetterMarkdown from 'discord-bettermarkdown'

import dotenv from 'dotenv'
dotenv.config()

async function helpNormal (client, message, process) {
  if (message.content === `${process.env.PREFIX_NORMAL}help`) {
    const markdownHelpGeneral = new BetterMarkdown()

    await message.delete()

    markdownHelpGeneral.format('โจ ๐๐๐ ๐๐๐ง๐๐๐ข๐ฅ๐๐๐ฆ ๐๐ก๐ ๐ฃ๐ฅ๐๐๐๐ซ๐ฆ โจ\n', 'UNDERLINE', 'YELLOW', 'DARKBLUE', true)

    markdownHelpGeneral.format('๐ ยท [', 'BOLD', 'CYAN', null, false)
    markdownHelpGeneral.format(`${process.env.PREFIX_NORMAL}`, 'BOLD', 'PINK', null, false)
    markdownHelpGeneral.format(']๐๐๐ก๐ฅ : ๐๐๐จ๐ฅ๐ก๐๐ฎ๐จ ๐ฉ๐๐ ๐ฅ๐ง๐๐๐๐ญ๐๐จ9\n', 'BOLD', 'CYAN', null, true)

    markdownHelpGeneral.format('๐ฐ ยท [', 'BOLD', 'GRAY', null, false)
    markdownHelpGeneral.format(`${process.env.PREFIX_CRYPTO}`, 'BOLD', 'PINK', null, false)
    markdownHelpGeneral.format(']๐๐๐ก๐ฅ | ๐๐ง๐ฎ๐ฅ๐ฉ๐ค\n', 'BOLD', 'GRAY', null, true)

    markdownHelpGeneral.format('๐ค ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpGeneral.format(`${process.env.PREFIX_FUN}`, 'BOLD', 'PINK', null, false)
    markdownHelpGeneral.format(']๐๐๐ก๐ฅ | ๐๐ช๐ฃ\n', 'BOLD', 'BLUE', null, true)

    markdownHelpGeneral.format('๐จโ๐ป ยท [', 'BOLD', 'GREEN', null, false)
    markdownHelpGeneral.format(`${process.env.PREFIX_HACKER}`, 'BOLD', 'PINK', null, false)
    markdownHelpGeneral.format(']๐๐๐ก๐ฅ | ๐๐๐๐ ๐๐ง\n', 'BOLD', 'GREEN', null, true)

    markdownHelpGeneral.format('๐ ยท [', 'BOLD', 'RED', null, false)
    markdownHelpGeneral.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpGeneral.format(']๐๐๐ก๐ฅ | ๐๐ข๐ค๐ฉ๐๐จ\n', 'BOLD', 'RED', null, true)

    markdownHelpGeneral.format('๐ฌ ยท [', 'BOLD', 'WHITE', null, false)
    markdownHelpGeneral.format(`${process.env.PREFIX_PERSO}`, 'BOLD', 'PINK', null, false)
    markdownHelpGeneral.format(']๐๐๐ก๐ฅ | ๐ฅ๐๐ง๐จ๐ค\n', 'BOLD', 'WHITE', null, true)

    markdownHelpGeneral.format('โ ยท [', 'BOLD', 'YELLOW', null, false)
    markdownHelpGeneral.format(`${process.env.PREFIX_INFOS}`, 'BOLD', 'PINK', null, false)
    markdownHelpGeneral.format(']๐๐๐ก๐ฅ | ๐๐ฃ๐๐ค๐จ\n', 'BOLD', 'YELLOW', null, false)

    message.channel.send(markdownHelpGeneral.toCodeblock())
  }
}

async function helpCrypto (client, message, process) {
  if (message.content === `${process.env.PREFIX_CRYPTO}help`) {
    const markdownHelpCrypto = new BetterMarkdown()

    await message.delete()

    markdownHelpCrypto.format('"๐ซ ๐๐๐ ๐๐ข๐ ๐ ๐๐ก๐๐ฆ ๐๐ฅ๐ฌ๐ฃ๐ง๐ข๐ฆ ๐ซ\n', 'UNDERLINE', 'YELLOW', 'DARKBLUE', true)

    markdownHelpCrypto.format('๐ช ยท [', 'BOLD', 'CYAN', null, false)
    markdownHelpCrypto.format(`${process.env.PREFIX_CRYPTO}`, 'BOLD', 'PINK', null, false)
    markdownHelpCrypto.format(']๐๐ง๐ฎ๐ฅ๐ฉ๐ค ๐๐ฉ๐ : ๐๐๐ซ๐ ๐ฉ๐๐ ๐ฅ๐ง๐๐๐ ๐ค๐ ๐ฝ๐ฉ๐', 'BOLD', 'CYAN', null, true)

    markdownHelpCrypto.format('๐ด ยท [', 'BOLD', 'RED', null, false)
    markdownHelpCrypto.format(`${process.env.PREFIX_CRYPTO}`, 'BOLD', 'PINK', null, false)
    markdownHelpCrypto.format(']๐๐ง๐ฎ๐ฅ๐ฉ๐ค ๐๐ฉ๐ : ๐๐๐ซ๐ ๐ฉ๐๐ ๐ฅ๐ง๐๐๐ ๐ค๐ ๐๐ฉ๐', 'BOLD', 'RED', null, true)

    markdownHelpCrypto.format('๐ต ยท [', 'BOLD', 'GRAY', null, false)
    markdownHelpCrypto.format(`${process.env.PREFIX_CRYPTO}`, 'BOLD', 'PINK', null, false)
    markdownHelpCrypto.format(']๐๐ง๐ฎ๐ฅ๐ฉ๐ค ๐ก๐ฉ๐ : ๐๐๐ซ๐ ๐ฉ๐๐ ๐ฅ๐ง๐๐๐ ๐ค๐ ๐๐ฉ๐', 'BOLD', 'GRAY', null, true)

    markdownHelpCrypto.format('๐ถ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpCrypto.format(`${process.env.PREFIX_CRYPTO}`, 'BOLD', 'PINK', null, false)
    markdownHelpCrypto.format(']๐๐ง๐ฎ๐ฅ๐ฉ๐ค ๐ญ๐ง๐ฅ : ๐๐๐ซ๐ ๐ฉ๐๐ ๐ฅ๐ง๐๐๐ ๐ค๐ ๐๐ง๐ฅ', 'BOLD', 'BLUE', null, true)

    markdownHelpCrypto.format('๐ท ยท [', 'BOLD', 'GREEN', null, false)
    markdownHelpCrypto.format(`${process.env.PREFIX_CRYPTO}`, 'BOLD', 'PINK', null, false)
    markdownHelpCrypto.format(']๐๐ง๐ฎ๐ฅ๐ฉ๐ค ๐๐๐ : ๐๐๐ซ๐ ๐ฉ๐๐ ๐ฅ๐ง๐๐๐ ๐ค๐ ๐ผ๐๐', 'BOLD', 'GREEN', null, true)

    message.channel.send(markdownHelpCrypto.toCodeblock())
  }
}

async function helpFun (client, message, process) {
  if (message.content === `${process.env.PREFIX_FUN}help`) {
    const markdownHelpFun = new BetterMarkdown()

    await message.delete()

    markdownHelpFun.format('๐ค ๐๐๐ ๐๐ข๐ ๐ ๐๐ก๐๐ฆ ๐๐จ๐ก๐ฆ ๐ค\n', 'UNDERLINE', 'YELLOW', 'DARKBLUE', true)

    markdownHelpFun.format('๐ ยท [', 'BOLD', 'CYAN', null, false)
    markdownHelpFun.format(`${process.env.PREFIX_FUN}`, 'BOLD', 'PINK', null, false)
    markdownHelpFun.format(']๐ฅ๐๐ฃ๐ : ๐๐๐๐๐  ๐ก๐๐ฉ๐๐ฃ๐๐ฎ', 'BOLD', 'CYAN', null, true)

    markdownHelpFun.format('๐ธ ยท [', 'BOLD', 'RED', null, false)
    markdownHelpFun.format(`${process.env.PREFIX_FUN}`, 'BOLD', 'PINK', null, false)
    markdownHelpFun.format(']๐ฅ๐๐ <๐ข๐๐ฃ๐ฉ๐๐ค๐ฃ> : ๐จ๐๐ฃ๐ ๐ฉ๐๐ ๐ฅ๐ง๐ค๐๐๐ก๐ ๐ฅ๐๐ฉ๐๐ช๐ง๐ ๐ค๐ ๐ฉ๐๐ ๐ช๐จ๐๐ง ๐ข๐๐ฃ๐ฉ๐๐ค๐ฃ๐๐', 'BOLD', 'RED', null, true)

    markdownHelpFun.format('๐บ ยท [', 'BOLD', 'GRAY', null, false)
    markdownHelpFun.format(`${process.env.PREFIX_FUN}`, 'BOLD', 'PINK', null, false)
    markdownHelpFun.format(']๐๐๐ฉ : ๐จ๐๐ฃ๐ ๐ ๐ง๐๐ฃ๐๐ค๐ข ๐๐๐ฉ', 'BOLD', 'GRAY', null, true)

    markdownHelpFun.format('๐ถ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpFun.format(`${process.env.PREFIX_FUN}`, 'BOLD', 'PINK', null, false)
    markdownHelpFun.format(']๐๐ค๐ : ๐จ๐๐ฃ๐ ๐ ๐ง๐๐ฃ๐๐ค๐ข ๐๐ค๐', 'BOLD', 'BLUE', null, true)

    markdownHelpFun.format('๐ ยท [', 'BOLD', 'GREEN', null, false)
    markdownHelpFun.format(`${process.env.PREFIX_FUN}`, 'BOLD', 'PINK', null, false)
    markdownHelpFun.format(']๐ข๐๐ข๐ : ๐จ๐๐ฃ๐ ๐ ๐ง๐๐ฃ๐๐ค๐ข ๐ข๐๐ข๐', 'BOLD', 'GREEN', null, true)

    message.channel.send(markdownHelpFun.toCodeblock())
  }
}

async function helpHacker (client, message, process) {
  if (message.content === `${process.env.PREFIX_HACKER}help`) {
    const markdownHelpHacker = new BetterMarkdown()

    await message.delete()

    markdownHelpHacker.format('๐ก๏ธ ๐๐๐ก๐๐๐ฅ๐ข๐จ๐ฆ ๐๐ข๐ ๐ ๐๐ก๐๐ฆ ๐ก๏ธ |', 'UNDERLINE', 'RED', 'DARKBLUE', false)
    markdownHelpHacker.format(' ๐ป ๐๐๐ ๐๐ข๐ ๐ ๐๐ก๐ฆ ๐๐๐๐๐๐ฅ๐ฆ ๐ป\n', 'UNDERLINE', 'YELLOW', 'DARKBLUE', true)

    markdownHelpHacker.format('๐งน ยท [', 'BOLD', 'CYAN', null, false)
    markdownHelpHacker.format(`${process.env.PREFIX_HACKER}`, 'BOLD', 'PINK', null, false)
    markdownHelpHacker.format(']๐๐ก๐๐๐ง๐ข๐ <๐ฃ๐ค๐ข๐๐ง๐> : ๐๐๐ก๐๐ฉ๐๐จ ๐ฎ๐ค๐ช๐ง ๐ข๐๐จ๐จ๐๐๐', 'BOLD', 'CYAN', null, true)

    markdownHelpHacker.format('๐จ ยท [', 'BOLD', 'WHITE', null, false)
    markdownHelpHacker.format(`${process.env.PREFIX_HACKER}`, 'BOLD', 'PINK', null, false)
    markdownHelpHacker.format(']๐จ๐ฅ๐๐ข <๐ข๐๐จ๐จ๐๐๐> : ๐จ๐ฅ๐๐ข <๐ข๐๐จ๐จ๐๐๐>', 'BOLD', 'WHITE', null, true)

    markdownHelpHacker.format('๐ ยท [', 'BOLD', 'PURPLE', null, false)
    markdownHelpHacker.format(`${process.env.PREFIX_HACKER}`, 'BOLD', 'PINK', null, false)
    markdownHelpHacker.format(']๐๐ฅ_๐ฅ๐ฅ <๐ข๐๐ฃ๐ฉ๐๐ค๐ฃ> : ๐๐ค๐ฅ๐ฎ ๐ฉ๐๐ ๐ฅ๐๐๐ฉ๐ช๐ง๐ ๐ค๐ ๐ช๐จ๐๐ง ๐ข๐๐ฃ๐ฉ๐๐ค๐ฃ๐๐ | <๐ง๐๐จ๐๐ฉ> ๐ฉ๐ค ๐ง๐๐ฉ๐ช๐ง๐ฃ ๐๐ฉ ๐ฎ๐ค๐ช๐ง ๐๐๐ง๐จ๐ฉ ๐ฅ๐๐๐ฉ๐ช๐ง๐', 'BOLD', 'PURPLE', null, true)

    markdownHelpHacker.format('๐ ยท [', 'BOLD', 'YELLOW', null, false)
    markdownHelpHacker.format(`${process.env.PREFIX_HACKER}`, 'BOLD', 'PINK', null, false)
    markdownHelpHacker.format("]๐๐ฅ_๐ช๐จ๐๐ง <๐ข๐๐ฃ๐ฉ๐๐ค๐ฃ> : ๐๐ค๐ฅ๐ฎ ๐๐ก๐ก ๐ซ๐๐ก๐ช๐๐จ ๐ค๐ ๐ช๐จ๐๐ง ๐ข๐๐ฃ๐ฉ๐๐ค๐ฃ๐๐ | <๐ง๐๐จ๐๐ฉ> ๐ฉ๐ค ๐ง๐๐ฉ๐ช๐ง๐ฃ ๐๐ฉ ๐ฎ๐ค๐ช๐ง'๐จ", 'BOLD', 'YELLOW', null, true)

    markdownHelpHacker.format('๐ค ยท [', 'BOLD', 'PURPLE', null, false)
    markdownHelpHacker.format(`${process.env.PREFIX_HACKER}`, 'BOLD', 'PINK', null, false)
    markdownHelpHacker.format(']๐๐ข_๐๐ง๐๐๐ฃ๐๐จ <๐ข๐๐จ๐จ๐๐๐> : ๐จ๐๐ฃ๐ <๐ข๐๐จ๐จ๐๐๐> ๐ฉ๐ค ๐๐ก๐ก ๐ฎ๐ค๐ช๐ง ๐๐ง๐๐๐ฃ๐๐จ', 'BOLD', 'PURPLE', null, true)
    message.channel.send(markdownHelpHacker.toCodeblock())
  }
}

async function helpEmotes (client, message, process) {
  if (message.content === `${process.env.PREFIX_EMOTES}help`) {
    const markdownHelpEmotes = new BetterMarkdown()

    await message.delete()

    markdownHelpEmotes.format('๐ ๐๐๐ ๐๐ ๐ข๐ง๐๐ฆ ๐\n', 'BOLD', 'YELLLOW', 'LIGHTGRAY', true)

    markdownHelpEmotes.format('๐คฃ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ข๐๐ง', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ก๐ค๐ก', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐คญ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ค๐ช๐ฅ๐จ', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ก๐ค๐ซ๐', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐ฉ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ฃ๐ฉ๐ข', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐ค ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ฌ๐ฉ๐', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐คฏ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ฅ๐๐', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐คฎ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐๐ง๐๐ฃ๐๐', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐๐๐ช๐ง', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐ฏ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ฅ๐๐ง๐๐๐๐ฉ', 'BOLD', 'BLUE', null, true)

    markdownHelpEmotes.format('๐คซ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpEmotes.format(`${process.env.PREFIX_EMOTES}`, 'BOLD', 'PINK', null, false)
    markdownHelpEmotes.format(']๐ฉ๐', 'BOLD', 'BLUE', null, true)

    message.channel.send(markdownHelpEmotes.toCodeblock())
  }
}

async function helpPerso (client, message, process) {
  if (message.content === `${process.env.PREFIX_PERSO}help`) {
    const markdownHelpPerso = new BetterMarkdown()

    await message.delete()

    markdownHelpPerso.format('๐ค ๐๐๐ ๐๐ข๐ ๐ ๐๐ก๐๐๐ฆ ๐ฃ๐๐ฅ๐ฆ๐ข ๐ค\n', 'BOLD', 'YELLLOW', 'LIGHTGRAY', true)

    markdownHelpPerso.format('๐ผ๏ธ ยท [', 'BOLD', 'WHITE', null, false)
    markdownHelpPerso.format(`${process.env.PREFIX_PERSO}`, 'BOLD', 'PINK', null, false)
    markdownHelpPerso.format(']๐๐ซ๐๐ฉ๐๐ง <๐ช๐ง๐ก> : ๐๐๐๐ฃ๐๐ ๐ฎ๐ค๐ช๐ง ๐๐ซ๐๐ฉ๐๐ฉ ๐๐ฃ <๐ช๐ง๐ก>', 'BOLD', 'WHITE', null, true)

    markdownHelpPerso.format('๐ ยท [', 'BOLD', 'GRAY', null, false)
    markdownHelpPerso.format(`${process.env.PREFIX_PERSO}`, 'BOLD', 'PINK', null, false)
    markdownHelpPerso.format(']๐๐๐ค <๐ฃ๐๐ฌ_๐๐๐ค> : ๐๐๐๐ฃ๐๐ ๐ฎ๐ค๐ช๐ง ๐๐๐ค ๐๐ฃ <๐ฃ๐๐ฌ_๐๐๐ค>', 'BOLD', 'GRAY', null, true)

    markdownHelpPerso.format('๐ ยท [', 'BOLD', 'RED', null, false)
    markdownHelpPerso.format(`${process.env.PREFIX_PERSO}`, 'BOLD', 'PINK', null, false)
    markdownHelpPerso.format(']๐จ๐ฉ๐๐ฉ๐ช๐จ <๐ผ๐๐ผ๐๐๐ผ๐ฝ๐๐/๐๐ฟ๐๐/๐ฟ๐๐ฟ/๐๐๐๐๐๐๐ฝ๐๐>', 'BOLD', 'RED', null, true)

    markdownHelpPerso.format('๐๏ธ ยท [', 'BOLD', 'GREEN', null, false)
    markdownHelpPerso.format(`${process.env.PREFIX_PERSO}`, 'BOLD', 'PINK', null, false)
    markdownHelpPerso.format(']๐๐๐ฉ๐๐ซ๐๐ฉ๐ฎ <๐ฅ๐ก๐๐ฎ๐๐ฃ๐|๐จ๐ฉ๐ง๐๐๐ข๐๐ฃ๐|๐ฌ๐๐ฉ๐๐๐๐ฃ๐>', 'BOLD', 'GREEN', null, true)

    markdownHelpPerso.format('๐ ยท [', 'BOLD', 'BLUE', null, false)
    markdownHelpPerso.format(`${process.env.PREFIX_PERSO}`, 'BOLD', 'PINK', null, false)
    markdownHelpPerso.format(']๐๐๐ค๐ช๐ฉ๐ข๐ <๐ฃ๐๐ฌ_๐๐๐ค๐ช๐ฉ๐ข๐> | <๐ง๐๐จ๐๐ฉ> ๐ฉ๐ค ๐ง๐๐ฉ๐ช๐ง๐ฃ ๐ฉ๐ค ๐ฎ๐ค๐ช๐ง ๐๐๐ง๐จ๐ฉ ๐๐๐ค๐ช๐ฉ๐ข๐', 'BOLD', 'BLUE', null, true)

    message.channel.send(markdownHelpPerso.toCodeblock())
  }
}

async function helpInfos (client, message, process) {
  if (message.content === `${process.env.PREFIX_INFOS}help`) {
    await message.delete()

    const markdownHelpInfos = new BetterMarkdown()

    markdownHelpInfos.format('๐ ๐๐๐ ๐๐ข๐ ๐ ๐๐ก๐๐ฆ ๐๐ก๐๐ข๐ฆ ๐\n', 'BOLD', 'YELLLOW', 'LIGHTGRAY', true)

    markdownHelpInfos.format('โน๏ธ ยท [', 'BOLD', 'CYAN', null, false)
    markdownHelpInfos.format(`${process.env.PREFIX_INFOS}`, 'BOLD', 'PINK', null, false)
    markdownHelpInfos.format(']๐๐ฃ๐๐ค๐จ๐๐ง๐ซ = ๐จ๐๐ฃ๐ ๐จ๐ค๐ข๐ ๐๐ฃ๐๐ค๐ง๐ข๐๐ฉ๐๐ค๐ฃ๐จ ๐ฉ๐ค ๐ ๐๐ช๐๐ก๐', 'BOTH', 'CYAN', null, true)

    markdownHelpInfos.format('๐๐ป ยท [', 'BOLD', 'GREEN', null, false)
    markdownHelpInfos.format(`${process.env.PREFIX_INFOS}`, 'BOLD', 'PINK', null, false)
    markdownHelpInfos.format(']๐๐ฃ๐๐ค๐ช๐จ๐๐ง <๐ช๐จ๐๐ง> = ๐จ๐๐ฃ๐ ๐จ๐ค๐ข๐ ๐๐ฃ๐๐ค๐ง๐ข๐๐ฉ๐๐ค๐ฃ๐จ ๐ฉ๐ค <๐ช๐จ๐๐ง>', 'BOLD', 'GREEN', null, true)

    message.channel.send(markdownHelpInfos.toCodeblock())
  }
}

async function helpAdmin (client, message, process) {
  if (message.content === `${process.env.PREFIX_ADMIN}help`) {
    await message.delete()

    const markdownHelpAdmin = new BetterMarkdown()
    markdownHelpAdmin.format('๐จ ๐ฃ๐ฅ๐๐ฉ๐๐ง๐ ๐๐ข๐ ๐ ๐๐ก๐๐ฆ ๐จ\n', 'BOLD', 'YELLLOW', 'LIGHTGRAY', true)
    markdownHelpAdmin.format('๐ช ๐๐๐ ๐๐ข๐ ๐ ๐๐ก๐๐ฆ ๐๐๐ ๐๐ก ๐ช\n', 'BOLD', 'YELLLOW', 'LIGHTGRAY', true)

    markdownHelpAdmin.format('๐ง ยท [', 'BOLD', 'RED', null, false)
    markdownHelpAdmin.format(`${process.env.PREFIX_ADMIN}`, 'BOLD', 'PINK', null, false)
    markdownHelpAdmin.format(']๐ฃ๐๐ฉ๐ง๐ค๐จ๐ฃ๐๐ฅ๐๐ง <๐ค๐ฃ/๐ค๐๐> : ๐๐๐ฉ๐๐ซ๐๐ฉ๐๐จ ๐ค๐ง ๐๐๐๐๐ฉ๐๐ซ๐๐ฉ๐๐จ ๐ฃ๐๐ฉ๐ง๐ค๐จ๐ฃ๐๐ฅ๐๐ง', 'BOLD', 'RED', null, true)

    markdownHelpAdmin.format('๐ง ยท [', 'BOLD', 'RED', null, false)
    markdownHelpAdmin.format(`${process.env.PREFIX_ADMIN}`, 'BOLD', 'PINK', null, false)
    markdownHelpAdmin.format(']๐๐๐จ๐ฉ๐ค๐ง๐ฎ <๐ค๐ฃ/๐ค๐๐> : ๐๐๐ฉ๐๐ซ๐๐ฉ๐๐จ ๐ค๐ง ๐๐๐๐๐ฉ๐๐ซ๐๐ฉ๐๐จ ๐๐๐จ๐ฉ๐ค๐ง๐ฎ', 'BOLD', 'RED', null, true)

    markdownHelpAdmin.format('๐ ยท [', 'BOLD', 'RED', null, false)
    markdownHelpAdmin.format(`${process.env.PREFIX_ADMIN}`, 'BOLD', 'PINK', null, false)
    markdownHelpAdmin.format(']๐ซ๐๐๐ฌ <๐๐> : ๐จ๐๐ฃ๐ ๐๐ก๐ก ๐ข๐๐จ๐จ๐๐๐ ๐จ๐๐ฃ๐ฉ ๐๐ฎ <๐๐> (๐๐ซ๐๐ฃ ๐ฉ๐๐ค๐จ๐ ๐๐๐ก๐๐ฉ๐๐) | ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐ผ๐ฝ๐๐', 'BOLD', 'RED', null, true)

    message.channel.send(markdownHelpAdmin.toCodeblock())
  }
}

export default async function allHelps (client, message, process) {
  helpNormal(client, message, process)
  helpCrypto(client, message, process)
  helpFun(client, message, process)
  helpHacker(client, message, process)
  helpEmotes(client, message, process)
  helpPerso(client, message, process)
  helpInfos(client, message, process)
  helpAdmin(client, message, process)
}
