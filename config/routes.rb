Rails.application.routes.draw do
  root 'pages#home'

  controller :pages do
    (1..6).each do |n|
      get "level_#{n}"
    end
  end
end
