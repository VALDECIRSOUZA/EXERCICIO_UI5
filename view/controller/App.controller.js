sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'

], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend('ui5.product.list.controller.App', {

        onePressNewProduct: function () {

            MessageToast.show('New Product created', {
             at: 'center top'

            })
        }

    })
});