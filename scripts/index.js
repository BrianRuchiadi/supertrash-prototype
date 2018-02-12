document.onload = function() {
    // init config
}

window.onscroll = function() {
    if (window.scrollY == 0) {
        HEADER.classList.remove('header-fixed')
    } else {
        HEADER.classList.add('header-fixed')
    }
}

function headerAction(actionName) {
    console.log(["whats the action ", actionName])
    switch (actionName) {
        case 'in':
            HEADER.classList.add('header-fixed')
            break
        case 'out':
            if (window.scrollY == 0) {
                HEADER.classList.remove('header-fixed')
            }
            break
        default:
            break
    }
}