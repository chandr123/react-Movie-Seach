import React from 'react'

export default function Searchbox(props) {


    return (
    
<header>
      
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
          Movie Catelog
          </a>

          
<form className="form formsearch" onSubmit={e => props.submitHandler(e)}>
          <input
            className="form-control mr-sm-2 custstyle"
            type="text"
            placeholder="Search movies"  onChange={e => props.changehandler(e.target.value)}
          />         
        </form>
          
        </div>
      </div>
    </header>

    )
}
