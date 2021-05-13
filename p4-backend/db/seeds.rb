# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
ShoppingCart.destroy_all
Purchase.destroy_all
Review.destroy_all


# users

User.create(name: "Luis Lozano", username: "Luis123", password: "1234")
User.create(name: "Shane Rachal", username: "Shane123", password: "4321")

Product.create(name: 'Baby Girl Gray Onesie', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_b11cced2-a7d1-4cee-a490-b63977802d5a?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Girl Pink Onesie', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_20299b2a-ce0b-4a38-845d-a1838e268a54?qlt=85&fmt=&hei=325&wid=325')
Product.create(name: 'White Baby Onesie 4pk', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_6fe99145-3930-4caf-b333-f4bba19013c3?qlt=85&fmt=&hei=325&wid=325')
Product.create(name: 'White Long Sleeve Baby Onesie', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_b45a6401-3d98-4d18-8a4d-2a8f479a3d34?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Girl 2pc Outfit', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_51c39026-d8f6-4f3e-916d-dcebd2efcc8b?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Boy Woven Pants', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_32c2870b-3974-4df4-b84f-504e9a2c7ed3?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Boy Twill Shorts', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_b3364526-3072-42fa-854d-8e8e4bfa4576?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Boy Pull-On Shorts', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_d652e8ef-e685-475f-8b53-fad813232742?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Girl Chambray Dress', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_7062d121-ebbc-4353-a796-8f6da063f723?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Girl Pink Bunny Dress', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_47332b67-4f68-45be-a174-824038906679?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Girl 2pk Cotton Dresses', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_9a2f2b16-15f5-4e20-a853-ddeb39a37c29?wid=325&hei=325&qlt=80&fmt=webp')
Product.create(name: 'Baby Girl Star Dress', review: Faker::Quote.yoda, price: Faker::Commerce.price(range: 0..50.0, as_string: false), quantity: rand(1..15), rating: rand(1..5), image: 'https://target.scene7.com/is/image/Target/GUEST_b621c125-d745-4521-879b-ffaeaa1c8537?wid=325&hei=325&qlt=80&fmt=webp')

# 20.times do
#     ShoppingCart.create({
#         user_id: rand(1..2)
#     })
# end
ShoppingCart.create(user_id: User.first.id)

20.times do
    Review.create({
        user_id: rand(1..2),
        product_id: rand(1..10)
    })
end

20.times do 
    Purchase.create({
        product_id: rand(1..10),
        shopping_cart_id: rand(1..20)
    })
end