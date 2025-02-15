/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"account_balance": "account_balance",
		"account_created_at": "account_created_at",
		"account_id": "account_id",
		"account_type": "account_type",
		"customer_id": "customer_id",
	};

	Object.freeze(mappings);

	var typings = {
		"account_balance": "number",
		"account_created_at": "date",
		"account_id": "number",
		"account_type": "string",
		"customer_id": "number",
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
		tableName: "account"
	};

	Object.freeze(config);

	return config;
})