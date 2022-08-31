const TEENTH = [13, 14, 15, 16, 17, 18, 19]
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const getOrder = (arr, orderStr) => {
  switch (orderStr) {
    case 'first':
      return arr[0]
    case 'second':
      return arr[1]
    case 'third':
      return arr[2]
    case 'fourth':
      return arr[3]
    default:
      return arr[arr.length - 1] 
  }
}

export const meetup = (year, month, order, day) =>  {
  let meetupDate = new Date(year, (month - 1))
  
  const isSameDay = (date, day) => {
    meetupDate.setDate(date)
    return meetupDate.getDay() === WEEKDAYS.indexOf(day)
  }

  if (order === 'teenth') {
    const date = TEENTH.find(d =>  isSameDay(d, day))
    meetupDate.setDate(date)

  } else {
    const daysInMonth = new Date(year, month, 0).getDate() // the last day of the previous month
    
    const dates = [...new Array(daysInMonth).keys()]
      .map(x => x + 1)
      .filter(d => isSameDay(d, day))
    
    const date = getOrder(dates, order)
    meetupDate.setDate(date)
  }
  return meetupDate  
}
