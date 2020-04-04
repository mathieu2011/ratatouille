CREATE TABLE "Receipe" (
    id serial PRIMARY KEY,
    uid uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying(64) NOT NULL,
    description text,
    rating smallint,
    challenge smallint,
    time_needed numeric,
    image character varying(255),
    created timestamp without time zone DEFAULT now(),
    updated timestamp without time zone DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS "Receipe_pkey" ON "Receipe"(id);
CREATE INDEX IF NOT EXISTS receipe_uid ON "Receipe"(uid);


CREATE TABLE "User" (
    id serial PRIMARY KEY,
    uid uuid NOT NULL DEFAULT gen_random_uuid(),
    handle character varying(64),
    name character varying(255),
    surname character varying(255),
    email character varying(255),
    password character varying(255),
    token character varying(255),
    image character varying(255),
    last_active timestamp without time zone,
    created timestamp without time zone DEFAULT now(),
    updated timestamp without time zone DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS "User_pkey" ON "User"(id);
CREATE INDEX IF NOT EXISTS user_handle ON "User"(handle text_ops);
CREATE INDEX IF NOT EXISTS user_uid ON "User"(uid);


CREATE TABLE "IngredientType" (
    id serial PRIMARY KEY,
    name character varying(255) NOT NULL,
    taste character varying(255) NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS "IngredientType_pkey" ON "IngredientType"(id int4_ops);


CREATE TABLE "Ingredient" (
    id serial PRIMARY KEY,
    uid uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying(32) NOT NULL,
    image character varying(255),
    created timestamp without time zone DEFAULT now(),
    updated timestamp without time zone DEFAULT now(),
    type_id integer REFERENCES "IngredientType"(id)
);
CREATE UNIQUE INDEX IF NOT EXISTS "Ingredient_pkey" ON "Ingredient"(id);
CREATE UNIQUE INDEX IF NOT EXISTS "Ingredient_uid_key" ON "Ingredient"(uid);
CREATE INDEX IF NOT EXISTS ingredient_uid ON "Ingredient"(uid);
CREATE INDEX IF NOT EXISTS type_id ON "Ingredient"(type_id int4_ops);


CREATE TABLE "Receipe_Ingredient" (
    id serial PRIMARY KEY,
    receipe_id integer REFERENCES "Receipe"(id) ON DELETE CASCADE,
    ingredient_id integer REFERENCES "Ingredient"(id) ON UPDATE CASCADE,
    quantity integer,
    unit character varying(32)
);
CREATE UNIQUE INDEX IF NOT EXISTS "Receipe_Ingredient_pkey" ON "Receipe_Ingredient"(id);


CREATE TABLE "User_Receipe" (
    user_id integer REFERENCES "User"(id) ON UPDATE CASCADE,
    receipe_id integer REFERENCES "Receipe"(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "User_Receipe_pkey" PRIMARY KEY (user_id, receipe_id)
);
CREATE UNIQUE INDEX IF NOT EXISTS "User_Receipe_pkey" ON "User_Receipe"(user_id int4_ops,receipe_id int4_ops);
CREATE INDEX IF NOT EXISTS user_receipe_user_id ON "User_Receipe"(user_id int4_ops);
CREATE INDEX IF NOT EXISTS user_receipe_receipe_id ON "User_Receipe"(receipe_id int4_ops);