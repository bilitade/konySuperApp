define([], function () { 

  /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Delegator
     */
  function BusinessController() { 

    kony.mvc.Business.Delegator.call(this); 

  } 

  inheritsFrom(BusinessController, kony.mvc.Business.Delegator); 


  BusinessController.prototype.authenticateUser =
    function (username, password, callbacks) {
    kony.print("Entering AuthManager.BusinessController.authenticateUser");

    var serviceName = "CoopUserRepository"; 
    var client = kony.sdk.getCurrentInstance();
    var identitySvc = client.getIdentityService(serviceName);

    var options = {
      "userid": username,

      "password": password,

      "loginOptions": {
        "include_profile": true,

        "isSSOEnabled": false,

        "continueOnRefreshError": false,

        "persistLoginResponse": false,

        "isOfflineEnabled": false
      }
    };
    identitySvc.login(
      options,
      function (response) {
        kony.print("Login Success: " + JSON.stringify(response));

        // Store the email (username) as "userid" in Kony Store
        kony.store.setItem("userid", username);

        // Verify storage
        kony.print("User ID Stored Successfully: " + 
                   username);
        kony.print("Retrieved User ID from Store: " +
                   kony.store.getItem("userid"));

        callbacks.success(response);
      },
      function (error) {
        kony.print("Login Failure: " + JSON.stringify(error));
        callbacks.error(error);
      }
    );



    kony.print("Exiting AuthManager.BusinessController.authenticateUser");
  };









  return BusinessController;

});