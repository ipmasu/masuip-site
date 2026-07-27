from __future__ import annotations

import html
import re
from pathlib import Path

from generate_wechat_articles import ARTICLE_META, EXISTING_ARTICLES


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "articles" / "source-wechat-batch.txt"
PATENT_INFO_SOURCE = ROOT / "articles" / "source-using-patent-information-for-innovation.md"


EXISTING_META = [
    {
        "slug": "using-patent-information-for-innovation",
        "category": "Patent Maps",
        "title_en": "Using Patent Information for Innovation",
        "description": "How patent information can guide invention mining, R&D decisions, and patent portfolio design.",
        "why": "Patent information is not only prior art. Used correctly, it becomes a map of technical problems, alternative means, and future portfolio options.",
    },
    {
        "slug": "ai-era-science-innovation-framework",
        "category": "AI Era",
        "title_en": "A Practical Course Framework for Science and Innovation",
        "description": "From discovering real problems to patent search, AI collaboration, prototyping, validation, and IP protection.",
        "why": "AI makes innovation education more practical, but students still need a disciplined route from problem discovery to evidence-based solution design.",
    },
    {
        "slug": "china-prosecution-for-foreign-firms",
        "category": "China Practice",
        "title_en": "What Foreign Patent Firms Should Know Before China Prosecution",
        "description": "Why China entry should be treated as a strategic examination event, not a translation task.",
        "why": "For overseas firms, China prosecution is often decided before the first office action, by the quality of pre-filing claim analysis and local examination judgment.",
    },
]


