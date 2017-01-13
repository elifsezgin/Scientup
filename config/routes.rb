Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :index]
    resource :session, only: [:create, :destroy]
  end

  resources :groups, only: [:create, :update, :index, :show, :destroy], defaults: { format: :json }

end
