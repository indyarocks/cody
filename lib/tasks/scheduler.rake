namespace :scheduler do
  desc "Send the new reviews summary to each user"
  task send_new_reviews_summary: [:environment] do
    logins = Setting.lookup("new_reviews_summary_recipients")
    User.where(login: logins).find_each do |user|
      SummaryMailer.new_reviews(user).deliver_now
    end
  end
end
