/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "transaction", "objectService" : "CoopAppObjectService"};

    var setterFunctions = {
        transaction_amount: function(val, state) {
            context["field"] = "transaction_amount";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_amount"] : null);
            state['transaction_amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_from_account: function(val, state) {
            context["field"] = "transaction_from_account";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_from_account"] : null);
            state['transaction_from_account'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_id: function(val, state) {
            context["field"] = "transaction_id";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_id"] : null);
            state['transaction_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_reason: function(val, state) {
            context["field"] = "transaction_reason";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_reason"] : null);
            state['transaction_reason'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_ref: function(val, state) {
            context["field"] = "transaction_ref";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_ref"] : null);
            state['transaction_ref'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_time: function(val, state) {
            context["field"] = "transaction_time";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_time"] : null);
            state['transaction_time'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_to_account: function(val, state) {
            context["field"] = "transaction_to_account";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_to_account"] : null);
            state['transaction_to_account'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function transaction(defaultValues) {
        var privateState = {};
        context["field"] = "transaction_amount";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_amount"] : null);
        privateState.transaction_amount = defaultValues ?
            (defaultValues["transaction_amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_amount"], context) :
                null) :
            null;

        context["field"] = "transaction_from_account";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_from_account"] : null);
        privateState.transaction_from_account = defaultValues ?
            (defaultValues["transaction_from_account"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_from_account"], context) :
                null) :
            null;

        context["field"] = "transaction_id";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_id"] : null);
        privateState.transaction_id = defaultValues ?
            (defaultValues["transaction_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_id"], context) :
                null) :
            null;

        context["field"] = "transaction_reason";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_reason"] : null);
        privateState.transaction_reason = defaultValues ?
            (defaultValues["transaction_reason"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_reason"], context) :
                null) :
            null;

        context["field"] = "transaction_ref";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_ref"] : null);
        privateState.transaction_ref = defaultValues ?
            (defaultValues["transaction_ref"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_ref"], context) :
                null) :
            null;

        context["field"] = "transaction_time";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_time"] : null);
        privateState.transaction_time = defaultValues ?
            (defaultValues["transaction_time"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_time"], context) :
                null) :
            null;

        context["field"] = "transaction_to_account";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_to_account"] : null);
        privateState.transaction_to_account = defaultValues ?
            (defaultValues["transaction_to_account"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_to_account"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "transaction_amount": {
                get: function() {
                    context["field"] = "transaction_amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_amount, context);
                },
                set: function(val) {
                    setterFunctions['transaction_amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_from_account": {
                get: function() {
                    context["field"] = "transaction_from_account";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_from_account"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_from_account, context);
                },
                set: function(val) {
                    setterFunctions['transaction_from_account'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_id": {
                get: function() {
                    context["field"] = "transaction_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_id, context);
                },
                set: function(val) {
                    setterFunctions['transaction_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_reason": {
                get: function() {
                    context["field"] = "transaction_reason";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_reason"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_reason, context);
                },
                set: function(val) {
                    setterFunctions['transaction_reason'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_ref": {
                get: function() {
                    context["field"] = "transaction_ref";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_ref"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_ref, context);
                },
                set: function(val) {
                    setterFunctions['transaction_ref'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_time": {
                get: function() {
                    context["field"] = "transaction_time";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_time"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_time, context);
                },
                set: function(val) {
                    setterFunctions['transaction_time'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_to_account": {
                get: function() {
                    context["field"] = "transaction_to_account";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_to_account"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_to_account, context);
                },
                set: function(val) {
                    setterFunctions['transaction_to_account'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.transaction_amount = value ? (value["transaction_amount"] ? value["transaction_amount"] : null) : null;
            privateState.transaction_from_account = value ? (value["transaction_from_account"] ? value["transaction_from_account"] : null) : null;
            privateState.transaction_id = value ? (value["transaction_id"] ? value["transaction_id"] : null) : null;
            privateState.transaction_reason = value ? (value["transaction_reason"] ? value["transaction_reason"] : null) : null;
            privateState.transaction_ref = value ? (value["transaction_ref"] ? value["transaction_ref"] : null) : null;
            privateState.transaction_time = value ? (value["transaction_time"] ? value["transaction_time"] : null) : null;
            privateState.transaction_to_account = value ? (value["transaction_to_account"] ? value["transaction_to_account"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(transaction);

    //Create new class level validator object
    BaseModel.Validator.call(transaction);

    var registerValidatorBackup = transaction.registerValidator;

    transaction.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(transaction.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    var relations = [];

    transaction.relations = relations;

    transaction.prototype.isValid = function() {
        return transaction.isValid(this);
    };

    transaction.prototype.objModelName = "transaction";
    transaction.prototype.objServiceName = "CoopAppObjectService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    transaction.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("CoopAppObjectService", "transaction", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    transaction.clone = function(objectToClone) {
        var clonedObj = new transaction();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return transaction;
});