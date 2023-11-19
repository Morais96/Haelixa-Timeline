(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;

    function isElementCentered(element) {
      var elementTop = element.offset().top;
      var elementHeight = element.height();
      var viewportHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();
      var center = scrollPosition + viewportHeight / 2;
      var elementCenter = elementTop + elementHeight / 2;

      return Math.abs(elementCenter - center) < viewportHeight / 4;
    }

    $(window).scroll(function() {
      selectors.item.each(function(i) {
        var that = $(this);

        if (isElementCentered(that)) {
          selectors.id.css(
            "background-image",
            "url(" +
              that
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          that.addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();
