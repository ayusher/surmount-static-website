$("[data-media]").on("click", function(e) {
    window.console&&console.log('foo');

    e.preventDefault();
    var $this = $(this);
    var videoUrl = $this.attr("data-media");
    var popup = $this.attr("href");
    var $popupIframe = $(popup).find("iframe");
    
    $popupIframe.attr("src", videoUrl);
    
    $this.closest(".page").addClass("show-popup");
});

$(".popup").on("click", function(e) {
    console.log("HELLO");

    e.preventDefault();
    e.stopPropagation();
    
    $(".page").removeClass("show-popup");
});

$(".popup > iframe").on("click", function(e) {
    console.log("HELLO");
    e.stopPropagation();
});