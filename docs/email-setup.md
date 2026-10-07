# Email setup: @goldeneagleltd.org forwarding into Gmail

**Goal:** mail sent to `info@` and `claims@goldeneagleltd.org` lands in the agency Gmail (`goldeneagleinsagency@gmail.com`). Staff reply from Gmail *as* those addresses. The website's form emails are sent from the domain too.

**Services:**

- **ImprovMX (free):** forwards incoming mail. The free plan covers 1 domain, 25 aliases and 500 forwards a day.
- **Resend (free):** sends outgoing mail, both for Gmail's "Send mail as" and the website forms. The free plan allows 100 emails a day and 3,000 a month, shared between staff replies and the website.

**Before you start:** you need the login for the Cloudoon/Truehost account that manages the domain's DNS. Create the ImprovMX account using the agency's Gmail so the agency owns it. The Resend account behind the site's `RESEND_API_KEY` should also belong to the agency.

---

## 1. Set up forwarding in ImprovMX

1. Sign up at improvmx.com with `goldeneagleinsagency@gmail.com`.
2. Add the domain `goldeneagleltd.org`.
3. Create the aliases:

   | Alias | Forwards to |
   |---|---|
   | `info` | `goldeneagleinsagency@gmail.com` |
   | `claims` | `goldeneagleinsagency@gmail.com` |
   | `advisory` | the Lead Advisor's own inbox (optional) |

   Don't enable the catch-all (`*`), which only attracts spam.

## 2. Add the domain to Resend

1. In Resend, go to Domains → Add domain and enter `goldeneagleltd.org`. Use the **root domain**, not a subdomain like `mail.`, because Gmail will send as `info@goldeneagleltd.org`.
2. Resend lists the records it needs. Use the exact values it shows. There are usually three:
   - A TXT record at `resend._domainkey` (DKIM)
   - An MX record at `send`, pointing to `feedback-smtp.<region>.amazonses.com` with priority 10
   - A TXT record at `send`: `v=spf1 include:amazonses.com ~all`

## 3. Change the DNS records in Cloudoon

| Action | Type | Host | Value | Priority |
|---|---|---|---|---|
| **Delete** | MX | @ | `workplaceproemail.com` | 10 |
| **Delete** | MX | @ | `workplaceproemail.net` | 20 |
| Add | MX | @ | `mx1.improvmx.com` | 10 |
| Add | MX | @ | `mx2.improvmx.com` | 20 |
| **Replace** the existing SPF | TXT | @ | `v=spf1 include:spf.improvmx.com ~all` | |
| Add | TXT | resend._domainkey | *(from Resend)* | |
| Add | MX | send | *(from Resend)* | 10 |
| Add | TXT | send | *(from Resend)* | |
| Keep | TXT | _dmarc | existing `p=quarantine` policy | |

The domain may only have **one** SPF record at `@`, so replace the Cloudoon one; don't add a second. DNS changes usually take minutes, but can take a few hours. Then click **Check** in ImprovMX and **Verify** in Resend.

## 4. Let Gmail send as info@ and claims@

1. In Resend, go to API Keys → Create. Name it `gmail-send-as` and give it **Sending access** only. Keep it separate from the website's key so either can be revoked on its own.
2. In Gmail, go to the gear icon → See all settings → **Accounts and Import** → Send mail as → **Add another email address**.
   - Name: `Golden Eagle Insurance`
   - Email: `info@goldeneagleltd.org`
   - Leave "Treat as an alias" ticked.
3. Fill in the outgoing mail server (SMTP) details:
   - SMTP server: `smtp.resend.com`
   - Port: `587`
   - Username: `resend`
   - Password: the `gmail-send-as` API key
   - Select "Secured connection using TLS".
4. Gmail emails a confirmation code to `info@`. It forwards to the same Gmail, so open it and confirm.
5. Repeat steps 2–4 for `claims@goldeneagleltd.org`.
6. In Accounts and Import, set "When replying to a message" to **Reply from the same address the message was sent to**.
7. Optional: under Send mail as, make `info@` the **default** address.

**Keep forwarded mail out of spam.** In Gmail, go to Settings → Filters → Create a filter, with **To:** `goldeneagleltd.org`. Choose **Never send it to Spam**, and optionally add a label such as "Golden Eagle".

## 5. Point the website at the domain (Vercel)

In the Vercel project, go to Settings → Environment Variables and add these for Production:

```
RESEND_FROM_EMAIL="Golden Eagle Insurance <website@goldeneagleltd.org>"
```

`website@` doesn't need an alias; it only sends. Leads keep going straight to the agency Gmail, and each one has Reply-To set to the visitor, so pressing Reply answers the client directly. Then redeploy.

## 6. Test

- [ ] From a personal email account, send a message to `info@` and to `claims@`. Both arrive in the agency Gmail.
- [ ] Reply from Gmail. The recipient sees `info@goldeneagleltd.org`, not the Gmail address.
- [ ] Open the received reply and choose "Show original". Check it says `SPF: PASS`, `DKIM: PASS with domain goldeneagleltd.org` and `DMARC: PASS`.
- [ ] Optionally, send one message to the address mail-tester.com gives you and aim for 9/10 or better.
- [ ] Submit the website's contact, quote and claims forms once each. All three arrive, and Reply goes to the address entered in the form.

**Limits to keep in mind:** Resend's free plan allows 100 emails a day across staff replies and website forms. If the agency regularly approaches that, Resend Pro costs about $20 a month. Alternatively, ImprovMX Premium ($9 a month) includes its own outgoing mail server.
