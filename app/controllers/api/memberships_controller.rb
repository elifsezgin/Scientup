class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(user_id: params[:user_id], group_id: params[:group_id])
    if @membership.save
      @group = Group.find(params[:group_id])
      render 'api/groups/show.json.jbuilder'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find_by(user_id: current_user.id, group_id: params[:id])
    participations = Participation.find_by_sql([<<-SQL, params[:id], current_user.id])
      SELECT
        participations.*
      FROM
        participations
      JOIN
        events ON participations.event_id = events.id
      WHERE
        group_id = ? AND user_id = ?
    SQL
    # debugger
    if participations.empty?
      @membership.delete
      @group = Group.find(params[:id])
      render 'api/groups/show.json.jbuilder'
    else
      render json: ['You cannot join the events of the group if you leave.'], status: 422
    end
  end

  private

  def membership_params
    params.permit(:user_id, :group_id)
  end

end
