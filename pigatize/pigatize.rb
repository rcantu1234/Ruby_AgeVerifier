VOWELS = ["a", "e", "i", "o", "u"]

def pigatize(text)
  if starts_with_vowel(text[0])
    pigatized_text = text + "way"
  else
    pigatized_text = text + text.slice!(0) + "ay"
  end
    return pigatized_text
end

def starts_with_vowel(letter)
  return VOWELS.include?(letter)
end

loop do
  print "Please enter a word and I will translate to pig latin: "
  text = gets.chomp
  if text.length == 0
    puts "Please enter a string."
  else
    puts pigatize(text)
  end
end

