--- INGREDIENTS ---

CREATE OR REPLACE FUNCTION add_ingredient(
    _name varchar(32),
    _image varchar(255) DEFAULT NULL,
    _type integer DEFAULT NULL
) RETURNS uuid
AS $$
BEGIN
    INSERT INTO "Ingredient" (
        name,
        image,
        type_id
    ) VALUES (
        _name,
        _image,
        _type
    ) RETURNING uid;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_ingredient(
    _name varchar(32),
    _image varchar(255) DEFAULT NULL,
    _type_id integer DEFAULT NULL
) RETURNS uuid
AS $$
    UPDATE "Ingredient" SET (
        image,
        type_id
    ) = (
        COALESCE(_image, image),
        COALESCE(_type_id, type_id)
    ) WHERE name = _name
    RETURNING uid;
$$ LANGUAGE SQL;

--- INGREDIENT TYPES ---

CREATE OR REPLACE FUNCTION add_ingredient_type(
    _name varchar(32),
    _taste varchar(255) DEFAULT NULL
) RETURNS integer
AS $$
BEGIN
    INSERT INTO "IngredientType" (
        name,
        taste
    ) VALUES (
        _name,
        _taste
    ) RETURNING id;
END;
$$ LANGUAGE plpgsql;