class PurchasesController < ApplicationController

    def index
        user = User.first
        purchase = user.shopping_carts.first.products
        render json: purchase
    end

    def show
        purchase = Purchase.find_by(id: params[:id])
        render json: purchase
    end

    def create
        # byebug
        purchase = Purchase.create(
            product_id: params['_json'],
            shopping_cart_id: ShoppingCart.first.id
        )
        render json: purchase
    end
    
end
