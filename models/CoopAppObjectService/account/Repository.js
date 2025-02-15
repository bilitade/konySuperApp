define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function accountRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	accountRepository.prototype = Object.create(BaseRepository.prototype);
	accountRepository.prototype.constructor = accountRepository;

	//For Operation 'getAccount' with service id 'coopappdatabase_account_get9699'
	accountRepository.prototype.getAccount = function(params, onCompletion){
		return accountRepository.prototype.customVerb('getAccount', params, onCompletion);
	};

	return accountRepository;
})