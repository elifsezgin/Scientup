class Api::GroupsController < ApplicationController
  def create

  end

  def update
  end

  def index
    @groups = Group.all
    render 'api/groups/index.json.jbuilder'
  end

  def show
    @group = Group.find(params[:id])

    render 'api/groups/show.json.jbuilder'
  end

  def destroy
  end

  private
  def group_params
    params.require(:group).permit(:title, :description, :city_name, :image_url)
  end
end
