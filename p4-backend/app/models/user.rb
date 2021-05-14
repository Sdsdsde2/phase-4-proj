class User < ApplicationRecord
    has_secure_password
    has_many :shopping_carts
    has_many :products, through: :shopping_carts
end
