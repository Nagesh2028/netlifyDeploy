

export default function Home() {
  return (
    <>


<>
  <link rel="stylesheet" href="styles.css" />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
</>

  <div className="container">
    <div className="title" />
    <img
      src="Images\title.png"
      alt="Image"
      className="image"
    />
  </div>
  <div className="sky-blue-section">
    <div className="main-heading">Essential Vitamins</div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
      }}
    >
      <div className="left-content">
        <div>Online Medical Supplies</div>
        <div className="left-heading">Get Your Vitamins &amp; Minerals </div>
        <button className="explore-button">Explore</button>
      </div>
      <img
        src="Images\OIP_preview_rev_1.png"
        alt="Center Image"
        className="center-image"
      />
      <div className="right-content">
        <div className="right-item">
          <div className="right-item-icon">💊</div>
          <div className="right-item-details">
            <div className="right-item-heading">Vitamins</div>
            <div className="right-item-text">
              Increase Vitamins and minerals in your diet
            </div>
          </div>
        </div>
        <div className="right-item">
          <div className="right-item-icon">⏲</div>
          <div className="right-item-details">
            <div className="right-item-heading">Weight Loss</div>
            <div className="right-item-text">Weight Loss</div>
            <div className="right-item-text">
              Find scientifically proven solutions
            </div>
          </div>
        </div>
        <div className="right-item">
          <div className="right-item-icon">🥫</div>
          <div className="right-item-details">
            <div className="right-item-heading">Functional Foods</div>
            <div className="right-item-text">Functional Foods</div>
            <div className="right-item-text">
              From protein powers to baby formula
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="emoji-box">
    <div className="emoji-container">
      <div className="emoji-item">
        <div className="emoji">🫙</div>
        <div className="emoji-title">Clinically Studied</div>
        <div className="emoji-description">
          All products that we offer have undergone lab and safety tests
        </div>
      </div>
      <div className="emoji-item">
        <div className="emoji">🍃</div>
        <div className="emoji-title">Vegeterain Friendly</div>
        <div className="emoji-description">
          We have a wide selection of vegetarian products to meet your needs
        </div>
      </div>
      <div className="emoji-item">
        <div className="emoji">☸</div>
        <div className="emoji-title">Made In India</div>
        <div className="emoji-description">
          Shop local and explore health products made right here in India
        </div>
      </div>
    </div>
    <div className="emoji-container">
      <div className="emoji-item">
        <div className="emoji">🛒</div>
        <div className="emoji-title">Free Shipping</div>
        <div className="emoji-description">
          We deliver to your door with no shipping costs on your orders
        </div>
      </div>
      <div className="emoji-item">
        <div className="emoji">📦</div>
        <div className="emoji-title">No Risk</div>
        <div className="emoji-description">
          We ensure that all products are safe and within their use-by date
        </div>
      </div>
      <div className="emoji-item">
        <div className="emoji">🍀</div>
        <div className="emoji-title">GMO Free</div>
        <div className="emoji-description">
          Natural, no modified products and derivatives for those who need it
        </div>
      </div>
    </div>
  </div>
  <div className="content-section">
    <div className="centered-heading">OUR PRODUCTS</div>
    <div className="big-heading">New Arrivals</div>
    <div className="image-container">
      <div className="image-item">
        <img
          src="Images\im1.png"
          alt="Image 1"
          className="image1"
        />
        <div className="star-rating">⭐</div>
        <div className="image-name">Voluptas assumenda est</div>
      </div>
      <div className="image-item">
        <img
          src="Images\im2.png"
          alt="Image 2"
          className="image1"
        />
        <div className="star-rating">⭐</div>
        <div className="image-name">Pamol Film Coated Tablet</div>
      </div>
      <div className="image-item">
        <img
          src="Images\product-6-400x400.png.png"
          alt="Image 3"
          className="image1"
        />
        <div className="star-rating">⭐</div>
        <div className="image-name">Maca Root Capsules</div>
      </div>
      <div className="image-item">
        <img
          src="Images\im3.png"
          alt="Image 4"
          className="image1"
        />
        <div className="star-rating">⭐</div>
        <div className="image-name">Diclofenac Oaifarm Tablet</div>
      </div>
    </div>
    <a href="#" className="bottom-see-more">
      SEE MORE
    </a>
  </div>
  <div className="violet-section">
    <div className="row">
      <div className="left-content">
        <img
          src="Images\Picture-4-1.png.png"
          alt="Left Image"
          className="section-image"
        />
      </div>
      <div className="right-content">
        <h3 className="small-heading">ABOUT EVE PHARMACY</h3>
        <h2 className="big-heading">Supercharge Your Health</h2>
        <p>
          {" "}
          Adjacent to the Elbrit Health Center, Eve's Pharmacy brings you the
          best in medicines and healthcare products at an accessible location -
          with a wide range of choices including products made right here in
          India! When you shop at Eve Pharmacy, you can trust in our quality -
          we apply the highest levels of quality checks on all our medical and
          non-medical products. Visit our pharmacy today, for all healthcare
          needs!
        </p>
        <h5>
          We offer choice, reliability and value That’s what makes us better
        </h5>
        <hr className="divider" />
        <a href="#" className="about-us-button">
          About Us
        </a>
      </div>
    </div>
    <div className="row">
      <div className="left-content">
        <h3 className="small-heading">Special service</h3>
        <h2 className="big-heading">Feel Better Or Your Money Back</h2>
        <p>
          {" "}
          With our commitment to providing safe and effective medical and
          healthcare products, you can rest assured when you buy from Eve
          Pharmacy.
        </p>
        <h5>A full 60 days money back guarantee, no questions asked .</h5>
        <hr className="divider" />
        <a href="#" className="about-us-button">
          Explore Know
        </a>
      </div>
      <div className="right-content">
        <img
          src="Images\Picture5.png.png"
          alt="Right Image"
          className="section-image"
        />
      </div>
    </div>
    <div className="row">
      <div className="left-content">
        <img
          src="Images\im6.png"
          alt="Left Image"
          className="section-image"
        />
      </div>
      <div className="right-content">
        <h3 className="small-heading">BEST OFFERS</h3>
        <h2 className="big-heading">Start Feeling Better</h2>
        <p>
          Don't wait - get the right medicine and the right time. Our shelves
          are stocked and ready to fulfil your needs so that you can start
          feeling better today!
        </p>
        <hr className="divider" />
        <a href="#" className="about-us-button">
          Buy Know
        </a>
      </div>
    </div>
  </div>
  <div className="container-fluid section">
    <div className="text-center">
      <h3 className="small-heading">INGREDIENTS</h3>
      <h2 className="main-heading">Better Ingredients</h2>
      <p className="description">
        Only the best when you choose products offered on our platform-high
        quality Ingredients for high quality products!
      </p>
    </div>
    <div className="row top-images">
      <div className="col-md-6">
        <div className="image-container">
          <img
            src="Images\h2-b1.jpg.png"
            alt="Image 1"
            className="overlay-image"
          />
          <div className="date">Vitamin C</div>
          <div className="image-text">Vitamin C as ascorbic acid</div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="image-container">
          <img
            src="Images\bn2-2.jpg.png"
            alt="Image 2"
            className="overlay-image"
          />
          <div className="date">Vitamin B3</div>
          <div className="image-text">Niacin for healthy gut and skin</div>
        </div>
      </div>
    </div>
    <div className="row bottom-images">
      <div className="col-md-4">
        <div className="image-container">
          <img
            src="Images\bn2-3.jpg.png"
            alt="Image 3"
            className="overlay-image"
          />
          <div className="date">Magnesium</div>
          <div className="image-text">
            Boost energy and support muscle function
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="image-container">
          <img
            src="Images\bn2-4.jpg.png"
            alt="Image 4"
            className="overlay-image"
          />
          <div className="date">Hyaluronic Acid</div>
          <div className="image-text">For smooth, supple and soft skin !</div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="image-container">
          <img
            src="Images\bn2-5.jpg.png"
            alt="Image 5"
            className="overlay-image"
          />
          <div className="date">Lactobacillus</div>
          <div className="image-text">Invigorate your gut microbiome</div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid blue-background">
    <div className="row justify-content-center">
      <div className="col-md-3 d-flex justify-content-center">
        <div className="stat-item">
          <h2>14k</h2>
          <p>Customers</p>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center">
        <div className="stat-item">
          <h2>37k</h2>
          <p>Products Sold</p>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center">
        <div className="stat-item">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center">
        <div className="stat-item">
          <h2>13</h2>
          <p>Licensed Stores</p>
        </div>
      </div>
    </div>
  </div>
  <div className="centered-heading">OUR BLOG</div>
  <div className="big-heading">Latest News</div>
  <div className="container floating-images">
    <div className="row justify-content-center">
      <div className="col-md-3">
        <div className="image-wrapper">
          <img
            src="Images\blog3-450x580.jpg.png"
            alt="Image 1"
          />
          <div className="date">20 APRIL</div>
          <p className="image-text">The Covid-19 Epidemic In 2022 Is Back</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="image-wrapper">
          <img
            src="Images\blog2-450x580.jpg.png"
            alt="Image 2"
          />
          <div className="date">20 APRIL</div>
          <p className="image-text">The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="image-wrapper">
          <img
            src="Images\blog3-450x580.jpg.png"
            alt="Image 3"
          />
          <div className="date">17 MARCH</div>
          <p className="image-text">
            Tellus pharetra lacus ligula fusce cum eu potenti
          </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="image-wrapper">
          <img
            src="Images\blog2-450x580.jpg.png"
            alt="Image 4"
          />
          <div className="date">17 MARCH</div>
          <p className="image-text">Hac hendrerit mus nons sempersuspendiss</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="pink-background centered-box">
      <div className="row align-items-center">
        <div className="col-md-6 text-section">
          <h2>NEWSLETTER</h2>
          <h4>Take Charge Of Your Health Today</h4>
          <p>
            Sign-up to get news on our latest additions, current health news as
            well as helpful guides
          </p>
          <div className="subscription-form">
            <input
              type="email"
              className="email-box"
              placeholder=" Email Address"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="Images\f2-1.png.png"
            alt="Subscription Image"
            className="right-image"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid dark-blue-background">
    <div className="row contact-boxes">
      <div className="col-md-4 contact-box">
        <i className="fas fa-phone-alt icon" />
        <h5>Phone Number</h5>
        <p>+974 3118 1843</p>
      </div>
      <div className="col-md-4 contact-box">
        <i className="fas fa-envelope icon" />
        <h5>Email Adress</h5>
        <p>Elbrithcqhr@gmail.com</p>
      </div>
      <div className="col-md-4 contact-box">
        <i className="fas fa-map-marker-alt icon" />
        <h5>Office Location</h5>
        <p>Ambassador Street, Zone 61 </p>
      </div>
    </div>
  </div>
  <div className="container-fluid dark-blue-background">
    <div className="row four-portions">
      <div className="col-md-3 portion">
        <img
          src="Images\title.png"
          alt="Company Photo"
          className="company-photo"
        />
        <p>
          Your health, physical and emotional well-being is important to us.{" "}
        </p>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-pinterest" />
        </div>
      </div>
      <div className="col-md-3 portion">
        <h4>Community</h4>
        <ul className="community-list">
          <li>Help Centre</li>
          <li>Publishers</li>
          <li>Affiliates</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="col-md-3 portion">
        <h4>Galleries</h4>
        <div className="gallery">
          <img
            src="Images\Rectangle-1240-1.jpg.png"
            alt="Gallery Image 1"
          />
          <img
            src="Images\Rectangle-1241-1.jpg.png"
            alt="Gallery Image 2"
          />
          <img
            src="Images\Rectangle-1242-2.jpg.png"
            alt="Gallery Image 3"
          />
          <img
            src="Images\Rectangle-1243-1.jpg.png"
            alt="Gallery Image 4"
          />
          <img
            src="Images\Rectangle-1244-1.jpg.png"
            alt="Gallery Image 5"
          />
          <img
            src="Images\Rectangle-1245-1.jpg.png"
            alt="Gallery Image 6"
          />
        </div>
      </div>
      <div className="col-md-3 portion">
        <h4>About</h4>
        <ul className="about-list">
          <li>Contact Us</li>
          <li>how It Works</li>
          <li>Create</li>
          <li>Explore</li>
          <li>Terms &amp; Services</li>
        </ul>
      </div>
    </div>
    <div className="horizontal-divider" />
    <div className="footer-bar d-flex justify-content-between align-items-center">
      <div className="footer-address">
        <p>
          Elbrit Life Sciences Private Limited. C20,BKC,G Block,Mumbai 400051
        </p>
      </div>
      <div className="footer-copyright">
        <p>© Copyright 2024,ELBRIT </p>
      </div>
    </div>
  </div>
</>

   
  );
}
