const http = new EasyHttp()

http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err))
