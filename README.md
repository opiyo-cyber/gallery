This project is a cloud-deployed Node.js web application connected to a MongoDB Atlas database. The app is integrated into a CI/CD pipeline using Jenkins, automatically triggering builds, running tests, deploying to Render, and notifying a Slack channel of successful deployments.

The project includes the following major milestones:

- ✅ **Milestone 1**: Setup with MongoDB Atlas
- ✅ **Milestone 2**: CI/CD pipeline with Jenkins and deployment to Render
- ✅ **Milestone 3**: Automated tests integrated into the pipeline
- ✅ **Milestone 4**: Slack notifications on successful builds

---

## 🏗️ Milestone Breakdown

### Milestone 1: Initial Setup

- Forked and cloned the provided GitHub repository.
- Created a MongoDB Atlas cluster and database user.
- Updated the `_config.js` file with MongoDB Atlas connection credentials.
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0d671957-9b54-4871-9b08-8d865e20b98e" />


> ✅ Status: **Completed**

---

### Milestone 2: CI/CD Pipeline with Jenkins

- Set up a Jenkins pipeline using a `Jenkinsfile`.
- Configured Jenkins to:
  - Automatically trigger builds on `git push`.
  - Install project dependencies via `npm install`.
  - Deploy the app to [Render](https://render.com).
- Modified the landing page to include a large **“MILESTONE 2”** heading.

> ✅ Status: **Completed and deployed to Render**

---

### Milestone 3: Test Integration

- Switched to the `test` branch and discovered existing test cases.
- Merged the `test` branch into `main`.
- Verified local test runs using `npm test`.
- Updated the Jenkins pipeline to:
  - Run tests automatically.
  - Send an email notification if tests fail.
- Updated the landing page to include a large **“MILESTONE 3”** heading.

> ✅ Status: **Tests integrated and passing**

---

### Milestone 4: Slack Integration

- Created a Slack channel named **YourFirstName_IP1** and invited the TM.
- Integrated Jenkins with Slack using the Slack plugin and a webhook URL.
- Configured the pipeline to:
  - Send a Slack notification on successful deployment.
  - Include the **Build ID** and **Render deployment URL** in the message.
- Modified the landing page to include **“MILESTONE 4”**.
  <img width="1691" height="803" alt="image" src="https://github.com/user-attachments/assets/49150531-dd41-430a-8775-14da5b59c00d" />


> ✅ Status: **Slack notifications working**

---

## 🧪 Technologies Used

- **Node.js** / **Express**
- **MongoDB Atlas**
- **Jenkins**
- **Render** (for deployment)
- **Slack** (CI notifications)
- **Git** + **GitHub**

---

## 📸 Final Landing Page

The final deployed application on Render displays the following on the homepage:

MILESTONE 2
MILESTONE 3
MILESTONE 4
Slack Notification Format

On successful build, the Slack message includes:

✅ Build Successful: #${BUILD_ID}
🔗 View App: https://gallery-tbiv.onrender.com


On test failure, email notifications are triggered.

✅ Status

🎉 All milestones completed successfully and verified.


Author: Hannington Opiyo

GitHub Profile https://github.com/opiyo-cyber/gallery.git

Contact: haningtonokoth59@gmail.com
