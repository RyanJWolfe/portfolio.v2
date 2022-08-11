class ContactForm < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: URI::MailTo::EMAIL_REGEXP
  attribute :message, validate: true
  attribute :nickname, captcha: true # hidden field used to prevent bots from submitting the form

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: "Contact Form Inquiry #{%("#{name}" <#{email}>)}",
      to: ENV['CONTACT_EMAIL_RECIPIENT'],
      from: ENV['CONTACT_EMAIL_RECIPIENT']
    }
  end
end
