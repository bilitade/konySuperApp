define({
    onNavigate: function (params) {
        kony.print("Entering frmLoginController.onNavigate");

        if (params && params.authErrorResponse) {
            alert("Login failed: " + JSON.stringify(params.authErrorResponse));
        }

        kony.print("Exiting frmLoginController.onNavigate");
    },

    /*
     * Handles Login Button Click
     */
    login: function () {
        kony.print("Entering frmLoginController.btnLoginOnClick");

        var username = this.view.emailTextBox.text;
        var password = this.view.PasswordTextBox.text;

        if (!username || !password) {
            alert("Please enter username and password.");
            return;
        }

        var authModule = kony.mvc.MDAApplication
                                 .getSharedInstance()
                                 .getModuleManager()
                                 .getModule("Auths");

        var authPresentationController = authModule.presentationController;

        authPresentationController.authenticateUser(username, password);

        kony.print("Exiting frmLoginController.btnLoginOnClick");
    }
});
