import React from 'react'

function MovielistItems(props) {
    


    let movielisting = <h1>There's no movies</h1>;

    if (props.movielist) {
      movielisting = props.movielist.map(movie => (

        
      
       


        <div className="col-md-4"  key={movie.imdbID}>
          <div className="card mb-4 box-shadow">
            <img className="card-img-top"  style={{height: '225px', width: '100%', display: 'block'}} 
   src={movie.Poster} onError={(e)=>{e.target.onerror = null; e.target.src="https://dummyimage.com/250/cccccc/000000"}}

   data-holder-rendered="true" />
            <div className="card-body">
              <p className="card-text">Name : {movie.Title}</p>
                
              <p className="card-text">Year : {movie.Year}</p>
              <p className="card-text">imdbID : {movie.imdbID}</p>
              <p className="card-text">Type : {movie.Type}</p>
             
            </div>
          </div>
        </div>
     


  
      ));
    }

    
    return (
        <> 

        
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container">
          <div className="row">
          {movielisting}
          </div>
          
          </div>
        </div>
      </main>

      

        </>
    )
}

export default MovielistItems
