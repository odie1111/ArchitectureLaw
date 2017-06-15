Vue.component('law', {
    template: `
        <div class="row">
            <div class="col-xs-12 col-sm-2">
                <slot name="title"></slot>
            </div>
            <div class="col-xs-12 col-sm-10">
                <slot name="contents"></slot>
            </div>
        </div>
    `
});

var app = new Vue({
    el: '#root',
    data: {
        law_items: {},
        chapter: ''
    },
});

$('.chapter').click(function() {
    var url = 'https://firebasestorage.googleapis.com/v0/b/buildingtechnicalregulations.appspot.com/o/' + $(this).attr('id') + '.json?alt=media';
    $.getJSON(url, function(data){
         app.law_items = data.laws;
         app.chapter = data.chapter;
    });
});