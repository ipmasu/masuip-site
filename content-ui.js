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

  function initPublicStats() {
    const footer = document.querySelector("footer");
    if (!footer || footer.querySelector("[data-public-stats]")) return;

    const stats = document.createElement("section");
    stats.className = "public-stats";
    stats.setAttribute("data-public-stats", "");
    stats.setAttribute("aria-label", "Public visitor statistics");
    stats.innerHTML = [
      '<div class="public-stats-heading">',
      '<span>Public Stats</span>',
      '<strong>公开浏览统计</strong>',
      '</div>',
      '<dl>',
      '<div><dt>本站访问</dt><dd><span id="vercount_value_site_pv">统计中</span></dd></div>',
      '<div><dt>访客</dt><dd><span id="vercount_value_site_uv">统计中</span></dd></div>',
      '<div><dt>本页浏览</dt><dd><span id="vercount_value_page_pv">统计中</span></dd></div>',
      '</dl>'
    ].join("");
    footer.prepend(stats);

    if (!document.querySelector('script[data-public-stats-script]')) {
      const script = document.createElement("script");
      script.defer = true;
      script.src = "https://events.vercount.one/js";
      script.dataset.publicStatsScript = "true";
      document.body.appendChild(script);
    }
  }

  initPublicStats();

  const shell = document.querySelector(".article-shell");
  if (!shell) return;
  const slug = location.pathname.split("/").pop().replace(".html", "");
  const current = data.articles.find((article) => article.slug === slug);
  if (!current) return;
  const related = data.articles.filter((article) => article.series === current.series && article.slug !== slug).slice(0, 3);
  const prefix = location.pathname.includes("/articles/") ? "../" : "";
  const author = document.createElement("aside");
  author.className = "author-box";
  author.innerHTML = '<img src="' + prefix + 'assets/credentials/ma-su-portrait.jpg" alt="Ma Su portrait" /><div><p class="eyebrow">Author</p><h3>Ma Su</h3><p>Former CNIPA patent examiner, China IP strategy adviser, and founder of Ma Su Team knowledge center.</p></div>';
  const share = document.createElement("aside");
  share.className = "share-box";
  const pageUrl = encodeURIComponent(location.href);
  share.innerHTML = '<p class="eyebrow">Share</p><a href="https://www.linkedin.com/sharing/share-offsite/?url=' + pageUrl + '">LinkedIn</a><a href="https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + encodeURIComponent(current.title) + '">X</a><button type="button" data-copy-link>Copy link</button>';
  const rec = document.createElement("aside");
  rec.className = "related-articles";
  rec.innerHTML = '<p class="eyebrow">Related Articles</p><h2>Continue this series</h2><div class="content-grid">' + related.map((article) => '<article class="content-card"><p>' + article.category + '</p><h3>' + article.title + '</h3><span>' + article.description + '</span><a href="' + article.slug + '.html">Read article</a></article>').join("") + '</div>';
  shell.prepend(author);
  shell.append(share, rec);
  const copy = share.querySelector("[data-copy-link]");
  copy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(location.href);
    copy.textContent = "Copied";
  });
})();
