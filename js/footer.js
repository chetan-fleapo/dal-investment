class Footer extends HTMLElement {
    constructor() {
      super();
    }  
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <div class="container">
            <div class="row">
                <div class="flex-wrapper">
                    <h6>Design & Developed by Fleapo Inc. </h6> 
                    <h6>©DAL INVESTMENTS LIMITED 2021</h6> 
                    <a href="#" class="circle-linkedin">
                      <i class="fab fa-linkedin-in"></i>
                      </a>
                </div>
            </div>
        </div>
       </footer>
      `;
    }
  }
  customElements.define("footer-component", Footer);
  