#write your code here
def translate input
  result_sentence = ""
  result = ""
  vowel = ['a', 'e', 'i', 'o', 'u']
  words = input.split
  for word in words
    if vowel.include?(word[0])
      result = word + 'ay'
    else
      count = 0
      while !vowel.include?( word[count] )
        count = count + 1
      end
      if word[count-1] == 'q'
        count = count + 1
      end
      result = word[count, word.length] + word[0, count] + 'ay'
    end
    result_sentence += result + " "
  end
  result_sentence.strip
end