function handleFormSubmit(event) {
    event.preventDefault();


    const data = new FormData(event.target);

    const formJSON = Object.fromEntries(data.entries());

    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');
    formJSON.images = data.getAll('images');


    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
}


const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
$('#myform').serializeArray().submit(function (e) {
    e.preventDefault();
    var data = $(this).serializeFormJSON();
    console.log(data);
});

