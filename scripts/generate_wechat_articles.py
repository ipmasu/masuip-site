from __future__ import annotations

import html
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "articles" / "source-wechat-batch.txt"


ARTICLE_META = [
    {
        "slug": "enterprise-ipr-patent-mining-five-step-method",
        "category": "Patent Mining",
        "title_en": "Enterprise IPR Patent Mining: A Five-Step Method for Finding High-Value Inventions",
        "description": "A practical workflow for enterprise IPR teams to discover patentable technical solutions from real R&D work.",
        "why": "Overseas firms and China-facing technology companies can use this method to turn scattered engineering problems into structured patent opportunities.",
    },
    {
        "slug": "responding-to-inventive-step-office-actions",
        "category": "China Prosecution",
        "title_en": "Responding to Inventive-Step Office Actions in Chinese Invention Patent Applications",
        "description": "A practice note on how to read, decompose, and respond to creativity objections during Chinese examination.",
        "why": "Inventive-step responses are where claim value is often won or lost in China prosecution.",
    },
    {
        "slug": "using-divisional-applications-to-extend-patent-protection",
        "category": "Portfolio Strategy",
        "title_en": "Using Divisional Applications to Extend the Patent Protection Chain",
        "description": "How divisional practice can support layered protection, prosecution flexibility, and long-term portfolio control.",
        "why": "A divisional strategy can preserve options when a single application cannot capture the full commercial and technical space.",
    },
    {
        "slug": "ai-era-patent-mining-and-layout",
        "category": "AI and IP",
        "title_en": "Patent Mining and Portfolio Layout in the AI Era",
        "description": "A discussion of how AI can lower the cost of patent mining while increasing the need for expert legal judgment.",
        "why": "AI is useful for search and ideation, but patent quality still depends on examiner-style analysis and claim design.",
    },
    {
        "slug": "how-patents-balance-public-interest",
        "category": "IP Policy",
        "title_en": "How Patents Balance Private Rights and the Public Interest",
        "description": "A public-facing explanation of why patent systems disclose technical knowledge while granting time-limited exclusivity.",
        "why": "International clients often need simple, credible explanations of why patent protection supports innovation rather than blocking it.",
    },
    {
        "slug": "generic-drug-patent-layout-strategy",
        "category": "Pharma IP",
        "title_en": "Patent Layout Strategy for Generic Drugs",
        "description": "A structured reading of how generic pharmaceutical players can understand and respond to patent barriers.",
        "why": "Pharmaceutical patent strategy requires both technical decomposition and lifecycle awareness.",
    },
    {
        "slug": "patent-claim-drafting-guide",
        "category": "Claim Drafting",
        "title_en": "A Simple Guide to Patent Claim Drafting",
        "description": "A practical explanation of claim drafting logic, centered on technical features and defensible scope.",
        "why": "Good claims are not decorative language; they are the legal form of technical control.",
    },
    {
        "slug": "easy-path-for-patent-mining",
        "category": "Patent Mining",
        "title_en": "The Easiest Path for Patent Mining",
        "description": "A direct route for IP teams to identify patentable improvements through problem decomposition and technical substitution.",
        "why": "This article shows how to start patent mining without turning it into an abstract brainstorming exercise.",
    },
    {
        "slug": "protecting-ip-protects-innovation-and-the-future",
        "category": "IP Education",
        "title_en": "Protecting Intellectual Property Means Protecting Innovation and the Future",
        "description": "A broad essay on the social, educational, and industrial meaning of intellectual property protection.",
        "why": "The piece helps explain ShineRed IP's public education role and its long-term view of innovation culture.",
    },
    {
        "slug": "reverse-thinking-as-an-innovation-method",
        "category": "Innovation Methodology",
        "title_en": "Reverse Thinking as a Powerful Innovation Method",
        "description": "An innovation-method essay on using reverse thinking to break fixed assumptions and generate new technical paths.",
        "why": "Reverse thinking is useful for both student innovation projects and enterprise patent ideation.",
    },
    {
        "slug": "is-innovation-really-difficult",
        "category": "Innovation Education",
        "title_en": "Is Innovation Really Difficult?",
        "description": "A concise essay arguing that innovation can be taught through structured problem discovery and technical recombination.",
        "why": "This supports Ma Su's positioning as both an IP strategist and a science innovation educator.",
    },
    {
        "slug": "youth-science-innovation-topic-selection-questionnaire",
        "category": "Youth Innovation",
        "title_en": "Youth Science Innovation Topic Selection Questionnaire",
        "description": "A guided questionnaire for helping young students discover real innovation topics instead of forcing empty ideas.",
        "why": "Topic selection is often the bottleneck in youth science innovation; structured prompts make the process teachable.",
    },
    {
        "slug": "rejection-and-asking-for-help-in-innovation-competitions",
        "category": "Project-Based Learning",
        "title_en": "Rejection and Asking for Help: Lesson Two of an Innovation Competition",
        "description": "A project-based learning reflection on how students learn from rejection, outreach, and real-world communication.",
        "why": "The article shows that innovation education is not only technical; it also trains resilience and collaboration.",
    },
    {
        "slug": "interdisciplinary-integration-in-science-innovation",
        "category": "Project-Based Learning",
        "title_en": "Interdisciplinary Integration: Using Mathematics After a Practical Setback",
        "description": "A teaching note on how a science innovation project can integrate mathematics after encountering real-world limits.",
        "why": "It demonstrates Ma Su's method of turning project friction into measurable learning and stronger technical framing.",
    },
    {
        "slug": "youth-innovation-competition-practical-lessons-four-and-five",
        "category": "Youth Innovation",
        "title_en": "Youth Innovation Competition Practical Lessons Four and Five",
        "description": "A continued project diary on guiding young innovators from concept formation toward testing and presentation.",
        "why": "The article provides evidence of hands-on curriculum practice rather than abstract education slogans.",
    },
    {
        "slug": "why-i-wrote-a-practical-science-innovation-textbook",
        "category": "Book and Curriculum",
        "title_en": "Why I Decided to Write These Experiences into a Practical Science Innovation Textbook",
        "description": "A personal essay explaining why Ma Su converted practical education experience into a science innovation textbook.",
        "why": "This article directly supports the personal brand: examiner logic, patent methodology, AI-era education, and curriculum building.",
    },
]


