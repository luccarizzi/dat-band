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
                            ('Lakewood'); --23

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
                            ('Colorado'); --14

insert into "countries"     ("country")
values                      ('United States'), --1
                            ('Denmark'), --2
                            ('Brazil'), --3
                            ('Belgium'), --4
                            ('Germany'), --5
                            ('Canada'); --6

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
                            (23, 14);

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
                            (14, 1);

insert into "bands"         ("bandName", "debutYear", "cityId", "bandGenre", "bandImageUrl")
values                      ('Metallica', '1981', 1, 'Heavy Metal', 'https://consequenceofsound.net/wp-content/uploads/2020/06/Metallica-Zoom.jpg?quality=80'),
                            ('Megadeth', '1983', 1, 'Thrash Metal', 'https://www.udiscovermusic.com/wp-content/uploads/2020/02/Megadeth-2018-press-shot-web-optimised-1000.jpg');

insert into "albums"        ("albumTitle", "releaseYear", "recordLabel", "albumImageUrl")
values                      ('Kill `Em All', '1983', 'Megaforce Records', 'https://upload.wikimedia.org/wikipedia/en/5/5c/Metallica_-_Kill_%27Em_All_cover.jpg'),
                            ('Ride the Lightning','1984','Megaforce Records','https://upload.wikimedia.org/wikipedia/en/f/f4/Ridetl.png'),
                            ('Master of Puppets','1986','Elektra Records','https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg'),
                            ('Killing Is My Business... and Business Is Good!','1985','Combat Records','https://upload.wikimedia.org/wikipedia/en/5/54/Combat_KIMB.jpg'),
                            ('Peace Sells... but Who`s Buying?','1986','Capitol Records','https://upload.wikimedia.org/wikipedia/en/4/40/Megadeth_-_Peace_Sells..._But_Who%27s_Buying-.jpg'),
                            ('So Far, So Good... So What!','1988','Capitol Records','https://upload.wikimedia.org/wikipedia/en/7/7f/Megadeth-SoFar.jpg');

insert into "musicians"     ("musicianFirstName", "musicianLastName", "cityId", "dob", "musicianImageUrl")
values                      ('James','Hetfield', 2,'August 3, 1963','https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/James_Hetfield_2017.jpg/440px-James_Hetfield_2017.jpg'), --1
                            ('Kirk','Hammett', 3,'November 18, 1962','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Kirk_Hammett_2017.jpg/440px-Kirk_Hammett_2017.jpg'), --2
                            ('Robert','Trujillo', 4,'October 23, 1964','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Robert_Trujillo_2017.jpg/440px-Robert_Trujillo_2017.jpg'), --3
                            ('Lars','Ulrich', 5,'26 December 1963','https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/LarsUlrich.jpg/440px-LarsUlrich.jpg'), --4
                            ('Dave','Mustaine', 6,'September 13, 1961','https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Megadeth_performing_in_San_Antonio%2C_Texas_%2827420120171%29.jpg/440px-Megadeth_performing_in_San_Antonio%2C_Texas_%2827420120171%29.jpg'), --5
                            ('David','Ellefson', 7,'November 12, 1964','https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/David_Ellefson_%28cropped2%29.jpg/440px-David_Ellefson_%28cropped2%29.jpg'), --6
                            ('Kiko','Loureiro', 8,'June 16, 1972','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/KikoLoureiro2020.png/440px-KikoLoureiro2020.png'), --7
                            ('Dirk','Verbeuren', 9,'January 8, 1975','https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dirk_Verbeuren.jpg/440px-Dirk_Verbeuren.jpg'), --8
                            ('Ron','McGovney', 1, 'November 2, 1962','https://static.wikia.nocookie.net/metallica/images/5/5c/Ron.jpg/revision/latest/scale-to-width-down/340?cb=20151218231852'), --9
                            ('Cliff','Burton', 10, 'February 10, 1962','https://upload.wikimedia.org/wikipedia/en/0/0c/Bass_burton.jpg'), --10
                            ('Jason','Newsted', 11, 'March 4, 1963','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/13-06-09_RaR_Newsted_14.jpg/440px-13-06-09_RaR_Newsted_14.jpg'), --11
                            ('Gar','Samuelson', 12, 'February 18, 1958','https://lh3.googleusercontent.com/proxy/ejWQXz6_xdhe-p1DG3bI9js5bQLzlN9mmuAH1fxXAmIiSpRNf_CENIWvy-4WhUgGJSnEmT_IMJzQ_crY7j5zbC-hazFQ0T1Lq41KktM8Xg'), --12
                            ('Chris','Poland', 12, 'December 1, 1957','https://lastfm.freetls.fastly.net/i/u/770x0/58763eeddefea437033c71f247f1c2d9.jpg'), --13
                            ('Chuck','Behler', 13, 'June 13, 1965','https://upload.wikimedia.org/wikipedia/mk/d/da/Chuck_behler.jpg'), --14
                            ('Jeff','Young', 14, 'March 31, 1962','https://i.redd.it/phcwerwmrdp21.jpg'), --15
                            ('Nick','Menza', 15, 'July 23, 1964','https://upload.wikimedia.org/wikipedia/en/6/63/Nick_menza_photo.jpg'), --16
                            ('Marty','Friedman', 16, 'December 8, 1962','https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Marty_Friedman_in_Tokyo--2009-03.jpg/440px-Marty_Friedman_in_Tokyo--2009-03.jpg'), --17
                            ('Jimmy','DeGrasso', 17, 'March 16, 1963','https://www.innovativepercussion.com/docs/document_selector/images/atw2yzgr.jpg'), --18
                            ('Al','Pitrelli', 18, 'September 26, 1962','https://nafme.org/wp-content/uploads/2019/12/Al-Pitrelli-image-2.jpg'), --19
                            ('Shawn', 'Drover', 19, 'May 5, 1966', 'https://www.metal-archives.com/images/2/2/3/223_artist.jpg?4118'), --20
                            ('Glen','Drover', 20,'May 25, 1969','https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Glen_Drover_performing_in_Dubai_with_Megadeth_2005.jpg/440px-Glen_Drover_performing_in_Dubai_with_Megadeth_2005.jpg'), --21
                            ('James','MacDonough', 21,'April 3, 1970','https://lh3.googleusercontent.com/proxy/EnMbS42RsvvtEJY0IHxoxp7rbAGjujXpK02UjQuyh-HtoZQ4cByNOfOmeicdhbyItCD1dt1ab1HmN2Xlosk0vI18u-BzaFzRLDbnWTGOg7Zw8G2mK1_LOAFcBmCtS5r5GU0xzSFGZkLfkhGK1zWAFFQ'), --22
                            ('James','LoMenzo', 22,'January 13, 1959','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Metalmania_2008_Megadeth_James_LoMenzo_02.jpg/1200px-Metalmania_2008_Megadeth_James_LoMenzo_02.jpg'), --23
                            ('Chris','Broderick', 23,'March 6, 1970','https://i.pinimg.com/originals/0f/13/3c/0f133ca5ff8213aea4cf773d7d8ff38d.jpg'), --24
                            ('Chris','Adler', 16,'November 23, 1972','https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2015_RiP_Lamb_of_God_-_Chris_Adler_by_2eight_-_3SC5483.jpg/440px-2015_RiP_Lamb_of_God_-_Chris_Adler_by_2eight_-_3SC5483.jpg'); --25
                            -- ('','', ,'',''),

