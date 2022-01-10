class BlogPost extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open',
      delegatesFocus: true
    })

    this.shadowRoot.innerHTML = `
      <div class="blog-post">
        <h2>My post title</h2>
        <p>Lorem ipsum dolor sit.</p>
        <a href="#" style="outline: none">learn more</a>
      </div>
    `
  } 

  connectedCallback() {
    console.log('-- mounted');
  }

  disconnectedCallback() {
    console.log('-- unmounted');
  }
}

customElements.define('blog-post', BlogPost)

{
  const post = document.querySelector('blog-post');
  post.shadowRoot.querySelector('.blog-post') // work -> { mode: 'open' }
    .style.background = '#900'
}

{
  const post = document.querySelector('blog-post');
  setTimeout(() => {
    post.remove()
  }, 2000)
}

