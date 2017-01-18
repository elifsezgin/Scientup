class Api::GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)
    if @group.save
      Organization.create(user_id: current_user.id, group_id: @group.id)
      render 'api/groups/show.json.jbuilder'
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
  end

  def index
    if params[:searchInput]
      @groups = Group.all.where('LOWER(title) ~ LOWER(?)', params[:searchInput])
    else
      @groups = Group.all
    end
    render 'api/groups/index.json.jbuilder'
  end

  def show
    @group = Group.find(params[:id])
    render 'api/groups/show.json.jbuilder'
  end

  def destroy
    @group = Group.find(params[:id])
    @group.delete
    render 'api/groups/index.json.jbuilder'
  end

  private
  def group_params
    params.require(:group).permit(:title, :description, :city_name, :image_url)
  end
end
