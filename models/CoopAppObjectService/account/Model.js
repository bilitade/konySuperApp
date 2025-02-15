/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "account", "objectService" : "CoopAppObjectService"};

    var setterFunctions = {
        account_balance: function(val, state) {
            context["field"] = "account_balance";
            context["metadata"] = (objectMetadata ? objectMetadata["account_balance"] : null);
            state['account_balance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        account_created_at: function(val, state) {
            context["field"] = "account_created_at";
            context["metadata"] = (objectMetadata ? objectMetadata["account_created_at"] : null);
            state['account_created_at'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        account_id: function(val, state) {
            context["field"] = "account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["account_id"] : null);
            state['account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        account_type: function(val, state) {
            context["field"] = "account_type";
            context["metadata"] = (objectMetadata ? objectMetadata["account_type"] : null);
            state['account_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customer_id: function(val, state) {
            context["field"] = "customer_id";
            context["metadata"] = (objectMetadata ? objectMetadata["customer_id"] : null);
            state['customer_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function account(defaultValues) {
        var privateState = {};
        context["field"] = "account_balance";
        context["metadata"] = (objectMetadata ? objectMetadata["account_balance"] : null);
        privateState.account_balance = defaultValues ?
            (defaultValues["account_balance"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["account_balance"], context) :
                null) :
            null;

        context["field"] = "account_created_at";
        context["metadata"] = (objectMetadata ? objectMetadata["account_created_at"] : null);
        privateState.account_created_at = defaultValues ?
            (defaultValues["account_created_at"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["account_created_at"], context) :
                null) :
            null;

        context["field"] = "account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["account_id"] : null);
        privateState.account_id = defaultValues ?
            (defaultValues["account_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["account_id"], context) :
                null) :
            null;

        context["field"] = "account_type";
        context["metadata"] = (objectMetadata ? objectMetadata["account_type"] : null);
        privateState.account_type = defaultValues ?
            (defaultValues["account_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["account_type"], context) :
                null) :
            null;

        context["field"] = "customer_id";
        context["metadata"] = (objectMetadata ? objectMetadata["customer_id"] : null);
        privateState.customer_id = defaultValues ?
            (defaultValues["customer_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customer_id"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "account_balance": {
                get: function() {
                    context["field"] = "account_balance";
                    context["metadata"] = (objectMetadata ? objectMetadata["account_balance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.account_balance, context);
                },
                set: function(val) {
                    setterFunctions['account_balance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "account_created_at": {
                get: function() {
                    context["field"] = "account_created_at";
                    context["metadata"] = (objectMetadata ? objectMetadata["account_created_at"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.account_created_at, context);
                },
                set: function(val) {
                    setterFunctions['account_created_at'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "account_id": {
                get: function() {
                    context["field"] = "account_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["account_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.account_id, context);
                },
                set: function(val) {
                    setterFunctions['account_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "account_type": {
                get: function() {
                    context["field"] = "account_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["account_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.account_type, context);
                },
                set: function(val) {
                    setterFunctions['account_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "customer_id": {
                get: function() {
                    context["field"] = "customer_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["customer_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customer_id, context);
                },
                set: function(val) {
                    setterFunctions['customer_id'].call(this, val, privateState);
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
            privateState.account_balance = value ? (value["account_balance"] ? value["account_balance"] : null) : null;
            privateState.account_created_at = value ? (value["account_created_at"] ? value["account_created_at"] : null) : null;
            privateState.account_id = value ? (value["account_id"] ? value["account_id"] : null) : null;
            privateState.account_type = value ? (value["account_type"] ? value["account_type"] : null) : null;
            privateState.customer_id = value ? (value["customer_id"] ? value["customer_id"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(account);

    //Create new class level validator object
    BaseModel.Validator.call(account);

    var registerValidatorBackup = account.registerValidator;

    account.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(account.isValid(this, propName, val)) {
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
    //For Operation 'getAccount' with service id 'coopappdatabase_account_get9699'
     account.getAccount = function(params, onCompletion){
        return account.customVerb('getAccount', params, onCompletion);
     };

    var relations = [];

    account.relations = relations;

    account.prototype.isValid = function() {
        return account.isValid(this);
    };

    account.prototype.objModelName = "account";
    account.prototype.objServiceName = "CoopAppObjectService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    account.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("CoopAppObjectService", "account", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    account.clone = function(objectToClone) {
        var clonedObj = new account();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return account;
});