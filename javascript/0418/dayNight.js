function night() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  // $('body').css('background-color', 'black'); // jquery
  // $('body').css('color', 'white'); // jquery
  // $('body').css('background-color', 'black').css('color', 'white'); // chaining
  // 이 버튼의 value값을 day로 변경한다. 
  let as = document.querySelectorAll('a');
  for (let i = 0; i < as.length; i++) {
    as[i].style.color = 'white';
  }
  // $('a').css('color', 'white').css('text-decoration', 'underbar'); // jquery
}

export function day() {
  // 아니라면 아래 코드가 실행된다. 
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  // $('body').css('backgroundColor', 'white').css('color', 'black');
  // 이 버튼의 value값을 night로 변경한다. 
  let as = document.querySelectorAll('a');
  for (let i = 0; i < as.length; i++) {
    as[i].style.color = 'black';
  }
  // $('a').css('color', 'black');
}

export function dayNight(mode) {
  if(mode === 'night') {
    night();
  }
  else {
    day();
  }
}