EXISTING_ARTICLES = [
    {
        "category": "Patent Maps",
        "title": "Using Patent Information for Innovation",
        "description": "How patent information can guide invention mining, R&D decisions, and patent portfolio design.",
        "href": "articles/using-patent-information-for-innovation.html",
    },
    {
        "category": "AI Era",
        "title": "A Practical Course Framework for Science and Innovation",
        "description": "From discovering real problems to patent search, AI collaboration, prototyping, validation, and IP protection.",
        "href": "articles/ai-era-science-innovation-framework.html",
    },
    {
        "category": "China Practice",
        "title": "What Foreign Patent Firms Should Know Before China Prosecution",
        "description": "Why China entry should be treated as a strategic examination event, not a translation task.",
        "href": "articles/china-prosecution-for-foreign-firms.html",
    },
]


def is_article_marker(line: str) -> bool:
    return len(line) >= 3 and ord(line[0]) == 0x6587 and ord(line[1]) == 0x7AE0 and line[2:].isdigit()


def split_articles() -> list[dict[str, object]]:
    lines = [line.strip() for line in SOURCE.read_text(encoding="utf-8").splitlines() if line.strip()]
    starts = [i for i, line in enumerate(lines) if is_article_marker(line)]
    articles = []
    for index, start in enumerate(starts):
        end = starts[index + 1] if index + 1 < len(starts) else len(lines)
        title = lines[start + 1]
        body = lines[start + 2 : end]
        body = [line for line in body if line not in {"图片", "---"}]
        articles.append({"original_title": title, "body": body})
    return articles


def paragraph_tag(line: str) -> str:
    escaped = html.escape(line)
    title_like = (
        len(line) <= 42
        and not re.search(r"[。！？；;]$", line)
        and (
            line.startswith("第")
            or line.startswith("附录")
            or "：" in line
            or line.endswith("篇")
            or line.endswith("课")
            or line.endswith("法")
        )
    )
    if title_like:
        return f"          <h3>{escaped}</h3>"
    return f"          <p>{escaped}</p>"


