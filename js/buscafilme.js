if (!localStorage.busca == "") buscar(localStorage.busca);
async function buscar(element) {
    if (element == undefined) console.log("no element");
    let input = element || document.getElementById("movie").value;
    let containerfluid = document.getElementById("containerp");
    containerfluid.style.height = "50px";
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=e8537246";

    try {
        const result = await axios.get(url + "&t=" + input)
        if (result.data.Error) console.log('Filme não encontrado');

        if (result.data.Error) {
            let errorFilm = document.getElementById('error');
            errorFilm.style.display = 'initial';
            let valor = "Filme não disponível"
            document.getElementById('container-infos').innerHTML = `<div class="row justify-content-center align-items-center">
            
            <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center" id="imgdiv">
            <img id="posterA">
            </div>
            
            <div class="col-12 col-sm-6">
              <h3 id="title-p"></h3>
              <h5 class="mb-3" id="year-p"></h5>
              <h5 class="lead mb-2" id="actor-p"></h5>
              <h5 class="lead" id="infos-p"></h5>
              </div>
      
              
              </div>`;
            document.getElementById('error').innerText = valor
        }

        if (result.data.Title) {
            let image = document.getElementById("posterA");
            image.setAttribute("src", result.data.Poster);
            image.style.border = "none";
            let title = document.getElementById("title-p");
            title.textContent = result.data.Title;
            let year = document.getElementById("year-p");
            year.textContent = result.data.Year;
            let actor = document.getElementById("actor-p");
            actor.textContent = result.data.Actors;
            let plot = document.getElementById("infos-p");
            plot.textContent = result.data.Plot;
            document.getElementById('container-erro').style.margin = "0px";
            document.getElementById('container-erro').innerHTML = `<div class="container-fluid d-flex justify-content-center align-items-center">
            <h2 id="error"></h2>
          </div>`;
        }
        localStorage.busca = "";
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}