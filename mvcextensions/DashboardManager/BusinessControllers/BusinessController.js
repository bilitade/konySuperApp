define([], function () {
  function BusinessController() {
    kony.mvc.Business.Delegator.call(this);
  }

  inheritsFrom(BusinessController, kony.mvc.Business.Delegator);

  BusinessController.prototype.fetchCustomerData =
    function (userid, callbacks) {
    kony.print("🔹 Fetching Customer Data for: " + userid);

    var customerRepo = kony.mvc.MDAApplication
      .getSharedInstance()
      .getRepoManager()
      .getRepository("customer");

    customerRepo.customVerb("getcustomer", { userid: "'" 
                                            + userid + "'" },
                            function (status, response) {
      if (status === 100 && response && response.length > 0) {
        kony.print("✅ Customer Data Found: " + JSON.stringify(response[0]));
        callbacks.success(response[0]);
      } else {
        kony.print("❌ No Customer Data Found");
        callbacks.error({ message: "No customer data found", code: status });
      }
    });
  };

  BusinessController.prototype.fetchAccountData = 
    function (customer_id, callbacks) {
    kony.print("🔹 Fetching Account Data for Customer ID: " + customer_id);

    var accountRepo = kony.mvc.MDAApplication
      .getSharedInstance()
      .getRepoManager()
      .getRepository("account");

    accountRepo.customVerb("getAccount",
                           { customer_id: "'" + customer_id + "'" }, 
                           function (status, response) {
      if (status === 100 && response && response.length > 0) {
        kony.print("✅ Account Data Found: " + JSON.stringify(response[0]));
        callbacks.success(response[0]);
      } else {
        kony.print("❌ No Account Data Found");
        callbacks.error({ message: "No account data found", code: status });
      }
    });
  };

  return BusinessController;
});
