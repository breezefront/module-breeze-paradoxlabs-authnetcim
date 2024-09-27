define([], () => {
    'use strict';

    if (!$.breezemap.mageUtils) {
        $.breezemap.mageUtils = {};
    }

    if (!$.breezemap.mageUtils.isEmpty) {
        $.breezemap.mageUtils.isEmpty = $.validator.utils.isEmpty;
    }
});
