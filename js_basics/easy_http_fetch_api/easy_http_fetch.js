class EasyHttp {
    // make http get request.
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })

    }

    // make http post request.
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
                .then(data_received => resolve(data_received))
                .catch(err => reject(err))
        })
    }

    // make a put request or an update request.
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
                .then(data_received => resolve(data_received))
                .catch(err => reject(err))
        })
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            }).then(response => response.json())
                .then(() => resolve('resource deleted'))
                .catch(err => reject(err))
        })
    }
}

