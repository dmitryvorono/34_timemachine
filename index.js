var TIMEOUT_IN_SECS = 5 * 60
var TEMPLATE = '<h1 style="color: white; text-align: center;"><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'

var INSPIRATIONAL_QUOTES =  [
                            'Наша величайшая слабость в том, что мы опускаем руки. Самый надежный способ добиться успеха'+
                            +' - сделать попытку еще раз.',
                            'Один из способов, чтобы научиться делать что-то правильно, это сделать сначала неправильно.',
                            'То, что определяет Вашу карьеру, это не то чего Вы достигаете, это - то, что Вы преодолеваете.',
                            'Нельзя создать репутацию на том, что вы только собираетесь сделать.',
                            'Те, кто не довольствуется одним исполнением своих обязанностей, достигают вершины.',
                            'Завтрашний день — самая важная вещь в жизни. Он навещает нас в полночь. Замечательно, когда'+
                            +' он приходит и отдаётся прямо в наши руки. Он надеется, что мы возымели хоть какой-то урок'+
                            +' со вчерашнего дня.',
                            'Для того, чтобы добиться успеха, вашего желания для успеха необходимо больше, чем вашего страха неудачи.',
                            'Единственный способ получать настоящее удовлетворение от работы – это делать её превосходно,'+
                            +' осознавая это. А единственный способ делать свою работу превосходно – это любить ее. Если ты'+
                            +' ещё не нашел свое любимое дело, продолжай искать.',
                            'Чтобы добиться чего-то, необходимо иметь две вещи: план и недостаток времени.',
                            'Развилка двух дорог — я выбрал ту, где путников обходишь за версту. Все остальное не играет роли!',
                            'Стройте свои собственные мечты, иначе кто-то другой использует вас, чтобы построить свои.',
                            'Никто не может вернуться назад и совершить другой старт. Но каждый может начать сегодня и'+
                            +' прийти к другому финишу.',
                            'Из тех бросков, которые ты не сделал, 100% — мимо ворот.',
                            'За свою карьеру я промахнулся свыше 9000 раз. Я проиграл почти 300 матчей. 26 раз мне было'+
                            +' доверено сделать решающий бросок и я промазал. Я очень часто терпел неудачи в своей жизни.'+
                            +' Именно поэтому я стал звездой.',
                            'Если вы делаете то, что делали всегда, вы получаете то, что получали всегда. ',
                            'Любая работа сложная. Ищите ту работу, сложность которой вам будет в удовольствие.'
                            ]

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style", "position: fixed; top: 24px; left: 16px; z-index: 150; width: 100px; background-color: #65a3be; border-radius: 5px;")
var bodyTag = document.body
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.innerHTML = TEMPLATE

function getTimestampInSecs(){
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds/1000)
}

function padZero(number){
  return ("00" + String(number)).slice(-2);
}

var timestampOnStart = getTimestampInSecs()

function getSecondsLeft(){
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  return Math.max(TIMEOUT_IN_SECS - secsGone, 0)
}

function displayTimer(){
  var secsLeft = getSecondsLeft();
  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;

  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function alertQuotes(){
  window.alert(randomChoice(INSPIRATIONAL_QUOTES));
}

function displayAlert(){
  var secsLeft = getSecondsLeft();
  if(secsLeft == 0){
    alertQuotes();
  }
}


setInterval(displayTimer, 300);
setInterval(displayAlert, 30000);