ARTICLE_TEXT: dict[str, list[tuple[str, list[str]]]] = {
    "enterprise-ipr-patent-mining-five-step-method": [
        (
            "The Real Problem Inside Enterprise Patent Mining",
            [
                "Many enterprise IPR teams face the same scene every year: patent targets arrive from management, while R&D engineers say that there is nothing worth writing. If the IPR team only urges harder, the result is often a pile of low-value ideas created merely for filing numbers. Those applications may be difficult to grant, and even if granted, they may not protect a business position.",
                "High-value patents are rarely discovered by sitting in an office and waiting for inventors to report them. They must be mined from real technical work. The key is to stop asking engineers, 'Do you have an invention?' and start asking, 'What technical problem are you actually fighting?'",
            ],
        ),
        (
            "Step One: Use a Standard Questionnaire to Locate Valuable Technical Directions",
            [
                "A good patent-mining project begins with a structured technical-problem questionnaire. The questionnaire should not ask engineers to write patent claims. It should ask them to identify the hardest technical problems in their current work, the technical branches that will matter most in the next three years, and small improvements that have worked in practice but have never been formally recorded.",
                "After collecting responses, the IPR team should count repeated problems, compare them across teams, and identify three to five directions worth deeper work. These directions are not chosen by intuition. They are selected from the collective signal of the R&D front line.",
            ],
        ),
        (
            "Step Two: Confirm, Supplement, and Form Initial Solution Ideas",
            [
                "The first questionnaire produces candidate directions, but those directions must be verified. A short confirmation meeting should include R&D engineers, process engineers, testing staff, production-line technicians, and maintenance personnel. Each problem should be checked for accuracy, representativeness, and practical value.",
                "At this stage, the team should also collect initial solution ideas. A complete solution is not required. What matters is a rough technical route and a clear explanation of why the problem is worth solving. The team should also use a product-module map or process-walkthrough method to check whether important problems were missed.",
            ],
        ),
        (
            "Step Three: Search Globally from the Perspective of Technical Problems",
            [
                "Once the technical problems are clear, patent searching begins. The search should include Chinese, US, European, PCT, Japanese, and Korean patent databases, as well as papers, standards, industry reports, and public competitor information. The goal is not simply to prove that nobody has done the same thing. The goal is to understand how others solved similar problems, where their solutions are weak, and which technical means can be borrowed or modified.",
                "This is where examiner-style logic matters. Search by the abstracted technical problem, not only by the product name. A problem in medical sampling may be better searched as 'piercing skin' or 'controlled penetration' than as 'blood collection'. A narrow product keyword often hides the best inspiration.",
            ],
        ),
        (
            "Step Four: Let Practice Generate New Problems",
            [
                "Many IPR teams stop after writing a search report. That is exactly where the real mine begins. Candidate solutions should be tested in small, low-cost production or design scenarios. When a borrowed technical means enters the company's own process, new incompatibilities appear: tolerances are different, operators are slower, materials behave unexpectedly, or a solved problem creates a new problem.",
                "Those mismatches are extremely valuable. They are real, company-specific, and often unique. Solving them can create patentable technical solutions that competitors have not faced because they do not share the same combination of constraints.",
            ],
        ),
        (
            "Step Five: Roadshow and Debate Before Filing",
            [
                "The final patent layout should be decided through an internal roadshow. Product managers, technical directors, production leaders, IPR staff, and external patent professionals should review the discovered problems and proposed solutions together. The discussion should test technical feasibility, market value, grant probability, and strategic importance.",
                "Some solutions should be filed immediately as core patents. Some should be reserved for further validation. Some should remain trade secrets. A strong patent portfolio is not the result of one person's imagination. It is a decision system that connects R&D reality, examination logic, and business strategy.",
            ],
        ),
    ],
    "responding-to-inventive-step-office-actions": [
        (
            "Why Inventive-Step Responses Are a Technical Craft",
            [
                "When an applicant receives an office action saying that an invention lacks inventiveness, the first reaction is often anxiety. But an inventive-step response is not a matter of arguing emotionally with the examiner. It is a technical craft: understand the examiner's reasoning, locate the weak point in that reasoning, and rebuild the logic around the actual technical contribution.",
                "In Chinese invention patent examination, the key is to understand the three-step method. The examiner identifies the closest prior art, determines the distinguishing technical features and the actual technical problem solved by the invention, and then asks whether a person skilled in the art would have been motivated to obtain the claimed solution.",
            ],
        ),
        (
            "Reframe the Actual Technical Problem",
            [
                "Many responses fail because they accept the examiner's definition of the technical problem too quickly. If the problem is defined too broadly, almost any difference can be treated as a routine choice. The applicant must analyze the distinguishing features carefully and explain what specific technical problem they jointly solve.",
                "For example, if two known functions are merely placed together, the examiner may see a simple aggregation. But if the combination avoids a specific damage mode, improves a constrained operating process, or solves a problem that the prior art never recognized, the inventive-step analysis changes.",
            ],
        ),
        (
            "Challenge Common Knowledge and Routine Choice",
            [
                "Examiners sometimes classify a distinguishing feature as common knowledge or a conventional technical means. The applicant should not accept this as a conclusion without evidence. Common knowledge should normally be supported by textbooks, handbooks, or other recognized materials. If the feature is not truly conventional in the relevant technical field, the response should say so clearly.",
                "The stronger argument is not merely 'this is not common knowledge'. It is to explain why the feature plays a specific role in the claimed solution and why that role would not have been expected from ordinary use.",
            ],
        ),
        (
            "Attack the Alleged Technical Motivation",
            [
                "When the examiner combines multiple references, the response should compare their technical fields, problems, means, and effects. If the references solve different problems, rely on incompatible assumptions, or would create conflict when combined, then the alleged motivation is weak.",
                "A persuasive response shows that the examiner's combination is a hindsight reconstruction. The question is not whether the invention can be assembled after reading the application. The question is whether a skilled person would have had a reason to make that path before seeing the invention.",
            ],
        ),
        (
            "Use Unexpected Technical Effects and New-Problem Discovery",
            [
                "Unexpected technical effects are powerful. Comparative data, experiments, performance improvements, and stability records can all support inventiveness. If the application disclosed enough basis, these effects should be organized in a clear and quantitative way.",
                "A higher-level argument is that the invention discovered a new technical problem. If the prior art did not recognize the problem at all, then the contribution is not only the solution but also the direction of technical progress. A good response turns examination into a dialogue about how technology actually develops.",
            ],
        ),
    ],
    "using-divisional-applications-to-extend-patent-protection": [
        (
            "Divisional Applications Are Strategic Tools, Not Administrative Leftovers",
            [
                "A divisional application should not be viewed merely as a procedural response to unity objections. Used well, it can extend a patent protection chain, preserve claim opportunities, and create a layered portfolio around one technical disclosure.",
                "Many inventions contain more than one protectable idea. A single claim set may be too narrow to cover all commercial directions or too broad to survive examination. Divisional practice allows an applicant to separate technical themes and pursue them with different claim focuses.",
            ],
        ),
        (
            "Why One Application Often Cannot Carry the Whole Business",
            [
                "A product may include a core structure, a control method, a material improvement, a manufacturing process, and an application scenario. If all of these are forced into one claim strategy, some valuable content may be abandoned during prosecution. Later, when competitors enter through a side door, the company may find that the original filing disclosed useful material but failed to claim it.",
                "A divisional strategy preserves the ability to convert disclosed alternatives into independent protection. It is especially useful when the technical direction is commercially uncertain at the filing date but may become important later.",
            ],
        ),
        (
            "How to Design a Divisional Chain",
            [
                "The first step is to map the disclosure. Identify every technical problem, every group of technical features, and every alternative embodiment that may support a separate claim direction. The second step is to rank these directions by business value, grant probability, competitor blocking effect, and fallback usefulness.",
                "The third step is timing. A divisional should be considered while procedural opportunities remain available. If the applicant waits until the parent case is closed, important options may disappear. Divisional planning should therefore be discussed during drafting, during office-action response, and before allowance.",
            ],
        ),
        (
            "The Examiner's Perspective",
            [
                "From an examiner's perspective, each divisional application must still have support in the original disclosure and must be examined as a real invention. The applicant should avoid artificial splitting that creates weak cases. A strong divisional has its own technical problem, its own feature combination, and a claim scope that can be defended.",
                "The purpose is not to multiply filings mechanically. The purpose is to protect different layers of value that were already present in the original technical disclosure.",
            ],
        ),
    ],
    "ai-era-patent-mining-and-layout": [
        (
            "AI Turns Patent Mining into a Structured Combination Game",
            [
                "In traditional patent mining, technical disclosure often arrives like toothpaste squeezed from a tube: inventors write whatever they happen to remember, while patent engineers search scattered keywords and worry about missing prior art. In complex technical systems, this method easily leaves gaps.",
                "AI changes the workflow. It does not replace human creativity or legal judgment, but it is excellent at structuring information, expanding candidate features, and running large combination exercises. The practical method is a table-based approach.",
            ],
        ),
        (
            "Step One: Decompose the Existing Technical System",
            [
                "Take a power battery mechanical structure as an example. The team can decompose it into functional positions: housing structure, cooling structure, support structure, sealing structure, fastening method, thermal insulation, crash protection, monitoring layout, and manufacturing process.",
                "Each row of the table represents a technical function. The current technical feature is then placed into that row. AI can assist by reading patents and papers, suggesting missing functional positions, and making the decomposition more complete.",
            ],
        ),
        (
            "Step Two: Replace Features Across Fields",
            [
                "For each functional position, ask AI to list all technical means that can perform the same function, regardless of industry. A cooling position may generate liquid cooling plates, side cooling, immersion cooling, heat pipes, forced air cooling, phase-change materials, or direct refrigerant cooling. A support position may generate honeycomb structures, foam metal, truss structures, integrated cast ribs, or composite fillers.",
                "The value of AI is breadth. Human engineers tend to remain inside their own industry. AI can help bring in structures from aerospace, construction, electronics, biomimetics, and chemical engineering.",
            ],
        ),
        (
            "Step Three: Combine, Filter, and Review",
            [
                "Once each row has candidate features, complete technical schemes can be generated by combining one option from each row. This may create thousands of possibilities. AI can quickly remove combinations with physical conflict, obvious impracticality, or clear prior-art overlap.",
                "The remaining list is not yet a patent portfolio. It is a seed library. Product managers, engineers, and patent professionals must evaluate cost, manufacturability, market direction, grant probability, and defensive value.",
            ],
        ),
        (
            "The Human Role Becomes More Important",
            [
                "AI can fill the table, but humans decide what matters. A carbon-fiber housing with side cooling may be too expensive for current customers but valuable as a defensive patent. A composite housing with integrated support may match a next-generation product. A simple fastening substitution may be novel but unreliable.",
                "In the AI era, patent mining becomes less like waiting for inspiration and more like structured innovation design: functional decomposition, AI expansion, matrix combination, expert screening, and portfolio decision.",
            ],
        ),
    ],
    "how-patents-balance-public-interest": [
        (
            "The Patent System Is a Bargain with Society",
            [
                "A patent is often misunderstood as a monopoly that only benefits the owner. In reality, the patent system is a bargain. The inventor discloses the technical solution to society. In exchange, society grants a time-limited exclusive right. After the term ends, the disclosed technology belongs to the public domain.",
                "This bargain is why patent documents must be public. A patent is not a secret certificate. It is a technical teaching document that lets others learn from the invention, avoid repeating the same work, and develop further improvements.",
            ],
        ),
        (
            "Why Disclosure Matters",
            [
                "Without patents, companies may keep important technology as trade secrets. Some secrets can disappear when engineers leave or when products change. Public patent disclosure creates a durable technical record. Future researchers can read it, compare it, design around it, improve it, or challenge it.",
                "The public interest is therefore not an afterthought. It is built into the system. The price of exclusivity is disclosure.",
            ],
        ),
        (
            "Why Exclusive Rights Also Matter",
            [
                "Innovation is costly. It requires trial, failure, equipment, personnel, testing, and market risk. If every successful result can be copied immediately, many innovators will underinvest. Patent rights provide a period in which the innovator can recover cost, negotiate licensing, attract financing, or build a market position.",
                "The system is not designed to reward vague ideas. It rewards technical solutions that are new, inventive, useful, and sufficiently disclosed.",
            ],
        ),
        (
            "A Balanced View for Companies",
            [
                "For companies, the patent system should not be used only as a number game. A good portfolio protects real technical contribution, supports R&D direction, and communicates innovation capability. At the same time, companies must respect the public boundary: once a patent expires, the disclosed technology becomes a shared resource.",
                "Protecting intellectual property is therefore not the opposite of protecting the public interest. When the system works properly, it protects both innovation incentives and the long-term accumulation of human knowledge.",
            ],
        ),
    ],
    "generic-drug-patent-layout-strategy": [
        (
            "Generic Drug Competition Is Also Patent Competition",
            [
                "Generic-drug strategy is not only a matter of formulation, approval, and manufacturing. It is also a matter of patent layout. Originator companies often build dense patent fences around compounds, crystal forms, formulations, dosage regimens, manufacturing methods, indications, delivery devices, and combinations.",
                "A generic company must understand this fence before deciding where to enter. The question is not simply whether the core compound patent has expired. The question is whether later patents still control commercially important routes.",
            ],
        ),
        (
            "Map the Patent Barrier Layer by Layer",
            [
                "The first task is to build a patent map. Identify the basic compound patents, then examine secondary patents covering salts, polymorphs, particle size, sustained-release structures, excipients, manufacturing processes, packaging, medical use, patient groups, and dosage schedules.",
                "Each layer should be connected to product reality. Some patents may look broad but be easy to design around. Others may cover a small feature that is essential to stability, bioavailability, or regulatory equivalence.",
            ],
        ),
        (
            "Choose Between Avoidance, Challenge, and Improvement",
            [
                "After mapping, the company has three strategic routes. The first is avoidance: design a formulation or process that does not fall into the patent scope. The second is challenge: attack weak patents through invalidation or other legal routes. The third is improvement: develop a new technical solution that creates the company's own patent position.",
                "The best route depends on technical feasibility, regulatory timing, cost, market size, and evidence strength. A patent strategy that ignores pharmaceutical development reality is just paper. A development strategy that ignores patent barriers is dangerous.",
            ],
        ),
        (
            "Build Your Own Defensive Portfolio",
            [
                "Generic companies should not only avoid others' patents. They should also protect their own improvements. Manufacturing stability, impurity control, dissolution performance, excipient selection, packaging, storage, and patient-compliance improvements can all become patentable when they solve real technical problems.",
                "In pharmaceutical IP, the winner is often the party that understands both the regulatory route and the patent map.",
            ],
        ),
    ],
    "patent-claim-drafting-guide": [
        (
            "Claims Are the Legal Shape of Technical Control",
            [
                "A patent claim is not a literary description of an invention. It is the legal boundary of technical control. Good claim drafting begins with one question: what technical features must a competitor use if it wants to obtain the same technical effect?",
                "Many weak claims fail because they describe products too specifically. They include unnecessary materials, dimensions, connection forms, or implementation details. The result is easy to avoid. A strong claim captures the essential technical relationship without being unsupported or vague.",
            ],
        ),
        (
            "Start from the Technical Problem",
            [
                "Before drafting, identify the technical problem and the feature combination that solves it. Do not start by copying the embodiment. Start by asking which elements are essential, which elements are optional, and which alternatives can perform the same function.",
                "This is where patent-map thinking helps. If multiple technical means can solve the same problem, the claim should not accidentally limit itself to only one means unless the specification cannot support broader language.",
            ],
        ),
        (
            "Build Claim Layers",
            [
                "A claim set should have layers. The independent claim protects the core technical contribution. Dependent claims protect preferred structures, materials, parameters, control logic, manufacturing steps, and application scenarios. These layers provide fallback positions during examination and enforcement.",
                "A good dependent claim is not filler. It should either strengthen grant probability, protect a commercial embodiment, block a competitor's design-around route, or preserve a useful technical effect.",
            ],
        ),
        (
            "Avoid Three Common Mistakes",
            [
                "The first mistake is writing only from the inventor's prototype. The prototype is evidence, not necessarily the best legal boundary. The second mistake is using broad functional language without support. Breadth must be earned by disclosure. The third mistake is ignoring the examiner's future comparison. A claim should be drafted with likely prior art and inventive-step arguments in mind.",
                "Good claim drafting is therefore not the final writing step. It is an analytical process: decompose, abstract, compare, layer, and defend.",
            ],
        ),
    ],
    "easy-path-for-patent-mining": [
        (
            "The Easiest Patent Mining Path Begins with Problems",
            [
                "Patent mining becomes difficult when the team starts from 'inventions'. Most engineers do not think in patent language. They think in failures, constraints, workarounds, test results, and customer complaints. The easiest path is therefore to begin with technical problems.",
                "Ask where the process is unstable, where cost is high, where manual adjustment is needed, where quality fluctuates, where customers complain, and where competitors seem to have an advantage. Each answer may contain a patent seed.",
            ],
        ),
        (
            "Convert Problems into Technical Feature Work",
            [
                "After collecting problems, decompose the relevant product or process into technical features. For each feature, write down its function and the problem it solves. Then ask whether another structure, material, algorithm, parameter, or connection method can perform the same function better.",
                "This movement from problem to function to alternative feature is the core of practical patent mining. It is much more reliable than open-ended brainstorming.",
            ],
        ),
        (
            "Use Existing Technology as Inspiration",
            [
                "Patent databases should not only be used to check novelty. They should be used as a library of human technical solutions. Search outside the current product field. A mechanism in textile machinery may inspire a medical tool. A packaging structure may inspire a battery seal. A food-processing control method may inspire a chemical dosing system.",
                "The farther the source field, the more likely the combination may produce a non-obvious technical route, provided it truly solves the target problem.",
            ],
        ),
        (
            "End with a Portfolio Decision",
            [
                "Not every idea should be filed. Some should become core patents, some defensive patents, some trade secrets, and some discarded ideas. The decision should consider technical value, business value, grant probability, disclosure risk, and competitor behavior.",
                "The easiest path is simple: collect real problems, decompose features, search across fields, generate alternatives, test in practice, and decide as a portfolio.",
            ],
        ),
    ],
    "protecting-ip-protects-innovation-and-the-future": [
        (
            "IP Protection Is Future Protection",
            [
                "Intellectual property protection is sometimes treated as a legal detail that appears after innovation is complete. That view is too narrow. IP protection shapes the way innovation is recorded, valued, financed, transferred, and continued. To protect IP is to protect the future possibility of technology.",
                "A society that does not protect creative and technical contribution will gradually discourage long-term effort. People will prefer short-term imitation over difficult exploration. Companies will invest less in R&D. Students will learn that originality has little value.",
            ],
        ),
        (
            "For Companies, IP Converts Technology into Assets",
            [
                "A technical solution hidden inside a workshop is useful, but it is hard to value, license, finance, or defend. A well-built patent portfolio turns technical work into visible assets. It can support financing, valuation, market negotiations, tendering, technology transfer, and competitor deterrence.",
                "The best IP assets come from real technical problems. They are not decorative certificates. They are structured records of how a company solved problems that others could not solve in the same way.",
            ],
        ),
        (
            "For Education, IP Teaches Respect for Original Work",
            [
                "In youth science innovation education, IP awareness teaches students that ideas require evidence, responsibility, and respect. Students learn to ask whether a problem is real, whether a solution has already been tried, how to cite existing work, and how to protect their own contribution honestly.",
                "This is why IP education is also innovation education. It gives young people a map of human technical effort and a language for explaining their own contribution.",
            ],
        ),
        (
            "A Healthy Innovation Ecology",
            [
                "Protecting IP does not mean blocking learning. A healthy system combines protection, disclosure, licensing, fair use, public-domain access, and respect for creators. It rewards real contribution while allowing society to build upon disclosed knowledge.",
                "The future belongs to those who can create, protect, share, and improve knowledge responsibly.",
            ],
        ),
    ],
    "reverse-thinking-as-an-innovation-method": [
        (
            "Reverse Thinking Breaks the Default Path",
            [
                "Many innovation projects begin by asking how to make an existing product faster, cheaper, lighter, or stronger. That is useful, but it keeps the mind inside the existing path. Reverse thinking asks a different question: what if the normal direction is wrong?",
                "If everyone tries to add functions, ask whether removing a function creates value. If everyone tries to make a device more complex, ask whether simplification solves the real problem. If everyone assumes the user should adapt to the product, ask whether the product should adapt to the user.",
            ],
        ),
        (
            "Reverse the Object, Process, and Evaluation Standard",
            [
                "Reverse thinking can be applied at several levels. Reverse the object: instead of improving the tool, improve the environment in which the tool is used. Reverse the process: instead of detecting a failure after it happens, design a structure that prevents it from occurring. Reverse the evaluation standard: instead of maximizing performance, optimize reliability, cost, safety, or ease of maintenance.",
                "In patent mining, this method often reveals new technical problems. When the problem changes, the search path and claim strategy also change.",
            ],
        ),
        (
            "Examples in Innovation Education",
            [
                "Students often think innovation means inventing a high-tech object. Reverse thinking helps them notice ordinary problems. Instead of asking how to build a smarter trash bin, ask why people put waste in the wrong bin. Instead of designing a stronger rain cover, ask why rain reaches the vulnerable position at all.",
                "This shift makes innovation more accessible. A student does not need expensive equipment to begin. The student needs a sharp question.",
            ],
        ),
        (
            "Why Reverse Thinking Helps Patents",
            [
                "Patentability often depends on whether the technical route would have been obvious. A reverse route can create distance from routine improvement. It may discover a problem others ignored, combine fields others would not combine, or solve a constraint in an unexpected way.",
                "Reverse thinking is not a trick. It is a disciplined way to escape the first answer.",
            ],
        ),
    ],
    "is-innovation-really-difficult": [
        (
            "Innovation Is Difficult Only When It Is Treated as Magic",
            [
                "Many people believe innovation is reserved for geniuses. They imagine a sudden flash of inspiration and conclude that ordinary students or ordinary engineers cannot innovate. This misunderstanding makes innovation seem harder than it is.",
                "In practice, most innovation is not a dramatic breakthrough. It is the recombination of existing technical means to solve a specific problem under specific constraints. Once the process is made visible, innovation becomes trainable.",
            ],
        ),
        (
            "The Trainable Route",
            [
                "Start by observing real inconvenience. Ask who suffers from it, when it happens, why existing solutions fail, and what technical feature causes the failure. Then search existing technology, compare possible means, build a rough prototype, test it, record failure, and iterate.",
                "This route does not guarantee a world-changing invention. But it reliably produces better questions, better evidence, and more practical solutions. That is already innovation education.",
            ],
        ),
        (
            "Why Students Need Structure",
            [
                "Children are not short of imagination. They are short of method. Without structure, they jump from a vague idea to a model. With structure, they learn to define problems, interview users, clean data, search patents, use AI carefully, and explain technical contribution.",
                "The same is true for companies. Many firms do not lack engineers. They lack a repeatable route from engineering pain point to patentable solution.",
            ],
        ),
    ],
    "youth-science-innovation-topic-selection-questionnaire": [
        (
            "A Good Topic Is Discovered, Not Invented from Nothing",
            [
                "The first difficulty in youth science innovation is topic selection. Students often ask, 'What should I invent?' This question is too broad. A better question is, 'What problem around me is real, frequent, and worth solving?'",
                "A topic-selection questionnaire helps students move from imagination to observation. It guides them to look at school, family, community, transportation, health, environment, elderly care, waste, safety, and daily inconvenience.",
            ],
        ),
        (
            "What the Questionnaire Should Ask",
            [
                "The questionnaire should ask students to describe one observed problem, the people affected, the current workaround, the reason the workaround is insufficient, and the possible technical direction. It should also ask whether the student has evidence: photos, interviews, frequency records, user complaints, or simple measurements.",
                "Students should be encouraged to list several candidate topics, then score them by authenticity, feasibility, social value, technical room for improvement, available resources, and personal interest.",
            ],
        ),
        (
            "From Topic to Research Plan",
            [
                "After scoring, the teacher should not immediately choose the most fashionable topic. The better topic is the one that can be investigated, prototyped, and improved within the student's actual conditions. A small real problem is better than a grand empty slogan.",
                "The final output should be a topic card: problem statement, target user, evidence plan, existing-solution search plan, initial technical idea, expected difficulty, and next action.",
            ],
        ),
        (
            "Why This Matters",
            [
                "Good topic selection prevents fake innovation. It teaches students that innovation starts with respect for reality. They learn not to force ideas, but to discover problems, verify them, and build evidence.",
            ],
        ),
    ],
    "rejection-and-asking-for-help-in-innovation-competitions": [
        (
            "The Second Lesson Is on the Street",
            [
                "In science innovation competitions, students often think the difficult part is building the model. In fact, an earlier difficulty is learning to speak to real people. When a child stands on the street with a questionnaire and asks a stranger for help, innovation becomes real.",
                "The first rejection is uncomfortable. The student may feel embarrassed, afraid, or frustrated. But this moment is educational. It teaches that a problem is not validated by imagination. It must be tested with users, and users have the right to refuse.",
            ],
        ),
        (
            "Asking for Help Is a Core Innovation Skill",
            [
                "A student who learns to ask politely, explain the purpose, accept rejection, and try again has gained a skill that no kit can provide. The process trains communication, resilience, and respect for others' time.",
                "Teachers should not remove all discomfort. They should prepare students, accompany them, protect safety, and then let them experience real feedback. A survey completed only by family members is easy, but it is not enough.",
            ],
        ),
        (
            "Turning Rejection into Data",
            [
                "Rejection itself can be recorded. How many people refused? Why did they refuse? Did the explanation take too long? Was the question unclear? Did different groups respond differently? These observations help improve both the research method and the project design.",
                "Innovation education is not only about successful answers. It is about learning how to face the world when the first answer is no.",
            ],
        ),
    ],
    "interdisciplinary-integration-in-science-innovation": [
        (
            "Data Does Not Automatically Tell the Truth",
            [
                "After students finish a field survey, they often feel that a thick stack of questionnaires means success. But data can mislead. Some respondents answer casually. Some answers contradict each other. Some people say they understand a topic but fail basic follow-up questions.",
                "This is where mathematics enters the project. Counting answers is not enough. Students must learn data cleaning, contradiction checks, grouping, proportion, cross-analysis, and interpretation.",
            ],
        ),
        (
            "Data Cleaning as a Learning Moment",
            [
                "Ask students to review each questionnaire like investigators. Did one person choose the same option for every question? Did the open-ended answer contain real information? Did the respondent's later answer contradict the first answer? Should the sample be kept, marked, or removed?",
                "This process teaches that data is not sacred. It must be examined. The students begin to understand why research requires method, not only enthusiasm.",
            ],
        ),
        (
            "Mathematics Gives Shape to Experience",
            [
                "Once the data is cleaned, students can calculate percentages, compare groups, identify the highest-frequency pain points, and decide which user group matters most. A vague feeling becomes a measurable pattern.",
                "The project then becomes interdisciplinary. Social investigation, mathematics, engineering design, language expression, and patent thinking all appear in one learning route.",
            ],
        ),
        (
            "The Value of Hitting a Wall",
            [
                "A practical setback is not a failure. It is the point where the project becomes real. When students discover that their data is messy, their questions are weak, or their assumptions are wrong, they are ready to learn.",
            ],
        ),
    ],
    "youth-innovation-competition-practical-lessons-four-and-five": [
        (
            "From Idea to Prototype",
            [
                "After topic selection, survey, and data analysis, students often want to build the final product immediately. A better approach is to build a rough prototype first. The prototype should be cheap, fast, and designed to answer one question: can this solution work in principle?",
                "Cardboard, simple sensors, printed parts, hand-drawn interfaces, and manual simulation are all acceptable. The first prototype is not for display. It is for learning.",
            ],
        ),
        (
            "Testing Is More Important Than Polishing",
            [
                "A beautiful model that has not been tested is weak. A rough model with clear test records is strong. Students should define test conditions, record results, compare before and after, and note failures honestly.",
                "Teachers should help students ask: what changed after using the solution? Was the improvement measurable? Did the solution create new problems? Which part should be modified next?",
            ],
        ),
        (
            "Presentation Is Evidence-Based Storytelling",
            [
                "In competition, students must explain the project clearly: problem, user, evidence, existing solutions, technical route, prototype, test, improvement, and future plan. The story should not exaggerate. It should show the learning path.",
                "A good presentation makes judges believe that the student truly did the work, understood the problem, and improved the solution through evidence.",
            ],
        ),
        (
            "Patent Thinking at the Student Level",
            [
                "Students do not need to become patent lawyers. But they should learn to search whether similar solutions exist, identify what is different, and explain why the difference matters. This habit protects originality and improves technical thinking.",
            ],
        ),
    ],
    "why-i-wrote-a-practical-science-innovation-textbook": [
        (
            "Why Experience Had to Become a Textbook",
            [
                "After guiding many science innovation projects, I realized that scattered experience is not enough. A good teacher may help one group of students, but a structured course can help many more. That is why I decided to write these experiences into a practical science innovation textbook.",
                "The goal is not to create another book of slogans. The goal is to give students, teachers, and parents a route that can be followed: observe, ask, investigate, search, design, prototype, test, present, and protect.",
            ],
        ),
        (
            "The Examiner's Logic Inside Innovation Education",
            [
                "My background in patent examination deeply shaped the course. Examiners analyze technical features, compare prior art, identify technical problems, and judge whether a solution is obvious. This logic is also useful for education. It teaches students to avoid empty claims and explain their real contribution.",
                "When students learn patent-map thinking, they begin to see existing technology not as a wall but as a map. They can find gaps, borrow methods, and understand how their solution fits into human knowledge.",
            ],
        ),
        (
            "AI Changes the Classroom",
            [
                "AI can help students search, organize ideas, draft questionnaires, analyze data, and simulate questions from judges. But AI must be used under human judgment. Students still need to observe reality, verify information, test prototypes, and take responsibility for conclusions.",
                "The AI era does not make innovation education unnecessary. It makes method more important.",
            ],
        ),
        (
            "What I Hope the Book Achieves",
            [
                "I hope the textbook helps students understand that innovation is not distant. It is a capability that can be practiced. I hope it helps teachers move from competition coaching to real project-based learning. I hope it helps families see that the value of a project is not only a prize, but the growth of thinking.",
            ],
        ),
    ],
    "using-patent-information-for-innovation": [
        (
            "Patent Information as an Innovation Engine",
            [
                "Patent information should not be used only to check whether an idea is new. It can guide invention mining, R&D decisions, and portfolio design. The practical route is to decompose a product into technical features, abstract the technical problem behind each feature, and search for alternative means across many fields.",
                "Most innovation is recombination. Breakthrough inventions exist, but many valuable patents come from replacing one technical feature with a better or unexpected feature borrowed from another field.",
            ],
        ),
        (
            "From Product Feature to Technical Problem",
            [
                "Suppose a team wants to innovate around a blood glucose meter. The product can be decomposed into a housing, display, analysis unit, power unit, sampling unit, communication unit, connectors, materials, shapes, and algorithms. For each part, the team asks what function it performs and what problem it solves.",
                "The search should be based on the abstracted problem. If the sampling unit is searched only as blood sampling, many useful structures will be missed. If it is searched as controlled skin piercing, textile tools, injection devices, industrial puncture mechanisms, and other distant fields may become relevant.",
            ],
        ),
        (
            "Generate Alternatives Before Judging Value",
            [
                "The patent-mining team should not prematurely decide that an unusual alternative has no value. Its job is to generate options: new materials, shapes, connection methods, structures, algorithms, and control logic. Decision makers can then evaluate business value.",
                "Even when immediate commercial value is uncertain, a patent may have defensive value, financing value, portfolio value, or future market value during its long protection term.",
            ],
        ),
    ],
    "ai-era-science-innovation-framework": [
        (
            "A Practical Route for AI-Era Innovation Education",
            [
                "Science innovation education should not train students to imitate fashionable technology words or assemble expensive kits. It should train them to observe life, discover real problems, investigate users, use data, read existing technology, build prototypes, test failures, explain value, and protect outcomes.",
                "AI changes the process but does not replace the learner. AI can generate ideas, organize information, draft survey questions, summarize patents, and simulate judge questions. The student still must define the problem, judge the output, run tests, and take responsibility.",
            ],
        ),
        (
            "The Full Learning Route",
            [
                "A complete course begins with problem discovery. Students observe inconvenience, waste, safety risks, unfairness, or unmet needs. They then investigate society through interviews, surveys, and observation. Data analysis turns guesses into evidence.",
                "Next, students search patents and existing solutions. They learn that other people's inventions are not enemies; they are maps. Then they generate solutions, build low-cost prototypes, test, record failure, improve, present, and consider intellectual property protection.",
            ],
        ),
        (
            "Why Companies Should Care",
            [
                "Although the framework was designed for youth education, it also applies to enterprise innovation. Many companies do not lack ideas. They lack a repeatable route from problem to patentable solution. Patent information, AI tools, experiments, and IP protection should be one connected workflow.",
            ],
        ),
    ],
    "china-prosecution-for-foreign-firms": [
        (
            "China Filing Is Not a Translation Task",
            [
                "Many overseas patent matters enter China after the international drafting strategy is already fixed. The Chinese filing is then treated as translation, formatting, and submission. That may be efficient administratively, but it can miss the issues that matter most in Chinese examination: technical contribution, support, feature comparison, inventive-step reasoning, and fallback claim positions.",
                "The better question is not whether the case can be filed in China. The better question is how the invention should enter China in a grant-oriented and commercially useful way.",
            ],
        ),
        (
            "Pre-Filing Review Points",
            [
                "Before filing, the China-side team should identify the true technical contribution, check whether the specification supports the desired scope, compare core features with likely prior art, simulate likely office-action reasoning, and design fallback layers.",
                "Sometimes the original claim set is not the best claim set for China. Claim reconstruction may be necessary to preserve value while improving grant probability.",
            ],
        ),
        (
            "What Foreign Patent Firms Need from a China Partner",
            [
                "A strong China partner should understand both the inventor's technology and the examiner's logic. The partner should be able to explain risks early, propose claim amendments, prepare arguments before the office action arrives, and help foreign counsel communicate realistic strategy to clients.",
                "Led by Ma Su, Ma Su Team combines senior Chinese patent attorney practice with former national patent office examiner perspectives. For technically supportable inventions, the goal is to move China prosecution as close as possible to a predictable grant path while preserving meaningful claim value.",
            ],
        ),
    ],
}


