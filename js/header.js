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
                    <li class="nav-item"><a href="careers.html">Careers</a></li>
                    <li class="nav-item"><a href="team.html">team</a></li>
                    <li class="nav-item"><a href="contact-us.html">Contact Us</a></li>
                </ul>
                </nav>
                </div>
                </div>
           </div>
      `;
    }
  }
  
  customElements.define("header-component", Header);
  