var app = {
    initialize: function() {
        this.bindEvents();
        this.setupVue();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
    
    setupVue: function() {
        var vm = new Vue({
            el: "#app",
            data: {
                randomWord: '',
                words: [
                    'formidable',
                    'gracious',
                    'daft',
                    'mundane',
                    'onomatopoeia'
                ]
            },
            methods: {
                getRandomWord: function() {
                    var randomIndex = Math.floor(Math.random() * this.words.length);
                    this.randomWord = this.words[randomIndex];
                }
            } // end methods
        });    
    }
};

app.initialize();