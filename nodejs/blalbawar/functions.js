import { 
  selectCityKeys,
  needHelpKeys, 
  needFoodKeys, 
  needWaterKeys,
  needMedicinesKeys,
  needCarKeys
} from './bot-help-keys.js'

const detectCallback = (bot, chatId) => {
  return function(data, keys) {
    if (data === 'Lviv' || data === 'Kyiv') {
      bot.sendMessage(chatId, 'Яку допомогу ти потребуєш?', keysGetter(
        selectCityKeys, needHelpKeys, needFoodKeys, needWaterKeys, needMedicinesKeys, needCarKeys
      ))      
    }
  }
}

const parseKeysCallbackData = (keys) => {
    return JSON.parse(keys.reply_markup).inline_keyboard.map(elem => {
      return elem[0].callback_data
    })
}

export const selectCityArray    = parseKeysCallbackData(selectCityKeys)
export const needHelpArray      = parseKeysCallbackData(needHelpKeys)
export const needFoodArray      = parseKeysCallbackData(needFoodKeys)
export const needWaterArray     = parseKeysCallbackData(needWaterKeys) 
export const needMedicinesArray = parseKeysCallbackData(needMedicinesKeys) 
export const needCarArray       = parseKeysCallbackData(needCarKeys) 

console.log(Array.isArray(selectCityArray))


export function elementMatcher(arr, data) {
  arr.map(elem => elem === data)
}

// console.log(JSON.parse(needHelpArray.reply_markup));

function keysGetter(...args) {
  for (let i = 0; i <= args.length; i++) {
    console.log(args[i]);
  }
}


export {detectCallback}