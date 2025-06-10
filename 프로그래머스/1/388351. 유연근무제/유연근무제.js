function solution(schedules, timelogs, startday) {
    const week = [];
    let day = startday;
    let result = 0;

    for (let i = 0; i < 7; i++) {
      week.push(day);
      day++;
      if (day === 8) {
        day = 1;
      }
    }

    for(let i = 0; i < schedules.length; i++) {
      let check = 5;
      const startTime = schedules[i];
      const arrSplit = [...startTime.toString()];
      const minute = arrSplit.splice(-2).join('');
      const hour = parseInt(arrSplit.join(''));
      const calculMinute = (parseInt(minute) + 10) % 60;
      const calculHour = Math.floor((parseInt(minute) + 10) / 60);
      const cutLine = (calculHour + hour) + calculMinute.toString().padStart(2,0);
      const currentWeek = timelogs[i];
      
      for(let j = 0; j < week.length; j++) {
        if(week[j] === 6 || week[j] === 7) continue;
        if(parseInt(cutLine) < currentWeek[j]) continue;
        check--
        
        if(check === 0) result++;
      }

    }

    return result++;
}