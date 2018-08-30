#write your code here
def echo(input)
  input
end

def shout(input)
  input.upcase
end

def repeat(input, times = 2)
  result = ""
  for i in (0..times-1)
    result = input +" "+ result
  end
  result.strip
end

def start_of_word( input, length)
  result = ''
  result += input[0, length]
  result
end

def first_word input_string
  words = input_string.split
  first_word = words[0]
  first_word
end

def titleize input_words
  result = ""
  lttlWrds = ['over', 'and', 'or', 'in', 'the', 'for', 'is']
  words = input_words.split(' ')
  tmp = words[0]
  tmp[0] = tmp[0].upcase
  words[0] = tmp
  for i in words
    if !lttlWrds.include?(i)
      i[0] = i[0].upcase
      result += i +  " "
    else
      result += i +  " "
    end
  end
  result.strip
end