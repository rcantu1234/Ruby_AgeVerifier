var pigatize = function(text){
    var vowels = /[aeiou]/;
    var word = text[0];
    if(vowels.test(word)){
        return text + "way";
    }else{
        return text.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
    }
};

  var text = prompt("Please enter a word and I will translate to pig latin: ");

  if (text.length === 0) {
    console.log("Please enter a string.");
  }
  else {
    console.log(pigatize(text));
  }