ARTICLE_EXPANSION_FOCUS = {
    "enterprise-ipr-patent-mining-five-step-method": {
        "audience": "enterprise IPR managers and R&D leaders",
        "method": "technical-problem questionnaires, cross-team confirmation meetings, global prior-art searching, small-scale production trials, and final portfolio roadshows",
        "evidence": "problem lists, engineer interviews, search notes, failed trial records, cost data, product-module maps, and proposed claim directions",
        "decision": "which ideas should become core patent filings, which should stay under validation, and which should be protected as trade secrets",
    },
    "responding-to-inventive-step-office-actions": {
        "audience": "applicants, foreign patent firms, and China prosecution teams",
        "method": "three-step inventive-step analysis, closest-prior-art comparison, technical-problem reframing, motivation analysis, and evidence-based amendment strategy",
        "evidence": "claim charts, feature comparison tables, prior-art passages, experimental effects, common-knowledge challenges, and fallback claim positions",
        "decision": "whether to argue, amend, supplement evidence, narrow a feature combination, or prepare a divisional or continuation-style strategy where available",
    },
    "using-divisional-applications-to-extend-patent-protection": {
        "audience": "portfolio owners and overseas counsel managing China families",
        "method": "disclosure mapping, claim-family planning, timing review before allowance or closure, and commercial ranking of alternative inventions",
        "evidence": "original specification support, embodiment groups, fallback features, commercial product roadmaps, competitor entry paths, and prosecution deadlines",
        "decision": "which technical themes deserve separate claim pursuit and which disclosed content should remain only as support for the parent case",
    },
    "ai-era-patent-mining-and-layout": {
        "audience": "AI-era R&D teams, patent engineers, and technology managers",
        "method": "functional decomposition, AI-assisted technical-means expansion, cross-field substitution, matrix combination, conflict filtering, and expert screening",
        "evidence": "function-feature tables, AI prompt records, candidate technical means, feasibility notes, prior-art overlaps, and portfolio value scores",
        "decision": "which AI-generated combinations are technically credible, commercially meaningful, and legally supportable enough to become patent applications",
    },
    "how-patents-balance-public-interest": {
        "audience": "innovators, educators, public readers, and companies explaining IP value",
        "method": "explaining the patent bargain through disclosure, limited exclusivity, public-domain return, and follow-on innovation",
        "evidence": "published patent documents, term limits, technical disclosure examples, licensing records, design-around cases, and expired-patent public use",
        "decision": "how to protect real technical contribution without treating patents as empty numbers or permanent private control over public knowledge",
    },
    "generic-drug-patent-layout-strategy": {
        "audience": "generic-drug companies, pharmaceutical IP teams, and technical decision makers",
        "method": "layer-by-layer patent mapping, formulation and process comparison, barrier classification, design-around planning, and invalidation-risk review",
        "evidence": "compound patents, crystal-form patents, formulation claims, process claims, stability data, bioequivalence constraints, and regulatory timing",
        "decision": "whether to avoid, challenge, license, wait, or build an independent improvement portfolio around the generic product",
    },
    "patent-claim-drafting-guide": {
        "audience": "inventors, patent drafters, and business teams reviewing claim quality",
        "method": "technical-problem identification, essential-feature extraction, independent-claim construction, fallback hierarchy, and infringement-avoidance testing",
        "evidence": "embodiments, alternative features, technical effects, competitor design-around possibilities, support in the specification, and examiner comparison logic",
        "decision": "how broad the independent claim can be while still staying supported, clear, defensible, and useful against real competitors",
    },
    "easy-path-for-patent-mining": {
        "audience": "IPR teams that need a practical starting point for invention mining",
        "method": "starting from real technical problems, abstracting functions, searching for alternative means, borrowing across fields, and screening by business value",
        "evidence": "pain-point lists, product decomposition tables, alternative-means searches, engineer comments, implementation constraints, and market relevance",
        "decision": "which simple improvements are worth filing because they solve a concrete problem in a way competitors would likely need to follow",
    },
    "protecting-ip-protects-innovation-and-the-future": {
        "audience": "students, families, educators, companies, and public readers",
        "method": "connecting IP protection with innovation incentives, respect for creators, public disclosure, education, and long-term industrial competitiveness",
        "evidence": "student projects, company R&D records, technology-transfer examples, infringement risks, public patent documents, and commercialization outcomes",
        "decision": "how to teach IP as a practical habit of protecting problem-solving work rather than as a remote legal slogan",
    },
    "reverse-thinking-as-an-innovation-method": {
        "audience": "students, teachers, and enterprise teams looking for new invention directions",
        "method": "reversing assumptions, changing user positions, inverting process order, turning defects into functions, and testing the opposite route",
        "evidence": "original assumptions, reversed questions, new constraints, prototype observations, user feedback, and patent-search comparisons",
        "decision": "which reversed idea creates a real technical effect rather than only a clever concept",
    },
    "is-innovation-really-difficult": {
        "audience": "young innovators, parents, teachers, and first-time inventors",
        "method": "breaking innovation into observation, problem selection, prior-art learning, recombination, prototype testing, and explanation",
        "evidence": "daily-life observations, user interviews, existing-solution searches, simple prototypes, test records, and improvement notes",
        "decision": "how to move from a vague idea to a project with a clear problem, a technical route, and evidence of improvement",
    },
    "youth-science-innovation-topic-selection-questionnaire": {
        "audience": "students, parents, science teachers, and innovation-course institutions",
        "method": "using structured questions to discover real topics from daily inconvenience, user pain points, safety risks, waste, and unmet needs",
        "evidence": "questionnaire answers, observation notes, interview records, topic-scoring forms, user groups, and feasibility checks",
        "decision": "which topic is specific enough, valuable enough, and testable enough for a student project",
    },
    "rejection-and-asking-for-help-in-innovation-competitions": {
        "audience": "students and teachers managing project-based learning",
        "method": "treating rejection as project evidence, learning how to ask for help, recording responses, and improving the project through real communication",
        "evidence": "outreach records, refusal reasons, expert feedback, revised questions, changed prototype routes, and student reflection notes",
        "decision": "how to turn a failed contact or rejected request into a stronger research design",
    },
    "interdisciplinary-integration-in-science-innovation": {
        "audience": "science-innovation educators and students doing project work",
        "method": "using mathematics after a practical setback to clean data, compare groups, quantify patterns, and revise technical choices",
        "evidence": "survey samples, invalid responses, contradiction checks, charts, percentages, group comparisons, and before-after testing",
        "decision": "which conclusion is supported by data and which assumption should be abandoned or redesigned",
    },
    "youth-innovation-competition-practical-lessons-four-and-five": {
        "audience": "students preparing science innovation competitions and teachers guiding them",
        "method": "moving from concept to rough prototype, defining test conditions, recording failures, iterating design, and building an evidence-based presentation",
        "evidence": "prototype photos, test logs, failure records, measurement tables, version changes, and judge-question rehearsals",
        "decision": "when a project is ready to present and which weaknesses should be honestly described as future improvement",
    },
    "why-i-wrote-a-practical-science-innovation-textbook": {
        "audience": "educators, parents, institutions, and readers evaluating Ma Su's curriculum method",
        "method": "turning scattered coaching experience into a repeatable route from observation to IP protection in the AI era",
        "evidence": "course outlines, student project cases, patent-map exercises, AI-use examples, prototype records, and competition feedback",
        "decision": "how a textbook can teach real innovation capability instead of only collecting slogans or inspirational stories",
    },
    "using-patent-information-for-innovation": {
        "audience": "companies, patent-mining teams, and innovation managers",
        "method": "decomposing products into technical features, abstracting functions, searching patent information by problem, and recombining technical means across fields",
        "evidence": "feature decomposition tables, patent search results, cross-field analogies, alternative structures, cost and feasibility notes, and portfolio suggestions",
        "decision": "which borrowed or recombined technical means deserve a patent layout because they solve a real problem with defensible novelty",
    },
    "ai-era-science-innovation-framework": {
        "audience": "schools, science education institutions, students, and parents",
        "method": "combining AI-assisted research with real observation, patent search, prototype building, testing, presentation, and IP awareness",
        "evidence": "AI prompts, source checks, survey data, prototype records, patent-search notes, test results, and presentation drafts",
        "decision": "which AI-assisted output should be trusted, modified, tested, or rejected by the student team",
    },
    "china-prosecution-for-foreign-firms": {
        "audience": "foreign patent firms and overseas applicants entering China",
        "method": "pre-filing China review, examiner-style patentability screening, claim reconstruction, office-action simulation, and bilingual strategy communication",
        "evidence": "original PCT or priority claims, specification support, Chinese prior-art risks, fallback features, expected inventive-step objections, and client business goals",
        "decision": "how to enter China with a claim set that is not merely translated, but rebuilt for Chinese examination and commercial value",
    },
}


