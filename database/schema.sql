set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

/* added from DB Designer */

CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"accessLevel" TEXT NOT NULL,
	"createdAt" DATETIME NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "bands" (
	"bandId" serial NOT NULL,
	"bandName" TEXT NOT NULL,
	"debutYear" TEXT NOT NULL,
	"cityId" integer NOT NULL,
	"bandImageUrl" TEXT NOT NULL,
	"bandGenre" TEXT NOT NULL,
	CONSTRAINT "bands_pk" PRIMARY KEY ("bandId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "musicians" (
	"musicianId" serial NOT NULL,
	"musicianFirstName" TEXT NOT NULL,
	"musicianLastName" TEXT NOT NULL,
	"cityId" integer NOT NULL,
	"dob" TEXT NOT NULL,
	"musicianImageUrl" TEXT NOT NULL,
	CONSTRAINT "musicians_pk" PRIMARY KEY ("musicianId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "albums" (
	"albumId" serial NOT NULL,
	"albumTitle" TEXT NOT NULL,
	"releaseYear" TEXT NOT NULL,
	"recordLabel" TEXT NOT NULL,
	"albumImageUrl" TEXT NOT NULL,
	CONSTRAINT "albums_pk" PRIMARY KEY ("albumId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "members" (
	"bandId" integer NOT NULL,
	"musicianId" integer NOT NULL,
	"current" BOOLEAN NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "discography" (
	"bandId" integer NOT NULL,
	"albumId" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "personnel" (
	"musicianId" integer NOT NULL,
	"albumId" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "genres" (
	"genreId" serial NOT NULL,
	"genre" TEXT NOT NULL,
	CONSTRAINT "genres_pk" PRIMARY KEY ("genreId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "albumGenre" (
	"albumId" integer NOT NULL,
	"genreId" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tracks" (
	"albumId" integer NOT NULL,
	"trackId" serial NOT NULL,
	"trackNo" integer NOT NULL,
	"track" TEXT NOT NULL,
	"length" TEXT NOT NULL,
	CONSTRAINT "tracks_pk" PRIMARY KEY ("trackId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "videos" (
	"videoId" serial NOT NULL,
	"bandId" integer NOT NULL,
	"videoUrl" TEXT NOT NULL,
	CONSTRAINT "videos_pk" PRIMARY KEY ("videoId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "carouselImages" (
	"bandCarouselImageId" serial NOT NULL,
	"bandId" integer NOT NULL,
	"bandCarouselImageUrl" TEXT NOT NULL,
	CONSTRAINT "carouselImages_pk" PRIMARY KEY ("bandCarouselImageId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "countries" (
	"countryId" serial NOT NULL,
	"country" TEXT NOT NULL,
	CONSTRAINT "countries_pk" PRIMARY KEY ("countryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "states" (
	"stateId" serial NOT NULL,
	"state" TEXT NOT NULL,
	CONSTRAINT "states_pk" PRIMARY KEY ("stateId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "cities" (
	"cityId" serial NOT NULL,
	"city" TEXT NOT NULL,
	CONSTRAINT "cities_pk" PRIMARY KEY ("cityId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "stateCountry" (
	"stateId" integer NOT NULL,
	"countryId" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "cityState" (
	"cityId" integer NOT NULL,
	"stateId" integer NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "bands" ADD CONSTRAINT "bands_fk0" FOREIGN KEY ("cityId") REFERENCES "cities"("cityId");

ALTER TABLE "musicians" ADD CONSTRAINT "musicians_fk0" FOREIGN KEY ("cityId") REFERENCES "cities"("cityId");


ALTER TABLE "members" ADD CONSTRAINT "members_fk0" FOREIGN KEY ("bandId") REFERENCES "bands"("bandId");
ALTER TABLE "members" ADD CONSTRAINT "members_fk1" FOREIGN KEY ("musicianId") REFERENCES "musicians"("musicianId");

ALTER TABLE "discography" ADD CONSTRAINT "discography_fk0" FOREIGN KEY ("bandId") REFERENCES "bands"("bandId");
ALTER TABLE "discography" ADD CONSTRAINT "discography_fk1" FOREIGN KEY ("albumId") REFERENCES "albums"("albumId");

ALTER TABLE "personnel" ADD CONSTRAINT "personnel_fk0" FOREIGN KEY ("musicianId") REFERENCES "musicians"("musicianId");
ALTER TABLE "personnel" ADD CONSTRAINT "personnel_fk1" FOREIGN KEY ("albumId") REFERENCES "albums"("albumId");


ALTER TABLE "albumGenre" ADD CONSTRAINT "albumGenre_fk0" FOREIGN KEY ("albumId") REFERENCES "albums"("albumId");
ALTER TABLE "albumGenre" ADD CONSTRAINT "albumGenre_fk1" FOREIGN KEY ("genreId") REFERENCES "genres"("genreId");

ALTER TABLE "tracks" ADD CONSTRAINT "tracks_fk0" FOREIGN KEY ("albumId") REFERENCES "albums"("albumId");

ALTER TABLE "videos" ADD CONSTRAINT "videos_fk0" FOREIGN KEY ("bandId") REFERENCES "bands"("bandId");

ALTER TABLE "carouselImages" ADD CONSTRAINT "carouselImages_fk0" FOREIGN KEY ("bandId") REFERENCES "bands"("bandId");




ALTER TABLE "stateCountry" ADD CONSTRAINT "stateCountry_fk0" FOREIGN KEY ("stateId") REFERENCES "states"("stateId");
ALTER TABLE "stateCountry" ADD CONSTRAINT "stateCountry_fk1" FOREIGN KEY ("countryId") REFERENCES "countries"("countryId");

ALTER TABLE "cityState" ADD CONSTRAINT "cityState_fk0" FOREIGN KEY ("cityId") REFERENCES "cities"("cityId");
ALTER TABLE "cityState" ADD CONSTRAINT "cityState_fk1" FOREIGN KEY ("stateId") REFERENCES "states"("stateId");
