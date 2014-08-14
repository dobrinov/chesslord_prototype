Rails.application.routes.draw do
  get  'games', to: 'games#create'
  post 'games', to: 'games#create'
end