def focus_for_slug(slug: str) -> dict[str, str]:
    return ARTICLE_EXPANSION_FOCUS.get(
        slug,
        {
            "audience": "readers applying the method in real projects",
            "method": "problem discovery, evidence collection, technical comparison, expert review, and portfolio decision-making",
            "evidence": "working notes, interview records, search results, prototypes, test results, and decision memos",
            "decision": "which ideas should be developed, filed, improved, or abandoned",
        },
    )


def sections_to_html(slug: str, sections: list[tuple[str, list[str]]]) -> str:
    chunks: list[str] = []
    focus = focus_for_slug(slug)
    for heading, paragraphs in sections:
        chunks.append('        <section class="article-section">')
        chunks.append(f"          <h2>{html.escape(heading)}</h2>")
        for paragraph in paragraphs:
            chunks.append(f"          <p>{html.escape(paragraph)}</p>")
        chunks.append(f"          <h3>{html.escape(heading)}: practical detail</h3>")
        chunks.append(
            "          <p>"
            + html.escape(
                f"For {focus['audience']}, this point should be treated as a working step rather than a slogan. The practical work is to connect the article's idea with {focus['method']}. That is what turns a general insight into a repeatable professional service."
            )
            + "</p>"
        )
        chunks.append(
            "          <p>"
            + html.escape(
                f"The team should record concrete evidence: {focus['evidence']}. Without this evidence layer, the method remains only an opinion. With it, the article becomes useful for client communication, internal decision-making, patent drafting, prosecution strategy, and later portfolio review."
            )
            + "</p>"
        )
        chunks.append(
            "          <p>"
            + html.escape(
                f"A complete application of this section normally ends with a decision: {focus['decision']}. Ma Su's examiner background matters here because the decision is not based only on enthusiasm; it is tested against technical contribution, support in the disclosure, likely examination reasoning, and business value."
            )
            + "</p>"
        )
        chunks.append("        </section>")
    return "\n".join(chunks)


