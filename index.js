const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=9de065b7f9c7be647e40eb58a7c3aa2a'
let url = "https://api.themoviedb.org/3/discover/movie?api_key=9de065b7f9c7be647e40eb58a7c3aa2a&sort_by=popularity.desc&page=1"
const form =  document.getElementById('form');
const search = document.getElementById('search');
let movieHTML = document.getElementById("section-film")
let HTML = document.getElementById("search-film")

const getDataApi = ( )=> {


let option = {
    method: "GET",
}
fetch(url,option)
.then((response) => response.json())
.then((result) => {
   
    let movieData = result.results
    movieData.forEach((item,index) => {
        movieHTML.innerHTML += 
        `<div class="card" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w500/`+item.poster_path+`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">`+item.original_title+`</h5>
                <p class="card-text">`+item.release_date+`</p>
                <h5 class="card-rating"><b>`+item.vote_average+`</b></h5>  
                
            </div>
      </div>`
    });
})

.catch((error) => console.log(error))
}
getDataApi()


form.addEventListener('submit', (e) => {
    e.preventDefault();
    hapusData()
    const searchTerm = search.value;
    let url= searchURL+'&query='+searchTerm+'&page=1'
    const getDataApi2 = ( )=> {


        let option = {
            method: "GET",
        }
        fetch(url,option)
        .then((response) => response.json())
        .then((result) => {
           
            
            let movieData = result.results
            movieData.forEach((item,index) => {
                movieHTML.innerHTML += 
                `<div class="card" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w500/`+item.poster_path+`" class="card-img-top" alt="...">
                    <div class="card-body">
                         
                        <h5 class="card-title">`+item.original_title+`</h5>
                        <p class="card-text">`+item.release_date+`</p>
                        <h5 class="card-rating"><b>`+item.vote_average+`</b></h5>  
                        
                    </div>
              </div>`
            });
        })
        
        .catch((error) => console.log(error))
        }
        getDataApi2()
   

})

function hapusData(){
    movieHTML.innerHTML=""
}