class MainController < ApplicationController
  layout "celestial"

  def index
    gallery_img1 = ActionController::Base.helpers.image_url('gallery-img1.jpg')
    vegan_img = ActionController::Base.helpers.image_url('0401-vegan.png')
    @gallery_props = { gallery_img1: gallery_img1, vegan_img:vegan_img }

    @specials_props = { gallery_img1: gallery_img1 }

    res_img_5 = ActionController::Base.helpers.image_url('res_img_5.jpg')
    @menu_props = { res_img_5: res_img_5 }


  end
end
