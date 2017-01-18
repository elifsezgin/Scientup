class Api::ParticipationsController < ApplicationController
  def create
    @participation = Participation.new(user_id: params[:user_id], event_id: params[:event_id])
    if @participation.save
      @event = Event.find(params[:event_id])
      render 'api/events/show.json.jbuilder'
    else
      render json: @participation.errors.full_messages, status: 422
    end
  end

  def destroy
    @participation = Participation.find_by(user_id: current_user.id, event_id: params[:id])
    @participation.delete
    @event = Event.find(params[:id])
    render 'api/events/show.json.jbuilder'
  end

  private

  def participation_params
    params.permit(:user_id, :event_id)
  end
end
