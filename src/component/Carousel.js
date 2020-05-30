import React from "react"

class Carousel extends React.Component {
    render() {
        return (
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://kai.id/static/konten/train_le.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        )
    }
}
export default Carousel