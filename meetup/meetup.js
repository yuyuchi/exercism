const TEENTH = [13, 14, 15, 16, 17, 18, 19]

const DAY = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
}

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

export const meetup = (year, month, order, weekday) =>  {
  let meetupDate = new Date(year, (month - 1))
  
  const isSameDay = (date) => {
    meetupDate.setDate(date)
    return meetupDate.getDay() === DAY[weekday]
  }

  if (order === 'teenth') {
    const day = TEENTH.find(d =>  isSameDay(d))
    meetupDate.setDate(day)
    
  } else {
    const days = new Date(year, month, 0).getDate() // the last day of the previous month
    
    const weekdays = [...new Array(days).keys()]
      .map(x => x + 1)
      .filter(d => isSameDay(d))
    
    const day = getOrder(weekdays, order)
    meetupDate.setDate(day)
  }
  return meetupDate  
}
