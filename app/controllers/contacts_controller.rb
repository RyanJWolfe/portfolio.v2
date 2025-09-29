# frozen_string_literal: true

# Send email via contact form
class ContactsController < ApplicationController
  def new
    @contact = ContactForm.new
  end

  def success; end

  def create
    @contact = ContactForm.new(contacts_params)

    if @contact.valid?
      deliver_message
    else
      flash[:error] = "Unable to send message."
      respond_to do |format|
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def deliver_message
    @contact.request = request
    if @contact.deliver
      flash.now[:success] = "Message sent!"
      redirect_to contact_success_path
    else
      flash.now[:error] = "Could not send message"
      render contact_path, status: :unprocessable_entity
    end
  end

  def contacts_params
    params.require(:contact_form).permit(:name, :email, :message, :nickname)
  end
end
