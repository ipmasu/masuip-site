const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicRoot = path.join(root, "public");

const runtime = String.raw`(() => {
  const languages = [
    ["en", "English"],
    ["zh-hk", "香港中文"],
    ["ja", "日本語"],
    ["tr", "Türkçe"],
    ["vi", "Tiếng Việt"],
  ];

  const navLabels = {
    en: ["Home", "Articles", "Methodology", "About", "Contact"],
    "zh-hk": ["首頁", "文章中心", "方法論", "關於我", "聯絡"],
    ja: ["ホーム", "記事", "方法論", "プロフィール", "お問い合わせ"],
    tr: ["Ana sayfa", "Makaleler", "Metodoloji", "Hakkımda", "İletişim"],
    vi: ["Trang chủ", "Bài viết", "Phương pháp", "Giới thiệu", "Liên hệ"],
  };

  const uiLabels = {
    en: {
      language: "Language",
      readArticle: "Read article",
      exploreSeries: "Explore series",
      sort: "Sort",
      newest: "Newest first",
      oldest: "Oldest first",
      author: "Author",
      share: "Share",
      copy: "Copy link",
      copied: "Copied",
      related: "Related Articles",
      continueSeries: "Continue this series",
    },
    "zh-hk": {
      language: "語言",
      readArticle: "閱讀文章",
      exploreSeries: "查看系列",
      sort: "排序",
      newest: "最新優先",
      oldest: "最早優先",
      author: "作者",
      share: "分享",
      copy: "複製連結",
      copied: "已複製",
      related: "相關文章",
      continueSeries: "繼續閱讀本系列",
    },
    ja: {
      language: "言語",
      readArticle: "記事を読む",
      exploreSeries: "シリーズを見る",
      sort: "並び替え",
      newest: "新しい順",
      oldest: "古い順",
      author: "著者",
      share: "共有",
      copy: "リンクをコピー",
      copied: "コピーしました",
      related: "関連記事",
      continueSeries: "このシリーズを続けて読む",
    },
    tr: {
      language: "Dil",
      readArticle: "Makaleyi oku",
      exploreSeries: "Seriyi incele",
      sort: "Sırala",
      newest: "En yeni önce",
      oldest: "En eski önce",
      author: "Yazar",
      share: "Paylaş",
      copy: "Bağlantıyı kopyala",
      copied: "Kopyalandı",
      related: "İlgili makaleler",
      continueSeries: "Bu seriye devam et",
    },
    vi: {
      language: "Ngôn ngữ",
      readArticle: "Đọc bài viết",
      exploreSeries: "Xem chuỗi bài",
      sort: "Sắp xếp",
      newest: "Mới nhất trước",
      oldest: "Cũ nhất trước",
      author: "Tác giả",
      share: "Chia sẻ",
      copy: "Sao chép liên kết",
      copied: "Đã sao chép",
      related: "Bài viết liên quan",
      continueSeries: "Đọc tiếp chuỗi này",
    },
  };

  const textMap = {
    "zh-hk": {
      "Cross-border Patent Strategy": "跨境專利佈局策略",
      "Patent layout for Chinese innovators going overseas and overseas innovators entering China.": "服務中國企業及個人發明人的海外專利佈局，也服務境外創新主體進入中國的專利佈局。",
      "Read the knowledge center": "閱讀文章中心",
      "Discuss cooperation": "洽談合作",
      "Former CNIPA examiner": "前中國國家知識產權局專利審查員",
      "20+ articles": "20+ 篇文章",
      "Patent-map method": "專利地圖方法",
      "Two-way layout": "雙向佈局",
      "Latest Articles": "最新文章",
      "Popular Series": "熱門系列",
      "Service Overview": "服務概覽",
      "Publication and Honors": "出版與榮譽",
      "Knowledge Center": "文章中心",
      "Articles organized as an IP strategy library.": "以知識庫方式整理的專利策略文章。",
      "Pinned Story": "置頂故事",
      "About Ma Su": "關於馬肅",
      "Contact": "聯絡",
      "Services": "服務",
      "Personal IP Positioning": "個人 IP 定位",
      "Book and Curriculum": "教材與課程",
      "Youth Innovation Case": "青少年科創案例",
      "Credentials and Proof": "證書與資歷證明",
    },
    ja: {
      "Cross-border Patent Strategy": "クロスボーダー特許戦略",
      "Patent layout for Chinese innovators going overseas and overseas innovators entering China.": "中国企業・個人発明家の海外特許ポートフォリオと、海外イノベーターの中国進出に向けた特許戦略を支援します。",
      "Read the knowledge center": "記事センターを読む",
      "Discuss cooperation": "協業を相談する",
      "Former CNIPA examiner": "元 CNIPA 特許審査官",
      "20+ articles": "20本以上の記事",
      "Patent-map method": "特許マップ手法",
      "Two-way layout": "双方向ポートフォリオ",
      "Latest Articles": "最新記事",
      "Popular Series": "人気シリーズ",
      "Service Overview": "サービス概要",
      "Publication and Honors": "出版・実績",
      "Knowledge Center": "記事センター",
      "Articles organized as an IP strategy library.": "IP 戦略ライブラリとして整理された記事。",
      "Pinned Story": "注目ストーリー",
      "About Ma Su": "Ma Su について",
      "Contact": "お問い合わせ",
      "Services": "サービス",
      "Personal IP Positioning": "個人ブランドの位置づけ",
      "Book and Curriculum": "教材とカリキュラム",
      "Youth Innovation Case": "青少年イノベーション事例",
      "Credentials and Proof": "資格・実績証明",
    },
    tr: {
      "Cross-border Patent Strategy": "Sınır Ötesi Patent Stratejisi",
      "Patent layout for Chinese innovators going overseas and overseas innovators entering China.": "Çinli şirketler ve bireysel mucitler için yurt dışı patent portföyü; Çin pazarına giren yabancı inovasyon ekipleri için Çin patent stratejisi.",
      "Read the knowledge center": "Bilgi merkezini oku",
      "Discuss cooperation": "İş birliği konuşalım",
      "Former CNIPA examiner": "Eski CNIPA patent incelemecisi",
      "20+ articles": "20+ makale",
      "Patent-map method": "Patent haritası yöntemi",
      "Two-way layout": "Çift yönlü portföy",
      "Latest Articles": "Son makaleler",
      "Popular Series": "Popüler seriler",
      "Service Overview": "Hizmet özeti",
      "Publication and Honors": "Yayınlar ve başarılar",
      "Knowledge Center": "Makale merkezi",
      "Articles organized as an IP strategy library.": "IP stratejisi kütüphanesi olarak düzenlenen makaleler.",
      "Pinned Story": "Sabit hikaye",
      "About Ma Su": "Ma Su hakkında",
      "Contact": "İletişim",
      "Services": "Hizmetler",
      "Personal IP Positioning": "Kişisel IP konumlandırması",
      "Book and Curriculum": "Kitap ve müfredat",
      "Youth Innovation Case": "Gençlik inovasyonu vakası",
      "Credentials and Proof": "Belgeler ve kanıtlar",
    },
    vi: {
      "Cross-border Patent Strategy": "Chiến lược sáng chế xuyên biên giới",
      "Patent layout for Chinese innovators going overseas and overseas innovators entering China.": "Bố trí sáng chế ở nước ngoài cho doanh nghiệp và nhà sáng chế cá nhân Trung Quốc; bố trí sáng chế tại Trung Quốc cho chủ thể đổi mới nước ngoài.",
      "Read the knowledge center": "Đọc trung tâm bài viết",
      "Discuss cooperation": "Trao đổi hợp tác",
      "Former CNIPA examiner": "Cựu thẩm định viên CNIPA",
      "20+ articles": "Hơn 20 bài viết",
      "Patent-map method": "Phương pháp bản đồ sáng chế",
      "Two-way layout": "Bố trí hai chiều",
      "Latest Articles": "Bài mới nhất",
      "Popular Series": "Chuỗi nổi bật",
      "Service Overview": "Tổng quan dịch vụ",
      "Publication and Honors": "Xuất bản và thành tựu",
      "Knowledge Center": "Trung tâm bài viết",
      "Articles organized as an IP strategy library.": "Các bài viết được tổ chức như một thư viện chiến lược IP.",
      "Pinned Story": "Câu chuyện nổi bật",
      "About Ma Su": "Giới thiệu Ma Su",
      "Contact": "Liên hệ",
      "Services": "Dịch vụ",
      "Personal IP Positioning": "Định vị thương hiệu cá nhân",
      "Book and Curriculum": "Sách và chương trình",
      "Youth Innovation Case": "Trường hợp đổi mới thanh thiếu niên",
      "Credentials and Proof": "Chứng chỉ và bằng chứng",
    },
  };

  function supported(code) {
    return languages.some(([lang]) => lang === code);
  }

  function getLang() {
    const query = new URLSearchParams(location.search).get("lang");
    if (supported(query)) return query;
    const saved = localStorage.getItem("masuip-lang");
    return supported(saved) ? saved : "en";
  }

  function translateNav(lang) {
    const labels = navLabels[lang] || navLabels.en;
    document.querySelectorAll(".main-nav a").forEach((link, index) => {
      if (labels[index]) link.textContent = labels[index];
    });
  }

  function addSwitcher(lang) {
    const header = document.querySelector(".content-header");
    if (!header || header.querySelector("[data-language-select]")) return;
    const labels = uiLabels[lang] || uiLabels.en;
    const wrap = document.createElement("div");
    wrap.className = "language-switcher";
    wrap.innerHTML = '<label><span data-i18n-ui="language">' + labels.language + '</span><select data-language-select>' + languages.map(([code, label]) => '<option value="' + code + '">' + label + '</option>').join("") + '</select></label>';
    header.appendChild(wrap);
    const select = wrap.querySelector("select");
    select.value = lang;
    select.addEventListener("change", () => {
      localStorage.setItem("masuip-lang", select.value);
      const url = new URL(location.href);
      if (select.value === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", select.value);
      location.href = url.toString();
    });
  }

  function replaceExactText(lang) {
    const map = textMap[lang] || {};
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION", "SELECT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const original = node.nodeValue.trim();
      if (map[original]) node.nodeValue = node.nodeValue.replace(original, map[original]);
    });
  }

  function translateCommonUi(lang) {
    const labels = uiLabels[lang] || uiLabels.en;
    document.querySelectorAll(".content-card a, .article-index a").forEach((link) => {
      if (link.textContent.trim() === "Read article") link.textContent = labels.readArticle;
    });
    document.querySelectorAll(".series-card a").forEach((link) => {
      if (link.textContent.trim() === "Explore series") link.textContent = labels.exploreSeries;
    });
    document.querySelectorAll(".article-toolbar label").forEach((label) => {
      const text = label.firstChild;
      if (text && text.nodeType === Node.TEXT_NODE && text.nodeValue.trim() === "Sort") text.nodeValue = labels.sort + " ";
    });
    document.querySelectorAll("#article-sort option").forEach((option) => {
      if (option.value === "newest") option.textContent = labels.newest;
      if (option.value === "oldest") option.textContent = labels.oldest;
    });
    document.querySelectorAll(".author-box .eyebrow").forEach((el) => { if (el.textContent.trim() === "Author") el.textContent = labels.author; });
    document.querySelectorAll(".share-box .eyebrow").forEach((el) => { if (el.textContent.trim() === "Share") el.textContent = labels.share; });
    document.querySelectorAll("[data-copy-link]").forEach((button) => { if (button.textContent.trim() === "Copy link") button.textContent = labels.copy; });
    document.querySelectorAll(".related-articles .eyebrow").forEach((el) => { if (el.textContent.trim() === "Related Articles") el.textContent = labels.related; });
    document.querySelectorAll(".related-articles h2").forEach((el) => { if (el.textContent.trim() === "Continue this series") el.textContent = labels.continueSeries; });
  }

  function translate(lang) {
    document.documentElement.lang = lang === "zh-hk" ? "zh-Hant-HK" : lang;
    translateNav(lang);
    addSwitcher(lang);
    if (lang !== "en") {
      replaceExactText(lang);
      translateCommonUi(lang);
    }
  }

  document.addEventListener("DOMContentLoaded", () => translate(getLang()));
})();`;