insert into "discography"   ("bandId", "albumId")
values                      (1, 1),
                            (1, 2),
                            (1, 3),
                            (2, 4),
                            (2, 5),
                            (2, 6);

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
                            (2, 25, false);

insert into "videos"        ("bandId", "videoUrl")
values                      (1, 'CD-E-LDc384'),
                            (1, 'iT6vqeL-ysI'),
                            (1, 'dHUHxTiPFUU'),
                            (2, '9d4ui9q7eDM'),
                            (2, 'aU-dKoFZT0A'),
                            (2, 'rUGIocJK9Tc');

insert into "carouselImages"("bandId","bandCarouselImageUrl")
values                      (1, 'https://consequenceofsound.net/wp-content/uploads/2020/06/Metallica-Zoom.jpg?quality=80'),
                            (1, 'https://pyxis.nymag.com/v1/imgs/230/936/cf8ba87fc19c621e6c915e6e99900adbb3-metallica-superlative.2x.rsocial.w600.jpg'),
                            (1, 'https://www.rollingstone.com/wp-content/uploads/2018/06/metallica-master-of-puppets-1986-f363473b-0ebc-4678-8fc6-5bb871d28c3d.jpg?resize=1800,1200&w=450'),
                            (2, 'https://www.udiscovermusic.com/wp-content/uploads/2020/02/Megadeth-2018-press-shot-web-optimised-1000.jpg'),
                            (2, 'https://megadeth.com/wp-content/themes/megadeth/assets/images/2017_0216_10330_5753.jpeg'),
                            (2, 'https://specials-images.forbesimg.com/imageserve/5f57ad29b488eaeabd9364e8/960x0.jpg?fit=scale');

insert into "personnel"     ("musicianId", "albumId")
values                      (1, 1),
                            (2, 1),
                            (4, 1),
                            (1, 2),
                            (2, 2),
                            (4, 2),
                            (1, 3),
                            (2, 3),
                            (4, 3),
                            (5, 4),
                            (6, 4),
                            (5, 5),
                            (6, 5),
                            (5, 6),
                            (6, 6);

insert into "genres"        ("genre")
values                      ('Thrash Metal'),
                            ('Heavy Metal');

insert into "albumGenre"    ("albumId","genreId")
values                      (1, 1),
                            (2, 2),
                            (3, 2),
                            (4, 1),
                            (5, 2),
                            (6, 2);

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
                            (6, 8, 'Hook in Mouth', '4:40');
