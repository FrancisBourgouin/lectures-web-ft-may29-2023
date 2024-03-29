Rails.application.routes.draw do
  resources :users
  resources :urls

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'


  get '/u/:short_url' => 'urls#visit'
  
  # resources :users do
  #   resources :urls
  # end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "urls#index"
end



# /users/1/urls