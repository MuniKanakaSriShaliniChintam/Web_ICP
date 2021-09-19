function getGithubInfo(user,data) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    let request;
    request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            return data(this);
        }
    };
    // The function should finally return the object(it now contains the response!)
    request.open("GET", `https://api.github.com/users/${user}`, true);
    request.send();
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $("img.picture").attr("src", user.avatar_url).show();
    $("#unique").text(user.id).show();
    $("#num").text(user.public_repos).show();
    $('#profile').show();
    $('#followers').text(user.followers).show();
    $('#following').text(user.following).show();
    $('#account').attr("href",user.html_url).show();

}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $('#no').text("There is no  user as such");
    $('#no').show();
}

$(document).ready(function () {
    $('#profile').hide();
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        let response;
        let username;
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getGithubInfo(username, (response) => {
                //if the response is successful show the user's details
                if (response.status != 200) {
                    noSuchUser(username);
                } else {
                    showUser(JSON.parse(response.responseText));
                    //else display suitable message

                }
            });
        }
        });
});
