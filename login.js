$("#jotformlogin").click(function(e) {
    JF.login(
        function success() {
            $("#loginresults").html("user authorized successfully");
        },
        function error() {
            $("#loginresults").html("error during authorization");
        }
    );
});

