VOWELS = ["a", "e", "i", "o", "u"];

function pigatize(text) {
  if (starts_with_vowel(text[0])) {
    pigatized_text = text + "way";
  }
  else {
    pigatized_text = text + text[0] + "ay";
  }
   return pigatized_text;
}

function starts_with_vowel(letter) {
  if (VOWELS[0] == VOWELS[0])
  return letter;
}


  var text = prompt("Please enter a word and I will translate to pig latin: ")

  if (text.length === 0) {
    console.log("Please enter a string.");
  }
  else {
    console.log(pigatize(text));
  }


