document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomer);

// create ul
function createUL (customer_object) {
    return `
            <ul>
                <li>ID: ${customer_object.id}</li>
                <li>name: ${customer_object.name}</li>
                <li>Company: ${customer_object.company}</li>
                <li>Phone: ${customer_object.phone}</li>
            </ul>
            `
}

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    let url,
        customer_div_id;

    if (e.target.id === 'button1') {
        url = 'json_files/customer.json';
        customer_div_id = 'customer';
    } else {
        url = 'json_files/customers.json';
        customer_div_id = 'customers';
    }

    xhr.open('GET', `${url}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let results = Array.isArray(customers);

            // to check if its an array or not..if array that means we have many customers.
            console.log(results); // returns true or false

            if (!results) {
                document.getElementById(`${customer_div_id}`).innerHTML = createUL(customers);
            } else {

                // loop through the list of now many customers.
                customers.forEach(function (customer) {
                    document.getElementById(`${customer_div_id}`).innerHTML += createUL(customer);
                })
            }

        }
    }

    xhr.send();
}

