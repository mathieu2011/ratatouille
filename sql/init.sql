CREATE TABLE "Receipe" (
    id bigint DEFAULT nextval('"Receipe_id_seq"'::regclass) PRIMARY KEY,
    uid integer NOT NULL DEFAULT nextval('"Receipe_uid_seq"'::regclass),
    name character varying(64) NOT NULL,
    description text,
    rating smallint,
    challenge smallint,
    time_needed numeric,
    image character varying(255),
    created timestamp without time zone DEFAULT now(),
    updated timestamp without time zone DEFAULT now()
);
CREATE UNIQUE INDEX "Receipe_pkey" ON "Receipe"(id int8_ops);
CREATE INDEX receipe_uid ON "Receipe"(uid int4_ops);


CREATE TABLE "User" (
    id integer DEFAULT nextval('"User_id_seq"'::regclass) PRIMARY KEY,
    uid integer NOT NULL DEFAULT nextval('"User_uid_seq"'::regclass),
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
CREATE UNIQUE INDEX "User_pkey" ON "User"(id int4_ops);
CREATE INDEX user_handle ON "User"(handle text_ops);
CREATE INDEX user_uid ON "User"(uid int4_ops);


CREATE TABLE "Ingredient" (
    id integer DEFAULT nextval('"Ingredient_id_seq"'::regclass) PRIMARY KEY,
    uid integer NOT NULL DEFAULT nextval('"Ingredient_uid_seq"'::regclass) UNIQUE,
    name character varying(32) NOT NULL,
    image character varying(255),
    created timestamp without time zone DEFAULT now(),
    updated timestamp without time zone DEFAULT now(),
    type_id integer REFERENCES "IngredientType"(id)
);
CREATE UNIQUE INDEX "Ingredient_pkey" ON "Ingredient"(id int4_ops);
CREATE UNIQUE INDEX "Ingredient_uid_key" ON "Ingredient"(uid int4_ops);
CREATE INDEX ingredient_uid ON "Ingredient"(uid int4_ops);
CREATE INDEX type_id ON "Ingredient"(type_id int4_ops);


CREATE TABLE "IngredientType" (
    id integer DEFAULT nextval('"IngredientType_id_seq"'::regclass) PRIMARY KEY,
    name character varying(255) NOT NULL,
    taste character varying(255) NOT NULL
);
CREATE UNIQUE INDEX "IngredientType_pkey" ON "IngredientType"(id int4_ops);


CREATE TABLE "Receipe_Ingredient" (
    id integer DEFAULT nextval('"Receipe_Ingredient_id_seq"'::regclass) PRIMARY KEY,
    receipe_id integer REFERENCES "Receipe"(id) ON DELETE CASCADE,
    ingredient_id integer REFERENCES "Ingredient"(id) ON UPDATE CASCADE,
    quantity integer,
    unit character varying(32)
);
CREATE UNIQUE INDEX "Receipe_Ingredient_pkey" ON "Receipe_Ingredient"(id int4_ops);


CREATE TABLE "User_Receipe" (
    user_id integer REFERENCES "User"(id) ON UPDATE CASCADE,
    receipe_id integer REFERENCES "Receipe"(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "User_Receipe_pkey" PRIMARY KEY (user_id, receipe_id)
);
CREATE UNIQUE INDEX "User_Receipe_pkey" ON "User_Receipe"(user_id int4_ops,receipe_id int4_ops);
CREATE INDEX user_receipe_user_id ON "User_Receipe"(user_id int4_ops);
CREATE INDEX user_receipe_receipe_id ON "User_Receipe"(receipe_id int4_ops);
