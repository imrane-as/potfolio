# Security

## Reporting a vulnerability

Please do not disclose security vulnerabilities in a public issue.

For a private report, contact **imr.asrir@gmail.com** with:
- a short description of the issue;
- the affected URL or repository path;
- reproduction steps or proof of concept;
- the potential impact.

Do not include passwords, API keys, tokens, or other secrets in the report.

## Security posture

This portfolio is a static React/Vite site hosted on GitHub Pages. It does not intentionally collect passwords, payment data, or authentication credentials.

The repository uses:
- HTTPS through GitHub Pages;
- a browser Content Security Policy;
- least-privilege GitHub Actions permissions;
- dependency auditing during deployment;
- Dependabot configuration for npm and GitHub Actions updates.

Security controls should be reviewed whenever external resources or client-side functionality are added.
