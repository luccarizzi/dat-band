insert into "cities"        ("city")
values                      ('Los Angeles'), --1
                            ('Downey'), --2
                            ('San Francisco'), --3
                            ('Santa Monica'), --4
                            ('Gentofte'), --5
                            ('La Mesa'), --6
                            ('Jackson'), --7
                            ('Rio de Janeiro'), --8
                            ('Wilrijk'), --9
                            ('Castro Valley'), --10
                            ('Battle Creek'), --11
                            ('Dunkirk'), --12
                            ('Livonia'), --13
                            ('Ann Arbor'), --14
                            ('Munich'), --15
                            ('Washington'), --16
                            ('Bethlehem'), --17
                            ('New York'), --18
                            ('Montreal'), --19
                            ('Ottawa'), --20
                            ('Jacksonville'), --21
                            ('Brooklyn'), --22
                            ('Lakewood'), --23
                            ('London'), --24
                            ('Leytonstone'), --25
                            ('Edmonton'), --26
                            ('Hackney'), --27
                            ('Worksop'), --28
                            ('Hartlepool'), --29
                            ('Chingford'), --30
                            ('East Ham'), --31
                            ('Birmingham'), --32
                            ('Lafayette'), --33
                            ('Seattle'), --34
                            ('Hampstead'), --35
                            ('Cleveland'), --36
                            ('Venice Beach'), --37
                            ('Pasadena'), --38
                            ('Amsterdam'), --39
                            ('Bloomington'), --40
                            ('Chicago'), --41
                            ('Liverpool'), --42
                            ('West Bromwich'), --43
                            ('Blackheath'), --44
                            ('Sutton Coldfield'), --45
                            ('Norfolk'); --46

insert into "states"        ("state")
values                      ('California'), --1
                            ('Capital Region'), --2
                            ('Minnesota'), --3
                            ('Rio de Janeiro'), --4
                            ('Antwerp'), --5
                            ('Michigan'), --6
                            ('New York'), --7
                            ('Bavaria'), --8
                            ('D.C.'), -- 9
                            ('Pennsylvania'), --10
                            ('Quebec'), --11
                            ('Ontario'), --12
                            ('Florida'), --13
                            ('Colorado'), --14
                            ('City of London'), --15
                            ('London'), --16
                            ('East Midlands'), --17
                            ('North East'), --18
                            ('West Midlands'), --19
                            ('Indiana'), --20
                            ('Washington'), --21
                            ('Ohio'), --22
                            ('North Holland'), --23
                            ('Illinois'), --24
                            ('North West'), --25
                            ('Virginia'); --26

insert into "countries"     ("country")
values                      ('United States'), --1
                            ('Denmark'), --2
                            ('Brazil'), --3
                            ('Belgium'), --4
                            ('Germany'), --5
                            ('Canada'), --6
                            ('England'), --7
                            ('Netherlands'); --8

insert into "cityState"     ("cityId", "stateId")
values                      (1, 1),
                            (2, 1),
                            (3, 1),
                            (4, 1),
                            (5, 2),
                            (6, 1),
                            (7, 3),
                            (8, 4),
                            (9, 5),
                            (10, 1),
                            (11, 6),
                            (12, 7),
                            (13, 6),
                            (14, 6),
                            (15, 8),
                            (16, 9),
                            (17, 10),
                            (18, 7),
                            (19, 11),
                            (20, 12),
                            (21, 13),
                            (22, 7),
                            (23, 14),
                            (24, 15),
                            (25, 16),
                            (26, 16),
                            (27, 16),
                            (28, 17),
                            (29, 18),
                            (30, 16),
                            (31, 16),
                            (32, 19),
                            (33, 20),
                            (34, 21),
                            (35, 16),
                            (36, 22),
                            (37, 1),
                            (38, 1),
                            (39, 23),
                            (40, 20),
                            (41, 24),
                            (42, 25),
                            (43, 19),
                            (44, 19),
                            (45, 19),
                            (46, 26);

insert into "stateCountry"  ("stateId", "countryId")
values                      (1, 1),
                            (2, 2),
                            (3, 1),
                            (4, 3),
                            (5, 4),
                            (6, 1),
                            (7, 1),
                            (8, 5),
                            (9, 1),
                            (10, 1),
                            (11, 6),
                            (12, 6),
                            (13, 1),
                            (14, 1),
                            (15, 7),
                            (16, 7),
                            (17, 7),
                            (18, 7),
                            (19, 7),
                            (20, 1),
                            (21, 1),
                            (22, 1),
                            (23, 8),
                            (24, 1),
                            (25, 7),
                            (26, 1);