def is_article_marker(line: str) -> bool:
    return len(line) >= 3 and ord(line[0]) == 0x6587 and ord(line[1]) == 0x7AE0 and line[2:].isdigit()


def split_source_articles() -> list[dict[str, object]]:
    lines = [line.strip() for line in SOURCE.read_text(encoding="utf-8").splitlines() if line.strip()]
    starts = [index for index, line in enumerate(lines) if is_article_marker(line)]
    articles: list[dict[str, object]] = []
    for index, start in enumerate(starts):
        end = starts[index + 1] if index + 1 < len(starts) else len(lines)
        title = lines[start + 1]
        body = [line for line in lines[start + 2 : end] if line not in {"图片", "---"}]
        articles.append({"title": title, "body": body})
    return articles


def original_line_to_html(line: str) -> str:
    escaped = html.escape(line)
    title_like = (
        len(line) <= 48
        and not re.search(r"[。！？；;]$", line)
        and (
            line.startswith(("第", "一、", "二、", "三、", "四、", "五、", "附录", "写在"))
            or line.endswith(("篇", "课", "法", "问卷", "指南", "布局", "路径"))
        )
    )
    if title_like:
        return f"          <h3>{escaped}</h3>"
    return f"          <p>{escaped}</p>"


def original_article_to_html(title: str, body: list[str]) -> str:
    paragraphs = "\n".join(original_line_to_html(line) for line in body)
    return f"""        <section class="article-section original-text">
          <h2>Original Chinese Essay</h2>
          <h3>{html.escape(title)}</h3>
{paragraphs}
        </section>"""


