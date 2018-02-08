
window.onload = function(){
    console.log("aha 11")

    console.log('2')
    const findHead = function () {
        const header = document.getElementsByTagName("h1");
        return header;
    }




    const header = findHead();
    console.log(header, "Header")
    header[0].innerHTML = "Legalize it"

    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete') {

        }
    })
}



