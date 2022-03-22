import { 
  commands 
} from './bot-commands.js'

import { 
  infoMessage, 
  needHelpMessage, 
  startMessage 
} from './bot-messages.js'

import { 
  selectCityKeys,
  needHelpKeys, 
  needFoodKeys, 
  needWaterKeys,
  needMedicinesKeys,
  needCarKeys
} from './bot-help-keys.js'

import { 
  provideHelpKeys,
  provideFoodKeys 
} from './bot-provide-keys.js'

import { citiesTitle } from './bot-messages.js'
import { elementMatcher, needHelpArray, selectCityArray } from './functions.js'

import TelegramApi from 'node-telegram-bot-api'

const token = `5254185874:AAGnqoozNzxcjVZobT-tSasJIBTh5U2pqBI`

const bot = new TelegramApi(token, { polling: true })

let provideHelp = false;

const start = () => {
  bot.setMyCommands(commands)
  
  bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id

    if (text === '/start') {
      return Promise.resolve(text)
        .then(() => {
          return bot.sendSticker(chatId, startMessage.sayHiSticker)
        }) 
        .then(() => {
          return bot.sendMessage(chatId, startMessage.sayHiTitle)
        })
        .then(() => {
          return bot.sendMessage(chatId, startMessage.sayHiText)
        })
    }

    if (text === '/info') {
      await bot.sendMessage(chatId, infoMessage.text)
    }

    if (text === '/help') {
      await bot.sendMessage(chatId, citiesTitle, selectCityKeys)
    }

    if (text === '/illhelp') {
      provideHelp = true
      await bot.sendMessage(chatId, citiesTitle, selectCityKeys)
    }    
  })

  bot.on('callback_query', async msg => {
    const data = msg.data
    const chatId = msg.message.chat.id
  
    console.log(msg)

    await bot.sendMessage(chatId, `Ти натиснув категорію: "${data}".`)
    console.log(provideHelp);

    if (provideHelp === false && data === 'kyiv' || data === 'lviv') {
      await bot.sendMessage(chatId, 'Яку допомогу ти потребуєш?', needHelpKeys)      
    } 
    else if (provideHelp === true && data === 'kyiv' || data === 'lviv') {
      await bot.sendMessage(chatId, 'Є можливість допомогти? Чудово! Наші люди потребують: ', provideHelpKeys)
    }

    if (provideHelp === false && data === 'needFood') {
      await bot.sendMessage(chatId, 'З їжі у наявності:', needFoodKeys)
    } 
    else if (provideHelp === true && data === 'provideFood') {
      await bot.sendMessage(chatId, 'У мене є: ', provideFoodKeys)
    } 

    if (data === 'needWater') {
      await bot.sendMessage(chatId, 'З води у наявності:', needWaterKeys)
    }
    if (data === 'needMedicines') {
      await bot.sendMessage(chatId, 'З ліків у наявності:', needMedicinesKeys)
    }
    if (data === 'needMedicines') {
      await bot.sendMessage(chatId, 'Куди потрібно їхати:', needCarKeys)
    }
  })
}

start()