def patent_info_original_to_html() -> str:
    lines = [line.strip() for line in PATENT_INFO_SOURCE.read_text(encoding="utf-8").splitlines() if line.strip()]
    title = lines[0].lstrip("#").strip()
    body = [line for line in lines[1:] if line not in {"图片", "---", "========================"}]
    return original_article_to_html(title, body)


def render_article(meta: dict[str, str]) -> str:
    slug = meta["slug"]
    if slug not in ARTICLE_TEXT:
        raise KeyError(slug)
    body = sections_to_html(slug, ARTICLE_TEXT[slug])
    original = meta.get("original_html", "")
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
          <strong>Ma Su Team</strong>
          <small>Global Patent Strategy</small>
        </span>
      </a>
      <a class="back-link" href="../articles.html">Back to articles</a>
    </header>

    <main>
      <article class="article-shell">
        <p class="eyebrow">{html.escape(meta["category"])} / English Article</p>
        <h1>{html.escape(meta["title_en"])}</h1>
        <p class="article-deck">{html.escape(meta["description"])}</p>
        <div class="article-meta">
          <span>By Ma Su</span>
          <span>English edition for international readers</span>
          <span>Ma Su Team Knowledge Center</span>
        </div>

{body}
{original}
      </article>
    </main>

    <footer>
      <p>&copy; 2026 Ma Su Team</p>
      <p>Article prepared for Ma Su Team knowledge center.</p>
    </footer>
  </body>
