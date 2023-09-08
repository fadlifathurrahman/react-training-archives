DROP DATABASE `caruban_tourism`;
CREATE DATABASE `caruban_tourism`;
USE `caruban_tourism`;


DROP TABLE IF EXISTS `additional_place_image`;
CREATE TABLE `additional_place_image` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `image_1` TEXT,
  `image_2` TEXT,
  `image_3` TEXT,
  `image_4` TEXT,
  PRIMARY KEY (`id`)
);
INSERT  INTO `additional_place_image`(`id`,`image_1`,`image_2`,`image_3`,`image_4`) VALUES 
(1,
'https://asset.kompas.com/crops/FdTf8FFrnRaGfeAVUcKcMHvEkBM=/0x0:1199x799/780x390/data/photo/2021/05/24/60aa93b2c773f.jpg',
'https://radarcirebon.disway.id/upload/fbebe9ece592be87474569eee8ac4d4d.jpg','https://radarcirebon.disway.id/upload/2018/12/MUSEUM-KERATON-KASEPUHAN.gif','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/62/a5/8d/keraton-kasepuhan.jpg?w=1200&h=-1&s=1'),
(2,'https://www.nativeindonesia.com/foto/keraton-kanoman-cirebon/Keraton-Kanoman-Cirebon.jpg','https://1.bp.blogspot.com/-kbZitXBpERA/VxSEUioXkqI/AAAAAAAAFto/05jdz4q4yM46DS9mjzp6h8_-EZjK4YzxgCLcB/s1600/_MG_8583.JPG','https://4.bp.blogspot.com/-hPTTQc2oXL0/WnlM5d7as8I/AAAAAAAAFrU/863xHeK8eYkhz7AeaL_GOpy5J46sTDiZwCLcBGAs/s1600/Kereta%2BPaksi%2BNaga%2BLiman.jpg','https://fajarsatu.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-10-at-22.09.55.jpg'),
(3,'https://imgs.oomph.co.id/files/uploads/videos/2022/02/04/97/UGC_20222497_cover_r6H8tIaU13.jpg','https://1.bp.blogspot.com/-kopMD_DfuLY/XQ-heJZf3nI/AAAAAAAAB80/lKU4Rw9tZBUgP39aGWL-mfblQMuNUQpngCLcBGAs/w1200-h630-p-k-no-nu/panjang%2Bjimat%2Bkeraton%2Bkacirebonan%2B2.jpg','https://jadwaltravel.com/wp-content/uploads/2020/03/Tiket-Keraton-Kacirebonan.jpg','https://4.bp.blogspot.com/-Sv0aKsTELk0/W_0jFPaNjnI/AAAAAAAAQXU/dYS89_N9sU4_dsmaXIuDiER1snAnuY1RACLcBGAs/s1600/Keraton%2BKacirebonan.jpg'),
(4,'https://i.pinimg.com/originals/18/3e/2c/183e2c5f492b3a5dc8a1f7d5f1911cd4.jpg','https://img.okezone.com/content/2021/08/24/406/2460611/ppkm-diperpanjang-terus-pengelola-nekat-buka-wisata-taman-air-goa-sunyaragi-AKjoumbABk.JPG','https://www.holidify.com/images/cmsuploads/compressed/800px-Historical_site_of_Sunyaragi_caves_Cirebon_2017_20190718095436.jpg','https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1504763079/rqlfmlyu7ufvhzjh5kzl.jpg'),
(5,'https://alif.id/wp-content/uploads/2022/08/peziarah-di-makam-sunan-gunung-jati-atau-syekh-syarif-_190607102624-442.jpg','https://hypeabis.id/assets/photo/20220630105934000000MAKAMSUNANGUNUNGJATI3.JPG','https://thumb.viva.co.id/media/frontend/thumbs3/2015/05/05/311748_makam-sunan-gunung-jati-di-cirebon_665_374.jpg','https://yuniarinukti.com/wp-content/uploads/2018/12/Makam-Sunan-Gunung-Jati-Cirebon-4.jpg'),
(6,'https://disparbud.jabarprov.go.id/wp-content/uploads/2022/02/Batik-trusmi-1.jpg','https://cdn.pnghd.pics/data/281/gambar-batik-trusmi-cirebon-37.jpg','https://assets.ayobandung.com/crop/0x0:0x0/900x675/webp/photo/2021/12/03/955919001.jpeg','https://cdn.shopify.com/s/files/1/0408/4203/5353/files/DSC01165_480x480.jpg?v=1626240629'),
(7,'https://asset-2.tstatic.net/jabar/foto/bank/images/Situs-Keramat-Plangon-di-Cirebon-Kamis-3032023.jpg','https://aboutcirebon.id/wp-content/uploads/2016/01/2f2766fb7d5da7e6231d9ac592175eb3_XL.jpg','https://gerbangpatriot.com/wp-content/uploads/2018/10/plangon-3.jpg','https://indonesiakaya.com/wp-content/uploads/2020/10/6__Menurut_juru_kunci_nama_Plangon_berasal_dari_bahasa_Tegal_yaitu_Klangenan.jpg'),
(8,'https://img.inews.co.id/media/600/files/networks/2022/02/14/d2dc6_sangkala-buana.jpg','https://dmm0a91a1r04e.cloudfront.net/OBBuOrTNEZm6AS_ytLz8lgHkypE=/1024x576/https%3A%2F%2Fasset.kgnewsroom.com%2Fphoto%2Fpre%2F2022%2F02%2F06%2F8176c873-c96f-4e11-b931-b180a83451bd_jpg.jpg','https://radarcirebon.disway.id/upload/2022/01/WhatsApp-Image-2022-01-05-at-18.20.44.jpeg','https://dmm0a91a1r04e.cloudfront.net/MFSc1NS9a7LVE6BVAV0s8SlU-eQ=/1024x683/https%3A%2F%2Fasset.kgnewsroom.com%2Fphoto%2Fpre%2F2022%2F02%2F06%2F435d995a-fe62-4045-9b48-5d23454ce4fc_jpg.jpg');



