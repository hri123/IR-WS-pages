var exports = module.exports = {};

exports.ListNode = function (in_data) {
    
    var data;
    var next;
    
    data = in_data;
    
    return {
        setData: function(in_data) {
            data = in_data;
        },
        
        getData: function () {
            return data;
        },
        
        setNext: function (in_next) {
            next = in_next;
        },
        
        getNext: function() {
            return next;
        }
    }
    
};

// Usage:

// var moduleListNode = require('./ListNode.js');

// var obj = new moduleListNode.ListNode(10);

// console.log(obj.getData());