Polymer({
    is: 'component-header',

    properties: {
        /**
         * Describes the author of the element, but is really just an excuse to
         * show off JSDoc annotations.
         *
         * @type {{name: string, image: string}}
         */
        page: {
            type: Object,
            value: function() {
                return {
                    title: (this.title ? this.title : 'Testing Page Header')
                }
            }
        }
    },

    // Element Lifecycle
    ready: function() {
        console.log('header ready');
    },

    attached: function() {
      console.log('header attached');
    },

    detached: function() {
      console.log('header detached');
    }
});
