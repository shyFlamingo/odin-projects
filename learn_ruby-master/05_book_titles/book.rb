class Book
  # write your code here

  def title
    @title
  end

  def title= (new_title)
    result = ""
    split_words = new_title.split
    tmp = split_words[0]
    tmp[0] = tmp[0].upcase
    split_words[0] = tmp
    little_words = ['and', 'in', 'the', 'an', 'of','a']
    for words in split_words
      if !little_words.include?(words)
        words[0] = words[0].upcase
      end
      result = result + words + " "
    end

    @title = result.strip

  end

end
