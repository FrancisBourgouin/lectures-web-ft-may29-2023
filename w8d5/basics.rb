# Strings & ' vs " & #{}

# Numbers
cool_number = 9001

cool_number.to_s

p cool_number
puts cool_number



# String
bob = "Robert"

p bob
puts bob


# Array
nil


list = [1,2,3,nil,4,nil,5,6]

p list
puts list

p list.last
# list[list.length - 1]

p list.empty?
# list.length === 0

p list.compact
p list

p list.compact!
p list


# Puts vs P


p "Yo yo yo"
sleep(5)
p "bye bye bye"