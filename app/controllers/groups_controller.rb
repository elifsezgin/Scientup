class GroupsController < ApplicationController
  def create

  end

  def update
  end

  def index
    @groups = Group.all
    render 'groups/index.json.jbuilder'
  end

  def show
  end

  def destroy
  end
end
