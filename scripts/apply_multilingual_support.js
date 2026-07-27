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
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.": "馬肅協助中國企業及個人發明人規劃海外專利組合，同時也協助境外創新團隊進入中國，完成審查員視角的可授權性篩選、權利要求重構與專利組合策略。",
      "Examiner-style analysis for China entry and outbound patent decisions.": "以審查員視角分析進入中國及海外專利佈局決策。",
      "A structured knowledge center for cross-border patent strategy.": "面向跨境專利策略的結構化知識中心。",
      "Turn real technical problems into portfolio options.": "把真實技術問題轉化為可佈局的專利方案。",
      "China-to-overseas portfolios and overseas-to-China filings.": "中國主體出海佈局，以及境外主體進入中國的專利申請。",
      "New thinking for AI, Chinese innovation, China entry, and overseas patent strategy.": "關於 AI、中國創新、進入中國及海外專利策略的新思考。",
      "Follow the knowledge by topic.": "按主題追蹤知識內容。",
      "China prosecution": "中國專利審查",
      "Former-examiner analysis for China filing, inventive-step responses, claim reconstruction, and office-action strategy.": "以前審查員視角分析中國申請、創造性答辯、權利要求重構及審查意見應對策略。",
      "Patent-map guided innovation": "專利地圖引導創新",
      "Innovation Map": "創新地圖",
      "Patent information, technical-feature decomposition, and structured invention mining for companies and R&D teams.": "為企業和研發團隊提供專利信息、技術特徵拆解與結構化發明挖掘方法。",
      "Cross-border strategy": "跨境策略",
      "Cross-border patent strategy for Chinese companies and individual inventors going overseas, and for overseas innovators entering China.": "服務中國企業及個人發明人出海，也服務境外創新主體進入中國的跨境專利策略。",
      "Science innovation education": "科創教育",
      "Project-based science innovation education, AI-era curriculum design, topic selection, prototype testing, and student IP awareness.": "項目式科創教育、AI 時代課程設計、選題、原型測試與學生知識產權意識培養。",
      "Strategy services built around cross-border patent layout.": "圍繞跨境專利佈局建立的策略服務。",
      "Chinese Innovators Going Overseas": "中國創新主體出海",
      "Overseas patent layout, prior-art landscape reading, PCT and national-phase planning, and portfolio sequencing for Chinese companies and individual inventors.": "為中國企業及個人發明人提供海外專利佈局、現有技術格局解讀、PCT 與國家階段規劃及組合順序設計。",
      "View services": "查看服務",
      "Overseas Innovators Entering China": "境外創新主體進入中國",
      "Pre-filing China review, claim reconstruction, examiner-style office-action reasoning, and China portfolio design.": "中國申請前評估、權利要求重構、審查員式審查意見推演與中國專利組合設計。",
      "View service": "查看服務",
      "Patent-Map Innovation": "專利地圖創新",
      "Use patent information to discover technical white space and guide invention mining before drafting begins.": "在撰寫前利用專利信息發現技術空白，指導發明挖掘。",
      "View method": "查看方法",
      "Patent Firm Cooperation": "專利代理機構合作",
      "Cross-border strategy memos, bilingual explanations, and technical analysis for Chinese and overseas patent counsel.": "為中國及海外專利代理人提供跨境策略備忘錄、雙語說明與技術分析。",
      "Practical Science and Innovation in the AI Era.": "AI 時代的科創實戰教程。",
      "Ma Su's work connects patent examination logic, science innovation education, and technology commercialization. The complete personal story now lives as a pinned article in the knowledge center, while this homepage keeps the proof concise.": "馬肅的工作連接專利審查邏輯、科創教育與技術商業化。完整個人故事已作為置頂文章放在文章中心，首頁則保留最核心的可信證據。",
      "years in patent examination, IP education, and technology transfer": "年專利審查、知識產權教育與技術轉化經驗",
      "former patent examiner perspective": "前專利審查員視角",
      "external graduate mentor": "校外研究生導師",
      "Strong IP work is not only legal procedure. It is the ability to read technology, market direction, and examination logic at the same time.": "真正有力量的知識產權工作不只是法律流程，而是同時讀懂技術、市場方向與審查邏輯的能力。",
      "Work with Ma Su": "與馬肅合作",
      "Turn technical problems into protectable inventions.": "把技術問題轉化為可保護的發明。",
      "For China entry, overseas patent layout, enterprise invention mining, or youth science innovation coaching, start with a focused conversation about the real technical problem.": "無論是進入中國、海外專利佈局、企業發明挖掘，還是青少年科創輔導，都可以從一次聚焦真實技術問題的交流開始。",
      "Filter by series, sort by time, and follow the method from examiner insight to patent-map guided innovation.": "按系列篩選、按時間排序，從審查員洞察一路讀到專利地圖引導創新。",
      "Ma Su's complete story lives in the article center.": "馬肅的完整故事放在文章中心。",
      "All": "全部",
      "Next Step": "下一步",
      "Use the articles as a map, then discuss the real patent problem.": "先把文章當作地圖，再討論真正的專利問題。",
      "The article center is organized to help readers move from examiner logic to practical invention mining and cross-border patent layout.": "文章中心的組織方式，是幫助讀者從審查邏輯走向實際發明挖掘與跨境專利佈局。",
      "Contact Ma Su": "聯絡馬肅",
      "A person who understands invention, examination, and patent grant at the same time.": "一個同時理解發明、審查與授權的人。",
      "Ma Su is a former CNIPA patent examiner, inventor, patent attorney, and innovation methodology practitioner. His distinctive value is the combination of three roles: he knows how an idea becomes an invention, how an examiner judges it, and how to write it into a patent application with a stronger chance of grant.": "馬肅曾任中國國家知識產權局專利審查員，也是發明人、專利代理師與創新方法論實踐者。他的獨特價值在於三種角色的結合：知道一個想法如何變成發明，知道審查員如何判斷，也知道如何把它寫成更有授權可能性的專利申請。",
      "Read the full personal story": "閱讀完整個人故事",
      "Inventor + examiner + patent attorney + innovation methodology author.": "發明人 + 審查員 + 專利代理師 + 創新方法論作者。",
      "Entered the Chinese patent office": "進入中國專利審查系統",
      "After becoming a patent examiner, Ma Su set a personal rule: beyond ordinary examination work, he would read more than 100 patent documents every day and track the newest patent developments.": "成為專利審查員後，馬肅給自己定下一條要求：除了完成日常審查工作，每天額外閱讀 100 件以上專利文獻，並持續追蹤最新專利進展。",
      "Reading to invent": "從閱讀走向發明",
      "From patent reading to patent creation": "從專利閱讀到專利創造",
      "Through massive patent reading, he began writing his own patent applications. That early batch was successfully granted, proving that invention can be trained through method.": "在大量閱讀的基礎上，他開始撰寫自己的專利申請。早期那一批專利後來全部獲得授權，證明發明可以通過方法訓練出來。",
      "Two years studying how innovation happens": "用兩年研究創新如何發生",
      "After leaving the patent office, he spent two years researching innovation and gradually formed a mature methodology based on technical-problem decomposition, patent information, and grant logic.": "離開專利局後，他用兩年時間研究創新，逐漸形成以技術問題拆解、專利信息與授權邏輯為核心的成熟方法論。",
      "Practice": "實踐",
      "Hundreds of invention patents in one year": "一年內支持數百件發明專利",
      "He once supported hundreds of invention patent applications within a year, then used the method to help companies upgrade products and guide students to win science innovation awards.": "他曾在一年內支持數百件發明專利申請，後來又用這套方法幫助企業升級產品，並輔導學生在科創比賽中獲獎。",
      "China patent examination perspective.": "中國專利審查視角。",
      "Inventor and attorney": "發明人與代理師",
      "Understands both creation and grant procedure.": "同時理解創造與授權程序。",
      "Innovation method": "創新方法",
      "Guided companies and youth science innovation projects.": "指導企業與青少年科創項目。",
      "Textbook author": "教材作者",
      "Youth science innovation guide and competition handbook builder.": "青少年科創指南與比賽手冊撰寫者。",
      "AI-Era Youth Science Innovation Practical Textbook.": "《AI 時代青少年科創實戰教程》。",
      "Ma Su's textbook, AI-Era Youth Science Innovation Practical Textbook, turns youth innovation into a complete practice route: discover real problems, conduct social surveys, analyze data, read patents and technology news, use structured innovation methods, collaborate with AI, build prototypes, test, present, and protect results through intellectual property.": "馬肅撰寫的《AI 時代青少年科創實戰教程》，把青少年科創轉化為完整實踐路線：發現真實問題、開展社會調查、分析數據、閱讀專利與科技新聞、使用結構化創新方法、與 AI 協作、製作原型、測試、展示，並以知識產權保護成果。",
      "The manuscript has been developed as a publication-ready teaching system with 14 chapters and practical appendices, including a 12-session course plan, AI prompt library, 100 youth innovation topic seeds, project archives, survey question bank, IP lessons, student growth records, and mentor notes.": "該書稿已形成可出版的教學系統，包含 14 章正文與實操附錄，涵蓋 12 課時課程設計、AI 提示詞庫、100 個青少年科創選題種子、項目檔案、問卷題庫、知識產權課程、學生成長記錄與導師批注。",
      "Problem discovery": "問題發現",
      "Patent search": "專利檢索",
      "AI collaboration": "AI 協作",
      "Prototype testing": "原型測試",
      "Presentation and IP protection": "展示與知識產權保護",
      "Read the textbook introduction": "閱讀教材介紹",
      "View full cover spread": "查看完整封面展開圖",
      "Planning the Xiegang Yafan Cup youth science innovation competition.": "策劃謝崗鎮雅梵杯青少年科創大賽。",
      "Ma Su's youth innovation methodology is not only a textbook idea. It is being translated into local competition design, enterprise R&D visits, IP education, patent search training, product design guidance, roadshow practice, and commercialization pathways.": "馬肅的青少年創新方法論不只是教材概念，正在轉化為地方賽事設計、企業研發參訪、知識產權教育、專利檢索訓練、產品設計指導、路演實踐與成果轉化路徑。",
      "Local education": "地方教育",
      "Xiegang youth innovation brand": "謝崗青少年科創品牌",
      "The competition is designed for primary and secondary students in Xiegang, helping local schools build a repeatable science innovation and IP education activity.": "比賽面向謝崗中小學生設計，幫助本地學校建立可持續複製的科創與知識產權教育活動。",
      "Enterprise scenario": "企業場景",
      "Water-cup product innovation": "水杯產品創新",
      "Students work around functional, material, shape, smart-hardware, and prototype innovation for cups, connecting creative ideas with real manufacturing resources.": "學生圍繞水杯的功能、材料、造型、智能硬件與原型創新展開，把創意想法與真實製造資源連接起來。",
      "IP pathway": "知識產權路徑",
      "From idea to patent to product": "從創意到專利再到產品",
      "The model introduces patent literacy, patent search, expert review, product design, and selected commercialization so students can see how innovation creates value.": "這一模式引入專利素養、專利檢索、專家評審、產品設計和成果轉化，讓學生看見創新如何創造價值。",
      "Practical Handbook": "實操手冊",
      "From a real cup problem to a competition-ready innovation project.": "從一個真實水杯問題到可以參賽的創新項目。",
      "The handbook turns the competition into a step-by-step workbook: observe real use scenes, design a survey, analyze data, search patents, read product cases, build an MVP, use AI for 3D expression, test and iterate, then prepare the roadshow and IP materials.": "這本手冊把比賽變成逐步完成的工作簿：觀察真實使用場景、設計問卷、分析數據、檢索專利、閱讀產品案例、製作 MVP、用 AI 做 3D 表達、測試迭代，最後準備路演和知識產權材料。",
      "Read the handbook excerpt": "閱讀手冊節選",
      "Read the competition case": "閱讀比賽案例",
      "Documents behind the personal IP story.": "支撐個人 IP 故事的證明材料。",
      "These credentials support Ma Su's combined identity as a former examiner, patent professional, invention-method practitioner, science communication contributor, and youth innovation mentor.": "這些證書支撐馬肅作為前審查員、專利專業人士、發明方法實踐者、科普貢獻者與青少年科創導師的複合身份。",
      "Patent-Map Guided Innovation": "專利地圖引導創新",
      "Use patent information to create, not only to avoid infringement.": "用專利信息創造，而不只是規避侵權。",
      "Ma Su's methodology treats patent databases as maps of human invention. By decomposing products, abstracting technical problems, searching across fields, and rebuilding technical-feature combinations, teams can generate patentable options before R&D or drafting becomes expensive.": "馬肅的方法論把專利數據庫視為人類發明的地圖。通過拆解產品、抽象技術問題、跨領域檢索並重建技術特徵組合，團隊可以在研發或撰寫成本變高之前生成可專利化方案。",
      "Common mistake": "常見誤區",
      "Patent search is often used too late.": "專利檢索經常用得太晚。",
      "Many teams search patents only to check whether an idea is already disclosed. That is defensive and narrow. Used earlier, patent information can reveal where the real technical gap is and which structures from other fields may be transferred into the current product.": "很多團隊只在想法形成後才檢索專利，看它是否已被公開。這種用法偏防守也偏狹窄。更早使用專利信息，可以看見真正的技術缺口，以及其他領域哪些結構可以遷移到當前產品。",
      "Better use": "更好的用法",
      "Patent information can guide invention itself.": "專利信息可以直接指導發明。",
      "The point is not to copy prior art. The point is to understand technical problems, compare features, identify empty spaces, and generate new combinations that are technically coherent and legally protectable.": "重點不是複製現有技術，而是理解技術問題、比較技術特徵、識別空白區域，並生成技術上自洽、法律上可保護的新組合。",
      "Workflow": "工作流程",
      "From existing product to patent layout.": "從現有產品到專利佈局。",
      "Decompose": "拆解",
      "Break the product into shell, structure, material, algorithm, connection, control, sensing, communication, and user-interaction features.": "將產品拆分為外殼、結構、材料、算法、連接、控制、傳感、通信和用戶交互等技術特徵。",
      "Abstract": "抽象",
      "Translate each feature into the function it performs and the technical problem it solves.": "把每個特徵轉化為它實現的功能和解決的技術問題。",
      "Search": "檢索",
      "Search by technical problem across adjacent and distant fields, not only by product name or industry keywords.": "按技術問題跨相鄰和遠距領域檢索，而不只按產品名稱或行業關鍵詞檢索。",
      "Recombine": "重組",
      "Replace, migrate, invert, simplify, or combine technical means to produce multiple patentable alternatives.": "通過替換、遷移、反向、簡化或組合技術手段，生成多個可專利化替代方案。",
      "Outputs": "輸出成果",
      "What the methodology produces.": "這套方法能產生什麼。",
      "Technical-feature decomposition table": "技術特徵拆解表",
      "Technical problem abstraction map": "技術問題抽象圖",
      "Cross-field patent search strategy": "跨領域專利檢索策略",
      "Alternative technical feature library": "替代技術特徵庫",
      "Patentable solution shortlist": "可專利化方案短名單",
      "Portfolio filing roadmap": "專利組合申請路線圖",
      "Read more about patent-map guided innovation.": "繼續閱讀專利地圖引導創新。",
      "Apply the method": "應用這套方法",
      "For enterprise R&D, patent portfolio design, medical innovation, and foreign patent firm cooperation.": "適用於企業研發、專利組合設計、醫療創新及海外專利機構合作。",
      "Start with the invention, case type, and China objective.": "請從發明、案件類型與中國目標開始。",
      "For faster response, include whether your inquiry concerns China patent entry, patentability screening, claim reconstruction, patent-map guided innovation, education cooperation, or article/media cooperation.": "為了更快回覆，請說明你的需求是否涉及中國專利進入、可專利性篩選、權利要求重構、專利地圖引導創新、教育合作或文章/媒體合作。",
      "Direct contact": "直接聯絡",
      "Ma Su Team welcomes international cooperation inquiries.": "馬肅團隊歡迎國際合作諮詢。",
      "Overseas innovator China layout": "境外創新主體中國佈局",
      "Cross-border client support for China patent protection": "跨境客戶中國專利保護支持",
      "China patent prosecution strategy": "中國專利審查策略",
      "AI-era science innovation education": "AI 時代科創教育",
      "China patent entry inquiry": "中國專利進入諮詢",
      "Phone number can be used for WeChat or WhatsApp discussion after initial contact.": "初步聯絡後，可使用電話號碼進行微信或 WhatsApp 溝通。",
      "Personal Story · 2026-07-27": "個人故事 · 2026-07-27",
      "From Patent Examiner to Innovation Methodology Practitioner": "從專利審查員到創新方法論實踐者",
      "Ma Su's personal story: from CNIPA patent examiner to inventor, patent attorney, innovation methodology practitioner, youth science innovation educator, and cross-border patent strategist.": "馬肅的個人故事：從中國國家知識產權局專利審查員，到發明人、專利代理師、創新方法論實踐者、青少年科創教育者與跨境專利策略顧問。",
      "Youth Innovation Case · 2026-07-27": "青少年科創案例 · 2026-07-27",
      "Xiegang Yafan Cup Youth Innovation Competition Case": "謝崗雅梵杯青少年科創大賽案例",
      "A youth science innovation competition plan that connects local education, enterprise R&D resources, patent literacy, product design, and commercialization.": "一個連接地方教育、企業研發資源、專利素養、產品設計與成果轉化的青少年科創大賽策劃案例。",
      "Youth Innovation Manual · 2026-07-27": "青少年科創手冊 · 2026-07-27",
      "Yafan Cup Water Cup Innovation Practical Manual: From Real Problem to Competition Project": "雅梵杯水杯創新實操手冊：從真實問題到參賽項目",
      "An excerpt from Ma Su's practical handbook for the Yafan Cup, showing how students move from real water-cup problems to surveys, data, patent search, MVP prototypes, AI-assisted 3D expression, and IP-aware presentations.": "馬肅為雅梵杯撰寫的實操手冊節選，展示學生如何從真實水杯問題走向問卷、數據、專利檢索、MVP 原型、AI 輔助 3D 表達與具備知識產權意識的答辯。",
      "AI and IP · 2026-07-24": "AI 與知識產權 · 2026-07-24",
      "AI and IP Strategy for Global Innovators Entering China": "全球創新主體進入中國的 AI 與知識產權策略",
      "A practical IP strategy note for AI-heavy companies, overseas innovators, and patent firms preparing China patent filings in the age of generative AI.": "面向 AI 密集型企業、境外創新主體和準備中國專利申請的專利機構的實務策略筆記。",
      "Patent Mining · 2026-06-20": "專利挖掘 · 2026-06-20",
      "Enterprise IPR Patent Mining: A Five-Step Method for Finding High-Value Inventions": "企業知識產權專利挖掘：發現高價值發明的五步法",
      "A practical workflow for enterprise IPR teams to discover patentable technical solutions from real R&D work.": "幫助企業知識產權團隊從真實研發工作中發現可專利化技術方案的實務流程。",
      "China Prosecution · 2026-06-20": "中國審查實務 · 2026-06-20",
      "Responding to Inventive-Step Office Actions in Chinese Invention Patent Applications": "中國發明專利創造性審查意見的答覆方法",
      "A practice note on how to read, decompose, and respond to creativity objections during Chinese examination.": "關於如何閱讀、拆解並答覆中國審查中創造性質疑的實務筆記。",
      "Portfolio Strategy · 2026-06-20": "組合策略 · 2026-06-20",
      "Using Divisional Applications to Extend the Patent Protection Chain": "利用分案申請延伸專利保護鏈",
      "How divisional practice can support layered protection, prosecution flexibility, and long-term portfolio control.": "分案實務如何支持分層保護、審查靈活性與長期組合控制。",
      "Patent Mining and Portfolio Layout in the AI Era": "AI 時代的專利挖掘與組合佈局",
      "A discussion of how AI can lower the cost of patent mining while increasing the need for expert legal judgment.": "討論 AI 如何降低專利挖掘成本，同時提升對專業法律判斷的需求。",
      "IP Policy · 2026-06-20": "知識產權政策 · 2026-06-20",
      "How Patents Balance Private Rights and the Public Interest": "專利如何平衡私人權利與公共利益",
      "A public-facing explanation of why patent systems disclose technical knowledge while granting time-limited exclusivity.": "面向公眾解釋專利制度為何在授予限期排他權的同時公開技術知識。",
      "Pharma IP · 2026-06-20": "醫藥知識產權 · 2026-06-20",
      "Patent Layout Strategy for Generic Drugs": "仿製藥專利佈局策略",
      "A structured reading of how generic pharmaceutical players can understand and respond to patent barriers.": "結構化解讀仿製藥企業如何理解並應對專利壁壘。",
      "Claim Drafting · 2026-06-20": "權利要求撰寫 · 2026-06-20",
      "A Simple Guide to Patent Claim Drafting": "專利權利要求撰寫簡明指南",
      "A practical explanation of claim drafting logic, centered on technical features and defensible scope.": "以技術特徵和可防守範圍為中心，解釋權利要求撰寫邏輯。",
      "The Easiest Path for Patent Mining": "專利挖掘最簡路徑",
      "A direct route for IP teams to identify patentable improvements through problem decomposition and technical substitution.": "知識產權團隊通過問題拆解和技術替換識別可專利化改進的直接路徑。",
      "IP Education · 2026-06-20": "知識產權教育 · 2026-06-20",
      "Protecting Intellectual Property Means Protecting Innovation and the Future": "保護知識產權就是保護創新和未來",
      "A broad essay on the social, educational, and industrial meaning of intellectual property protection.": "關於知識產權保護在社會、教育與產業層面意義的文章。",
      "Innovation Methodology · 2026-06-20": "創新方法論 · 2026-06-20",
      "Reverse Thinking as a Powerful Innovation Method": "反向思維是一種有力的創新方法",
      "An innovation-method essay on using reverse thinking to break fixed assumptions and generate new technical paths.": "關於如何用反向思維打破固定假設並生成新技術路徑的創新方法文章。",
      "Innovation Education · 2026-06-20": "創新教育 · 2026-06-20",
      "Is Innovation Really Difficult?": "創新真的很難嗎？",
      "A concise essay arguing that innovation can be taught through structured problem discovery and technical recombination.": "一篇簡明文章，說明創新可以通過結構化問題發現與技術重組來訓練。",
      "Youth Innovation · 2026-06-20": "青少年科創 · 2026-06-20",
      "Youth Science Innovation Topic Selection Questionnaire": "青少年科創選題問卷",
      "A guided questionnaire for helping young students discover real innovation topics instead of forcing empty ideas.": "幫助學生發現真實創新題目，而不是硬想空泛點子的引導問卷。",
      "Project-Based Learning · 2026-06-20": "項目式學習 · 2026-06-20",
      "Rejection and Asking for Help: Lesson Two of an Innovation Competition": "被拒絕與尋求幫助：創新比賽第二課",
      "A project-based learning reflection on how students learn from rejection, outreach, and real-world communication.": "關於學生如何從拒絕、對外溝通和真實交流中學習的項目式反思。",
      "Interdisciplinary Integration: Using Mathematics After a Practical Setback": "跨學科整合：在實踐受挫後使用數學",
      "A teaching note on how a science innovation project can integrate mathematics after encountering real-world limits.": "一篇教學筆記，說明科創項目在遇到現實限制後如何整合數學。",
      "Youth Innovation Competition Practical Lessons Four and Five": "青少年科創比賽實操第四課與第五課",
      "A continued project diary on guiding young innovators from concept formation toward testing and presentation.": "關於引導青少年創新者從概念形成走向測試與展示的項目日誌。",
      "Book and Curriculum · 2026-06-20": "教材與課程 · 2026-06-20",
      "Why I Decided to Write These Experiences into a Practical Science Innovation Textbook": "為什麼我決定把這些經驗寫成科創實戰教材",
      "A personal essay explaining why Ma Su converted practical education experience into a science innovation textbook.": "一篇個人文章，解釋馬肅為何把實踐教育經驗轉化為科創教材。",
      "Book and Curriculum · 2026-07-27": "教材與課程 · 2026-07-27",
      "AI-Era Youth Science Innovation Practical Textbook": "AI 時代青少年科創實戰教程",
      "A publication-ready youth innovation textbook by Ma Su, turning problem discovery, social survey, patent search, AI collaboration, prototyping, presentation, and IP protection into a complete practice route.": "馬肅撰寫的青少年科創教材，將問題發現、社會調查、專利檢索、AI 協作、原型製作、成果展示與知識產權保護轉化為完整實踐路線。",
      "Patent Maps · 2026-06-20": "專利地圖 · 2026-06-20",
      "Using Patent Information for Innovation": "利用專利信息進行創新",
      "How patent information can guide invention mining, R&D decisions, and patent portfolio design.": "專利信息如何指導發明挖掘、研發決策與專利組合設計。",
      "AI Era · 2026-06-20": "AI 時代 · 2026-06-20",
      "A Practical Course Framework for Science and Innovation": "科創實戰課程框架",
      "From discovering real problems to patent search, AI collaboration, prototyping, validation, and IP protection.": "從發現真實問題，到專利檢索、AI 協作、原型製作、驗證和知識產權保護。",
      "China Practice · 2026-06-20": "中國實務 · 2026-06-20",
      "What Foreign Patent Firms Should Know Before China Prosecution": "外國專利機構在中國審查前應該知道什麼",
      "Why China entry should be treated as a strategic examination event, not a translation task.": "為什麼進入中國應被視為一次戰略性審查事件，而不是翻譯任務。",
      "Ma Su | Cross-border Patent Strategy and Innovation": "馬肅 | 跨境專利策略與創新",
      "Articles and Insights | Ma Su": "文章與洞察 | 馬肅",
      "About Ma Su | Ma Su Team": "關於馬肅 | 馬肅團隊",
      "Patent-Map Guided Innovation Methodology | Ma Su": "專利地圖引導創新方法論 | 馬肅",
      "Contact | Ma Su Team": "聯絡 | 馬肅團隊",
      "Cross-border patent strategy": "跨境專利策略",
      "Examiner Insights": "審查員洞察",
      "Global IP": "全球知識產權",
      "Youth Innovation": "青少年科創",
      "Ma Su Team": "馬肅團隊",
      "Overseas patent layout for Chinese innovators and China patent layout for overseas innovators.": "服務中國創新主體海外專利佈局，以及境外創新主體中國專利佈局。",
      "After 2017": "2017 年後",
      "Former CNIPA Patent Examiner": "前中國國家知識產權局專利審查員",
      "Archival credential supporting Ma Su's patent examination background.": "支持馬肅專利審查背景的歷史證明。",
      "Chinese Patent Agent Qualification": "中國專利代理師資格",
      "Professional patent agency qualification.": "專業專利代理資格。",
      "External Graduate Mentor": "校外研究生導師",
      "Central South University graduate mentor appointment.": "中南大學研究生導師聘任。",
      "China Association of Inventions": "中國發明協會",
      "Membership connected with invention and innovation practice.": "與發明及創新實踐相關的會員資歷。",
      "CNKI Galaxy Expert Library": "CNKI 銀河專家庫",
      "Certified expert profile.": "認證專家資料。",
      "Science Communication Expert": "科普專家",
      "Appointment related to science communication and innovation education.": "與科學傳播和創新教育相關的聘任。",
      "Hunan Science Writers Association": "湖南省科普作家協會",
      "Membership certificate for science communication writing and public science education.": "科普寫作與公眾科學教育相關的會員證明。",
      "Youth Innovation Coaching": "青少年科創輔導",
      "ICC National Finals Instructor Award": "全球發明大會中國區全國總決賽指導教師獎",
      "Instructor record for Invention Convention China National Finals First Prize.": "中國青少年發明創新展評總決賽一等獎指導教師記錄。",
      "IP Education Training": "知識產權教育培訓",
      "Intellectual property education teacher training record.": "知識產權教育師資培訓記錄。",
      "AI and IP · 2026-06-20": "AI 與知識產權 · 2026-06-20",
      "Related Articles": "相關文章",
      "Ma Su Team": "馬肅團隊",
      "© 2026 Ma Su Team": "© 2026 馬肅團隊",
      "Patent-map guided innovation methodology.": "專利地圖引導創新方法論。",
      "Contact Ma Su Team.": "聯絡馬肅團隊。",
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

  const supplementalTextMap = {
    ja: {
      "Ma Su | Cross-border Patent Strategy and Innovation": "馬粛 | クロスボーダー特許戦略とイノベーション",
      "Articles and Insights | Ma Su": "記事と洞察 | 馬粛",
      "About Ma Su | Ma Su Team": "馬粛について | Ma Su Team",
      "Patent-Map Guided Innovation Methodology | Ma Su": "特許マップ主導のイノベーション方法論 | 馬粛",
      "Contact | Ma Su Team": "お問い合わせ | Ma Su Team",
      "Cross-border patent strategy": "クロスボーダー特許戦略",
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.": "馬粛は、中国企業と個人発明家の海外特許ポートフォリオ設計を支援し、海外のイノベーションチームが中国に入る際には、審査官視点の特許性スクリーニング、クレーム再構成、ポートフォリオ戦略を提供します。",
      "Examiner-style analysis for China entry and outbound patent decisions.": "中国進出と海外出願判断を、審査官の視点で分析します。",
      "A structured knowledge center for cross-border patent strategy.": "クロスボーダー特許戦略のための体系的な知識センターです。",
      "Turn real technical problems into portfolio options.": "実際の技術課題を、出願可能なポートフォリオ選択肢に変えます。",
      "China-to-overseas portfolios and overseas-to-China filings.": "中国から海外へのポートフォリオと、海外から中国への出願を扱います。",
      "New thinking for AI, Chinese innovation, China entry, and overseas patent strategy.": "AI、中国のイノベーション、中国進出、海外特許戦略に関する新しい視点です。",
      "Follow the knowledge by topic.": "テーマ別に知識を追跡できます。",
      "Examiner Insights": "審査官インサイト",
      "Former-examiner analysis for China filing, inventive-step responses, claim reconstruction, and office-action strategy.": "中国出願、進歩性応答、クレーム再構成、拒絶理由対応を、元審査官の視点で分析します。",
      "Innovation Map": "イノベーションマップ",
      "Patent information, technical-feature decomposition, and structured invention mining for companies and R&D teams.": "企業と研究開発チームのために、特許情報、技術特徴分解、構造化された発明発掘を提供します。",
      "Global IP": "グローバル知財",
      "Cross-border patent strategy for Chinese companies and individual inventors going overseas, and for overseas innovators entering China.": "海外展開する中国企業・個人発明家と、中国に入る海外イノベーターのためのクロスボーダー特許戦略です。",
      "Youth Innovation": "青少年イノベーション",
      "Project-based science innovation education, AI-era curriculum design, topic selection, prototype testing, and student IP awareness.": "プロジェクト型科学イノベーション教育、AI時代のカリキュラム設計、テーマ選定、プロトタイプ検証、学生の知財意識を扱います。",
      "Strategy services built around cross-border patent layout.": "クロスボーダー特許配置を中心にした戦略サービスです。",
      "Chinese Innovators Going Overseas": "海外展開する中国のイノベーター",
      "Overseas patent layout, prior-art landscape reading, PCT and national-phase planning, and portfolio sequencing for Chinese companies and individual inventors.": "中国企業と個人発明家向けに、海外特許配置、先行技術ランドスケープ、PCT・国内移行計画、ポートフォリオ順序設計を支援します。",
      "View services": "サービスを見る",
      "Overseas Innovators Entering China": "中国に入る海外イノベーター",
      "Pre-filing China review, claim reconstruction, examiner-style office-action reasoning, and China portfolio design.": "中国出願前レビュー、クレーム再構成、審査官視点の拒絶理由推演、中国ポートフォリオ設計を行います。",
      "View service": "サービスを見る",
      "Patent-Map Innovation": "特許マップ・イノベーション",
      "Use patent information to discover technical white space and guide invention mining before drafting begins.": "明細書作成の前に、特許情報で技術的空白を見つけ、発明発掘を導きます。",
      "View method": "方法を見る",
      "Patent Firm Cooperation": "特許事務所との協業",
      "Cross-border strategy memos, bilingual explanations, and technical analysis for Chinese and overseas patent counsel.": "中国と海外の特許実務家向けに、クロスボーダー戦略メモ、二言語説明、技術分析を提供します。",
      "Practical Science and Innovation in the AI Era.": "AI時代の科学イノベーション実践教材。",
      "AI-Era Youth Science Innovation Practical Textbook.": "AI時代の青少年科学イノベーション実践教材。",
      "AI-Era Youth Science Innovation Practical Textbook": "AI時代の青少年科学イノベーション実践教材",
      "A publication-ready youth innovation textbook by Ma Su, turning problem discovery, social survey, patent search, AI collaboration, prototyping, presentation, and IP protection into a complete practice route.": "馬粛による出版準備済みの青少年イノベーション教材。問題発見、社会調査、特許検索、AI協働、プロトタイプ制作、発表、知財保護を一つの実践ルートにします。",
      "Read the textbook introduction": "教材紹介を読む",
      "Work with Ma Su": "馬粛と協業する",
      "Turn technical problems into protectable inventions.": "技術課題を保護可能な発明に変えます。",
      "Knowledge Center": "記事センター",
      "Filter by series, sort by time, and follow the method from examiner insight to patent-map guided innovation.": "シリーズ別に絞り込み、時系列で並べ替え、審査官インサイトから特許マップ主導のイノベーションまで追えます。",
      "All": "すべて",
      "Next Step": "次のステップ",
      "Contact Ma Su": "馬粛に連絡する",
      "A person who understands invention, examination, and patent grant at the same time.": "発明、審査、特許付与を同時に理解する人物。",
      "Read the full personal story": "完整な個人ストーリーを読む",
      "Inventor + examiner + patent attorney + innovation methodology author.": "発明家 + 審査官 + 弁理士 + イノベーション方法論の著者。",
      "Book and Curriculum": "書籍とカリキュラム",
      "Youth Innovation Case": "青少年イノベーション事例",
      "Credentials and Proof": "資格と実績証明",
      "Hunan Science Writers Association": "湖南省サイエンスライター協会",
      "ICC National Finals Instructor Award": "Invention Convention China 全国決勝 指導教員賞",
      "Patent-Map Guided Innovation": "特許マップ主導のイノベーション",
      "Use patent information to create, not only to avoid infringement.": "侵害回避だけでなく、創造のために特許情報を使います。",
      "Common mistake": "よくある誤り",
      "Better use": "よりよい使い方",
      "Workflow": "ワークフロー",
      "Outputs": "成果物",
      "Apply the method": "方法論を適用する",
      "Start with the invention, case type, and China objective.": "発明、案件タイプ、中国での目的から始めてください。",
      "Direct contact": "直接連絡",
      "China patent prosecution strategy": "中国特許審査対応戦略",
      "AI-era science innovation education": "AI時代の科学イノベーション教育",
      "Contact Ma Su Team.": "Ma Su Team にお問い合わせください。"
    },
    tr: {
      "Ma Su | Cross-border Patent Strategy and Innovation": "Ma Su | Sınır Ötesi Patent Stratejisi ve İnovasyon",
      "Articles and Insights | Ma Su": "Makaleler ve İçgörüler | Ma Su",
      "About Ma Su | Ma Su Team": "Ma Su Hakkında | Ma Su Team",
      "Patent-Map Guided Innovation Methodology | Ma Su": "Patent Haritası Odaklı İnovasyon Metodolojisi | Ma Su",
      "Contact | Ma Su Team": "İletişim | Ma Su Team",
      "Cross-border patent strategy": "Sınır ötesi patent stratejisi",
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.": "Ma Su, Çinli şirketlerin ve bireysel mucitlerin yurt dışı patent portföylerini planlamasına; yabancı inovasyon ekiplerinin Çin'e girerken incelemeci bakışıyla patentlenebilirlik taraması, istem yeniden kurgusu ve portföy stratejisi oluşturmasına yardımcı olur.",
      "Examiner-style analysis for China entry and outbound patent decisions.": "Çin'e giriş ve yurt dışı patent kararları için incelemeci tarzı analiz.",
      "A structured knowledge center for cross-border patent strategy.": "Sınır ötesi patent stratejisi için yapılandırılmış bilgi merkezi.",
      "Turn real technical problems into portfolio options.": "Gerçek teknik problemleri patent portföyü seçeneklerine dönüştürür.",
      "China-to-overseas portfolios and overseas-to-China filings.": "Çin'den yurt dışına portföyler ve yurt dışından Çin'e başvurular.",
      "New thinking for AI, Chinese innovation, China entry, and overseas patent strategy.": "AI, Çin inovasyonu, Çin'e giriş ve yurt dışı patent stratejisi için yeni düşünceler.",
      "Follow the knowledge by topic.": "Bilgiyi konuya göre takip edin.",
      "Examiner Insights": "İncelemeci İçgörüleri",
      "Innovation Map": "İnovasyon Haritası",
      "Global IP": "Küresel Fikri Mülkiyet",
      "Youth Innovation": "Gençlik İnovasyonu",
      "Strategy services built around cross-border patent layout.": "Sınır ötesi patent yerleşimi etrafında kurulan strateji hizmetleri.",
      "Chinese Innovators Going Overseas": "Yurt dışına açılan Çinli inovasyon ekipleri",
      "View services": "Hizmetleri gör",
      "Overseas Innovators Entering China": "Çin'e giren yabancı inovasyon ekipleri",
      "View service": "Hizmeti gör",
      "Patent-Map Innovation": "Patent Haritası ile İnovasyon",
      "View method": "Yöntemi gör",
      "Patent Firm Cooperation": "Patent firmalarıyla iş birliği",
      "Practical Science and Innovation in the AI Era.": "AI çağında uygulamalı bilim ve inovasyon.",
      "AI-Era Youth Science Innovation Practical Textbook.": "AI Çağında Gençler İçin Uygulamalı Bilim ve İnovasyon Ders Kitabı.",
      "AI-Era Youth Science Innovation Practical Textbook": "AI Çağında Gençler İçin Uygulamalı Bilim ve İnovasyon Ders Kitabı",
      "A publication-ready youth innovation textbook by Ma Su, turning problem discovery, social survey, patent search, AI collaboration, prototyping, presentation, and IP protection into a complete practice route.": "Ma Su tarafından hazırlanmış, yayıma hazır gençlik inovasyonu ders kitabı; problem keşfi, sosyal araştırma, patent araması, AI iş birliği, prototip, sunum ve IP korumasını tam bir uygulama rotasına dönüştürür.",
      "Read the textbook introduction": "Ders kitabı tanıtımını oku",
      "Work with Ma Su": "Ma Su ile çalışın",
      "Turn technical problems into protectable inventions.": "Teknik problemleri korunabilir buluşlara dönüştürün.",
      "Knowledge Center": "Makale merkezi",
      "Filter by series, sort by time, and follow the method from examiner insight to patent-map guided innovation.": "Seriye göre filtreleyin, zamana göre sıralayın ve incelemeci içgörüsünden patent haritası odaklı inovasyona uzanan yöntemi takip edin.",
      "All": "Tümü",
      "Next Step": "Sonraki adım",
      "Contact Ma Su": "Ma Su ile iletişime geç",
      "A person who understands invention, examination, and patent grant at the same time.": "Buluşu, incelemeyi ve patent verilmesini aynı anda anlayan kişi.",
      "Read the full personal story": "Tam kişisel hikayeyi oku",
      "Inventor + examiner + patent attorney + innovation methodology author.": "Mucit + incelemeci + patent vekili + inovasyon metodolojisi yazarı.",
      "Book and Curriculum": "Kitap ve müfredat",
      "Youth Innovation Case": "Gençlik inovasyonu vakası",
      "Credentials and Proof": "Belgeler ve kanıtlar",
      "Hunan Science Writers Association": "Hunan Bilim Yazarları Derneği",
      "ICC National Finals Instructor Award": "ICC Ulusal Final Eğitmen Ödülü",
      "Patent-Map Guided Innovation": "Patent Haritası Odaklı İnovasyon",
      "Use patent information to create, not only to avoid infringement.": "Patent bilgisini yalnızca ihlalden kaçınmak için değil, yaratmak için kullanın.",
      "Common mistake": "Yaygın hata",
      "Better use": "Daha iyi kullanım",
      "Workflow": "İş akışı",
      "Outputs": "Çıktılar",
      "Apply the method": "Yöntemi uygula",
      "Start with the invention, case type, and China objective.": "Buluş, dosya türü ve Çin hedefiyle başlayın.",
      "Direct contact": "Doğrudan iletişim",
      "China patent prosecution strategy": "Çin patent inceleme stratejisi",
      "AI-era science innovation education": "AI çağında bilim inovasyonu eğitimi",
      "Contact Ma Su Team.": "Ma Su Team ile iletişime geçin."
    },
    vi: {
      "Ma Su | Cross-border Patent Strategy and Innovation": "Ma Su | Chiến lược sáng chế xuyên biên giới và đổi mới",
      "Articles and Insights | Ma Su": "Bài viết và góc nhìn | Ma Su",
      "About Ma Su | Ma Su Team": "Giới thiệu Ma Su | Ma Su Team",
      "Patent-Map Guided Innovation Methodology | Ma Su": "Phương pháp đổi mới theo bản đồ sáng chế | Ma Su",
      "Contact | Ma Su Team": "Liên hệ | Ma Su Team",
      "Cross-border patent strategy": "Chiến lược sáng chế xuyên biên giới",
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.": "Ma Su hỗ trợ doanh nghiệp Trung Quốc và nhà sáng chế cá nhân lập danh mục sáng chế ở nước ngoài; đồng thời hỗ trợ nhóm đổi mới nước ngoài vào Trung Quốc bằng sàng lọc khả năng cấp bằng theo góc nhìn thẩm định viên, tái cấu trúc yêu cầu bảo hộ và chiến lược danh mục.",
      "Examiner-style analysis for China entry and outbound patent decisions.": "Phân tích theo góc nhìn thẩm định viên cho quyết định vào Trung Quốc và ra nước ngoài.",
      "A structured knowledge center for cross-border patent strategy.": "Trung tâm tri thức có cấu trúc cho chiến lược sáng chế xuyên biên giới.",
      "Turn real technical problems into portfolio options.": "Chuyển vấn đề kỹ thuật thật thành lựa chọn danh mục sáng chế.",
      "China-to-overseas portfolios and overseas-to-China filings.": "Danh mục từ Trung Quốc ra nước ngoài và hồ sơ từ nước ngoài vào Trung Quốc.",
      "New thinking for AI, Chinese innovation, China entry, and overseas patent strategy.": "Góc nhìn mới về AI, đổi mới Trung Quốc, vào Trung Quốc và chiến lược sáng chế ở nước ngoài.",
      "Follow the knowledge by topic.": "Theo dõi tri thức theo chủ đề.",
      "Examiner Insights": "Góc nhìn thẩm định viên",
      "Innovation Map": "Bản đồ đổi mới",
      "Global IP": "Sở hữu trí tuệ toàn cầu",
      "Youth Innovation": "Đổi mới thanh thiếu niên",
      "Strategy services built around cross-border patent layout.": "Dịch vụ chiến lược xoay quanh bố trí sáng chế xuyên biên giới.",
      "Chinese Innovators Going Overseas": "Chủ thể đổi mới Trung Quốc ra nước ngoài",
      "View services": "Xem dịch vụ",
      "Overseas Innovators Entering China": "Chủ thể đổi mới nước ngoài vào Trung Quốc",
      "View service": "Xem dịch vụ",
      "Patent-Map Innovation": "Đổi mới bằng bản đồ sáng chế",
      "View method": "Xem phương pháp",
      "Patent Firm Cooperation": "Hợp tác với hãng sáng chế",
      "Practical Science and Innovation in the AI Era.": "Khoa học và đổi mới thực hành trong thời đại AI.",
      "AI-Era Youth Science Innovation Practical Textbook.": "Giáo trình thực hành khoa học đổi mới cho thanh thiếu niên thời đại AI.",
      "AI-Era Youth Science Innovation Practical Textbook": "Giáo trình thực hành khoa học đổi mới cho thanh thiếu niên thời đại AI",
      "A publication-ready youth innovation textbook by Ma Su, turning problem discovery, social survey, patent search, AI collaboration, prototyping, presentation, and IP protection into a complete practice route.": "Giáo trình đổi mới thanh thiếu niên đã sẵn sàng xuất bản của Ma Su, biến phát hiện vấn đề, khảo sát xã hội, tra cứu sáng chế, cộng tác AI, tạo mẫu, trình bày và bảo hộ IP thành một lộ trình thực hành hoàn chỉnh.",
      "Read the textbook introduction": "Đọc giới thiệu giáo trình",
      "Work with Ma Su": "Làm việc với Ma Su",
      "Turn technical problems into protectable inventions.": "Chuyển vấn đề kỹ thuật thành phát minh có thể bảo hộ.",
      "Knowledge Center": "Trung tâm bài viết",
      "Filter by series, sort by time, and follow the method from examiner insight to patent-map guided innovation.": "Lọc theo chuỗi bài, sắp xếp theo thời gian và theo dõi phương pháp từ góc nhìn thẩm định viên đến đổi mới theo bản đồ sáng chế.",
      "All": "Tất cả",
      "Next Step": "Bước tiếp theo",
      "Contact Ma Su": "Liên hệ Ma Su",
      "A person who understands invention, examination, and patent grant at the same time.": "Một người đồng thời hiểu phát minh, thẩm định và cấp bằng sáng chế.",
      "Read the full personal story": "Đọc toàn bộ câu chuyện cá nhân",
      "Inventor + examiner + patent attorney + innovation methodology author.": "Nhà sáng chế + thẩm định viên + đại diện sáng chế + tác giả phương pháp đổi mới.",
      "Book and Curriculum": "Sách và chương trình",
      "Youth Innovation Case": "Trường hợp đổi mới thanh thiếu niên",
      "Credentials and Proof": "Chứng chỉ và bằng chứng",
      "Hunan Science Writers Association": "Hiệp hội Nhà văn Khoa học tỉnh Hồ Nam",
      "ICC National Finals Instructor Award": "Giải giáo viên hướng dẫn Vòng chung kết quốc gia ICC",
      "Patent-Map Guided Innovation": "Đổi mới theo bản đồ sáng chế",
      "Use patent information to create, not only to avoid infringement.": "Dùng thông tin sáng chế để sáng tạo, không chỉ để tránh xâm phạm.",
      "Common mistake": "Sai lầm phổ biến",
      "Better use": "Cách dùng tốt hơn",
      "Workflow": "Quy trình",
      "Outputs": "Kết quả",
      "Apply the method": "Áp dụng phương pháp",
      "Start with the invention, case type, and China objective.": "Hãy bắt đầu bằng phát minh, loại hồ sơ và mục tiêu tại Trung Quốc.",
      "Direct contact": "Liên hệ trực tiếp",
      "China patent prosecution strategy": "Chiến lược xử lý thẩm định sáng chế Trung Quốc",
      "AI-era science innovation education": "Giáo dục khoa học đổi mới thời đại AI",
      "Contact Ma Su Team.": "Liên hệ Ma Su Team."
    }
  };

  Object.entries(supplementalTextMap).forEach(([lang, entries]) => {
    textMap[lang] = { ...(textMap[lang] || {}), ...entries };
  });

  const articlePageTranslations = {
    "ai-era-youth-science-innovation-practical-textbook": {
      "zh-hk": {
        docTitle: "AI 時代青少年科創實戰教程 | Ma Su",
        eyebrow: "教材與課程 / 青少年科創",
        title: "《AI 時代青少年科創實戰教程》：從發現問題到保護成果的一條完整創新路線",
        deck: "這本教材把青少年科創從「想一個點子」重新組織為一套可訓練、可執行、可復盤的實踐路線。它不是讓學生背概念，而是帶學生完整走過一次真實創新閉環。",
        meta: ["作者：馬肅", "教材與課程", "馬肅團隊知識中心"],
        caption: "教材封面：面向青少年的實操型科創教材。",
        sections: [
          ["為什麼這本教材重要", [
            "很多學生第一次做科創項目時，會被要求「想一個創新作品」。但真正困難的不是把作品做得很炫，而是發現一個真實問題，判斷它是否值得解決，再把模糊想法變成可以調查、可以檢索、可以製作、可以測試、可以表達和可以保護的成果。",
            "《AI 時代青少年科創實戰教程》正是圍繞這件事展開。它把我的專利審查經驗、發明創造經驗、專利代理經驗和青少年科創輔導經驗融合在一起，形成一條完整路線：發現問題、分析問題、尋找資源、提出方案、製作原型、測試迭代、展示價值、保護成果。",
            "對網站而言，這本教材是馬肅個人 IP 的核心證明之一：我的方法論不只停留在文章觀點或諮詢經驗中，而是已經轉化為學生、老師、學校和賽事組織者真正可以使用的教學系統。"
          ]],
          ["教材的完整路線", [
            "教材從「未來需要會創造的人」開始，引導學生理解 AI 時代真正稀缺的能力不是等待標準答案，而是發現尚未被清楚定義的問題，並把問題推進成可驗證的解決方案。",
            "全書主體包括 14 章：從興趣和生活中發現問題，用社會調查找到真問題，用數據把方向變成具體問題；進入專利庫、論文和科技新聞，學習已有技術；再通過組合法、逆向法、表格創意拼盤法生成方案；隨後進入 AI 協同創新、原型製作、實驗驗證、成果展示、知識產權保護和真實價值轉化。",
            "這條路線特別強調「做出來」和「說清楚」。學生不只要有想法，還要保留調查記錄、專利檢索記錄、發明日誌、草圖、模型照片、測試數據和答辯材料。這樣，創新才不是一次臨時比賽，而是一種能夠被訓練和遷移的能力。"
          ]],
          ["AI 在教材中的位置", [
            "教材沒有把 AI 當作替學生完成作品的工具，而是把 AI 設定為「科創隊友」。AI 可以幫助學生分類興趣、優化問卷、擴展關鍵詞、檢查方案風險、整理報告結構、輔助 3D 表達，但不能替代學生的觀察、判斷、測試和改進。",
            "這也是我對 AI 時代科創教育的基本判斷：AI 會讓答案變得更容易獲得，但會讓「提出好問題」的能力更加珍貴。會使用 AI 的學生，不應只是更快完成作業，而應更善於追問真實場景、發現真實需求、形成真實證據鏈。"
          ]],
          ["附錄讓教材變成工具箱", [
            "除了正文，教材還設計了多個實操附錄，包括 12 課時科創實戰課程設計、AI 提示詞庫、100 個青少年科創選題種子、完整項目檔案示範、問卷題庫、給青少年的知識產權六課簡版、學生自評與成長檔案、給學生看的十封信，以及導師批注中常見的十個坑。",
            "這些附錄的作用，是讓老師、家長和賽事組織者可以真正把課程落地。學生可以從選題種子開始，老師可以按課時組織訓練，導師可以用檢查清單追蹤項目進展，賽事可以用項目檔案判斷學生是否真實參與了創新過程。"
          ]],
          ["和專利方法論的連接", [
            "這本教材的底層邏輯，仍然來自專利和發明。專利不是課程末尾才出現的「申請動作」，而是貫穿整個創新過程的知識系統。學生在專利庫裡看到人類已經如何解決問題，也會理解自己的方案必須在已有技術基礎上找到新的技術特徵、新的應用場景或新的組合方式。",
            "因此，青少年科創訓練並不是把孩子包裝成「小發明家」，而是讓他們學會一種嚴肅的創造方式：觀察真實世界，尊重已有技術，提出新的解決方案，用實驗驗證價值，並用知識產權意識保護自己的創造。"
          ]],
          ["適合怎樣使用", [
            "這套教材可以服務三類場景：學校和科創社團的系統課程，地方青少年科創賽事的賽前訓練，以及企業、園區或教育機構發起的創新實踐營。它既可以作為學生讀本，也可以拆解為導師手冊、課程講義、比賽工作簿和項目評審標準。",
            "後續，我會把教材中的部分內容繼續整理成文章，例如如何設計科創問卷、如何帶青少年做專利檢索、如何用 AI 生成候選方向但不替代學生思考、如何把比賽作品推進到真實產品和知識產權成果。"
          ]]
        ]
      },
      ja: {
        docTitle: "AI時代の青少年科学イノベーション実践教材 | Ma Su",
        eyebrow: "書籍とカリキュラム / 青少年イノベーション",
        title: "AI時代の青少年科学イノベーション実践教材：問題発見から知財保護までの完全なルート",
        deck: "この教材は、青少年の科学イノベーションを「アイデアを考える」ことから、訓練でき、実行でき、振り返れる実践ルートへ再構成します。概念を暗記させるのではなく、実際のイノベーションの循環を一通り歩かせます。",
        meta: ["馬粛 著", "書籍とカリキュラム", "Ma Su Team ナレッジセンター"],
        caption: "教材表紙：青少年向けの実践型科学イノベーション教材。",
        sections: [
          ["なぜこの教材が重要か", [
            "多くの学生は科学イノベーションを始めるとき、「革新的な作品を考えて」と求められます。しかし本当に難しいのは、見栄えのよいものを作ることではありません。現実の問題を見つけ、それが解く価値のある問題かを判断し、あいまいな発想を調査、検索、制作、検証、説明、保護できる成果に変えることです。",
            "この教材はその課題を中心に構成されています。特許審査、発明、特許代理、青少年イノベーション指導の経験を一つにまとめ、問題発見、分析、資源探索、解決案、プロトタイプ、検証と反復、価値提示、成果保護というルートを作ります。",
            "このウェブサイトにとって、この教材は馬粛の個人ブランドを支える重要な証拠です。方法論は記事やコンサルティング経験だけでなく、学生、教師、学校、競技運営者が使える教育システムへ変換されています。"
          ]],
          ["完全な学習ルート", [
            "教材は、未来には創造できる人が必要だという考えから始まります。AI時代に希少なのは標準回答を待つ力ではなく、まだ定義されていない問題を発見し、検証可能な解決策へ進める力です。",
            "全体は14章で、興味と生活からの問題発見、社会調査、データ分析、特許データベース、論文と技術ニュース、組合法、逆向き思考、表による再構成、AI協働、プロトタイプ、実験検証、発表、知財保護、実社会での価値創出を扱います。",
            "このルートは「作ること」と「明確に説明すること」を重視します。学生は調査記録、特許検索ノート、発明日誌、スケッチ、模型写真、テストデータ、発表資料を残します。イノベーションは一回限りの競技ではなく、訓練し移転できる能力になります。"
          ]],
          ["教材におけるAIの役割", [
            "この教材では、AIは学生の代わりに作品を完成させる道具ではありません。AIは科学イノベーションのチームメイトです。興味分類、質問票改善、キーワード拡張、リスク確認、レポート構成、3D表現を支援できますが、観察、判断、検証、改善を代替することはできません。",
            "AI時代の科学イノベーション教育では、答えは得やすくなりますが、よい問いを立てる力はさらに価値を持ちます。AIを使える学生は、課題を速く終わらせるだけでなく、現実の場面を問い、実際のニーズを発見し、証拠の連鎖を作れるようになるべきです。"
          ]],
          ["付録が教材をツールキットにする", [
            "本文に加えて、12回の授業計画、AIプロンプト集、100のテーマ種、プロジェクト記録例、質問票バンク、青少年向け知財6講、自己評価と成長記録、学生への10通の手紙、指導者向けの落とし穴メモを含みます。",
            "これらの付録は、教師、保護者、競技運営者が教材を実際に運用するためのものです。学生はテーマ種から始め、教師は授業単位で訓練し、メンターはチェックリストで進捗を追い、競技ではプロジェクト記録を使って学生の実参加を判断できます。"
          ]],
          ["特許方法論との接続", [
            "教材の底層には特許と発明の論理があります。特許は最後に出てくる申請手続ではなく、イノベーション全体を貫く知識システムです。学生は特許データベースを通じて先人の解決策を知り、自分の案が既存技術の上に新しい技術特徴、応用場面、組み合わせを見つける必要があると理解します。",
            "したがって青少年科学イノベーション教育は、子どもを「小さな発明家」として包装することではありません。現実を観察し、既存技術を尊重し、新しい解決策を提案し、実験で価値を検証し、知財意識で創造を守る、厳密な創造方法を学ばせることです。"
          ]],
          ["利用シーン", [
            "この教材は、学校や科学イノベーションクラブの体系的授業、地域の青少年イノベーション大会の事前訓練、企業や産業園区、教育機関が行う実践キャンプに使えます。学生用読本としても、指導者マニュアル、授業資料、競技ワークブック、評価基準としても展開できます。",
            "今後は、科学イノベーション質問票の設計、青少年向け特許検索、AIで候補方向を広げながら学生の思考を代替しない方法、競技作品を実製品と知財成果へ進める方法などを記事化していきます。"
          ]]
        ]
      },
      tr: {
        docTitle: "AI Çağında Gençler İçin Uygulamalı Bilim ve İnovasyon Ders Kitabı | Ma Su",
        eyebrow: "Kitap ve müfredat / Gençlik inovasyonu",
        title: "AI Çağında Gençler İçin Uygulamalı Bilim ve İnovasyon Ders Kitabı: Problem Keşfinden IP Korumasına Tam Rota",
        deck: "Bu ders kitabı, gençlik bilim inovasyonunu sadece fikir bulmaktan çıkarıp eğitilebilir, uygulanabilir ve gözden geçirilebilir bir pratik rotaya dönüştürür. Öğrencilere kavram ezberletmez; onları gerçek bir inovasyon döngüsünden geçirir.",
        meta: ["Ma Su tarafından", "Kitap ve müfredat", "Ma Su Team Bilgi Merkezi"],
        caption: "Ders kitabı kapağı: genç öğrenciler için uygulamalı bilim inovasyonu教材.",
        sections: [
          ["Bu ders kitabı neden önemli", [
            "Birçok öğrenci bilim inovasyonu projesine başladığında ondan yenilikçi bir çalışma düşünmesi istenir. Asıl zorluk etkileyici görünen bir şey yapmak değildir; gerçek bir problem bulmak, çözmeye değer olup olmadığını değerlendirmek ve belirsiz bir fikri araştırılabilir, aranabilir, üretilebilir, test edilebilir, açıklanabilir ve korunabilir bir sonuca dönüştürmektir.",
            "Bu ders kitabı tam olarak bu görev etrafında kuruludur. Patent incelemesi, buluş, patent vekilliği ve gençlik inovasyonu koçluğu deneyimimi tek rotada birleştirir: problemi keşfet, analiz et, kaynak ara, çözüm öner, prototip yap, test edip yinele, değeri sun ve sonucu koru.",
            "Bu site için kitap, Ma Su kişisel markasının temel kanıtlarından biridir. Metodoloji yalnızca makale veya danışmanlık deneyimi değildir; öğrencilerin, öğretmenlerin, okulların ve yarışma düzenleyicilerinin kullanabileceği bir öğretim sistemine dönüşmüştür."
          ]],
          ["Tam öğrenme rotası", [
            "Kitap, geleceğin yaratabilen insanlara ihtiyaç duyduğu fikriyle başlar. AI çağında nadir olan yetenek standart cevap beklemek değil, henüz tanımlanmamış problemleri keşfedip onları doğrulanabilir çözümlere taşımaktır.",
            "Ana bölüm 14 bölümden oluşur: ilgi ve günlük yaşamdan problem keşfi, sosyal araştırma, veriyle somut problem kurma, patent veri tabanları, makaleler ve teknoloji haberleri, kombinasyon, ters düşünme, tablo temelli yeniden birleştirme, AI iş birliği, prototip, deneysel doğrulama, sunum, IP koruması ve gerçek değer üretimi.",
            "Rota özellikle yapmayı ve açık anlatmayı vurgular. Öğrenciler anket kayıtları, patent arama notları, buluş günlükleri, eskizler, model fotoğrafları, test verileri ve sunum malzemeleri tutar. Böylece inovasyon tek seferlik bir yarışma değil, eğitilebilen ve aktarılabilen bir yeteneğe dönüşür."
          ]],
          ["Kitapta AI'nin rolü", [
            "Kitap AI'yi öğrencinin yerine projeyi tamamlayan bir araç olarak görmez. AI bir bilim inovasyonu takım arkadaşıdır. İlgi sınıflandırma, anket iyileştirme, anahtar kelime genişletme, risk kontrolü, rapor yapısı ve 3D ifade konusunda yardımcı olabilir; fakat gözlem, yargı, test ve yinelemenin yerini alamaz.",
            "AI çağında bilim inovasyonu eğitimine bakışım budur: AI cevaplara erişimi kolaylaştırır, fakat iyi soru sorma yeteneğini daha değerli hale getirir. AI kullanabilen öğrenci yalnızca ödevleri daha hızlı bitirmemeli; gerçek sahneleri sorgulamalı, gerçek ihtiyaçları bulmalı ve gerçek kanıt zinciri kurmalıdır."
          ]],
          ["Ekler kitabı araç kutusuna dönüştürür", [
            "Ana bölümlere ek olarak kitapta 12 derslik kurs planı, AI prompt kütüphanesi, 100 gençlik inovasyonu konu tohumu, tam proje arşivi örneği, anket soru bankası, genç öğrenciler için altı derslik IP özeti, öğrenci öz değerlendirme ve gelişim kayıtları, öğrencilere on mektup ve mentor notları bulunur.",
            "Bu ekler öğretmenlerin, ebeveynlerin ve yarışma düzenleyicilerinin kursu sahada uygulaması için tasarlanmıştır. Öğrenciler konu tohumlarından başlayabilir, öğretmenler derslere göre eğitim düzenleyebilir, mentorlar kontrol listeleriyle ilerlemeyi izleyebilir ve yarışmalar proje arşivleriyle öğrencilerin gerçek katılımını değerlendirebilir."
          ]],
          ["Patent metodolojisiyle bağlantı", [
            "Kitabın temel mantığı patentlerden ve buluştan gelir. Patentler kursun sonunda görünen bir başvuru adımı değildir; tüm inovasyon sürecinden geçen bir bilgi sistemidir. Öğrenciler patent veri tabanlarında insanların sorunları nasıl çözdüğünü görür ve kendi çözümlerinin mevcut teknoloji üzerinde yeni teknik özellikler, yeni uygulama sahneleri veya yeni kombinasyonlar bulması gerektiğini öğrenir.",
            "Bu nedenle gençlik bilim inovasyonu eğitimi çocukları küçük mucitler olarak paketlemek değildir. Onlara gerçek dünyayı gözlemleme, mevcut teknolojiye saygı duyma, yeni çözüm önerme, deneyle değeri doğrulama ve IP bilinciyle yaratımlarını koruma gibi ciddi bir yaratma yöntemi öğretmektir."
          ]],
          ["Nasıl kullanılabilir", [
            "Kitap üç senaryoya hizmet edebilir: okullar ve bilim inovasyonu kulüpleri için sistematik dersler, yerel gençlik inovasyonu etkinlikleri için yarışma öncesi eğitim ve şirketler, sanayi parkları veya eğitim kurumları tarafından başlatılan inovasyon kampları. Öğrenci kitabı olarak kullanılabilir; mentor kılavuzlarına, ders notlarına, yarışma çalışma kitaplarına ve proje değerlendirme standartlarına ayrılabilir.",
            "Kitabın bazı bölümlerini makalelere dönüştürmeye devam edeceğim: bilim inovasyonu anketi tasarlama, gençlere patent aramayı öğretme, AI ile aday yönler üretirken öğrencinin düşüncesini değiştirmeme ve yarışma projesini gerçek ürünlere ve IP sonuçlarına taşıma gibi."
          ]]
        ]
      },
      vi: {
        docTitle: "Giáo trình thực hành khoa học đổi mới cho thanh thiếu niên thời đại AI | Ma Su",
        eyebrow: "Sách và chương trình / Đổi mới thanh thiếu niên",
        title: "Giáo trình thực hành khoa học đổi mới cho thanh thiếu niên thời đại AI: lộ trình đầy đủ từ phát hiện vấn đề đến bảo hộ IP",
        deck: "Giáo trình này chuyển đổi khoa học đổi mới của thanh thiếu niên từ việc nghĩ ra một ý tưởng thành một lộ trình thực hành có thể rèn luyện, thực hiện và đánh giá lại. Nó không yêu cầu học sinh học thuộc khái niệm, mà dẫn các em đi qua một vòng đổi mới thực tế.",
        meta: ["Tác giả Ma Su", "Sách và chương trình", "Trung tâm tri thức Ma Su Team"],
        caption: "Bìa giáo trình: giáo trình khoa học đổi mới thực hành cho học sinh.",
        sections: [
          ["Vì sao giáo trình này quan trọng", [
            "Khi nhiều học sinh bắt đầu dự án khoa học đổi mới, các em thường được yêu cầu nghĩ ra một sản phẩm sáng tạo. Nhưng điều khó thật sự không phải là làm một thứ trông ấn tượng, mà là tìm ra một vấn đề thật, đánh giá nó có đáng giải quyết hay không, rồi biến ý tưởng mơ hồ thành kết quả có thể khảo sát, tra cứu, chế tạo, kiểm nghiệm, trình bày và bảo hộ.",
            "Giáo trình này được xây dựng quanh nhiệm vụ đó. Nó kết hợp kinh nghiệm thẩm định sáng chế, phát minh, đại diện sáng chế và hướng dẫn đổi mới thanh thiếu niên của tôi thành một lộ trình: phát hiện vấn đề, phân tích, tìm nguồn, đề xuất giải pháp, làm nguyên mẫu, kiểm thử và lặp lại, trình bày giá trị và bảo hộ kết quả.",
            "Đối với website này, giáo trình là một bằng chứng cốt lõi cho thương hiệu cá nhân của Ma Su. Phương pháp luận không chỉ nằm trong bài viết hay kinh nghiệm tư vấn; nó đã được chuyển thành một hệ thống dạy học mà học sinh, giáo viên, nhà trường và đơn vị tổ chức cuộc thi có thể sử dụng."
          ]],
          ["Lộ trình học tập hoàn chỉnh", [
            "Giáo trình bắt đầu từ ý tưởng rằng tương lai cần những người biết sáng tạo. Trong thời đại AI, năng lực hiếm không phải là chờ câu trả lời chuẩn, mà là phát hiện các vấn đề chưa được định nghĩa rõ và đẩy chúng thành giải pháp có thể kiểm chứng.",
            "Phần chính gồm 14 chương: phát hiện vấn đề từ sở thích và đời sống, dùng khảo sát xã hội để tìm vấn đề thật, dùng dữ liệu để biến hướng đi thành vấn đề cụ thể, đi vào cơ sở dữ liệu sáng chế, đọc bài báo và tin công nghệ, tạo giải pháp bằng kết hợp, tư duy ngược và tái tổ hợp bằng bảng, rồi đến cộng tác AI, tạo nguyên mẫu, kiểm nghiệm, trình bày, bảo hộ IP và tạo giá trị thực tế.",
            "Lộ trình này đặc biệt nhấn mạnh làm ra và nói rõ. Học sinh được khuyến khích lưu hồ sơ khảo sát, ghi chú tra cứu sáng chế, nhật ký phát minh, phác thảo, ảnh mô hình, dữ liệu thử nghiệm và tài liệu thuyết trình. Khi đó đổi mới không còn là một cuộc thi nhất thời, mà là năng lực có thể rèn luyện và chuyển giao."
          ]],
          ["Vai trò của AI trong giáo trình", [
            "Giáo trình không xem AI là công cụ làm thay dự án cho học sinh. AI được đặt ở vị trí đồng đội khoa học đổi mới. Nó có thể hỗ trợ phân loại sở thích, cải thiện bảng hỏi, mở rộng từ khóa, kiểm tra rủi ro, tổ chức cấu trúc báo cáo và hỗ trợ biểu đạt 3D, nhưng không thể thay thế quan sát, phán đoán, thử nghiệm và lặp lại.",
            "Đây cũng là quan điểm cơ bản của tôi về giáo dục khoa học đổi mới trong thời đại AI: AI sẽ làm câu trả lời dễ có hơn, nhưng làm năng lực đặt câu hỏi hay trở nên quý hơn. Một học sinh biết dùng AI không chỉ nên hoàn thành bài nhanh hơn, mà cần giỏi hơn trong việc chất vấn bối cảnh thật, phát hiện nhu cầu thật và xây dựng chuỗi bằng chứng thật."
          ]],
          ["Phụ lục biến giáo trình thành hộp công cụ", [
            "Ngoài các chương chính, giáo trình có các phụ lục thực hành: kế hoạch khóa học 12 buổi, thư viện prompt AI, 100 hạt giống đề tài đổi mới thanh thiếu niên, mẫu hồ sơ dự án hoàn chỉnh, ngân hàng câu hỏi khảo sát, sáu bài học IP cho học sinh, hồ sơ tự đánh giá và trưởng thành, mười lá thư cho học sinh và ghi chú của mentor về các lỗi thường gặp.",
            "Những phụ lục này giúp giáo viên, phụ huynh và đơn vị tổ chức cuộc thi triển khai khóa học thật sự. Học sinh có thể bắt đầu từ hạt giống đề tài, giáo viên tổ chức theo từng buổi, mentor theo dõi tiến độ bằng checklist, và cuộc thi có thể dùng hồ sơ dự án để đánh giá mức độ tham gia thật của học sinh."
          ]],
          ["Kết nối với phương pháp sáng chế", [
            "Logic nền tảng của giáo trình vẫn đến từ sáng chế và phát minh. Sáng chế không phải là bước nộp đơn chỉ xuất hiện cuối khóa, mà là một hệ thống tri thức xuyên suốt quá trình đổi mới. Khi đọc cơ sở dữ liệu sáng chế, học sinh thấy con người đã giải quyết vấn đề như thế nào và hiểu rằng giải pháp của mình cần tìm ra đặc điểm kỹ thuật mới, bối cảnh ứng dụng mới hoặc tổ hợp mới trên nền công nghệ hiện có.",
            "Vì vậy, đào tạo khoa học đổi mới cho thanh thiếu niên không phải là đóng gói trẻ em thành nhà phát minh nhí. Đó là dạy các em một cách sáng tạo nghiêm túc: quan sát thế giới thật, tôn trọng công nghệ hiện có, đề xuất giải pháp mới, kiểm chứng giá trị bằng thực nghiệm và bảo vệ sáng tạo bằng ý thức IP."
          ]],
          ["Cách sử dụng giáo trình", [
            "Giáo trình có thể phục vụ ba bối cảnh: khóa học hệ thống cho trường học và câu lạc bộ khoa học đổi mới, đào tạo trước cuộc thi cho sự kiện đổi mới thanh thiếu niên địa phương, và trại thực hành đổi mới do doanh nghiệp, khu công nghiệp hoặc tổ chức giáo dục khởi xướng. Nó có thể là sách học sinh, cũng có thể tách thành sổ tay mentor, tài liệu lớp học, workbook cuộc thi và tiêu chuẩn đánh giá dự án.",
            "Tôi sẽ tiếp tục chuyển một phần giáo trình thành bài viết, gồm cách thiết kế bảng hỏi khoa học đổi mới, cách hướng dẫn học sinh tra cứu sáng chế, cách dùng AI tạo hướng đề tài mà không thay thế tư duy học sinh, và cách đưa tác phẩm dự thi tiến tới sản phẩm thật và kết quả IP."
          ]]
        ]
      }
    }
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

  function translateLongArticle(lang) {
    const slug = location.pathname.split("/").pop().replace(".html", "");
    const translated = articlePageTranslations[slug] && articlePageTranslations[slug][lang];
    if (!translated) return;
    document.title = translated.docTitle;
    const shell = document.querySelector(".article-shell");
    if (!shell) return;
    const eyebrow = shell.querySelector(":scope > .eyebrow");
    const title = shell.querySelector(":scope > h1");
    const deck = shell.querySelector(":scope > .article-deck");
    const meta = shell.querySelectorAll(":scope > .article-meta span");
    const caption = shell.querySelector(".article-hero-image figcaption");
    if (eyebrow) eyebrow.textContent = translated.eyebrow;
    if (title) title.textContent = translated.title;
    if (deck) deck.textContent = translated.deck;
    translated.meta.forEach((text, index) => {
      if (meta[index]) meta[index].textContent = text;
    });
    if (caption) caption.textContent = translated.caption;
    shell.querySelectorAll(":scope > .article-section").forEach((section, index) => {
      const data = translated.sections[index];
      if (!data) return;
      const h2 = section.querySelector("h2");
      const paragraphs = section.querySelectorAll("p");
      if (h2) h2.textContent = data[0];
      data[1].forEach((text, pIndex) => {
        if (paragraphs[pIndex]) paragraphs[pIndex].textContent = text;
      });
    });
  }

  function translate(lang) {
    document.documentElement.lang = lang === "zh-hk" ? "zh-Hant-HK" : lang;
    translateNav(lang);
    addSwitcher(lang);
    if (lang !== "en") {
      const titleMap = textMap[lang] || {};
      if (titleMap[document.title]) document.title = titleMap[document.title];
      replaceExactText(lang);
      translateCommonUi(lang);
      translateLongArticle(lang);
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
