# Vercel Serverless Functions Setup Guide

This guide will walk you through setting up your database connection for the Stories submission form.

## ✅ What's Already Done

1. ✅ **Serverless Function Created**: `api/submit-story.ts` - handles form submissions
2. ✅ **Frontend Updated**: `src/pages/Stories.tsx` - form now calls the API
3. ✅ **Dependencies Installed**: `mysql2` and `@vercel/node` packages

## 📋 Step-by-Step: Setting Up Environment Variables in Vercel

### Step 1: Get Your Database Credentials

You should already have these from your HostAfrica cPanel setup:

- **Database Host**: `localhost` (for HostAfrica cPanel)
- **Database Port**: `3306` (default MySQL port)
- **Database Name**: `digisrup_ahs_centenary`
- **Database Username**: `digisrup_ahs_centenary`
- **Database Password**: (the password you set in cPanel)

### Step 2: Add Environment Variables in Vercel

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com) and log in
   - Select your project

2. **Navigate to Settings**
   - Click on your project
   - Go to **Settings** tab (in the top navigation)
   - Click **Environment Variables** in the left sidebar

3. **Add Each Variable**
   Click **Add New** and add these **one by one**:

   | Variable Name | Value | Environment |
   |--------------|-------|-------------|
   | `DB_HOST` | `localhost` | Production, Preview, Development |
   | `DB_PORT` | `3306` | Production, Preview, Development |
   | `DB_NAME` | `digisrup_ahs_centenary` | Production, Preview, Development |
   | `DB_USER` | `digisrup_ahs_centenary` | Production, Preview, Development |
   | `DB_PASSWORD` | `your_actual_password` | Production, Preview, Development |

   **Important Notes:**
   - ✅ Check all three environments (Production, Preview, Development) for each variable
   - ✅ For `DB_PASSWORD`, paste your **actual password** from cPanel
   - ✅ Keep these values **private** - never commit them to Git

4. **Save and Redeploy**
   - After adding all variables, Vercel will prompt you to redeploy
   - Click **Redeploy** to apply the changes
   - Or trigger a new deployment by pushing to your Git repository

## 🔍 Testing the Setup

### Test Locally (Optional)

If you want to test locally before deploying:

1. **Create `.env.local` file** in your project root:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=digisrup_ahs_centenary
   DB_USER=digisrup_ahs_centenary
   DB_PASSWORD=your_password_here
   ```

2. **Run Vercel Dev** (if you have Vercel CLI):
   ```bash
   pnpm add -g vercel
   vercel dev
   ```

   Or use Vite dev server (note: API routes won't work in Vite dev, only on Vercel):
   ```bash
   pnpm dev
   ```

### Test on Vercel

1. **Deploy to Vercel** (if not already deployed)
   - Push your code to Git
   - Vercel will auto-deploy

2. **Test the Form**
   - Visit your site: `https://yourdomain.com/stories`
   - Click **"Share Your Story"** button
   - Fill out the form and submit
   - You should see a success toast notification

3. **Verify in Database**
   - Log into HostAfrica cPanel
   - Open **phpMyAdmin**
   - Select database: `digisrup_ahs_centenary`
   - View table: `alumni_stories`
   - You should see your submitted story (with `is_approved = 0`)

## 🚨 Troubleshooting

### Issue: "Server configuration error"
- **Cause**: Missing environment variables
- **Fix**: Double-check all 5 variables are set in Vercel Dashboard

### Issue: "Failed to submit story"
- **Cause**: Database connection failed
- **Possible fixes**:
  1. Verify database credentials are correct
  2. Check if MySQL is accessible from Vercel (HostAfrica may require remote MySQL access)
  3. Check Vercel function logs: **Vercel Dashboard → Your Project → Functions → View Logs**

### Issue: "Method not allowed"
- **Cause**: API route not found or wrong HTTP method
- **Fix**: Ensure `api/submit-story.ts` exists and is deployed

### Issue: Database connection timeout
- **Cause**: HostAfrica MySQL may not allow external connections
- **Solution**: You may need to:
  1. Enable **Remote MySQL** in HostAfrica cPanel
  2. Add Vercel's IP ranges to allowed hosts (contact HostAfrica support)
  3. Or use the PHP API approach (Option A from earlier)

## 📝 Database Table Structure

Your `alumni_stories` table should have this structure:

```sql
CREATE TABLE alumni_stories (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  class_of VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  quote TEXT NOT NULL,
  story TEXT NOT NULL,
  image_url VARCHAR(512),
  is_approved TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## 🔐 Security Notes

- ✅ Environment variables in Vercel are **encrypted** and **never exposed** to the browser
- ✅ The serverless function runs **server-side only**
- ✅ Database credentials are **never** in your frontend code
- ✅ All form inputs are **validated** and **sanitized** before database insertion

## 📚 Next Steps (Optional)

After stories are submitted, you might want to:

1. **Create an admin panel** to approve stories (`is_approved = 1`)
2. **Fetch approved stories** from the database to display on the page
3. **Add image upload** functionality for story photos

---

**Need Help?** Check Vercel function logs in your dashboard for detailed error messages.