DROP TABLE IF EXISTS `dishes`;
CREATE TABLE `dishes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(256),
  `description` TEXT,
  `image` TEXT,
  `maps` VARCHAR(32),
  PRIMARY KEY (`id`)
);
INSERT  INTO `dishes`(`id`,`name`,`description`,`image`,`maps`) VALUES 
(1,'Nasi Jamblang','Nasi Jamblang or Sega Jamblang or Jamblang Rice In serving, the rice is wrapped in Jati`s tree leaf for its portion. One serving of rice is generally one fist. So for one meal at least two packs of rice. While various side dishes are served in a buffet. Usually, a waiter will serve rice that is wrapped in Jati leaves according to the portion.','https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sega_Jamblang.jpg/640px-Sega_Jamblang.jpg','nasi jamblang di cirebon'),
(2,'Nasi Lengko','Nasi Lengko or Sega Lengko or Lengko Rice contains the components of white rice (ideally hot), fried tempeh, fried tofu, cucumbers (raw, freshly chopped), boiled bean sprouts, chives leaves (cut into small pieces), fried onions, peanut sauce (like salad seasoning, spicy or not depending on taste), and a light soy sauce poured over the top.','https://www.sabumiku.com/wp-content/uploads/2022/08/Makanan-Khas-Indramayu-dari-Nasi-Lengko.jpg','nasi lengko di cirebon'),
(3,'Empal Gentong','Empal Gentong is a spicy Indonesian curry-like beef soup originating in Cirebon, West Java. It is a variety of the Soto cuisine and is similar to gulai that is usually cooked with firewood in a gentong stove (Javanese for: clay pot). The ingredients include cuts of beef, and cow offal such as intestine, tripes, lungs, etc. cooked with curry-like spices in coconut milk, garlic, chilies, chives (kuchai) and sambal in the form of chilli powder. Empal gentong can be eaten with steamed rice, ketupat or lontong.','https://asset.kompas.com/crops/pG0a7QeDlmXars4rqvl9M7K9Mvg=/0x0:1000x667/780x390/data/photo/2021/05/18/60a36dc5aa887.jpg','empal gentong di cirebon'),
(4,'Docang','Docang or Doclang is a traditional food from Cirebon, a port town in West Java, Indonesia. It is made of sliced of rice cake, cassava leaves, sprouts, and krupuk, served in thick vegetable sauce called dage, which is made of mashed tempeh mixed with grated coconut. This food has a distinctive savoury flavor and usually served warm for breakfast and it is sold in relatively affordable price. Today, authentic docang is rarely found even in Cirebon.','https://thumb.viva.id/antvklik/1265x711/2020/06/27/635b2b7888358-docang-kuliner_antvklik.jpg','docang di cirebon'),
(5,'Tape Ketan Bakung','Tape Ketan Bakung or Fermentation Sticky Rice is a typical from Bakung village, Cirebon. This snack is made from glutinous rice, katuk leaves and then fermented with yeast. Unlike other sticky tape, even though it is consumed in large quantities, Bakung sticky tape does not cause a hangover or dizziness effect.','https://jadesta.kemenparekraf.go.id/imgpost/70877.jpg','tape ketan bakung di cirebon'),
(6,'Nasi Bogana','Nasi Bogana is also a special dish typical of the Kacirebonan Palace. The word Bogana is taken from Sundanese, saboga-bogana which means make it as it is. Bogana rice is cone-shaped like tumpeng rice in general. At a glance, the color of the rice looks similar to yellow rice, but the difference is that Nasi Bogana adds grated coconut to its main seasoning. The symbol of yellow rice and conical upwards is a form of gratitude for what God has given.','https://pdbifiles.nos.jkt-1.neo.id/files/2017/07/05/oakirbin_nasiboganacirebon4.jpg','nasi bogana di cirebon'),
(7,'Terasi','Terasi is a seasoning in the form of a paste made from small shrimp or fish. The shrimp paste is generally brownish black in color but some are reddish in color. The natural black color of shrimp paste comes from the reaction of fish pigments, while the red shrimp paste is a reaction of shrimp pigments. Terasi itself is a fermented fishery product intended to produce substances that give a specific taste and aroma.','https://asset.kompas.com/crops/yOCzrV9RKTiBwMcJuZ9U8i9UIMM=/0x62:1000x728/750x500/data/photo/2020/06/19/5eec63c89bc12.jpg','terasi di cirebon'),
(8,'Kerupuk Melarat','Kerupuk Melarat or Melarat Crackers are one of the specialties of Cirebon and its surroundings. This food is served by adding sour sauce. Tapioca flour is the basic ingredient, shaped like a raffia string which is messy and various colors, including pink, yellow, white, and green. Impoverished means poor. Impoverished crackers are called that because they are fried without cooking oil, but using sand that has been cleaned beforehand, which goes through a process of drying and filtering by sifting.','https://www.goodnewsfromindonesia.id/uploads/post/large-goodnewsfromindonesia-gnfi-kerupuk-melarat-cirebon-keranjang-df42837e2aa3d58ed50b62fa.jpg','kerupuk melarat di cirebon'),
(9,'Intip Goreng','The local people call it Intip considering that the main ingredient for making it comes from liwet rice crust. The origin of the word peek is taken from the Javanese language Cirebon which means crust. This dish is made from rice crust, which is the crust that is produced when we cook rice in the conventional way. At first glance, it looks like rangginang, but the combination of peeps with its inherent spices makes peeps more savory and crunchy, perfect for those who like snacking and love Indonesian cuisine.','https://cdn2.tstatic.net/travel/foto/bank/images/intip_20170930_145949.jpg','intip goreng di cirebon'),
(10,'Pepes Intip Tahu','It is called Wrapped Cursted Tofu because peek itself is the Javanese word for crust. According to residents of the Lemahabang area, it has always been a center for making tofu and tempeh. In it too, the craftsmen at the same time make Pepes Intip Tahu. The material used to make Pepes Intip Tahu is tofu dregs which are seasoned with special spices, then wrapped in banana leaves, then baked.','https://img-global.cpcdn.com/recipes/4c493b425544b438/680x482cq70/pepes-hintip-tahu-khas-cirebon-foto-resep-utama.jpg','pepes intip tahu'),
(11,'Tahu Gejrot','Tahu Gejrot or Mashed tofu is a simple culinary dish originating from Cirebon. Gejrot tofu is originally a special tofu that has a bland taste, has a pale white color and has a thick skin texture, while the contents are rather empty. This tofu is fried and then cut into small pieces as desired, which at the time of presentation is served with a splash of gravy made from chilies, shallots, sweetened with sugar.','https://img.inews.co.id/media/1200/files/inews_new/2020/08/27/resep_tahu_gejrot.jpg','tahu gejrot di cirebon'),
(12,'Tahu Petis','The profession of people in the city of Cirebon is generally fishermen. This has an effect on the regional culture of Cirebon, especially in the culinary field. One example is the typical Cirebon tofu paste. From the name alone, we can tell that the basic ingredients of this food are tofu and paste seasoning. The typical Cirebon paste seasoning is slightly different from the paste seasoning in other areas because it is added with ebi or rebon. The addition of ebi or rebon makes the Cirebon paste seasoning more preferable compared to the paste seasoning in other areas. The tofu used is different from the tofu typical of other regions. This tofu is made in the Sindang Laut area which certainly adds to the unique taste of tofu petis itself.','https://cdn.idntimes.com/content-images/post/20210917/51902638-235679297384323-2386037706382373938-n-7dba5a89c8cf4a86fef965fffc04f904.jpg','tahu petis di cirebon'),
(13,'Mie Koclok','Mie Koclok or Koclok Noodles use egg noodles or wet noodles. Initially, the noodles and bean sprouts would be soaked and shaken into hot water in no time. Then, the noodles are placed in a container and topped with a thick sauce made from chicken broth, tapioca flour, sweet soy sauce, and spices such as chili, shallots, and garlic. The noodles are served with various accompaniments such as chicken, boiled eggs, sliced ​​green onions, celery and fried onions. Koclok noodles have a savory and salty taste that comes from thick coconut milk and spices. Connoisseurs of this food can also add chili sauce or chili powder if they like spicy taste.','https://asset.kompas.com/crops/R0W23caKi5Yc0dq1COFsWotY5yg=/0x500:750x1000/750x500/data/photo/2022/07/22/62d9e6503726a.jpeg','mie koclok di cirebon'),
(14,'Battembat Tongseng','Battembat Tongseng is a kind of beef curry with a stronger sauce originating from the village of Battembat, Cirebon. Tongseng generally uses goat meat, although there are also beef, lamb, or buffalo meat tongseng. In addition, vegetables such as cauliflower, garlic, tomatoes and sweet soy sauce are added to this thick gravy. The marinade is stir-fry or stir-fry consisting of a mixture of salt, garlic, soy sauce and pepper.','https://3.bp.blogspot.com/-y9XZDMzvrRQ/W-PFWvJxbyI/AAAAAAAAODE/a0N8qV519Bg7MzSwUQA7h5LhrU5M7OOzQCLcBGAs/s1600/tukangngider.com.JPG','tongseng battembat di cirebon');

