class Product < ApplicationRecord    
    has_many :reviews
    has_many :users, through: :reviews
    has_many :purchases
    has_many :shopping_carts, through: :purchases
end
