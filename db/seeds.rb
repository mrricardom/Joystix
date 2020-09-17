# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.destroy_all
Comment.destroy_all
User.destroy_all

admin = User.create!(username: 'admin', email:'admin.test@gmail.com', password: '12345')
test1 = User.create!(username: 'test', email:'test@gmail.com', password: '12345')

puts "#{User.count} users created."

earthbound = Game.create!(name:'Earthbound' , genre:'RPG', img_url:'https://vignette.wikia.nocookie.net/earthbound/images/8/84/EarthBoundBox.jpg/revision/latest?cb=20080117003806', yr: 1994 , rating: 5 , user: admin)
pokemon_sheild = Game.create!(name:'Pokemon Sheild' , genre:'RPG', img_url:'https://cdn.bulbagarden.net/upload/thumb/8/8d/Shield_EN_boxart.png/250px-Shield_EN_boxart.png', yr: 2019 , rating: 4 , user: admin)
katamari = Game.create!(name:'Katamari Damacy' , genre:'Puzzle', img_url:'https://i.ebayimg.com/images/g/SV4AAOSwat5bYX1o/s-l300.jpg', yr: 2004 , rating: 5 , user: test1)

puts "#{Game.count} games created."

comment1 = Comment.create!(content: 'Talk about classics' ,user: test1 ,game: earthbound)
comment2 = Comment.create!(content: 'This was the best game ever! Loved the OST.' ,user: admin ,game: earthbound)
comment3 = Comment.create!(content: 'What a kooky game. Would reccomend it after 3 beers.' ,user: admin ,game: katamari)

puts "#{Comment.count} comments created."