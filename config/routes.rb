# frozen_string_literal: true

Rails.application.routes.draw do
  get "home", to: "pages#index"

  root "pages#index"
  get "/contact", to: "contacts#new"
  get "/contact/success", to: "contacts#success"
  post "/contact", to: "contacts#create"
end
