  function fizzFind() {
    if (number % 3 == 0 && number % 5 == 0)
        return "fizzbuzz"
    else if (number % 3 == 0)
        return "fizz";
    else if (number % 5 == 0)
       return "buzz";
    else
       return number;
 }

  function fizzLoop(num) {
    number = 0;

    while (number <= num) {
       console.log(fizzFind(number));
       number++;
    }

  }

fizzLoop(50);
