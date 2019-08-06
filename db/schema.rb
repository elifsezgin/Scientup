# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170221191834) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "event_hostings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_event_hostings_on_event_id", using: :btree
    t.index ["user_id", "event_id"], name: "index_event_hostings_on_user_id_and_event_id", using: :btree
    t.index ["user_id"], name: "index_event_hostings_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description", null: false
    t.date     "date",        null: false
    t.time     "time",        null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.string   "address",     null: false
    t.integer  "group_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["group_id"], name: "index_events_on_group_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.string   "city_name",   null: false
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["title"], name: "index_groups_on_title", unique: true, using: :btree
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "group_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_memberships_on_group_id", using: :btree
    t.index ["user_id", "group_id"], name: "index_memberships_on_user_id_and_group_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_memberships_on_user_id", using: :btree
  end

  create_table "organizations", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "group_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_organizations_on_group_id", using: :btree
    t.index ["user_id", "group_id"], name: "index_organizations_on_user_id_and_group_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_organizations_on_user_id", using: :btree
  end

  create_table "participations", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_participations_on_event_id", using: :btree
    t.index ["user_id", "event_id"], name: "index_participations_on_user_id_and_event_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_participations_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.boolean  "show_email",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
