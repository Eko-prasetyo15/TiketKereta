import React from "react"

class Form extends React.Component {
    render() {
        $('.tabing ul li a').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            var tabcont = $(this).attr('href');
            console.log(tabcont);
            $('.tabing a').removeClass('active');
            $(this).addClass('active');
            $('.tab1').hide();
            $(tabcont).show();
        });
        return (
            <div className="flight-engine">
                <div className="container">
                    <div className="tabing">
                        <ul>
                            <li><a className="active" href="#1"><i className="fa fa-plane" aria-hidden="true"></i> Flight</a>
                            </li>
                            <li><a href="#2"><i className="fa fa-plane" aria-hidden="true"></i> Flight</a>
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
                                        <input type="text" name="dep" className="textboxstyle" id="from-date1" placeholder="Depart" />
                                    </div>
                                    <div className="persent-one less-per">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                        <input type="text" name="dep" className="textboxstyle" id="to-date" placeholder="Returrn" />
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
                                        <input type="text" name="dep" className="textboxstyle" id="from-date1" placeholder="Depart" />
                                    </div>
                                    <div className="persent-one less-per">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                        <input type="text" name="dep" className="textboxstyle" id="to-date" placeholder="Returrn" />
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

                        </div>
                    </div>

                </div>
            </div>

        )
    }

}