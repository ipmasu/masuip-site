const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const runtime = String.raw`(() => {
  const languages = [
    ["en", "English"],
    ["zh-hk", "香港中文"],
    ["ja", "日本語"],
    ["tr", "Türkçe"],
    ["vi", "Tiếng Việt"],
  ];

  const dictionary = {
    "zh-hk": {
      "首页": "首頁",
      "文章中心": "文章中心",
      "方法论": "方法論",
      "关于我": "關於我",
      "联系": "聯絡",
      "Cross-border Patent Strategy": "跨境專利佈局策略",
      "Cross-border patent strategy": "跨境專利佈局策略",
      "Patent layout for Chinese innovators going overseas and overseas innovators entering China.": "服務中國企業及個人發明人的海外專利佈局，也服務境外創新主體進入中國的專利佈局。",
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.": "馬肅協助中國企業及個人發明人規劃海外專利組合，同時協助境外創新團隊以審查員視角進入中國，完成可授權性篩選、權利要求重構與組合佈局。",
      "Read the knowledge center": "閱讀文章中心",
      "Discuss cooperation": "洽談合作",
      "Former CNIPA examiner": "前國知局專利審查員",
      "Examiner-style analysis for China entry and outbound patent decisions.": "以審查員視角判斷進入中國與海外佈局的授權風險。",
      "20+ articles": "20+ 篇文章",
      "A structured knowledge center for cross-border patent strategy.": "圍繞跨境專利佈局的結構化知識中心。",
      "Patent-map method": "專利地圖方法",
      "Turn real technical problems into portfolio options.": "把真實技術問題轉化為可佈局的專利方案。",
      "Two-way layout": "雙向佈局",
      "China-to-overseas portfolios and overseas-to-China filings.": "中國主體出海佈局，境外主體進入中國。",
      "Latest Articles": "最新文章",
      "New thinking for AI, Chinese innovation, China entry, and overseas patent strategy.": "關於 AI、中國創新、進入中國與海外專利佈局的新思考。",
      "Read article": "閱讀文章",
      "Popular Series": "熱門系列",
      "Follow the knowledge by topic.": "按主題追蹤知識內容。",
      "Explore series": "查看系列",
      "Service Overview": "服務概覽",
      "Strategy services built around cross-border patent layout.": "圍繞跨境專利佈局建立的策略服務。",
      "Chinese Innovators Going Overseas": "中國創新主體出海",
      "Overseas patent layout, prior-art landscape reading, PCT and national-phase planning, and portfolio sequencing for Chinese companies and individual inventors.": "為中國企業及個人發明人提供海外專利佈局、現有技術格局判讀、PCT 與國家階段規劃及組合順序設計。",
      "Overseas Innovators Entering China": "境外創新主體進入中國",
      "Pre-filing China review, claim reconstruction, examiner-style office-action reasoning, and China portfolio design.": "中國申請前評估、權利要求重構、審查意見應對推演與中國專利組合設計。",
      "Patent-Map Innovation": "專利地圖創新",
      "Use patent information to discover technical white space and guide invention mining before drafting begins.": "在撰寫前用專利信息發現技術空白，指導發明挖掘。",
      "Patent Firm Cooperation": "專利代理機構合作",
      "Cross-border strategy memos, bilingual explanations, and technical analysis for Chinese and overseas patent counsel.": "為中國及海外專利代理人提供跨境策略備忘錄、雙語說明與技術分析。",
      "Publication and Honors": "出版與榮譽",
      "Practical Science and Innovation in the AI Era.": "《AI 時代的科創實戰教程》",
      "Newsletter": "電子通訊",
      "Get cross-border patent strategy notes and AI-era innovation articles.": "訂閱跨境專利佈局與 AI 時代科創文章。",
      "Subscribe to Ma Su IP Notes": "訂閱 Ma Su IP Notes",
      "Subscribe": "訂閱",
      "Knowledge Center": "文章中心",
      "Articles organized as an IP strategy library.": "以知識庫方式組織的專利策略文章。",
      "Filter by series, sort by time, and follow the method from examiner insight to patent-map guided innovation.": "可按系列篩選、按時間排序，從審查員洞察一路讀到專利地圖創新方法。",
      "Pinned Story": "置頂故事",
      "Ma Su's complete story lives in the article center.": "馬肅的完整故事放在文章中心。",
      "Sort": "排序",
      "Newest first": "最新優先",
      "Oldest first": "最早優先",
      "About Ma Su": "關於馬肅",
      "Former CNIPA examiner, cross-border patent strategy adviser, and patent-map innovation educator.": "前國知局專利審查員、跨境專利策略顧問與專利地圖創新教育者。",
      "Contact": "聯絡",
      "Services": "服務",
      "Author": "作者",
      "Share": "分享",
      "Copy link": "複製連結",
      "Related Articles": "相關文章",
      "Continue this series": "繼續閱讀本系列",
      "Get new IP strategy articles.": "接收新的知識產權策略文章。",
      "Email": "電郵"
    },
    ja: {
      "首页": "ホーム",
      "文章中心": "記事センター",
      "方法论": "方法論",
      "关于我": "プロフィール",
      "联系": "お問い合わせ",
      "Cross-border Patent Strategy": "クロスボーダー特許戦略",
      "Cross-border patent strategy": "クロスボーダー特許戦略",
      "Patent layout for Chinese innovators going overseas and overseas innovators entering China.": "中国企業・個人発明家の海外特許ポートフォリオと、海外イノベーターの中国進出特許戦略を支援します。",
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.": "Ma Su は、中国企業と個人発明家の海外特許ポートフォリオ設計を支援し、海外の技術チームには審査官視点の特許性評価、クレーム再構成、中国向けポートフォリオ戦略を提供します。",
      "Read the knowledge center": "記事センターを見る",
      "Discuss cooperation": "相談する",
      "Former CNIPA examiner": "元 CNIPA 特許審査官",
      "Examiner-style analysis for China entry and outbound patent decisions.": "中国進出と海外出願の判断を審査官視点で分析します。",
      "20+ articles": "20本以上の記事",
      "A structured knowledge center for cross-border patent strategy.": "クロスボーダー特許戦略のための体系的な知識センター。",
      "Patent-map method": "特許マップ手法",
      "Turn real technical problems into portfolio options.": "実際の技術課題を特許ポートフォリオ案へ変換します。",
      "Two-way layout": "双方向ポートフォリオ",
      "China-to-overseas portfolios and overseas-to-China filings.": "中国から海外へ、海外から中国への特許配置。",
      "Latest Articles": "最新記事",
      "New thinking for AI, Chinese innovation, China entry, and overseas patent strategy.": "AI、中国発イノベーション、中国進出、海外特許戦略に関する新しい視点。",
      "Read article": "記事を読む",
      "Popular Series": "人気シリーズ",
      "Follow the knowledge by topic.": "テーマ別に知識を追えます。",
      "Explore series": "シリーズを見る",
      "Service Overview": "サービス概要",
      "Strategy services built around cross-border patent layout.": "クロスボーダー特許ポートフォリオを中心にした戦略サービス。",
      "Chinese Innovators Going Overseas": "海外展開する中国イノベーター",
      "Overseas Innovators Entering China": "中国へ進出する海外イノベーター",
      "Newsletter": "ニュースレター",
      "Subscribe": "登録",
      "Knowledge Center": "記事センター",
      "Articles organized as an IP strategy library.": "IP 戦略ライブラリとして整理された記事。",
      "Sort": "並び替え",
      "Newest first": "新しい順",
      "Oldest first": "古い順",
      "About Ma Su": "Ma Su について",
      "Contact": "お問い合わせ",
      "Services": "サービス",
      "Author": "著者",
      "Share": "共有",
      "Copy link": "リンクをコピー",
      "Related Articles": "関連記事",
      "Continue this series": "このシリーズを読む",
      "Email": "メール"
    },
    tr: {
      "首页": "Ana sayfa",
      "文章中心": "Makaleler",
      "方法论": "Metodoloji",
      "关于我": "Hakkımda",
      "联系": "İletişim",
      "Cross-border Patent Strategy": "Sınır Ötesi Patent Stratejisi",
      "Cross-border patent strategy": "Sınır ötesi patent stratejisi",
      "Patent layout for Chinese innovators going overseas and overseas innovators entering China.": "Çinli şirketler ve bireysel mucitler için yurt dışı patent portföyü; Çin pazarına giren yabancı inovasyon ekipleri için Çin patent stratejisi.",
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.": "Ma Su, Çinli şirketlerin ve bireysel mucitlerin yurt dışı patent portföylerini planlamasına; yabancı inovasyon ekiplerinin ise Çin'e girerken incelemeci bakışıyla patentlenebilirlik taraması, istem yeniden kurgusu ve portföy stratejisi oluşturmasına yardımcı olur.",
      "Read the knowledge center": "Bilgi merkezini oku",
      "Discuss cooperation": "İş birliği görüş",
      "Former CNIPA examiner": "Eski CNIPA patent incelemecisi",
      "20+ articles": "20+ makale",
      "Patent-map method": "Patent haritası yöntemi",
      "Two-way layout": "Çift yönlü portföy",
      "Latest Articles": "Son makaleler",
      "Read article": "Makaleyi oku",
      "Popular Series": "Popüler seriler",
      "Explore series": "Seriyi incele",
      "Service Overview": "Hizmet özeti",
      "Chinese Innovators Going Overseas": "Yurt dışına açılan Çinli inovasyon ekipleri",
      "Overseas Innovators Entering China": "Çin'e giren yabancı inovasyon ekipleri",
      "Patent-Map Innovation": "Patent Haritası ile İnovasyon",
      "Patent Firm Cooperation": "Patent firmalarıyla iş birliği",
      "Newsletter": "Bülten",
      "Subscribe": "Abone ol",
      "Knowledge Center": "Makale merkezi",
      "Sort": "Sırala",
      "Newest first": "En yeni önce",
      "Oldest first": "En eski önce",
      "About Ma Su": "Ma Su hakkında",
      "Contact": "İletişim",
      "Services": "Hizmetler",
      "Author": "Yazar",
      "Share": "Paylaş",
      "Copy link": "Bağlantıyı kopyala",
      "Related Articles": "İlgili makaleler",
      "Continue this series": "Bu seriye devam et",
      "Email": "E-posta"
    },
    vi: {
      "首页": "Trang chủ",
      "文章中心": "Bài viết",
      "方法论": "Phương pháp",
      "关于我": "Giới thiệu",
      "联系": "Liên hệ",
      "Cross-border Patent Strategy": "Chiến lược sáng chế xuyên biên giới",
      "Cross-border patent strategy": "Chiến lược sáng chế xuyên biên giới",
      "Patent layout for Chinese innovators going overseas and overseas innovators entering China.": "Bố trí sáng chế ở nước ngoài cho doanh nghiệp và nhà sáng chế cá nhân Trung Quốc; bố trí sáng chế tại Trung Quốc cho chủ thể đổi mới nước ngoài.",
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.": "Ma Su hỗ trợ doanh nghiệp Trung Quốc và nhà sáng chế cá nhân lập danh mục sáng chế ở nước ngoài, đồng thời hỗ trợ đội ngũ đổi mới nước ngoài vào Trung Quốc bằng sàng lọc khả năng cấp bằng, tái cấu trúc yêu cầu bảo hộ và chiến lược danh mục theo góc nhìn thẩm định viên.",
      "Read the knowledge center": "Đọc trung tâm bài viết",
      "Discuss cooperation": "Trao đổi hợp tác",
      "Former CNIPA examiner": "Cựu thẩm định viên CNIPA",
      "20+ articles": "Hơn 20 bài viết",
      "Patent-map method": "Phương pháp bản đồ sáng chế",
      "Two-way layout": "Bố trí hai chiều",
      "Latest Articles": "Bài mới nhất",
      "Read article": "Đọc bài viết",
      "Popular Series": "Chuỗi nổi bật",
      "Explore series": "Xem chuỗi bài",
      "Service Overview": "Tổng quan dịch vụ",
      "Chinese Innovators Going Overseas": "Chủ thể đổi mới Trung Quốc ra nước ngoài",
      "Overseas Innovators Entering China": "Chủ thể đổi mới nước ngoài vào Trung Quốc",
      "Patent-Map Innovation": "Đổi mới bằng bản đồ sáng chế",
      "Patent Firm Cooperation": "Hợp tác với hãng sáng chế",
      "Newsletter": "Bản tin",
      "Subscribe": "Đăng ký",
      "Knowledge Center": "Trung tâm bài viết",
      "Sort": "Sắp xếp",
      "Newest first": "Mới nhất trước",
      "Oldest first": "Cũ nhất trước",
      "About Ma Su": "Giới thiệu Ma Su",
      "Contact": "Liên hệ",
      "Services": "Dịch vụ",
      "Author": "Tác giả",
      "Share": "Chia sẻ",
      "Copy link": "Sao chép liên kết",
      "Related Articles": "Bài viết liên quan",
      "Continue this series": "Đọc tiếp chuỗi này",
      "Email": "Email"
    }
  };

  const navLabels = {
    en: ["Home", "Articles", "Methodology", "About", "Contact"],
    "zh-hk": ["首頁", "文章中心", "方法論", "關於我", "聯絡"],
    ja: ["ホーム", "記事センター", "方法論", "プロフィール", "お問い合わせ"],
    tr: ["Ana sayfa", "Makaleler", "Metodoloji", "Hakkımda", "İletişim"],
    vi: ["Trang chủ", "Bài viết", "Phương pháp", "Giới thiệu", "Liên hệ"],
  };

  function translateNav(lang) {
    const labels = navLabels[lang] || navLabels.en;
    document.querySelectorAll(".main-nav a").forEach((link, index) => {
      if (labels[index]) link.textContent = labels[index];
    });
  }

  function getLang() {
    const query = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem("masuip-lang");
    return languages.some(([code]) => code === query) ? query : languages.some(([code]) => code === saved) ? saved : "en";
  }

  function addSwitcher(lang) {
    const header = document.querySelector(".content-header");
    if (!header || header.querySelector("[data-language-select]")) return;
    const wrap = document.createElement("div");
    wrap.className = "language-switcher";
    wrap.innerHTML = '<label><span>Language</span><select data-language-select>' + languages.map(([code, label]) => '<option value="' + code + '">' + label + '</option>').join("") + '</select></label>';
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

  function translate(lang) {
    document.documentElement.lang = lang === "zh-hk" ? "zh-Hant-HK" : lang;
    translateNav(lang);
    if (lang === "en") return;
    const map = dictionary[lang] || {};
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const original = node.nodeValue.trim();
      if (!map[original]) return;
      node.nodeValue = node.nodeValue.replace(original, map[original]);
    });
    document.querySelectorAll("input[placeholder='you@example.com']").forEach((input) => input.setAttribute("placeholder", "email@example.com"));
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    addSwitcher(lang);
    translate(lang);
  });
})();`;

function prefixFor(file) {
  const rel = path.relative(root, file).replace(/\\/g, "/");
  const depth = rel.split("/").length - 1;
  return "../".repeat(depth);
}

function addRuntime(file) {
  let html = fs.readFileSync(file, "utf8");
  if (html.includes("i18n.js")) return;
  const prefix = prefixFor(file);
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
  fs.writeFileSync(path.join(root, "public", "i18n.js"), runtime, "utf8");
  const htmlFiles = [
    ...walk(path.join(root, "articles")),
    ...walk(path.join(root, "series")),
    ...walk(path.join(root, "public", "articles")),
    ...walk(path.join(root, "public", "series")),
    ...fs.readdirSync(root).filter((name) => name.endsWith(".html")).map((name) => path.join(root, name)),
    ...fs.readdirSync(path.join(root, "public")).filter((name) => name.endsWith(".html")).map((name) => path.join(root, "public", name)),
  ];
  htmlFiles.forEach(addRuntime);
}

if (require.main === module) applyAll();

module.exports = { applyAll };