function servedPrefixFor(file) {
  const abs = path.resolve(file);
  const base = abs.startsWith(publicRoot + path.sep) ? publicRoot : root;
  const rel = path.relative(base, abs).replace(/\\/g, "/");
  const depth = rel.split("/").length - 1;
  return "../".repeat(depth);
}

function addRuntime(file) {
  let html = fs.readFileSync(file, "utf8");
  const prefix = servedPrefixFor(file);
  html = html.replace(/\s*<script src="(?:\.\.\/)*i18n\.js"><\/script>/g, "");
  html = html.replace("</body>", `  <script src="${prefix}i18n.js"></script>\n</body>`);
  fs.writeFileSync(file, html, "utf8");
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file, files);
    else if (file.endsWith(".html")) files.push(file);
  }
  return files;
}

function applyAll() {
  fs.writeFileSync(path.join(root, "i18n.js"), runtime, "utf8");
  fs.writeFileSync(path.join(publicRoot, "i18n.js"), runtime, "utf8");
  const htmlFiles = [
    ...walk(path.join(root, "articles")),
    ...walk(path.join(root, "series")),
    ...walk(path.join(publicRoot, "articles")),
    ...walk(path.join(publicRoot, "series")),
    ...fs.readdirSync(root).filter((name) => name.endsWith(".html")).map((name) => path.join(root, name)),
    ...fs.readdirSync(publicRoot).filter((name) => name.endsWith(".html")).map((name) => path.join(publicRoot, name)),
  ];
  htmlFiles.forEach(addRuntime);
}

if (require.main === module) applyAll();

module.exports = { applyAll };
