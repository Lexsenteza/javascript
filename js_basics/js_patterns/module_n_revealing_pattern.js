// basic structure

// create an effy function.
// (function () {
//     // declare private vars and functions
//     return {
//         // declare public vats and functions.
//     }
// })()

// standard module pattern.
const UICtrl = (function () {
    let text = 'hello world';

    const changeTExt = () => {
        const element = document.querySelector('h1');
        element.innerText = text;
    }

    return {
        callTextChange: function () {
            changeTExt();
        }
    }
})();

UICtrl.callTextChange();
// you cant call the UICtrl.ChangeTExt() because it is a private function and hasn't been delcated public.


// revealing model function
// this returns an object literal that is directily mapping and revealing methods that are inside the module.
const itemController = (function () {
    let data = [];

    function add (item) {
        data.push(item);
        console.log('item added');
    }

    function get (id) {
        return data.find(item => {
            return item.id === id
        })
    }
    return {
        add: add,
        get: get
    }
})()

itemController.add({id:1, name: 'john'})
console.log(itemController.get(1))