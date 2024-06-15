Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'lists/index'
      post 'lists/create'
      get '/show/:id', to: 'lists#show'
      delete '/destroy/:id', to: 'lists#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
