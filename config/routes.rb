Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :stories, only: [:create, :show, :destroy, :index, :update]
    resources :comments, only: [:create, :update, :destroy]
  end
end
