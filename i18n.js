(() => {
  const languages = [
    ["en", "English"],
    ["zh-hk", "中文"],
    ["ja", "日本語"],
    ["tr", "Türkçe"],
    ["vi", "Tiếng Việt"],
  ];

  const navLabels = {
    en: ["Home", "Knowledge", "Articles", "Methodology", "About", "Contact"],
    "zh-hk": ["首頁", "知識庫", "文章中心", "方法論", "關於我", "聯絡"],
    ja: ["ホーム", "ナレッジ", "記事", "方法論", "プロフィール", "お問い合わせ"],
    tr: ["Ana sayfa", "Bilgi bankası", "Makaleler", "Metodoloji", "Hakkımda", "İletişim"],
    vi: ["Trang chủ", "Kho tri thức", "Bài viết", "Phương pháp", "Giới thiệu", "Liên hệ"],
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
    "zh-hk": {
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy. The team also turns FTO analysis into design-around options, invention mining opportunities, and patent portfolio layout.": "馬肅協助中國企業及個人發明人規劃海外專利組合，同時也協助境外創新團隊進入中國，完成審查員視角的可授權性篩選、權利要求重構與專利組合策略。團隊也特別擅長把 FTO 分析轉化為規避設計方案、專利挖掘機會和專利組合佈局。",
      "FTO-driven layout": "FTO 驅動佈局",
      "Turn freedom-to-operate findings into design-around routes, invention mining, and patent portfolio decisions.": "把自由實施分析結果轉化為規避設計路線、發明挖掘和專利組合決策。",
      "FTO, Patent Mining & Portfolio Layout": "FTO、專利挖掘與專利佈局",
      "Freedom-to-operate analysis, risk mapping, design-around suggestions, invention mining, and patent portfolio planning based on real product and competitor landscapes.": "基於真實產品與競爭對手格局，提供自由實施分析、風險地圖、規避設計建議、發明挖掘與專利組合規劃。",
      "Friendly link:": "友好連結：",
      "SilkStudy · Study in China": "SilkStudy · 留學中國",
      "Global University Youth Program": "全球高校青年計劃",
      "China patent support for overseas university innovators.": "面向境外高校創新者的中國專利支持。",
      "To promote international university exchange and youth innovation, Ma Su Team offers a China patent support program for applicants from overseas universities, including Hong Kong, Macao, and Taiwan universities.": "為促進中外高校交流合作與青少年創新，馬肅團隊面向境外高校申請人推出中國專利支持計劃，包括港澳台高校。",
      "USD 199 per case includes all patent service fees charged by Ma Su Team. Official CNIPA fees are not included and shall be borne separately by the applicant. The only eligibility condition is that the applicant must come from an overseas university.": "每件 USD 199 包含馬肅團隊收取的全部專利服務費。中國國家知識產權局官方費用不包含在內，由申請人另行承擔。唯一申請條件是申請人必須來自境外高校。",
      "Apply: maximasure@hotmail.com": "申請：maximasure@hotmail.com",
    },
    ja: {
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy. The team also turns FTO analysis into design-around options, invention mining opportunities, and patent portfolio layout.": "Ma Su は、中国企業と個人発明家の海外特許ポートフォリオ設計を支援し、海外のイノベーションチームが中国に入る際には、審査官視点の特許性スクリーニング、クレーム再構成、ポートフォリオ戦略を提供します。さらに FTO 分析を、設計回避案、発明発掘の機会、特許ポートフォリオ設計へとつなげます。",
      "FTO-driven layout": "FTO起点の特許レイアウト",
      "Turn freedom-to-operate findings into design-around routes, invention mining, and patent portfolio decisions.": "FTO の結果を、設計回避ルート、発明発掘、特許ポートフォリオ判断へ変換します。",
      "FTO, Patent Mining & Portfolio Layout": "FTO・発明発掘・特許ポートフォリオ設計",
      "Freedom-to-operate analysis, risk mapping, design-around suggestions, invention mining, and patent portfolio planning based on real product and competitor landscapes.": "実際の製品と競合状況を踏まえ、FTO 分析、リスクマッピング、設計回避提案、発明発掘、特許ポートフォリオ計画を提供します。",
      "Friendly link:": "関連リンク：",
      "SilkStudy · Study in China": "SilkStudy · 中国留学",
      "Global University Youth Program": "グローバル大学ユースプログラム",
      "China patent support for overseas university innovators.": "海外大学のイノベーター向け中国特許支援。",
      "To promote international university exchange and youth innovation, Ma Su Team offers a China patent support program for applicants from overseas universities, including Hong Kong, Macao, and Taiwan universities.": "国際的な大学交流と青少年イノベーションを促進するため、Ma Su Team は香港、マカオ、台湾の大学を含む海外大学の申請者向けに中国特許支援プログラムを提供します。",
      "USD 199 per case includes all patent service fees charged by Ma Su Team. Official CNIPA fees are not included and shall be borne separately by the applicant. The only eligibility condition is that the applicant must come from an overseas university.": "1件あたり USD 199 には Ma Su Team が請求するすべての特許サービス費用が含まれます。CNIPA の公式費用は含まれず、申請者が別途負担します。唯一の条件は、申請者が海外大学に所属していることです。",
      "Apply: maximasure@hotmail.com": "申請：maximasure@hotmail.com",
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
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy. The team also turns FTO analysis into design-around options, invention mining opportunities, and patent portfolio layout.": "Ma Su, Çinli şirketlerin ve bireysel mucitlerin yurt dışı patent portföylerini planlamasına; yabancı inovasyon ekiplerinin Çin'e girerken incelemeci bakışıyla patentlenebilirlik taraması, istem yeniden kurgusu ve portföy stratejisi oluşturmasına yardımcı olur. Ekip ayrıca FTO analizini tasarım etrafından dolaşma seçeneklerine, buluş madenciliği fırsatlarına ve patent portföyü yerleşimine dönüştürür.",
      "FTO-driven layout": "FTO odaklı portföy yerleşimi",
      "Turn freedom-to-operate findings into design-around routes, invention mining, and patent portfolio decisions.": "FTO bulgularını tasarım etrafından dolaşma rotalarına, buluş madenciliğine ve patent portföyü kararlarına dönüştürür.",
      "FTO, Patent Mining & Portfolio Layout": "FTO, Patent Madenciliği ve Portföy Yerleşimi",
      "Freedom-to-operate analysis, risk mapping, design-around suggestions, invention mining, and patent portfolio planning based on real product and competitor landscapes.": "Gerçek ürün ve rakip ortamlarına dayalı FTO analizi, risk haritalama, tasarım etrafından dolaşma önerileri, buluş madenciliği ve patent portföyü planlaması.",
      "Friendly link:": "Dost bağlantı:",
      "SilkStudy · Study in China": "SilkStudy · Çin'de Eğitim",
      "Global University Youth Program": "Küresel Üniversite Gençlik Programı",
      "China patent support for overseas university innovators.": "Yurt dışı üniversite inovasyon ekipleri için Çin patent desteği.",
      "To promote international university exchange and youth innovation, Ma Su Team offers a China patent support program for applicants from overseas universities, including Hong Kong, Macao, and Taiwan universities.": "Uluslararası üniversite değişimini ve gençlik inovasyonunu desteklemek için Ma Su Team, Hong Kong, Makao ve Tayvan üniversiteleri dahil olmak üzere yurt dışı üniversitelerden gelen başvuru sahiplerine Çin patent destek programı sunar.",
      "USD 199 per case includes all patent service fees charged by Ma Su Team. Official CNIPA fees are not included and shall be borne separately by the applicant. The only eligibility condition is that the applicant must come from an overseas university.": "Dosya başına USD 199, Ma Su Team tarafından alınan tüm patent hizmet ücretlerini içerir. Resmi CNIPA ücretleri dahil değildir ve başvuru sahibi tarafından ayrıca karşılanır. Tek uygunluk koşulu, başvuru sahibinin yurt dışı bir üniversiteden gelmesidir.",
      "Apply: maximasure@hotmail.com": "Başvuru: maximasure@hotmail.com",
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
      "Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy. The team also turns FTO analysis into design-around options, invention mining opportunities, and patent portfolio layout.": "Ma Su hỗ trợ doanh nghiệp Trung Quốc và nhà sáng chế cá nhân lập danh mục sáng chế ở nước ngoài; đồng thời hỗ trợ nhóm đổi mới nước ngoài vào Trung Quốc bằng sàng lọc khả năng cấp bằng theo góc nhìn thẩm định viên, tái cấu trúc yêu cầu bảo hộ và chiến lược danh mục. Đội ngũ cũng chuyển phân tích FTO thành phương án thiết kế tránh rủi ro, cơ hội khai thác sáng chế và bố cục danh mục sáng chế.",
      "FTO-driven layout": "Bố cục dựa trên FTO",
      "Turn freedom-to-operate findings into design-around routes, invention mining, and patent portfolio decisions.": "Chuyển kết quả tự do thực hiện thành lộ trình thiết kế tránh rủi ro, khai thác sáng chế và quyết định danh mục sáng chế.",
      "FTO, Patent Mining & Portfolio Layout": "FTO, khai thác sáng chế và bố cục danh mục",
      "Freedom-to-operate analysis, risk mapping, design-around suggestions, invention mining, and patent portfolio planning based on real product and competitor landscapes.": "Phân tích tự do thực hiện, lập bản đồ rủi ro, đề xuất thiết kế tránh rủi ro, khai thác sáng chế và lập kế hoạch danh mục dựa trên sản phẩm thực tế và bối cảnh đối thủ.",
      "Friendly link:": "Liên kết hữu nghị:",
      "SilkStudy · Study in China": "SilkStudy · Du học Trung Quốc",
      "Global University Youth Program": "Chương trình Thanh niên Đại học Toàn cầu",
      "China patent support for overseas university innovators.": "Hỗ trợ sáng chế Trung Quốc cho nhà đổi mới từ các trường đại học nước ngoài.",
      "To promote international university exchange and youth innovation, Ma Su Team offers a China patent support program for applicants from overseas universities, including Hong Kong, Macao, and Taiwan universities.": "Để thúc đẩy giao lưu hợp tác đại học quốc tế và đổi mới thanh thiếu niên, Ma Su Team cung cấp chương trình hỗ trợ sáng chế Trung Quốc cho người nộp đơn từ các trường đại học nước ngoài, bao gồm các trường ở Hồng Kông, Ma Cao và Đài Loan.",
      "USD 199 per case includes all patent service fees charged by Ma Su Team. Official CNIPA fees are not included and shall be borne separately by the applicant. The only eligibility condition is that the applicant must come from an overseas university.": "Mức USD 199 mỗi hồ sơ bao gồm toàn bộ phí dịch vụ sáng chế do Ma Su Team thu. Phí chính thức của CNIPA không bao gồm và do người nộp đơn tự chịu riêng. Điều kiện duy nhất là người nộp đơn phải đến từ một trường đại học nước ngoài.",
      "Apply: maximasure@hotmail.com": "Đăng ký: maximasure@hotmail.com",
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
    "from-patent-examiner-to-innovation-methodology": {
      en: {
        docTitle: "From Patent Examiner to Innovation Methodology Practitioner | Ma Su",
        docDescription: "Ma Su's personal story: from CNIPA patent examiner to inventor, patent attorney, innovation methodology practitioner, youth science innovation educator, and cross-border patent strategist.",
        eyebrow: "Personal Story / Innovation Methodology",
        title: "From Patent Examiner to Innovation Methodology Practitioner: How I Built My Own Invention Methodology",
        deck: "I am not only a patent attorney, and I am not only someone who once examined patents. What makes my work different is that I have experienced invention, examination, and patent agency practice at the same time, and I have combined those roles into a method that can train innovation and improve the probability of patent grant.",
        meta: ["By Ma Su", "Personal IP Story", "Ma Su Team Knowledge Center"],
        sections: [
          ["2012: I Entered the National Patent Office and Began to Understand Patents Differently", [
            "In 2012, I joined China's national patent office and became a patent examiner. For many people, patent examination is a professional job. For me, it quickly became an entrance into understanding technological innovation.",
            "One thing that made me different from many colleagues was my strong interest in patents themselves. I set a requirement for myself: in addition to completing my examination work every day, I would read more than 100 additional patents and keep following the newest patent developments.",
            "That intensive reading gradually made me realize that patents are not merely legal texts, nor are they mechanical translations of technical documents. Behind a valuable patent there is usually a clear technical problem, an effective solution path, and a claim structure that can withstand examination."
          ]],
          ["From Reading Patents to Drafting Patents: The First Time I Tested My Judgment", [
            "Based on large-scale reading and examination practice, I began trying to draft patents myself. This was not simply imitating a format. It was a reverse way of thinking: if I were the inventor, how would I identify the real technical contribution? If I were the examiner, how would I judge whether it had a chance of being granted?",
            "Later, all of the patents I drafted in that period were successfully filed and granted. That result influenced me deeply, because it confirmed one thing: invention does not rely only on inspiration, and patent grant does not rely only on luck. Innovation can be decomposed, trained, and tested."
          ]],
          ["After 2017: I Spent Two Years Studying How Innovation Actually Happens", [
            "In 2017, I left the patent office. After leaving, I did not immediately define my capability simply as patent agency service. Instead, I spent about two years studying a more fundamental question: how do people actually innovate?",
            "I found that many companies and individuals do not lack effort or ideas. What they truly lack is method. They do not know how to extract technical problems from product problems, how to find inspiration from patent information, or how to turn an initial solution into an invention that can be granted, protected, and used to support business growth.",
            "Gradually, I formed my own innovation methodology: start from a real problem, decompose technical features, abstract the technical problem, search existing solutions, find alternative paths, and then turn the solution into a patent portfolio that can be drafted, examined, and strategically laid out."
          ]],
          ["Hundreds of Invention Patent Applications in One Year: A Methodology Must Be Tested by Real Projects", [
            "A methodology has little meaning if it stays only on paper. Later, within one year, I successfully supported hundreds of invention patent applications. That experience further proved to me that when early-stage invention mining, technical-problem decomposition, and claim design are solid enough, the probability of patent grant can rise significantly.",
            "This also became the foundation of my later enterprise service. I do not wait for companies to hand me a ready-made invention. I help them find invention points worth protecting from product upgrades, R&D bottlenecks, user feedback, competitor analysis, and patent maps.",
            "Many companies have used this method to complete product-upgrade R&D and build more layered patent portfolios. For me, the most valuable part of patent service is not only filing applications. It is helping innovation teams find technical solutions that are more likely to be granted, implemented, and turned into competitive barriers."
          ]],
          ["Inventor, Examiner, and Patent Attorney: A Three-in-One Perspective", [
            "If I had to summarize what makes my perspective distinctive, I would say this: I am an inventor, an examiner, and a patent attorney in one.",
            "As an inventor, I know how hard it is for an idea to move from vague to clear, and I know that technical solutions do not appear out of nowhere. As an examiner, I know how examiners read claims, search comparison documents, and judge inventiveness. As a patent attorney, I know how to turn a real technical contribution into an application that is easier to understand, easier to grant, and more valuable for protection.",
            "When these three roles are combined, I can look at a problem simultaneously from the viewpoints of the innovation team, the examiner, and the patent attorney. This is the core capability behind my work helping clients improve the efficiency of Chinese invention patent grants."
          ]],
          ["My Current Focus: Cross-Border Invention Patents and Youth Innovation", [
            "Today, my work mainly focuses on three directions.",
            "First, I help overseas innovators enter China by building clearer application strategies, claim structures, and office-action response logic around Chinese invention patent grant.",
            "Second, I help Chinese companies and individual innovators obtain overseas invention patents through PCT strategy, target-country layout, patent maps, and portfolio design, so their technologies can go global with more reliable IP protection.",
            "Third, I mentor youth innovation. I want to turn complex innovation methods into courses and tools that children, teachers, and parents can understand, operate, and train with."
          ]],
          ["From Enterprise R&D to Youth Science Innovation: Innovation Can Be Trained", [
            "Later, I began using my methodology to guide companies and young people in innovation. I have helped many enterprises with product-upgrade R&D and helped many students participate in science and innovation competitions and win awards.",
            "In youth science innovation education, I have become increasingly certain of one thing: children do not lack imagination. What they lack is a path for turning ideas into real projects. They need to learn how to observe problems, propose hypotheses, conduct research, search patents, make prototypes, verify data, explain technical contribution, and understand IP protection.",
            "That is why I began writing textbooks such as Practical Science and Innovation for Youth. I hope to turn innovation from inspiration available to only a few people into an ability that more people can train."
          ]],
          ["Textbooks, Comic Manuals, and the Dongguan Youth Science Innovation Competition", [
            "I am currently preparing to submit my youth science innovation textbook to an authoritative publisher. To me, this textbook is not an ordinary popular-science book. It is an operational guide that connects real problems, innovation methods, patent awareness, and project practice.",
            "Recently, I have also been planning a youth science innovation competition in Dongguan and wrote a competition manual for it. In the manual, I use a comic format to tell young people that science innovation is not a distant slogan. It is a practical process that can be completed step by step.",
            "When children read these materials, I hope they do not merely think innovation is impressive. I hope they understand: I can also start from the problems around me and create a change."
          ]],
          ["I Believe Innovation Is Not a Gift, But an Ability That Can Be Trained", [
            "Looking back, from entering the national patent office in 2012 to becoming an inventor, patent attorney, innovation methodology practitioner, enterprise innovation mentor, and youth science innovation educator, my work has always revolved around one question: how can an idea become a truly valuable invention faster?",
            "My answer is this: innovation is not simply inspiration, and patents are not isolated legal procedures. Innovation needs method, patents need structure, and grant requires an understanding of examination logic.",
            "This is exactly the personal IP I hope to build through Ma Su Team: using examiner judgment, inventor experience, patent-attorney technical expression, and educator methodology to help more innovation teams obtain inventions that can truly be granted, protected, and implemented."
          ]]
        ]
      },
      "zh-hk": {
            "docTitle":  "從專利審查員到創新方法論實踐者 | Ma Su",
            "docDescription":  "馬肅的個人故事：從國家專利局審查員，到發明人、專利代理師、創新方法論實踐者和青少年科創教育者。",
            "eyebrow":  "個人故事 / 創新方法論",
            "title":  "從專利審查員到創新方法論實踐者：我如何建立自己的發明方法論",
            "deck":  "我不是單純的專利代理師，也不是只做過審查的人。我真正與眾不同的地方，是我同時經歷過發明人、審查官和代理師三個角色，並把它們融合成一套可以訓練創新、提高授權機率的方法論。",
            "meta":  [
                         "作者：馬肅",
                         "個人 IP 故事",
                         "馬肅團隊知識中心"
                     ],
            "sections":  [
                             [
                                 "2012 年：我進入國家專利局，也開始重新理解專利",
                                 [
                                     "2012 年，我進入中國國家專利局，成為專利審查員。對很多人來說，專利審查是一份專業工作；但對我來說，它很快就變成了一條理解技術創新的入口。",
                                     "我和許多同事不同的一點是，我對專利本身有非常強烈的興趣。我給自己定了一個要求：每天除了完成審查專利的本職工作以外，還必須額外閱讀 100 件以上的專利，並持續追蹤最新的專利進展。",
                                     "大量閱讀讓我逐漸意識到，專利不是一堆法律文本，也不是技術文件的機械翻譯。真正有價值的專利背後，往往隱藏著一個清晰的技術問題、一個有效的解決路徑，以及一套能夠經得起審查的權利要求結構。"
                                 ]
                             ],
                             [
                                 "從閱讀專利到撰寫專利：我第一次驗證了自己的判斷",
                                 [
                                     "在大量閱讀和審查實踐的基礎上，我開始嘗試自己寫專利。那不是簡單模仿格式，而是反過來思考：如果我是發明人，我該如何發現真正的技術貢獻？如果我是審查員，我又會如何判斷它是否具備授權可能性？",
                                     "後來，我寫下的那一批專利全部成功申請並獲得授權。這個結果對我影響很大，因為它讓我確認了一件事：發明不是只靠靈感，專利授權也不只是運氣。創新可以被拆解、訓練、驗證。"
                                 ]
                             ],
                             [
                                 "2017 年之後：我花了兩年時間研究“如何創新”",
                                 [
                                     "2017 年，我離開了專利局。離開之後，我沒有立刻把自己的能力簡單定義為“專利代理服務”，而是用了大約兩年的時間，專門研究一個更底層的問題：人到底如何創新？",
                                     "我發現，很多企業和個人並不缺乏努力，也不缺乏想法，真正缺少的是方法。他們不知道如何從產品問題中提煉技術問題，也不知道如何從專利資訊中尋找啟發，也不知道如何把一個初步方案改造成可以被授權、可以被保護、可以支撐業務發展的發明。",
                                     "於是，我逐漸形成了一套自己的創新方法論：從真實問題出發，拆解技術特徵，抽象技術問題，檢索已有方案，尋找替代路徑，再把方案轉化為可撰寫、可審查、可佈局的專利組合。"
                                 ]
                             ],
                             [
                                 "一年內數百件發明專利：方法論必須接受真實專案檢驗",
                                 [
                                     "方法論如果只停留在紙上，就沒有意義。後來，我曾經用一年的時間，成功支持了數百件發明專利申請。這段經歷讓我進一步驗證：如果前端的發明挖掘、技術問題拆解和權利要求設計做得足夠紮實，專利授權的機率會明顯提高。",
                                     "這也是我後來服務企業的基礎。我不是等企業把「現成發明」交給我，而是幫助他們從產品升級、研發瓶頸、使用者回饋、競賽分析和專利地圖中，找到真正值得佈局的發明點。",
                                     "許多企業透過這套方法完成了產品升級研發，也建立了更有層次的專利組合。對我來說，專利服務最有價值的部分，不只是提交申請，而是幫助創新主體更快找到真正可授權、可落地、可形成競爭障礙的技術方案。"
                                 ]
                             ],
                             [
                                 "發明人、審查官、代理師：三位一體的獨特視角",
                                 [
                                     "如果要概括我的獨特之處，我會說：我是發明人、審查官、代理師三位一體。",
                                     "身為發明人，我知道一個想法從模糊到清晰有多難，也知道技術方案不是憑空出現的；作為審查官，我知道審查員如何閱讀權利要求、如何尋找對比文件、如何判斷創造性；作為代理師，我知道如何把真實技術貢獻寫成一份更容易被理解、更容易被授權、更有保護價值的專利申請。",
                                     "這三個角色疊在一起，讓我能夠站在創新主體、審查員和專利代理三個角度同時看問題。這也是我幫助客戶提升發明專利授權效率的核心能力。"
                                 ]
                             ],
                             [
                                 "今天我的業務重點：跨國發明專利與青少年創新",
                                 [
                                     "目前，我的業務主要聚焦於三個方向。",
                                     "第一，幫助境外創新主體進入中國，圍繞中國發明專利授權建立更明確的申請策略、權利要求架構和答審邏輯。",
                                     "第二，幫助中國企業和個人創新主體取得海外發明專利，透過 PCT、目標國家佈局、專利地圖和組合設計，讓技術出海時擁有更可靠的智慧財產權保護。",
                                     "第三，輔導青少年創新。我希望把複雜的創新方法轉化為孩子、老師和家長都能理解、能操作、能訓練的課程和工具。"
                                 ]
                             ],
                             [
                                 "從企業研發到青少年科創：創新方法可以被訓練",
                                 [
                                     "後來，我開始用自己的方法論指導企業和青少年去創新。我幫助大量企業進行產品升級研發，也幫助許多青少年參加科創大賽並獲得獎項。",
                                     "在青少年科創教育中，我越來越確定一件事：孩子們並不缺乏想像力，他們缺少的是把想法變成真實專案的路徑。他們需要學會觀察問題、提出假設、做研究、查專利、做原型、驗證資料、講清楚技術貢獻，並理解智慧財產權保護。",
                                     "所以我開始寫《青少年科創指南》這樣的教材，希望把創新從少數人的靈感，變成更多人可以訓練的能力。"
                                 ]
                             ],
                             [
                                 "教材、漫畫手冊和東莞青少年科創大賽",
                                 [
                                     "我目前正在準備將青少年科創教材提交給權威出版社出版。對我來說，這本教材不是一本普通的科普書，而是一套把真實問題、創新方法、專利意識和專案實踐連結起來的操作指南。",
                                     "最近，我也在策劃東莞地區的青少年科創大賽，並為比賽撰寫了一本比賽手冊。手冊中，我試著用漫畫的形式告訴青少年：科創不是遙遠的口號，而是可以一步一步完成的實操過程。",
                                     "我希望孩子們看到這套內容時，不只是覺得“創新很厲害”，而是能夠明白：原來我也可以從身邊的問題出發，做出一個改變。"
                                 ]
                             ],
                             [
                                 "我相信：創新不是天賦，而是一種可以被訓練的能力",
                                 [
                                     "回頭看，從 2012 年進入國家專利局，到後來成為發明人、代理師、創新方法論實踐者，再到企業創新輔導和青少年科創教育，我一直圍繞著同一個問題展開工作：如何讓一個想法更快變成真正有價值的發明？",
                                     "我的答案是：創新不是單純的靈感，也不是孤立的法律程序。創新需要方法，專利需要結構，授權需要對審查邏輯的理解。",
                                     "這正是我希望透過馬肅團隊 建立的個人 IP：用審查員的判斷、發明人的體驗、代理師的技術表達和教育者的方法論，幫助更多創新主體獲得真正可授權、可保護、可落地的發明成果。"
                                 ]
                             ]
                         ]
        },
      "ja": {
            "docTitle":  "特許審査官から革新的な方法論の実践者へ |馬蘇",
            "docDescription":  "Ma Su の個人的なストーリー: 特許庁の審査官から発明家、特許代理人、革新的な方法論の実践者、そして青少年の科学とイノベーションの教育者へ。",
            "eyebrow":  "個人的なストーリー/イノベーションの方法論",
            "title":  "特許審査官からイノベーション方法論の実践者へ: 私がどのようにして独自の発明方法論を確立したか",
            "deck":  "私は単なる弁理士ではありませんし、審査だけをやってきた者でもありません。私を本当にユニークにしているのは、発明者、審査官、代理人の 3 つの役割を同時に経験し、イノベーションを訓練し、認可の確率を高めることができる一連の方法論にそれらを統合していることです。",
            "meta":  [
                         "著者: 馬蘇",
                         "個人的な知財ストーリー",
                         "マスチームナレッジセンター"
                     ],
            "sections":  [
                             [
                                 "2012年：特許庁に入り、特許について再理解する",
                                 [
                                     "2012年に中国国家特許庁に入り、特許審査官になりました。多くの人にとって、特許審査は専門的な仕事です。しかし私にとって、それはすぐに技術革新を理解するための入り口になりました。",
                                     "私が多くの同僚と違うのは、特許そのものに非常に強い関心を持っていることです。私は自分自身に要件を設定しました。特許を審査するという職務を遂行することに加えて、毎日 100 件を超える追加の特許を読み、最新の特許の進捗状況を追跡し続ける必要があります。",
                                     "たくさん読んでいるうちに、特許は法律文書の束ではないし、技術文書の機械翻訳でもないことに徐々に気づきました。本当に価値のある特許の背後には、多くの場合、明確な技術的問題、効果的な解決策、審査に耐えられるクレーム構造が存在します。"
                                 ]
                             ],
                             [
                                 "特許を読むことから特許を書くことへ：初めて自分の判断力を検証した",
                                 [
                                     "たくさんの読書とレビューの実践に基づいて、私は自分で特許を書くことに挑戦し始めました。それは単にフォーマットを模倣するのではなく、逆の考え方をすることです。もし私が発明者だったら、真の技術的貢献をどのように発見すべきでしょうか?もし私が検閲官だったら、それが認可される可能性があるかどうかをどうやって判断するでしょうか?",
                                     "その後、私が書いたすべての特許が無事に申請され、承認されました。この結果は私に大きな影響を与えました。それは、発明はインスピレーションだけに頼るものではなく、特許の認可も運だけに頼るものではないということを私に確信させたからです。イノベーションは分解し、トレーニングし、検証することができます。"
                                 ]
                             ],
                             [
                                 "2017年以降：「イノベーションのやり方」を学ぶのに2年間を費やした",
                                 [
                                     "2017年に特許事務所を退職しました。退職後、すぐに自分の能力を単に「特許代理業務」と定義したわけではありません。代わりに、私は約 2 年間かけて、「人はどのようにイノベーションを起こすのか?」という低レベルの質問を研究しました。",
                                     "多くの企業や個人には努力やアイデアが不足しているわけではありませんが、本当に不足しているのは手段であることがわかりました。彼らは、製品の問題から技術的な問題を抽出する方法、特許情報からインスピレーションを見つける方法を知りません。また、予備計画を承認、保護され、ビジネス開発をサポートできる発明に変換する方法も知りません。",
                                     "その結果、私は徐々に独自のイノベーション方法論を形成していきました。現実の問題から始めて、技術的特徴を解体し、技術的問題を抽象化し、既存の解決策を検索し、代替手段を探し、次にその解決策を、作成、レビュー、レイアウトできる特許ポートフォリオに変換します。"
                                 ]
                             ],
                             [
                                 "1 年間で数百件の発明特許: 方法論は実際のプロジェクトでテストする必要がある",
                                 [
                                     "方法論は紙の上に残るだけでは意味がありません。その後、私は 1 年間を費やして、何百もの発明特許出願をサポートすることに成功しました。この経験により、フロントエンドの発明の発見、技術的問題の分解、請求項の設計が十分にしっかりしていれば、特許認定の確率が大幅に向上することがさらに確認できました。",
                                     "これは、その後の私の会社への奉仕の基礎でもありました。私は企業が「既成の発明」を私に渡してくれるのを待つのではなく、製品のアップグレード、研究開発のボトルネック、ユーザーのフィードバック、競合製品の分析、特許マップなどから、真に展開する価値のある発明のポイントを企業が見つけられるよう支援します。",
                                     "多くの企業がこの方法を通じて製品アップグレードの研究開発を完了し、より多層的な特許ポートフォリオも確立しています。私にとって、特許サービスの最も価値のある部分は、単に出願を提出することではなく、真に認可可能で実装可能であり、競争の障壁となり得る技術的ソリューションを革新的な企業が迅速に見つけられるよう支援することです。"
                                 ]
                             ],
                             [
                                 "発明者、審査官、代理人: 三位一体のユニークな視点",
                                 [
                                     "私のユニークさを一言で言えば、「私は発明家であり、審査官であり、代理人でもある」と言えるでしょう。",
                                     "私は発明家として、アイデアを漠然としたものから明確なものに変えることがいかに難しいかを知っています。また、技術的な解決策が何もないところから現れるものではないことも知っています。私は審査官として、審査官がクレームをどのように読むか、比較資料を見つける方法、創造性を判断する方法を知っています。私は弁護士として、実際の技術的貢献を、より理解しやすく、承認されやすく、より保護する価値のある特許出願に書き込む方法を知っています。",
                                     "これら 3 つの役割を重ね合わせることで、イノベーション主体、審査官、特許代理人の観点から問題を同時に見ることができます。これは、クライアントの発明特許認可の効率向上を支援する私の中心的な能力でもあります。"
                                 ]
                             ],
                             [
                                 "私の今日のビジネスの焦点: 国境を越えた発明特許と若者のイノベーション",
                                 [
                                     "現在、私の事業は主に3つの方向に注力しています。",
                                     "まず、外国の革新的な企業が中国に参入し、中国の発明特許認可に関するより明確な出願戦略、クレーム構造、審査ロジックを確立できるよう支援します。",
                                     "第二に、中国企業と個人のイノベーターが海外の発明特許を取得できるように支援し、PCT、対象国レイアウト、パテントマップ、組み合わせ設計を活用して、技術が海外に流出する際に、より信頼性の高い知的財産保護を提供する。",
                                     "第三に、若者をイノベーションに導きます。私は、複雑で革新的な手法を、子供たち、教師、保護者が理解し、操作し、訓練できるコースやツールに変えたいと考えています。"
                                 ]
                             ],
                             [
                                 "企業の研究開発から若者の科学技術イノベーションまで: 革新的な手法をトレーニング可能",
                                 [
                                     "その後、私は独自の方法論を使用して企業や十代の若者をイノベーションに導き始めました。私は多くの企業が製品のアップグレードや研究開発を行うのを支援し、また多くの若者が科学技術イノベーションのコンテストに参加して賞を受賞するのを支援してきました。",
                                     "青少年の科学技術教育において、私がますます確信していることは 1 つあります。それは、子どもたちには想像力が欠けているわけではなく、彼らに欠けているのはアイデアを実際のプロジェクトに変える道であるということです。彼らは、問題を観察し、仮説を立て、研究を実施し、特許を確認し、プロトタイプを作成し、データを検証し、技術的貢献を明確に説明し、知的財産保護を理解することを学ぶ必要があります。",
                                     "そこで私は、イノベーションを少数の人々のインスピレーションからより多くの人が訓練できる能力に変えたいと考え、『青少年向け科学技術イノベーションガイド』のような教材を書き始めました。"
                                 ]
                             ],
                             [
                                 "教科書、漫画マニュアル、東莞市青少年科学技術イノベーションコンテスト",
                                 [
                                     "私は現在、青少年の科学とイノベーションの教科書を出版するために権威ある出版社に提出する準備をしています。私にとって、この教科書は一般的な科学の本ではなく、実際の問題、革新的な方法、特許の認識、プロジェクトの実践を結び付ける一連の操作ガイドです。",
                                     "最近では、東莞での青少年科学技術イノベーションコンテストを計画し、そのコンテストのマニュアルを書いています。このマニュアルの中で、私は漫画の形で十代の若者たちに、「科学技術イノベーションは遠いスローガンではなく、段階的に達成できる現実的なプロセスである」と伝えようとしました。",
                                     "この一連のコンテンツを見た子どもたちに、「イノベーションは素晴らしい」と思うだけでなく、自分の周りの問題をもとに変化を起こすこともできるということを理解してもらえれば幸いです。"
                                 ]
                             ],
                             [
                                 "私は信じます: イノベーションは才能ではなく、訓練できる能力です",
                                 [
                                     "振り返ってみると、2012 年に特許庁に入庁してから、その後発明家、代理人、イノベーション方法論の実践者となり、企業のイノベーション コーチングや青少年向けの科学とイノベーションの教育に至るまで、私は同じ問題に取り組んできました。それは、アイデアを真に価値のある発明に早く変えるにはどうすればよいかということです。",
                                     "私の答えは、「イノベーションは単なるインスピレーションではないし、孤立した法的手続きでもない」です。イノベーションには手法が必要で、特許には構造が必要で、認可には審査ロジックの理解が必要です。",
                                     "これはまさに私がMasuチームを通じて確立したいと考えている個人IPです。審査官の判断、発明者の経験、代理人の技術的表現、教育者の方法論を利用して、より革新的な被験者が真に認可可能、保護可能、実装可能な発明を取得できるように支援します。"
                                 ]
                             ]
                         ]
        },
      "tr": {
            "docTitle":  "Patent incelemecisinden yenilikçi metodoloji uygulayıcısına | Ma Su",
            "docDescription":  "Ma Su\u0027nun kişisel hikayesi: Ulusal Patent Ofisindeki bir denetçiden mucit, patent temsilcisi, yenilikçi metodoloji uygulayıcısı ve gençlik bilimi ve yenilik eğitimcisine.",
            "eyebrow":  "Kişisel Hikayeler/İnovasyon Metodolojisi",
            "title":  "Patent Uzmanından İnovasyon Metodolojisi Uygulayıcısına: Kendi Buluş Metodolojimi Nasıl Oluşturdum?",
            "deck":  "Ben sadece patent vekili değilim, sadece inceleme yapan biri de değilim. Beni gerçekten benzersiz kılan şey, mucit, denetçi ve temsilci olmak üzere üç rolü aynı anda deneyimlemiş olmam ve bunları, yeniliği eğitebilecek ve yetkilendirme olasılığını artırabilecek bir dizi metodolojiye entegre etmemdir.",
            "meta":  [
                         "Yazar: Ma Su",
                         "Kişisel IP Hikayesi",
                         "Masu Ekip Bilgi Merkezi"
                     ],
            "sections":  [
                             [
                                 "2012: Ulusal Patent Ofisine girdim ve patentleri yeniden anlamaya başladım",
                                 [
                                     "2012 yılında Çin Ulusal Patent Ofisine girdim ve patent denetçisi oldum. Birçok kişi için patent incelemesi profesyonel bir iştir; ama benim için hızla teknolojik yeniliği anlamanın bir kapısı haline geldi.",
                                     "Beni birçok meslektaşımdan farklı kılan şey, patentlere olan ilgimin çok güçlü olmasıdır. Kendime bir şart koydum: Patentleri inceleme görevlerimi yerine getirmenin yanı sıra, her gün 100\u0027den fazla ek patent okumalı ve en son patent ilerlemelerini takip etmeye devam etmeliyim.",
                                     "Çok fazla okuma, yavaş yavaş patentlerin bir dizi hukuki metin ya da teknik belgelerin mekanik tercümeleri olmadığını anlamamı sağladı. Gerçekten değerli bir patentin arkasında genellikle açık bir teknik sorun, etkili bir çözüm ve incelemeye dayanabilecek bir talep yapısı vardır."
                                 ]
                             ],
                             [
                                 "Patentleri okumaktan patent yazmaya kadar: Kararımı ilk kez doğruladım",
                                 [
                                     "Pek çok okuma ve inceleme pratiğine dayanarak kendim patent yazmaya başladım. Bu sadece formatı taklit etmek değil, tam tersini düşünmektir: Eğer mucit olsaydım, gerçek teknik katkıyı nasıl keşfederdim? Eğer sansürcü olsaydım, izin verilme potansiyelinin olup olmadığını nasıl anlarım?",
                                     "Daha sonra yazdığım tüm patentlere başarıyla başvuru yapıldı ve onay alındı. Bu sonuç beni çok etkiledi çünkü benim için bir şeyi doğruladı: icatlar sadece ilhama dayanmıyor, patent yetkilendirmesi de sadece şansa bağlı değil. Yenilik parçalara ayrılabilir, eğitilebilir ve doğrulanabilir."
                                 ]
                             ],
                             [
                                 "2017\u0027den sonra: İki yılımı \"nasıl yenilik yapılır\" üzerine çalışarak geçirdim",
                                 [
                                     "2017 yılında patent ofisinden ayrıldım. Ayrıldıktan sonra yeteneğimi hemen \"patent ajansı hizmetleri\" olarak tanımlamadım. Bunun yerine, yaklaşık iki yılımı daha alt düzeydeki bir soruyu inceleyerek geçirdim: İnsanlar nasıl yenilik yapar?",
                                     "Pek çok şirketin ve bireyin çaba veya fikir eksikliği olmadığını, ancak gerçekte eksik olan şeyin yöntemler olduğunu buldum. Ürün sorunlarından teknik konuları nasıl çıkaracaklarını, patent bilgilerinden nasıl ilham alacaklarını bilmiyorlar ve bir ön planı nasıl yetkilendirilebilecek, korunabilecek ve iş gelişimini destekleyebilecek bir buluşa dönüştüreceklerini bilmiyorlar.",
                                     "Sonuç olarak yavaş yavaş kendi inovasyon metodolojimi oluşturdum: gerçek sorunlardan başlayarak, teknik özellikleri parçalara ayırarak, teknik sorunları soyutlayarak, mevcut çözümleri araştırarak, alternatif yollar arayarak ve ardından çözümleri yazılabilecek, incelenebilecek ve ortaya konabilecek bir patent portföyüne dönüştürüyorum."
                                 ]
                             ],
                             [
                                 "Bir yılda yüzlerce buluş patenti: metodoloji gerçek projelerle test edilmelidir",
                                 [
                                     "Metodoloji sadece kağıt üzerinde kalırsa anlamsızdır. Daha sonra bir yılımı yüzlerce buluş patenti başvurusunu başarıyla destekleyerek geçirdim. Bu deneyim, buluşların ön uç keşfinin, teknik sorunların çözülmesinin ve istemlerin tasarımının yeterince sağlam olması durumunda, patent izni olasılığının önemli ölçüde artacağını daha da doğrulamamı sağladı.",
                                     "Bu aynı zamanda şirkete daha sonraki hizmetlerimin de temelini oluşturdu. Şirketlerin \"hazır buluşları\" bana teslim etmelerini beklemiyorum, ancak ürün yükseltmeleri, Ar-Ge darboğazları, kullanıcı geri bildirimleri, rekabetçi ürün analizi ve patent haritalarından gerçekten uygulamaya değer buluş noktalarını bulmalarına yardımcı oluyorum.",
                                     "Birçok şirket bu yöntemle ürün yükseltme araştırma ve geliştirmesini tamamlamış ve ayrıca daha katmanlı bir patent portföyü oluşturmuştur. Bana göre patent hizmetlerinin en değerli kısmı sadece başvuru göndermek değil, aynı zamanda yenilikçi kuruluşların gerçekten yetkilendirilebilir, uygulanabilir ve rekabete engel oluşturabilecek teknik çözümleri hızlı bir şekilde bulmasına yardımcı olmaktır."
                                 ]
                             ],
                             [
                                 "Mucit, Denetçi, Ajan: Üçlüye benzersiz bir bakış açısı",
                                 [
                                     "Benzersizliğimi özetlemek gerekirse şunu söyleyebilirim: Ben bir mucit, bir denetçi ve bir ajanım.",
                                     "Bir mucit olarak, bir fikrin belirsiz durumdan net duruma dönüşmesinin ne kadar zor olduğunu biliyorum ve aynı zamanda teknik çözümlerin birdenbire ortaya çıkmadığını da biliyorum; Bir sınav görevlisi olarak, sınav görevlilerinin iddiaları nasıl okuyacağını, karşılaştırmalı belgeleri nasıl bulacağını ve yaratıcılığı nasıl değerlendireceğini biliyorum; Bir avukat olarak anlaşılması daha kolay, yetkilendirilmesi daha kolay ve korunması daha değerli olan bir patent başvurusuna gerçek teknik katkıların nasıl yazılacağını biliyorum.",
                                     "Bu üç rolün üst üste gelmesi, konulara aynı anda bir inovasyon konusunun, bir denetçinin ve bir patent temsilcisinin bakış açılarından bakmamı sağlıyor. Bu aynı zamanda müşterilerin buluş patenti yetkilendirmesinin verimliliğini artırmalarına yardımcı olma konusundaki temel yeteneğimdir."
                                 ]
                             ],
                             [
                                 "Bugünkü iş odağım: sınır ötesi buluş patentleri ve gençlik inovasyonu",
                                 [
                                     "Şu anda işim esas olarak üç yöne odaklanıyor.",
                                     "İlk olarak, yabancı yenilikçi kuruluşların Çin\u0027e girmesine ve Çin buluş patenti yetkilendirmesi etrafında daha net bir başvuru stratejisi, talep yapısı ve inceleme mantığı oluşturmasına yardımcı olun.",
                                     "İkincisi, Çinli işletmelerin ve bireysel yenilikçilerin denizaşırı buluş patentleri almasına ve teknoloji denizaşırı ülkelere gittiğinde daha güvenilir fikri mülkiyet koruması sağlamak için PCT\u0027yi, hedef ülke düzenini, patent haritalarını ve kombinasyon tasarımını kullanmalarına yardımcı olun.",
                                     "Üçüncüsü, gençleri yenilik yapmaya yönlendirin. Karmaşık yenilikçi yöntemleri çocukların, öğretmenlerin ve ebeveynlerin anlayabileceği, uygulayabileceği ve eğitebileceği kurslara ve araçlara dönüştürmeyi umuyorum."
                                 ]
                             ],
                             [
                                 "Kurumsal Ar-Ge\u0027den gençlik bilimi ve teknoloji inovasyonuna kadar: yenilikçi yöntemler eğitilebilir",
                                 [
                                     "Daha sonra şirketleri ve gençleri yenilik yapmaya yönlendirmek için kendi metodolojimi kullanmaya başladım. Çok sayıda şirketin ürün yükseltme, araştırma ve geliştirme yapmasına yardımcı oldum ve ayrıca birçok gencin bilim ve teknoloji inovasyon yarışmalarına katılmasına ve ödüller kazanmasına yardımcı oldum.",
                                     "Gençlik bilimi ve teknoloji eğitiminde bir şeyden giderek daha fazla emin oluyorum: Çocuklarda hayal gücü eksikliği yoktur, onlarda eksik olan şey, fikirleri gerçek projelere dönüştürme yoludur. Sorunları gözlemlemeyi, hipotezler formüle etmeyi, araştırma yapmayı, patentleri kontrol etmeyi, prototipler yapmayı, verileri doğrulamayı, teknik katkıları açıkça açıklamayı ve fikri mülkiyet korumasını anlamayı öğrenmeleri gerekir.",
                                     "Bu yüzden, inovasyonu birkaç kişi için ilham kaynağı olmaktan çıkarıp daha fazla insanın eğitebileceği bir yeteneğe dönüştürmeyi umarak \"Bilim ve Teknolojide Yenilik için Gençlik Rehberi\" gibi öğretim materyalleri yazmaya başladım."
                                 ]
                             ],
                             [
                                 "Ders kitapları, çizgi roman kılavuzları ve Dongguan Gençlik Bilim ve Teknoloji Yenilik Yarışması",
                                 [
                                     "Şu anda gençlik bilimi ve yenilik ders kitabını yayınlanmak üzere yetkili bir yayınevine sunmaya hazırlanıyorum. Bana göre bu ders kitabı sıradan bir popüler bilim kitabı değil; gerçek sorunları, yenilikçi yöntemleri, patent bilincini ve proje uygulamalarını birbirine bağlayan bir dizi operasyonel kılavuzdur.",
                                     "Son zamanlarda Dongguan\u0027da Gençlik Bilim ve Teknoloji İnovasyon Yarışmasını da planlıyorum ve yarışma için bir yarışma kılavuzu yazıyorum. Kılavuzda gençlere çizgi roman şeklinde anlatmaya çalıştım: Bilim ve teknolojide yenilik uzak bir slogan değil, adım adım tamamlanabilecek pratik bir süreçtir.",
                                     "Umarım çocuklar bu içeriği gördüklerinde sadece \"yeniliğin harika olduğunu\" düşünmekle kalmaz, aynı zamanda çevremdeki sorunlara göre değişiklik yapabileceğimi de anlarlar."
                                 ]
                             ],
                             [
                                 "Şuna inanıyorum: İnovasyon bir yetenek değil, geliştirilebilen bir yetenektir",
                                 [
                                     "2012 yılında Ulusal Patent Ofisine girdiğim andan itibaren, daha sonra bir mucit, temsilci, inovasyon metodolojisi uygulayıcısı olduğum, kurumsal inovasyon koçluğu ve gençlik bilimi ve inovasyon eğitimine kadar geriye dönüp baktığımda aynı sorun üzerinde çalışıyorum: Bir fikri gerçekten değerli bir buluşa daha hızlı nasıl dönüştürebilirim?",
                                     "Cevabım şu: İnovasyon yalnızca ilham kaynağı olmadığı gibi, izole edilmiş bir hukuki süreç de değildir. Yenilik yöntemler gerektirir, patentler yapı gerektirir ve yetkilendirme, inceleme mantığının anlaşılmasını gerektirir.",
                                     "Bu tam olarak Masu ekibi aracılığıyla oluşturmayı umduğum kişisel fikri mülkiyettir: daha yenilikçi deneklerin gerçekten yetkilendirilebilir, korunabilir ve uygulanabilir buluşlar elde etmesine yardımcı olmak için denetçilerin yargılarını, mucitlerin deneyimlerini, temsilcilerin teknik ifadelerini ve eğitimcilerin metodolojisini kullanmak."
                                 ]
                             ]
                         ]
        },
      "vi": {
            "docTitle":  "Từ người thẩm định bằng sáng chế đến người thực hành phương pháp đổi mới | Mã Sư",
            "docDescription":  "Câu chuyện cá nhân của Ma Su: từ một giám định viên tại Văn phòng Sáng chế Quốc gia đến một nhà phát minh, đại diện cấp bằng sáng chế, người thực hành phương pháp đổi mới và nhà giáo dục khoa học và đổi mới cho giới trẻ.",
            "eyebrow":  "Câu chuyện cá nhân/Phương pháp đổi mới",
            "title":  "Từ người thẩm định bằng sáng chế đến người thực hành phương pháp đổi mới: Tôi đã thiết lập phương pháp phát minh của riêng mình như thế nào",
            "deck":  "Tôi không phải là một luật sư về bằng sáng chế đơn thuần, tôi cũng không phải là người chỉ mới thực hiện các cuộc kiểm tra. Điều thực sự khiến tôi trở nên độc đáo là tôi đã trải nghiệm đồng thời ba vai trò của nhà phát minh, người kiểm tra và người đại diện, đồng thời tích hợp chúng vào một bộ phương pháp có thể đào tạo sự đổi mới và cải thiện xác suất được cấp phép.",
            "meta":  [
                         "Tác giả: Mã Sư",
                         "Câu chuyện IP cá nhân",
                         "Trung tâm Kiến thức Đội Masu"
                     ],
            "sections":  [
                             [
                                 "2012: Tôi vào Văn phòng Sáng chế Quốc gia và bắt đầu hiểu lại về bằng sáng chế",
                                 [
                                     "Năm 2012, tôi vào Văn phòng Sáng chế Quốc gia Trung Quốc và trở thành giám định viên sáng chế. Đối với nhiều người, việc xem xét bằng sáng chế là một công việc chuyên nghiệp; nhưng đối với tôi, nó nhanh chóng trở thành cửa ngõ để tìm hiểu sự đổi mới công nghệ.",
                                     "Điều khiến tôi khác biệt với nhiều đồng nghiệp là bản thân tôi rất quan tâm đến các bằng sáng chế. Tôi đặt ra yêu cầu cho bản thân: ngoài việc hoàn thành nhiệm vụ xem xét các bằng sáng chế, tôi còn phải đọc thêm hơn 100 bằng sáng chế mỗi ngày và tiếp tục theo dõi tiến độ mới nhất của bằng sáng chế.",
                                     "Đọc nhiều khiến tôi dần nhận ra rằng bằng sáng chế không phải là một đống văn bản pháp lý, cũng không phải là những bản dịch máy móc các tài liệu kỹ thuật. Đằng sau một bằng sáng chế thực sự có giá trị thường có một vấn đề kỹ thuật rõ ràng, một giải pháp hiệu quả và cấu trúc yêu cầu bồi thường có thể được xem xét."
                                 ]
                             ],
                             [
                                 "Từ đọc bằng sáng chế đến viết bằng sáng chế: Lần đầu tiên tôi xác minh nhận định của mình",
                                 [
                                     "Dựa trên nhiều lần thực hành đọc và xem xét, tôi bắt đầu cố gắng tự mình viết bằng sáng chế. Đó không chỉ đơn giản là bắt chước hình thức mà còn phải nghĩ ngược lại: Nếu tôi là nhà phát minh, tôi nên khám phá những đóng góp kỹ thuật thực sự như thế nào? Nếu tôi là người kiểm duyệt, làm sao tôi có thể biết liệu nó có khả năng được cấp phép hay không?",
                                     "Sau đó, tất cả các bằng sáng chế tôi viết đều được đăng ký và cấp phép thành công. Kết quả này có tác động rất lớn đến tôi, vì nó khẳng định với tôi một điều: phát minh không chỉ dựa vào cảm hứng, và việc cấp bằng sáng chế không chỉ dựa vào may mắn. Sự đổi mới có thể được tháo dỡ, đào tạo và xác minh."
                                 ]
                             ],
                             [
                                 "Sau 2017: Tôi dành 2 năm để nghiên cứu “cách đổi mới”",
                                 [
                                     "Năm 2017, tôi rời văn phòng cấp bằng sáng chế. Sau khi rời đi, tôi không xác định ngay khả năng của mình chỉ đơn giản là “dịch vụ đại lý cấp bằng sáng chế”. Thay vào đó, tôi dành khoảng hai năm để nghiên cứu một câu hỏi ở cấp độ thấp hơn: Mọi người đổi mới bằng cách nào?",
                                     "Tôi nhận thấy nhiều công ty, cá nhân không thiếu nỗ lực hay ý tưởng mà thứ họ thực sự thiếu chính là phương pháp. Họ không biết cách rút ra các vấn đề kỹ thuật từ vấn đề sản phẩm, cách tìm nguồn cảm hứng từ thông tin bằng sáng chế và họ không biết cách biến kế hoạch sơ bộ thành một phát minh có thể được cấp phép, bảo hộ và hỗ trợ phát triển kinh doanh.",
                                     "Kết quả là, tôi dần dần hình thành phương pháp đổi mới của riêng mình: bắt đầu từ những vấn đề thực tế, loại bỏ các đặc tính kỹ thuật, trừu tượng hóa các vấn đề kỹ thuật, tìm kiếm các giải pháp hiện có, tìm kiếm những con đường thay thế và sau đó chuyển đổi các giải pháp thành một danh mục bằng sáng chế có thể được viết, xem xét và trình bày."
                                 ]
                             ],
                             [
                                 "Hàng trăm bằng sáng chế trong một năm: phương pháp phải được thử nghiệm bằng dự án thực tế",
                                 [
                                     "Phương pháp luận sẽ vô nghĩa nếu nó chỉ nằm trên giấy. Sau đó, tôi đã dành một năm để hỗ trợ thành công hàng trăm đơn xin cấp bằng sáng chế. Kinh nghiệm này cho phép tôi xác minh thêm rằng nếu việc phát hiện các phát minh từ phía trước, giải quyết các vấn đề kỹ thuật và thiết kế các yêu cầu bồi thường đủ vững chắc thì khả năng được cấp phép bằng sáng chế sẽ được cải thiện đáng kể.",
                                     "Đây cũng là cơ sở để tôi phục vụ công ty sau này. Tôi không chờ đợi các công ty giao những “phát minh làm sẵn” cho mình mà giúp họ tìm ra những điểm phát minh thực sự đáng để triển khai từ nâng cấp sản phẩm, tắc nghẽn R\u0026D, phản hồi của người dùng, phân tích sản phẩm cạnh tranh và bản đồ bằng sáng chế.",
                                     "Nhiều công ty đã hoàn thành nghiên cứu và phát triển nâng cấp sản phẩm thông qua phương pháp này và cũng đã thiết lập danh mục bằng sáng chế nhiều lớp hơn. Đối với tôi, phần giá trị nhất của dịch vụ cấp bằng sáng chế không chỉ là nộp đơn đăng ký mà còn giúp các tổ chức đổi mới nhanh chóng tìm ra các giải pháp kỹ thuật thực sự được ủy quyền, có thể thực hiện được và có thể tạo thành rào cản cạnh tranh."
                                 ]
                             ],
                             [
                                 "Nhà phát minh, giám định, đặc vụ: Một góc nhìn độc đáo về bộ ba",
                                 [
                                     "Nếu tôi tóm tắt sự độc đáo của mình, tôi sẽ nói: Tôi là một nhà phát minh, một giám định viên và một đại lý tất cả trong một.",
                                     "Là một nhà phát minh, tôi biết việc chuyển một ý tưởng từ mơ hồ sang rõ ràng là điều khó khăn như thế nào và tôi cũng biết rằng các giải pháp kỹ thuật không phải tự nhiên mà xuất hiện; với tư cách là một giám khảo, tôi biết giám khảo đọc yêu cầu như thế nào, tìm tài liệu so sánh như thế nào và đánh giá tính sáng tạo như thế nào; Với tư cách là một luật sư, tôi biết cách viết những đóng góp kỹ thuật thực sự vào đơn xin cấp bằng sáng chế sao cho dễ hiểu hơn, dễ cấp phép hơn và có giá trị bảo vệ cao hơn.",
                                     "Sự chồng chất của ba vai trò này cho phép tôi xem xét các vấn đề đồng thời từ góc độ của chủ thể đổi mới, thẩm định viên và đại diện sáng chế. Đây cũng là khả năng cốt lõi của tôi trong việc giúp khách hàng nâng cao hiệu quả ủy quyền cấp bằng độc quyền sáng chế."
                                 ]
                             ],
                             [
                                 "Trọng tâm kinh doanh của tôi ngày hôm nay: bằng sáng chế xuyên biên giới và đổi mới của giới trẻ",
                                 [
                                     "Hiện nay công việc kinh doanh của tôi chủ yếu tập trung vào 3 hướng.",
                                     "Đầu tiên, giúp các thực thể đổi mới nước ngoài vào Trung Quốc và thiết lập chiến lược ứng dụng rõ ràng hơn, cơ cấu yêu cầu và xem xét logic xung quanh việc cấp phép bằng sáng chế phát minh của Trung Quốc.",
                                     "Thứ hai, giúp các doanh nghiệp và nhà đổi mới cá nhân Trung Quốc có được bằng sáng chế phát minh ở nước ngoài và sử dụng PCT, sơ đồ quốc gia mục tiêu, bản đồ bằng sáng chế và thiết kế kết hợp để bảo vệ sở hữu trí tuệ đáng tin cậy hơn khi công nghệ ra nước ngoài.",
                                     "Thứ ba, hướng dẫn thanh niên đổi mới. Tôi hy vọng có thể biến các phương pháp đổi mới phức tạp thành các khóa học và công cụ mà trẻ em, giáo viên và phụ huynh có thể hiểu, vận hành và đào tạo."
                                 ]
                             ],
                             [
                                 "Từ R\u0026D của doanh nghiệp đến đổi mới khoa học và công nghệ của giới trẻ: có thể đào tạo các phương pháp đổi mới",
                                 [
                                     "Sau đó, tôi bắt đầu sử dụng phương pháp của riêng mình để hướng dẫn các công ty và thanh thiếu niên đổi mới. Tôi đã giúp một số lượng lớn các công ty tiến hành nâng cấp và nghiên cứu phát triển sản phẩm, đồng thời tôi cũng đã giúp nhiều bạn trẻ tham gia các cuộc thi đổi mới khoa học công nghệ và giành được giải thưởng.",
                                     "Trong giáo dục khoa học công nghệ cho giới trẻ, tôi ngày càng chắc chắn một điều: trẻ em không thiếu trí tưởng tượng, cái chúng thiếu là con đường biến ý tưởng thành dự án thực tế. Họ cần học cách quan sát vấn đề, hình thành giả thuyết, tiến hành nghiên cứu, kiểm tra bằng sáng chế, tạo nguyên mẫu, xác minh dữ liệu, giải thích rõ ràng những đóng góp kỹ thuật và hiểu rõ việc bảo vệ sở hữu trí tuệ.",
                                     "Vì vậy, tôi bắt đầu viết các tài liệu giảng dạy như “Hướng dẫn đổi mới khoa học và công nghệ cho thanh niên”, với hy vọng biến đổi mới từ nguồn cảm hứng cho một số ít người thành khả năng mà nhiều người có thể đào tạo hơn."
                                 ]
                             ],
                             [
                                 "Sách giáo khoa, sách hướng dẫn truyện tranh và Cuộc thi Đổi mới Khoa học và Công nghệ Thanh niên Đông Quan",
                                 [
                                     "Tôi hiện đang chuẩn bị gửi cuốn sách giáo khoa về khoa học và đổi mới dành cho thanh niên cho một nhà xuất bản có thẩm quyền để xuất bản. Đối với tôi, cuốn sách giáo khoa này không phải là một cuốn sách khoa học phổ thông thông thường mà là một bộ hướng dẫn vận hành kết nối các vấn đề thực tế, các phương pháp đổi mới, nhận thức về bằng sáng chế và thực tiễn dự án.",
                                     "Gần đây, tôi cũng đang lên kế hoạch cho Cuộc thi Đổi mới Khoa học và Công nghệ dành cho Thanh niên ở Đông Quản và viết cẩm nang cuộc thi cho cuộc thi. Trong cuốn sách, tôi cố gắng nói với thanh thiếu niên dưới dạng truyện tranh: Đổi mới khoa học công nghệ không phải là một khẩu hiệu xa vời mà là một quá trình thiết thực có thể hoàn thiện từng bước một.",
                                     "Tôi hy vọng rằng khi các em xem bộ nội dung này, các em không chỉ nghĩ rằng “đổi mới thật tuyệt vời” mà còn hiểu rằng mình cũng có thể tạo ra sự thay đổi dựa trên những vấn đề xung quanh mình."
                                 ]
                             ],
                             [
                                 "Tôi tin: Đổi mới không phải là tài năng mà là khả năng có thể rèn luyện được",
                                 [
                                     "Nhìn lại, từ khi tôi vào Văn phòng Sáng chế Quốc gia vào năm 2012, đến sau này trở thành nhà phát minh, đại lý, người thực hành phương pháp đổi mới, huấn luyện đổi mới doanh nghiệp và giáo dục khoa học và đổi mới cho thanh niên, tôi đã giải quyết cùng một vấn đề: Làm thế nào để biến một ý tưởng thành một phát minh thực sự có giá trị nhanh hơn?",
                                     "Câu trả lời của tôi là: Đổi mới không chỉ là nguồn cảm hứng, cũng không phải là một quy trình pháp lý biệt lập. Sự đổi mới đòi hỏi các phương pháp, bằng sáng chế yêu cầu cấu trúc và việc cấp phép đòi hỏi sự hiểu biết về logic đánh giá.",
                                     "Đây chính xác là IP cá nhân mà tôi hy vọng thiết lập được thông qua nhóm Masu: sử dụng phán đoán của người kiểm tra, kinh nghiệm của nhà phát minh, biểu hiện kỹ thuật của người đại diện và phương pháp của các nhà giáo dục để giúp những đối tượng sáng tạo hơn có được những phát minh thực sự có thể được cấp phép, có thể bảo vệ và có thể thực hiện được."
                                 ]
                             ]
                         ]
        }
    },
    "xiegang-yafan-cup-youth-innovation-competition": {
          "en": {
                "docTitle": "Xiegang Yafan Cup Youth Innovation Competition Planning Case | Ma Su",
                "docDescription": "A competition planning case connecting youth innovation education, IP literacy, enterprise R&D resources, and commercialization.",
                "eyebrow": "Youth Innovation Case / Competition Design",
                "title": "Yafan Cup Xiegang Youth Science Innovation Competition: Bringing Innovation Methodology into a Real Industrial Setting",
                "deck": "This is not simply a student creativity contest. It is a youth innovation education model that connects local education, enterprise R&D, IP literacy, patent search, product design, and commercialization.",
                "meta": [
                      "By Ma Su",
                      "Youth Innovation Competition Case",
                      "Ma Su Team Knowledge Center"
                ],
                "sections": [
                      [
                            "Why Plan This Kind of Competition?",
                            [
                                  "In recent years, youth science and technology innovation education has been moving from interest activities toward comprehensive capability training. If innovation education stays only at the slogan level, students cannot truly understand how an idea moves from observation, research, design, and making into IP protection and industrial transformation.",
                                  "The core starting point of the Yafan Cup Xiegang Youth Science Innovation Competition is to combine innovation education with IP education, allowing students to complete a full innovation experience in a real industrial setting.",
                                  "The plan positions the competition as a youth innovation education brand activity for Xiegang Town. It serves the cultivation of students' innovation thinking, hands-on ability, and IP awareness, while using enterprise resources and expert support to explore a closed loop of education guidance, practical innovation, result protection, and product transformation."
                            ]
                      ],
                      [
                            "Combining Local Resources, Enterprise Scenarios, and Methodology",
                            [
                                  "Xiegang Town has a strong educational foundation and practical education scenarios. The local area is promoting a half-day weekly plan during compulsory education and developing practice courses around local resources such as Yinping Mountain Forest Park and Yinshan Wetland Park. This provides a foundation for school participation and regional brand building.",
                                  "Yafan provides a real industrial scenario. The company has long focused on intelligent, healthy, and scientific drinking, with innovative products such as smart thermostatic cups, cooling cups, and fingerprint temperature-display cups, as well as R&D, design, and production capabilities. Using cups as the theme keeps student ideas grounded in materials, structure, function, appearance, smart hardware, and manufacturing processes.",
                                  "This is exactly what my innovation methodology values most: innovation training cannot be separated from real problems. If a child can discover pain points, propose solutions, search existing technologies, design models, and express value around an everyday product such as a cup, that child has completed a full innovation capability exercise."
                            ]
                      ],
                      [
                            "Competition Theme: Building Dreams with Innovation, Sharing the Future with Cups",
                            [
                                  "The proposed theme is: Building Dreams with Innovation, Sharing the Future with Cups - focusing on cup innovation design and lighting up the power of intellectual property.",
                                  "The entries focus on creative cup design and physical making, including functional innovation, material innovation, shape innovation, and smart innovation. This theme is specific enough for students to understand and operate, yet open enough to accommodate ideas from different ages and ability levels.",
                                  "The competition is open to primary and secondary school students within Xiegang Town. It plans to set primary and secondary groups, encourage individual or teams of up to three students, and cover compulsory education schools across the town."
                            ]
                      ],
                      [
                            "Four-Stage Process: From Ideas to Roadshow",
                            [
                                  "The competition is designed as four stages, not a one-time work collection.",
                                  "The first stage is promotion, mobilization, and idea collection. Students understand the theme, visit production workshops and R&D labs, and see the full process of how a cup moves from design to production.",
                                  "The second stage is innovation training and IP education. Training includes innovation methodology, IP basics, product design and making guidance, and patent search practice. The key is not telling students to innovate, but teaching them how to use methods to generate high-quality ideas.",
                                  "The third stage is work submission and evaluation. Entry categories include creative design, physical making, and roadshow presentation, evaluating drawings, idea descriptions, physical models, functional implementation, expression ability, and project completeness.",
                                  "The fourth stage is the roadshow final and award ceremony. Finalists present their ideas and works on site, receive evaluation from experts, and expand the impact of the event through media coverage."
                            ]
                      ],
                      [
                            "Evaluation Standards: Bringing IP Awareness into Innovation Competitions",
                            [
                                  "The evaluation dimensions in the plan include innovation, practicality, completion quality, IP awareness, and presentation.",
                                  "IP awareness is not an add-on. It is the key difference between this competition and an ordinary creativity contest. Students need to understand that if an idea is to create real value, they must know where existing technologies are, where their improvement lies, and whether it can form a protectable technical solution.",
                                  "This is also the logic of innovation education that I have long emphasized: youth innovation should not only pursue something that looks novel. Students should gradually learn to discover problems, search information, judge differences, protect results, and present value."
                            ]
                      ],
                      [
                            "Commercialization: Let Students See Ideas Become Products",
                            [
                                  "Another important design of the competition is the introduction of a commercialization mechanism. For excellent ideas with market potential, the company can select them for product development, include them in the product line, and give students honors, attribution, bonuses, visits, or opportunities to participate in later development.",
                                  "This allows students to directly feel that creativity is not just an idea on paper. Innovation has value, and IP protection is not a distant legal concept but a bridge connecting ideas, products, and markets.",
                                  "For the company, the perspective of young people may also bring new product inspiration. For the locality, this mechanism connects school education, enterprise innovation, and regional brand building."
                            ]
                      ],
                      [
                            "Follow-up Plan: From One Competition to an Education Brand",
                            [
                                  "The plan designs the Yafan Cup as a sustainable annual competition rather than a one-time event. Future editions can optimize the competition system and training based on the first edition, gradually improving quality and influence.",
                                  "Going further, the project can rely on enterprise R&D labs and production workshops, and jointly build a Youth Innovation and IP Education Base with market regulation, education management centers, and schools, deeply integrating competition resources with daily practice courses.",
                                  "If the first competition operates maturely, it can gradually expand to surrounding towns and even the whole city, while helping outstanding results connect with provincial and national youth innovation competitions."
                            ]
                      ],
                      [
                            "What This Case Means for My Personal IP",
                            [
                                  "The Yafan Cup Xiegang Youth Science Innovation Competition is an implementation of my innovation methodology in youth education and local industry settings.",
                                  "It proves that innovation can be trained is not a slogan. It can be designed into a complete system of courses, competitions, enterprise visits, patent search, work making, roadshow defense, and product transformation.",
                                  "From patent examiner, inventor, and patent attorney to innovation methodology researcher and youth innovation textbook author, what I hope to do has always been consistent: help more innovators find real problems, form protectable technical solutions, and make innovation results truly land."
                            ]
                      ]
                ]
          },
          "zh-hk": {
                "docTitle": "謝崗雅梵杯青少年科技創新大賽策劃案例 | Ma Su",
                "docDescription": "一個連接青少年創新教育、知識產權素養、企業研發資源與成果轉化的賽事策劃案例。",
                "eyebrow": "青少年科創案例 / 賽事設計",
                "title": "雅梵杯謝崗青少年科技創新大賽：把創新方法論放進真實產業場景",
                "deck": "這不只是一場學生創意比賽，而是一個把地方教育、企業研發、知識產權素養、專利檢索、產品設計與成果轉化連接起來的青少年創新教育模型。",
                "meta": [
                      "作者：馬肅",
                      "青少年科創賽事案例",
                      "馬肅團隊知識中心"
                ],
                "sections": [
                      [
                            "為什麼要策劃這樣一場比賽",
                            [
                                  "近年來，青少年科技創新教育正在從興趣活動走向綜合能力培養。如果創新教育只停留在口號層面，學生很難真正理解一個想法如何從觀察、研究、設計、製作，走到知識產權保護與產業轉化。",
                                  "雅梵杯謝崗青少年科技創新大賽的核心出發點，就是把創新教育和知識產權教育結合起來，讓學生在真實產業場景中完成一次完整的創新體驗。",
                                  "方案將這項賽事定位為謝崗鎮青少年科技創新教育品牌活動，服務於學生創新思維、動手能力和知識產權意識的培養，同時借助企業資源和專家支持，探索教育引導、實踐創新、成果保護和產品轉化的閉環。"
                            ]
                      ],
                      [
                            "地方、企業與方法論的結合",
                            [
                                  "謝崗鎮具備良好的教育基礎和實踐教育場景。當地正在推進義務教育階段每週半天計劃，並圍繞銀瓶山森林公園、銀山濕地公園等地方資源開發實踐課程，這為學校參與和區域品牌建設提供了基礎。",
                                  "雅梵提供的則是真實產業場景。企業長期聚焦智能、健康、科學飲水，擁有智能恆溫杯、冷水杯、指紋顯溫杯等創新產品，也具備研發、設計和生產能力。以杯子為主題，能讓學生的創意落到材料、結構、功能、外觀、智能硬件和製造工藝上。",
                                  "這正是我一直重視的創新方法論：創新訓練不能脫離真問題。如果孩子能圍繞杯子這樣的日常產品發現痛點、提出方案、檢索現有技術、設計模型並表達價值，他就完成了一次完整的創新能力訓練。"
                            ]
                      ],
                      [
                            "賽事主題：科創築夢，杯享未來",
                            [
                                  "方案擬定的主題是：科創築夢，杯享未來，聚焦杯具創新設計，點亮知識產權力量。",
                                  "參賽作品聚焦杯具創意設計與實物製作，包括功能創新、材料創新、造型創新和智能化創新。這個主題足夠具體，學生容易理解和操作；同時又保留了開放性，可以容納不同年齡段、不同能力層次的創意。",
                                  "賽事面向謝崗鎮內中小學生，計劃設置小學組和中學組，鼓勵個人或三人以內團隊參賽，覆蓋全鎮義務教育階段學校。"
                            ]
                      ],
                      [
                            "四階段流程：從創意到路演",
                            [
                                  "這場比賽被設計為四個階段，而不是一次性的作品徵集。",
                                  "第一階段是宣傳動員與創意徵集。學生了解賽事主題，走進企業生產車間和研發實驗室，看到一個杯子從設計到生產的完整流程。",
                                  "第二階段是創新培訓與知識產權教育。培訓內容包括創新方法論、知識產權基礎、產品設計與製作指導、專利檢索實操。關鍵不在於告訴學生要創新，而是教他們如何使用方法產生高質量創意。",
                                  "第三階段是作品提交與評審。作品類別包括創意設計、實物製作和路演展示，從圖紙、創意說明、實物模型、功能實現、表達能力和項目完整度等方面進行評價。",
                                  "第四階段是路演決賽與頒獎。入圍學生現場展示創意和作品，接受專家評審，並通過媒體宣傳擴大活動影響力。"
                            ]
                      ],
                      [
                            "評價標準：把知識產權意識納入科創比賽",
                            [
                                  "方案中的評價維度包括創新性、實用性、完成度、知識產權意識和展示表達。",
                                  "知識產權意識不是附加項，而是這場比賽區別於普通創意比賽的關鍵。學生要理解，一個想法如果要產生真正價值，就需要知道現有技術在哪裡，自己的改進點在哪裡，是否能形成可保護的技術方案。",
                                  "這也是我一直強調的創新教育邏輯：青少年科創不能只追求看起來新奇，而要逐步學會發現問題、檢索信息、判斷差異、保護成果和表達價值。"
                            ]
                      ],
                      [
                            "成果轉化：讓學生看到創意可以變成產品",
                            [
                                  "這場比賽的另一個重要設計，是引入成果轉化機制。對具有市場潛力的優秀創意，企業可以選擇進行產品開發，納入產品線，並給予學生榮譽、署名、獎金、參觀或參與後續開發的機會。",
                                  "這能讓學生直接感受到，創意不只是紙面上的想法。創新有價值，知識產權保護也不是遙遠的法律概念，而是連接創意、產品和市場的橋樑。",
                                  "對企業而言，青少年的視角也可能帶來新的產品靈感；對地方而言，這種機制能把學校教育、企業創新和區域品牌建設連接起來。"
                            ]
                      ],
                      [
                            "後續規劃：從一次比賽到一個教育品牌",
                            [
                                  "方案把雅梵杯設計為可持續舉辦的年度賽事，而不是一次性活動。後續可以根據首屆經驗優化賽制和培訓內容，逐步提升賽事質量與影響力。",
                                  "更進一步，項目還可以依托企業研發實驗室和生產車間，聯合市場監管、教育管理中心和學校共建青少年科創與知識產權教育基地，把賽事資源與日常實踐課程深度結合。",
                                  "如果首屆比賽運作成熟，未來還可以逐步拓展至周邊鎮街乃至全市，同時幫助優秀成果對接省級、國家級青少年科技創新賽事。"
                            ]
                      ],
                      [
                            "這個案例對我的個人 IP 意味著什麼",
                            [
                                  "雅梵杯謝崗青少年科技創新大賽，是我的創新方法論在青少年教育和地方產業場景中的一次落地。",
                                  "它證明，創新可以被訓練並不是一句口號，而是可以被設計成課程、賽事、企業參訪、專利檢索、作品製作、路演答辯和產品轉化的一整套系統。",
                                  "從專利審查員、發明人、專利代理師，到創新方法論研究者、青少年科創教材作者，我希望做的事情始終一致：幫助更多創新者找到真問題，形成可保護的技術方案，並讓創新成果真正落地。"
                            ]
                      ]
                ]
          },
          "ja": {
                "docTitle": "謝崗雅梵杯青少年科学技術イノベーションコンテスト企画事例 | Ma Su",
                "docDescription": "青少年のイノベーション教育、知的財産リテラシー、企業の研究開発資源、成果の事業化をつなぐコンテスト企画事例。",
                "eyebrow": "青少年イノベーション事例 / コンテスト設計",
                "title": "雅梵杯謝崗青少年科学技術イノベーションコンテスト：イノベーション方法論を実際の産業現場へ",
                "deck": "これは単なる学生向けアイデアコンテストではありません。地域教育、企業R&D、知的財産教育、特許調査、製品設計、成果の事業化をつなぐ青少年イノベーション教育モデルです。",
                "meta": [
                      "著者：Ma Su",
                      "青少年イノベーションコンテスト事例",
                      "Ma Su Team ナレッジセンター"
                ],
                "sections": [
                      [
                            "なぜこのようなコンテストを企画するのか",
                            [
                                  "近年、青少年向けの科学技術イノベーション教育は、興味活動から総合的な能力育成へと移りつつあります。創新教育がスローガンだけにとどまれば、子どもたちは一つのアイデアが観察、調査、設計、制作を経て、知的財産保護や産業化へ進む過程を本当には理解できません。",
                                  "雅梵杯謝崗青少年科学技術イノベーションコンテストの出発点は、イノベーション教育と知的財産教育を結びつけ、学生が実際の産業環境の中で一連の創新体験を完結できるようにすることです。",
                                  "この企画では、コンテストを謝崗鎮の青少年科学技術イノベーション教育ブランド活動と位置づけています。学生の創造的思考、実践力、知的財産意識を育てるとともに、企業資源と専門家の支援を活用し、教育的導き、実践的創新、成果保護、製品化をつなぐ循環を探ります。"
                            ]
                      ],
                      [
                            "地域、企業、方法論を結びつける",
                            [
                                  "謝崗鎮には良好な教育基盤と実践教育の場があります。地域では義務教育段階で週半日の実践活動を進め、銀瓶山森林公園や銀山湿地公園などの地域資源を活用した実践课程を開発しています。これは学校参加と地域ブランドづくりの土台になります。",
                                  "雅梵が提供するのは実際の産業シナリオです。同社は長年、スマートで健康的かつ科学的な飲水に注力し、スマート恒温カップ、冷水カップ、指紋温度表示カップなどの革新的製品を持ち、研究開発、設計、生産能力も備えています。カップをテーマにすることで、学生のアイデアを材料、構造、機能、外観、スマートハードウェア、製造プロセスへ落とし込めます。",
                                  "これは私が重視してきたイノベーション方法論そのものです。創新訓練は実際の問題から切り離せません。子どもがカップという日常製品をめぐって課題を発見し、解決案を出し、既存技術を調べ、モデルを設計し、価値を表現できれば、完全な創新能力の訓練を経験したことになります。"
                            ]
                      ],
                      [
                            "コンテストテーマ：科学技術で夢を築き、カップで未来を分かち合う",
                            [
                                  "提案されたテーマは、科学技術で夢を築き、カップで未来を分かち合う。カップの革新的デザインに焦点を当て、知的財産の力を照らす、というものです。",
                                  "応募作品はカップの創意設計と実物制作を中心に、機能革新、材料革新、造形革新、スマート化の革新を含みます。このテーマは学生が理解しやすく実行しやすい一方で、年齢や能力の異なる学生のアイデアを受け止める開放性もあります。",
                                  "コンテストは謝崗鎮内の小中学生を対象とし、小学生組と中学生組を設ける予定です。個人または3名以内のチームでの参加を奨励し、町内の義務教育段階の学校を対象とします。"
                            ]
                      ],
                      [
                            "四段階の流れ：アイデアからロードショーへ",
                            [
                                  "このコンテストは単発の作品募集ではなく、四つの段階として設計されています。",
                                  "第一段階は広報、参加促進、アイデア募集です。学生はテーマを理解し、企業の生産現場や研究開発ラボを訪れ、カップが設計から生産に至るまでの全工程を見ます。",
                                  "第二段階はイノベーション訓練と知的財産教育です。内容には創新方法論、知的財産の基礎、製品設計と制作指導、特許検索の実践が含まれます。重要なのは学生に創新しなさいと言うことではなく、方法を使って質の高いアイデアを生み出す方法を教えることです。",
                                  "第三段階は作品提出と審査です。応募区分には創意設計、実物制作、ロードショー発表があり、図面、アイデア説明、実物モデル、機能実現、表現力、プロジェクト完成度などを評価します。",
                                  "第四段階はロードショー決勝と表彰式です。ファイナリストは現場で自分のアイデアと作品を発表し、専門家の審査を受け、メディア発信を通じてイベントの影響力を広げます。"
                            ]
                      ],
                      [
                            "評価基準：知的財産意識を科創コンテストに組み込む",
                            [
                                  "企画の評価軸には、革新性、実用性、完成度、知的財産意識、発表表現が含まれます。",
                                  "知的財産意識は付け足しではありません。このコンテストが一般的なアイデアコンテストと異なる核心です。学生は、一つのアイデアが本当に価値を生むには、既存技術がどこにあり、自分の改善点がどこにあり、保護可能な技術方案になり得るかを理解する必要があります。",
                                  "これは私が長く強調してきた創新教育の論理でもあります。青少年の科創は見た目の目新しさだけを追うべきではなく、問題発見、情報検索、差異判断、成果保護、価値表現を少しずつ学ぶべきです。"
                            ]
                      ],
                      [
                            "成果転化：アイデアが製品になることを学生に見せる",
                            [
                                  "このコンテストのもう一つの重要な設計は、成果転化の仕組みを取り入れることです。市場性のある優れたアイデアについては、企業が製品開発の対象として選び、製品ラインに組み込み、学生に栄誉、氏名表示、賞金、見学、または後続開発への参加機会を与えることができます。",
                                  "これにより学生は、創意が紙の上の考えだけではないことを直接感じられます。イノベーションには価値があり、知的財産保護も遠い法律概念ではなく、アイデア、製品、市場を結ぶ橋なのです。",
                                  "企業にとって、若い世代の視点は新しい製品発想をもたらす可能性があります。地域にとっても、この仕組みは学校教育、企業創新、地域ブランド構築をつなぎます。"
                            ]
                      ],
                      [
                            "今後の展開：一度のコンテストから教育ブランドへ",
                            [
                                  "この企画では雅梵杯を一回限りの活動ではなく、継続的に開催できる年次コンテストとして設計しています。今後は初回の経験に基づいて制度と訓練内容を改善し、赛事の質と影響力を高めていけます。",
                                  "さらに、企業の研究開発ラボと生産現場を基盤に、市場監督部門、教育管理センター、学校と連携して青少年科学技術イノベーション・知的財産教育基地を共同でつくり、コンテスト資源と日常の実践课程を深く結びつけることもできます。",
                                  "初回コンテストの運営が成熟すれば、将来的には周辺の町や市全体へ広げ、優秀な成果を省級・国家級の青少年科学技術イノベーションコンテストにつなげることも可能です。"
                            ]
                      ],
                      [
                            "この事例が私の個人IPにとって意味すること",
                            [
                                  "雅梵杯謝崗青少年科学技術イノベーションコンテストは、私の創新方法論を青少年教育と地域産業の場に落とし込む一つの実践です。",
                                  "それは、イノベーションは訓練できる、という考えが単なるスローガンではないことを示しています。课程、赛事、企業訪問、特許検索、作品制作、ロードショー答弁、製品化を含む一つのシステムとして設計できるのです。",
                                  "特許審査官、発明者、弁理士から、創新方法論の研究者、青少年科創教材の著者へ。私がやりたいことは一貫しています。より多くの創新者が真の問題を見つけ、保護可能な技術方案を形成し、創新成果を実際に社会へ届けられるよう支援することです。"
                            ]
                      ]
                ]
          },
          "tr": {
                "docTitle": "Xiegang Yafan Cup Gençlik Bilim ve İnovasyon Yarışması Planlama Örneği | Ma Su",
                "docDescription": "Gençlik inovasyon eğitimi, fikri mülkiyet okuryazarlığı, kurumsal Ar-Ge kaynakları ve sonuçların ticarileştirilmesini birleştiren bir yarışma planlama örneği.",
                "eyebrow": "Gençlik İnovasyon Örneği / Yarışma Tasarımı",
                "title": "Yafan Cup Xiegang Gençlik Bilim ve İnovasyon Yarışması: İnovasyon metodolojisini gerçek bir sanayi ortamına taşımak",
                "deck": "Bu yalnızca öğrenciler için bir yaratıcılık yarışması değildir. Yerel eğitim, kurumsal Ar-Ge, fikri mülkiyet okuryazarlığı, patent araştırması, ürün tasarımı ve ticarileştirmeyi birleştiren bir gençlik inovasyon eğitimi modelidir.",
                "meta": [
                      "Yazar: Ma Su",
                      "Gençlik inovasyon yarışması örneği",
                      "Ma Su Team Bilgi Merkezi"
                ],
                "sections": [
                      [
                            "Neden Böyle Bir Yarışma Planlanmalı?",
                            [
                                  "Son yıllarda gençlere yönelik bilim ve teknoloji inovasyon eğitimi, ilgi etkinliklerinden kapsamlı yetkinlik gelişimine doğru ilerliyor. İnovasyon eğitimi yalnızca slogan düzeyinde kalırsa, öğrenciler bir fikrin gözlem, araştırma, tasarım ve üretimden fikri mülkiyet korumasına ve endüstriyel dönüşüme nasıl ilerlediğini gerçekten anlayamaz.",
                                  "Yafan Cup Xiegang Gençlik Bilim ve İnovasyon Yarışması'nın temel çıkış noktası, inovasyon eğitimini fikri mülkiyet eğitimiyle birleştirmek ve öğrencilerin gerçek bir sanayi ortamında eksiksiz bir inovasyon deneyimi yaşamalarını sağlamaktır.",
                                  "Plan, yarışmayı Xiegang Kasabası için bir gençlik bilim ve teknoloji inovasyon eğitimi marka etkinliği olarak konumlandırıyor. Öğrencilerin yaratıcı düşünme, uygulama becerisi ve fikri mülkiyet bilincini geliştirmeyi amaçlarken, kurumsal kaynaklar ve uzman desteğiyle eğitim rehberliği, pratik inovasyon, sonuç koruması ve ürün dönüşümünden oluşan bir döngüyü araştırıyor."
                            ]
                      ],
                      [
                            "Yerel Kaynaklar, Kurumsal Senaryolar ve Metodolojiyi Birleştirmek",
                            [
                                  "Xiegang Kasabası güçlü bir eğitim temelinin ve pratik eğitim senaryolarının üzerine kuruludur. Bölge, zorunlu eğitim aşamasında haftada yarım günlük uygulama planını teşvik ediyor ve Yinping Dağı Orman Parkı ile Yinshan Sulak Alan Parkı gibi yerel kaynaklar etrafında uygulamalı dersler geliştiriyor. Bu, okulların katılımı ve bölgesel marka inşası için bir temel sağlar.",
                                  "Yafan ise gerçek bir sanayi senaryosu sunar. Şirket uzun süredir akıllı, sağlıklı ve bilimsel içme deneyimine odaklanıyor; akıllı sabit sıcaklık bardakları, soğutma bardakları ve parmak iziyle sıcaklık gösteren bardaklar gibi yenilikçi ürünlerin yanı sıra Ar-Ge, tasarım ve üretim yeteneklerine sahiptir. Bardak temasını kullanmak, öğrencilerin fikirlerini malzeme, yapı, işlev, görünüm, akıllı donanım ve üretim süreçlerine dayandırır.",
                                  "Bu, inovasyon metodolojimde en çok önem verdiğim noktadır: inovasyon eğitimi gerçek problemlerden ayrılamaz. Bir çocuk bardak gibi günlük bir ürün etrafında sorun noktalarını keşfedebiliyor, çözüm önerebiliyor, mevcut teknolojileri araştırabiliyor, model tasarlayabiliyor ve değeri ifade edebiliyorsa, eksiksiz bir inovasyon yetkinliği çalışması yapmış demektir."
                            ]
                      ],
                      [
                            "Yarışma Teması: İnovasyonla Hayal Kurmak, Bardaklarla Geleceği Paylaşmak",
                            [
                                  "Önerilen tema şudur: İnovasyonla hayal kurmak, bardaklarla geleceği paylaşmak; bardak inovasyon tasarımına odaklanmak ve fikri mülkiyetin gücünü görünür kılmak.",
                                  "Başvurular yaratıcı bardak tasarımı ve fiziksel üretime odaklanır; işlevsel inovasyon, malzeme inovasyonu, biçim inovasyonu ve akıllı inovasyonu kapsar. Bu tema öğrencilerin anlayıp uygulayabileceği kadar somut, farklı yaş ve yetenek düzeylerinden fikirleri barındıracak kadar da açıktır.",
                                  "Yarışma, Xiegang Kasabası'ndaki ilkokul ve ortaokul öğrencilerine açıktır. İlkokul ve ortaokul gruplarının oluşturulması, bireysel katılımın veya üç kişiye kadar ekiplerin teşvik edilmesi ve kasabadaki zorunlu eğitim okullarının kapsanması planlanmaktadır."
                            ]
                      ],
                      [
                            "Dört Aşamalı Süreç: Fikirden Roadshow'a",
                            [
                                  "Yarışma tek seferlik bir eser toplama etkinliği olarak değil, dört aşamalı bir süreç olarak tasarlanmıştır.",
                                  "İlk aşama tanıtım, mobilizasyon ve fikir toplamadır. Öğrenciler temayı anlar, üretim atölyelerini ve Ar-Ge laboratuvarlarını ziyaret eder, bir bardağın tasarımdan üretime uzanan tüm sürecini görür.",
                                  "İkinci aşama inovasyon eğitimi ve fikri mülkiyet eğitimidir. Eğitim; inovasyon metodolojisi, fikri mülkiyet temelleri, ürün tasarımı ve üretim rehberliği ile patent araştırması uygulamasını kapsar. Asıl mesele öğrencilere inovasyon yapmalarını söylemek değil, yöntem kullanarak kaliteli fikir üretmeyi öğretmektir.",
                                  "Üçüncü aşama eser teslimi ve değerlendirmedir. Başvuru kategorileri yaratıcı tasarım, fiziksel üretim ve roadshow sunumunu içerir; çizimler, fikir açıklamaları, fiziksel modeller, işlevin gerçekleştirilmesi, ifade becerisi ve proje bütünlüğü değerlendirilir.",
                                  "Dördüncü aşama roadshow finali ve ödül törenidir. Finale kalan öğrenciler fikirlerini ve eserlerini sahada sunar, uzman değerlendirmesi alır ve medya duyurularıyla etkinliğin etkisi genişletilir."
                            ]
                      ],
                      [
                            "Değerlendirme Standartları: Fikri Mülkiyet Bilincini İnovasyon Yarışmasına Katmak",
                            [
                                  "Plandaki değerlendirme boyutları inovasyon, pratiklik, tamamlanma kalitesi, fikri mülkiyet bilinci ve sunumu içerir.",
                                  "Fikri mülkiyet bilinci bir ek unsur değildir. Bu yarışmayı sıradan bir yaratıcılık yarışmasından ayıran temel farktır. Öğrenciler, bir fikrin gerçek değer yaratması için mevcut teknolojilerin nerede olduğunu, kendi iyileştirme noktasının nerede bulunduğunu ve korunabilir bir teknik çözüm oluşturup oluşturamayacağını anlamalıdır.",
                                  "Bu, uzun süredir vurguladığım inovasyon eğitimi mantığıdır: gençlik inovasyonu yalnızca yeni görünen şeylerin peşinden gitmemeli; öğrenciler problem keşfetmeyi, bilgi aramayı, farklılıkları değerlendirmeyi, sonuçları korumayı ve değeri ifade etmeyi aşamalı olarak öğrenmelidir."
                            ]
                      ],
                      [
                            "Ticarileştirme: Öğrencilerin Fikirlerin Ürüne Dönüşebildiğini Görmesi",
                            [
                                  "Yarışmanın bir diğer önemli tasarımı, sonuçların ticarileştirilmesi mekanizmasını dahil etmesidir. Pazar potansiyeli olan seçkin fikirler için şirket ürün geliştirme yapmayı, bunları ürün hattına eklemeyi ve öğrencilere onur, isim atfı, ödül, ziyaret veya sonraki geliştirme sürecine katılım fırsatları sunmayı seçebilir.",
                                  "Bu, öğrencilerin yaratıcılığın yalnızca kağıt üzerindeki bir fikir olmadığını doğrudan hissetmelerini sağlar. İnovasyonun değeri vardır; fikri mülkiyet koruması da uzak bir hukuki kavram değil, fikirleri, ürünleri ve pazarları birbirine bağlayan bir köprüdür.",
                                  "Şirket için gençlerin bakış açısı yeni ürün ilhamı getirebilir. Yerel yönetim açısından ise bu mekanizma okul eğitimini, kurumsal inovasyonu ve bölgesel marka inşasını birbirine bağlar."
                            ]
                      ],
                      [
                            "Sonraki Plan: Tek Bir Yarışmadan Eğitim Markasına",
                            [
                                  "Plan, Yafan Cup'ı tek seferlik bir etkinlik yerine sürdürülebilir yıllık bir yarışma olarak tasarlar. Gelecek edisyonlar, ilk deneyime dayanarak yarışma sistemini ve eğitim içeriğini optimize edebilir, kaliteyi ve etkiyi kademeli olarak artırabilir.",
                                  "Daha ileri aşamada proje, şirketin Ar-Ge laboratuvarlarına ve üretim atölyelerine dayanarak piyasa düzenleme birimleri, eğitim yönetim merkezleri ve okullarla birlikte Gençlik İnovasyon ve Fikri Mülkiyet Eğitim Üssü kurabilir; yarışma kaynaklarını günlük uygulamalı derslerle derinlemesine bütünleştirebilir.",
                                  "İlk yarışma olgun biçimde işlerse, gelecekte çevre kasabalara ve hatta tüm şehre kademeli olarak genişleyebilir; aynı zamanda başarılı sonuçların il düzeyi ve ulusal gençlik bilim ve teknoloji inovasyon yarışmalarıyla bağlantı kurmasına yardımcı olabilir."
                            ]
                      ],
                      [
                            "Bu Örneğin Kişisel IP'm İçin Anlamı",
                            [
                                  "Yafan Cup Xiegang Gençlik Bilim ve İnovasyon Yarışması, inovasyon metodolojimin gençlik eğitimi ve yerel sanayi ortamlarında uygulanmasıdır.",
                                  "Bu örnek, inovasyon eğitilebilir sözünün bir slogan olmadığını kanıtlar. Dersler, yarışmalar, şirket ziyaretleri, patent araştırması, eser üretimi, roadshow savunması ve ürün dönüşümünden oluşan eksiksiz bir sisteme tasarlanabilir.",
                                  "Patent inceleme uzmanı, mucit ve patent vekilinden inovasyon metodolojisi araştırmacısına ve gençlik inovasyon ders kitabı yazarına uzanan yolda yapmak istediğim şey hep aynıdır: daha fazla yenilikçinin gerçek problemleri bulmasına, korunabilir teknik çözümler oluşturmasına ve inovasyon sonuçlarını gerçekten hayata geçirmesine yardımcı olmak."
                            ]
                      ]
                ]
          },
          "vi": {
                "docTitle": "Trường hợp lập kế hoạch Cuộc thi Sáng tạo Khoa học Thanh thiếu niên Xiegang Yafan Cup | Ma Su",
                "docDescription": "Một trường hợp lập kế hoạch cuộc thi kết nối giáo dục đổi mới thanh thiếu niên, hiểu biết sở hữu trí tuệ, nguồn lực R&D của doanh nghiệp và chuyển hóa kết quả.",
                "eyebrow": "Trường hợp đổi mới thanh thiếu niên / Thiết kế cuộc thi",
                "title": "Yafan Cup Xiegang: Đưa phương pháp luận đổi mới vào bối cảnh công nghiệp thực tế",
                "deck": "Đây không chỉ là một cuộc thi ý tưởng của học sinh, mà là mô hình giáo dục đổi mới thanh thiếu niên kết nối giáo dục địa phương, R&D doanh nghiệp, hiểu biết sở hữu trí tuệ, tra cứu sáng chế, thiết kế sản phẩm và thương mại hóa.",
                "meta": [
                      "Tác giả: Ma Su",
                      "Trường hợp cuộc thi đổi mới thanh thiếu niên",
                      "Trung tâm tri thức Ma Su Team"
                ],
                "sections": [
                      [
                            "Vì sao cần lập kế hoạch cho một cuộc thi như vậy?",
                            [
                                  "Những năm gần đây, giáo dục đổi mới khoa học và công nghệ cho thanh thiếu niên đang chuyển từ hoạt động sở thích sang bồi dưỡng năng lực tổng hợp. Nếu giáo dục đổi mới chỉ dừng ở khẩu hiệu, học sinh khó có thể thật sự hiểu một ý tưởng đi từ quan sát, nghiên cứu, thiết kế, chế tạo đến bảo hộ sở hữu trí tuệ và chuyển hóa công nghiệp như thế nào.",
                                  "Điểm xuất phát cốt lõi của Cuộc thi Sáng tạo Khoa học Thanh thiếu niên Xiegang Yafan Cup là kết hợp giáo dục đổi mới với giáo dục sở hữu trí tuệ, để học sinh hoàn thành một trải nghiệm đổi mới trọn vẹn trong bối cảnh công nghiệp thực tế.",
                                  "Kế hoạch định vị cuộc thi là hoạt động thương hiệu giáo dục đổi mới khoa học và công nghệ thanh thiếu niên của thị trấn Xiegang. Hoạt động phục vụ việc bồi dưỡng tư duy sáng tạo, năng lực thực hành và ý thức sở hữu trí tuệ của học sinh, đồng thời dựa vào nguồn lực doanh nghiệp và hỗ trợ chuyên gia để khám phá vòng khép kín gồm định hướng giáo dục, đổi mới thực tiễn, bảo vệ thành quả và chuyển hóa sản phẩm."
                            ]
                      ],
                      [
                            "Kết hợp địa phương, doanh nghiệp và phương pháp luận",
                            [
                                  "Thị trấn Xiegang có nền tảng giáo dục và bối cảnh thực hành tốt. Địa phương đang thúc đẩy kế hoạch nửa ngày mỗi tuần trong giai đoạn giáo dục bắt buộc, đồng thời phát triển các khóa học thực hành quanh những tài nguyên như Công viên rừng núi Yinping và Công viên đất ngập nước Yinshan. Điều này tạo nền tảng cho sự tham gia của nhà trường và xây dựng thương hiệu khu vực.",
                                  "Yafan cung cấp một bối cảnh công nghiệp thực tế. Doanh nghiệp này lâu nay tập trung vào uống nước thông minh, lành mạnh và khoa học, có các sản phẩm đổi mới như cốc giữ nhiệt thông minh, cốc làm mát, cốc hiển thị nhiệt độ bằng vân tay, đồng thời có năng lực R&D, thiết kế và sản xuất. Lấy chiếc cốc làm chủ đề giúp ý tưởng của học sinh bám vào vật liệu, kết cấu, chức năng, hình dáng, phần cứng thông minh và quy trình chế tạo.",
                                  "Đây chính là điều phương pháp luận đổi mới của tôi coi trọng nhất: huấn luyện đổi mới không thể tách khỏi vấn đề thật. Nếu một đứa trẻ có thể phát hiện điểm đau, đề xuất giải pháp, tra cứu công nghệ hiện có, thiết kế mô hình và diễn đạt giá trị quanh một sản phẩm hằng ngày như chiếc cốc, em đó đã hoàn thành một bài luyện năng lực đổi mới trọn vẹn."
                            ]
                      ],
                      [
                            "Chủ đề cuộc thi: Dựng ước mơ bằng khoa học, cùng chiếc cốc chia sẻ tương lai",
                            [
                                  "Chủ đề đề xuất là: Dựng ước mơ bằng khoa học, cùng chiếc cốc chia sẻ tương lai; tập trung vào thiết kế đổi mới cho cốc và thắp sáng sức mạnh của sở hữu trí tuệ.",
                                  "Tác phẩm dự thi tập trung vào thiết kế sáng tạo và chế tạo vật thật của cốc, bao gồm đổi mới chức năng, đổi mới vật liệu, đổi mới tạo hình và đổi mới thông minh. Chủ đề này đủ cụ thể để học sinh hiểu và thao tác, nhưng cũng đủ mở để chứa đựng ý tưởng của các độ tuổi và mức năng lực khác nhau.",
                                  "Cuộc thi hướng tới học sinh tiểu học và trung học trong thị trấn Xiegang. Kế hoạch dự kiến lập nhóm tiểu học và nhóm trung học, khuyến khích cá nhân hoặc đội tối đa ba học sinh tham gia, bao phủ các trường trong giai đoạn giáo dục bắt buộc của toàn thị trấn."
                            ]
                      ],
                      [
                            "Quy trình bốn giai đoạn: Từ ý tưởng đến roadshow",
                            [
                                  "Cuộc thi được thiết kế thành bốn giai đoạn, không phải một lần thu tác phẩm đơn lẻ.",
                                  "Giai đoạn thứ nhất là truyền thông, vận động và thu thập ý tưởng. Học sinh hiểu chủ đề, tham quan xưởng sản xuất và phòng thí nghiệm R&D của doanh nghiệp, nhìn thấy toàn bộ quá trình một chiếc cốc đi từ thiết kế đến sản xuất.",
                                  "Giai đoạn thứ hai là đào tạo đổi mới và giáo dục sở hữu trí tuệ. Nội dung bao gồm phương pháp luận đổi mới, kiến thức cơ bản về sở hữu trí tuệ, hướng dẫn thiết kế và chế tạo sản phẩm, thực hành tra cứu sáng chế. Điều quan trọng không phải là bảo học sinh hãy đổi mới, mà là dạy các em dùng phương pháp để tạo ra ý tưởng chất lượng cao.",
                                  "Giai đoạn thứ ba là nộp tác phẩm và đánh giá. Các hạng mục dự thi gồm thiết kế sáng tạo, chế tạo vật thật và trình bày roadshow; đánh giá qua bản vẽ, thuyết minh ý tưởng, mô hình thực vật, mức độ hiện thực hóa chức năng, năng lực diễn đạt và độ hoàn chỉnh của dự án.",
                                  "Giai đoạn thứ tư là chung kết roadshow và lễ trao giải. Học sinh vào chung kết trình bày ý tưởng và tác phẩm tại hiện trường, nhận đánh giá từ chuyên gia, đồng thời mở rộng ảnh hưởng của sự kiện thông qua truyền thông."
                            ]
                      ],
                      [
                            "Tiêu chuẩn đánh giá: Đưa ý thức sở hữu trí tuệ vào cuộc thi khoa học sáng tạo",
                            [
                                  "Các chiều đánh giá trong kế hoạch bao gồm tính đổi mới, tính thực dụng, mức độ hoàn thành, ý thức sở hữu trí tuệ và khả năng trình bày.",
                                  "Ý thức sở hữu trí tuệ không phải là phần thêm vào. Đây là điểm khác biệt then chốt giữa cuộc thi này và một cuộc thi sáng tạo thông thường. Học sinh cần hiểu rằng nếu một ý tưởng muốn tạo ra giá trị thật, các em phải biết công nghệ hiện có nằm ở đâu, điểm cải tiến của mình ở đâu, và liệu nó có thể hình thành một giải pháp kỹ thuật có thể được bảo hộ hay không.",
                                  "Đây cũng là logic giáo dục đổi mới mà tôi luôn nhấn mạnh: khoa học sáng tạo thanh thiếu niên không nên chỉ theo đuổi thứ trông có vẻ mới lạ. Học sinh cần dần học cách phát hiện vấn đề, tra cứu thông tin, phán đoán khác biệt, bảo vệ kết quả và trình bày giá trị."
                            ]
                      ],
                      [
                            "Chuyển hóa kết quả: Để học sinh thấy ý tưởng có thể thành sản phẩm",
                            [
                                  "Một thiết kế quan trọng khác của cuộc thi là đưa vào cơ chế chuyển hóa kết quả. Với những ý tưởng xuất sắc có tiềm năng thị trường, doanh nghiệp có thể chọn phát triển sản phẩm, đưa vào dòng sản phẩm, đồng thời trao cho học sinh danh dự, ghi tên, tiền thưởng, chuyến tham quan hoặc cơ hội tham gia phát triển tiếp theo.",
                                  "Điều này giúp học sinh trực tiếp cảm nhận rằng sáng tạo không chỉ là ý tưởng trên giấy. Đổi mới có giá trị, và bảo hộ sở hữu trí tuệ cũng không phải khái niệm pháp lý xa vời mà là cây cầu kết nối ý tưởng, sản phẩm và thị trường.",
                                  "Đối với doanh nghiệp, góc nhìn của người trẻ cũng có thể mang đến cảm hứng sản phẩm mới. Đối với địa phương, cơ chế này kết nối giáo dục nhà trường, đổi mới của doanh nghiệp và xây dựng thương hiệu khu vực."
                            ]
                      ],
                      [
                            "Kế hoạch tiếp theo: Từ một cuộc thi thành một thương hiệu giáo dục",
                            [
                                  "Kế hoạch thiết kế Yafan Cup như một cuộc thi thường niên bền vững, không phải sự kiện một lần. Các kỳ sau có thể dựa trên kinh nghiệm kỳ đầu để tối ưu hệ thống thi và nội dung đào tạo, từng bước nâng cao chất lượng và ảnh hưởng.",
                                  "Xa hơn, dự án có thể dựa vào phòng thí nghiệm R&D và xưởng sản xuất của doanh nghiệp, cùng cơ quan quản lý thị trường, trung tâm quản lý giáo dục và nhà trường xây dựng Cơ sở Giáo dục Đổi mới Thanh thiếu niên và Sở hữu trí tuệ, kết hợp sâu tài nguyên cuộc thi với các khóa học thực hành hằng ngày.",
                                  "Nếu cuộc thi đầu tiên vận hành chín muồi, tương lai có thể từng bước mở rộng sang các thị trấn lân cận, thậm chí toàn thành phố, đồng thời giúp các kết quả xuất sắc kết nối với các cuộc thi đổi mới khoa học và công nghệ thanh thiếu niên cấp tỉnh và cấp quốc gia."
                            ]
                      ],
                      [
                            "Trường hợp này có ý nghĩa gì với IP cá nhân của tôi",
                            [
                                  "Cuộc thi Sáng tạo Khoa học Thanh thiếu niên Xiegang Yafan Cup là một lần triển khai phương pháp luận đổi mới của tôi trong giáo dục thanh thiếu niên và bối cảnh công nghiệp địa phương.",
                                  "Nó chứng minh rằng câu nói đổi mới có thể được huấn luyện không phải khẩu hiệu. Nó có thể được thiết kế thành một hệ thống hoàn chỉnh gồm khóa học, cuộc thi, tham quan doanh nghiệp, tra cứu sáng chế, chế tạo tác phẩm, bảo vệ roadshow và chuyển hóa sản phẩm.",
                                  "Từ thẩm định viên sáng chế, nhà phát minh, đại diện sáng chế, đến người nghiên cứu phương pháp luận đổi mới và tác giả giáo trình khoa học sáng tạo thanh thiếu niên, điều tôi muốn làm luôn nhất quán: giúp nhiều nhà đổi mới hơn tìm thấy vấn đề thật, hình thành giải pháp kỹ thuật có thể bảo hộ và đưa thành quả đổi mới thật sự đi vào thực tế."
                            ]
                      ]
                ]
          }
    },
    "correct-understanding-of-patent-mining": {
      "en": {
        docTitle: "A Correct Understanding of Patent Mining | Ma Su",
        docDescription: "Patent mining should not be reduced to extracting existing R&D results; it should map possible variations of existing technologies through claims.",
        eyebrow: "Patent Mining Methodology / Original Essay",
        title: "A Correct Understanding of Patent Mining",
        deck: "Original article from Topology Innovation. The key point is that effective patent mining is not a reward for hard work alone, but a method for finding protectable technical variation before and around R&D.",
        meta: ["By uncle ma", "2018-08-21", "Topology Innovation WeChat article"],
        sections: [["Original Text", [
          "Official account: Topology Innovation. Author: uncle ma. Published: 2018-08-21. Original link: https://mp.weixin.qq.com/s/-FBUOjLO6HsrBRrtyObhGg.",
          "Technological innovation affects people's lives in many ways, and it has also become one of the most important components of enterprise economic activity.",
          "As a successful sign of technological innovation, patents play a complex and subtle role in social innovation. On one hand, they protect operating companies that actively innovate and know how to use patents, as well as non-practicing entities that are especially skilled at using patent weapons. On the other hand, patents can ruthlessly eliminate companies that cannot innovate technologically or cannot use patents effectively.",
          "As intellectual property enforcement becomes increasingly strict, patents have become an increasingly real issue that enterprises must face for development and even survival. Yet for many companies, how to obtain patent protection remains unclear, and a considerable number still do not understand how to carry out patent mining.",
          "So how should patent mining be done? First, we must correctly understand patent mining. A common misconception is that most companies treat patent mining as extracting the R&D process or results into patent application documents, and naturally assume that the probability of invention grant is proportional to the hardship of the R&D process. In short, they understand patent mining as a process in which hard work will automatically be rewarded.",
          "But patent mining is by no means a simple matter of heaven rewarding diligence. Just as many applicants repeatedly emphasize in responses to inventive-step objections how hard they worked on the invention yet still receive rejections, the idea that effort naturally brings the corresponding patent result is only wishful thinking. In many cases, hard work merely increases the number of patent applications, without improving the number of granted patents, let alone helping a company use patents to defend itself or attack competitors.",
          "Patent mining, or correct and effective patent mining, should be this: on the basis of a large amount of existing technology, use patent application documents, mainly claims, to describe possible variations of existing technology. In other words, contrary to common corporate understanding, patent mining can exist independently from the R&D process. In fact, many successful cases show that patent mining can move ahead of enterprise R&D and guide its direction.",
          "Therefore, when patent mining professionals, or what I often call patent mining engineers, understand existing technology and possess certain patent skills, they can carry out efficient, high-quality patent mining and obtain a considerable number of high-quality patents.",
          "The patent skills involved in patent mining will be discussed with everyone next.",
        ]],
        ],
      },
      "zh-hk": {
        docTitle: "專利挖掘的正確認知 | Ma Su",
        docDescription: "專利挖掘不應被簡化為提煉既有研發成果，而應是在現有技術基礎上，用權利要求描繪可能的技術變化。",
        eyebrow: "Patent Mining Methodology / 專利挖掘",
        title: "專利挖掘的正確認知",
        deck: "原載拓撲科創。真正有效的專利挖掘，不是把研發辛苦程度換成授權概率，而是在研發前後發現可保護的技術變化。",
        meta: ["作者：uncle ma", "2018-08-21", "拓撲科創公眾號文章"],
        sections: [["原文", [
          "公眾號：拓撲科創。作者：uncle ma。發布日期：2018-08-21。原文鏈接：https://mp.weixin.qq.com/s/-FBUOjLO6HsrBRrtyObhGg。",
          "技術創新以各種方式影響着人們的生活，同時也已經成為企業經濟活動中最重要的組成部分。",
          "作為技術創新的成功標誌，專利對社會技術創新的作用是複雜而微妙的。它一方面保護積極創新、又善於運用專利武器的實體企業，以及那些特別善於運用專利武器的非專利實施主體（NPE）；另一方面，它又會殘酷淘汰那些不能進行技術創新和/或不能運用專利武器的實體企業。",
          "隨着知識產權執法愈加嚴厲，專利已經成為企業發展乃至生存不得不面對的現實問題。但對很多企業而言，怎樣才能獲得專利保護往往不得其法，甚至相當一部分企業不能理解如何進行專利挖掘。",
          "那麼如何進行專利挖掘呢？首先我們要正確理解專利挖掘。這裡先要探討一個普遍認知誤區：絕大多數企業把專利挖掘理解為將研發過程或成果提煉成專利申請文件，並順理成章地認為發明授權概率與研發過程的艱辛程度成正比。簡言之，就是把專利挖掘理解為一個種瓜得瓜、種豆得豆，辛苦就能獲得回報的過程。",
          "但是專利挖掘絕非簡單的天道酬勤。正如很多申請人在答覆創造性審查意見時反覆強調自己如何千辛萬苦做出本發明，卻仍然被駁回一樣，所謂種瓜得瓜、種豆得豆只是一廂情願。很多情況下，辛苦換來的只是專利申請量增加，對專利授權量毫無影響，更談不上如何利用專利武器保衛企業和進攻對手。",
          "專利挖掘，或者說正確有效的專利挖掘，應當是在大量現有技術的現實基礎上，用專利申請文件，主要是權利要求書，描繪現有技術的可能變化。換句話說，與企業的普遍認知相反，專利挖掘可以完全脫離研發過程而單獨存在。事實上，大量成功案例都證明，專利挖掘完全可以走在企業研發前面，去指導研發方向。",
          "因此，專利挖掘工作者，也就是我常說的專利挖掘師，只要能把握現有技術並具備一定專利技巧，就能進行高效、高質量的專利挖掘，並獲得相當數量的高質量專利。",
          "專利挖掘中的專利技巧，接下來繼續與大家探討。",
        ]],
        ],
      },
      "ja": {
        docTitle: "特許発掘を正しく理解する | Ma Su",
        docDescription: "特許発掘は既存の研究開発成果を抽出する作業ではなく、既存技術の可能な変化を請求項で描く方法である。",
        eyebrow: "Patent Mining Methodology / 特許発掘",
        title: "特許発掘を正しく理解する",
        deck: "Topology Innovation 掲載記事。効果的な特許発掘とは、努力量を権利化可能性に置き換えることではなく、研究開発の前後で保護可能な技術変化を見つけることです。",
        meta: ["著者：uncle ma", "2018-08-21", "Topology Innovation WeChat 記事"],
        sections: [["原文", [
          "公式アカウント：Topology Innovation。著者：uncle ma。公開日：2018-08-21。原文リンク：https://mp.weixin.qq.com/s/-FBUOjLO6HsrBRrtyObhGg。",
          "技術革新はさまざまな形で人々の生活に影響を与えており、同時に企業の経済活動において最も重要な構成要素の一つになっています。",
          "技術革新の成功を示すものとして、特許が社会の技術革新に果たす役割は複雑で繊細です。一方では、積極的に革新し、特許という武器を上手に使う事業会社や、特許活用に非常に長けた非実施主体（NPE）を保護します。他方では、技術革新ができない、または特許を活用できない事業会社を厳しく淘汰します。",
          "知的財産権の執行がますます厳しくなる中で、特許は企業の発展、さらには生存において避けて通れない現実的な問題になっています。しかし多くの企業にとって、どのように特許保護を得るべきかは十分に理解されておらず、特許発掘の進め方を理解していない企業も少なくありません。",
          "では、特許発掘はどのように行うべきでしょうか。まず特許発掘を正しく理解する必要があります。ここで取り上げたい一般的な誤解は、多くの企業が特許発掘を、研究開発の過程や成果を抽出して特許出願書類にすることだと考えている点です。そして、発明の権利化確率は研究開発の苦労の大きさに比例すると自然に考えてしまいます。要するに、努力すれば相応の成果が得られる過程として特許発掘を理解しているのです。",
          "しかし特許発掘は、単純に努力が報われる行為ではありません。多くの出願人が進歩性拒絶への応答で、自分たちがどれほど苦労して発明を完成させたかを繰り返し強調しても拒絶されることがあります。努力すればそのまま特許になるという考えは願望にすぎません。多くの場合、努力で増えるのは特許出願件数だけで、特許登録件数には影響せず、ましてや特許を使って企業を守り競合を攻めることにはつながりません。",
          "特許発掘、あるいは正しく有効な特許発掘とは、大量の既存技術という現実を前提に、特許出願書類、主に請求項によって既存技術の可能な変化を描くことです。つまり企業の一般的な理解とは反対に、特許発掘は研究開発過程から独立して存在できます。実際、多くの成功例は、特許発掘が企業の研究開発に先行し、その方向を導けることを示しています。",
          "したがって、特許発掘の担当者、私がよく特許発掘師と呼ぶ人は、既存技術を把握し一定の特許スキルを備えていれば、効率よく高品質な特許発掘を行い、相当数の高品質な特許を得ることができます。",
          "特許発掘における特許スキルについては、次回引き続き議論します。",
        ]],
        ],
      },
      "tr": {
        docTitle: "Patent Madenciliğini Doğru Anlamak | Ma Su",
        docDescription: "Patent madenciliği mevcut Ar-Ge sonuçlarını çıkarmaya indirgenmemeli; istemlerle mevcut teknolojinin olası varyasyonlarını haritalamalıdır.",
        eyebrow: "Patent Mining Methodology / Patent Madenciliği",
        title: "Patent Madenciliğini Doğru Anlamak",
        deck: "Topology Innovation'dan orijinal yazı. Etkili patent madenciliği, emeği doğrudan tescil olasılığına çevirmek değil, Ar-Ge'nin önünde ve çevresinde korunabilir teknik varyasyonları bulmaktır.",
        meta: ["Yazar: uncle ma", "2018-08-21", "Topology Innovation WeChat yazısı"],
        sections: [["Orijinal Metin", [
          "Resmi hesap: Topology Innovation. Yazar: uncle ma. Yayın tarihi: 2018-08-21. Orijinal bağlantı: https://mp.weixin.qq.com/s/-FBUOjLO6HsrBRrtyObhGg.",
          "Teknolojik inovasyon insanların yaşamını çeşitli biçimlerde etkiler ve aynı zamanda işletmelerin ekonomik faaliyetlerinin en önemli parçalarından biri haline gelmiştir.",
          "Teknolojik inovasyonun başarılı bir göstergesi olarak patentlerin toplumsal inovasyondaki rolü karmaşık ve inceliklidir. Bir yandan aktif biçimde yenilik yapan ve patent silahını iyi kullanan işletmeleri, ayrıca patent silahını özellikle iyi kullanan patent dışı uygulama kuruluşlarını (NPE) korur. Diğer yandan, teknolojik inovasyon yapamayan veya patent silahını kullanamayan işletmeleri acımasızca eler.",
          "Fikri mülkiyet uygulaması giderek sertleşirken, patentler işletmelerin gelişimi ve hatta hayatta kalması için yüzleşmek zorunda oldukları daha gerçekçi bir mesele haline gelmiştir. Ancak birçok işletme için patent korumasının nasıl elde edileceği hâlâ belirsizdir; önemli bir kısmı patent madenciliğinin nasıl yapılacağını bile anlamamaktadır.",
          "O halde patent madenciliği nasıl yapılmalıdır? Önce patent madenciliğini doğru anlamalıyız. Burada yaygın bir yanılgıyı tartışmak gerekir: çoğu işletme patent madenciliğini, Ar-Ge sürecini veya sonucunu ayıklayıp patent başvuru belgelerine dönüştürmek olarak görür ve buluşun tescil olasılığının Ar-Ge sürecindeki zorlukla doğru orantılı olduğunu düşünür. Kısacası patent madenciliğini, emek verildiğinde otomatik olarak karşılık alınacak bir süreç sanır.",
          "Ancak patent madenciliği basitçe çalışkanlığın ödüllendirildiği bir iş değildir. Birçok başvuru sahibinin buluş basamağı itirazlarına cevap verirken bu buluşu ne kadar zorlukla yaptıklarını tekrar tekrar vurgulamasına rağmen reddedilmesi gibi, emek verilince doğrudan patent sonucu doğacağı fikri yalnızca temennidir. Çoğu durumda emek yalnızca patent başvuru sayısını artırır; patent tescil sayısına hiçbir etkisi olmaz, şirketi savunmak veya rakibe saldırmak için patent silahını kullanmaktan ise hiç söz edilemez.",
          "Patent madenciliği, yani doğru ve etkili patent madenciliği, çok sayıda mevcut teknolojinin gerçekliği temelinde, patent başvuru belgeleriyle, özellikle istemlerle mevcut teknolojinin olası değişimlerini tanımlamaktır. Başka bir deyişle, işletmelerin yaygın anlayışının tersine patent madenciliği Ar-Ge sürecinden tamamen bağımsız olarak var olabilir. Nitekim çok sayıda başarılı örnek, patent madenciliğinin şirket Ar-Ge'sinin önüne geçip yönünü belirleyebileceğini göstermiştir.",
          "Bu nedenle patent madenciliği yapan kişi, benim sıkça patent madenciliği mühendisi dediğim kişi, mevcut teknolojiyi kavrayıp belirli patent becerilerine sahip olduğunda verimli ve kaliteli patent madenciliği yapabilir ve kayda değer sayıda yüksek kaliteli patent elde edebilir.",
          "Patent madenciliğindeki patent becerilerini sonraki yazıda tartışmaya devam edeceğiz.",
        ]],
        ],
      },
      "vi": {
        docTitle: "Nhận thức đúng về khai thác sáng chế | Ma Su",
        docDescription: "Khai thác sáng chế không nên bị giản lược thành việc rút ra kết quả R&D hiện có; nó cần dùng yêu cầu bảo hộ để mô tả các biến thể có thể có của công nghệ hiện hữu.",
        eyebrow: "Patent Mining Methodology / Khai thác sáng chế",
        title: "Nhận thức đúng về khai thác sáng chế",
        deck: "Bài gốc từ Topology Innovation. Khai thác sáng chế hiệu quả không phải là đổi sự vất vả của R&D lấy xác suất được cấp bằng, mà là tìm ra biến thể kỹ thuật có thể bảo hộ trước và quanh quá trình R&D.",
        meta: ["Tác giả: uncle ma", "2018-08-21", "Bài viết WeChat Topology Innovation"],
        sections: [["Văn bản gốc", [
          "Tài khoản công chúng: Topology Innovation. Tác giả: uncle ma. Ngày đăng: 2018-08-21. Liên kết gốc: https://mp.weixin.qq.com/s/-FBUOjLO6HsrBRrtyObhGg.",
          "Đổi mới công nghệ ảnh hưởng đến đời sống con người theo nhiều cách, đồng thời đã trở thành một trong những thành phần quan trọng nhất trong hoạt động kinh tế của doanh nghiệp.",
          "Là dấu hiệu thành công của đổi mới công nghệ, vai trò của sáng chế đối với đổi mới kỹ thuật trong xã hội rất phức tạp và tinh tế. Một mặt, nó bảo vệ các doanh nghiệp thực thể tích cực đổi mới và giỏi sử dụng vũ khí sáng chế, cũng như các chủ thể không thực hiện sáng chế (NPE) đặc biệt giỏi sử dụng vũ khí sáng chế. Mặt khác, nó cũng sẽ đào thải khắc nghiệt những doanh nghiệp không thể đổi mới công nghệ hoặc không biết sử dụng vũ khí sáng chế.",
          "Khi việc thực thi sở hữu trí tuệ ngày càng nghiêm khắc, sáng chế đã trở thành vấn đề ngày càng thực tế mà doanh nghiệp phải đối mặt để phát triển, thậm chí để tồn tại. Nhưng với nhiều doanh nghiệp, làm thế nào để có được bảo hộ sáng chế thường vẫn chưa đúng phương pháp, và một bộ phận đáng kể còn chưa hiểu cách khai thác sáng chế.",
          "Vậy khai thác sáng chế nên được thực hiện như thế nào? Trước hết, chúng ta cần hiểu đúng về khai thác sáng chế. Ở đây cần bàn về một ngộ nhận phổ biến: phần lớn doanh nghiệp hiểu khai thác sáng chế là tinh luyện quá trình hoặc kết quả R&D thành tài liệu nộp đơn sáng chế, rồi mặc nhiên cho rằng xác suất được cấp bằng tỷ lệ thuận với mức độ gian khổ của quá trình R&D. Nói ngắn gọn, họ hiểu khai thác sáng chế như một quá trình cứ vất vả là sẽ được đền đáp.",
          "Nhưng khai thác sáng chế tuyệt đối không phải là một hành vi đơn giản theo kiểu trời thưởng người chăm chỉ. Cũng như nhiều người nộp đơn khi trả lời ý kiến thẩm định về tính sáng tạo liên tục nhấn mạnh họ đã vất vả thế nào để làm ra phát minh nhưng vẫn bị bác bỏ, ý tưởng gieo gì gặt nấy chỉ là mong muốn một chiều. Trong nhiều trường hợp, sự vất vả chỉ làm tăng số lượng đơn sáng chế, không ảnh hưởng đến số lượng bằng được cấp, càng không thể nói đến việc dùng vũ khí sáng chế để bảo vệ doanh nghiệp và tấn công đối thủ.",
          "Khai thác sáng chế, hay khai thác sáng chế đúng và hiệu quả, nên là: trên cơ sở thực tế của một lượng lớn công nghệ hiện có, dùng tài liệu nộp đơn sáng chế, chủ yếu là yêu cầu bảo hộ, để mô tả các biến đổi có thể có của công nghệ hiện hữu. Nói cách khác, trái với nhận thức phổ biến của doanh nghiệp, khai thác sáng chế hoàn toàn có thể tồn tại độc lập với quá trình R&D. Trên thực tế, rất nhiều trường hợp thành công đã chứng minh rằng khai thác sáng chế hoàn toàn có thể đi trước R&D của doanh nghiệp để định hướng cho R&D.",
          "Vì vậy, người làm khai thác sáng chế, tôi thường gọi là kỹ sư khai thác sáng chế, nếu nắm được công nghệ hiện có và có kỹ năng sáng chế nhất định, có thể thực hiện khai thác sáng chế hiệu quả, chất lượng cao và thu được một số lượng đáng kể sáng chế chất lượng cao.",
          "Các kỹ năng sáng chế trong khai thác sáng chế sẽ tiếp tục được trao đổi với mọi người trong phần sau.",
        ]],
        ],
      },
    },
    "china-prosecution-for-foreign-firms": {
      "en": {
        docTitle: "What Foreign Patent Firms Should Know Before China Prosecution | Ma Su",
        docDescription: "Why China entry should be treated as a strategic examination event, not a translation task.",
        eyebrow: "China Practice / English Article",
        title: "What Foreign Patent Firms Should Know Before China Prosecution",
        deck: "Why China entry should be treated as a strategic examination event, not a translation task.",
        meta: ["By Ma Su", "English edition for international readers", "Ma Su Team Knowledge Center"],
        sections: [
          ["China Filing Is Not a Translation Task", [
            "Many overseas patent matters enter China after the international drafting strategy is already fixed. The Chinese filing is then treated as translation, formatting, and submission. That may be efficient administratively, but it can miss the issues that matter most in Chinese examination: technical contribution, support, feature comparison, inventive-step reasoning, and fallback claim positions.",
            "The better question is not whether the case can be filed in China. The better question is how the invention should enter China in a grant-oriented and commercially useful way.",
            "For foreign patent firms and overseas applicants entering China, this point should be treated as a working step rather than a slogan. The practical work is to connect the article's idea with pre-filing China review, examiner-style patentability screening, claim reconstruction, office-action simulation, and bilingual strategy communication. That is what turns a general insight into a repeatable professional service.",
            "The team should record concrete evidence: original PCT or priority claims, specification support, Chinese prior-art risks, fallback features, expected inventive-step objections, and client business goals. Without this evidence layer, the method remains only an opinion. With it, the article becomes useful for client communication, internal decision-making, patent drafting, prosecution strategy, and later portfolio review.",
            "A complete application of this section normally ends with a decision: how to enter China with a claim set that is not merely translated, but rebuilt for Chinese examination and commercial value. Ma Su's examiner background matters here because the decision is not based only on enthusiasm; it is tested against technical contribution, support in the disclosure, likely examination reasoning, and business value.",
          ], ["China Filing Is Not a Translation Task: practical detail"]],
          ["Pre-Filing Review Points", [
            "Before filing, the China-side team should identify the true technical contribution, check whether the specification supports the desired scope, compare core features with likely prior art, simulate likely office-action reasoning, and design fallback layers.",
            "Sometimes the original claim set is not the best claim set for China. Claim reconstruction may be necessary to preserve value while improving grant probability.",
            "For foreign patent firms and overseas applicants entering China, this point should be treated as a working step rather than a slogan. The practical work is to connect the article's idea with pre-filing China review, examiner-style patentability screening, claim reconstruction, office-action simulation, and bilingual strategy communication. That is what turns a general insight into a repeatable professional service.",
            "The team should record concrete evidence: original PCT or priority claims, specification support, Chinese prior-art risks, fallback features, expected inventive-step objections, and client business goals. Without this evidence layer, the method remains only an opinion. With it, the article becomes useful for client communication, internal decision-making, patent drafting, prosecution strategy, and later portfolio review.",
            "A complete application of this section normally ends with a decision: how to enter China with a claim set that is not merely translated, but rebuilt for Chinese examination and commercial value. Ma Su's examiner background matters here because the decision is not based only on enthusiasm; it is tested against technical contribution, support in the disclosure, likely examination reasoning, and business value.",
          ], ["Pre-Filing Review Points: practical detail"]],
          ["What Foreign Patent Firms Need from a China Partner", [
            "A strong China partner should understand both the inventor's technology and the examiner's logic. The partner should be able to explain risks early, propose claim amendments, prepare arguments before the office action arrives, and help foreign counsel communicate realistic strategy to clients.",
            "Led by Ma Su, Ma Su Team combines senior Chinese patent attorney practice with former national patent office examiner perspectives. For technically supportable inventions, the goal is to move China prosecution as close as possible to a predictable grant path while preserving meaningful claim value.",
            "For foreign patent firms and overseas applicants entering China, this point should be treated as a working step rather than a slogan. The practical work is to connect the article's idea with pre-filing China review, examiner-style patentability screening, claim reconstruction, office-action simulation, and bilingual strategy communication. That is what turns a general insight into a repeatable professional service.",
            "The team should record concrete evidence: original PCT or priority claims, specification support, Chinese prior-art risks, fallback features, expected inventive-step objections, and client business goals. Without this evidence layer, the method remains only an opinion. With it, the article becomes useful for client communication, internal decision-making, patent drafting, prosecution strategy, and later portfolio review.",
            "A complete application of this section normally ends with a decision: how to enter China with a claim set that is not merely translated, but rebuilt for Chinese examination and commercial value. Ma Su's examiner background matters here because the decision is not based only on enthusiasm; it is tested against technical contribution, support in the disclosure, likely examination reasoning, and business value.",
          ], ["What Foreign Patent Firms Need from a China Partner: practical detail"]],
        ],
      },
      "zh-hk": {
        docTitle: "外國專利機構進入中國審查前應該知道什麼 | Ma Su",
        docDescription: "為什麼中國進入不應被視為翻譯任務，而應被視為一次戰略性的審查事件。",
        eyebrow: "中國實務 / 國際讀者文章",
        title: "外國專利機構進入中國審查前應該知道什麼",
        deck: "中國進入不只是翻譯、格式和提交，而是一次需要圍繞審查邏輯、授權概率和商業價值重新設計的戰略事件。",
        meta: ["作者：馬肅", "面向國際讀者的文章", "馬肅團隊知識中心"],
        sections: [
          ["中國申請不是翻譯任務", [
            "許多海外專利案件進入中國時，國際撰寫策略其實已經固定。中國申請於是被當成翻譯、排版和提交。這在行政流程上可能很有效率，但容易錯過中國審查中最重要的問題：技術貢獻、說明書支持、特徵比對、創造性推理以及可退守的權利要求層級。",
            "更好的問題不是這個案件能不能在中國提交，而是這項發明應該如何以更有利於授權、也更有商業價值的方式進入中國。",
            "對外國專利機構和海外申請人而言，這一點應該被當成工作步驟，而不是一句口號。實際工作是把文章中的觀點連接到中國進入前審查、審查員式可專利性篩查、權利要求重構、審查意見模擬和雙語策略溝通。這會把一般性的洞察轉化為可重複的專業服務。",
            "團隊需要記錄具體證據：原始 PCT 或優先權權利要求、說明書支持、中國現有技術風險、可退守特徵、可能出現的創造性駁回理由，以及客戶的商業目標。沒有這層證據，方法只是一種意見；有了它，文章才會對客戶溝通、內部決策、專利撰寫、審查策略和後續組合評估有實際用處。",
            "這一部分的完整應用，通常會以一個決策作結：如何用一套不只是翻譯、而是為中國審查和商業價值重建過的權利要求進入中國。馬肅的審查員背景在這裡很重要，因為這個決策不是只靠熱情，而是要經過技術貢獻、公開支持、可能的審查推理和商業價值的檢驗。",
          ], ["中國申請不是翻譯任務：實務細節"]],
          ["提交前審查要點", [
            "提交之前，中國側團隊應當識別真正的技術貢獻，檢查說明書是否支持目標保護範圍，將核心特徵與可能的現有技術進行比較，模擬可能的審查意見推理，並設計退守層級。",
            "有時候，原始權利要求並不是最適合中國的權利要求。為了保留價值並提高授權可能性，可能需要重構權利要求。",
            "對外國專利機構和海外申請人而言，這一點應該被當成工作步驟，而不是一句口號。實際工作是把文章中的觀點連接到中國進入前審查、審查員式可專利性篩查、權利要求重構、審查意見模擬和雙語策略溝通。這會把一般性的洞察轉化為可重複的專業服務。",
            "團隊需要記錄具體證據：原始 PCT 或優先權權利要求、說明書支持、中國現有技術風險、可退守特徵、可能出現的創造性駁回理由，以及客戶的商業目標。沒有這層證據，方法只是一種意見；有了它，文章才會對客戶溝通、內部決策、專利撰寫、審查策略和後續組合評估有實際用處。",
            "這一部分的完整應用，通常會以一個決策作結：如何用一套不只是翻譯、而是為中國審查和商業價值重建過的權利要求進入中國。馬肅的審查員背景在這裡很重要，因為這個決策不是只靠熱情，而是要經過技術貢獻、公開支持、可能的審查推理和商業價值的檢驗。",
          ], ["提交前審查要點：實務細節"]],
          ["外國專利機構需要怎樣的中國合作夥伴", [
            "強有力的中國合作夥伴應當同時理解發明人的技術和審查員的邏輯。合作夥伴應能提前說明風險，提出權利要求修改方案，在審查意見到來之前準備論證，並幫助外國代理人向客戶傳達現實可行的策略。",
            "在馬肅帶領下，馬肅團隊把資深中國專利代理實務與前國家專利局審查員視角結合起來。對於技術上有支持的發明，目標是在保留有意義權利要求價值的同時，盡可能讓中國審查走向可預期的授權路徑。",
            "對外國專利機構和海外申請人而言，這一點應該被當成工作步驟，而不是一句口號。實際工作是把文章中的觀點連接到中國進入前審查、審查員式可專利性篩查、權利要求重構、審查意見模擬和雙語策略溝通。這會把一般性的洞察轉化為可重複的專業服務。",
            "團隊需要記錄具體證據：原始 PCT 或優先權權利要求、說明書支持、中國現有技術風險、可退守特徵、可能出現的創造性駁回理由，以及客戶的商業目標。沒有這層證據，方法只是一種意見；有了它，文章才會對客戶溝通、內部決策、專利撰寫、審查策略和後續組合評估有實際用處。",
            "這一部分的完整應用，通常會以一個決策作結：如何用一套不只是翻譯、而是為中國審查和商業價值重建過的權利要求進入中國。馬肅的審查員背景在這裡很重要，因為這個決策不是只靠熱情，而是要經過技術貢獻、公開支持、可能的審查推理和商業價值的檢驗。",
          ], ["外國專利機構需要怎樣的中國合作夥伴：實務細節"]],
        ],
      },
      "ja": {
        docTitle: "外国特許事務所が中国審査に入る前に知っておくべきこと | Ma Su",
        docDescription: "中国移行を翻訳作業ではなく、戦略的な審査イベントとして扱うべき理由。",
        eyebrow: "中国実務 / 国際読者向け記事",
        title: "外国特許事務所が中国審査に入る前に知っておくべきこと",
        deck: "中国移行は、翻訳、体裁調整、提出だけの作業ではありません。審査ロジック、権利化可能性、商業価値を踏まえて再設計すべき戦略的な場面です。",
        meta: ["著者：Ma Su", "国際読者向け英語記事", "Ma Su Team ナレッジセンター"],
        sections: [
          ["中国出願は翻訳作業ではない", [
            "多くの海外特許案件は、国際段階のドラフト戦略がすでに固まった後に中国へ入ってきます。そのため中国出願は、翻訳、書式調整、提出として扱われがです。行政的には効率的でも、中国審査で最も重要な問題、つまり技術的貢献、明細書のサポート、特徴比較、進歩性判断、後退可能な請求項ポジションを見落とすおそれがあります。",
            "よりよい問いは、その案件を中国に出願できるかどうかではありません。その発明を、権利化に近く商業的にも有用な形でどのように中国へ入れるかです。",
            "外国特許事務所や海外出願人にとって、この点はスローガンではなく作業ステップとして扱うべきです。実務では、この記事の考え方を中国移行前レビュー、審査官目線の特許性スクリーニング、請求項再構成、拒絶理由通知のシミュレーション、二言語での戦略コミュニケーションに結びつけます。これにより一般的な洞察が、繰り返し提供できる専門サービスになります。",
            "チームは具体的な証拠を記録する必要があります。元の PCT または優先権請求項、明細書のサポート、中国での先行技術リスク、後退可能な特徴、予想される進歩性拒絶、そしてクライアントの事業目標です。この証拠層がなければ、方法は単なる意見にとどまります。証拠層があれば、クライアント説明、内部判断、特許ドラフト、審査対応戦略、後のポートフォリオレビューに役立つものになります。",
            "この部分を完整に適用すると、通常は一つの決定に至ります。単に翻訳された請求項ではなく、中国審査と商業価値のために再構成された請求項セットで、どのように中国へ入るかという決定です。ここで Ma Su の審査官経験が重要になります。判断は熱意だけではなく、技術的貢献、開示のサポート、想定される審査ロジック、事業価値によって検証されるからです。",
          ], ["中国出願は翻訳作業ではない：実務上の詳細"]],
          ["出願前レビューの要点", [
            "出願前に、中国側チームは真の技術的貢献を特定し、明細書が望ましい保護範囲を支えているかを確認し、主要特徴を想定される先行技術と比較し、想定される拒絶理由のロジックをシミュレーションし、後退可能な層を設計すべきです。",
            "元の請求項セットが中国にとって最適とは限りません。価値を保ちながら権利化可能性を高めるために、請求項の再構成が必要になることがあります。",
            "外国特許事務所や海外出願人にとって、この点はスローガンではなく作業ステップとして扱うべきです。実務では、この記事の考え方を中国移行前レビュー、審査官目線の特許性スクリーニング、請求項再構成、拒絶理由通知のシミュレーション、二言語での戦略コミュニケーションに結びつけます。これにより一般的な洞察が、繰り返し提供できる専門サービスになります。",
            "チームは具体的な証拠を記録する必要があります。元の PCT または優先権請求項、明細書のサポート、中国での先行技術リスク、後退可能な特徴、予想される進歩性拒絶、そしてクライアントの事業目標です。この証拠層がなければ、方法は単なる意見にとどまります。証拠層があれば、クライアント説明、内部判断、特許ドラフト、審査対応戦略、後のポートフォリオレビューに役立つものになります。",
            "この部分を完整に適用すると、通常は一つの決定に至ります。単に翻訳された請求項ではなく、中国審査と商業価値のために再構成された請求項セットで、どのように中国へ入るかという決定です。ここで Ma Su の審査官経験が重要になります。判断は熱意だけではなく、技術的貢献、開示のサポート、想定される審査ロジック、事業価値によって検証されるからです。",
          ], ["出願前レビューの要点：実務上の詳細"]],
          ["外国特許事務所が中国パートナーに求めるもの", [
            "強い中国パートナーは、発明者の技術と審査官のロジックの両方を理解しているべきです。早い段階でリスクを説明し、請求項補正案を示し、拒絶理由通知が来る前に主張を準備し、外国代理人がクライアントへ現実的な戦略を伝える支援ができる必要があります。",
            "Ma Su が率いる Ma Su Team は、経験豊富な中国弁理士実務と元国家特許庁審査官の視点を組み合わせています。技術的にサポート可能な発明については、意味のある請求項価値を保ちながら、中国審査をできる限り予測可能な権利化ルートへ近づけることを目指します。",
            "外国特許事務所や海外出願人にとって、この点はスローガンではなく作業ステップとして扱うべきです。実務では、この記事の考え方を中国移行前レビュー、審査官目線の特許性スクリーニング、請求項再構成、拒絶理由通知のシミュレーション、二言語での戦略コミュニケーションに結びつけます。これにより一般的な洞察が、繰り返し提供できる専門サービスになります。",
            "チームは具体的な証拠を記録する必要があります。元の PCT または優先権請求項、明細書のサポート、中国での先行技術リスク、後退可能な特徴、予想される進歩性拒絶、そしてクライアントの事業目標です。この証拠層がなければ、方法は単なる意見にとどまります。証拠層があれば、クライアント説明、内部判断、特許ドラフト、審査対応戦略、後のポートフォリオレビューに役立つものになります。",
            "この部分を完整に適用すると、通常は一つの決定に至ります。単に翻訳された請求項ではなく、中国審査と商業価値のために再構成された請求項セットで、どのように中国へ入るかという決定です。ここで Ma Su の審査官経験が重要になります。判断は熱意だけではなく、技術的貢献、開示のサポート、想定される審査ロジック、事業価値によって検証されるからです。",
          ], ["外国特許事務所が中国パートナーに求めるもの：実務上の詳細"]],
        ],
      },
      "tr": {
        docTitle: "Yabancı Patent Firmaları Çin İncelemesine Girmeden Önce Ne Bilmeli | Ma Su",
        docDescription: "Çin girişinin neden bir çeviri işi değil, stratejik bir inceleme olayı olarak ele alınması gerektiği.",
        eyebrow: "Çin Uygulaması / Uluslararası Okurlar",
        title: "Yabancı Patent Firmaları Çin İncelemesine Girmeden Önce Ne Bilmeli",
        deck: "Çin'e giriş yalnızca çeviri, biçimlendirme ve dosyalama değildir; inceleme mantığı, tescil olasılığı ve ticari değer etrafında yeniden tasarlanması gereken stratejik bir aşamadır.",
        meta: ["Yazar: Ma Su", "Uluslararası okurlar için makale", "Ma Su Team Bilgi Merkezi"],
        sections: [
          ["Çin Başvurusu Bir Çeviri İşi Değildir", ["Birçok denizaşırı patent dosyası, uluslararası yazım stratejisi zaten sabitlendikten sonra Çin'e girer. Çin başvurusu daha sonra çeviri, biçimlendirme ve dosyalama olarak ele alınır. Bu idari açıdan verimli olabilir, ancak Çin incelemesinde en önemli konuları kaçırabilir: teknik katkı, destek, özellik karşılaştırması, buluş basamağı gerekçelendirmesi ve geri çekilme talep konumları.", "Daha iyi soru, dosyanın Çin'de sunulup sunulamayacağı değildir. Daha iyi soru, buluşun Çin'e tescil odaklı ve ticari olarak yararlı bir şekilde nasıl girmesi gerektiğidir.", "Yabancı patent firmaları ve Çin'e giren denizaşırı başvuru sahipleri için bu nokta slogan değil, çalışma adımı olarak ele alınmalıdır. Pratik çalışma, makaledeki fikri Çin başvurusu öncesi inceleme, uzman gözüyle patentlenebilirlik taraması, istemlerin yeniden kurulması, ofis işlemi simülasyonu ve iki dilli strateji iletişimiyle bağlamaktır. Genel bir içgörüyü tekrarlanabilir profesyonel hizmete dönüştüren şey budur.", "Ekip somut kanıtları kaydetmelidir: özgün PCT veya rüçhan istemleri, tarifname desteği, Çin'deki önceki teknik riskleri, geri çekilme özellikleri, beklenen buluş basamağı itirazları ve müşterinin ticari hedefleri. Bu kanıt katmanı yoksa yöntem yalnızca bir görüş olarak kalır. Varsa, makale müşteri iletişimi, iç karar alma, patent yazımı, takip stratejisi ve sonraki portföy incelemesi için yararlı hale gelir.", "Bu bölümün tam uygulanması normalde bir kararla biter: Çin'e yalnızca çevrilmiş değil, Çin incelemesi ve ticari değer için yeniden kurulmuş bir istem setiyle nasıl girileceği. Ma Su'nun uzman geçmişi burada önemlidir; çünkü karar yalnızca heyecana değil, teknik katkıya, açıklamadaki desteğe, olası inceleme gerekçesine ve ticari değere göre test edilir."], ["Çin Başvurusu Bir Çeviri İşi Değildir: pratik ayrıntı"]],
          ["Başvuru Öncesi İnceleme Noktaları", ["Dosyalamadan önce Çin tarafındaki ekip gerçek teknik katkıyı belirlemeli, tarifnamenin istenen kapsamı destekleyip desteklemediğini kontrol etmeli, temel özellikleri olası önceki teknikle karşılaştırmalı, muhtemel ofis işlemi gerekçesini simüle etmeli ve geri çekilme katmanları tasarlamalıdır.", "Bazen özgün istem seti Çin için en iyi istem seti değildir. Değeri korurken tescil olasılığını artırmak için istemlerin yeniden kurulması gerekebilir.", "Yabancı patent firmaları ve Çin'e giren denizaşırı başvuru sahipleri için bu nokta slogan değil, çalışma adımı olarak ele alınmalıdır. Pratik çalışma, makaledeki fikri Çin başvurusu öncesi inceleme, uzman gözüyle patentlenebilirlik taraması, istemlerin yeniden kurulması, ofis işlemi simülasyonu ve iki dilli strateji iletişimiyle bağlamaktır. Genel bir içgörüyü tekrarlanabilir profesyonel hizmete dönüştüren şey budur.", "Ekip somut kanıtları kaydetmelidir: özgün PCT veya rüçhan istemleri, tarifname desteği, Çin'deki önceki teknik riskleri, geri çekilme özellikleri, beklenen buluş basamağı itirazları ve müşterinin ticari hedefleri. Bu kanıt katmanı yoksa yöntem yalnızca bir görüş olarak kalır. Varsa, makale müşteri iletişimi, iç karar alma, patent yazımı, takip stratejisi ve sonraki portföy incelemesi için yararlı hale gelir.", "Bu bölümün tam uygulanması normalde bir kararla biter: Çin'e yalnızca çevrilmiş değil, Çin incelemesi ve ticari değer için yeniden kurulmuş bir istem setiyle nasıl girileceği. Ma Su'nun uzman geçmişi burada önemlidir; çünkü karar yalnızca heyecana değil, teknik katkıya, açıklamadaki desteğe, olası inceleme gerekçesine ve ticari değere göre test edilir."], ["Başvuru Öncesi İnceleme Noktaları: pratik ayrıntı"]],
          ["Yabancı Patent Firmalarının Çin Ortağından Beklediği Şey", ["Güçlü bir Çin ortağı hem buluş sahibinin teknolojisini hem de uzmanın mantığını anlamalıdır. Ortak riskleri erken açıklayabilmeli, istem değişiklikleri önerebilmeli, ofis işlemi gelmeden önce argümanları hazırlayabilmeli ve yabancı vekilin müşterilere gerçekçi strateji iletmesine yardımcı olabilmelidir.", "Ma Su liderliğindeki Ma Su Team, kıdemli Çin patent vekilliği uygulamasını eski ulusal patent ofisi uzmanı bakış açılarıyla birleştirir. Teknik olarak desteklenebilir buluşlarda hedef, anlamlı istem değerini korurken Çin takibini mümkün olduğunca öngörülebilir bir tescil yoluna yaklaştırmaktır.", "Yabancı patent firmaları ve Çin'e giren denizaşırı başvuru sahipleri için bu nokta slogan değil, çalışma adımı olarak ele alınmalıdır. Pratik çalışma, makaledeki fikri Çin başvurusu öncesi inceleme, uzman gözüyle patentlenebilirlik taraması, istemlerin yeniden kurulması, ofis işlemi simülasyonu ve iki dilli strateji iletişimiyle bağlamaktır. Genel bir içgörüyü tekrarlanabilir profesyonel hizmete dönüştüren şey budur.", "Ekip somut kanıtları kaydetmelidir: özgün PCT veya rüçhan istemleri, tarifname desteği, Çin'deki önceki teknik riskleri, geri çekilme özellikleri, beklenen buluş basamağı itirazları ve müşterinin ticari hedefleri. Bu kanıt katmanı yoksa yöntem yalnızca bir görüş olarak kalır. Varsa, makale müşteri iletişimi, iç karar alma, patent yazımı, takip stratejisi ve sonraki portföy incelemesi için yararlı hale gelir.", "Bu bölümün tam uygulanması normalde bir kararla biter: Çin'e yalnızca çevrilmiş değil, Çin incelemesi ve ticari değer için yeniden kurulmuş bir istem setiyle nasıl girileceği. Ma Su'nun uzman geçmişi burada önemlidir; çünkü karar yalnızca heyecana değil, teknik katkıya, açıklamadaki desteğe, olası inceleme gerekçesine ve ticari değere göre test edilir."], ["Yabancı Patent Firmalarının Çin Ortağından Beklediği Şey: pratik ayrıntı"]],
        ],
      },
      "vi": {
        docTitle: "Các hãng sáng chế nước ngoài cần biết gì trước khi bước vào thẩm định tại Trung Quốc | Ma Su",
        docDescription: "Vì sao giai đoạn vào Trung Quốc nên được xem là một sự kiện thẩm định chiến lược, không phải nhiệm vụ dịch thuật.",
        eyebrow: "Thực tiễn Trung Quốc / Bài viết cho độc giả quốc tế",
        title: "Các hãng sáng chế nước ngoài cần biết gì trước khi bước vào thẩm định tại Trung Quốc",
        deck: "Vào Trung Quốc không chỉ là dịch, chỉnh định dạng và nộp hồ sơ; đó là một giai đoạn chiến lược cần được thiết kế lại quanh logic thẩm định, khả năng được cấp bằng và giá trị thương mại.",
        meta: ["Tác giả: Ma Su", "Bài viết cho độc giả quốc tế", "Trung tâm tri thức Ma Su Team"],
        sections: [
          ["Nộp đơn tại Trung Quốc không phải là nhiệm vụ dịch thuật", ["Nhiều hồ sơ sáng chế nước ngoài đi vào Trung Quốc sau khi chiến lược soạn thảo quốc tế đã được cố định. Việc nộp tại Trung Quốc sau đó bị xem như dịch thuật, chỉnh định dạng và nộp hồ sơ. Cách làm này có thể hiệu quả về mặt hành chính, nhưng dễ bỏ lỡ những vấn đề quan trọng nhất trong thẩm định Trung Quốc: đóng góp kỹ thuật, cơ sở hỗ trợ, so sánh đặc điểm, lập luận về tính sáng tạo và các vị trí yêu cầu bảo hộ dự phòng.", "Câu hỏi tốt hơn không phải là hồ sơ có thể nộp tại Trung Quốc hay không. Câu hỏi tốt hơn là sáng chế nên đi vào Trung Quốc như thế nào để vừa hướng tới khả năng được cấp bằng, vừa có giá trị thương mại.", "Đối với các hãng sáng chế nước ngoài và người nộp đơn ở nước ngoài khi vào Trung Quốc, điểm này cần được xem là một bước công việc, không phải khẩu hiệu. Công việc thực tế là kết nối ý tưởng của bài viết với rà soát trước khi vào Trung Quốc, sàng lọc khả năng cấp bằng theo góc nhìn thẩm định viên, tái cấu trúc yêu cầu bảo hộ, mô phỏng thông báo thẩm định và giao tiếp chiến lược song ngữ. Đó là cách biến một nhận định chung thành dịch vụ chuyên nghiệp có thể lặp lại.", "Nhóm cần ghi lại bằng chứng cụ thể: yêu cầu bảo hộ PCT hoặc ưu tiên ban đầu, cơ sở hỗ trợ trong bản mô tả, rủi ro kỹ thuật đã biết tại Trung Quốc, đặc điểm dự phòng, phản đối dự kiến về tính sáng tạo và mục tiêu kinh doanh của khách hàng. Không có lớp bằng chứng này, phương pháp chỉ là ý kiến. Có nó, bài viết mới hữu ích cho giao tiếp với khách hàng, quyết định nội bộ, soạn thảo sáng chế, chiến lược thẩm định và rà soát danh mục sau này.", "Việc áp dụng đầy đủ phần này thường kết thúc bằng một quyết định: vào Trung Quốc bằng một bộ yêu cầu bảo hộ không chỉ được dịch, mà được xây dựng lại cho thẩm định Trung Quốc và giá trị thương mại như thế nào. Nền tảng thẩm định viên của Ma Su quan trọng ở đây, vì quyết định không chỉ dựa trên sự hứng khởi; nó được kiểm nghiệm qua đóng góp kỹ thuật, cơ sở hỗ trợ trong phần bộc lộ, logic thẩm định có khả năng xảy ra và giá trị kinh doanh."], ["Nộp đơn tại Trung Quốc không phải là nhiệm vụ dịch thuật: chi tiết thực hành"]],
          ["Các điểm rà soát trước khi nộp", ["Trước khi nộp, nhóm phía Trung Quốc nên xác định đóng góp kỹ thuật thật sự, kiểm tra bản mô tả có hỗ trợ phạm vi mong muốn hay không, so sánh các đặc điểm cốt lõi với kỹ thuật đã biết có khả năng liên quan, mô phỏng lập luận trong thông báo thẩm định và thiết kế các tầng dự phòng.", "Đôi khi bộ yêu cầu bảo hộ ban đầu không phải là bộ yêu cầu tốt nhất cho Trung Quốc. Có thể cần tái cấu trúc yêu cầu bảo hộ để giữ giá trị đồng thời cải thiện xác suất được cấp bằng.", "Đối với các hãng sáng chế nước ngoài và người nộp đơn ở nước ngoài khi vào Trung Quốc, điểm này cần được xem là một bước công việc, không phải khẩu hiệu. Công việc thực tế là kết nối ý tưởng của bài viết với rà soát trước khi vào Trung Quốc, sàng lọc khả năng cấp bằng theo góc nhìn thẩm định viên, tái cấu trúc yêu cầu bảo hộ, mô phỏng thông báo thẩm định và giao tiếp chiến lược song ngữ. Đó là cách biến một nhận định chung thành dịch vụ chuyên nghiệp có thể lặp lại.", "Nhóm cần ghi lại bằng chứng cụ thể: yêu cầu bảo hộ PCT hoặc ưu tiên ban đầu, cơ sở hỗ trợ trong bản mô tả, rủi ro kỹ thuật đã biết tại Trung Quốc, đặc điểm dự phòng, phản đối dự kiến về tính sáng tạo và mục tiêu kinh doanh của khách hàng. Không có lớp bằng chứng này, phương pháp chỉ là ý kiến. Có nó, bài viết mới hữu ích cho giao tiếp với khách hàng, quyết định nội bộ, soạn thảo sáng chế, chiến lược thẩm định và rà soát danh mục sau này.", "Việc áp dụng đầy đủ phần này thường kết thúc bằng một quyết định: vào Trung Quốc bằng một bộ yêu cầu bảo hộ không chỉ được dịch, mà được xây dựng lại cho thẩm định Trung Quốc và giá trị thương mại như thế nào. Nền tảng thẩm định viên của Ma Su quan trọng ở đây, vì quyết định không chỉ dựa trên sự hứng khởi; nó được kiểm nghiệm qua đóng góp kỹ thuật, cơ sở hỗ trợ trong phần bộc lộ, logic thẩm định có khả năng xảy ra và giá trị kinh doanh."], ["Các điểm rà soát trước khi nộp: chi tiết thực hành"]],
          ["Các hãng sáng chế nước ngoài cần gì từ một đối tác Trung Quốc", ["Một đối tác Trung Quốc mạnh nên hiểu cả công nghệ của nhà sáng chế lẫn logic của thẩm định viên. Đối tác đó cần có khả năng giải thích rủi ro từ sớm, đề xuất sửa đổi yêu cầu bảo hộ, chuẩn bị lập luận trước khi thông báo thẩm định đến, và giúp luật sư nước ngoài truyền đạt chiến lược thực tế cho khách hàng.", "Dưới sự dẫn dắt của Ma Su, Ma Su Team kết hợp kinh nghiệm thực hành của đại diện sáng chế Trung Quốc lâu năm với góc nhìn của cựu thẩm định viên cơ quan sáng chế quốc gia. Với các sáng chế có cơ sở kỹ thuật hỗ trợ, mục tiêu là đưa quá trình thẩm định tại Trung Quốc đến gần nhất với một lộ trình cấp bằng có thể dự đoán, đồng thời giữ lại giá trị yêu cầu bảo hộ có ý nghĩa.", "Đối với các hãng sáng chế nước ngoài và người nộp đơn ở nước ngoài khi vào Trung Quốc, điểm này cần được xem là một bước công việc, không phải khẩu hiệu. Công việc thực tế là kết nối ý tưởng của bài viết với rà soát trước khi vào Trung Quốc, sàng lọc khả năng cấp bằng theo góc nhìn thẩm định viên, tái cấu trúc yêu cầu bảo hộ, mô phỏng thông báo thẩm định và giao tiếp chiến lược song ngữ. Đó là cách biến một nhận định chung thành dịch vụ chuyên nghiệp có thể lặp lại.", "Nhóm cần ghi lại bằng chứng cụ thể: yêu cầu bảo hộ PCT hoặc ưu tiên ban đầu, cơ sở hỗ trợ trong bản mô tả, rủi ro kỹ thuật đã biết tại Trung Quốc, đặc điểm dự phòng, phản đối dự kiến về tính sáng tạo và mục tiêu kinh doanh của khách hàng. Không có lớp bằng chứng này, phương pháp chỉ là ý kiến. Có nó, bài viết mới hữu ích cho giao tiếp với khách hàng, quyết định nội bộ, soạn thảo sáng chế, chiến lược thẩm định và rà soát danh mục sau này.", "Việc áp dụng đầy đủ phần này thường kết thúc bằng một quyết định: vào Trung Quốc bằng một bộ yêu cầu bảo hộ không chỉ được dịch, mà được xây dựng lại cho thẩm định Trung Quốc và giá trị thương mại như thế nào. Nền tảng thẩm định viên của Ma Su quan trọng ở đây, vì quyết định không chỉ dựa trên sự hứng khởi; nó được kiểm nghiệm qua đóng góp kỹ thuật, cơ sở hỗ trợ trong phần bộc lộ, logic thẩm định có khả năng xảy ra và giá trị kinh doanh."], ["Các hãng sáng chế nước ngoài cần gì từ một đối tác Trung Quốc: chi tiết thực hành"]],
        ],
      },
    },
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

  function normalizeLangCode(code) {
    if (!code) return "";
    const value = String(code).toLowerCase();
    if (value === "zh-cn" || value === "zh-hans" || value === "zh-hans-cn") return "zh-hk";
    if (value === "zh-hk" || value === "zh-tw" || value === "zh-hant" || value === "zh-hant-hk") return "zh-hk";
    return value;
  }

  function getArticleTranslation(slug, lang) {
    return articlePageTranslations[slug] && articlePageTranslations[slug][lang];
  }

  function supported(code) {
    return languages.some(([lang]) => lang === code);
  }

  function getLang() {
    const query = normalizeLangCode(new URLSearchParams(location.search).get("lang"));
    if (supported(query)) return query;
    const saved = normalizeLangCode(localStorage.getItem("masuip-lang"));
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

  function applyStaticArticleTranslation(lang) {
    const slug = location.pathname.split("/").pop().replace(".html", "");
    let translated = window.MASU_ARTICLE_TRANSLATIONS &&
      window.MASU_ARTICLE_TRANSLATIONS[slug] &&
      window.MASU_ARTICLE_TRANSLATIONS[slug].langs &&
      window.MASU_ARTICLE_TRANSLATIONS[slug].langs[lang];
    if (!translated) return false;
    const shell = document.querySelector(".article-shell");
    if (!shell) return false;
    if (translated.title) document.title = translated.title;
    const description = document.querySelector('meta[name="description"]');
    if (description && translated.description) description.setAttribute("content", translated.description);
    const walker = document.createTreeWalker(shell, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION", "SELECT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest(".author-box, .share-box, .related-articles, .language-switcher")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    translated.nodes.forEach((text, index) => {
      if (nodes[index]) nodes[index].nodeValue = nodes[index].nodeValue.replace(nodes[index].nodeValue.trim(), text);
    });
    document.body.dataset.translation = "static";
    return true;
  }

  function translateLongArticle(lang) {
    const slug = location.pathname.split("/").pop().replace(".html", "");
    const translated = getArticleTranslation(slug, lang);
    const shell = document.querySelector(".article-shell");
    if (!translated && shell) {
      const sourceText = [
        shell.querySelector(":scope > h1")?.textContent || "",
        shell.querySelector(":scope > .article-deck")?.textContent || "",
      ].join(" ");
      if (/[\u4e00-\u9fff]/.test(sourceText)) return false;
    }
    if (!translated) return false;
    document.title = translated.docTitle;
    if (!shell) return false;
    const eyebrow = shell.querySelector(":scope > .eyebrow");
    const title = shell.querySelector(":scope > h1");
    const deck = shell.querySelector(":scope > .article-deck");
    const meta = shell.querySelectorAll(":scope > .article-meta span");
    const caption = shell.querySelector(".article-hero-image figcaption");
    if (eyebrow) eyebrow.textContent = translated.eyebrow;
    if (title) title.textContent = translated.title;
    if (deck) deck.textContent = translated.deck;
    const description = document.querySelector('meta[name="description"]');
    if (description && translated.docDescription) description.setAttribute("content", translated.docDescription);
    translated.meta.forEach((text, index) => {
      if (meta[index]) meta[index].textContent = text;
    });
    if (caption) caption.textContent = translated.caption;
    shell.querySelectorAll(":scope > .article-section").forEach((section, index) => {
      const data = translated.sections[index];
      if (!data) return;
      const h2 = section.querySelector("h2");
      const subheads = section.querySelectorAll("h3");
      const paragraphs = section.querySelectorAll("p");
      if (h2) h2.textContent = data[0];
      if (data[2]) {
        data[2].forEach((text, hIndex) => {
          if (subheads[hIndex]) subheads[hIndex].textContent = text;
        });
      }
      data[1].forEach((text, pIndex) => {
        if (paragraphs[pIndex]) paragraphs[pIndex].textContent = text;
      });
    });
    return true;
  }

  const machineTargets = {
    en: "en",
    "zh-hk": "zh-TW",
    ja: "ja",
    tr: "tr",
    vi: "vi",
  };

  function shouldAutoTranslate(text, lang) {
    const value = text.trim();
    if (!value || !/[\u4e00-\u9fff]/.test(value)) return false;
    if (lang === "ja" && /[\u3040-\u30ff]/.test(value)) return false;
    if (lang === "tr" && /[çğıöşüÇĞİÖŞÜ]/.test(value)) return false;
    if (lang === "vi" && /[ăâđêôơưĂÂĐÊÔƠƯ]/.test(value)) return false;
    return true;
  }

  async function translateTextFrom(text, source, target) {
    const trimmed = text.trim();
    const cacheKey = "masuip-mt:" + source + ":" + target + ":" + trimmed;
    let cached = "";
    try { cached = localStorage.getItem(cacheKey); } catch (error) {}
    if (cached) return text.replace(trimmed, cached);
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + encodeURIComponent(source) + "&tl=" + encodeURIComponent(target) + "&dt=t&q=" + encodeURIComponent(trimmed);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    let data;
    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error("Translation request failed: " + response.status);
      data = await response.json();
    } finally {
      window.clearTimeout(timeout);
    }
    const translated = (data[0] || []).map((item) => item[0]).join("").trim();
    if (translated) {
      try { localStorage.setItem(cacheKey, translated); } catch (error) {}
      return text.replace(trimmed, translated);
    }
    return text;
  }

  async function translateText(text, target) {
    return translateTextFrom(text, "zh-CN", target);
  }

  async function autoTranslateRenderedArticle(lang, source) {
    const target = machineTargets[lang];
    if (!target || target === source) return;
    const scope = document.querySelector(".article-shell");
    if (!scope) return;
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION", "SELECT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    if (!nodes.length) return;
    document.body.dataset.translation = "loading";
    let index = 0;
    async function worker() {
      while (index < nodes.length) {
        const node = nodes[index++];
        try {
          node.nodeValue = await translateTextFrom(node.nodeValue, source, target);
        } catch (error) {
          console.warn("Article translation skipped", error);
        }
      }
    }
    const titlePromise = translateTextFrom(document.title, source, target)
      .then((translatedTitle) => { document.title = translatedTitle; })
      .catch((error) => console.warn("Title translation skipped", error));
    const description = document.querySelector('meta[name="description"]');
    const descriptionPromise = description
      ? translateTextFrom(description.getAttribute("content") || "", source, target)
          .then((translatedDescription) => { description.setAttribute("content", translatedDescription); })
          .catch((error) => console.warn("Description translation skipped", error))
      : Promise.resolve();
    await Promise.all([
      titlePromise,
      descriptionPromise,
      ...Array.from({ length: Math.min(4, nodes.length) }, worker),
    ]);
    document.body.dataset.translation = "done";
  }

  function collectTextNodes(scope, acceptText) {
    if (!scope) return [];
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION", "SELECT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest(".language-switcher")) return NodeFilter.FILTER_REJECT;
        return acceptText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  async function translateNodes(nodes, source, target) {
    if (!nodes.length) return;
    document.body.dataset.translation = "loading";
    let index = 0;
    async function worker() {
      while (index < nodes.length) {
        const node = nodes[index++];
        try {
          node.nodeValue = await translateTextFrom(node.nodeValue, source, target);
        } catch (error) {
          console.warn("Auto translation skipped", error);
        }
      }
    }
    await Promise.all(Array.from({ length: Math.min(4, nodes.length) }, worker));
    document.body.dataset.translation = "done";
  }

  async function autoTranslateResidualChinese(lang) {
    const target = machineTargets[lang];
    if (!target) return;
    const scope = document.querySelector(".article-shell") || document.querySelector("main");
    const nodes = collectTextNodes(scope, (text) => shouldAutoTranslate(text, lang));
    await translateNodes(nodes, "zh-CN", target);
  }

  function shouldAutoTranslateEnglish(text) {
    const value = text.trim();
    if (!value || !/[A-Za-z]/.test(value)) return false;
    if (/[\u4e00-\u9fff\u3040-\u30ff]/.test(value)) return false;
    if (/[\u00C0-\u017E]/.test(value)) return false;
    return value.split(/\s+/).length > 1 || value.length > 18;
  }

  async function autoTranslateResidualEnglish(lang) {
    const target = machineTargets[lang];
    if (!target || target === "en") return;
    const scope = document.querySelector("main");
    const nodes = collectTextNodes(scope, shouldAutoTranslateEnglish);
    await translateNodes(nodes, "en", target);
  }

  function getArticleSourceLang(articleShell) {
    if (!articleShell) return "en";
    const sourceText = [
      articleShell.querySelector(":scope > h1")?.textContent || "",
      articleShell.querySelector(":scope > .article-deck")?.textContent || "",
      articleShell.querySelector(".article-section")?.textContent || "",
    ].join(" ");
    return /[\u4e00-\u9fff]/.test(sourceText) ? "zh-CN" : "en";
  }

  function translate(lang) {
    document.documentElement.lang = lang === "zh-hk" ? "zh-Hant-HK" : lang;
    translateNav(lang);
    addSwitcher(lang);
    const articleShell = document.querySelector(".article-shell");
    const articleSourceLang = articleShell ? getArticleSourceLang(articleShell) : "";
    const hasStaticArticleTranslation = applyStaticArticleTranslation(lang);
    const hasArticleTranslation = hasStaticArticleTranslation || translateLongArticle(lang);
    if (lang !== "en") {
      const titleMap = textMap[lang] || {};
      if (titleMap[document.title]) document.title = titleMap[document.title];
      replaceExactText(lang);
      translateCommonUi(lang);
    }
  }

  document.addEventListener("DOMContentLoaded", () => translate(getLang()));
})();
