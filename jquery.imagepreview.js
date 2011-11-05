(function($) {
    var change_image = function() {
        if(window.FileReader) {
            return function(inbox, pre) {
console.log(inbox, pre);
                var fr = new FileReader();
                fr.onload = function(e) {
                    pre.attr('src', e.target.result);
                };
/* here for debugging
                fr.onerror = function(e) {
                    console.log('error', e);
                    console.log(e.getMessage());
                };
*/
                fr.readAsDataURL(inbox.files[0]);
            };
        } else {
            return function(inbox, pre) {
                if(inbox.val().search('fakepath')) {
                    //console.log('error - cannot get the image');
                } else {
                    var path = inbox.val();
                    pre.attr('src', path);
                }
            };
        }
    }();
    $.fn.preview = function(img) {
        if(img) {
            var previewpane = img;
        } else {
            var previewpane = $("<img class='image_preview'/>");
            this.after(previewpane);
        }
        this.change(function() {
            change_image(this, previewpane);
        });
    };
})(jQuery);
