
import PropTypes from 'prop-types';
import React from 'react';

export default class Menu extends React.Component {
  static propTypes = {
    res_img_5: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { res_img_5: this.props.res_img_5 };

  }

//  updateName = (name) => {
//    this.setState({ name });
//  };

  render() {
    return(

<section id="menu" className="parallax-section">


	<div id="fh5co-menus" data-section="menu">
		<div className="container">
			<div className="row text-center fh5co-heading row-padded">
				<div className="col-md-8 col-md-offset-2">
					<h2 className="heading to-animate">Menú</h2>
					<p className="sub-heading to-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				</div>
			</div>
			<div className="row row-padded">
				<div className="col-md-6">
					<div className="fh5co-food-menu to-animate-2">
						<h2 className="fh5co-drinks">Drinks</h2>
						<ul>
							<li>
								<div className="fh5co-food-desc">
									<figure>

										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>

									</figure>
									<div>
										<h3>Pineapple Juice</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$17.50
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>

										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Green Juice</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$7.99
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>

									</figure>
									<div>
										<h3>Soft Drinks</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$12.99
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>

                    <a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Carlo Rosee Drinks</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$12.99
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-6">
					<div className="fh5co-food-menu to-animate-2">
						<h2 className="fh5co-dishes">Steak</h2>
						<ul>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Beef Steak</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$17.50
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Tomato with Chicken</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$7.99
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Sausages from Italy</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$12.99
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Beef Grilled</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$12.99
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-6">
					<div className="fh5co-food-menu to-animate-2">
						<h2 className="fh5co-drinks">Drinks</h2>
						<ul>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Pineapple Juice</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$17.50
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Green Juice</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$7.99
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Soft Drinks</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$12.99
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Carlo Rosee Drinks</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$12.99
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-6">
					<div className="fh5co-food-menu to-animate-2">
						<h2 className="fh5co-dishes">Steak</h2>
						<ul>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Beef Steak</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$17.50
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Tomato with Chicken</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$7.99
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Sausages from Italy</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$12.99
								</div>
							</li>
							<li>
								<div className="fh5co-food-desc">
									<figure>
										<a href="images/res_img_5.jpg" data-lightbox-gallery="img-responsive"><img src={this.state.res_img_5}/> </a>
									</figure>
									<div>
										<h3>Beef Grilled</h3>
										<p>Far far away, behind the word mountains.</p>
									</div>
								</div>
								<div className="fh5co-food-pricing">
									$12.99
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 col-md-offset-4 text-center to-animate-2">
					<p><a href="#" className="btn btn-primary btn-outline">More Food Menu</a></p>
				</div>
			</div>
		</div>
	</div>


</section>

);
}


}
