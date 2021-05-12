class ShoppingCartsController < ApplicationController

    def index
        shopping_carts = ShoppingCart.all
        render json: shopping_carts
    end

    def show
        shopping_cart = ShoppingCart.find_by(id: params[:id])
        render json: shopping_cart
    end
    
end
