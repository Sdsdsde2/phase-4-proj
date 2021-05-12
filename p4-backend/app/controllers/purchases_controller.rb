class PurchasesController < ApplicationController

    def index
        purchases = Purchase.all
        render json: purchases
    end

    def show
        purchase = Purchase.find_by(id: params[:id])
        render json: purchase
    end

    def create
        purchase.create(
            purchase_id: params[:purchase_id],
            shopping_cart_id: params[:shopping_cart_id]
        )
        render json: purchase
    end
    
end
