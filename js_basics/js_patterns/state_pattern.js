const PageState = function () {
    let current_state = new HomeState();

    this.init = function () {
        this.change(new ContactState);
    }

    this.change = function (state) {
        current_state = state;
    }
}

const HomeState = function (page) {
    document.querySelector('#heading').textContent = null
    document.querySelector('#content').innerHTML = `
    <p>This is the home page state</p>
    `
}

const AboutState = function (page) {
    document.querySelector('#heading').textContent = 'About us'
    document.querySelector('#content').innerHTML = `
    <p>This is the about page state. where you will find everything about us</p>
    `
}
const ContactState = function (page) {
    document.querySelector('#heading').textContent = null
    document.querySelector('#content').innerHTML = `
    <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>     
    `
}

// instantiate pageState
const page = new PageState();

//init the first state
page.init();

// ui variables
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
    page.change(new HomeState);
    e.preventDefault();
})

about.addEventListener('click', (e) => {
    page.change(new AboutState);
    e.preventDefault();
})

contact.addEventListener('click', (e) => {
    page.change(new ContactState);
    e.preventDefault();
    })
