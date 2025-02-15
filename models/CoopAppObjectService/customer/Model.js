/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "customer", "objectService" : "CoopAppObjectService"};

    var setterFunctions = {
        customer_id: function(val, state) {
            context["field"] = "customer_id";
            context["metadata"] = (objectMetadata ? objectMetadata["customer_id"] : null);
            state['customer_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customer_level: function(val, state) {
            context["field"] = "customer_level";
            context["metadata"] = (objectMetadata ? objectMetadata["customer_level"] : null);
            state['customer_level'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customer_name: function(val, state) {
            context["field"] = "customer_name";
            context["metadata"] = (objectMetadata ? objectMetadata["customer_name"] : null);
            state['customer_name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customer_type: function(val, state) {
            context["field"] = "customer_type";
            context["metadata"] = (objectMetadata ? objectMetadata["customer_type"] : null);
            state['customer_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userid: function(val, state) {
            context["field"] = "userid";
            context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
            state['userid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function customer(defaultValues) {
        var privateState = {};
        context["field"] = "customer_id";
        context["metadata"] = (objectMetadata ? objectMetadata["customer_id"] : null);
        privateState.customer_id = defaultValues ?
            (defaultValues["customer_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customer_id"], context) :
                null) :
            null;

        context["field"] = "customer_level";
        context["metadata"] = (objectMetadata ? objectMetadata["customer_level"] : null);
        privateState.customer_level = defaultValues ?
            (defaultValues["customer_level"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customer_level"], context) :
                null) :
            null;

        context["field"] = "customer_name";
        context["metadata"] = (objectMetadata ? objectMetadata["customer_name"] : null);
        privateState.customer_name = defaultValues ?
            (defaultValues["customer_name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customer_name"], context) :
                null) :
            null;

        context["field"] = "customer_type";
        context["metadata"] = (objectMetadata ? objectMetadata["customer_type"] : null);
        privateState.customer_type = defaultValues ?
            (defaultValues["customer_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customer_type"], context) :
                null) :
            null;

        context["field"] = "userid";
        context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
        privateState.userid = defaultValues ?
            (defaultValues["userid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userid"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "customer_level": {
                get: function() {
                    context["field"] = "customer_level";
                    context["metadata"] = (objectMetadata ? objectMetadata["customer_level"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customer_level, context);
                },
                set: function(val) {
                    setterFunctions['customer_level'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "customer_name": {
                get: function() {
                    context["field"] = "customer_name";
                    context["metadata"] = (objectMetadata ? objectMetadata["customer_name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customer_name, context);
                },
                set: function(val) {
                    setterFunctions['customer_name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "customer_type": {
                get: function() {
                    context["field"] = "customer_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["customer_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customer_type, context);
                },
                set: function(val) {
                    setterFunctions['customer_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userid": {
                get: function() {
                    context["field"] = "userid";
                    context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userid, context);
                },
                set: function(val) {
                    setterFunctions['userid'].call(this, val, privateState);
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
            privateState.customer_id = value ? (value["customer_id"] ? value["customer_id"] : null) : null;
            privateState.customer_level = value ? (value["customer_level"] ? value["customer_level"] : null) : null;
            privateState.customer_name = value ? (value["customer_name"] ? value["customer_name"] : null) : null;
            privateState.customer_type = value ? (value["customer_type"] ? value["customer_type"] : null) : null;
            privateState.userid = value ? (value["userid"] ? value["userid"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(customer);

    //Create new class level validator object
    BaseModel.Validator.call(customer);

    var registerValidatorBackup = customer.registerValidator;

    customer.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(customer.isValid(this, propName, val)) {
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
    //For Operation 'getcustomer' with service id 'coopappdatabase_customer_get7802'
     customer.getcustomer = function(params, onCompletion){
        return customer.customVerb('getcustomer', params, onCompletion);
     };

    var relations = [];

    customer.relations = relations;

    customer.prototype.isValid = function() {
        return customer.isValid(this);
    };

    customer.prototype.objModelName = "customer";
    customer.prototype.objServiceName = "CoopAppObjectService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    customer.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("CoopAppObjectService", "customer", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    customer.clone = function(objectToClone) {
        var clonedObj = new customer();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return customer;
});