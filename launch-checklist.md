# Launch Checklist

## Must Confirm Before Public Launch

- Confirm final domain: `masuip.com`
- Confirm public email: `maximasure@hotmail.com`
- Confirm whether phone number `+86 191 7798 1982` can be shown publicly
- Confirm whether the phone number should mention WeChat, WhatsApp, or both
- Confirm official English names:
  - Beijing Tsingkong Zhiyun IP Agency
  - Guangdong ShineRed Intellectual Property Co., Ltd.
- Confirm whether Ma Su should be rendered as `Ma Su`, `Su Ma`, or another professional English name
- Confirm whether "former CNIPA patent examiner" can be used publicly in English
- Confirm whether "former national patent office examiner" can be used for team members
- Confirm whether "adviser to the Hunan Intellectual Property Office" can be used publicly

## Strongly Recommended Before Launch

- Add a professional portrait of Ma Su to `about.html`
- Add one team or office image if available
- Add real lecture, book, or event photos for the education page
- Add 3-5 anonymized successful China-entry case examples
- Add one downloadable service brief for foreign patent firms
- Add one downloadable introduction to patent-map guided innovation
- Add article publication dates and original WeChat links

## Legal And Compliance Review

- Avoid public promises such as "100% grant rate" or "guaranteed authorization"
- Use "grant-oriented", "designed to maximize grant certainty", and "pre-screened for patentability"
- Review all claims about official titles and government advisory roles
- Review whether any client cases need permission before disclosure
- Review privacy requirements before adding a contact form

## Technical Launch Tasks

- Upload all static files to the hosting server
- Point `masuip.com` DNS to the chosen hosting provider
- Confirm `sitemap.xml` is accessible at `https://masuip.com/sitemap.xml`
- Submit sitemap to Google Search Console and Bing Webmaster Tools
- Add analytics only after deciding on privacy policy requirements
- Test desktop and mobile views in a real browser

## If Using A New Domain And Company Computer As Server

- Confirm whether the company broadband has public IP
- Confirm whether ports 80 and 443 can be opened
- Confirm whether the ISP allows public website hosting on this line
- Confirm whether ICP filing is required for the chosen architecture
- Confirm whether to use direct public IP, cloud reverse proxy, or tunnel
- Install and test Caddy or another static web server
- Configure auto-start after reboot
- Configure backup and Windows security updates
- Do not use a daily office workstation as the production server if avoidable
