class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="page-wrapper">
          <div class="container">
              <div class="nav-wrapper">
                <div class="grad-bar"></div>
                    <nav class="navbar">
                      <a href="index.html" class="logo">
                      <img src="img/logo.png" alt="Company Logo">
                      </a>
                      <div class="menu-toggle" id="mobile-menu">
                          <span class="bar"></span>
                          <span class="bar"></span>
                          <span class="bar"></span>
                      </div>
                      <ul class="nav no-search">
                          <li class="nav-item"><a href="index.html">Home</a></li>
                          <li class="nav-item"><a href="about-us.html">About Us</a></li>
                          <li class="nav-item"><a href="investment-philosophy.html">investment philosophy</a></li>
                          <li class="nav-item"><a href="team.html">Team</a></li>
                          <li class="nav-item"><a href="careers.html">Careers</a></li>
                          <li class="nav-item"><a href="contact-us.html">Contact Us</a></li>
                          <div class="floow-us-on">
                          <div class="inner-wrap d-flex justify-content-between align-items-center">  
                              <span>Follow Us On</span>
                              <a href="https://www.linkedin.com/company/dawnstar-trading-dmcc"> <i class="fab fa-linkedin-in"></i></a>
                            </div>
                          </div>
                      </ul>
                    </nav>
                </div>
              </div>
          </div>
      `;
  }
}

customElements.define("header-component", Header);
