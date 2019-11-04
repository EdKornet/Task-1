let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();
//
//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
//
//     request.addEventListener('readystatechange', function () {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);
//
//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });
//
// });

function sendCurrency(elem) {
    elem.addEventListener('input', (e) => {

        e.preventDefault();


        function getData(data) {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('GET', 'js/current.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.send();

                request.onreadystatechange = () => {
                    if(request.readyState === 4) {
                        if(request.status === 200) {
                            resolve(request)
                        }
                        else {
                            reject();

                        }
                    }
                }
            })
        }
        getData()
            .then(request => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(()=> { inputUsd.value = "Что-то пошло не так!";});


    })
}
sendCurrency(inputRub);