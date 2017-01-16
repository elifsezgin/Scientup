Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :update, :index, :show, :destroy] do
      resources :events, only: [:create, :update]
    end
    resources :memberships, only: [:create, :destroy]
    resources :events, only: [:index, :show, :destroy]
  end


end
