# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "celestial"

  def index
    @hello_world_props = { name: "Rafico" }
  end
end
