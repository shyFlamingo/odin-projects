class Timer
  #write your code here
  def seconds
    @seconds
  end

  def seconds= second_amount
    @seconds = second_amount
  end

  def initialize
    @seconds = 00
    $minutes = 60
    $hours = 3600
  end

  def time_string
    padded((@seconds/$hours) % 60)   + ':' +
    padded((@seconds/$minutes) % 60) + ':' +
    padded(@seconds%60)
  end

  def padded number 
    zero_digit = '0'       
    result = ''
    
    if (number < 10)
      result = result + zero_digit + number.to_s
    else 
      result = result + number.to_s
    end   
    
    result
end
end
