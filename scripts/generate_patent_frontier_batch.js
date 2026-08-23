const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const today = "2026-08-23";

const items = [
  ["robotics","US-12588964-B2","Medical instrument guidance with robotic systems","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12588964-B2"],
  ["robotics","WO-2025104594-A1","Surgical robotic system and method for using secondary image data","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/WO-2025104594-A1"],
  ["robotics","US-2025283726-A1","Autonomous vehicle application","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025283726-A1"],
  ["robotics","US-2025026006-A1","Drone mechanism including foldable arm and compressible components","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025026006-A1"],
  ["robotics","US-12226175-B2","Systems and methods for docking medical instruments","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12226175-B2"],
  ["robotics","EP-4509085-A1","Surgical robotic system with automated low visibility control","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-4509085-A1"],
  ["robotics","US-12187287-B1","Autonomous vehicle interaction memory","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12187287-B1"],
  ["robotics","US-12226176-B2","Automatic instrument position adjustment","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12226176-B2"],
  ["robotics","US-2025318724-A1","Medical robotic system","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025318724-A1"],
  ["robotics","KR-102829805-B1","Entertainment apparatus and method for self-driving vehicle","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/KR-102829805-B1"],
  ["robotics","US-12391281-B2","Responses to vulnerable road user's adversarial behavior","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12391281-B2"],
  ["robotics","US-11504196-B2","Single-arm robotic device with compact joint design","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-11504196-B2"],
  ["robotics","US-12330320-B2","Robotic device","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12330320-B2"],
  ["robotics","US-11472030-B2","Robotic system with indication of boundary for robotic arm","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-11472030-B2"],
  ["robotics","CA-3060879-A1","Cart for robotic arms and method and apparatus for cartridge or magazine loading","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CA-3060879-A1"],
  ["robotics","US-2023075185-A1","Method and system for positioning a moveable robotic system","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2023075185-A1"],
  ["robotics","US20260124025A1","Robotic device for dental surgery","Google Patents","https://patents.google.com/patent/US20260124025A1/en"],
  ["robotics","US20260124019A1","Surgical tool systems and methods","Google Patents","https://patents.google.com/patent/US20260124019A1/en"],
  ["robotics","US20260124768A1","Robotic devices and methods for fabrication, use and control of same","Google Patents","https://patents.google.com/patent/US20260124768A1/en"],
  ["robotics","US20260127543A1","Data reduction in a bar code reading robot shelf monitoring system","Google Patents","https://patents.google.com/patent/US20260127543A1/en"],
  ["robotics","US20260125077A1","Automatic driving device and vehicle control method","Google Patents","https://patents.google.com/patent/US20260125077A1/en"],
  ["robotics","US20260125054A1","Sensor visibility estimation","Google Patents","https://patents.google.com/patent/US20260125054A1/en"],
  ["robotics","US20260126778A1","Systems and methods for assisting a surgeon and producing patient-specific surgical support","Google Patents","https://patents.google.com/patent/US20260126778A1/en"],
  ["robotics","US20260124003A1","Surgical object tracking template generation for computer assisted navigation","Google Patents","https://patents.google.com/patent/US20260124003A1/en"],
  ["robotics","US20260123929A1","Surgical instruments with separable motors and motor control circuits","Google Patents","https://patents.google.com/patent/US20260123929A1/en"],
  ["robotics","US20260123931A1","Surgical stapler knife motion controls","Google Patents","https://patents.google.com/patent/US20260123931A1/en"],
  ["robotics","US20260124331A1","Targeted surface disinfection system with pulsed UV light","Google Patents","https://patents.google.com/patent/US20260124331A1/en"],
  ["robotics","US20260123986A1","Systems, methods, and devices for monitoring and treatment of tissues","Google Patents","https://patents.google.com/patent/US20260123986A1/en"],
  ["robotics","US20260126777A1","Predicting process control parameters for fabricating an object using deposition","Google Patents","https://patents.google.com/patent/US20260126777A1/en"],
  ["robotics","US-11267546-B2","Ocean bottom seismic autonomous underwater vehicle","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-11267546-B2"],
  ["robotics","EP-3117967-A1","Transparency control method for robotic devices","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-3117967-A1"],
  ["robotics","US20260125078A1","Automatic driving device and vehicle control method","Google Patents","https://patents.google.com/patent/US20260125078A1/en"],

  ["ai","US-2025225337-A1","Detection of hallucinations in large language model responses","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025225337-A1"],
  ["ai","US-12373506-B1","Personalized retrieval-augmented generation system","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12373506-B1"],
  ["ai","US-2025045531-A1","AI hallucination and jailbreaking prevention framework","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025045531-A1"],
  ["ai","US-2022129787-A1","Machine learning model verification for assessment pipeline deployment","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2022129787-A1"],
  ["ai","EP-4379602-A1","Method for certification of periodically adapted machine learning models","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-4379602-A1"],
  ["ai","US-2025045596-A1","Large language model regulation systems and methods","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025045596-A1"],
  ["ai","US-2018150713-A1","Object classification in image data using machine learning","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2018150713-A1"],
  ["ai","US-2025060949-A1","Using a large language model for code generation for network configuration","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025060949-A1"],
  ["ai","US-12374429-B1","Utilizing machine learning models to synthesize perturbation images","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12374429-B1"],
  ["ai","US-12572783-B1","Ideographic contrastive autoencoder for large language model fine tuning","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12572783-B1"],
  ["ai","US-12397198-B1","Personalized communication in a digital therapy platform","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12397198-B1"],
  ["ai","US-11645586-B2","Watermark unit for a data processing accelerator","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-11645586-B2"],
  ["ai","US-2025239171-A1","Enhanced grading and feedback assistant system for handwritten assessments","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025239171-A1"],
  ["ai","US-2024013854-A1","Systems and methods for engineering protein activity","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2024013854-A1"],
  ["ai","US-12243295-B2","Robust neural network learning system","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12243295-B2"],
  ["ai","US-12288342-B2","System and method for player reidentification in broadcast video","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12288342-B2"],
  ["ai","US-2025256158-A1","Artificial intelligence apparatus and method for monitoring prescribed movements","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025256158-A1"],
  ["ai","US-2025165747-A1","Scalable neural network processing engine","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025165747-A1"],
  ["ai","US-12536751-B2","Pixel-based deformation of fashion items","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12536751-B2"],
  ["ai","US-12380503-B1","Data retrieval and validation for asset onboarding","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12380503-B1"],
  ["ai","US-2025029638-A1","Memory device including 2-transistor memory cell structure for neural network","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025029638-A1"],
  ["ai","US-11386567-B2","Weakly supervised training of a model for computer vision","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-11386567-B2"],
  ["ai","US-12382947-B2","AI intelligent sound wave pulse resonance repeller","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12382947-B2"],
  ["ai","US-12278825-B2","Cybersecurity threat detection utilizing static and dynamic analysis","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12278825-B2"],
  ["ai","US-2025259727-A1","Machine-learning-based meal detection and size estimation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025259727-A1"],
  ["ai","US-12419521-B2","System to detect foot abnormalities","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12419521-B2"],
  ["ai","US-2025085673-A1","Utility usage prediction and optimization","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025085673-A1"],
  ["ai","US-12373946-B2","Assay reading method","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12373946-B2"],
  ["ai","US-12354747-B2","Wearable sensor and healthcare management system using AI engine","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12354747-B2"],
  ["ai","US-12488265-B2","Optimizing a prognostic-surveillance system","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12488265-B2"],
  ["ai","US-2025245956-A1","Deep learning-based translation reconceptualization method","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025245956-A1"],
  ["ai","US-12324695-B2","Systems, methods, and devices for medical image analysis and diagnosis","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12324695-B2"],

  ["pharma","US-2025213496-A1","Lipid nanoparticles and preparation methods and use thereof","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025213496-A1"],
  ["pharma","CN-115385859-A","Protein degradation agent capable of self-assembly in cells","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-115385859-A"],
  ["pharma","CN-116763807-B","Pharmaceutical composition containing clarithromycin and Shu Da pyridine","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-116763807-B"],
  ["pharma","US-2024299311-A1","Ionizable cationic lipids and lipid nanoparticles","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2024299311-A1"],
  ["pharma","WO-2022187650-A1","Heterobifunctional compositions for targeted protein degradation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/WO-2022187650-A1"],
  ["pharma","US-12364684-B2","Pharmaceutical composition","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12364684-B2"],
  ["pharma","CN-114174522-A","Lipid nanoparticles for nucleic-acid delivery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-114174522-A"],
  ["pharma","WO-2022200390-A3","Glycan-mediated protein degradation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/WO-2022200390-A3"],
  ["pharma","US-12263153-B2","Pharmaceutical composition, methods for treating and uses thereof","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12263153-B2"],
  ["pharma","CN-117925729-A","Transfection reagent based on blank lipid nanoparticles","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-117925729-A"],
  ["pharma","US-10086093-B2","miRNA profiling compositions and methods of use","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-10086093-B2"],
  ["pharma","WO-2022129925-A1","Novel bifunctional molecules for targeted protein degradation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/WO-2022129925-A1"],
  ["pharma","CN-119909167-A","Pharmaceutical composition containing anti-CCR8 antibody","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-119909167-A"],
  ["pharma","US-2020093936-A1","Therapeutic targeting of lipid nanoparticles","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2020093936-A1"],
  ["pharma","US-2025282886-A1","Glycan-mediated protein degradation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025282886-A1"],
  ["pharma","KR-20250091283-A","Intra-articular injection formulation containing colchicine","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/KR-20250091283-A"],
  ["pharma","US-12343405-B2","High sterol-containing lipid nanoparticles","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12343405-B2"],
  ["pharma","AU-2021400059-A1","Novel bifunctional molecules for targeted protein degradation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/AU-2021400059-A1"],
  ["pharma","JP-2025078802-A","Pharmaceutical composition","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/JP-2025078802-A"],
  ["pharma","WO-2021123332-A1","Lipid nanoparticles for delivery of nucleic acids","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/WO-2021123332-A1"],
  ["pharma","WO-2025111597-A1","Treatment for patients with mood disorders using an N-ethyl compound","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/WO-2025111597-A1"],
  ["pharma","EP-4427739-A2","Methods of preparing lipid nanoparticles","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-4427739-A2"],
  ["pharma","US-12180225-B2","N/O-linked degrons and degronimers for protein degradation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12180225-B2"],
  ["pharma","US-12310946-B2","Pharmaceutical composition for oral administration of edaravone","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12310946-B2"],
  ["pharma","US-2025049713-A1","Lipid nanoparticles for delivery of agents","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025049713-A1"],
  ["pharma","US-12441740-B2","N/O-linked degrons and degronimers for protein degradation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12441740-B2"],
  ["pharma","US-12290499-B2","Vigabatrin liquid pharmaceutical composition","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12290499-B2"],
  ["pharma","IL-294624-A","Lipid nanoparticles","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/IL-294624-A"],
  ["pharma","US-12458652-B2","Pharmaceutical compositions of spironolactone for deep dermal drug delivery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12458652-B2"],
  ["pharma","CN-119040330-B","siRNA for regulating AGT gene expression","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-119040330-B"],
  ["pharma","US-12357580-B2","Lipid nanoparticle compositions for delivery of mRNA and long nucleic acids","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12357580-B2"],
  ["pharma","US-2025269049-A1","CD20-targeted antibody coupling pharmaceutical preparation","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025269049-A1"],

  ["materials","US-2023268547-A1","Solid-state interlayer for solid-state battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2023268547-A1"],
  ["materials","CN-105826473-A","High-efficiency and low-cost perovskite solar cell","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-105826473-A"],
  ["materials","CN-120752757-A","Negative electrode materials for secondary batteries","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-120752757-A"],
  ["materials","US-2025149754-A1","Solid-state battery and electronic device","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025149754-A1"],
  ["materials","CN-114937744-A","Full-spectrum perovskite solar cell","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-114937744-A"],
  ["materials","US-12265214-B2","Method of manufacturing monolithic optical systems","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12265214-B2"],
  ["materials","EP-4508382-A1","Preparation of negative electrode material using length-wise graphitization","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-4508382-A1"],
  ["materials","WO-2021021597-A1","Phase-change electrolyte separator for a solid-state battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/WO-2021021597-A1"],
  ["materials","CN-110299455-B","Regulating surface morphology of lead-free perovskite film","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-110299455-B"],
  ["materials","CN-119238837-A","Membrane-aerogel composite tubular tissue engineering scaffold","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-119238837-A"],
  ["materials","US-12247251-B2","Enzymatic circuits for molecular sensors","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12247251-B2"],
  ["materials","EP-3043411-A4","Solid-state battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-3043411-A4"],
  ["materials","KR-102786561-B1","Cathode active material and lithium secondary battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/KR-102786561-B1"],
  ["materials","US-2025056706-A1","Apparatus and methods for generating condensed plasmoids","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025056706-A1"],
  ["materials","US-12295430-B1","Impact absorbing composite material","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12295430-B1"],
  ["materials","US-2025038199-A1","Cathode active material for all-solid-state battery comprising coating layer","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025038199-A1"],
  ["materials","US-2025246628-A1","Cathode inter-connect with polymer-based schemes","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025246628-A1"],
  ["materials","US-2025323333-A1","Packaging material for battery and secondary battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025323333-A1"],
  ["materials","US-2025266512-A1","Battery assemblies with molded polymer battery management unit","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025266512-A1"],
  ["materials","WO-2019177067-A1","Structured nanoporous materials and manufacture thereof","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/WO-2019177067-A1"],
  ["materials","US-12234575-B1","Devices and methods for nanofiber-based membrane manufacture","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12234575-B1"],
  ["materials","EP-4120419-B1","Electrolyte for lithium secondary battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-4120419-B1"],
  ["materials","US-2023335874-A1","Manufacturing all-solid-state battery comprising solid electrolyte material","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2023335874-A1"],
  ["materials","US-12586869-B2","Separator, battery cell, battery, and electric device","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12586869-B2"],
  ["materials","EP-3663265-B1","Positive electrode active material for lithium secondary battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-3663265-B1"],
  ["materials","US-2025070329-A1","Elastic sheet for all solid-state battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025070329-A1"],
  ["materials","CN-119824609-A","Method for preparing separator of secondary battery","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/CN-119824609-A"],
  ["materials","EP-4498459-A1","Oxygen evolution reaction catalyst and preparation method","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/EP-4498459-A1"],
  ["materials","US20260229602A1","Solid-state battery","Google Patents","https://patents.google.com/patent/US20260229602A1/en"],
  ["materials","US-2025029638-A1","Memory device including 2-transistor memory cell structure for neural network","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-2025029638-A1"],
  ["materials","US-12250830-B2","3D semiconductor memory devices and structures","PubChem","https://pubchem.ncbi.nlm.nih.gov/patent/US-12250830-B2"],
  ["materials","US-20260024755-A1","Battery interface and energy-material structure signal","Google Patents","https://patents.google.com/patent/US20260024755A1/en"]
].map(([category, number, title, source, url]) => ({ category, number, title, source, url }));

