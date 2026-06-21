# CarribeanMajesty Insurance Website

A static, Cloudflare-ready insurance website for CarribeanMajesty, focused on life insurance, IUL education, family protection, business protection, legacy planning, and agent recruiting.

## Files

- `index.html` - funnel page structure, SEO metadata, lead form
- `styles.css` - responsive premium financial-services design
- `script.js` - form validation and temporary `mailto:` submission behavior
- `assets/hero-family-protection.png` - generated hero visual used by the page
- `server.js` - local preview server

## Local Preview

Use any static server from this folder. With Node installed:

```powershell
node server.js
```

Then open `http://localhost:4173`.

## Before Launch

1. Replace `info@carribeanmajesty.com` in `script.js` with the real intake email, or connect both forms to a secure CRM/form backend.
2. Confirm licensed states and add state-specific compliance notes if needed.
3. Add business phone, license number, carrier/agency disclosure, privacy policy, and terms of use.
4. Review all insurance and IUL copy with the licensed producer before publishing.
5. Build the planned pages: About, Life Insurance, IUL Education, Family Protection, Business Protection, Legacy Planning, Join the Team, Blog/Education Center, Contact, Privacy Policy, and Terms of Use.

## Deploy To Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, choose **Create a project**.
3. Connect the GitHub repository.
4. Framework preset: **None**.
5. Build command: leave blank.
6. Build output directory: `/`.
7. Deploy, then attach the custom domain from the Pages dashboard.
