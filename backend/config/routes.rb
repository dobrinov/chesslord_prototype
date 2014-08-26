Rails.application.routes.draw do

  namespace 'api', format: false, defaults: {format: :json} do
    get  'games', to: 'games#create'
    post 'games', to: 'games#create'

    get 'users', to: 'users#index'
  end
end
