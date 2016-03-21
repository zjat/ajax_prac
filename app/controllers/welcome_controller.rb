class WelcomeController < ApplicationController
  def index
  end

  def new
  end

  def show
    @id = params[:id]
  end
end
