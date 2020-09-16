Rails.application.routes.draw do
 post 'auth/login', to: 'authentication#login'
 get 'auth/verify', to: 'authentication#verify'
 get 'users/:user_id/games' to: 'user#user_games'
  resources :comments
  resources :users
  resources :games
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
