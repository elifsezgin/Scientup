class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    if @event.save
      Participation.create(event_id: @event.id, user_id: current_user.id)
      EventHosting.create(event_id: @event.id, user_id: current_user.id)
      render 'api/events/show.json.jbuilder'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    if params[:searchInput]
      @events = Event.all.where('LOWER(name) ~ LOWER(?)', params[:searchInput])
    else
      @events = Event.all
    end
    render 'api/events/index.json.jbuilder'
  end

  def update
  end

  def show
    @event = Event.find(params[:id])
    render 'api/events/show.json.jbuilder'
  end

  def destroy
    @event = Event.find(params[:id])
    @group = Group.find(@event.group.id)
    @event.delete
    render 'api/groups/show.json.jbuilder'
  end

  private
  def event_params
    params.require(:event).permit(:name, :description, :date, :time, :group_id, :lat, :lng, :address)
  end
end
