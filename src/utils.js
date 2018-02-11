
export const isLoggedIn = function () {
    chrome.storage.sync.get("userName", function (items) {
        if (items.userName.length > 0) {
            return true
        }
    })
    return false;
}

export const createDOMElement = function (details) {
    const {tag} = details;
    const el = document.createElement(tag)
    for (let prop in details) {
        el.setAttribute(prop, details[prop])
    }
    return el;
}

export const setAttr = function (el) {
    if (!el) {
        return function () {
            console.error('No element @ setAttr')
        }
    }

    return function (attr) {
        for (let a in attr) {
            el.setAttribute(
                a, attr[a]
            )
        }
        return el;
    }
}


export function LogIn(who) {
    if (!who) {
        return
    }
    chrome.storage.sync.set({'userName': who}, function () {
        alert('Set user: ' + who);
    });
}

function LogOut() {
    chrome.storage.sync.set({'userName': ""}, function () {
        alert('Logged Out');
    });
}

