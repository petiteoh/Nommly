class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :display_name, null: false
      t.string :icon_url
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end

#email, display_name, icon_url, pw digest, session token