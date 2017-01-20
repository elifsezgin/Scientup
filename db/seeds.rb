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
EventHosting.destroy_all

group1 = Group.create!(title: "Computer Scientists", description: "Computer science is the study of the theory, experimentation, and engineering that form the basis for the design and use of computers. It is the scientific and practical approach to computation and its applications and the systematic study of the feasibility, structure, expression, and mechanization of the methodical procedures (or algorithms) that underlie the acquisition, representation, processing, storage, communication of, and access to information. An alternate, more succinct definition of computer science is the study of automating algorithmic processes that scale. A computer scientist specializes in the theory of computation and the design of computational systems.
Join us to meet other local computer scientists. All levels are welcomed.", city_name: "San Francisco", image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484353544/compsc_n2ryhb.png")

group2 = Group.create!(title: 'Evolutionists', description: 'Evolutionism was a common 19th century belief that organisms inherently improve themselves through progressive inherited change over time, and increase in complexity through evolution. The belief went on to include cultural evolution and social evolution. In the 1970s the term Neo-Evolutionism was used to describe the idea "that human beings sought to preserve a familiar style of life unless change was forced on them by factors that were beyond their control".
Meet other local evolutionists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484632895/evolution-wide-wallpaper-20363_de3u4z.jpg")

group3 = Group.create!(title: 'Bioinformaticians', description: 'Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data. As an interdisciplinary field of science, bioinformatics combines computer science, statistics, mathematics, and engineering to analyze and interpret biological data. Bioinformatics has been used for in silico analyses of biological queries using mathematical and statistical techniques. Join us to meet other local bioinformaticians. All levels are welcomed.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484353334/Unknown-4_zgxs42.jpg")

group4 = Group.create!(title: 'Geneticists', description: 'Genetics is the study of genes, genetic variation, and heredity in living organisms. It is generally considered a field of biology, but intersects frequently with many other life sciences and is strongly linked with the study of information systems.
Trait inheritance and molecular inheritance mechanisms of genes are still primary principles of genetics in the 21st century, but modern genetics has expanded beyond inheritance to studying the function and behavior of genes. Gene structure and function, variation, and distribution are studied within the context of the cell, the organism (e.g. dominance), and within the context of a population. Genetics has given rise to a number of sub-fields, including epigenetics and population genetics. Organisms studied within the broad field span the domain of life, including bacteria, plants, animals, and humans.
Join us to meet other local geneticists. All levels are welcomed.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484353117/genetics-at-work2_hzyzrf.jpg")

group5 = Group.create!(title: 'Astronomists', description: "Astronomy is a natural science that studies celestial objects and phenomena. It applies mathematics, physics, and chemistry, in an effort to explain the origin of those objects and phenomena and their evolution. Objects of interest include planets, moons, stars, galaxies, and comets; while the phenomena include supernovae explosions, gamma ray bursts, and cosmic microwave background radiation. More generally, all astronomical phenomena that originate outside Earth's atmosphere are within the purview of astronomy. A related but distinct subject, physical cosmology, is concerned with the study of the Universe as a whole.
Meet other local astronomists to discuss the latest news and theories.", city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484902582/nue8nu3otjo-nasa_kg2tsg.jpg")

group6 = Group.create!(title: 'Cosmologists', description: 'Cosmology is the study of the origin, evolution, and eventual fate of the universe. Physical cosmology is the scholarly and scientific study of the origin, large-scale structures and dynamics, and ultimate fate of the universe, as well as the scientific laws that govern these realities.
Meet other local cosmologists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484902642/isyylt2rkac-thom-schneider_kbat1j.jpg")

group7 = Group.create!(title: 'Data Scientists', description: 'Data science, also known as data-driven science, is an interdisciplinary field about scientific processes and systems to extract knowledge or insights from data in various forms, either structured or unstructured, which is a continuation of some of the data analysis fields such as statistics, machine learning, data mining, and predictive analytics, similar to Knowledge Discovery in Databases (KDD).
Meet other local data scientists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484760850/68zlatavyio-markus-spiske_hdmbmc.jpg")

group8 = Group.create!(title: 'Physicists', description: 'Physics is the natural science that involves the study of matter and its motion and behavior through space and time, along with related concepts such as energy and force. One of the most fundamental scientific disciplines, the main goal of physics is to understand how the universe behaves.
Meet other local physicists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484761264/pod5oldjqmq-sidney-perry_nv6hug.jpg")

group9 = Group.create!(title: 'Mathematicians', description: 'Mathematics is the study of topics such as quantity (numbers), structure, space, and change. There is a range of views among mathematicians and philosophers as to the exact scope and definition of mathematics.
Meet other local mathematicians to discuss theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484902947/AAEAAQAAAAAAAAUgAAAAJDlkZjBjNTVjLTVjYjAtNDgwZS05Y2FmLWRlNzdmMWY4YWVhMA_a9xmaa.jpg")

group10 = Group.create!(title: 'Chemists', description: 'Chemistry is a branch of physical science that studies the composition, structure, properties and change of matter. Chemistry includes topics such as the properties of individual atoms, how atoms form chemical bonds to create chemical compounds, the interactions of substances through intermolecular forces that give matter its general properties, and the interactions between substances through chemical reactions to form different substances.
Meet other local chemists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484942952/periodic-table-1626299_1280_g9bjvb.png")

group11 = Group.create!(title: 'Astrophysicists', description: 'Astrophysics is the branch of astronomy that employs the principles of physics and chemistry "to ascertain the nature of the heavenly bodies, rather than their positions or motions in space." Among the objects studied are the Sun, other stars, galaxies, extrasolar planets, the interstellar medium and the cosmic microwave background. Their emissions are examined across all parts of the electromagnetic spectrum, and the properties examined include luminosity, density, temperature, and chemical composition. Because astrophysics is a very broad subject, astrophysicists typically apply many disciplines of physics, including mechanics, electromagnetism, statistical mechanics, thermodynamics, quantum mechanics, relativity, nuclear and particle physics, and atomic and molecular physics.
Meet other local astrophysicists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484943196/exoplanet-571900_1280_x1hrph.jpg")

group12 = Group.create!(title: 'Biochemists', description: 'Biochemistry, sometimes called biological chemistry, is the study of chemical processes within and relating to living organisms. By controlling information flow through biochemical signaling and the flow of chemical energy through metabolism, biochemical processes give rise to the complexity of life. Over the last decades of the 20th century, biochemistry has become so successful at explaining living processes that now almost all areas of the life sciences from botany to medicine to genetics are engaged in biochemical research. Today, the main focus of pure biochemistry is on understanding how biological molecules give rise to the processes that occur within living cells, which in turn relates greatly to the study and understanding of tissues, organs, and whole organisms—that is, all of biology.
Meet other local biochemists to discuss the latest news and theories.', city_name: 'San Francisco', image_url: "http://res.cloudinary.com/datsbxfvs/image/upload/v1484943446/download_su01jr.jpg")




user1 = User.create!(username: 'Guest', email: 'guest@email.com', password:'password')
user2 = User.create!(username: 'Kendall', email: 'kendall@email.com', password:'password')
user3 = User.create!(username: 'Anton', email: 'anton@email.com', password:'password')
user4 = User.create!(username: 'Riaz', email: 'riaz@email.com', password:'password')
user5 = User.create!(username: 'Nilam', email: 'nilam@email.com', password:'password')
user6 = User.create!(username: 'Mattithiah', email: 'mattithiah@email.com', password:'password')
user7 = User.create!(username: 'Daminus', email: 'daminus@email.com', password:'password')
user8 = User.create!(username: 'Gael', email: 'gael@email.com', password:'password')
user9 = User.create!(username: 'Ken', email: 'ken@email.com', password:'password')
user10 = User.create!(username: 'Antony', email: 'antony@email.com', password:'password')
user11 = User.create!(username: 'Riza', email: 'riza@email.com', password:'password')
user12 = User.create!(username: 'Neil', email: 'neil@email.com', password:'password')
user13 = User.create!(username: 'Matt', email: 'matt@email.com', password:'password')
user14 = User.create!(username: 'Daniel', email: 'daniel@email.com', password:'password')
user15 = User.create!(username: 'Hugh', email: 'hugh@email.com', password:'password')
user16 = User.create!(username: 'Rachel', email: 'rachel@email.com', password:'password')
user17 = User.create!(username: 'John', email: 'john@email.com', password:'password')
user18 = User.create!(username: 'Marc', email: 'marc@email.com', password:'password')
user19 = User.create!(username: 'Claire', email: 'claire@email.com', password:'password')
user20 = User.create!(username: 'Charlene', email: 'charlene@email.com', password:'password')
user21 = User.create!(username: 'Brad', email: 'brad@email.com', password:'password')
user22 = User.create!(username: 'Jack', email: 'jack@email.com', password:'password')
user23 = User.create!(username: 'Chloe', email: 'chloe@email.com', password:'password')
user24 = User.create!(username: 'Hakan', email: 'hakan@email.com', password:'password')
user25 = User.create!(username: 'Alara', email: 'alara@email.com', password:'password')
user26 = User.create!(username: 'Arel', email: 'arel@email.com', password:'password')
user27 = User.create!(username: 'Aron', email: 'aron@email.com', password:'password')
user28 = User.create!(username: 'Berk', email: 'berk@email.com', password:'password')
user29 = User.create!(username: 'Jess', email: 'jess@email.com', password:'password')
user30 = User.create!(username: 'Scotch', email: 'scotch@email.com', password:'password')


Organization.create!(user_id: user2.id, group_id: group1.id)
Organization.create!(user_id: user12.id, group_id: group1.id)
Organization.create!(user_id: user1.id, group_id: group1.id)
Organization.create!(user_id: user3.id, group_id: group2.id)
Organization.create!(user_id: user13.id, group_id: group2.id)
Organization.create!(user_id: user23.id, group_id: group2.id)
Organization.create!(user_id: user4.id, group_id: group3.id)
Organization.create!(user_id: user1.id, group_id: group3.id)
Organization.create!(user_id: user15.id, group_id: group4.id)
Organization.create!(user_id: user5.id, group_id: group4.id)
Organization.create!(user_id: user1.id, group_id: group4.id)
Organization.create!(user_id: user6.id, group_id: group5.id)
Organization.create!(user_id: user7.id, group_id: group6.id)
Organization.create!(user_id: user17.id, group_id: group6.id)
Organization.create!(user_id: user27.id, group_id: group6.id)
Organization.create!(user_id: user21.id, group_id: group6.id)
Organization.create!(user_id: user2.id, group_id: group7.id)
Organization.create!(user_id: user1.id, group_id: group7.id)
Organization.create!(user_id: user3.id, group_id: group8.id)
Organization.create!(user_id: user4.id, group_id: group9.id)
Organization.create!(user_id: user25.id, group_id: group10.id)
Organization.create!(user_id: user14.id, group_id: group11.id)
Organization.create!(user_id: user30.id, group_id: group12.id)



Membership.create!(user_id: user1.id, group_id: group1.id)
Membership.create!(user_id: user2.id, group_id: group1.id)
Membership.create!(user_id: user3.id, group_id: group1.id)
Membership.create!(user_id: user4.id, group_id: group1.id)
Membership.create!(user_id: user5.id, group_id: group1.id)
Membership.create!(user_id: user6.id, group_id: group1.id)
Membership.create!(user_id: user11.id, group_id: group1.id)
Membership.create!(user_id: user12.id, group_id: group1.id)
Membership.create!(user_id: user13.id, group_id: group1.id)
Membership.create!(user_id: user14.id, group_id: group1.id)
Membership.create!(user_id: user15.id, group_id: group1.id)
Membership.create!(user_id: user16.id, group_id: group1.id)
Membership.create!(user_id: user21.id, group_id: group1.id)
Membership.create!(user_id: user22.id, group_id: group1.id)
Membership.create!(user_id: user23.id, group_id: group1.id)
Membership.create!(user_id: user24.id, group_id: group1.id)
Membership.create!(user_id: user25.id, group_id: group1.id)
Membership.create!(user_id: user26.id, group_id: group1.id)
Membership.create!(user_id: user1.id, group_id: group2.id)
Membership.create!(user_id: user3.id, group_id: group2.id)
Membership.create!(user_id: user4.id, group_id: group2.id)
Membership.create!(user_id: user5.id, group_id: group2.id)
Membership.create!(user_id: user6.id, group_id: group2.id)
Membership.create!(user_id: user8.id, group_id: group2.id)
Membership.create!(user_id: user9.id, group_id: group2.id)
Membership.create!(user_id: user17.id, group_id: group2.id)
Membership.create!(user_id: user18.id, group_id: group2.id)
Membership.create!(user_id: user25.id, group_id: group2.id)
Membership.create!(user_id: user26.id, group_id: group2.id)
Membership.create!(user_id: user30.id, group_id: group2.id)
Membership.create!(user_id: user1.id, group_id: group3.id)
Membership.create!(user_id: user2.id, group_id: group3.id)
Membership.create!(user_id: user3.id, group_id: group3.id)
Membership.create!(user_id: user4.id, group_id: group3.id)
Membership.create!(user_id: user5.id, group_id: group3.id)
Membership.create!(user_id: user6.id, group_id: group3.id)
Membership.create!(user_id: user11.id, group_id: group3.id)
Membership.create!(user_id: user12.id, group_id: group3.id)
Membership.create!(user_id: user13.id, group_id: group3.id)
Membership.create!(user_id: user14.id, group_id: group3.id)
Membership.create!(user_id: user15.id, group_id: group3.id)
Membership.create!(user_id: user16.id, group_id: group3.id)
Membership.create!(user_id: user17.id, group_id: group3.id)
Membership.create!(user_id: user21.id, group_id: group3.id)
Membership.create!(user_id: user22.id, group_id: group3.id)
Membership.create!(user_id: user23.id, group_id: group3.id)
Membership.create!(user_id: user24.id, group_id: group3.id)
Membership.create!(user_id: user25.id, group_id: group3.id)
Membership.create!(user_id: user26.id, group_id: group3.id)
Membership.create!(user_id: user1.id, group_id: group4.id)
Membership.create!(user_id: user3.id, group_id: group4.id)
Membership.create!(user_id: user4.id, group_id: group4.id)
Membership.create!(user_id: user5.id, group_id: group4.id)
Membership.create!(user_id: user6.id, group_id: group4.id)
Membership.create!(user_id: user11.id, group_id: group4.id)
Membership.create!(user_id: user12.id, group_id: group4.id)
Membership.create!(user_id: user13.id, group_id: group4.id)
Membership.create!(user_id: user14.id, group_id: group4.id)
Membership.create!(user_id: user15.id, group_id: group4.id)
Membership.create!(user_id: user16.id, group_id: group4.id)
Membership.create!(user_id: user21.id, group_id: group4.id)
Membership.create!(user_id: user22.id, group_id: group4.id)
Membership.create!(user_id: user23.id, group_id: group4.id)
Membership.create!(user_id: user24.id, group_id: group4.id)
Membership.create!(user_id: user25.id, group_id: group4.id)
Membership.create!(user_id: user26.id, group_id: group4.id)
Membership.create!(user_id: user1.id, group_id: group5.id)
Membership.create!(user_id: user2.id, group_id: group5.id)
Membership.create!(user_id: user3.id, group_id: group5.id)
Membership.create!(user_id: user4.id, group_id: group5.id)
Membership.create!(user_id: user5.id, group_id: group5.id)
Membership.create!(user_id: user6.id, group_id: group5.id)
Membership.create!(user_id: user7.id, group_id: group5.id)
Membership.create!(user_id: user8.id, group_id: group5.id)
Membership.create!(user_id: user9.id, group_id: group5.id)
Membership.create!(user_id: user14.id, group_id: group5.id)
Membership.create!(user_id: user15.id, group_id: group5.id)
Membership.create!(user_id: user16.id, group_id: group5.id)
Membership.create!(user_id: user17.id, group_id: group5.id)
Membership.create!(user_id: user21.id, group_id: group5.id)
Membership.create!(user_id: user13.id, group_id: group5.id)
Membership.create!(user_id: user1.id, group_id: group6.id)
Membership.create!(user_id: user2.id, group_id: group6.id)
Membership.create!(user_id: user3.id, group_id: group6.id)
Membership.create!(user_id: user4.id, group_id: group6.id)
Membership.create!(user_id: user5.id, group_id: group6.id)
Membership.create!(user_id: user6.id, group_id: group6.id)
Membership.create!(user_id: user7.id, group_id: group6.id)
Membership.create!(user_id: user8.id, group_id: group6.id)
Membership.create!(user_id: user9.id, group_id: group6.id)
Membership.create!(user_id: user11.id, group_id: group6.id)
Membership.create!(user_id: user12.id, group_id: group6.id)
Membership.create!(user_id: user13.id, group_id: group6.id)
Membership.create!(user_id: user14.id, group_id: group6.id)
Membership.create!(user_id: user15.id, group_id: group6.id)
Membership.create!(user_id: user16.id, group_id: group6.id)
Membership.create!(user_id: user17.id, group_id: group6.id)
Membership.create!(user_id: user18.id, group_id: group6.id)
Membership.create!(user_id: user19.id, group_id: group6.id)
Membership.create!(user_id: user21.id, group_id: group6.id)
Membership.create!(user_id: user22.id, group_id: group6.id)
Membership.create!(user_id: user23.id, group_id: group6.id)
Membership.create!(user_id: user24.id, group_id: group6.id)
Membership.create!(user_id: user25.id, group_id: group6.id)
Membership.create!(user_id: user26.id, group_id: group6.id)
Membership.create!(user_id: user27.id, group_id: group6.id)
Membership.create!(user_id: user28.id, group_id: group6.id)
Membership.create!(user_id: user29.id, group_id: group6.id)
Membership.create!(user_id: user1.id, group_id: group7.id)
Membership.create!(user_id: user2.id, group_id: group7.id)
Membership.create!(user_id: user3.id, group_id: group7.id)
Membership.create!(user_id: user4.id, group_id: group7.id)
Membership.create!(user_id: user5.id, group_id: group7.id)
Membership.create!(user_id: user6.id, group_id: group7.id)
Membership.create!(user_id: user11.id, group_id: group7.id)
Membership.create!(user_id: user12.id, group_id: group7.id)
Membership.create!(user_id: user13.id, group_id: group7.id)
Membership.create!(user_id: user14.id, group_id: group7.id)
Membership.create!(user_id: user15.id, group_id: group7.id)
Membership.create!(user_id: user16.id, group_id: group7.id)
Membership.create!(user_id: user21.id, group_id: group7.id)
Membership.create!(user_id: user22.id, group_id: group7.id)
Membership.create!(user_id: user23.id, group_id: group7.id)
Membership.create!(user_id: user24.id, group_id: group7.id)
Membership.create!(user_id: user25.id, group_id: group7.id)
Membership.create!(user_id: user26.id, group_id: group7.id)
Membership.create!(user_id: user1.id, group_id: group8.id)
Membership.create!(user_id: user3.id, group_id: group8.id)
Membership.create!(user_id: user4.id, group_id: group8.id)
Membership.create!(user_id: user5.id, group_id: group8.id)
Membership.create!(user_id: user6.id, group_id: group8.id)
Membership.create!(user_id: user8.id, group_id: group8.id)
Membership.create!(user_id: user9.id, group_id: group8.id)
Membership.create!(user_id: user17.id, group_id: group8.id)
Membership.create!(user_id: user18.id, group_id: group8.id)
Membership.create!(user_id: user25.id, group_id: group8.id)
Membership.create!(user_id: user26.id, group_id: group8.id)
Membership.create!(user_id: user30.id, group_id: group8.id)
Membership.create!(user_id: user1.id, group_id: group9.id)
Membership.create!(user_id: user2.id, group_id: group9.id)
Membership.create!(user_id: user3.id, group_id: group9.id)
Membership.create!(user_id: user4.id, group_id: group9.id)
Membership.create!(user_id: user5.id, group_id: group9.id)
Membership.create!(user_id: user6.id, group_id: group9.id)
Membership.create!(user_id: user11.id, group_id: group9.id)
Membership.create!(user_id: user12.id, group_id: group9.id)
Membership.create!(user_id: user13.id, group_id: group9.id)
Membership.create!(user_id: user14.id, group_id: group9.id)
Membership.create!(user_id: user15.id, group_id: group9.id)
Membership.create!(user_id: user16.id, group_id: group9.id)
Membership.create!(user_id: user17.id, group_id: group9.id)
Membership.create!(user_id: user21.id, group_id: group9.id)
Membership.create!(user_id: user22.id, group_id: group9.id)
Membership.create!(user_id: user23.id, group_id: group9.id)
Membership.create!(user_id: user24.id, group_id: group9.id)
Membership.create!(user_id: user25.id, group_id: group9.id)
Membership.create!(user_id: user26.id, group_id: group9.id)
Membership.create!(user_id: user1.id, group_id: group10.id)
Membership.create!(user_id: user3.id, group_id: group10.id)
Membership.create!(user_id: user4.id, group_id: group10.id)
Membership.create!(user_id: user5.id, group_id: group10.id)
Membership.create!(user_id: user6.id, group_id: group10.id)
Membership.create!(user_id: user11.id, group_id: group10.id)
Membership.create!(user_id: user12.id, group_id: group10.id)
Membership.create!(user_id: user13.id, group_id: group10.id)
Membership.create!(user_id: user14.id, group_id: group10.id)
Membership.create!(user_id: user15.id, group_id: group10.id)
Membership.create!(user_id: user16.id, group_id: group10.id)
Membership.create!(user_id: user21.id, group_id: group10.id)
Membership.create!(user_id: user22.id, group_id: group10.id)
Membership.create!(user_id: user23.id, group_id: group10.id)
Membership.create!(user_id: user24.id, group_id: group10.id)
Membership.create!(user_id: user25.id, group_id: group10.id)
Membership.create!(user_id: user26.id, group_id: group10.id)
Membership.create!(user_id: user1.id, group_id: group11.id)
Membership.create!(user_id: user2.id, group_id: group11.id)
Membership.create!(user_id: user3.id, group_id: group11.id)
Membership.create!(user_id: user4.id, group_id: group11.id)
Membership.create!(user_id: user5.id, group_id: group11.id)
Membership.create!(user_id: user6.id, group_id: group11.id)
Membership.create!(user_id: user7.id, group_id: group11.id)
Membership.create!(user_id: user8.id, group_id: group11.id)
Membership.create!(user_id: user9.id, group_id: group11.id)
Membership.create!(user_id: user14.id, group_id: group11.id)
Membership.create!(user_id: user15.id, group_id: group11.id)
Membership.create!(user_id: user16.id, group_id: group11.id)
Membership.create!(user_id: user17.id, group_id: group11.id)
Membership.create!(user_id: user21.id, group_id: group11.id)
Membership.create!(user_id: user13.id, group_id: group11.id)
Membership.create!(user_id: user2.id, group_id: group12.id)
Membership.create!(user_id: user3.id, group_id: group12.id)
Membership.create!(user_id: user4.id, group_id: group12.id)
Membership.create!(user_id: user5.id, group_id: group12.id)
Membership.create!(user_id: user6.id, group_id: group12.id)
Membership.create!(user_id: user7.id, group_id: group12.id)
Membership.create!(user_id: user8.id, group_id: group12.id)
Membership.create!(user_id: user9.id, group_id: group12.id)
Membership.create!(user_id: user11.id, group_id: group12.id)
Membership.create!(user_id: user12.id, group_id: group12.id)
Membership.create!(user_id: user13.id, group_id: group12.id)
Membership.create!(user_id: user14.id, group_id: group12.id)
Membership.create!(user_id: user15.id, group_id: group12.id)
Membership.create!(user_id: user16.id, group_id: group12.id)
Membership.create!(user_id: user17.id, group_id: group12.id)
Membership.create!(user_id: user18.id, group_id: group12.id)
Membership.create!(user_id: user19.id, group_id: group12.id)
Membership.create!(user_id: user21.id, group_id: group12.id)
Membership.create!(user_id: user22.id, group_id: group12.id)
Membership.create!(user_id: user23.id, group_id: group12.id)
Membership.create!(user_id: user24.id, group_id: group12.id)
Membership.create!(user_id: user25.id, group_id: group12.id)
Membership.create!(user_id: user26.id, group_id: group12.id)
Membership.create!(user_id: user27.id, group_id: group12.id)
Membership.create!(user_id: user28.id, group_id: group12.id)
Membership.create!(user_id: user29.id, group_id: group12.id)


event1 = Event.create!(
name: "Evolution Conference Part 1",
description: "The conference is the premier opportunity for the presentation and discussion of scientific research in all areas of evolutionary biology. It features numerous contributed talks (14 min. 'regular' and 5 min. 'lightning'), multiple society-selected symposia with invited speakers on specific themes, several poster sessions, and keynote addresses including from the Presidents of each society and one or more public outreach seminars. We welcome all people interested.",
date: "2017-02-12",
time: "2000-01-01 18:00:00",
lat: 37.792231,
lng: -122.397562,
address: '298 Market Street',
group_id: group2.id)

event2 = Event.create!(
name: "Big Data Talks",
description: "We will be talking about handling Big Data. We welcome all people interested.",
date: "2017-01-24",
time: "2000-01-01 18:00:00",
lat: 37.798268,
lng: -122.403377,
address: '371 Broadway',
group_id: group7.id)
event3 = Event.create!(
name: "Deep Learning Summit", description: "Discover advances in deep learning algorithms and methods from the world's leading innovators. Learn from industry experts in speech & pattern recognition, neural networks, image analysis and NLP. Explore how deep learning will impact healthcare, manufacturing, search & transportation.",
date: "2017-01-27",
time: "2000-01-01 18:00:00",
lat: 37.794516,
lng: -122.411393,
address: '1199 Mason Street',
group_id: group7.id)
event4 = Event.create!(
name: "Innovations in 2017",
description: "We will be discussing the innovations of 2017. The topics we will be talking about includes ;
• Flexible hybrid electronics
• Emerging materials and devices for large-area electronics
• Energy harvesting and storage
• Bioelectronics for applications in healthcare
• Internet of Things and large-area electronic sensor technologies",
date: "2017-01-27",
time: "2000-01-01 18:00:00",
lat: 37.787901,
lng: -122.4291201,
address: '1814 Bush Street',
group_id: group8.id)
event5 = Event.create!(
name: "Young Researcher Workshop on Geometry, Mechanics, and Control",
description: "Our goal is to bring together young researchers working in geometry, mechanics and control theory and to offer a platform to present the results of their research to an international audience.",
date: "2017-01-24",
time: "2000-01-01 18:00:00",
lat: 37.794516,
lng: -122.411393,
address: '1199 Mason Street',
group_id: group9.id)
event6 = Event.create!(
name: "Model theory and applications",
description: "This conference will be dedicated to model theory and its applications to algebra and other branches of mathematics. It will be the opportunity to review some lines of the subject as well as to focus on its recent developments. The panel of invited speakers reflects the large diversity of applications.",
date: "2017-02-27",
time: "2000-01-01 18:00:00",
lat: 37.787901,
lng: -122.4291201,
address: '1814 Bush Street',
group_id: group9.id)

event7 = Event.create!(
name: "Conference of Materials Chemistry",
description: "The 'MC' conference series has provided a showcase for materials chemistry for two decades, and is the flagship event of the RSC's Materials Chemistry Division",
date: "2017-01-24",
time: "2000-01-01 18:00:00",
lat: 37.798268,
lng: -122.403377,
address: '371 Broadway',
group_id: group10.id)

event8 = Event.create!(
name: "Ruby on Rails Tuesday",
description: "We will be teaching Ruby on Rails and coding together. We welcome all levels.",
date: "2017-01-24",
time: "2000-01-01 18:00:00",
lat: 37.792231,
lng: -122.397562,
address: '298 Market Street',
group_id: group1.id)

event9 = Event.create!(
name: "Javascript Friday",
description: "We will be teaching Javascript and coding together. We welcome all levels.",
date: "2017-01-27",
time: "2000-01-01 18:00:00",
lat: 37.794516,
lng: -122.411393,
address: '1199 Mason Street',
group_id: group1.id)

event10 = Event.create!(
name: "React Thursday",
description: "We will be teaching React and coding together. We welcome all levels.",
date: "2017-01-07",
time: "2000-01-01 18:00:00",
lat: 37.794516,
lng: -122.411393,
address: '1199 Mason Street',
group_id: group1.id)

# BURADA KALDIM

event11 = Event.create!(
name: "Evolution Conference Part 2",
description: "The conference is the premier opportunity for the presentation and discussion of scientific research in all areas of evolutionary biology. It features numerous contributed talks (14 min. 'regular' and 5 min. 'lightning'), multiple society-selected symposia with invited speakers on specific themes, several poster sessions, and keynote addresses including from the Presidents of each society and one or more public outreach seminars. We welcome all people interested.",
date: "2017-03-12",
time: "2000-01-01 18:00:00",
lat: 37.792231,
lng: -122.397562,
address: '298 Market Street',
group_id: group2.id)


event12 = Event.create!(
name: "Next Generation Sequencing Analysis",
description: "Next generation sequencing (NGS), massively parallel or deep sequencing are related terms that describe a DNA sequencing technology which has revolutionised genomic research. Using NGS an entire human genome can be sequenced within a single day. In contrast, the previous Sanger sequencing technology, used to decipher the human genome, required over a decade to deliver the final draft. Although in genome research NGS has mostly superseded conventional Sanger sequencing, it has not yet translated into routine clinical practice. We will be talking about handling NGS analysis. We welcome all people interested.",
date: "2017-01-24",
time: "2000-01-01 18:00:00",
lat: 37.7690861,
lng: -122.4467702,
address: 'Ashbury St, San Francisco, CA 94117, USA',
group_id: group3.id)

event13 = Event.create!(
name: "Drosophila Open Lab", description: "We will be hosting our first open lab, we welcome all genetics students that are interested in fly labs.",
date: "2017-02-27",
time: "2000-01-01 18:00:00",
lat: 37.424105999999999,
lng: -122.1660756,
address: 'Stanford, CA, USA',
group_id: group4.id)




EventHosting.create!(user_id: user1.id, event_id: event1.id)
EventHosting.create!(user_id: user2.id, event_id: event2.id)
EventHosting.create!(user_id: user4.id, event_id: event3.id)
EventHosting.create!(user_id: user3.id, event_id: event4.id)
EventHosting.create!(user_id: user3.id, event_id: event5.id)
EventHosting.create!(user_id: user17.id, event_id: event6.id)
EventHosting.create!(user_id: user16.id, event_id: event7.id)
EventHosting.create!(user_id: user1.id, event_id: event8.id)
EventHosting.create!(user_id: user1.id, event_id: event9.id)
EventHosting.create!(user_id: user1.id, event_id: event10.id)
EventHosting.create!(user_id: user17.id, event_id: event11.id)
EventHosting.create!(user_id: user15.id, event_id: event12.id)
EventHosting.create!(user_id: user23.id, event_id: event13.id)



Participation.create!(user_id: user1.id, event_id: event1.id)
Participation.create!(user_id: user2.id, event_id: event1.id)
Participation.create!(user_id: user3.id, event_id: event1.id)
Participation.create!(user_id: user4.id, event_id: event1.id)
Participation.create!(user_id: user5.id, event_id: event1.id)
Participation.create!(user_id: user6.id, event_id: event1.id)
Participation.create!(user_id: user7.id, event_id: event1.id)
Participation.create!(user_id: user1.id, event_id: event2.id)
Participation.create!(user_id: user2.id, event_id: event2.id)
Participation.create!(user_id: user3.id, event_id: event2.id)
Participation.create!(user_id: user4.id, event_id: event2.id)
Participation.create!(user_id: user5.id, event_id: event2.id)
Participation.create!(user_id: user6.id, event_id: event2.id)
Participation.create!(user_id: user7.id, event_id: event2.id)
Participation.create!(user_id: user1.id, event_id: event3.id)
Participation.create!(user_id: user2.id, event_id: event3.id)
Participation.create!(user_id: user3.id, event_id: event3.id)
Participation.create!(user_id: user4.id, event_id: event3.id)
Participation.create!(user_id: user5.id, event_id: event3.id)
Participation.create!(user_id: user2.id, event_id: event4.id)
Participation.create!(user_id: user3.id, event_id: event4.id)
Participation.create!(user_id: user1.id, event_id: event4.id)
Participation.create!(user_id: user5.id, event_id: event5.id)
Participation.create!(user_id: user6.id, event_id: event5.id)
Participation.create!(user_id: user7.id, event_id: event5.id)
Participation.create!(user_id: user1.id, event_id: event5.id)
Participation.create!(user_id: user5.id, event_id: event6.id)
Participation.create!(user_id: user6.id, event_id: event7.id)
Participation.create!(user_id: user7.id, event_id: event7.id)
Participation.create!(user_id: user1.id, event_id: event7.id)
Participation.create!(user_id: user4.id, event_id: event7.id)


Participation.create!(user_id: user1.id, event_id: event8.id)
Participation.create!(user_id: user2.id, event_id: event8.id)
Participation.create!(user_id: user3.id, event_id: event8.id)
Participation.create!(user_id: user4.id, event_id: event8.id)
Participation.create!(user_id: user5.id, event_id: event8.id)
Participation.create!(user_id: user6.id, event_id: event8.id)
Participation.create!(user_id: user7.id, event_id: event8.id)
Participation.create!(user_id: user11.id, event_id: event8.id)
Participation.create!(user_id: user12.id, event_id: event8.id)
Participation.create!(user_id: user13.id, event_id: event8.id)
Participation.create!(user_id: user14.id, event_id: event8.id)
Participation.create!(user_id: user15.id, event_id: event8.id)
Participation.create!(user_id: user16.id, event_id: event8.id)
Participation.create!(user_id: user17.id, event_id: event8.id)
Participation.create!(user_id: user21.id, event_id: event8.id)
Participation.create!(user_id: user22.id, event_id: event8.id)
Participation.create!(user_id: user23.id, event_id: event8.id)
Participation.create!(user_id: user24.id, event_id: event8.id)
Participation.create!(user_id: user25.id, event_id: event8.id)
Participation.create!(user_id: user26.id, event_id: event8.id)
Participation.create!(user_id: user27.id, event_id: event8.id)
Participation.create!(user_id: user1.id, event_id: event9.id)
Participation.create!(user_id: user2.id, event_id: event9.id)
Participation.create!(user_id: user3.id, event_id: event9.id)
Participation.create!(user_id: user4.id, event_id: event9.id)
Participation.create!(user_id: user5.id, event_id: event9.id)
Participation.create!(user_id: user6.id, event_id: event9.id)
Participation.create!(user_id: user7.id, event_id: event9.id)
Participation.create!(user_id: user11.id, event_id: event9.id)
Participation.create!(user_id: user12.id, event_id: event9.id)
Participation.create!(user_id: user13.id, event_id: event9.id)
Participation.create!(user_id: user14.id, event_id: event9.id)
Participation.create!(user_id: user15.id, event_id: event9.id)
Participation.create!(user_id: user16.id, event_id: event9.id)
Participation.create!(user_id: user17.id, event_id: event9.id)
Participation.create!(user_id: user21.id, event_id: event9.id)
Participation.create!(user_id: user22.id, event_id: event9.id)
Participation.create!(user_id: user23.id, event_id: event9.id)
Participation.create!(user_id: user24.id, event_id: event9.id)
Participation.create!(user_id: user25.id, event_id: event9.id)
Participation.create!(user_id: user26.id, event_id: event9.id)
Participation.create!(user_id: user27.id, event_id: event9.id)


Participation.create!(user_id: user1.id, event_id: event10.id)
Participation.create!(user_id: user2.id, event_id: event10.id)
Participation.create!(user_id: user3.id, event_id: event10.id)
Participation.create!(user_id: user4.id, event_id: event10.id)
Participation.create!(user_id: user5.id, event_id: event10.id)
Participation.create!(user_id: user6.id, event_id: event10.id)
Participation.create!(user_id: user7.id, event_id: event10.id)
Participation.create!(user_id: user11.id, event_id: event10.id)
Participation.create!(user_id: user12.id, event_id: event10.id)
Participation.create!(user_id: user13.id, event_id: event10.id)
Participation.create!(user_id: user14.id, event_id: event10.id)
Participation.create!(user_id: user15.id, event_id: event10.id)
Participation.create!(user_id: user16.id, event_id: event10.id)
Participation.create!(user_id: user17.id, event_id: event10.id)
Participation.create!(user_id: user21.id, event_id: event10.id)
Participation.create!(user_id: user22.id, event_id: event10.id)
Participation.create!(user_id: user23.id, event_id: event10.id)
Participation.create!(user_id: user24.id, event_id: event10.id)
Participation.create!(user_id: user25.id, event_id: event10.id)
Participation.create!(user_id: user26.id, event_id: event10.id)
Participation.create!(user_id: user27.id, event_id: event10.id)
Participation.create!(user_id: user1.id, event_id: event11.id)
Participation.create!(user_id: user2.id, event_id: event11.id)
Participation.create!(user_id: user3.id, event_id: event11.id)
Participation.create!(user_id: user4.id, event_id: event11.id)
Participation.create!(user_id: user5.id, event_id: event11.id)
Participation.create!(user_id: user6.id, event_id: event11.id)
Participation.create!(user_id: user7.id, event_id: event11.id)
Participation.create!(user_id: user11.id, event_id: event11.id)
Participation.create!(user_id: user12.id, event_id: event11.id)
Participation.create!(user_id: user13.id, event_id: event11.id)
Participation.create!(user_id: user14.id, event_id: event11.id)
Participation.create!(user_id: user15.id, event_id: event11.id)
Participation.create!(user_id: user16.id, event_id: event11.id)
Participation.create!(user_id: user17.id, event_id: event11.id)
Participation.create!(user_id: user21.id, event_id: event11.id)
Participation.create!(user_id: user22.id, event_id: event11.id)
Participation.create!(user_id: user23.id, event_id: event11.id)
Participation.create!(user_id: user24.id, event_id: event11.id)
Participation.create!(user_id: user25.id, event_id: event11.id)
Participation.create!(user_id: user26.id, event_id: event11.id)
Participation.create!(user_id: user27.id, event_id: event11.id)
Participation.create!(user_id: user1.id, event_id: event12.id)
Participation.create!(user_id: user2.id, event_id: event12.id)
Participation.create!(user_id: user3.id, event_id: event12.id)
Participation.create!(user_id: user4.id, event_id: event12.id)
Participation.create!(user_id: user5.id, event_id: event12.id)
Participation.create!(user_id: user6.id, event_id: event12.id)
Participation.create!(user_id: user7.id, event_id: event12.id)
Participation.create!(user_id: user11.id, event_id: event12.id)
Participation.create!(user_id: user12.id, event_id: event12.id)
Participation.create!(user_id: user13.id, event_id: event12.id)
Participation.create!(user_id: user14.id, event_id: event12.id)
Participation.create!(user_id: user15.id, event_id: event12.id)
Participation.create!(user_id: user16.id, event_id: event12.id)
Participation.create!(user_id: user17.id, event_id: event12.id)
Participation.create!(user_id: user21.id, event_id: event12.id)
Participation.create!(user_id: user22.id, event_id: event12.id)
Participation.create!(user_id: user23.id, event_id: event12.id)
Participation.create!(user_id: user24.id, event_id: event12.id)
Participation.create!(user_id: user25.id, event_id: event12.id)
Participation.create!(user_id: user26.id, event_id: event12.id)
Participation.create!(user_id: user27.id, event_id: event12.id)
Participation.create!(user_id: user1.id, event_id: event13.id)
Participation.create!(user_id: user2.id, event_id: event13.id)
Participation.create!(user_id: user3.id, event_id: event13.id)
Participation.create!(user_id: user4.id, event_id: event13.id)
Participation.create!(user_id: user5.id, event_id: event13.id)
Participation.create!(user_id: user6.id, event_id: event13.id)
Participation.create!(user_id: user7.id, event_id: event13.id)
Participation.create!(user_id: user11.id, event_id: event13.id)
Participation.create!(user_id: user12.id, event_id: event13.id)
Participation.create!(user_id: user13.id, event_id: event13.id)
Participation.create!(user_id: user14.id, event_id: event13.id)
Participation.create!(user_id: user15.id, event_id: event13.id)
Participation.create!(user_id: user16.id, event_id: event13.id)
Participation.create!(user_id: user17.id, event_id: event13.id)
Participation.create!(user_id: user21.id, event_id: event13.id)
Participation.create!(user_id: user22.id, event_id: event13.id)
Participation.create!(user_id: user23.id, event_id: event13.id)
Participation.create!(user_id: user24.id, event_id: event13.id)
Participation.create!(user_id: user25.id, event_id: event13.id)
Participation.create!(user_id: user26.id, event_id: event13.id)
Participation.create!(user_id: user27.id, event_id: event13.id)
