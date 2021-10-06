CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar,
  "hashedPassword" stringbinary,
  "firstName" string,
  "lastName" string,
  "review_count" integer,
  "kelping_since" date,
  "created_at" timestamp
);

CREATE TABLE "businesses" (
  "id" SERIAL PRIMARY KEY,
  "name" string,
  "address" string,
  "location" string,
  "stars" float,
  "review_count" integer,
  "is_open" boolean,
  "category_id" int,
  "user_id" int
);

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "business_id" int,
  "stars" float,
  "date" date,
  "text" string,
  "neptune" integer,
  "ready" integer,
  "whatever" integer
);

CREATE TABLE "comments" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "business_id" int,
  "question_id" int,
  "text" text,
  "date" date,
  "compliment_count" int
);

CREATE TABLE "questions" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "business_id" int,
  "question" text
);

CREATE TABLE "locations" (
  "id" SERIAL PRIMARY KEY,
  "business_id" int,
  "location" string,
  "num_businesses" int
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "category" string,
  "business_id" int,
  "num_businesses" int
);

CREATE TABLE "photos" (
  "id" SERIAL PRIMARY KEY,
  "business_id" int,
  "caption" text,
  "label" text
);

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "businesses" ("user_id");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "reviews" ("user_id");

ALTER TABLE "businesses" ADD FOREIGN KEY ("id") REFERENCES "reviews" ("business_id");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "comments" ("user_id");

ALTER TABLE "businesses" ADD FOREIGN KEY ("id") REFERENCES "comments" ("business_id");

ALTER TABLE "categories" ADD FOREIGN KEY ("id") REFERENCES "businesses" ("category_id");

ALTER TABLE "locations" ADD FOREIGN KEY ("id") REFERENCES "businesses" ("location");

ALTER TABLE "businesses" ADD FOREIGN KEY ("id") REFERENCES "locations" ("business_id");

ALTER TABLE "questions" ADD FOREIGN KEY ("id") REFERENCES "comments" ("question_id");

ALTER TABLE "businesses" ADD FOREIGN KEY ("id") REFERENCES "photos" ("business_id");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "questions" ("user_id");

ALTER TABLE "businesses" ADD FOREIGN KEY ("id") REFERENCES "questions" ("business_id");
