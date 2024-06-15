puts "Creating lists ..."

9.times do |i|
  List.create(
    name: "List #{i + 1}")
end

puts "#{List.count} lists were created succesfully"
