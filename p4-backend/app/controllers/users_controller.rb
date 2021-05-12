class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(
            name: params[:name],
            username: params[:username],
            password: params[:password]
        )
        render json: user
    end

    def create
        user = User.create(
            name: params[:name],
            username: params[:username],
            password: params[:password]
        )
        render json: user
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
    end

end

