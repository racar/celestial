import PropTypes from 'prop-types';
import React from 'react';

export default class Gallery extends React.Component {
  static propTypes = {
    gallery_img1: PropTypes.string.isRequired, vegan_img: PropTypes.string.isRequired,// this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { gallery_img1: this.props.gallery_img1,vegan_img:this.props.vegan_img };

  }

//  updateName = (name) => {
//    this.setState({ name });
//  };

  render() {
    return(

      <section id="gallery" className="parallax-section">
      	<div className="container">
      		<div className="row">
      			<div className="row text-center fh5co-heading row-padded">
      				<div className="col-md-8 col-md-offset-2">
                <img style ={{width:"10%"}} src={this.state.vegan_img}/>
                <h2 className="heading to-animate">Desayunos sorpresa</h2>
      				  <p className="sub-heading to-animate">Galería</p>
              </div>
      		</div>
      			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
      				<a href="images/gallery-img1.jpg" data-lightbox-gallery="zenda-gallery"><img src={this.state.gallery_img1}/> </a>
      				<div>
      					<h3>Lemon-Rosemary Prawn</h3>
      					<span>Seafood / Shrimp / Lemon</span>
      				</div>
              <a href="images/gallery-img1.jpg" data-lightbox-gallery="zenda-gallery"><img src={this.state.gallery_img1}/> </a>
      				<div>
      					<h3>Lemon-Rosemary Vegetables</h3>
      					<span>Tomato / Rosemary / Lemon</span>
      				</div>
      			</div>
      			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
              <a href="images/gallery-img1.jpg" data-lightbox-gallery="zenda-gallery"><img src={this.state.gallery_img1}/> </a>
      				<div>
      					<h3>Lemon-Rosemary Bakery</h3>
      					<span>Bread / Rosemary / Orange</span>
      				</div>
              <div className="row">
        				<div className="col-md-4 col-md-offset-4 text-center to-animate-2">
        					<a href="#" className="btn btn-primary btn-outline">More Food Menu</a>
        				</div>
        			</div>
      			</div>
      			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
              <a href="images/gallery-img1.jpg" data-lightbox-gallery="zenda-gallery"><img src={this.state.gallery_img1}/> </a>
      				<div>
      					<h3>Lemon-Rosemary Salad</h3>
      					<span>Chicken / Rosemary / Green</span>
      				</div>
              <a href="images/gallery-img1.jpg" data-lightbox-gallery="zenda-gallery"><img src={this.state.gallery_img1}/> </a>
      				<div>
      					<h3>Lemon-Rosemary Pizza</h3>
      					<span>Pasta / Rosemary / Green</span>
      				</div>
      			</div>
      		</div>
      	</div>
      </section>


    );
  }


}
