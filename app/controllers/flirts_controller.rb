class FlirtsController < ApplicationController
  def new

  end

  def create
    @flirt = Flirt.new(flirt_params)
    if @flirt.save
      redirect_to root_path
    end
  end

  private

  def flirt_params
    params.require(:flirt).permit(:quote)
  end
end
