# ShineRed IP Global Website Prototype

This is a static website prototype for Ma Su and ShineRed IP.

## How To Open

Open `index.html` directly in a browser.

No build step is required.

## Deployment

The repository includes `CNAME` with `masuip.com` for static hosting services that support custom domains. If the final deployment uses another domain or subdirectory, update:

- `CNAME`
- `sitemap.xml`
- canonical and Open Graph URLs in `index.html`

## Self-Hosting Option

The user is also considering registering a new domain and using a company computer as the server. See:

- `self-hosting/SELF-HOSTING-PLAN.md`
- `self-hosting/WINDOWS-SERVER-SETUP.md`
- `self-hosting/DOMAIN-DNS-CHECKLIST.md`
- `self-hosting/Caddyfile`

Recommended architecture: company computer as origin server, with a cloud/tunnel/reverse-proxy layer as the public entry point.

## GitHub Workflow

GitHub username selected by the user:

`ipmasu`

Recommended repository:

`https://github.com/ipmasu/masuip-site`

See `github-setup-ipmasu.md` for repository creation, upload, and EdgeOne Pages connection steps.

For EdgeOne Pages, publish the `public` directory only. The repository root contains internal planning and handoff documents that should not be exposed as public web pages.

## Core Positioning

The website positions Ma Su as:

- Science innovation methodology expert
- China IP strategy adviser
- Former CNIPA patent examiner
- AI-era science innovation educator
- Leader of a grant-oriented China patent team

The site should not be edited into a generic patent agency website. The central story is Ma Su's method: using patent information, examiner-grade judgment, AI-assisted innovation, and practical education to turn real problems into protectable and valuable outcomes.

## Main Pages

- `index.html` - global homepage
- `about.html` - Ma Su profile and authority
- `methodology.html` - patent-map guided innovation method
- `china-entry.html` - China-entry patent strategy for foreign patent firms
- `services.html` - service overview
- `education.html` - AI-era science innovation education
- `articles.html` - article index
- `contact.html` - direct contact page
- `hong-kong.html` - Foreign Innovators cooperation
- `vietnam.html` - Patent Firms-facing China IP strategy
- `europe.html` - European patent firm cooperation

## Articles

- `articles/using-patent-information-for-innovation.html`
- `articles/ai-era-science-innovation-framework.html`
- `articles/china-prosecution-for-foreign-firms.html`

Source archive:

- `articles/source-using-patent-information-for-innovation.md`

## Styling And Scripts

- `styles.css` - all layout and visual styles
- `script.js` - homepage language switching
- `assets/hero-global-ip.png` - hero image asset
- `robots.txt` - search crawler instructions
- `sitemap.xml` - XML sitemap using `https://masuip.com/`
- `browserconfig.xml` - basic browser tile color metadata

## Content Strategy Notes

Use `brand-persona.md` and `content-plan.md` before writing new pages. These files define the persona, tone, public wording for grant-rate claims, article workflow, and future page plan.

Avoid absolute public promises such as "100% authorization" unless reviewed and supported by audited data. Preferred wording:

- grant-oriented China patent strategy
- designed to maximize grant certainty
- examiner-style patentability screening
- claim reconstruction before China entry
- portfolio layout for protectable business space
