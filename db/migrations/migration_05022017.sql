-- \connect drinkinggames_development

CREATE TABLE IF NOT EXISTS types (
  id BIGSERIAL PRIMARY KEY,
  types_type VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS games (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(1024),
  rules VARCHAR(1024),
  type_id INTEGER REFERENCES types(id)
);