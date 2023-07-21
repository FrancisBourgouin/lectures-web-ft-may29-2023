# Blocks!

def fancy_star_stuff
  puts "🌟⭐💫✨✨💫⭐🌟"
  yield
  puts "🌟⭐💫✨✨💫⭐🌟"
end


def fancy_logger
  puts "The result of the operation was #{yield}"
end

def say_hi_to_someone person_name
  puts "Hi #{person_name}"
end


fancy_star_stuff { say_hi_to_someone "Rishad" }

fancy_star_stuff { sleep(5) }

fancy_logger {42 + 9001}