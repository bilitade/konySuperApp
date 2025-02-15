define([], function () {
  function PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
  }

  inheritsFrom(PresentationController, kony.mvc.Presentation.BasePresenter);

  PresentationController.prototype.initializePresentationController =
    function () {};

  PresentationController.prototype.loadDashboardData = function (userid) {
    kony.print("🔹 Loading Dashboard Data for User: " + userid);

    var dashboardBusinessController = kony.mvc.MDAApplication
      .getSharedInstance()
      .getModuleManager()
      .getModule("DashboardManager")
      .businessController;

    dashboardBusinessController.fetchCustomerData(userid, {
      success: function (customer) {
        this.fetchAccountData(customer);
      }.bind(this), // Ensure correct reference to `this`
      error: function (err) {
        this.handleError(err);
      }.bind(this)
    });
  };

  PresentationController.prototype.fetchAccountData = function (customer) {
    kony.print("✅ Customer Data Retrieved: " + JSON.stringify(customer));

    var dashboardBusinessController = kony.mvc.MDAApplication
      .getSharedInstance()
      .getModuleManager()
      .getModule("DashboardManager")
      .businessController;

    dashboardBusinessController.fetchAccountData(customer.customer_id, {
      success: function (account) {
        this.updateUI(customer, account);
      }.bind(this),
      error: function (err) {
        this.handleError(err);
      }.bind(this)
    });
  };

  PresentationController.prototype.updateUI = function (customer, account) {
    kony.print("✅ Account Data Retrieved: " + JSON.stringify(account));

    var frmHome = kony.application.getCurrentForm();
    if (frmHome) {
      frmHome.customerNameLabel.text = customer.customer_name || "N/A";
      frmHome.balanceLabel.text = (account && account.account_balance) 
        ? String(account.account_balance) : "0.00";

      frmHome.forceLayout();
      kony.print("✅ UI Updated: Balance = " + frmHome.balanceLabel.text);
    } else {
      kony.print("❌ Form frmHome not found.");
    }
  };

  PresentationController.prototype.handleError = function (error) {
    kony.print("❌ Error in Dashboard Flow: " + JSON.stringify(error));
  };
  
  PresentationController.prototype.logout =function (){
    if (kony.store.getItem("userid")){
      kony.store.removeItem("userid");
    }
    
    var navigationObject = new kony.mvc.Navigation("frmLogin");
        navigationObject.navigate({
            "logoutMessage": "Successfully Logged out"
        });
    
    
    
  };
  

  return PresentationController;
});
