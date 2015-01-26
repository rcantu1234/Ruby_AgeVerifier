  function fizzFind() {

    if (number % 3 == 0)
        return "fizz";
    else if (number % 5 == 0)
       return "buzz";
    else if (number % 15 == 0)
       return "fizzbuzz";
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

fizzLoop(20);
