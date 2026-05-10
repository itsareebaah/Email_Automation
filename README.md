# Email Automation System

A production-style email automation system built using **Node.js**, **Nodemailer**, and **Supabase** that automatically sends scheduled emails and stores email history logs in a PostgreSQL database.

---

## Features

- Send scheduled emails automatically
- Gmail integration using Nodemailer
- Supabase PostgreSQL database integration
- Email history logging
- Sent/Failed email status tracking
- Cron job scheduling
- Environment variable security
- Clean backend architecture

---

## Tech Stack

- Node.js
- Express.js
- Nodemailer
- Supabase
- PostgreSQL
- node-cron
- dotenv

---

## Project Structure

```bash
email-automation/
│
├── services/
│   └── mailService.js
│
├── supabaseClient.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd email-automation
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password

SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

---

## Gmail Setup

### 1. Enable 2-Step Verification

Enable 2-Step Verification in your Google account security settings.

### 2. Generate App Password

Generate a Gmail App Password and use it in:

```env
EMAIL_PASS
```

---

## Supabase Setup

Create a table using the SQL Editor:

```sql
CREATE TABLE email_logs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  recipient TEXT,
  subject TEXT,
  message TEXT,
  status TEXT,
  sent_at TIMESTAMP DEFAULT NOW()
);
```

---

## Run the Project

Start the server:

```bash
node server.js
```

---

## Cron Schedule

Current cron expression:

```js
* * * * *
```

This sends an email every minute.

### Example Cron Schedules

| Schedule | Cron Expression |
|----------|----------------|
| Every Minute | `* * * * *` |
| Daily at 9 AM | `0 9 * * *` |
| Every Monday | `0 9 * * 1` |

---

## Email Workflow

```text
Node.js Server
      ↓
Cron Job Executes
      ↓
Email Sent via Gmail
      ↓
Supabase Stores Log
      ↓
Status Saved (Sent/Failed)
```

---

## Email Log Example

| Recipient | Subject | Status | Sent At |
|-----------|----------|--------|----------|
| user@gmail.com | Automated Email | Sent | 2026-05-10 |

---

## Security Notes

Create a `.gitignore` file:

```bash
node_modules
.env
credentials.json
```

Never upload sensitive files to GitHub.

---

## Future Improvements

- Admin Dashboard
- Bulk Email Sending
- HTML Email Templates
- Attachment Support
- Retry Failed Emails
- User Authentication
- Analytics Dashboard

---

## Learning Outcomes

This project demonstrates:

- Backend Development
- Email Automation
- Cron Scheduling
- Database Integration
- API Integration
- Environment Variable Management
- Real-world Automation Workflows

---

## Author

**Nexe-Agent**

- Email: nexeagent@gmail.com
- Phone: 03222100121
- LinkedIn: Nexe-Agent

---

## License

This project is licensed for educational and portfolio use.