// 1. 定义变量和函数

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// 2. 纯文本字符串

var  storyText= 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin','Big Daddy','Father Christmas']

var insertY = ['the soup kitchen','Disneyland','the White House']

var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']

// 3. 事件监听器和未完成的函数定义

randomize.addEventListener('click', result);

function result() {
    var newStory, xItem, yItem, zItem, name;
    newStory=storyText;
    xItem=randomValueFromArray(insertX);
    yItem=randomValueFromArray(insertY);
    zItem=randomValueFromArray(insertZ);
    newStory=newStory.replace(/:insertx:/g,xItem);
    newStory=newStory.replace(/:inserty:/g,yItem);

    newStory=newStory.replace(/:insertz:/g,zItem);




  if(customName.value !== '') {
    var name = customName.value;
    newStory=newStory.replace(/Bob/g,name)

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*5);
    var temperature =  Math.round(94*1.2);
    newStory=newStory.replace(/94 fahrenheit/g,weight);

    newStory=newStory.replace(/300 pounds/g,temperature);


  }
  if(document.getElementById("us").checked) {
    var weight = Math.round(300*2);
    var temperature =  Math.round(94*1.2);
    newStory=newStory.replace(/94 fahrenheit/g,weight);

    newStory=newStory.replace(/300 pounds/g,temperature);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}