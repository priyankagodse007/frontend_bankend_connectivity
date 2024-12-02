import'../node_modules/bootstrap/dist/css/bootstrap.css';
    import '../node_modules/bootstrap/dist/js/bootstrap.js';
    function Slider(){
        return<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img-2.outlookindia.com/outlook/outlook-money/story/047fccd24be40ddb66759d2a6ebd46b3.jpg?w=640 w-10 h-3" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdnblog.etmoney.com/wp-content/uploads/2021/12/best-practices-for-home-loans.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://content.jdmagicbox.com/comp/service_catalogue/home-loans-upto-1cr--0832px832.x832.220407113251.v9c4-an6ip4u.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       

    }
export default Slider;