# json.extract! @user, :email, :display_name, :id
json.partial! "api/users/user", user: @user
