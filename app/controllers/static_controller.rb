class StaticController < ApplicationController
  Giphy::Configuration.configure do |config|
      config.api_key = "dc6zaTOxFJmzC"
  end

  def search
    @quote = Flirt.all.sample
    @flirt_giphy = Giphy.search("flirt", {limit: 50, offset: 25}).sample
    # @flirt_giphy = @flirt_giphy.split("http://")[1]
    # @flirt_giphy = "https://" + @flirt_giphy
    response = { :quote => @quote, :giphy => @flirt_giphy }
    respond_to do |format|
        format.json { render json: response }
        # format.json { render json: @quote }
        # format.json { render json: @flirt_giphy }
    end
  end

  def index
    @flirt = Flirt.new
    @quote = Flirt.all.sample
    @flirt_giphy = Giphy.search("flirt", {limit: 10, offset: 25}).sample
  end
end
