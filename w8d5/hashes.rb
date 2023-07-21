# Hashes
# =>, [], :symbol

# Logic Board / Motherboard

cup_of_coffee = {
  capacity: 400,
  material: "porcelain",
  funny?:true
}

another_cup_of_coffee = {
  :capacity => 400,
  :material => "porcelain",
  :funny? => true
}

p cup_of_coffee
puts cup_of_coffee

p cup_of_coffee[:capacity]
p cup_of_coffee.capacity