list = ["Coffee","Yogurt","Soda","Water","Tea"]
cup_of_coffee = {
  capacity: 400,
  material: "porcelain",
  funny?:true
}

# each 

list.each do |drink|
  puts "YEAH #{drink}"
end

list.each_with_index do |drink, index|
  puts "YEAH #{drink} at position #{index}"
end

new_hash = {}
cup_of_coffee.each do |entry|
  new_hash[entry[0]] = entry[1]
end
p new_hash


# each_with

for entry in list do
  p entry
end

n = 0
while n < 5
  puts "yo"
  n = n + 1
end


5.times do |number|
  puts "ya #{number}"
end


10.upto(20) do |number|
  puts "yu #{number}"
end

20.downto(10) do |number|
  puts "yi #{number}"
end
# for 


# .times


# .upto

