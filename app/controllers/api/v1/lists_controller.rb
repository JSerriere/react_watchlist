class Api::V1::ListsController < ApplicationController
    before_action :set_list, only: %i[show destroy]

  def index
    list = List.all.order(created_at: :desc)
    render json: list
  end

  def create
    list = List.create!(list_params)
    if list
      render json: list
    else
      render json: list.errors
    end
  end

  def show
    render json: @list
  end

  def destroy
    @list&.destroy
    render json: { message: 'List deleted!' }
  end

  private

  def list_params
    params.permit(:name)
  end

  def set_list
    @list = List.find(params[:id])
  end
end
