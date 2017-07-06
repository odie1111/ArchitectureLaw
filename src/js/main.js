var app = new Vue({
    el: '#root',
    data: {
        law_items: {},
        chapter: '',
        letter_item: {},
        showModal: false
    },
    methods: {
        openLetterModal: function(event) {
            var targetId = event.currentTarget.id;
            console.log(targetId);
            this.showModal = true;

            // testing content
            var test_content = {"law": "第一章 第 1 條 第 3 款", "letters": [{"entries": "內政部函 67. 05. 31. 台內營字第 789796 號", "contents": ["1 主旨：建築物陽台外緣有結構樑時（如圖示），仍得依建築技術規則建築設計施工編第一條第三款之規定，自其外緣起扣除一公尺（註）後計算建築面積。請  查照。", "說明：復 67. 05. 15. 建四字第 71027 號函。", "※註：本函中「一公尺」，現行建築技術規則建築設計施工編第一條第三款已修正為「二點零公尺」"], "img": "", "table": ""}, {"entries": "內政部函 68. 04. 12. 台內營字第 002612 號", "contents": ["2 主旨：核釋既成巷路（註一）上空可否加建一公尺（註二）寬之陽台疑義，請查照。", "說明：", "一、復貴局 68. 02. 27. 北市工建字第 61562 號函。", "二、按既成巷路為供公眾通行道路之一，具有公共地役關係存在，為維護公益自不得於其上空加建陽台以妨害交通。", "※註一：本函主自及說明二中之「既成巷路」，現行建集技術規則建築設計施工編第 1 條第 36 款已修正為「現有巷道」。", "※註二：建築技術規則原規定陽台應自外緣扣除「一公尺」後計算建築面積，現行條文已修正為「二點零公尺」。"], "img": "", "table": ""}, {"entries": "內政部函 67. 05. 31. 台內營字第 789796 號", "contents": ["3 主旨：建築物陽台外緣有結構樑時（如圖示），仍得依建築技術規則建築設計施工編第一條第三款之規定，自其外緣起扣除一公尺（註）後計算建築面積。請  查照。", "說明：復 67. 05. 15. 建四字第 71027 號函。", "※註：本函中「一公尺」，現行建築技術規則建築設計施工編第一條第三款已修正為「二點零公尺」"], "img": "", "table": ""},{"entries": "內政部函 67. 05. 31. 台內營字第 789796 號", "contents": ["4 主旨：建築物陽台外緣有結構樑時（如圖示），仍得依建築技術規則建築設計施工編第一條第三款之規定，自其外緣起扣除一公尺（註）後計算建築面積。請  查照。", "說明：復 67. 05. 15. 建四字第 71027 號函。", "※註：本函中「一公尺」，現行建築技術規則建築設計施工編第一條第三款已修正為「二點零公尺」"], "img": "", "table": ""},{"entries": "內政部函 67. 05. 31. 台內營字第 789796 號", "contents": ["5 主旨：建築物陽台外緣有結構樑時（如圖示），仍得依建築技術規則建築設計施工編第一條第三款之規定，自其外緣起扣除一公尺（註）後計算建築面積。請  查照。", "說明：復 67. 05. 15. 建四字第 71027 號函。", "※註：本函中「一公尺」，現行建築技術規則建築設計施工編第一條第三款已修正為「二點零公尺」"], "img": "", "table": ""},{"entries": "內政部函 67. 05. 31. 台內營字第 789796 號", "contents": ["6 主旨：建築物陽台外緣有結構樑時（如圖示），仍得依建築技術規則建築設計施工編第一條第三款之規定，自其外緣起扣除一公尺（註）後計算建築面積。請  查照。", "說明：復 67. 05. 15. 建四字第 71027 號函。", "※註：本函中「一公尺」，現行建築技術規則建築設計施工編第一條第三款已修正為「二點零公尺」"], "img": "", "table": ""},{"entries": "內政部函 67. 05. 31. 台內營字第 789796 號", "contents": ["7 主旨：建築物陽台外緣有結構樑時（如圖示），仍得依建築技術規則建築設計施工編第一條第三款之規定，自其外緣起扣除一公尺（註）後計算建築面積。請  查照。", "說明：復 67. 05. 15. 建四字第 71027 號函。", "※註：本函中「一公尺」，現行建築技術規則建築設計施工編第一條第三款已修正為「二點零公尺」"], "img": "", "table": ""}]};
            app.letter_item = test_content;
            console.log(test_content);

        }
    },
    components: {
        'law': {
            template: `
                <div class="row entries">
                    <div class="col-xs-12 col-sm-2">
                        <slot name="title"></slot>
                    </div>
                    <div class="col-xs-12 col-sm-10">
                        <slot name="contents"></slot>
                    </div>
                </div>
            `
        },
        'letter-modal': {
            template: `
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-container">
                                <div class="modal-header">
                                    <slot name="header"></slot>
                                </div>
                                <div class="row entries modal-body">
                                    <div class="col-xs-12 col-sm-3 letter-box">
                                        <slot name="entries"></slot>
                                    </div>
                                    <div class="col-xs-12 col-sm-9 letter-box">
                                        <slot name="contents"></slot>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <slot name="footer">
                                        <button class="modal-default-button" @click="close()">返回</button>
                                    </slot>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            `,
            methods: {
                close: function() {
                    this.$emit('close');
                }
            }
        },
        'zap-slideout': {
            template: `
                <div class="zap-slideout" :class="{ isOpen: isOpen }">
                    <div class="zap-slideout-opener" @click="toggle">{{openerText}}</div>
                        <ul class="zap-slideout-menu">
                            <li class="zap-slideout-menu-item" v-for="item in menu">{{item}}</li>
                            <li class="zap-slideout-menu-item--small" v-for="item in smallMenu">{{item}}</li>
                        </ul>
                    </div>
                </div>
            `,
            data: () => ({
                openerText: 'Open',
                isOpen: false,
                menu: [ 'Home', 'Work', 'Contact' ],
                smallMenu: [ 'Tips', 'Resources', 'Shenanigans' ]
            }),
            methods: {
                open() {
                    this.openerText = 'Close';
                    this.isOpen = true;
                },
                close() {
                    this.openerText = 'Open';
                    this.isOpen = false;
                },
                toggle() {
                    if (this.isOpen) {
                        this.close();
                    } else {
                        this.open();
                    }
                }
            }
        }
    }
});

$('.chapter').click(function() {
    var url = 'https://firebasestorage.googleapis.com/v0/b/buildingtechnicalregulations.appspot.com/o/' + $(this).attr('id') + '.json?alt=media';
    $.getJSON(url, function(data){
        app.law_items = data.laws;
        app.chapter = data.chapter;
    });
});
