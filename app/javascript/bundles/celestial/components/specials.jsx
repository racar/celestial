import PropTypes from 'prop-types';
import React from 'react';

export default class Specials extends React.Component {
  static propTypes = {
    gallery_img1: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classNamees
    this.state = { gallery_img1: this.props.gallery_img1 };

  }

//  updateName = (name) => {
//    this.setState({ name });
//  };

  render() {
    return(

  <section id="team" className="parallax-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-offset-2 col-md-8 col-sm-12 text-center">
    				<h1 className="heading">Eventos</h1>
    				<hr/>
    			</div>
    			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
    			  <img src={this.state.gallery_img1} className="img-responsive center-block"/>
    				<h4>Refrigerios</h4>
    				<h3>Tentapies</h3>
    			</div>
    			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
    			<img src={this.state.gallery_img1} className="img-responsive center-block"/>
    				<h4>Reuniones</h4>
    				<h3>Menús especiales</h3>
    			</div>
    			<div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
            <img src={this.state.gallery_img1} className="img-responsive center-block"/>
    				<h4>Especiales</h4>
    				<h3>Vegano, vegetariano, glutten free.</h3>
    			</div>
    		</div>
    	</div>
</section>

);
}


}
