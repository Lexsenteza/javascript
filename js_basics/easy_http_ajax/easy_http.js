// document.querySelector('.hey').addEventListener('click',  e => {
//     console.log(e.target);
//     }
// )


function EasyHttp() {
    this.http = new XMLHttpRequest();
}

// make an http get request
EasyHttp.prototype.get = function (url, callBack) {
    this.http.open('GET', url, true);

    this.http.onload = () => {
        if (this.http.status === 200) {
            callBack(null, this.http.responseText);
            // null is the error for incase there ever is one.
        } else {
            callBack(`Error: ` + this.http.status);
        }
    }

    // let self = this;
    // this.http.onload = function () {
    //     if (self.http.status === 200) {
    //         console.log(self.http.responseText);
    //     }
    // }
    this.http.send();
}

// make an http post request
EasyHttp.prototype.post = function (url, data, callBack) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callBack(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// make a http put request
EasyHttp.prototype.put = function (url, data, callBack) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callBack(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// make an http delete request
EasyHttp.prototype.delete = function (url, callBack) {
    this.http.open('DELETE', url, true);

    this.http.onload = () => {
        if (this.http.status === 200) {
            callBack(null, 'POST WAS DELETED.');
            // null is the error for incase there ever is one.
        } else {
            callBack(`Error: ` + this.http.status);
        }
    }

    // let self = this;
    // this.http.onload = function () {
    //     if (self.http.status === 200) {
    //         console.log(self.http.responseText);
    //     }
    // }
    this.http.send();
}