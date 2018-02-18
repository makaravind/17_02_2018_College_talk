(function(global, document){
  'use strict';
  global.currentList = [];
  var allBuzzWords = ['blockchain', 'machine learning', 'cryptocurrency', 'functional programming',
'elon musk', 'self driving cars', 'bitcoin', 'andriod', 'artificial intelligence'];

  global.checkIfWordPresent = function() {
    const newWord = document.querySelector('#new_word');
    console.log(newWord.value);
    var found = allBuzzWords.find(function(element) {
      return element.toLowerCase() === newWord.value.toLowerCase();
    });
    if(found) {
      // append to the list
      global.currentList.push(found);

      var node = document.createElement("LI");
      var textnode = document.createTextNode(found);
      node.appendChild(textnode);
      document.getElementById("game").appendChild(node);
      found = null;
    }
  };

  global.showAll = function() {
    var listNode = document.getElementById("game");
    listNode.innerHTML = '';
    allBuzzWords.forEach(word => {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(word);
      node.appendChild(textnode);
      listNode.appendChild(node);
    });
  };

  global.currentItem = 0;
  var finalWords = [
    'youtube.com/amyourmove', 
    'facebook.com/amyourmove', 
    'about.me/m.aravind',
    'bit.do/aravind-m'
  ];
  global.setInterval(() => {
    var node = document.getElementById("final");
    node.innerHTML = '';
    node.innerHTML = finalWords[global.currentItem];
    global.currentItem += 1;
    if(global.currentItem >= finalWords.length) {
      global.currentItem = 0;
    }
  }, 1500);

})(window, document);