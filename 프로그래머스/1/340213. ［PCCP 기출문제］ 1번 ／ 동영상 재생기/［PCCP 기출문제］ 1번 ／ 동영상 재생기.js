function solution(video_len, pos, op_start, op_end, commands) {
    let answer = pos

    const toSec = (t) => {
        const [m, s] = t.split(':').map(Number);
        return m * 60 + s
    }

    const toTime = (sec) => {
        const m = Math.floor(sec / 60)
        const s = sec % 60
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2,'0')}`
    }

    const videoLenSec = toSec(video_len)
    const opStartSec = toSec(op_start)
    const opEndSec = toSec(op_end)

    const isOpening = (sec) => opStartSec <= sec && sec <= opEndSec

    for (let command of commands) {
        let curSec = toSec(answer);
    
        if (isOpening(curSec)) {
          curSec = opEndSec;
        }
    
        if (command === 'next') {
          curSec = curSec + 10 >= videoLenSec ? videoLenSec : curSec + 10;
        } else if (command === 'prev') {
          curSec = curSec - 10 < 0 ? 0 : curSec - 10;
        }
    
        if (isOpening(curSec)) {
          curSec = opEndSec;
        }
    
        answer = toTime(curSec);
      }

    return answer
}