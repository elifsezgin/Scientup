# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)
User.destroy_all
Group.destroy_all
Event.destroy_all
Membership.destroy_all
Organization.destroy_all
Participation.destroy_all

group1 = Group.create!(title: 'Evolutionists', description: 'Meet other local evolutionists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484632895/evolution-wide-wallpaper-20363_de3u4z.jpg")

group2 = Group.create!(title: 'Data Scientists', description: 'Meet other local data scientists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352124/Unknown-3_gtowm6.jpg")

group3 = Group.create!(title: 'Physicists', description: 'Meet other local physicists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352214/images_ihqfsv.jpg")

group4 = Group.create!(title: 'Mathematicians', description: 'Meet other local mathematicians to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352296/mathematics_w0u4un.jpg")

group5 = Group.create!(title: 'Chemists', description: 'Meet other local chemists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484353447/Unknown-5_jzila0.jpg")

group6 = Group.create!(title: "Computer Scientists", description: "Meet other local computer scientists to discuss the latest news and theories.", city_name: "San Francisco", image_url: "http:r//res.cloudinary.com/datsbxfvs/image/upload/v1484353544/compsc_n2ryhb.png")


user1 = User.create!(username: 'Guest', email: 'guest@guest.com', password:'password')
user2 = User.create!(username: 'Kendall', email: 'kendall@kendall.com', password:'password')
user3 = User.create!(username: 'Anton', email: 'anton@anton.com', password:'password')
user4 = User.create!(username: 'Riaz', email: 'riaz@riaz.com', password:'password')
user5 = User.create!(username: 'Nilam', email: 'nilam@nilam.com', password:'password')
user6 = User.create!(username: 'Mattithiah', email: 'mattithiah@mattithiah.com', password:'password')
user7 = User.create!(username: 'Damianus', email: 'damianus@damianus.com', password:'password')


Organization.create!(user_id: user2.id, group_id: group1.id)
Organization.create!(user_id: user3.id, group_id: group2.id)
Organization.create!(user_id: user4.id, group_id: group3.id)
Organization.create!(user_id: user5.id, group_id: group4.id)
Organization.create!(user_id: user6.id, group_id: group5.id)
Organization.create!(user_id: user7.id, group_id: group6.id)

Membership.create!(user_id: user7.id, group_id: group1.id)
Membership.create!(user_id: user2.id, group_id: group1.id)
Membership.create!(user_id: user3.id, group_id: group1.id)
Membership.create!(user_id: user4.id, group_id: group1.id)
Membership.create!(user_id: user5.id, group_id: group1.id)
Membership.create!(user_id: user6.id, group_id: group1.id)
Membership.create!(user_id: user7.id, group_id: group2.id)
Membership.create!(user_id: user1.id, group_id: group2.id)
Membership.create!(user_id: user3.id, group_id: group2.id)
Membership.create!(user_id: user4.id, group_id: group2.id)
Membership.create!(user_id: user5.id, group_id: group2.id)
Membership.create!(user_id: user6.id, group_id: group2.id)
Membership.create!(user_id: user7.id, group_id: group3.id)
Membership.create!(user_id: user2.id, group_id: group3.id)
Membership.create!(user_id: user3.id, group_id: group3.id)
Membership.create!(user_id: user4.id, group_id: group3.id)
Membership.create!(user_id: user5.id, group_id: group3.id)
Membership.create!(user_id: user6.id, group_id: group3.id)
Membership.create!(user_id: user7.id, group_id: group4.id)
Membership.create!(user_id: user1.id, group_id: group4.id)
Membership.create!(user_id: user3.id, group_id: group4.id)
Membership.create!(user_id: user4.id, group_id: group4.id)
Membership.create!(user_id: user5.id, group_id: group4.id)
Membership.create!(user_id: user6.id, group_id: group4.id)
Membership.create!(user_id: user7.id, group_id: group5.id)
Membership.create!(user_id: user1.id, group_id: group5.id)
Membership.create!(user_id: user3.id, group_id: group5.id)
Membership.create!(user_id: user4.id, group_id: group5.id)
Membership.create!(user_id: user5.id, group_id: group5.id)
Membership.create!(user_id: user6.id, group_id: group5.id)
Membership.create!(user_id: user7.id, group_id: group6.id)
Membership.create!(user_id: user1.id, group_id: group6.id)
Membership.create!(user_id: user3.id, group_id: group6.id)
Membership.create!(user_id: user4.id, group_id: group6.id)
Membership.create!(user_id: user5.id, group_id: group6.id)
Membership.create!(user_id: user6.id, group_id: group6.id)

Event.create!(name: "Evolution Conference", description: "The conference is the premier opportunity for the presentation and discussion of scientific research in all areas of evolutionary biology. It features numerous contributed talks (14 min. 'regular' and 5 min. 'lightning'), multiple society-selected symposia with invited speakers on specific themes, several poster sessions, and keynote addresses including from the Presidents of each society and one or more public outreach seminars. We welcome all people interested.", date: "2017-02-12", time: "2000-01-01 18:00:00", group_id: group1.id)
Event.create!(name: "Big Data Talks", description: "We will be talking about handling Big Data. We welcome all people interested.", date: "2017-01-24", time: "2000-01-01 18:00:00", group_id: group2.id)
Event.create!(name: "Deep Learning Summit", description: "Discover advances in deep learning algorithms and methods from the world's leading innovators. Learn from industry experts in speech & pattern recognition, neural networks, image analysis and NLP. Explore how deep learning will impact healthcare, manufacturing, search & transportation.", date: "2017-01-27", time: "2000-01-01 18:00:00", group_id: group2.id)
Event.create!(name: "Innovations in 2017", description: "We will be discussing the innovations of 2017. The topics we will be talking about includes ;
• Flexible hybrid electronics
• Emerging materials and devices for large-area electronics
• Energy harvesting and storage
• Bioelectronics for applications in healthcare
• Internet of Things and large-area electronic sensor technologies", date: "2017-01-27", time: "2000-01-01 18:00:00", group_id: group3.id)
Event.create!(name: "Young Researcher Workshop on Geometry, Mechanics, and Control", description: "Our goal is to bring together young researchers working in geometry, mechanics and control theory and to offer a platform to present the results of their research to an international audience.", date: "2017-01-24", time: "2000-01-01 18:00:00", group_id: group4.id)
Event.create!(name: "Model theory and applications", description: "This conference will be dedicated to model theory and its applications to algebra and other branches of mathematics. It will be the opportunity to review some lines of the subject as well as to focus on its recent developments. The panel of invited speakers reflects the large diversity of applications.", date: "2017-02-27", time: "2000-01-01 18:00:00", group_id: group4.id)
Event.create!(name: "Conference of Materials Chemistry", description: "The 'MC' conference series has provided a showcase for materials chemistry for two decades, and is the flagship event of the RSC's Materials Chemistry Division", date: "2017-01-24", time: "2000-01-01 18:00:00", group_id: group5.id)

Event.create!(name: "Ruby on Rails Tuesday", description: "We will be teaching Ruby on Rails and coding together. We welcome all levels.", date: "2017-01-24", time: "2000-01-01 18:00:00", group_id: group6.id)
Event.create!(name: "Javascript Friday", description: "We will be teaching Javascript and coding together. We welcome all levels.", date: "2017-01-27", time: "2000-01-01 18:00:00", group_id: group6.id)


Participation.create!(user_id: user1.id, event_id: 1)
Participation.create!(user_id: user2.id, event_id: 1)
Participation.create!(user_id: user3.id, event_id: 1)
Participation.create!(user_id: user4.id, event_id: 1)
Participation.create!(user_id: user5.id, event_id: 1)
Participation.create!(user_id: user6.id, event_id: 1)
Participation.create!(user_id: user7.id, event_id: 1)
Participation.create!(user_id: user1.id, event_id: 2)
Participation.create!(user_id: user2.id, event_id: 2)
Participation.create!(user_id: user3.id, event_id: 2)
Participation.create!(user_id: user4.id, event_id: 2)
Participation.create!(user_id: user5.id, event_id: 2)
Participation.create!(user_id: user6.id, event_id: 2)
Participation.create!(user_id: user7.id, event_id: 2)
Participation.create!(user_id: user1.id, event_id: 3)
Participation.create!(user_id: user2.id, event_id: 3)
Participation.create!(user_id: user3.id, event_id: 3)
Participation.create!(user_id: user4.id, event_id: 3)
Participation.create!(user_id: user5.id, event_id: 3)
Participation.create!(user_id: user2.id, event_id: 4)
Participation.create!(user_id: user3.id, event_id: 4)
Participation.create!(user_id: user1.id, event_id: 4)
Participation.create!(user_id: user5.id, event_id: 5)
Participation.create!(user_id: user6.id, event_id: 5)
Participation.create!(user_id: user7.id, event_id: 5)
Participation.create!(user_id: user1.id, event_id: 5)
Participation.create!(user_id: user5.id, event_id: 6)
Participation.create!(user_id: user6.id, event_id: 7)
Participation.create!(user_id: user7.id, event_id: 7)
Participation.create!(user_id: user1.id, event_id: 7)
Participation.create!(user_id: user4.id, event_id: 7)
