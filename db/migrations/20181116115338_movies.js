const tableName = 'movies'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(`${tableName}`, table => {
      table.increments()
      table.string('title').notNullable()
      table.string('director').notNullable()
      table.integer('year').notNullable().defaultsTo(1970)
      table.integer('rating').notNullable().defaultsTo(1)
      table.text("poster").notNullable()

      return table
  })
  .then(table => {
    return knex.schema.raw(
        `ALTER TABLE "${tableName}"
         ADD CONSTRAINT "${tableName}_rating_max_min" 
         CHECK (rating <= 5 AND rating > 0)`
         );
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists(`${tableName}`)
};
