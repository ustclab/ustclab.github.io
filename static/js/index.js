$(document).ready(function () {
    var currentMainId = "#index-main-container";

    var peopleInfo = {
        "phdYear": "all",
        "postgraduateYear": "all"
    };

    var publicationInfo = {
        "paperType": "conference",
        "paperYear": "2020"
    }

    function handleClickInPeople() {
        $(".img-box.phd").hide();
        $(".img-box.postgraduate").hide();
        if (peopleInfo.phdYear === "all") {
            $(".img-box.phd").show();
        } else {
            $(".img-box.phd." + peopleInfo.phdYear).show();
        }
        if (peopleInfo.postgraduateYear === "all") {
            $(".img-box.postgraduate").show();
        } else {
            $(".img-box.postgraduate." + peopleInfo.postgraduateYear).show();
        }
    }

    function handleClickInPublication() {
        $(".publications").hide();
        $(".publications." + publicationInfo.paperType + "." + publicationInfo.paperYear).show();
    }

    function handleClickTopNav() {
        $(".main").hide();
        $(currentMainId).show();
    }

    $(".img-nav-item.phd").first().css("background-color", "blueviolet");
    $(".img-nav-item.postgraduate").first().css("background-color", "blueviolet");
    handleClickTopNav();
    $(".top-nav-link").first().css("color", "blue");
    handleClickInPublication();
    $(".publication-nav-category").first().css("color", "blueviolet");
    $(".publication-nav-year").first().css("color", "blueviolet");


    $(".img-nav-item.phd").click(function (event) {
        $(".img-nav-item.phd").css("background-color", "white");
        $(event.currentTarget).css("background-color", "blueviolet");
        var choice = event.originalEvent.target.innerText;
        peopleInfo.phdYear = choice;
        handleClickInPeople();
    });

    $(".img-nav-item.postgraduate").click(function (event) {
        $(".img-nav-item.postgraduate").css("background-color", "white");
        $(event.currentTarget).css("background-color", "blueviolet");
        var choice = event.originalEvent.target.innerText;
        peopleInfo.postgraduateYear = choice;
        handleClickInPeople();
    });

    $(".top-nav-link").click(function (event) {
        $(".top-nav-link").css("color", "black");
        $(event.currentTarget).css("color", "blue");
        var choice = event.originalEvent.target.innerText;
        switch (choice) {
            case "HOME":
                currentMainId = "#index-main-container";
                break;
            case "PEOPLE":
                currentMainId = "#people-main-container";
                break;
            case "PUBLICATIONS":
                currentMainId = "#publication-main-container";
                break;
            case "PROJECTS":
                currentMainId = "#projects-main-container";
                break;
        }
        handleClickTopNav();
    });


    $(".publication-nav-category").click(function (event) {
        $(".publication-nav-category").css("color", "black");
        $(event.currentTarget).css("color", "blueviolet");
        var choice = event.originalEvent.target.innerText;
        switch (choice) {
            case "Conference Papers":
                publicationInfo.paperType = "conference";
                break;
            case "Transaction Papers":
                publicationInfo.paperType = "transaction";
                break;
            case "Journal Papers":
                publicationInfo.paperType = "journal";
                break;
        }
        handleClickInPublication();
    });

    $(".publication-nav-year").click(function (event) {
        $(".publication-nav-year").css("color", "black");
        $(event.currentTarget).css("color", "blueviolet");
        var choice = event.originalEvent.target.innerText;
        publicationInfo.paperYear = choice;
        handleClickInPublication();
    });

});