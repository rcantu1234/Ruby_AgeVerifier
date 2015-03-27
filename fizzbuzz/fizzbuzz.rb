class Fizzbuzz

  def initialize
    @number = 0
  end

  def run(number)
    if number % 3 == 0 && number % 5 == 0
       'fizzbuzz'
    elsif number % 3 == 0
       'fizz'
    elsif number % 5 == 0
       'buzz'
    else
       number
    end
  end

  def fizzLoop(num)
    while @number <= num
      puts self.run(@number)
      @number += 1
    end
  end

end

object = Fizzbuzz.new

object.fizzLoop(50)
