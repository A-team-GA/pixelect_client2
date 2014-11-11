var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'users': 'users', // users does not exist
        'image_sets': 'image_sets', // this is the same as root of heroku api
        'images': 'images',
        'comments': 'comments',
        'likes': 'likes',
        'postImages': 'postImages'
    },

    home: function() {
      $('#content').empty();
        $.ajax({
            url: 'https://pixelect-rails-api.herokuapp.com', // changed from /images
            type: 'GET'
        }).done(function(response) {
            console.table(response);
        });
    },

    users: function() {
      $('#content').empty();

        $.ajax({
            url: 'https://pixelect-rails-api.herokuapp.com/users',
            type: 'GET'
        }).done(function(response) {
            console.log(response);
            var template = Handlebars.compile($('#usersTemplate').html());
              $('#content').html(template({
                user: response
            }));
        });
    },

    image_sets: function() {
      $('#content').empty();

        $.ajax({
            url: 'https://pixelect-rails-api.herokuapp.com/image_sets', //changed form /image_sets
            type: 'GET'
        }).done(function(response) {
            console.log(response);
            var template = Handlebars.compile($('#imageSetsTemplate').html());
              $('#content').html(template({
                image_set: response
            }));
        });
    },


    // postImages: function() {
    //     $.ajax({
    //         url: 'https://pixelect-rails-api.herokuapp.com/images',
    //         type: 'POST',
    //         // data: { image: {
    //         //             file_name: '',
    //         //             image_url: '',
    //         //             flag: 0,
    //         //             image_set_id: '',
    //         //             created_at: ,
    //         //             updated_at:
    //         //             }
    //         //         }
    //         data: { image: {
    //                     file_name: 'red line',
    //                     image_url: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/1226491/6JCmWkMbIiZofmI/2px-2col-1w-0gut.png',
    //                     image_file: '/Users/laurenfazah/Desktop/this.jpg',
    //                     flag: 0,
    //                     image_set_id: 1,
    //                     }
    //                 }
    //     }).done(function(response) {
    //         console.table(response);
    //     });
    // },


    images: function() {
      $('#content').empty();

        $.ajax({
            url: 'https://pixelect-rails-api.herokuapp.com/images',
            type: 'GET'
        }).done(function(response) {
            // console.log(response);
            var template = Handlebars.compile($('#imagesTemplate').html());
              $('#content').html(template({
                image: response
            }));
        });
    },


    comments: function() {
      $('#content').empty();

        $.ajax({
            url: 'https://pixelect-rails-api.herokuapp.com/comments',
            type: 'GET'
        }).done(function(response) {
            console.log(response);
            var template = Handlebars.compile($('#commentsTemplate').html());
              $('#content').html(template({
                comment: response
            }));
        });
    },

    likes: function() {
      $('#content').empty();

        $.ajax({
            url: 'https://pixelect-rails-api.herokuapp.com/likes',
            type: 'GET'
        }).done(function(response) {
            console.log(response);
            var template = Handlebars.compile($('#likesTemplate').html());
              $('#content').html(template({
                like: response
            }));
        });
    }
});

var router = new Router();

Backbone.history.start();
