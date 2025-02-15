/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"customer_id": "customer_id",
		"customer_level": "customer_level",
		"customer_name": "customer_name",
		"customer_type": "customer_type",
		"userid": "userid",
	};

	Object.freeze(mappings);

	var typings = {
		"customer_id": "number",
		"customer_level": "number",
		"customer_name": "string",
		"customer_type": "string",
		"userid": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "CoopAppObjectService",
		tableName: "customer"
	};

	Object.freeze(config);

	return config;
})