def render_article(meta: dict[str, str], original_title: str, body: list[str]) -> str:
    original = "\n".join(paragraph_tag(line) for line in body)
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{html.escape(meta["title_en"])} | Ma Su</title>
    <meta name="description" content="{html.escape(meta["description"])}" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body class="article-page">
    <header class="article-header">
      <a class="brand article-brand" href="../index.html">
        <span class="brand-mark">SR</span>
        <span>
          <strong>ShineRed IP</strong>
          <small>Global Patent Strategy</small>
        </span>
      </a>
      <a class="back-link" href="../articles.html">Back to articles</a>
    </header>

    <main>
      <article class="article-shell">
        <p class="eyebrow">{html.escape(meta["category"])} / Topology Science Innovation</p>
        <h1>{html.escape(meta["title_en"])}</h1>
        <p class="article-deck">{html.escape(meta["description"])}</p>
        <div class="article-meta">
          <span>By Ma Su</span>
          <span>Source: Topology Science Innovation public account</span>
          <span>Chinese original curated for ShineRed IP global website</span>
        </div>

        <section class="article-section">
          <h2>English Digest</h2>
          <p>{html.escape(meta["description"])}</p>
          <p>{html.escape(meta["why"])}</p>
        </section>

        <section class="article-section original-text">
          <h2>Chinese Original</h2>
          <h3>{html.escape(original_title)}</h3>
{original}
        </section>
      </article>
    </main>

    <footer>
      <p>&copy; 2026 Guangdong ShineRed Intellectual Property Co., Ltd.</p>
      <p>Article prepared for Ma Su and ShineRed IP global website.</p>
    </footer>
  </body>
</html>
"""


def render_index(new_items: list[dict[str, str]]) -> str:
    cards = []
    for item in new_items + EXISTING_ARTICLES:
        cards.append(
            f"""          <article>
            <p>{html.escape(item["category"])}</p>
            <h2>{html.escape(item["title"])}</h2>
            <span>{html.escape(item["description"])}</span>
            <a href="{html.escape(item["href"])}">Read article</a>
          </article>"""
        )
    cards_html = "\n".join(cards)
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Articles and Insights | Ma Su</title>
    <meta
      name="description"
      content="Articles by Ma Su and ShineRed IP on patent-map guided innovation, China patent practice, AI-era science innovation education, and cross-border IP cooperation."
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="article-page">
    <header class="article-header">
      <a class="brand article-brand" href="index.html">
        <span class="brand-mark">SR</span>
        <span>
          <strong>ShineRed IP</strong>
          <small>Global Patent Strategy</small>
        </span>
      </a>
      <nav class="sub-nav" aria-label="Page navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About Ma Su</a>
        <a href="methodology.html">Methodology</a>
        <a href="china-entry.html">China Entry</a>
        <a href="index.html#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="subpage-hero">
        <p class="eyebrow">Knowledge Center</p>
        <h1>Articles that prove the method.</h1>
        <p>
          This knowledge center collects Ma Su's public-account essays, China patent practice notes, science innovation curriculum insights, and multilingual resources for overseas clients.
        </p>
      </section>

      <section class="article-index-section">
        <div class="article-index">
{cards_html}
        </div>
      </section>

      <section class="method-band">
        <p class="eyebrow">Editorial plan</p>
        <h2>Chinese originals first, English-facing digests for global readers.</h2>
        <p>
          The current article library preserves the Chinese source essays while adding English titles, categories, and strategic summaries. Full multilingual versions can be produced article by article for Hong Kong, Vietnam, English, French, and German audiences.
        </p>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Guangdong ShineRed Intellectual Property Co., Ltd.</p>
      <p>Articles and insights by Ma Su and ShineRed IP.</p>
    </footer>
  </body>
</html>
"""


def main() -> None:
    articles = split_articles()
    if len(articles) != len(ARTICLE_META):
        raise SystemExit(f"Expected {len(ARTICLE_META)} articles, found {len(articles)}")

    new_items: list[dict[str, str]] = []
    for article, meta in zip(articles, ARTICLE_META):
        html_text = render_article(meta, str(article["original_title"]), list(article["body"]))
        for base in [ROOT / "articles", ROOT / "public" / "articles"]:
            base.mkdir(parents=True, exist_ok=True)
            (base / f"{meta['slug']}.html").write_text(html_text, encoding="utf-8")
        new_items.append(
            {
                "category": meta["category"],
                "title": meta["title_en"],
                "description": meta["description"],
                "href": f"articles/{meta['slug']}.html",
            }
        )

    index_html = render_index(new_items)
    (ROOT / "articles.html").write_text(index_html, encoding="utf-8")
    (ROOT / "public" / "articles.html").write_text(index_html, encoding="utf-8")
    print(f"Generated {len(articles)} WeChat article pages and updated article indexes.")


if __name__ == "__main__":
    main()
