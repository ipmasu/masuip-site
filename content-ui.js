(() => {
  const data = window.MASU_CONTENT || { articles: [], series: [] };
  const list = document.querySelector("#article-list");
  const buttons = document.querySelectorAll("[data-filter]");
  const sort = document.querySelector("#article-sort");
  function renderList(filter = "all") {
    if (!list) return;
    const cards = Array.from(list.querySelectorAll("[data-series]"));
    const order = sort && sort.value === "oldest" ? 1 : -1;
    cards.sort((a, b) => order * a.dataset.date.localeCompare(b.dataset.date));
    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.series !== filter;
      list.appendChild(card);
    });
  }
  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.toggle("active", item === button));
    renderList(button.dataset.filter);
  }));
  if (sort) sort.addEventListener("change", () => {
    const active = document.querySelector("[data-filter].active");
    renderList(active ? active.dataset.filter : "all");
  });
  renderList();

  const shell = document.querySelector(".article-shell");
  if (!shell) return;
  const slug = location.pathname.split("/").pop().replace(".html", "");
  const current = data.articles.find((article) => article.slug === slug);
  if (!current) return;
  const related = data.articles.filter((article) => article.series === current.series && article.slug !== slug).slice(0, 3);
  const prefix = location.pathname.includes("/articles/") ? "../" : "";
  const author = document.createElement("aside");
  author.className = "author-box";
  author.innerHTML = '<img src="' + prefix + 'assets/credentials/ma-su-portrait.jpg" alt="Ma Su portrait" /><div><p class="eyebrow">Author</p><h3>Ma Su</h3><p>Former CNIPA patent examiner, China IP strategy adviser, and founder of ShineRed IP knowledge center.</p></div>';
  const share = document.createElement("aside");
  share.className = "share-box";
  const pageUrl = encodeURIComponent(location.href);
  share.innerHTML = '<p class="eyebrow">Share</p><a href="https://www.linkedin.com/sharing/share-offsite/?url=' + pageUrl + '">LinkedIn</a><a href="https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + encodeURIComponent(current.title) + '">X</a><button type="button" data-copy-link>Copy link</button>';
  const rec = document.createElement("aside");
  rec.className = "related-articles";
  rec.innerHTML = '<p class="eyebrow">Related Articles</p><h2>Continue this series</h2><div class="content-grid">' + related.map((article) => '<article class="content-card"><p>' + article.category + '</p><h3>' + article.title + '</h3><span>' + article.description + '</span><a href="' + article.slug + '.html">Read article</a></article>').join("") + '</div>';
  const subscribe = document.createElement("aside");
  subscribe.className = "cta-newsletter article-newsletter";
  subscribe.innerHTML = '<div><p class="eyebrow">Newsletter</p><h2>Get new IP strategy articles.</h2></div><form class="newsletter-form" action="https://app.convertkit.com/forms/0000000/subscriptions" method="post"><label><span>Email</span><input type="email" name="email_address" placeholder="you@example.com" required /></label><button type="submit">Subscribe</button><p>Replace this placeholder action with your ConvertKit form URL when ready.</p></form>';
  shell.prepend(author);
  shell.append(share, rec, subscribe);
  const copy = share.querySelector("[data-copy-link]");
  copy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(location.href);
    copy.textContent = "Copied";
  });
})();