</html>
"""


def render_index(items: list[dict[str, str]]) -> str:
    cards = []
    for item in items:
        cards.append(
            f"""          <article>
            <p>{html.escape(item["category"])}</p>
            <h2>{html.escape(item["title"])}</h2>
            <span>{html.escape(item["description"])}</span>
            <a href="{html.escape(item["href"])}">Read article</a>
          </article>"""
        )
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Articles and Insights | Ma Su</title>
    <meta
      name="description"
      content="English articles by Ma Su Team on patent-map guided innovation, China patent practice, AI-era science innovation education, and cross-border IP cooperation."
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="article-page">
    <header class="article-header">
      <a class="brand article-brand" href="index.html">
        <span class="brand-mark">SR</span>
        <span>
          <strong>Ma Su Team</strong>
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
        <h1>English articles that prove the method.</h1>
        <p>
          This knowledge center presents Ma Su's patent strategy, patent-map guided innovation, China prosecution, and science innovation education methodology in English for global readers.
        </p>
      </section>

      <section class="article-index-section">
        <div class="article-index">
{"\n".join(cards)}
        </div>
      </section>

      <section class="method-band">
        <p class="eyebrow">English-first publishing</p>
        <h2>Full English articles for overseas clients and partner firms.</h2>
        <p>
          The public website now uses English article pages throughout. Chinese source essays are retained only as internal source material for future localization into Traditional Chinese, Vietnamese, French, and German.
        </p>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Ma Su Team</p>
      <p>Articles and insights by Ma Su Team.</p>
    </footer>
  </body>
</html>
"""


