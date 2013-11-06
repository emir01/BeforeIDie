﻿// Script handling the basic client side namespacing functionality.
// includes the main initialization module
(function (bid) {

    // setup the namespacing function
    bid.namespace = function (ns_string, value) {
        var parts = ns_string.split('.'),
            parent = bid,
            i;

        // remove the leading global
        if (parts[0] === "BID") {
            parts = _.last(parts, parts.length - 1);
        }

        for (i = 0; i < parts.length; i += 1) {
            // If there is no object defined under parent.name
            if (typeof parent[parts[i]] === "undefined") {
                // create one
                if (i == parts.length - 1) {
                    // If a value was provided set the latest parent to that value
                    if (typeof value !== "undefined") {
                        parent[parts[i]] = value;
                    }
                    else {
                        parent[parts[i]] = {};
                    }
                }
                else {
                    parent[parts[i]] = {};
                }
            }
            // set the parent to the proper child
            parent = parent[parts[i]];
        }
        return parent;
    };

})(window.BID = window.BID || {});