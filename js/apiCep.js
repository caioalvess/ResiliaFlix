

const cep = document.getElementById("cep");


cep.addEventListener("blur", (e) => {
    let procurar = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${procurar}/json`, options)
        .then(response => {
            response.json()
                .then(data => Showdata(data))
        })
        .catch(e => console.log("Deu erro: " + e.message))
})

const Showdata = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
        }
    }
}    
