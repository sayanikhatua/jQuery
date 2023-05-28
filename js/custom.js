$(document).ready(function () {
    function getClass() {
        $(".mydiv").toggleClass('active')
        $(".mydiv1").toggleClass('active1')
        $(".mydiv2").toggleClass('active2')
    }
    $(".myclass").on("click", function () {
        getClass()
    })
    $(".myclass2").on("click", function () {
        getClass()
    })
    $(".myclass3").on("click", function () {
        getClass()
    })
    $(".myclass4").on("click", function () {
        getClass()
    })



    $(".submit").on("click", function () {
        var getUserName = $(".username").val()
        var getEmail = $(".email").val()
        var getPhoneNo = $(".phoneno").val()
        // console.log(inputvalue)
        if (getUserName == "") {
            alert("please enter username")
        }

        else if (getEmail == "") {
            alert("please enter email Id")
        }
        else if (getPhoneNo == "") {
            alert("please enter phoneno")
        }
        else {
            alert("congrats")
        }

    })
    $(".agenumber").on("click", function () {
        var getAge = $(".age").val()
        if (getAge >= 18) {
            alert("eligible for vote")
        }
        else {
            alert("not eligible for vote")
        }
    })

    $(".check").on("click", function () {
        var getMath = $(".math").val()
        var getScience = $(".science").val()
        if (getMath >= 90 || getScience >= 85) {
            alert("get iphone")
        }

        else {
            alert("get nothing")
        }
    })

    $(".Birthday").on("click", function () {
        var getBirthday = $(".ages").val()
        if (getBirthday != 0) {
            alert("sad")
        }
        else {
            alert("congrats")
        }
    })



})

