
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

3. Defect Reporting Standards (tests/defect-template.md)

## Defect Report Template

**Title**: [Brief description]  
**ID**: CWS-[number]  
**Severity**: Critical/High/Medium/Low  
**Environment**: Chrome 125 on Windows 11  
**Steps**:  
1. Navigate to /home  
2. Submit empty form  
**Expected**: Validation errors appear  
**Actual**: Form submits with blank data  
**Evidence**: [screenshot.png]  
4. Test Environment Matrix (tests/environments.md)

| OS         | Browser       | Viewport    | Test Coverage |
|------------|---------------|-------------|---------------|
| Windows 11 | Chrome 125    | 1920x1080   | Full          |
| macOS      | Safari 17     | Mobile      | Basic         |
Phase 2: Test Design (Days 3-4) - Key Deliverables
1. Test Cases (tests/test-cases/)
authentication.md: 15 test cases covering login/registration

scheduling.md: 12 test cases for pickup flows

accessibility.md: 8 WCAG test cases

2. Automated Test Scripts
Jest Unit Test (tests/unit/auth.test.js):

javascript
describe("Login Validation", () => {
  test("TC1 - Valid login redirects to dashboard", async () => {
    const user = testData.users[0];
    const result = await login(user.email, user.password);
    expect(result.redirect).toBe('/dashboard');
  });
});
Cypress E2E Test (tests/e2e/scheduling.spec.js):

javascript
describe('Waste Pickup Scheduling', () => {
  it('TC5 - Submits valid request', () => {
    cy.visit('/home')
      .submitPickupRequest(testData.pickups[0])
      .verifySuccessMessage();
  });
});
Phase 3: Execution & Reporting (Days 5-10)
1. Defect Log (tests/defects/)
critical.md: 3 critical defects (e.g., data loss)

ui-issues.md: 5 UI/UX defects

accessibility.md: 4 WCAG violations

2. Test Metrics Dashboard

## Week 2 Metrics
- Test Coverage: 85%
- Defects Found: 22
- Critical: 3 | High: 7 | Medium: 8 | Low: 4
Final Deliverables Checklist
Test Report (tests/final-report.md)

Executive summary

Defect analysis with Jira screenshots

Accessibility audit results

Video Presentation Script

## Presentation Outline
0:00 - Project overview
1:00 - Key findings (show defect #CWS-15)
2:30 - Demo of critical bug
4:00 - Recommendations
Jira Artifacts

Exported defect reports (JSON)

Burndown chart screenshots

Test execution reports

Team Implementation Plan
Day	Task	Owner	Deliverable
1	Jira setup & test strategy	QA Lead	test-strategy.md
2	Test case design	Tester 1	30+ test cases
3	Automation framework setup	Tester 2	Jest/Cypress config
4	Execute smoke tests	All	Initial defect log
Accessibility Testing Package
markdown
## WCAG 2.1 AA Results
| Checkpoint       | Status | Issue                          |
|------------------|--------|--------------------------------|
| 1.1.1 Alt Text   | FAIL   | Missing alt text on pickup icons |
| 2.1.1 Keyboard   | PASS   | Full keyboard navigation       |

