/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"transaction_amount": "transaction_amount",
		"transaction_from_account": "transaction_from_account",
		"transaction_id": "transaction_id",
		"transaction_reason": "transaction_reason",
		"transaction_ref": "transaction_ref",
		"transaction_time": "transaction_time",
		"transaction_to_account": "transaction_to_account",
	};

	Object.freeze(mappings);

	var typings = {
		"transaction_amount": "number",
		"transaction_from_account": "number",
		"transaction_id": "string",
		"transaction_reason": "string",
		"transaction_ref": "string",
		"transaction_time": "date",
		"transaction_to_account": "number",
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
		tableName: "transaction"
	};

	Object.freeze(config);

	return config;
})