#write your code here
def add(x, y)
  result = x + y
end

def subtract(x, y)
  result = x - y
end

def sum(x)
  x.sum
end

def multiply(x, y)
  x * y
end

#def multiply(x)
#  reult = 1
#  x.each do |i|
#    result *= i
#  end
#end

def power(x,y)
  x**y
end

def factorial(x)
  result = 1
  if x < 2
    result = 1
  else
    for i in (2..x)
      result = i * result
    end
  end
  result
end