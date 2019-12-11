var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        console.log("OnDeviceReady function");
        $("#firstPage").click(app.firstPageClick);
        $("#secondPage").click(app.secondPageClick);
        $("#thirdPage").click(app.thirdPageClick);
    },
   
    firstPageClick: function(){
        console.log("firstPage clicked");
        app.showPage(".page1");
    },

    secondPageClick: function(){
        console.log("secondPage clicked");
        app.showPage(".page2");
    },

    thirdPageClick: function(){
        console.log("thirdPage clicked");
        app.showPage(".page3");
    },

    showPage: function(cssClass) { 
        $(".page").hide();
        $(cssClass).show(); 
    }
};
