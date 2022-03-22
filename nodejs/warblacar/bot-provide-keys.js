export const provideHelpKeys = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [ { text: 'Я можу допомогти їжею', callback_data: 'provideFood' } ],
      [ { text: 'Я можу допомогти напоями або водою', callback_data: 'provideWater' } ],
      [ { text: 'Я маю дещо з ліків', callback_data: 'provideMedicines' } ],
      [ { text: 'Я можу підкинути', callback_data: 'provideCar' } ],
    ]
  })
}

export const provideFoodKeys = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [ { text: `У мене є Хліб`, callback_data: 'provideBread' } ],
      [ { text: `У мене є М'ясо та риба`, callback_data: 'provideMeatAndFish' } ],
      [ { text: `У мене є Плодоовочеві товари`, callback_data: 'provideFruitAndVegetable' } ],
      [ { text: `У мене є Молочні продукти`, callback_data: 'dairy' } ],
      [ { text: `У мене є Зерно-борошняні товари`, callback_data: 'provideGrainAndBoron' } ],
      [ { text: `У мене є Консерви`, callback_data: 'provideCanned' } ],
    ]
  })
}