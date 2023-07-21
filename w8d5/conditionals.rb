# == != && ||

p 4 == "4"
p 4 != "4"


user = {
  name: "Bob",
  type: "chicken",
  admin?: false
}

# user_not_admin? = !user[:admin?]

if(!user[:admin?])
  puts "Only administrators can access this message..."
end


if(user[:admin?] == false)
  puts "Only administrators can access this message..."
end

unless(user[:admin?])
  puts "Only administrators can access this message..."
end

puts "Only administrators can access this message..." unless(user[:admin?])


puts user[:admin?] ? "Hello Admin" : "GET THE HELL OUTTA HERE"