const zh = {
  robotics: "机器人",
  ai: "AI",
  pharma: "制药",
  materials: "新材料"
};

function esc(s) {
  return String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function problem(item) {
  const t = item.title.toLowerCase();
  if (item.category === "robotics") {
    if (t.includes("surgical") || t.includes("medical") || t.includes("instrument")) return "它发现的新问题是：机器人进入手术、牙科、内镜或医疗器械场景后，难点不再只是“机械臂能不能动”，而是狭小空间中的定位、交接、视野变化、器械更换和安全边界能否被稳定控制。";
    if (t.includes("autonomous") || t.includes("vehicle") || t.includes("drone")) return "它发现的新问题是：自主移动设备面对开放环境时，真正卡住商业化的不是单点感知，而是路径、互动对象、可见性、记忆和异常行为之间的连续决策。";
    return "它发现的新问题是：机器人系统在真实部署中经常被维护、校准、末端工具适配和多传感器协同拖慢，单个动作演示不能直接变成可交付产品。";
  }
  if (item.category === "ai") {
    if (t.includes("hallucination") || t.includes("jailbreak") || t.includes("regulation")) return "它发现的新问题是：大模型的风险不只是回答错误，而是错误回答、越权提示、不可追溯生成和业务规则冲突会进入企业流程，造成安全和合规风险。";
    if (t.includes("retrieval") || t.includes("validation") || t.includes("onboarding")) return "它发现的新问题是：AI 系统如果缺少可验证的数据上下文，就会把检索、推荐、生成和执行混在一起，导致结果看似智能却难以被企业采纳。";
    if (t.includes("neural") || t.includes("accelerator") || t.includes("memory")) return "它发现的新问题是：模型能力增长后，瓶颈开始转向算力、存储、推理延迟、模型验证和端侧部署，而不是单纯扩大参数规模。";
    return "它发现的新问题是：AI 落地需要把模型、数据、任务流程、评估指标和人机反馈连成闭环，否则技术效果很难转化为稳定产品。";
  }
  if (item.category === "pharma") {
    if (t.includes("lipid") || t.includes("mrna") || t.includes("sirna") || t.includes("nucleic")) return "它发现的新问题是：核酸药物和递送平台的关键不只是载荷分子，而是脂质组成、粒径、包封、稳定性、转染效率和体内分布共同决定能否转化。";
    if (t.includes("degradation") || t.includes("degron")) return "它发现的新问题是：靶向蛋白降解不能只解决“结合靶点”，还要让双功能分子、连接子、细胞内定位和降解机制形成可重复的药效路径。";
    if (t.includes("antibody") || t.includes("cd20") || t.includes("ccr")) return "它发现的新问题是：抗体和偶联药物的竞争正在从靶点发现走向制剂、缓冲体系、偶联方式、适应症和给药窗口的系统优化。";
    return "它发现的新问题是：药物组合物从实验结果走向产品时，常常被稳定性、剂型、给药路径、晶型、溶出和患者依从性限制。";
  }
  if (item.category === "materials") {
    if (t.includes("battery") || t.includes("cathode") || t.includes("electrode") || t.includes("separator") || t.includes("electrolyte")) return "它发现的新问题是：电池材料的竞争不只是更换一种活性物质，而是界面接触、离子传输、涂层、隔膜、封装和循环稳定性之间的系统平衡。";
    if (t.includes("perovskite") || t.includes("solar")) return "它发现的新问题是：钙钛矿和光伏材料的难点从效率记录转向大面积制备、缺陷控制、稳定性、无铅化和封装可靠性。";
    if (t.includes("aerogel") || t.includes("composite") || t.includes("nanofiber") || t.includes("nanoporous")) return "它发现的新问题是：高性能复合材料不仅要有轻量、高强或隔热性能，还要解决成型、孔结构、界面结合和批量制造一致性。";
    return "它发现的新问题是：先进材料的价值越来越依赖成分、微结构、工艺参数和可测性能指标之间的组合，而不是单独声明一种材料名称。";
  }
}

function solution(item) {
  const t = item.title.toLowerCase();
  if (item.category === "robotics") return `它采用的方案围绕“${esc(item.title)}”展开，把机构、传感、控制或任务流程拆成可验证模块，再通过位置补偿、边界提示、工具耦合、低可见度控制、路径记忆或执行器结构来降低现场不确定性。`;
  if (item.category === "ai") return `它采用的方案围绕“${esc(item.title)}”展开，把模型能力嵌入具体业务闭环，通过检索增强、验证、监管、弱监督训练、专用处理引擎、数据水印或场景化反馈来约束生成结果。`;
  if (item.category === "pharma") return `它采用的方案围绕“${esc(item.title)}”展开，通过脂质/缓冲体系、药物组合物、抗体或双功能分子、给药路径、制备方法和稳定性条件，把生物学机制转化为可制造、可储存、可给药的方案。`;
  if (item.category === "materials") return `它采用的方案围绕“${esc(item.title)}”展开，把材料组成、涂层、孔结构、界面层、隔膜、电解质、封装或制造设备参数化，使材料性能能够被测试、复现和写入权利要求。`;
}

function cue(item) {
  if (item.category === "robotics") return "创新提示：机器人团队应把“场景约束”写成技术特征，例如视野受限、工具切换、边界提示、运动补偿、维护方式和人机交接，这些比单纯描述一个机械臂更容易形成可执行的专利布局。";
  if (item.category === "ai") return "创新提示：AI 专利不要只写模型名称，要写清输入数据如何结构化、模型输出如何被验证、错误如何被拦截、人工反馈如何进入闭环，以及系统如何和业务流程连接。";
  if (item.category === "pharma") return "创新提示：生命科学团队要把“实验室细节”变成组合保护，包括配方比例、缓冲条件、载体结构、降解路径、稳定性数据、给药方式和适应症选择。";
  return "创新提示：新材料团队应把最新科学发现落到可测指标，例如界面粗糙度、孔径分布、涂层厚度、离子电导、热稳定性、循环寿命和加工窗口。";
}

const issues = [
  ["003", "机器人前沿：医疗机器人、自动驾驶与现场部署", items.slice(0, 16)],
  ["004", "机器人前沿：执行机构、传感可见性与自动化制造", items.slice(16, 32)],
  ["005", "AI前沿：大模型治理、RAG与模型验证", items.slice(32, 48)],
  ["006", "AI前沿：视觉、算力、医疗与场景化智能", items.slice(48, 64)],
  ["007", "制药前沿：LNP、核酸递送与蛋白降解", items.slice(64, 80)],
  ["008", "制药前沿：抗体、剂型、给药系统与转化细节", items.slice(80, 96)],
  ["009", "新材料前沿：固态电池、钙钛矿与复合结构", items.slice(96, 112)],
  ["010", "新材料前沿：电极、隔膜、封装与制造参数", items.slice(112, 128)]
];

function articleHtml(issue, title, batch) {
  const mentions = batch.map(i => `"${i.number}"`).join(",\n              ");
  const cards = batch.map((item, idx) => `
          <section class="article-section patent-breakdown-section">
            <h2>${idx + 1}. ${esc(item.title)}</h2>
            <p><strong>代表专利：</strong><a href="${item.url}" target="_blank" rel="noopener">${esc(item.number)}, ${esc(item.title)}</a>。来源：${esc(item.source)}。方向：${zh[item.category]}。</p>
            <div class="patent-breakdown">
              <article><h3>发现了什么新问题？</h3><p>${problem(item)}</p></article>
              <article><h3>用什么手段解决？</h3><p>${solution(item)}</p></article>
              <article><h3>创新提示是什么？</h3><p>${cue(item)}</p><p class="english-copy">Innovation cue: protect the problem definition, the measurable technical means, and the deployment constraint, not only the headline technology name.</p></article>
            </div>
          </section>`).join("\n");

  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>前沿专利观察第${issue}期：${esc(title)} | Ma Su Team</title>
    <meta name="description" content="前沿专利观察第${issue}期，精选16件${esc(title)}方向公开专利，说明新问题、解决手段和创新提示。" />
    <link rel="canonical" href="https://www.masuip.com/articles/patent-biweekly-issue-${issue}.html" />
    <link rel="stylesheet" href="../styles.css" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": "https://www.masuip.com/articles/patent-biweekly-issue-${issue}.html#article",
        "url": "https://www.masuip.com/articles/patent-biweekly-issue-${issue}.html",
        "headline": "前沿专利观察第${issue}期：${esc(title)}",
        "inLanguage": ["zh-CN", "en"],
        "datePublished": "${today}",
        "dateModified": "${today}",
        "author": {"@id": "https://www.masuip.com/#organization"},
        "publisher": {"@id": "https://www.masuip.com/#organization"},
        "isPartOf": {"@id": "https://www.masuip.com/patent-biweekly.html#collection"},
        "mentions": [
              ${mentions}
        ]
      }
    </script>
  </head>
  <body class="article-page patent-issue-page">
    <header class="site-header content-header">
      <a class="brand" href="../index.html" aria-label="Ma Su IP Strategy"><span class="brand-mark">MS</span><span><strong>Ma Su Team</strong><small>Cross-border Patent Strategy</small></span></a>
      <nav class="main-nav" aria-label="Primary navigation">
        <a href="../index.html">Home</a><a href="../knowledge.html">Knowledge</a><a href="../articles.html">Articles</a><a href="../patent-biweekly.html">前沿专利观察</a><a href="../methodology.html">Methodology</a><a href="../about.html">About</a><a href="../contact.html">Contact</a>
      </nav>
    </header>
    <main>
      <article class="article-shell">
        <p class="eyebrow">前沿专利观察 / Patent Frontier Watch</p>
        <h1>第${issue}期：${esc(title)}</h1>
        <p class="article-deck">本期精选16件公开专利，不做数量播报，而是逐件拆解：它发现了什么新问题，用什么技术手段解决，以及企业和科研团队可以从中得到什么创新提示。</p>
        <p class="article-deck english-copy">Issue ${issue} reviews 16 public patent documents as frontier signals: problem discovered, technical means used, and innovation cues for founders and research teams.</p>
        <div class="article-meta"><span>By Ma Su Team</span><span>${today}</span><span>16 patent signals</span></div>
        <section class="article-section"><h2>本期读法</h2><p>我们重点看三类价值：第一，专利是否把前人没有明确工程化的问题说清楚；第二，是否用了可验证、可参数化、可制造的技术组合；第三，是否给后续研发、FTO和专利布局留下新的启发。</p></section>
${cards}
        <section class="article-section"><h2>资料来源 / Sources</h2><p>本期基于 PubChem patent pages 与 Google Patents 公开页面整理。公开页面中的法律状态、同族和文本摘要可能随数据库更新变化；商业决策应进一步核验官方登记簿、审查历史和权利要求。</p><ul>
${batch.map(i => `          <li><a href="${i.url}" target="_blank" rel="noopener">${esc(i.number)} - ${esc(i.title)}</a></li>`).join("\n")}
        </ul></section>
      </article>
    </main>
    <footer><p>&copy; 2026 Ma Su Team</p><p>Patent Frontier Watch by Ma Su Team.</p></footer>
    <script src="../content-data.js"></script><script src="../content-ui.js"></script><script src="../i18n.js"></script>
  </body>
</html>
`;
}

for (const [issue, title, batch] of issues) {
  const file = path.join(ROOT, "articles", `patent-biweekly-issue-${issue}.html`);
  fs.writeFileSync(file, articleHtml(issue, title, batch), "utf8");
  fs.mkdirSync(path.join(ROOT, "public", "articles"), { recursive: true });
  fs.copyFileSync(file, path.join(ROOT, "public", "articles", `patent-biweekly-issue-${issue}.html`));
}

function updateBetween(file, start, end, replacement) {
  const target = path.join(ROOT, file);
  const text = fs.readFileSync(target, "utf8");
  const s = text.indexOf(start);
  const e = text.indexOf(end, s);
  if (s < 0 || e < 0) throw new Error(`markers not found in ${file}`);
  const next = text.slice(0, s + start.length) + replacement + text.slice(e);
  fs.writeFileSync(target, next, "utf8");
}

const archiveCards = issues.slice().reverse().map(([issue, title, batch]) => `
          <article class="content-card">
            <p>Issue ${issue} | ${today}</p>
            <h3>${esc(title)}</h3>
            <span>16件公开专利，覆盖${[...new Set(batch.map(i => zh[i.category]))].join("、")}方向的新问题、解决手段和创新提示。</span>
            <a href="articles/patent-biweekly-issue-${issue}.html">阅读本期</a>
          </article>`).join("\n") + `
          <article class="content-card">
            <p>Issue 002 | 2026-08-14</p>
            <h3>四个工程化专利信号</h3>
            <span>机器人运动系统、企业 AI 配置校验、LNP 制剂稳定性、固态电池界面微结构。</span>
            <a href="articles/patent-biweekly-issue-002.html">阅读本期</a>
          </article>
          <article class="content-card">
            <p>Issue 001 | 2026-08-12</p>
            <h3>机器人、AI、制药、新材料八个专利信号</h3>
            <span>人形机器人、机器人技能迁移、RAG、LLM 供应链安全、递送系统和新材料结构。</span>
            <a href="articles/patent-biweekly-issue-001.html">阅读本期</a>
          </article>
        </div>`;

updateBetween("patent-biweekly.html", '<div class="content-grid article-index">', '</div>\n      </section>\n\n      <section class="honors-band">', archiveCards);

let pb = fs.readFileSync(path.join(ROOT, "patent-biweekly.html"), "utf8");
const hasPartBlocks = issues.slice().reverse().map(([issue, title]) => `              {
                "@type": "Article",
                "@id": "https://www.masuip.com/articles/patent-biweekly-issue-${issue}.html#article",
                "url": "https://www.masuip.com/articles/patent-biweekly-issue-${issue}.html",
                "headline": "前沿专利观察第${issue}期：${esc(title)}",
                "datePublished": "${today}"
              },`).join("\n");
if (!pb.includes("patent-biweekly-issue-010.html#article")) {
  pb = pb.replace(`              {
                "@type": "Article",
                "@id": "https://www.masuip.com/articles/patent-biweekly-issue-002.html#article",`, `${hasPartBlocks}
              {
                "@type": "Article",
                "@id": "https://www.masuip.com/articles/patent-biweekly-issue-002.html#article",`);
}
pb = pb.replace(/<p class="eyebrow">Latest Issue \| 第二期<\/p>\s*<h2>[\s\S]*?<\/div>\s*<\/section>/, `<p class="eyebrow">Latest Issue | 第十期</p>
        <h2>${today}，第十期完成128件前沿专利批量观察。</h2>
        <p>本次批量更新分为第003至第010期，共128件公开专利，覆盖机器人、AI、制药、新材料四个方向。每件专利都按“新问题、解决手段、创新提示”拆解。</p>
        <p class="english-copy">Issues 003-010 publish a batch of 128 patent signals across robotics, AI, pharma, and advanced materials.</p>
        <div class="inline-actions">
          <a class="primary-action" href="articles/patent-biweekly-issue-010.html">阅读第十期 / Read Issue 010</a>
          <a class="secondary-action" href="articles/patent-biweekly-issue-003.html">从第三期开始 / Start Issue 003</a>
          <a class="secondary-action" href="patent-biweekly-subscribe.html">订阅栏目 / Subscribe</a>
        </div>
      </section>`);
fs.writeFileSync(path.join(ROOT, "patent-biweekly.html"), pb, "utf8");

const articleCards = issues.slice().reverse().map(([issue, title]) => `<article class="content-card" data-series="patent-biweekly" data-date="${today}">
            <p>Patent Frontier Watch | ${today}</p>
            <h3>前沿专利观察第${issue}期：${esc(title)}</h3>
            <span>精选16件公开专利，拆解新问题、解决手段和创新提示。</span>
            <a href="articles/patent-biweekly-issue-${issue}.html">Read article</a>
            <small>前沿专利观察</small>
          </article>
`).join("");
let articles = fs.readFileSync(path.join(ROOT, "articles.html"), "utf8");
articles = articles.replace('<div class="content-grid article-index" id="article-list">', `<div class="content-grid article-index" id="article-list">${articleCards}`);
fs.writeFileSync(path.join(ROOT, "articles.html"), articles, "utf8");

let sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const sitemapEntries = issues.map(([issue]) => `  <url>
    <loc>https://www.masuip.com/articles/patent-biweekly-issue-${issue}.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>`).join("\n");
sitemap = sitemap.replace('  <url>\n    <loc>https://www.masuip.com/methodology.html</loc>', `${sitemapEntries}\n  <url>\n    <loc>https://www.masuip.com/methodology.html</loc>`);
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap, "utf8");

let llms = fs.readFileSync(path.join(ROOT, "llms.txt"), "utf8");
llms = llms.replace("- Patent Frontier Watch Issue 002: https://www.masuip.com/articles/patent-biweekly-issue-002.html", "- Patent Frontier Watch Issue 002: https://www.masuip.com/articles/patent-biweekly-issue-002.html\n" + issues.map(([issue]) => `- Patent Frontier Watch Issue ${issue}: https://www.masuip.com/articles/patent-biweekly-issue-${issue}.html`).join("\n"));
llms = llms.replace("Issue 002 was published on 2026-08-14.", "Issues 003-010 were published on 2026-08-23 as a batch of 128 patent signals across robotics, AI, pharma, and advanced materials. Each entry explains the newly identified problem, the technical solution, and the innovation cue for companies and research teams.\n\nIssue 002 was published on 2026-08-14.");
fs.writeFileSync(path.join(ROOT, "llms.txt"), llms, "utf8");

for (const file of ["patent-biweekly.html", "articles.html", "sitemap.xml", "llms.txt"]) {
  fs.copyFileSync(path.join(ROOT, file), path.join(ROOT, "public", file));
}

console.log(`Generated ${issues.length} issues and ${items.length} patent entries.`);
