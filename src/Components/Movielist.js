import React, { Component } from "react";
import axios from "axios";

import Pagination from "react-js-pagination";
import Searchbox from "./Searchbox"
import MovielistItems from "./MovielistItems";

class Movielist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movielist: [],
      activePage: 1,
      totalResultss: "",
      search: "Batman",
      loading: false
    };
  }
  componentDidMount() {
    this.fetchrequest(this.state.search, this.state.activePage);
  }

  changeHandlersearch = param => {
    this.setState({ search: param });
  };

  handlePagesubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.setState({ activePage: 1 });

    this.fetchrequest(this.state.search, this.state.activePage);
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
    this.setState({ loading: true });

    this.fetchrequest(this.state.search, pageNumber);
  };

  fetchrequest = (search, pageNumber) => {
    let url = `http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s=${search}&page=${pageNumber}`;
    console.log(url);
    axios
      .get(url)
      .then(res => {
        const movielist = res.data.Search;
        const totalResults = res.data.totalResults;
        this.setState({
          movielist: movielist,
          totalResultss: totalResults,
          loading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    let totalmovies = this.state.totalResultss;
    let searchmovie = this.state.search;
    let totalItemsCount = this.state.totalResultss;

    return (
      <>
    <Searchbox submitHandler={this.handlePagesubmit} changehandler={this.changeHandlersearch} />
      

          <h3>
            You searched for {searchmovie},{totalmovies} results found
          </h3>

          <MovielistItems movielist={this.state.movielist} />

        <div>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange}
          />
        </div>
      </>
    );
  }
}

export default Movielist;
