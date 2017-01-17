# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Group.find_by_title('Evolutionists').delete

Group.create(title: 'Evolutionists', description: 'Meet other local evolutionists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484632895/evolution-wide-wallpaper-20363_de3u4z.jpg")


Group.create(title: "Computer Scientists", description: "Meet other local computer scientists to discuss the latest news and theories.", city_name: "San Francisco", image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484353544/compsc_n2ryhb.png")


Group.create(title: 'Data Scientists', description: 'Meet other local data scientists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352124/Unknown-3_gtowm6.jpg")

Group.create(title: 'Physicists', description: 'Meet other local physicists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352214/images_ihqfsv.jpg")

Group.create(title: 'Mathematicians', description: 'Meet other local mathematicians to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484352296/mathematics_w0u4un.jpg")

Group.create(title: 'Chemists', description: 'Meet other local chemists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484353447/Unknown-5_jzila0.jpg")
