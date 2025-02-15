define(function() {

  return {
      
    navigateToHome: function() {
      let navhome = new kony.mvc.Navigation("frmHome");
      navhome.navigate(null);
    },
      
    navigateToPayment: function() {
      let navpay =new  kony.mvc.Navigation("frmPay");
      navpay.navigate(null);
    },

    navigateToApps: function() {
      let navapps =new kony.mvc.Navigation("frmApps");
      navapps.navigate(null);
    },

    navigateToProfile: function() {
      let navprofile = new kony.mvc.Navigation("frmProfile"); 
      navprofile.navigate(null);
    }
  };
});
