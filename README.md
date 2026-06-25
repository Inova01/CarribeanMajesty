# Loukosvky Morisset Coaching Website

A static, Cloudflare-ready personal business coaching funnel for Loukosvky Morisset. The public positioning focuses on life coaching, business growth, clarity, mindset, leadership, and private strategy calls.

## Files

- `index.html` - coaching funnel page structure, SEO metadata, and lead form
- `styles.css` - responsive premium coaching design
- `script.js` - form validation and temporary `mailto:` submission behavior
- `assets/loukosvky-coaching-hero.png` - generated coaching hero visual used by the page
- `assets/hero-family-protection.png` - previous consultation visual retained as a backup asset
- `server.js` - local preview server

## Local Preview

Use any static server from this folder. With Node installed:

```powershell
node server.js
```

Then open `http://localhost:4173`.

## Before Launch

1. Replace `info@loukosvky.com` in `script.js` with the real intake email, or connect the form to a secure CRM/scheduling backend.
2. Add Louko's real phone number, booking calendar link, social links, and final domain.
3. Confirm the final spelling of the brand name: `Loukosvky Morisset`.
4. Add privacy policy, terms, and consent language for lead follow-up.
5. Keep public copy coaching-first. Any separate licensed product or protection conversation should happen privately after a discovery call.

## Deploy To Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, choose **Create a project**.
3. Connect the GitHub repository.
4. Framework preset: **None**.
5. Build command: leave blank.
6. Build output directory: `/`.
7. Deploy, then attach the custom domain from the Pages dashboard.
