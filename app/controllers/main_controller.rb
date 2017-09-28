class MainController < ApplicationController
  layout "celestial"

  def index
    @hello_world_props = { name: "Rafico" }
  end
end
