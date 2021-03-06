/*
 * JS objects to HTML.
 * @param {*} data
 * @return {string}
 */
var jshtml = (function() {
    function buildItem(data) {
        if(data === null || data === undefined) {
            return '';
        }

        var buf = [];

        if(isPlainObj(data)) {
            return tag(data);
        } else if(Array.isArray(data)) {
            for(var i = 0, len = data.length; i < len; i++) {
                buf.push(buildItem(data[i]));
            }

            return buf.join('');
        } else {
            return '' + data;
        }
    }

    function tag(data) {
        var t = data.t || 'div',
            text = '<' + t + attrs(data) + '>';

        if(data.c) {
            text += buildItem(data.c);
        }

        text += '</' + t + '>';

        return text;
    }

    function attrs(data) {
        var keys = Object.keys(data),
            ignoredItems = ['c', 't', 'e', 'm'], // content, tag, element, modifier
            text = [],
            classes = [],
            i, len,
            buf = '';

        if(data.e) {
            classes.push(elem(data.e));
        }

        if(data.m) {
            if(data.e) {
                for(i in data.m) {
                    if(data.m.hasOwnProperty(i)) {
                        classes.push(elem(data.e, i, data.m[i]));
                    }
                }
            } else {
                for(i in data.m) {
                    if(data.m.hasOwnProperty(i)) {
                        classes.push(mod(i, data.m[i]));
                    }
                }
            }
        }

        if(classes.length) {
            text.push(attr('class', classes));
        }

        for(i = 0, len = keys.length; i < len; i++) {
            var item = keys[i];
            if(ignoredItems.indexOf(item) === -1) {
                text.push(attr(item, data[item]));
            }
        }

        buf = text.join(' ');

        return buf ? ' ' + buf : '';
    }

    function attr(name, value) {
        return value !== null && value !== undefined ?
            name + '="' + (Array.isArray(value) ? value.join(' ') : value) + '"' : '';
    }

    return buildItem;
})();
