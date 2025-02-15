define({
  userid: null,

  onNavigate: function (params) {
    kony.print("🔹 Navigating to frmHome");

    this.userid = (params && params.userid) ? params.userid :
    kony.store.getItem("userid") || null;


    if (this.userid) {
      var dashboardModule = kony.mvc.MDAApplication
      .getSharedInstance()
      .getModuleManager()
      .getModule("Dashboard");

      var dashboardPresentationController =
          dashboardModule.presentationController;
      dashboardPresentationController.loadDashboardData(this.userid);
    } else {
      kony.print("❌ No valid user ID found.");
    }
  }
});
