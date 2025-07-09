# CleanCity Test Strategy

## 1. Objectives
- Validate all authentication flows (login, registration, session management)
- Verify waste pickup scheduling functionality
- Ensure dashboard filters and analytics work correctly
- Confirm WCAG 2.1 AA compliance

## 2. Scope
| Module            | Test Types                     | Tools              |
|-------------------|--------------------------------|--------------------|
| Authentication    | Functional, Security           | Jest, Cypress      |
| Scheduling        | Functional, UI, Validation     | React Testing Lib  |
| Dashboard         | Functional, Data Integrity     | BrowserStack       |
| Accessibility     | WCAG Compliance                | axe DevTools       |

## 3. Test Data Requirements
```javascript
// tests/fixtures/test-data.js
module.exports = {
  users: [
    { email: "user@cleancity.com", password: "password123", role: "user" },
    { email: "admin@cleancity.com", password: "admin123", role: "admin" }
  ],
  pickups: [
    { location: "Nairobi", wasteType: "General", status: "Pending" }
  ]
}

2. Jira Project Setup
Screenshots included in docs/jira-setup/:

workflow.png - Custom workflow with defect states

issue-types.png - Configured bug template

dashboard.png - QA metrics dashboard
