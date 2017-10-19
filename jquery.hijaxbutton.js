/**
* @file jQuery collection plugin that changes anchor tag semantics and behaviour to button semantics and behaviour
* @version 0.0.2
* @author Ian McBurnie <ianmcburnie@hotmail.com>
*/
(function($, window, document, undefined) { // eslint-disable-line no-unused-vars
    /**
    * jQuery collection plugin that changes anchor tag semantics and behaviour to button semantics and behaviour
    *
    * @method "jQuery.fn.hijaxButton"
    * @return {jQuery} chainable jQuery class
    */
    $.fn.hijaxButton = function hijaxButton() {
        var pluginName = 'jquery-hijax-button';

        return this.each(function onEachHijaxButton() { // eslint-disable-line consistent-return
            var $widget = $(this);
            var tagName = $widget.prop('tagName').toLowerCase();

            // hijax button is only valid on anchor tag
            if (tagName !== 'a') {
                console.log('error: {pluginName} is not valid on {tagName} tag'
                    .replace('{pluginName}', pluginName).replace('{tagName}', tagName));
                return false;
            }

            // add button behaviour: map spacebar key to click event
            var onWidgetKeyDown = function onWidgetKeyDown(e) {
                if (e.keyCode === 32) {
                    e.preventDefault();
                    e.type = 'click';
                    $(this).trigger(e);
                }
            };

            // add button behaviour: prevent click event from opening url
            var onWidgetClick = function onWidgetClick(e) {
                e.preventDefault();
            };

            // add button semantics
            $widget.attr('role', 'button');

            // listen for keydown on widget
            $widget.on('keydown', onWidgetKeyDown);

            // listen for click on widget
            $widget.on('click', onWidgetClick);

            // mark button as initialised
            $widget.addClass('hijax-button--js');
        });
    };
}(jQuery, window, document));

/**
* The jQuery plugin namespace.
* @external "jQuery.fn"
* @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
*/