DROP TABLE IF EXISTS `place_category`;
CREATE TABLE `place_category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(256),
  PRIMARY KEY (`id`)
);
INSERT  INTO `place_category`(`id`,`category`) VALUES 
(1,'Heritage'),
(2,'Religion'),
(3,'Nature'),
(4,'Public'),
(5,'Shopping');

DROP TABLE IF EXISTS `places`;
CREATE TABLE `places` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(256),
  `address` TEXT,
  `description` TEXT,
  `image` TEXT,
  `maps` TEXT,
  `ticket_price` INT(11),
  `category_id` INT(11),
  `additional_image_id` INT(11),
  PRIMARY KEY (`id`),
  CONSTRAINT `additional_image_id` FOREIGN KEY (`additional_image_id`) REFERENCES `additional_place_image` (`id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `place_category` (`id`)
);
INSERT  INTO `places`(`id`,`name`,`address`,`description`,`image`,`maps`,`ticket_price`,`category_id`,`additional_image_id`) VALUES 
(1,'Kasepuhan Royal Palace','Kasepuhan St no 1, Lemahwungkuk, Cirebon','The largest and oldest surviving sultanate palace in Cirebon. Serves as the official residence of the Kasepuhan Sultanate which is one of the three sultanates in Cirebon','https://disparbud.jabarprov.go.id/wp-content/uploads/2022/01/MUS9249-scaled.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3561308559433!2d108.56843117366698!3d-6.726328465763555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee263eaaaaaab%3A0x20ea18cbfb1df195!2sKeraton%20Kasepuhan%20Cirebon!5e0!3m2!1sid!2sid',20000,1,1),
(2,'Kanoman Royal Palace','Kanoman St no 1, Lemahwungkuk, Cirebon','The royal palace of the second sultanate in Cirebon. Serves as the official residence of the Kanoman Sultan which expansion of Kasepuhan Sultanate.','https://1.bp.blogspot.com/-n2CIyjpLJqg/X2a9wr_3i3I/AAAAAAAAB-c/9oj6Uw4kBZMPMXe9MIMT0JafuPJTXgQHQCLcBGAsYHQ/s1920/20190813_110559.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3882626239606!2d108.56524907366688!3d-6.722387765724239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee25deaaaaaab%3A0xb5cb14c3d5f80987!2sKeraton%20Kanoman!5e0!3m2!1sid!2sid',15000,1,2),
(3,'Kacirebonan Royal Palace','Ariodinoto St no 1, Lemahwungkuk, Cirebon','The youngest surviving sultanate palace in Cirebon. Serves as the official residence of the Kacirebonan Sultanate which expansion of Kanoman Sultanate','https://disbudpar.cirebonkota.go.id/wp-content/uploads/2021/09/b2ap3_large_kraton2.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3653963365437!2d108.56280247366693!3d-6.725192365752208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee26f6aaaaaab%3A0xddcdf1633236d15a!2sKeraton%20Kacirebonan!5e0!3m2!1sid!2sid',15000,1,3),
(4,'Sunyaragi Royal Garden','Brigjen Dharsono St 25, Kesambi subdistrict, Cirebon','The royal garden of all Cirebonese Sultanate. serves as a place of recreation, bathing, and rest for members of the Cirebon Sultanate royal family','https://travelspromo.com/wp-content/uploads/2019/05/Kawasan-Gua-Sunyaragi-Ahmad-Rasyid.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31698.47089528159!2d108.5025033041815!3d-6.732121444098538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1df257d4d4fb%3A0x8d4ea2ef1ff1103d!2sTaman%20Wisata%20Goa%20Sunyaragi%20Cirebon!5e0!3m2!1sid!2sid',15000,1,4),
(5,'The Tomb of Sunan Gunung Jati','Gunung Jati St, Astana, Cirebon','The burial complex of Sunan Gunung Jati, sultans, and members of the royal family of the Cirebon sultanate','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjz1MD8xUM8No2o0SVSmsOAgFtpIoWhmzADz1J95Jv2vKYSVMyrlZsAVJQhOYKT0Dtp7PfGPDHiufME_jyxA05NxNHJEfgV9Y4ccOvUfGMS7NHdFqCgKsBsUjJ6fA-qAUZ3-D_Js-RZr1Wn6ZhgBPvanpY4Of9Xsc3NlxrJGsCBQGiYXMOvTncmHkq6pA/s1600/gerbang%20makam%20gn%20jati.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.804079530228!2d108.53757607499419!3d-6.671182193323875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1df535197233%3A0x44c868e9be858a42!2sMakam%20Sunan%20Gunung%20Jati!5e0!3m2!1sid!2sid',0,2,5),
(6,'Trusmi Batik Area','Syekh Datul Kahfi St, Plered, Cirebon','The central area for the sale and production of typical Cirebonese batik, which is produced in both traditional and modern ways','https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/ayo-ke-batik-trusmi-cirebon-dan-lakukan-4-aktivitas-seru-ini/kawasan-batik-trusmi.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63400.95331219769!2d108.43626962167967!3d-6.701337899999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee193b48be581%3A0xdaa49b48b19ca154!2sKawasan%20Wisata%20Batik%20Trusmi!5e0!3m2!1sid!2sid!4v1693126272646!5m2!1sid!2sid',0,5,6),
(7,'Plangon Monkey Hill','Kubang village, Talun, Cirebon','That said, initially there were only a pair of monkeys brought by Prince Panjunan from a visit to Aceh during the reign of Sunan Gunung Jati. However, because of the precise location and geographical fit, this herd of monkeys multiplied and became residents of Plangon Hill.','https://indonesiakaya.com/wp-content/uploads/2020/10/5__Mengunjungi_Plangon_wisatawan_dapat_berinteraksi_dengan_monyet_yang_ada_di_sekitar_area.jpg','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.840037399254!2d108.48555559999998!3d-6.7747221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1ef9c7471a0d%3A0x3ee1bf4561fce4d0!2sBukit%20Plangon!5e0!3m2!1sid!2sid!4v1693201016036!5m2!1sid!2sid',3000,3,7),
(8,'Sangkala Buana Square','Kasepuhan Royal Palace Area, Kasepuhan Street 1st','The presence of Sangkala Buana Square is now adding a tourist destination in Cirebon City, West Java. Apart from preserving culture, the square which is adjacent to the Kasepuhan Palace is also expected to attract more tourists to the city of Cirebon. There is the Kasepuhan Palace complex which was founded centuries ago.','https://jernih.co/wp-content/uploads/Screen-Shot-2022-02-06-at-22.36.13.png','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3651270021096!2d108.56824467499474!3d-6.725225393270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee2806fdedd71%3A0xea3501eeedace498!2sAlun-alun%20Sangkala%20Buana!5e0!3m2!1sid!2sid!4v1693205608327!5m2!1sid!2sid',0,4,8);


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(256),
  `password` TEXT,
  `name` VARCHAR(256),
  `username` VARCHAR(256),
  `phone` VARCHAR(256),
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `place_id` INT(11),
  `user_id` INT(11),
  `time` DATETIME,
  PRIMARY KEY (`id`),
  CONSTRAINT `p_id` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`),
  CONSTRAINT `u_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);


