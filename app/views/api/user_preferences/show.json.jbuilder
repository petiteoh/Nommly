json.user do
    json.partial! "api/user_preference/user_preference", user: @user_preference.user
end