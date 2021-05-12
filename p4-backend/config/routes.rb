Rails.application.routes.draw do
  resources :users, :products, :purchases, :reviews, :shopping_carts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