insert into "bands"         ("bandName", "debutYear", "cityId", "bandGenre", "bandImageUrl")
values                      ('Metallica', '1981', 1, 'Thrash Metal', 'https://consequenceofsound.net/wp-content/uploads/2020/06/Metallica-Zoom.jpg?quality=80'), --1
                            ('Megadeth', '1983', 1, 'Thrash Metal', 'https://www.udiscovermusic.com/wp-content/uploads/2020/02/Megadeth-2018-press-shot-web-optimised-1000.jpg'), --2
                            ('Iron Maiden', '1975', 24, 'Heavy Metal', 'https://cdn.mos.cms.futurecdn.net/siHgwBd6RWtMx2jKX8cK9b.jpg'), --3
                            ('Guns N Roses', '1985', 1, 'Hard Rock', 'https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/e/18/e18b3352-e9a5-547c-9f1b-ae0c2bc1e3b3/5ef2daf83e12d.image.jpg?resize=1200%2C797'), --4
                            ('Van Halen', '1974', 38, 'Hard Rock', 'https://images-na.ssl-images-amazon.com/images/I/81mNAfWkJkL._AC_SL1500_.jpg'), --5
                            ('The Beatles', '1960', 42, 'Rock', 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-7349-20121003-beatles-1962-624x420-1349291947.jpg?resize=1800,1200&w=1800'), --6
                            ('Judas Priest', '1969', 32, 'Heavy Metal', 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6fcbc442-1e0b-11e8-95c3-8b5a448e6e58.jpg?crop=3032%2C2021%2C0%2C0'), --7
                            ('Black Sabbath', '1968', 32, 'Heavy Metal', 'https://cdn.mos.cms.futurecdn.net/QPotSyKUg6XcZ2qGih97km.jpg'); --8

insert into "albums"        ("albumTitle", "releaseYear", "recordLabel", "albumImageUrl")
values                      ('Kill `Em All', '1983', 'Megaforce Records', 'https://img.discogs.com/vzc_hGUuoEkf9x_83pyyeS5laDk=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-384613-1470347454-4183.jpeg.jpg'), --1
                            ('Ride the Lightning','1984','Megaforce Records','https://upload.wikimedia.org/wikipedia/en/f/f4/Ridetl.png'), --2
                            ('Master of Puppets','1986','Elektra Records','https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg'), --3
                            ('Killing Is My Business... and Business Is Good!','1985','Combat Records','https://upload.wikimedia.org/wikipedia/en/5/54/Combat_KIMB.jpg'), --4
                            ('Peace Sells... but Who`s Buying?','1986','Capitol Records','https://upload.wikimedia.org/wikipedia/en/4/40/Megadeth_-_Peace_Sells..._But_Who%27s_Buying-.jpg'), --5
                            ('So Far, So Good... So What!','1988','Capitol Records','https://upload.wikimedia.org/wikipedia/en/7/7f/Megadeth-SoFar.jpg'), --6
                            ('Iron Maiden', '1980', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/7/7c/Iron_Maiden_%28album%29_cover.jpg'), --7
                            ('Killers', '1981', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/b/b4/Iron_Maiden_Killers.jpg'), --8
                            ('The Number of the Beast', '1982', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/3/32/IronMaiden_NumberOfBeast.jpg'), --9
                            ('Piece of Mind', '1983', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/8/85/Iron_Maiden_-_Piece_Of_Mind.jpg'), --10
                            ('Powerslave', '1984', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/1/1c/Iron_Maiden_-_Powerslave.jpg'), --11
                            ('Somewhere in Time', '1986', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/9/9b/Iron_Maiden_-_Somewhere_in_Time.jpg'), --12
                            ('Seventh Son of a Seventh Son', '1988', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/c/c0/Iron_Maiden_-_Seventh_Son_Of_A_Seventh_Son.jpg'), --13
                            ('No Prayer for the Dying', '1990', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/5/5c/IronMaidenNoPrayerForTheDying.jpg'), --14
                            ('Fear of the Dark', '1992', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/e/eb/Iron_Maiden_-_Fear_Of_The_Dark.jpg'), --15
                            ('The X Factor', '1995', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/2/21/Iron_Maiden_-_The_X_Factor.jpg'), --16
                            ('Virtual XI', '1998', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/3/3a/Iron_Maiden_-_Virtual_XI.jpg'), --17
                            ('Brave New World', '2000', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/0/03/Iron_Maiden_-_Brave_New_World.jpg'), --18
                            ('Dance of Death', '2003', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/d/de/Iron_Maiden-Dance_of_Death.jpg'), --19
                            ('A Matter of Life and Death', '2006', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/7/77/Iron_Maiden_-_A_Matter_Of_Life_And_Death.jpg'), --20
                            ('The Final Frontier', '2010', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Final_Frontier_cover.jpg'), --21
                            ('The Book of Souls', '2015', 'Parlophone', 'https://upload.wikimedia.org/wikipedia/en/1/1b/Iron_Maiden_-_The_Book_of_Souls.png'), --22
                            ('Appetite for Destruction', '1987', 'Geffen Records', 'https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg'), --23
                            ('G N` R Lies', '1988', 'Geffen Records', 'https://upload.wikimedia.org/wikipedia/en/a/ad/GNR_GNRLies_Original.jpg'), --24
                            ('Van Halen', '1978', 'Warner Bros', 'https://upload.wikimedia.org/wikipedia/en/0/0d/Van_Halen_album.jpg'), --25
                            ('Van Halen II', '1979', 'Warner Bros', 'https://upload.wikimedia.org/wikipedia/en/3/35/Van_Halen_-_Van_Halen_II.jpg'), --26
                            ('Please Please Me', '1963', 'EMI', 'https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg'), --27
                            ('Screaming for Vengeance', '1982', 'Columbia', 'https://upload.wikimedia.org/wikipedia/en/4/45/Judas_Priest_SforV.jpg'), --28
                            ('Black Sabbath', '1970', 'Vertigo', 'https://upload.wikimedia.org/wikipedia/en/d/da/Black_Sabbath_debut_album.jpg'); --29

insert into "musicians"     ("musicianFirstName", "musicianLastName", "cityId", "dob", "musicianImageUrl")
values                      ('James','Hetfield', 2,'August 3, 1963','https://i.pinimg.com/originals/46/26/10/462610b50d7ec520a1fe945f463d0333.jpg'), --1
                            ('Kirk','Hammett', 3,'November 18, 1962','https://townsquare.media/site/366/files/2017/06/Metallica-Metlife-Loudwire-IMG-02.jpg?w=980&q=75'), --2
                            ('Robert','Trujillo', 4,'October 23, 1964','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Robert_Trujillo_2017.jpg/440px-Robert_Trujillo_2017.jpg'), --3
                            ('Lars','Ulrich', 5,'26 December 1963','https://i.pinimg.com/originals/7f/e2/d1/7fe2d10ef02e690b38b3b0bcf785d7d1.jpg'), --4
                            ('Dave','Mustaine', 6,'September 13, 1961','https://i.pinimg.com/originals/9d/f5/79/9df579e269c8b20e26c0d689e1200553.jpg'), --5
                            ('David','Ellefson', 7,'November 12, 1964','https://i.pinimg.com/originals/78/b0/e7/78b0e7d08428a7e47bfd05ff7b34cecf.jpg'), --6
                            ('Kiko','Loureiro', 8,'June 16, 1972','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/KikoLoureiro2020.png/440px-KikoLoureiro2020.png'), --7
                            ('Dirk','Verbeuren', 9,'January 8, 1975','https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dirk_Verbeuren.jpg/440px-Dirk_Verbeuren.jpg'), --8
                            ('Ron','McGovney', 1, 'November 2, 1962','https://pbs.twimg.com/media/DNmvNIUUQAAE12K.jpg'), --9
                            ('Cliff','Burton', 10, 'February 10, 1962','https://i.pinimg.com/originals/91/f6/47/91f6470537eda90bb198a1341946c392.jpg'), --10
                            ('Jason','Newsted', 11, 'March 4, 1963','https://i.pinimg.com/originals/49/4a/05/494a053405741c900e5b61d991f99265.jpg'), --11
                            ('Gar','Samuelson', 12, 'February 18, 1958','https://i.pinimg.com/originals/bc/37/22/bc3722ab733d5198b7d4fec1ad8adf47.jpg'), --12
                            ('Chris','Poland', 12, 'December 1, 1957','https://lastfm.freetls.fastly.net/i/u/770x0/58763eeddefea437033c71f247f1c2d9.jpg'), --13
                            ('Chuck','Behler', 13, 'June 13, 1965','https://upload.wikimedia.org/wikipedia/mk/d/da/Chuck_behler.jpg'), --14
                            ('Jeff','Young', 14, 'March 31, 1962','https://i.redd.it/phcwerwmrdp21.jpg'), --15
                            ('Nick','Menza', 15, 'July 23, 1964','https://64.media.tumblr.com/d24cc306df3475cd5ef0c058e5d121b7/c1094dac51243860-34/s640x960/4d31832b8e1053de38eb928a364d68f919f0addf.jpg'), --16
                            ('Marty','Friedman', 16, 'December 8, 1962','https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Marty_Friedman_in_Tokyo--2009-03.jpg/440px-Marty_Friedman_in_Tokyo--2009-03.jpg'), --17
                            ('Jimmy','DeGrasso', 17, 'March 16, 1963','https://www.innovativepercussion.com/docs/document_selector/images/atw2yzgr.jpg'), --18
                            ('Al','Pitrelli', 18, 'September 26, 1962','https://nafme.org/wp-content/uploads/2019/12/Al-Pitrelli-image-2.jpg'), --19
                            ('Shawn', 'Drover', 19, 'May 5, 1966', 'https://www.metal-archives.com/images/2/2/3/223_artist.jpg?4118'), --20
                            ('Glen','Drover', 20,'May 25, 1969','https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Glen_Drover_performing_in_Dubai_with_Megadeth_2005.jpg/440px-Glen_Drover_performing_in_Dubai_with_Megadeth_2005.jpg'), --21
                            ('James','MacDonough', 21,'April 3, 1970','http://img.over-blog-kiwi.com/0/93/85/50/20150331/ob_3d1296_james-macdonough-megadeth-03.jpg'), --22
                            ('James','LoMenzo', 22,'January 13, 1959','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Metalmania_2008_Megadeth_James_LoMenzo_02.jpg/1200px-Metalmania_2008_Megadeth_James_LoMenzo_02.jpg'), --23
                            ('Chris','Broderick', 23,'March 6, 1970','https://i.pinimg.com/originals/0f/13/3c/0f133ca5ff8213aea4cf773d7d8ff38d.jpg'), --24
                            ('Chris','Adler', 16,'November 23, 1972','https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2015_RiP_Lamb_of_God_-_Chris_Adler_by_2eight_-_3SC5483.jpg/440px-2015_RiP_Lamb_of_God_-_Chris_Adler_by_2eight_-_3SC5483.jpg'), --25
                            ('Steve','Harris', 25, 'March 12, 1956','https://i.imgur.com/97zjFdy.jpg'), --26
                            ('Dave','Murray', 26,'December 23, 1956','https://upload.wikimedia.org/wikipedia/commons/9/94/Davemurray.jpg'), --27
                            ('Adrian', 'Smith', 27, 'February 27, 1957', 'https://thehande.files.wordpress.com/2015/08/adrian-smith.jpg'), --28
                            ('Bruce', 'Dickinson', 28, 'August 7, 1958', 'https://i.pinimg.com/originals/8f/1d/df/8f1ddfd1ff4bc3d2f9f07fdb60cf2ca6.jpg'), --29
                            ('Nicko', 'McBrain', 27, 'June 5, 1952', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Nicko_McBrain_2.jpg'), --30
                            ('Janick', 'Gers', 29, 'January 27, 1957', 'https://www.metal-archives.com/images/1/1/9/119_artist.jpg?2159'), --31
                            ('Paul', 'Di`Anno', 30, 'May 17, 1958', 'https://i.pinimg.com/736x/18/db/fd/18dbfdabea8bb7c123fc2ffd6f447011--vintage-rock-paul-dianno.jpg'), --32
                            ('Clive', 'Burr', 31, 'March 8, 1957', 'https://townsquare.media/site/295/files/2013/03/Clive-Burr.jpg?w=980&q=75'), --33
                            ('Blaze', 'Bayley', 32, 'May 29, 1963', 'http://www.getreadytorock.com/reviews2008/blaze_bayley_gig08a.jpg'), --34
                            ('Dennis', 'Stratton', 24, 'October 9, 1952', 'http://3.bp.blogspot.com/-x5mNM1jHF_s/T-jMkUa4ioI/AAAAAAAAAlk/1g80NSPZPcg/s1600/dennis+live75.jpg'), --35
                            ('Axl', 'Rose', 33, 'February 6, 1962', 'https://i.pinimg.com/originals/99/a5/91/99a5912a0936b1ebff3e4b2f2de55dab.png'), --36
                            ('Duff', 'McKagan', 34, 'February 5, 1964', 'https://dyslexicrhetoric.files.wordpress.com/2009/02/duff02.jpg'), --37
                            ('Slash', '', 35, '23 July 1965', 'https://i.pinimg.com/originals/36/9c/e9/369ce9bf43c642dc711fba51ee1a13a3.jpg'), --38
                            ('Izzy', 'Stradlin', 33, 'April 8, 1962', 'http://images4.fanpop.com/image/photos/17300000/Izzy-izzy-stradlin-17342343-465-700.jpg'), --39
                            ('Steven', 'Adler', 36, 'January 22, 1965', 'https://i.pinimg.com/originals/9e/26/95/9e269503b4167323a794f6143be88d38.jpg'), --40
                            ('Matt', 'Sorum', 37, 'November 19, 1960', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOdA4YwlW3bj2n3se4yNkD_ZgvUWFwAn0aA&usqp=CAU'), --41
                            ('Eddie', 'Van Halen', 39, 'January 26, 1955', 'https://i.pinimg.com/originals/08/74/da/0874da1cdde99b5f12c6344e5a763cda.jpg'), --42
                            ('Alex', 'Van Halen', 39, 'May 8, 1953', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/alex-van-halen-fin-costello.jpg'), --43
                            ('David', 'Lee Roth', 40, 'October 10, 1954', 'https://i.pinimg.com/originals/e0/d1/ea/e0d1ea5db52474b950e2536c66bae46f.jpg'), --44
                            ('Michael', 'Anthony', 41, 'June 20, 1954', 'https://pbs.twimg.com/media/C-jurG5UIAAxhlu.jpg'), --45
                            ('John', 'Lennon', 42, 'October 8, 1940', 'https://cdn.britannica.com/01/136501-050-D9110414/John-Lennon.jpg'), --46
                            ('Paul', 'McCartney', 42, 'June 18, 1942', 'https://i.pinimg.com/originals/b3/c6/7e/b3c67e1b7bda67699025b694172d0469.jpg'), --47
                            ('George', 'Harrison', 42, 'February 25, 1943', 'https://i.pinimg.com/originals/b5/4e/8d/b54e8d80de64f1454251328e88650321.jpg'), --48
                            ('Ringo', 'Starr', 42, 'July 7, 1940', 'https://i.pinimg.com/originals/e7/11/0f/e7110f01dd7605f234c003a77b78107e.jpg'), --49
                            ('Ian', 'Hill', 43, 'January 20, 1952', 'https://townsquare.media/site/366/files/2015/04/Ian-Hill.jpg'), --50
                            ('Glenn', 'Tipton', 44, 'October 25, 1947', 'https://cdn.mos.cms.futurecdn.net/ruQZeYRT4umuwMWg2sqsBA.jpg'), --51
                            ('Rob', 'Halford', 45, 'August 25, 1951', 'https://www.nydailynews.com/resizer/l4wiBcq_buyVUTw9sJ_X77GTvik=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ULKLH7W6ZCS5M3GWCY2QWR57HU.jpg'), --52
                            ('Scott', 'Travis', 46, 'September 6, 1961', 'https://upload.wikimedia.org/wikipedia/commons/3/32/Scott_Travis2005.jpg'), --53
                            ('Richie', 'Faulkner', 24, 'January 1, 1980', 'https://i.pinimg.com/736x/ed/25/fc/ed25fc6964e87ca288f1cecab24db33d.jpg'), --54
                            ('Tommy', 'Iommi', 32, 'February 19, 1948', 'https://i.redd.it/9prgocmee8h01.jpg'), --55
                            ('Bill', 'Ward', 32, 'May 5, 1948', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/BillWardIn1970.png'), --56
                            ('Geezer', 'Butler', 32, 'July 17, 1949', 'https://upload.wikimedia.org/wikipedia/commons/3/36/2019_RiP_Deadland_Ritual_-_Geezer_Butler_-_by_2eight_-_8SC9785.jpg'), --57
                            ('Ozzy', 'Osbourne', 32, 'December 1948', 'https://i.ytimg.com/vi/I2CUfarP-P8/hqdefault.jpg'); --58

insert into "discography"   ("bandId", "albumId")
values                      (1, 1),
                            (1, 2),
                            (1, 3),
                            (2, 4),
                            (2, 5),
                            (2, 6),
                            (3, 7),
                            (3, 8),
                            (3, 9),
                            (3, 10),
                            (3, 11),
                            (3, 12),
                            (3, 13),
                            (3, 14),
                            (3, 15),
                            (3, 16),
                            (3, 17),
                            (3, 18),
                            (3, 19),
                            (3, 20),
                            (3, 21),
                            (3, 22),
                            (4, 23),
                            (4, 24),
                            (5, 25),
                            (5, 26),
                            (6, 27),
                            (7, 28),
                            (8, 29);

insert into "members"       ("bandId", "musicianId", "current")
values                      (1, 1, true),
                            (1, 2, true),
                            (1, 3, true),
                            (1, 4, true),
                            (1, 5, false),
                            (2, 5, true),
                            (2, 6, true),
                            (2, 7, true),
                            (2, 8, true),
                            (1, 9, false),
                            (1, 10, false),
                            (1, 11, false),
                            (2, 12, false),
                            (2, 13, false),
                            (2, 14, false),
                            (2, 15, false),
                            (2, 16, false),
                            (2, 17, false),
                            (2, 18, false),
                            (2, 19, false),
                            (2, 20, false),
                            (2, 21, false),
                            (2, 22, false),
                            (2, 23, false),
                            (2, 24, false),
                            (2, 25, false),
                            (3, 26, true),
                            (3, 27, true),
                            (3, 28, true),
                            (3, 29, true),
                            (3, 30, true),
                            (3, 31, true),
                            (3, 32, false),
                            (3, 33, false),
                            (3, 34, false),
                            (3, 35, false),
                            (4, 36, true),
                            (4, 37, true),
                            (4, 38, true),
                            (4, 39, false),
                            (4, 40, false),
                            (4, 41, false),
                            (5, 42, false),
                            (5, 43, false),
                            (5, 44, false),
                            (5, 45, false),
                            (6, 46, false),
                            (6, 47, false),
                            (6, 48, false),
                            (6, 49, false),
                            (7, 50, true),
                            (7, 51, true),
                            (7, 52, true),
                            (7, 53, true),
                            (7, 54, true),
                            (8, 55, false),
                            (8, 56, false),
                            (8, 57, false),
                            (8, 58, false);

insert into "videos"        ("bandId", "videoUrl")
values                      (1, 'CD-E-LDc384'),
                            (1, 'iT6vqeL-ysI'),
                            (1, 'dHUHxTiPFUU'),
                            (2, '9d4ui9q7eDM'),
                            (2, 'aU-dKoFZT0A'),
                            (2, 'rUGIocJK9Tc'),
                            (3, 'Xg9aQvjMS60'),
                            (3, 'p4w2BZXL6Ss'),
                            (3, 'WxnN05vOuSM'),
                            (4, '1w7OgIMMRc4'),
                            (4, 'o1tj2zJ2Wvg'),
                            (5, 'SwYN7mTi6HM'),
                            (5, 'fuKDBPw8wQA'),
                            (6, '2Q_ZzBGPdqE'),
                            (7, 'L397TWLwrUU'),
                            (7, 'nM__lPTWThU'),
                            (7, 'JhY9GOhFwN4'),
                            (8, '0qanF-91aJo'),
                            (8, 'hkXHsK4AQPs');


insert into "carouselImages"("bandId","bandCarouselImageUrl")
values                      (1, 'https://consequenceofsound.net/wp-content/uploads/2020/06/Metallica-Zoom.jpg?quality=80'),
                            (1, 'https://pyxis.nymag.com/v1/imgs/230/936/cf8ba87fc19c621e6c915e6e99900adbb3-metallica-superlative.2x.rsocial.w600.jpg'),
                            (1, 'https://www.rollingstone.com/wp-content/uploads/2018/06/metallica-master-of-puppets-1986-f363473b-0ebc-4678-8fc6-5bb871d28c3d.jpg?resize=1800,1200&w=450'),
                            (2, 'https://www.udiscovermusic.com/wp-content/uploads/2020/02/Megadeth-2018-press-shot-web-optimised-1000.jpg'),
                            (2, 'https://megadeth.com/wp-content/themes/megadeth/assets/images/2017_0216_10330_5753.jpeg'),
                            (2, 'https://specials-images.forbesimg.com/imageserve/5f57ad29b488eaeabd9364e8/960x0.jpg?fit=scale'),
                            (3, 'https://cdn.mos.cms.futurecdn.net/siHgwBd6RWtMx2jKX8cK9b.jpg'),
                            (3, 'https://list.lisimg.com/image/283947/500full.jpg'),
                            (3, 'https://static.billboard.com/files/media/iron-maiden-1988-billboard-1548-768x433.jpg'),
                            (4, 'https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/e/18/e18b3352-e9a5-547c-9f1b-ae0c2bc1e3b3/5ef2daf83e12d.image.jpg?resize=1200%2C797'),
                            (4, 'https://townsquare.media/site/295/files/2014/10/gnr-.jpg?w=980&q=75'),
                            (4, 'https://gis.scdn7.secure.raxcdn.com/mediaLibrary/images/english/5298.png'),
                            (5, 'https://images-na.ssl-images-amazon.com/images/I/81mNAfWkJkL._AC_SL1500_.jpg'),
                            (5, 'https://i.pinimg.com/originals/67/7b/b2/677bb2d458bce16287b8358ccf6c9880.jpg'),
                            (5, 'https://media.bizj.us/view/img/6256781/van-halen*750xx3713-2090-509-415.jpg'),
                            (6, 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-7349-20121003-beatles-1962-624x420-1349291947.jpg?resize=1800,1200&w=1800'),
                            (6, 'https://api.time.com/wp-content/uploads/2015/12/the-beatles2.jpg'),
                            (6, 'https://static.onecms.io/wp-content/uploads/sites/6/2018/07/gettyimages-74251316-2000.jpg'),
                            (7, 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6fcbc442-1e0b-11e8-95c3-8b5a448e6e58.jpg?crop=3032%2C2021%2C0%2C0'),
                            (7, 'https://cdn.mos.cms.futurecdn.net/ycQMYThLsqatrzrxrKwarb.jpg'),
                            (7, 'https://2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/judas-priest-press-crop-1480x832.jpg'),
                            (8, 'https://cdn.mos.cms.futurecdn.net/QPotSyKUg6XcZ2qGih97km.jpg'),
                            (8, 'http://bravewords.com/medias-static/images/news/2015/5675C42A-black-sabbath-ronnie-james-dio-era-to-be-featured-in-rock-n-roll-fantasy-camp-image.jpg'),
                            (8, 'https://www.nme.com/wp-content/uploads/2016/09/2012BlackSabbathPR300512-1.jpg');

insert into "personnel"     ("musicianId", "albumId")
values                      (1, 1),
                            (2, 1),
                            (4, 1),
                            (10, 1),
                            (1, 2),
                            (2, 2),
                            (4, 2),
                            (10, 2),
                            (1, 3),
                            (2, 3),
                            (4, 3),
                            (10, 3),
                            (5, 4),
                            (6, 4),
                            (12, 4),
                            (13, 4),
                            (5, 5),
                            (6, 5),
                            (12, 5),
                            (13, 5),
                            (5, 6),
                            (6, 6),
                            (14, 6),
                            (15, 6),
                            (26, 7),
                            (27, 7),
                            (32, 7),
                            (33, 7),
                            (35, 7),
                            (26, 8),
                            (27, 8),
                            (32, 8),
                            (33, 8),
                            (28, 8),
                            (26, 9),
                            (27, 9),
                            (28, 9),
                            (29, 9),
                            (33, 9),
                            (26, 10),
                            (27, 10),
                            (28, 10),
                            (29, 10),
                            (30, 10),
                            (26, 11),
                            (27, 11),
                            (28, 11),
                            (29, 11),
                            (30, 11),
                            (26, 12),
                            (27, 12),
                            (28, 12),
                            (29, 12),
                            (30, 12),
                            (26, 13),
                            (27, 13),
                            (28, 13),
                            (29, 13),
                            (30, 13),
                            (26, 14),
                            (27, 14),
                            (29, 14),
                            (30, 14),
                            (31, 14),
                            (26, 15),
                            (27, 15),
                            (29, 15),
                            (30, 15),
                            (31, 15),
                            (26, 16),
                            (27, 16),
                            (30, 16),
                            (31, 16),
                            (34, 16),
                            (26, 17),
                            (27, 17),
                            (30, 17),
                            (31, 17),
                            (34, 17),
                            (26, 18),
                            (27, 18),
                            (28, 18),
                            (29, 18),
                            (30, 18),
                            (31, 18),
                            (26, 19),
                            (27, 19),
                            (28, 19),
                            (29, 19),
                            (30, 19),
                            (31, 19),
                            (26, 20),
                            (27, 20),
                            (28, 20),
                            (29, 20),
                            (30, 20),
                            (31, 20),
                            (26, 21),
                            (27, 21),
                            (28, 21),
                            (29, 21),
                            (30, 21),
                            (31, 21),
                            (26, 22),
                            (27, 22),
                            (28, 22),
                            (29, 22),
                            (30, 22),
                            (31, 22),
                            (36, 23),
                            (37, 23),
                            (38, 23),
                            (39, 23),
                            (40, 23),
                            (36, 24),
                            (37, 24),
                            (38, 24),
                            (39, 24),
                            (40, 24),
                            (42, 25),
                            (43, 25),
                            (44, 25),
                            (45, 25),
                            (42, 26),
                            (43, 26),
                            (44, 26),
                            (45, 26),
                            (46, 27),
                            (47, 27),
                            (48, 27),
                            (49, 27),
                            (50, 28),
                            (51, 28),
                            (52, 28),
                            (55, 29),
                            (56, 29),
                            (57, 29),
                            (58, 29);

insert into "genres"        ("genre")
values                      ('Thrash Metal'), --1
                            ('Heavy Metal'), --2
                            ('Hard Rock'), --3
                            ('Rock'); --4

insert into "albumGenre"    ("albumId","genreId")
values                      (1, 1),
                            (2, 1),
                            (3, 1),
                            (4, 1),
                            (5, 1),
                            (6, 1),
                            (7, 2),
                            (8, 2),
                            (9, 2),
                            (10, 2),
                            (11, 2),
                            (12, 2),
                            (13, 2),
                            (14, 2),
                            (15, 2),
                            (16, 2),
                            (17, 2),
                            (18, 2),
                            (19, 2),
                            (20, 2),
                            (21, 2),
                            (22, 2),
                            (23, 3),
                            (24, 3),
                            (25, 3),
                            (26, 3),
                            (27, 4),
                            (28, 2),
                            (29, 2);

insert into "tracks"        ("albumId", "trackNo", "track", "length")
values                      (1, 1, 'Hit the Lights', '4:17'),
                            (1, 2, 'The Four Horsemen', '7:13'),
                            (1, 3, 'Motorbreath', '3:08'),
                            (1, 4, 'Jump in the Fire', '4:42'),
                            (1, 5, '(Anesthesia)—Pulling Teeth', '4:15'),
                            (1, 6, 'Whiplash', '4:09'),
                            (1, 7, 'Phantom Lord', '5:02'),
                            (1, 8, 'No Remorse', '6:27'),
                            (1, 9, 'Seek & Destroy', '6:56'),
                            (1, 10, 'Metal Militia', '5:11'),
                            (2, 1, 'Fight Fire with Fire', '4:44'),
                            (2, 2, 'Ride the Lightning', '6:36'),
                            (2, 3, 'For Whom the Bell Tolls', '5:10'),
                            (2, 4, 'Fade to Black', '6:55'),
                            (2, 5, 'Trapped Under Ice', '4:05'),
                            (2, 6, 'Escape', '4:24'),
                            (2, 7, 'Creeping Death', '6:35'),
                            (2, 8, 'The Call of Ktulu', '8:53'),
                            (3, 1, 'Battery', '5:13'),
                            (3, 2, 'Master of Puppets', '8:36'),
                            (3, 3, 'The Thing That Should Not Be', '6:36'),
                            (3, 4, 'Welcome Home (Sanitarium)', '6:27'),
                            (3, 5, 'Disposable Heroes', '8:17'),
                            (3, 5, 'Leper Messiah', '5:40'),
                            (3, 6, 'Orion', '8:27'),
                            (3, 7, 'Damage, Inc.', '5:32'),
                            (4, 1, 'Last Rites/Loved to Death', '4:38'),
                            (4, 2, 'Killing Is My Business... and Business Is Good!', '3:05'),
                            (4, 3, 'The Skull Beneath the Skin', '3:46'),
                            (4, 4, 'These Boots', '3:44'),
                            (4, 5, 'Rattlehead', '3:42'),
                            (4, 6, 'Chosen Ones', '2:54'),
                            (4, 7, 'Looking Down the Cross', '5:01'),
                            (4, 8, 'Mechanix', '4:20'),
                            (5, 1, 'Wake Up Dead', '3:40'),
                            (5, 2, 'The Conjuring', '5:04'),
                            (5, 3, 'Peace Sells', '4:04'),
                            (5, 4, 'Devils Island', '5:05'),
                            (5, 5, 'Good Mourning/Black Friday', '6:41'),
                            (5, 6, 'Bad Omen', '4:05'),
                            (5, 7, 'I Ain`t Superstitious', '2:46'),
                            (5, 8, 'My Last Words', '4:57'),
                            (6, 1, 'Into the Lungs of Hell', '3:29'),
                            (6, 2, 'Set the World Afire', '5:48'),
                            (6, 3, 'Anarchy in the U.K.', '3:00'),
                            (6, 4, 'Mary Jane', '4:25'),
                            (6, 5, '502', '3:28'),
                            (6, 6, 'In My Darkest Hour', '6:16'),
                            (6, 7, 'Liar', '3:20'),
                            (6, 8, 'Hook in Mouth', '4:40'),
                            (7, 1, 'Prowler', '3:56'),
                            (7, 2, 'Remember Tomorrow', '5:30'),
                            (7, 3, 'Running Free', '3:22'),
                            (7, 4, 'Phantom of the Opera', '7:02'),
                            (7, 5, 'Transylvania', '4:09'),
                            (7, 6, 'Strange World', '5:43'),
                            (7, 7, 'Charlotte the Harlot', '4:14'),
                            (7, 8, 'Iron Maiden', '3:43'),
                            (8, 1, 'The Ides of March', '1:48'),
                            (8, 2, 'Wrathchild', '2:54'),
                            (8, 3, 'Murders in the Rue Morgue', '4:14'),
                            (8, 4, 'Another Life', '3:22'),
                            (8, 5, 'Genghis Khan', '3:02'),
                            (8, 6, 'Innocent Exile', '3:50'),
                            (8, 7, 'Killers', '4:58'),
                            (8, 8, 'Prodigal Son', '6:05'),
                            (8, 9, 'Purgatory', '3:18'),
                            (8, 10, 'Drifter', '4:47'),
                            (9, 1, 'Invaders', '3:20'),
                            (9, 2, 'Children of the Damned', '4:34'),
                            (9, 3, 'The Prisoner', '5:34'),
                            (9, 4, '22 Acacia Avenue', '6:34'),
                            (9, 5, 'The Number of the Beast', '4:25'),
                            (9, 6, 'Run to the Hills', '3:50'),
                            (9, 7, 'Gangland', '3:46'),
                            (9, 8, 'Hallowed Be Thy Name', '7:08'),
                            (10, 1, 'Where Eagles Dare', '6:08'),
                            (10, 2, 'Revelations', '6:51'),
                            (10, 3, 'Flight of Icarus', '3:49'),
                            (10, 4, 'Die with Your Boots On', '5:22'),
                            (10, 5, 'The Trooper', '4:10'),
                            (10, 6, 'Still Life', '4:37'),
                            (10, 7, 'Quest for Fire', '3:40'),
                            (10, 8, 'Sun and Steel', '3:25'),
                            (10, 9, 'To Tame a Land', '7:26'),
                            (11, 1, 'Aces High', '4:31'),
                            (11, 2, '2 Minutes to Midnight', '6:04'),
                            (11, 3, 'Losfer Words (Big `Orra)', '4:15'),
                            (11, 4, 'Flash of the Blade', '4:05'),
                            (11, 5, 'The Duellists', '6:18'),
                            (11, 6, 'Back in the Village', '5:02'),
                            (11, 7, 'Powerslave', '7:12'),
                            (11, 8, 'Rime of the Ancient Mariner', '13:45'),
                            (12, 1, 'Caught Somewhere in Time', '7:22'),
                            (12, 2, 'Wasted Years', '5:06'),
                            (12, 3, 'Sea of Madness', '5:42'),
                            (12, 4, 'Heaven Can Wait', '7:24'),
                            (12, 5, 'The Loneliness of the Long Distance Runner', '6:31'),
                            (12, 6, 'Stranger in a Strange Land', '5:43'),
                            (12, 7, 'Deja-Vu', '4:55'),
                            (12, 8, 'Alexander the Great', '8:35'),
                            (13, 1, 'Moonchild', '5:38'),
                            (13, 2, 'Infinite Dreams', '6:08'),
                            (13, 3, 'Can I Play with Madness', '3:30'),
                            (13, 4, 'The Evil That Men Do', '4:33'),
                            (13, 5, 'Seventh Son of a Seventh Son', '9:52'),
                            (13, 6, 'The Prophecy', '5:04'),
                            (13, 7, 'The Clairvoyant', '4:26'),
                            (13, 8, 'Only the Good Die Young', '4:40'),
                            (14, 1, 'Tailgunner', '4:13'),
                            (14, 2, 'Holy Smoke', '3:47'),
                            (14, 3, 'No Prayer for the Dying', '4:22'),
                            (14, 4, 'Public Enema Number One', '4:03'),
                            (14, 5, 'Fates Warning', '4:09'),
                            (14, 6, 'The Assassin', '4:16'),
                            (14, 7, 'Run Silent Run Deep', '4:34'),
                            (14, 8, 'Hooks in You', '4:06'),
                            (14, 9, 'Bring Your Daughter... to the Slaughter', '4:42'),
                            (14, 10, 'Mother Russia', '5:30'),
                            (15, 1, 'Be Quick or Be Dead', '3:21'),
                            (15, 2, 'From Here to Eternity', '3:35'),
                            (15, 3, 'Afraid to Shoot Strangers', '6:52'),
                            (15, 4, 'Fear Is the Key', '5:30'),
                            (15, 5, 'Childhood`s End', '4:37'),
                            (15, 6, 'Wasting Love', '5:46'),
                            (15, 7, 'The Fugitive', '4:52'),
                            (15, 8, 'Chains of Misery', '3:33'),
                            (15, 9, 'The Apparition', '3:53'),
                            (15, 10, 'Judas Be My Guide', '3:06'),
                            (15, 11, 'Weekend Warrior', '5:37'),
                            (15, 12, 'Fear of the Dark', '7:16'),
                            (16, 1, 'Sign of the Cross', '11:16'),
                            (16, 2, 'Lord of the Flies', '5:02'),
                            (16, 3, 'Man on the Edge', '4:10'),
                            (16, 4, 'Fortunes of War', '7:25'),
                            (16, 5, 'Look for the Truth', '5:10'),
                            (16, 6, 'The Aftermath', '6:20'),
                            (16, 7, 'Judgement of Heaven', '5:10'),
                            (16, 8, 'Blood on the World`s Hands', '6:00'),
                            (16, 9, 'The Edge of Darkness', '6:39'),
                            (16, 10, '2 A.M.', '5:37'),
                            (16, 11, 'The Unbeliever', '8:05'),
                            (17, 1, 'Futureal', '3:00'),
                            (17, 2, 'The Angel and the Gambler', '9:51'),
                            (17, 3, 'Lightning Strikes Twice', '4:49'),
                            (17, 4, 'The Clansman', '9:06'),
                            (17, 5, 'When Two Worlds Collide', '6:13'),
                            (17, 6, 'The Educated Fool', '6:46'),
                            (17, 7, 'Don`t Look to the Eyes of a Stranger', '8:11'),
                            (17, 8, 'Como Estais Amigos', '5:26'),
                            (18, 1, 'The Wicker Man', '4:35'),
                            (18, 2, 'Ghost of the Navigator', '6:50'),
                            (18, 3, 'Brave New World', '6:18'),
                            (18, 4, 'Blood Brothers', '7:14'),
                            (18, 5, 'The Mercenary', '4:42'),
                            (18, 6, 'Dream of Mirrors', '9:21'),
                            (18, 7, 'The Fallen Angel', '4:00'),
                            (18, 8, 'The Nomad', '9:06'),
                            (18, 9, 'Out of the Silent Planet', '6:25'),
                            (18, 10, 'The Thin Line Between Love and Hate', '8:26'),
                            (19, 1, 'Wildest Dreams', '3:52'),
                            (19, 2, 'Rainmaker', '3:48'),
                            (19, 3, 'No More Lies', '7:21'),
                            (19, 4, 'Montségur', '5:50'),
                            (19, 5, 'Dance of Death', '8:36'),
                            (19, 6, 'Gates of Tomorrow', '5:12'),
                            (19, 7, 'New Frontier', '5:04'),
                            (19, 8, 'Paschendale', '8:27'),
                            (19, 9, 'Face in the Sand', '6:31'),
                            (19, 10, 'Age of Innocence', '6:10'),
                            (19, 11, 'Journeyman', '7:06'),
                            (20, 1, 'Different World', '4:17'),
                            (20, 2, 'These Colours Don`t Run', '6:52'),
                            (20, 3, 'Brighter Than a Thousand Suns', '8:44'),
                            (20, 4, 'The Pilgrim', '5:07'),
                            (20, 5, 'The Longest Day', '7:48'),
                            (20, 6, 'Out of the Shadows', '5:36'),
                            (20, 7, 'The Reincarnation of Benjamin Breeg', '7:21'),
                            (20, 8, 'For the Greater Good of God', '9:23'),
                            (20, 9, 'Lord of Light', '7:25'),
                            (20, 10, 'The Legacy', '9:20'),
                            (21, 1, 'Satellite 15... The Final Frontier', '8:40'),
                            (21, 2, 'El Dorado', '6:49'),
                            (21, 3, 'Mother of Mercy', '5:20'),
                            (21, 4, 'Coming Home', '5:52'),
                            (21, 5, 'The Alchemist', '4:29'),
                            (21, 6, 'Isle of Avalon', '9:06'),
                            (21, 7, 'Starblind', '7:48'),
                            (21, 8, 'The Talisman', '9:03'),
                            (21, 9, 'The Man Who Would Be King', '8:28'),
                            (21, 10, 'When the Wild Wind Blows', '10:59'),
                            (22, 1, 'If Eternity Should Fail', '8:28'),
                            (22, 2, 'Speed of Light', '5:01'),
                            (22, 3, 'The Great Unknown', '6:37'),
                            (22, 4, 'The Red and the Black', '13:33'),
                            (22, 5, 'When the River Runs Deep', '5:52'),
                            (22, 6, 'The Book of Souls', '10:27'),
                            (22, 7, 'Death or Glory', '5:13'),
                            (22, 8, 'Shadows of the Valley', '7:32'),
                            (22, 9, 'Tears of a Clown', '4:59'),
                            (22, 10, 'The Man of Sorrows', '6:28'),
                            (22, 11, 'Empire of the Clouds', '18:01'),
                            (23, 1, 'Welcome to the Jungle', '4:31'),
                            (23, 2, 'It`s So Easy', '3:21'),
                            (23, 3, 'Nightrain', '4:26'),
                            (23, 4, 'Out ta Get Me', '4:20'),
                            (23, 5, 'Mr. Brownstone', '3:46'),
                            (23, 6, 'Paradise City', '6:46'),
                            (23, 7, 'My Michelle', '3:39'),
                            (23, 8, 'Think About You', '3:50'),
                            (23, 9, 'Sweet Child o` Mine', '5:55'),
                            (23, 10, 'You`re Crazy', '3:16'),
                            (23, 11, 'Anything Goes"', '3:25'),
                            (23, 12, 'Rocket Queen', '6:13'),
                            (24, 1, 'Reckless Life', '3:23'),
                            (24, 2, 'Nice Boys', '3:01'),
                            (24, 3, 'Move to the City', '3:42'),
                            (24, 4, 'Mama Kin', '3:57'),
                            (24, 5, 'Patience', '5:56'),
                            (24, 6, 'Used to Love Her', '3:13'),
                            (24, 7, 'You`re Crazy', '4:10'),
                            (24, 8, 'One in a Million', '6:09'),
                            (25, 1, 'Runnin` with the Devil', '3:36'),
                            (25, 2, 'Eruption', '1:42'),
                            (25, 3, 'You Really Got Me', '2:38'),
                            (25, 4, 'Ain`t Talkin` `bout Love', '3:50'),
                            (25, 5, 'I`m the One', '3:47'),
                            (25, 6, 'Jamie`s Cryin', '3:31'),
                            (25, 7, 'Atomic Punk', '3:02'),
                            (25, 8, 'Feel Your Love Tonight', '3:43'),
                            (25, 9, 'Little Dreamer', '3:23'),
                            (25, 10, 'Ice Cream Man', '3:20'),
                            (25, 11, 'On Fire', '3:01'),
                            (26, 1, 'You`re No Good', '3:16'),
                            (26, 2, 'Dance the Night Away', '3:06'),
                            (26, 3, 'Somebody Get Me a Doctor', '2:52'),
                            (26, 4, 'Bottoms Up!', '3:05'),
                            (26, 5, 'Outta Love Again', '2:51'),
                            (26, 6, 'Light Up the Sky', '3:13'),
                            (26, 7, 'Spanish Fly', '1:00'),
                            (26, 8, 'D.O.A.', '4:09'),
                            (26, 9, 'Women in Love...', '4:08'),
                            (26, 10, 'Beautiful Girls', '3:56'),
                            (27, 1, 'I Saw Her Standing There', '2:55'),
                            (27, 2, 'Misery', '1:49'),
                            (27, 3, 'Anna (Go to Him)', '2:55'),
                            (27, 4, 'Chains', '2:23'),
                            (27, 5, 'Boys', '2:24'),
                            (27, 6, 'Ask Me Why', '2:24'),
                            (27, 7, 'Please Please Me', '1:59'),
                            (27, 8, 'Love Me Do', '2:21'),
                            (27, 9, 'P.S. I Love You', '2:04'),
                            (27, 10, 'Baby It`s You', '2:40'),
                            (27, 11, 'Do You Want to Know a Secret', '1:56'),
                            (27, 12, 'A Taste of Honey', '2:03'),
                            (27, 13, 'There`s a Place', '1:51'),
                            (27, 14, 'Twist and Shout', '2:32'),
                            (28, 1, 'The Hellion', '0:41'),
                            (28, 2, 'Electric Eye', '3:39'),
                            (28, 3, 'Riding on the Wind', '3:07'),
                            (28, 4, 'Bloodstone', '3:51'),
                            (28, 5, '(Take These) Chains', '3:07'),
                            (28, 6, 'Pain and Pleasure', '4:17'),
                            (28, 7, 'Screaming for Vengeance', '4:43'),
                            (28, 8, 'You`ve Got Another Thing Comin`', '	5:09'),
                            (28, 9, 'Fever', '5:20'),
                            (28, 10, 'Devil`s Child', '4:48'),
                            (29, 1, 'Black Sabbath', '6:20'),
                            (29, 2, 'The Wizard', '4:24'),
                            (29, 3, 'Behind the Wall of Sleep', '3:37'),
                            (29, 4, 'N.I.B.', '6:08'),
                            (29, 5, 'Evil Woman', '3:25'),
                            (29, 6, 'Sleeping Village', '3:46'),
                            (29, 7, 'Warning', '10:28');
