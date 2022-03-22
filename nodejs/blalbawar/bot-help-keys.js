export const selectCityKeys = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [ { text: 'Київ', callback_data: 'kyiv' } ],
      [ { text: 'Львів', callback_data: 'lviv' } ],
    ]
  })
}

export const needHelpKeys = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [ { text: 'Мені потрібна їжа', callback_data: 'needFood' } ],
      [ { text: 'Мені потрібна вода', callback_data: 'needWater' } ],
      [ { text: 'Мені потрібні ліки', callback_data: 'needMedicines' } ],
      [ { text: 'Мені потрібно дістатись машиною', callback_data: 'needCar' } ],
    ]
  })
}

export const needFoodKeys = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [ { text: `Хліб`, callback_data: 'bread' } ],
      [ { text: `М'ясо та риба`, callback_data: 'meatAndFish' } ],
      [ { text: `Плодоовочеві товари`, callback_data: 'fruitAndVegetable' } ],
      [ { text: `Молочні продукти`, callback_data: 'dairy' } ],
      [ { text: `Зерно-борошняні товари`, callback_data: 'grainAndBoron' } ],
      [ { text: `Консерви`, callback_data: 'canned' } ],
    ]
  })
}

export const needWaterKeys = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [ { text: 'Вода - 2л', callback_data: 'water_2' } ],
      [ { text: 'Вода - 5л', callback_data: 'water_5' } ],
    ]
  })
}

export const needMedicinesKeys = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [ { text: 'Тверді: таблетки, порошок, капсули тощо.', callback_data: 'solid' } ],
      [ { text: `М'які: мазі, креми, паста, гелі тощо`, callback_data: 'soft' } ],
      [ { text: `Рідкі: розчини, каплі, сиропи тощо`, callback_data: 'liquid' } ],
      [ { text: `Газоподібні: аерозолі`, callback_data: 'aerosols' } ],
    ]
  })
}

export const needCarKeys = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [ { text: 'По району', callback_data: 'area' } ],
      [ { text: `З лівого на правий берег`, callback_data: 'leftToRight' } ],
      [ { text: `З правого на лівий берег`, callback_data: 'rightToLeft' } ],
      [ { text: `З міста на північ`, callback_data: 'north' } ],
      [ { text: `З міста на південь`, callback_data: 'south' } ],
      [ { text: `З міста на захід`, callback_data: 'west' } ],
      [ { text: `З міста на схід`, callback_data: 'east' } ],
    ]
  })
}

