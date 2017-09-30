class MainController < ApplicationController
  layout "celestial"

  def index
    gallery_img1 = ActionController::Base.helpers.image_url('gallery-img1.jpg')
    @gallery_props = { gallery_img1: gallery_img1 }

  end
end
