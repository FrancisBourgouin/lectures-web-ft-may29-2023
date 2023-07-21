# Motherboard => Logic Boards
# Not functions => Methods!


# .sponsored {
#   border-color : #bada55;
# }

# .sponsored
#   border-color : #bada55

def say_hi
  puts "Hi"
end

def say_hi_to_someone person_name
  puts "Hi #{person_name}"
end


bob = 5
def sum num1,num2
  # bob = 10
  p num1 + num2 + bob
end

say_hi
say_hi_to_someone "Caroline"


result = sum 5,6
p result