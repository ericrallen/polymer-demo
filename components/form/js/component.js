Polymer({
    is: 'component-form',

    properties: {
        title: {
            type: String,
            value: function() {
                return this.title ? this.title : 'Polymer Test Form';
            }
        },
        message: {
            type: String,
            notify: true
        },
        genders: {
            type: Array,
            value: function() {
                return [
                    {
                        id: 'male',
                        value: 'Male',
                        status: false
                    },
                    {
                        id: 'female',
                        value: 'Female',
                        status: false
                    },
                    {
                        id: 'no-answer',
                        value: 'No Answer',
                        status: false
                    }
                ]
            }
        },
        classifications: {
            type: Array,
            value: function() {
                return [
                    {
                        id: 'machine',
                        value: 'Machine',
                        status: 'checked'
                    },
                    {
                        id: 'human',
                        value: 'Human',
                        status: ''
                    }
                ]
            }
        },
        user: {
            type: Object,
            notify: true,
            value: function() {
                return {
                    first: 'Anonymous',
                    last: 'User'
                };
            }
        }
    },

    // Element Lifecycle
    ready: function() {
        this.user.classification = [];
        this.user.gender = '';

        this.message = this.updateMessage();
    },

    attached: function() {
      console.log('form attached');
    },

    detached: function() {
      console.log('form detached');
    },

    //Custom Events
    setGender: function(e) {
        if(e.target.checked) {
            this.user.gender = e.target.value;
        }

        this.message = this.updateMessage();
    },

    setClassification: function(e) {
        if(e.target.checked) {
            if(this.user.classification.indexOf(e.target.vaue) === -1) {
                this.user.classification.push(e.target.value);
            }
        } else {
            if(this.user.classification.indexOf(e.target.value) !== -1) {
                this.user.classification.splice(this.user.classification.indexOf(e.target.value), 1);
            }
        }

        this.message = this.updateMessage();
    },

    updateMessage: function() {
        var str = '';

        if(this.user.gender || this.user.classification.length > 0) {
            str += ', the';

            switch(this.user.gender) {
                case 'male':
                    str += ' handsome';
                    break;
                case 'female':
                    str += ' radiant';
                    break;
                case 'no-answer':
                default:
                    str+= '';
            }

            if(this.user.classification.length > 0) {
                if(this.user.classification.indexOf('machine') !== -1 && this.user.classification.indexOf('human') !== -1) {
                    str += ' cyborg';
                } else {
                    if(this.user.classification.indexOf('machine') !== -1) {
                        str += ' automaton';
                    } else if(this.user.classification.indexOf('human') !== -1) {
                         if(this.user.gender) {
                            switch(this.user.gender) {
                                case 'male':
                                    str += ' man';
                                    break;
                                case 'female':
                                    str += ' woman';
                                    break;
                                case 'no-answer':
                                default:
                                    str+= ' human';
                            }
                        }
                    }
                }
            } else {
                str += ' user';
            }
        }

        str += '.';

        console.log(str);

        return str;
    }
});
