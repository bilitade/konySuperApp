define({ 


  
  logout: function (){
    
    var dashboardModule = kony.mvc.MDAApplication
      .getSharedInstance()
      .getModuleManager()
      .getModule("Dashboard");
    
     var dashboardPresentationController =
          dashboardModule.presentationController;
      dashboardPresentationController.logout();

    
 
  }

 });