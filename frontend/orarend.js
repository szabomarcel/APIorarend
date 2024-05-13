const apiurl = "http://localhost/APIorarend/backend/index.php?ora";
document.addEventListener ("DOMContentLoaded", function(){
    async function getOrasok() {
        response = await fetch(apiurl);
        data = await response.json();
        console.log(data);
        showorasok(data);
    }
    function showorasok(data){
        let orakHtml = "";
        for(let oras of data){
            orakHtml += `<div class="card col-lg-3 col-md-4 col-sm-6 m-1">
            <div class="card-body">
            <h5 class="card-title">${oras.oraid}</h5>
            <p class="card-text">tantárgy: ${oras.tantargy}</p>
            <p class="card-text">sorszám: ${oras.sorszam}</p>
            <p class="card-text">hétnapja: ${oras.hetnapja}</p>
            </div></div>`;
        }
        document.getElementById("orak").innerHTML=orakHtml;
    }
    getOrasok();
})