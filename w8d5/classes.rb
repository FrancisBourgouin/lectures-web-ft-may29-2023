# What's a class ?

# Blueprint => A way to build a structure

class Potato
  def initialize type, name
    @type = type
    @name = name
    @yummy = true
  end

  # attr_reader :type
  # attr_writer :type
  attr_accessor :type, :name, :yummy



  def greet
    puts "Hi, my name is #{@name}, nice to meet you."
  end
end


class SuperPotato < Potato

end


potator = Potato.new("Yukon Gold", "Potator")
super_potato = SuperPotato.new("Yukon Gold", "Gontran")

potator.greet

potator.type = "Russett"

p potator.type


p super_potato
super_potato.greet