//=============================================================================
//【ファイル名】
//    template_pc.js
//【アプリ名】
//    PC用テンプレートJSファイル
//【タイプ】
//    ●PC用 / ○スマートフォン用
//-----------------------------------------------------------------------------
//  Copyright (c) 20XX COMPANY_NAME
//=============================================================================

(function () {

    'use strict';

    // =============================================
    // EVENT:create.submit
    // =============================================
    kintone.events.on([
        'app.record.create.submit'
    ], function(event) {
        let record = event.record;
        
        validation(event);
        if (event.error) {
            return event;
        }
        
        return event;
    });  // end kintone.events.on [create.submit]

    // =============================================
    // EVENT:edit.submit, index.edit.submit
    // =============================================
    kintone.events.on([
        'app.record.edit.submit', 'app.record.index.edit.submit'
    ], function(event) {
        let record = event.record;
        
        validation(event);
        if (event.error) {
            return event;
        }
        
        return event;
    });  // end kintone.events.on [edit.submit, index.edit.submit]

    // =============================================
    // EVENT:create.show
    // =============================================
    kintone.events.on([
        'app.record.create.show'
    ], function(event) {
        let record = event.record;
        
        setCommonInputCtrl(record);

        return event;
    });  // end kintone.events.on [create.show]

    // =============================================
    // EVENT:edit.show, index.edit.show
    // =============================================
    kintone.events.on([
        'app.record.edit.show', 'app.record.index.edit.show'
    ], function(event) {
        let record = event.record;
        
        setCommonInputCtrl(record);

        return event;
    });  // end kintone.events.on [edit.show, index.edit.show]

    // =============================================
    // EVENT:index.show
    // =============================================
    kintone.events.on([
        'app.record.index.show'
    ], function(event) {
        let records = event.records;

        return event;
    });  // end kintone.events.on [index.show]

    // =============================================
    // 共通入力画面制御
    // =============================================
    let setCommonInputCtrl = function (record) {
        
        // record.XXXXX.disabled = true;

    };  // setCommonInputCtrl
    
    // =============================================
    // validation
    // =============================================
    let validation = function (event) {
        
        let record = event.record;
        
        let errorFlg = false;
        
        let errorMsg = '';

        //     if (record.XXXXX.value) {
        //         record.XXXXX.error = '入力しないでください。';
        //         errorFlg = true;
        //     }
        // }

        if (errorFlg === true) {
            event.error = '入力内容に不備があります。';
        };
        
    };  // validation
    
})();


