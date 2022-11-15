document.querySelector('.button').addEventListener('click', loadData)

function loadData() {
    // create a new object
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true)
    // pass in the type of method you want. the get request. and the url then set the async to true.

    // optional used for spinners or loaders. something to display while its loading
    xhr.onprogress = function () {
        console.log('hey')
    }

    xhr.onload = function () {
        // check first for the status to be equal to 200.
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerText = this.responseText;
        }
    }

    // in case something goes wrong.
    xhr.onerror = function () {
        // send our message in case something goes wrong.
    }

    xhr.send();
    // then finally you have to hit send.
}