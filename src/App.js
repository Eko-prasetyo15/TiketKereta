import React, { Component } from 'react';
import './App.css';
// import MovieRow from "./component/MovieRow.js"
import Carousel from "./component/Carousel.js"
// import Footer from "./component/Footer.js"


import $ from "jquery"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // const movies = [
    //   { id: "0", poster: "https://images-na.ssl-images-amazon.com/images/I/719SFBdxRtL._AC_SY879_.jpg", title: "Avenger", deskripsi: "wskjv skdjvnskjf skdfjkldv lskjdvm" },
    //   { id: "1", poster: "https://images-na.ssl-images-amazon.com/images/I/719SFBdxRtL._AC_SY879_.jpg", title: "Avenger", deskripsi: "wskjv skdjvnskjf skdfjkldv lskjdvm" },
    //   ,
    // ]


  }
  perfomSearch(searchTerm) {
    console.log("ini performe seaarcch")
    const urlsearch = "https://jadwalkeretaapi-indonesian-train-schedule-jadwal-kereta-v1.p.rapidapi.com/api?dewasa=1&infant=0&regstasiun=1&tanggal=20171106&apikey=101487229685974604868" + searchTerm
    $.ajax({
      url: urlsearch,
      success: (searchResult) => {
        console.log("data sukses")
        // console.log(searchResult)
        const results = searchResult.results
        console.log(results[0])

        var bookingRows = []
        results.forEach((train) => {
          const Form = <Form train={train} />
          bookingRows.push(Form)
        })

        // var movieRows = []
        //     movies.forEach((movie) => {
        //       console.log(movie.title)
        //       const movieRow = <MovieRow movie={movie}/>

        //       movieRows.push(movieRow)
        //     })
        this.setState({ rows: bookingRows })
      },
      error: (xhr, status, err) => {
        console.log("eror bray")
      }
    })
  }

  searchChangeHandler(e) {
    console.log(e.target.value)
    const searchTerm = e.target.value
    this.perfomSearch(searchTerm)
  }
  render() {
    return (
      <div>
        <Carousel />
        <header className="App-header">
          <div>
            <div className="flight-engine">
              <div className="container">
                <div className="tabing">
                  <ul>
                    <li><a className="active" href="#1"><i className="fa fa-train" aria-hidden="true"></i> Kereta</a>
                    </li>
                    <li><a href="#2"><i className="fa fa-train" aria-hidden="true"></i> Kereta</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="1" className="tab1 active">
                      <div className="flight-tab row">
                        <div className="persent-one">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <input type="text" name="dep" className="textboxstyle" id="dep" placeholder="From City or airport" />
                        </div>
                        <div className="persent-one">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <input type="text" name="dep" className="textboxstyle" id="arival" placeholder="To City or airport" />
                        </div>
                        <div className="persent-one less-per">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          <input type="date" name="dep" className="textboxstyle" id="from-date1" placeholder="Berangkat" />
                        </div>
                        <div className="persent-one less-per">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          <input type="date" name="dep" className="textboxstyle" id="to-date" placeholder="Kembali" />
                        </div>
                        <div className="persent-one">
                          <i className="fa fa-user" aria-hidden="true"></i>
                          <div className="textboxstyle" id="passenger">01 Passenger</div>
                        </div>
                        <div className="persent-one less-btn">
                          <input type="Submit" name="submit" value="Search" className="btn btn-info cst-btn" id="srch" />
                        </div>
                      </div>
                    </div>
                    <div id="2" className="tab1">
                      <div className="flight-tab row">
                        <div className="persent-one">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <input type="text" name="dep" className="textboxstyle" id="dep" placeholder="From City or airport" />
                        </div>
                        <div className="persent-one">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <input type="text" name="dep" className="textboxstyle" id="arival" placeholder="To City or airport" />
                        </div>
                        <div className="persent-one less-per">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          berangkat
                          <input type="text" name="dep" className="textboxstyle" id="from-date1" placeholder="Depart" />
                        </div>
                        <div className="persent-one less-per">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          <input type="text" name="dep" className="textboxstyle" id="to-date" placeholder="Returrn" />
                        </div>
                        <div className="persent-one less-per">
                          <i className="fa fa-user" aria-hidden="true"></i>
                          <input type="date" name="dep" className="textboxstyle" id="to-date" placeholder="Kembali" />
                        </div>
                        <div className="persent-one less-btn">
                          <input type="Submit" name="submit" value="Search" className="btn btn-info cst-btn" id="srch" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
