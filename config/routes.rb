Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    get "/user", to: "users#show"
    resource :session, only: [:create, :destroy, :show]
    resources :recipes, only: [:index, :show ]
    resources :courses, only: [:show]
    resources :noms, only: [:create]
    delete "/noms", to: "noms#destroy"
    # resources :
  end

  root to: "static_pages#root"
end
