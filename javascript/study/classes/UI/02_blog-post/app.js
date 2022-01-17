class BlogPost extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open',
      delegatesFocus: true
    })
  } 

  connectedCallback() {
    console.log('-- mounted');
    this.render()
  }

  disconnectedCallback() {
    console.log('-- unmounted');
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="blog-post">
        <h2>My post title</h2>
        <p>Lorem ipsum dolor sit.</p>
        <a href="#" style="outline: none">learn more</a>
      </div>
    `
  }
}

customElements.define('blog-post', BlogPost)



