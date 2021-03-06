/*
** MISTROU PROJECT, 2022
** SELFBOT DISCORD
** File description:
** all info's commands, like the help, the invite, etc...
*/

import BetterMarkdown from 'discord-bettermarkdown'

import dotenv from 'dotenv'
dotenv.config()

async function infoUser (client, message, process) {
  const user = message.mentions.users.first()

  if (!user) { return message.channel.send('You must mention a user') }

  await message.delete()

  const messageUser = new BetterMarkdown()

  messageUser.format('馃攷 Informations to the user', 'UNDERLINE', 'RED', 'GRAY', false)

  messageUser.format('', 'BOLD', 'RED', null, false)
  messageUser.format('\n\n馃摑 路 Username : ', 'BOLD', 'YELLOW', null, false)
  messageUser.format(user.username, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageUser.format('馃摑 路 Discriminator : ', 'BOLD', 'YELLOW', null, false)
  messageUser.format(user.discriminator, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageUser.format('馃摑 路 ID : ', 'BOLD', 'YELLOW', null, false)
  messageUser.format(user.id, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageUser.format('馃摑 路 Created at : ', 'BOLD', 'YELLOW', null, false)
  messageUser.format(user.createdAt.toLocaleString(), 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageUser.format('馃珎 路 Mutual Guild : ', 'BOLD', 'YELLOW', null, true)

  await client.guilds.cache.filter(guild => guild.members.cache.has(user.id)).forEach(guild => {
    messageUser.format('    ' + guild.name, 'BOLD', 'BLUE', 'DARKBLUE', true)
  })
  await message.channel.send(messageUser.toCodeblock())
}

async function infoServ (client, message, process) {
  const messageGuild = new BetterMarkdown()

  if (!message.guild) { return message.channel.send('This guild is not a guild server') }

  await message.delete()
  const server = message.guild

  const owner = client.users.cache.find(user => user.id === server.ownerId)

  messageGuild.format('馃攷 Informations to the server', 'UNDERLINE', 'RED', 'INDIGO', false)

  messageGuild.format('', 'BOLD', 'RED', null, false)
  messageGuild.format('\n\n馃摑 路 Name : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.name, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃搫 路 Description : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.description, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃憫 路 Owner : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(owner.username + '#' + owner.discriminator, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃搷 路 Region : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.region, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃搮 路 Creation date : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.createdAt.toLocaleString(), 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃懃 路 Members : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.memberCount, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃洊 路 Channels : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.channels.cache.size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃槣 路 Roles : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.roles.cache.size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃懃 路 Emojis : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.emojis.cache.size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃攰 路 Voice channels : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  messageGuild.format('馃挰 路 Text channels : ', 'BOLD', 'YELLOW', null, false)
  messageGuild.format(server.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size, 'BOLD', 'BLUE', 'DARKBLUE', true)

  await message.channel.send(messageGuild.toCodeblock())
}

const tests = [
  {
    test: a => a.startsWith('infouser'),
    run: infoUser
  },
  {
    test: a => a.startsWith('infoserv'),
    run: infoServ
  }
]

export default async function PREFIX_INFOS (client, message, process) {
  if (message.content.startsWith(`${process.env.PREFIX_INFOS}`)) {
    const args = message.content.replace(`${process.env.PREFIX_INFOS}`, '')

    tests.filter(a => a.test(args))
      .forEach(a => a.run(client, message, process))
  }
}
