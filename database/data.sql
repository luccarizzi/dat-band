insert into "cities"        ("city")
values                      ('Los Angeles'),
                            ('Downey'),
                            ('San Francisco'),
                            ('Santa Monica'),
                            ('Gentofte'),
                            ('La Mesa'),
                            ('Jackson'),
                            ('Rio de Janeiro'),
                            ('Wilrijk');

insert into "states"        ("state")
values                      ('California'),
                            ('Capital Region'),
                            ('Minnesota'),
                            ('Rio de Janeiro'),
                            ('Antwerp');

insert into "countries"     ("country")
values                      ('United States'),
                            ('Denmark'),
                            ('Brazil'),
                            ('Belgium');

insert into "cityState"     ("cityId", "stateId")
values                      (1, 1),
                            (2, 1),
                            (3, 1),
                            (4, 1),
                            (5, 2),
                            (6, 1),
                            (7, 3),
                            (8, 4),
                            (9, 5);

insert into "stateCountry"  ("stateId", "countryId")
values                      (1, 1),
                            (2, 2),
                            (3, 1),
                            (4, 3),
                            (5, 4);

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
values                      ('James','Hetfield', 2,'August 3, 1963','https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/James_Hetfield_2017.jpg/440px-James_Hetfield_2017.jpg'),
                            ('Kirk','Hammett', 3,'November 18, 1962','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Kirk_Hammett_2017.jpg/440px-Kirk_Hammett_2017.jpg'),
                            ('Robert','Trujillo', 4,'October 23, 1964','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Robert_Trujillo_2017.jpg/440px-Robert_Trujillo_2017.jpg'),
                            ('Lars','Ulrich', 5,'26 December 1963','https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/LarsUlrich.jpg/440px-LarsUlrich.jpg'),
                            ('Dave','Mustaine', 6,'September 13, 1961','https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Megadeth_performing_in_San_Antonio%2C_Texas_%2827420120171%29.jpg/440px-Megadeth_performing_in_San_Antonio%2C_Texas_%2827420120171%29.jpg'),
                            ('David','Ellefson', 7,'November 12, 1964','https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/David_Ellefson_%28cropped2%29.jpg/440px-David_Ellefson_%28cropped2%29.jpg'),
                            ('Kiko','Loureiro', 8,'June 16, 1972','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/KikoLoureiro2020.png/440px-KikoLoureiro2020.png'),
                            ('Dirk','Verbeuren', 9,'January 8, 1975','https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dirk_Verbeuren.jpg/440px-Dirk_Verbeuren.jpg');

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
                            (2, 8, true);

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

insert into "genres"         ("genre")
values                      ('Thrash Metal'),
                            ('Heavy Metal');

insert into "albumGenre"    ("albumId","genreId")
values                      (1, 1),
                            (2, 2),
                            (3, 2),
                            (4, 1),
                            (5, 2),
                            (6, 2);

insert into "tracks"        ("albumId", "track", "duration")
values                      (1, 'Hit the Lights', '4:17'),
                            (1, 'The Four Horsemen', '7:13'),
                            (1, 'Motorbreath', '3:08'),
                            (1, 'Jump in the Fire', '4:42'),
                            (1, '(Anesthesia)—Pulling Teeth', '4:15'),
                            (1, 'Whiplash', '4:09'),
                            (1, 'Phantom Lord', '5:02'),
                            (1, 'No Remorse', '6:27'),
                            (1, 'Seek & Destroy', '6:56'),
                            (1, 'Metal Militia', '5:11'),
                            (2, 'Fight Fire with Fire', '4:44'),
                            (2, 'Ride the Lightning', '6:36'),
                            (2, 'For Whom the Bell Tolls', '5:10'),
                            (2, 'Fade to Black', '6:55'),
                            (2, 'Trapped Under Ice', '4:05'),
                            (2, 'Escape', '4:24'),
                            (2, 'Creeping Death', '6:35'),
                            (2, 'The Call of Ktulu', '8:53'),
                            (3, 'Battery', '5:13'),
                            (3, 'Master of Puppets', '8:36'),
                            (3, 'The Thing That Should Not Be', '6:36'),
                            (3, 'Welcome Home (Sanitarium)', '6:27'),
                            (3, 'Disposable Heroes', '8:17'),
                            (3, 'Leper Messiah', '5:40'),
                            (3, 'Orion', '8:27'),
                            (3, 'Damage, Inc.', '5:32'),
                            (4, 'Last Rites/Loved to Death', '4:38'),
                            (4, 'Killing Is My Business... and Business Is Good!', '3:05'),
                            (4, 'The Skull Beneath the Skin', '3:46'),
                            (4, 'These Boots', '3:44'),
                            (4, 'Rattlehead', '3:42'),
                            (4, 'Chosen Ones', '2:54'),
                            (4, 'Looking Down the Cross', '5:01'),
                            (4, 'Mechanix', '4:20'),
                            (5, 'Wake Up Dead', '3:40'),
                            (5, 'The Conjuring', '5:04'),
                            (5, 'Peace Sells', '4:04'),
                            (5, 'Devils Island', '5:05'),
                            (5, 'Good Mourning/Black Friday', '6:41'),
                            (5, 'Bad Omen', '4:05'),
                            (5, 'I Ain`t Superstitious', '2:46'),
                            (5, 'My Last Words', '4:57'),
                            (6, 'Into the Lungs of Hell', '3:29'),
                            (6, 'Set the World Afire', '5:48'),
                            (6, 'Anarchy in the U.K.', '3:00'),
                            (6, 'Mary Jane', '4:25'),
                            (6, '502', '3:28'),
                            (6, 'In My Darkest Hour', '6:16'),
                            (6, 'Liar', '3:20'),
                            (6, 'Hook in Mouth', '4:40');