def update_homepage_article_section(items: list[dict[str, str]]) -> None:
    cards = ['        <div class="article-list article-list-full">']
    for item in items:
        cards.append("          <article>")
        cards.append(f"            <p>{html.escape(item['category'])}</p>")
        cards.append(f"            <h3>{html.escape(item['title'])}</h3>")
        cards.append(f"            <a href=\"{html.escape(item['href'])}\">Read article</a>")
        cards.append("          </article>")
    cards.append("        </div>")
    new_list = "\n".join(cards)

    for path in [ROOT / "index.html", ROOT / "public" / "index.html"]:
        text = path.read_text(encoding="utf-8")
        start = text.find('        <div class="article-list')
        end = text.find("        </div>", start) + len("        </div>")
        if start == -1 or end == -1:
            raise RuntimeError(f"article list not found in {path}")
        text = text[:start] + new_list + text[end:]
        text = text.replace(
            'A multilingual knowledge center will become the proof of expertise.',
            'A full English knowledge center proves the method.',
        )
        text = text.replace(
            "Your essays can be published in English, Traditional Chinese, Vietnamese, French, and German, organized by strategy, education, AI innovation, patent maps, and China practice.",
            "Your essays are now presented as English articles for overseas clients, organized by patent strategy, China practice, AI innovation, patent maps, and science education.",
        )
        path.write_text(text, encoding="utf-8")


def main() -> None:
    source_articles = split_source_articles()
    if len(source_articles) != len(ARTICLE_META):
        raise RuntimeError(f"Expected {len(ARTICLE_META)} Chinese source articles, found {len(source_articles)}")

    enriched_article_meta: list[dict[str, str]] = []
    for meta, source_article in zip(ARTICLE_META, source_articles):
        enriched = dict(meta)
        enriched["original_html"] = original_article_to_html(
            str(source_article["title"]),
            list(source_article["body"]),
        )
        enriched_article_meta.append(enriched)

    enriched_existing_meta: list[dict[str, str]] = []
    for meta in EXISTING_META:
        enriched = dict(meta)
        if meta["slug"] == "using-patent-information-for-innovation":
            enriched["original_html"] = patent_info_original_to_html()
        enriched_existing_meta.append(enriched)

    metas = enriched_article_meta + enriched_existing_meta
    items: list[dict[str, str]] = []
    for meta in metas:
        html_text = render_article(meta)
        for base in [ROOT / "articles", ROOT / "public" / "articles"]:
            (base / f"{meta['slug']}.html").write_text(html_text, encoding="utf-8")
        items.append(
            {
                "category": meta["category"],
                "title": meta["title_en"],
                "description": meta["description"],
                "href": f"articles/{meta['slug']}.html",
            }
        )

    index_html = render_index(items)
    (ROOT / "articles.html").write_text(index_html, encoding="utf-8")
    (ROOT / "public" / "articles.html").write_text(index_html, encoding="utf-8")
    update_homepage_article_section(items)
    print(f"Built {len(items)} article pages with English sections and available Chinese originals.")


if __name__ == "__main__":
    main()
