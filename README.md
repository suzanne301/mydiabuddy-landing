# My DiaBuddy landing page

A focused, single-page research landing site for My DiaBuddy Ltd. It is intentionally problem-led and does not make clinical or product-performance claims.

## What the signup does now

The form is handled by Netlify Forms. Each submission records:

- email address;
- optional first name;
- each selected interest (updates, beta testing, and/or research interviews);
- affirmative permission to contact the person about those selections; and
- the version of the consent wording shown when they signed up.

Netlify's stored form submissions are the source of truth. Email alerts are only notifications, so a notification landing in Junk does not mean the submission was lost. Check **Netlify → Forms → community** to see the stored record.

## Recommended mailing-list workflow

Netlify Forms is good for initial collection, but it is not a mailing-list manager. Before sending regular updates:

1. Create a mailing list in a provider that supports UK GDPR-friendly consent records, double opt-in, interest groups and one-click unsubscribe. Brevo or MailerLite would both suit this small early-stage list.
2. Create three groups matching the form: occasional updates, beta testing, and research interviews.
3. Import only people who explicitly selected the corresponding group. Keep the consent version and signup date with the contact record.
4. Turn on double opt-in for email updates and use the provider's unsubscribe footer on every campaign.
5. Connect new Netlify submissions to the provider using a Netlify webhook or an automation service. Until that connection is tested, export submissions from Netlify and import them manually rather than relying on notification emails.
6. Keep research recruitment separate from research participation. Send participant information and collect fresh, explicit study consent before collecting health information.

Do not place mailing-platform API keys in this repository. Configure them in Netlify's protected environment settings or in the chosen automation service.

## Publishing

The repository remains a static site with no build step. Netlify should publish the repository root. The existing custom domain can stay attached to the same Netlify site.

After deployment:

1. Submit one test entry using an address you control.
2. Confirm it appears under the `community` form in Netlify.
3. Confirm all selected interests and the consent version are present.
4. Confirm the thank-you page loads.
5. Delete the test record if it is no longer needed.

The privacy wording is a practical early-stage draft, not legal advice. Review it when a mailing provider is chosen, because that provider should then be named as an additional processor.
