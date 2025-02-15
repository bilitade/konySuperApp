define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function customerRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	customerRepository.prototype = Object.create(BaseRepository.prototype);
	customerRepository.prototype.constructor = customerRepository;

	//For Operation 'getcustomer' with service id 'coopappdatabase_customer_get7802'
	customerRepository.prototype.getcustomer = function(params, onCompletion){
		return customerRepository.prototype.customVerb('getcustomer', params, onCompletion);
	};

	return customerRepository;
})