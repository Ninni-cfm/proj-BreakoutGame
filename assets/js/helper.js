
//1px = 100vw / viewport's width (in px)
function pxToVw(px) {
    return px * (100 / document.body.clientWidth);
}


//1vw = viewport's width (in px) / 100
function vwToPx(vw) {
    vw = vw.replace("vw", "");
    return `${vw * (document.body.clientWidth / 100)}`;
}

//1vh = viewport's height (in px) / 100
function vhToPx(vh) {
    vh = vh.replace("vh", "");
    return `${vh * (document.body.clientHeight / 100)}`;
}


function convertToPx(value) {

    if (value.includes('vw')) {
        return vwToPx(value);
    } else if (value.includes('vh')) {
        return vwToPx(value);
    } else if (value.includes('px')) {
        return value.replace("px", "");
    }
    return value;
}

