describe("jquery.hijaxbutton.js", function() {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500;

    var dummyEventTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL / 2;

    var dom = '<a class="hijax-button" href="http://my.ebay.com">Link</a>';

    var $widget;

    var dummyEventHandlers = {
        onButtonFocus : function(e) {},
        onFlyoutCollapse : function(e) {}
    };

    beforeEach(function() {
        $widget = $('.hijax-button');
    });

    it("plugin should not be undefined", function() {
        expect($.fn.hijaxButton).not.toBe(undefined);
    });

});
