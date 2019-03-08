const calendars = [
   {value: 'Gregorian '},
   {value: 'Catholic '},
   {value: 'Julian '},
]


let d = new Date();
let year = d.getFullYear()
let startYear = d.getFullYear() - 50
let month = d.getMonth() +1

daysInMonth = (monthArg, yearArg) => {
   return new Date(yearArg, monthArg, 0).getDate();  
}

const months = [
    {
       name: 1,
       value: 'Jan'
    },
    {
      name: 2,
       value: 'Feb'
     },
     {
      name: 3,
      value: 'Mar'
     },
     {
      name: 4,
      value: 'Apr'  
     },
     {
      name: 5,
      value: 'May' 
     },
     {
      name: 6,
      value: 'June'
     },
     {
      name: 7,
      value: 'July'
     },
     {
      name: 8,
      value: 'Aug' 
     },
     {
      name: 9,
      value: 'Sep'
     },
     {
      name: 10,
      value: 'Oct' 
     },
     {
      name: 11,
      value: 'Nov'
     },
     {
      name: 12,
      value: 'Dec'
     }
]

const days = {
   days : function (m, y) {
      m = m || month;
      y = y || year;
      let daysObj= [];
      let count = daysInMonth(m, y)
      for(let i = 1; i <= count; i++) {
         if(i < 10) {
            i = '0'+i
         }
         i = String(i)
         daysObj.push({value: i});
      }
      return daysObj
   }
}

const years = {
   years : function () {
      let yearsObj= [];
      for(let i = startYear; i <= year; i++) {
         i = String(i)
         yearsObj.push({value: i});
      }
      return yearsObj
   }
}


export default {
    months,
    days,
    years,
    calendars
}