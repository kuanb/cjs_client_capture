
exports.up = function(knex, Promise) {
	return Promise.all([


		knex.schema.createTable("clients", function(table) {
			table.increments("cid").primary();

			table.string("first");
			table.string("middle");
			table.string("last");

			table.string("gender");
			table.timestamp("dob");

			table.string("charge_lvl");

			table.string("offense_1");
			table.string("offense_2");
			table.string("offense_3");

			table.string("case_num");
			table.string("so");
			table.string("otn");

			table.string("notes");

			table.string("officer_id");

			table.boolean("processed").defaultTo(false);
			
			table.timestamp("updated");
			table.timestamp("created").defaultTo(knex.fn.now());
		}),

		knex.schema.createTable("charge_lvl_stats", function(table) {

			table.string("type");
			table.boolean("allowed").defaultTo(false);

			table.timestamp("updated");
		}),

		knex.schema.createTable("jail_levels", function(table) {

			table.string("ocr_m");
			table.string("ocr_f");

			table.timestamp("updated");
		})

	])
};

exports.down = function(knex, Promise) {
	return Promise.all([

		knex.schema.dropTable("clients"),
		knex.schema.dropTable("charge_lvl_stats"),
		knex.schema.dropTable("jail_levels")

	])
};
