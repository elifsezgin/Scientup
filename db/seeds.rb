# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Group.create(title: 'Evolutionists', description: 'Meet other local evolutionists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484632895/evolution-wide-wallpaper-20363_de3u4z.jpg")

Group.create(title: "Computer Scientists", description: "Meet other local computer scientists to discuss the latest news and theories.", city_name: "San Francisco", image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484353544/compsc_n2ryhb.png")

Group.create(title: 'Data Scientists', description: 'Meet other local data scientists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352124/Unknown-3_gtowm6.jpg")

Group.create(title: 'Physicists', description: 'Meet other local physicists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352214/images_ihqfsv.jpg")

Group.create(title: 'Mathematicians', description: 'Meet other local mathematicians to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352296/mathematics_w0u4un.jpg")

Group.create(title: 'Chemists', description: 'Meet other local chemists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484353447/Unknown-5_jzila0.jpg")


User.create(username: 'Guest', email: 'guest@guest.com', password:'password')
User.create(username: 'Kendall', email: 'kendall@kendall.com', password:'password')
User.create(username: 'Anton', email: 'anton@anton.com', password:'password')
User.create(username: 'Riaz', email: 'riaz@riaz.com', password:'password')
User.create(username: 'Nilam', email: 'nilam@nilam.com', password:'password')
User.create(username: 'Mattithiah', email: 'mattithiah@mattithiah.com', password:'password')
User.create(username: 'Damianus', email: 'damianus@damianus.com', password:'password')
User.create(username: 'Damianus', email: 'damianus@damianus.com', password:'password')


Organization.create(user_id: 2, group_id: 1)
Organization.create(user_id: 3, group_id: 2)
Organization.create(user_id: 4, group_id: 3)
Organization.create(user_id: 5, group_id: 4)
Organization.create(user_id: 6, group_id: 5)
Organization.create(user_id: 7, group_id: 6)

Membership.create(user_id: 7, group_id: 1)
Membership.create(user_id: 2, group_id: 1)
Membership.create(user_id: 3, group_id: 1)
Membership.create(user_id: 4, group_id: 1)
Membership.create(user_id: 5, group_id: 1)
Membership.create(user_id: 6, group_id: 1)
Membership.create(user_id: 7, group_id: 2)
Membership.create(user_id: 8, group_id: 2)
Membership.create(user_id: 3, group_id: 2)
Membership.create(user_id: 4, group_id: 2)
Membership.create(user_id: 5, group_id: 2)
Membership.create(user_id: 6, group_id: 2)
Membership.create(user_id: 7, group_id: 3)
Membership.create(user_id: 2, group_id: 3)
Membership.create(user_id: 3, group_id: 3)
Membership.create(user_id: 4, group_id: 3)
Membership.create(user_id: 5, group_id: 3)
Membership.create(user_id: 6, group_id: 3)
Membership.create(user_id: 7, group_id: 4)
Membership.create(user_id: 8, group_id: 4)
Membership.create(user_id: 3, group_id: 4)
Membership.create(user_id: 4, group_id: 4)
Membership.create(user_id: 5, group_id: 4)
Membership.create(user_id: 6, group_id: 4)
Membership.create(user_id: 7, group_id: 5)
Membership.create(user_id: 8, group_id: 5)
Membership.create(user_id: 3, group_id: 5)
Membership.create(user_id: 4, group_id: 5)
Membership.create(user_id: 5, group_id: 5)
Membership.create(user_id: 6, group_id: 5)
Membership.create(user_id: 7, group_id: 6)
Membership.create(user_id: 8, group_id: 6)
Membership.create(user_id: 3, group_id: 6)
Membership.create(user_id: 4, group_id: 6)
Membership.create(user_id: 5, group_id: 6)
Membership.create(user_id: 6, group_id: 6)

Event.create(name: "Ruby on Rails Tuesday", description: "We will be teaching Ruby on Rails and coding together. We welcome all levels.", date: "2017-01-24", time: "2000-01-01 18:00:00", group_id: 6)
Event.create(name: "Javascript Friday", description: "We will be teaching Javascript and coding together. We welcome all levels.", date: "2017-01-27", time: "2000-01-01 18:00:00", group_id: 6)
