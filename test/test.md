# Test Cases for CleanCity Waste Scheduler

## Authentication
| ID  | Scenario                  | Steps                                                                 | Expected Result                     |
|-----|---------------------------|-----------------------------------------------------------------------|-------------------------------------|
| TC1 | Valid user login          | 1. Enter valid email/password<br>2. Click "Sign In"                   | Redirect to dashboard               |
| TC2 | Invalid password          | 1. Enter valid email<br>2. Enter wrong password<br>3. Click "Sign In" | Show error message                  |
| TC3 | Empty credentials         | 1. Leave fields blank<br>2. Click "Sign In"                          | Show validation errors              |
| TC4 | Admin login               | 1. Enter admin credentials<br>2. Click "Sign In"                     | Show admin dashboard with admin link|

## Pickup Scheduling
| ID  | Scenario                  | Steps                                                                 | Expected Result                     |
|-----|---------------------------|-----------------------------------------------------------------------|-------------------------------------|
| TC5 | Valid pickup submission   | 1. Fill all required fields<br>2. Select future date<br>3. Submit     | Show success message                |
| TC6 | Missing required fields   | 1. Skip name field<br>2. Submit                                      | Show validation error for name      |
| TC7 | Past date selection       | 1. Fill form<br>2. Select yesterday's date<br>3. Submit              | Show date validation error          |
| TC8 | Hazardous waste selection | 1. Select "Hazardous" waste type<br>2. Submit                        | Request shows hazardous type        |

## Dashboard
| ID  | Scenario                  | Steps                                                                 | Expected Result                     |
|-----|---------------------------|-----------------------------------------------------------------------|-------------------------------------|
| TC9 | Filter by location        | 1. Go to dashboard<br>2. Filter by "Nairobi"                         | Only Nairobi requests displayed     |
| TC10| Filter by status          | 1. Go to dashboard<br>2. Filter by "Completed"                       | Only completed requests shown       |
| TC11| Pagination                | 1. View dashboard with 15+ requests<br>2. Click next page            | Next 10 requests displayed          |

## Feedback Submission
| ID  | Scenario                  | Steps                                                                 | Expected Result                     |
|-----|---------------------------|-----------------------------------------------------------------------|-------------------------------------|
| TC12| Valid feedback            | 1. Enter valid request ID<br>2. Select reason<br>3. Submit            | Show success message                |
| TC13| Invalid request ID        | 1. Enter non-existent ID<br>2. Submit                                | Show "Request not found" error      |

Functional Test Cases 

### Authentication Test Cases

| ID  | Scenario                | Steps                                                                 | Expected Result                     | Test Data                   |
|-----|-------------------------|-----------------------------------------------------------------------|-------------------------------------|-----------------------------|
| TC1 | Valid user login        | 1. Enter valid credentials<br>2. Click "Sign In"                     | Redirect to dashboard               | email: user@cleancity.com<br>password: password123 |
| TC2 | Invalid password        | 1. Enter valid email<br>2. Enter wrong password<br>3. Submit         | Show error message                  | password: wrongpass         |
| TC3 | Admin privileges        | 1. Login as admin<br>2. Navigate to /admin                           | Admin panel visible                 | role: admin                 |
Non-Functional Test Cases (tests/test-cases/non-functional/performance.md)

### Performance Test Cases

| ID  | Scenario                | Metric               | Threshold          | Tool          |
|-----|-------------------------|----------------------|--------------------|---------------|
| PF1 | Dashboard load time     | Page load < 2s       | 90% of requests    | Lighthouse    |
| PF2 | Form submission latency | API response < 1s    | 100% of requests   | Chrome DevTools |
Accessibility Test Cases (tests/test-cases/accessibility.md)
markdown
### WCAG 2.1 AA Compliance

| ID  | Checkpoint              | Test Method                          | Expected Result     |
|-----|-------------------------|--------------------------------------|---------------------|
| AX1 | Alt text for images     | Run axe DevTools scan                | No violations       |
| AX2 | Keyboard navigation     | Tab through all interactive elements | Full accessibility  |
Cross-Browser Tests (tests/test-cases/compatibility.md)

### Browser Compatibility Matrix

| Browser       | OS          | Test Coverage           |
|---------------|-------------|-------------------------|
| Chrome 125    | Windows 11  | Full functional suite   |
| Safari 17     | macOS       | Critical paths only     |
2. Jira Task Creation
Sample Stories:

CWS-101 (Story): "Verify user authentication flows"

Subtasks:

Test valid/invalid login (TC1-TC2)

Session timeout testing

CWS-102 (Story): "Validate waste pickup scheduling"

Subtasks:

Form validation tests

Date picker compatibility

Screenshot: docs/jira/jira-stories.png (Mockup of stories in Jira board)

3. Test Data Preparation
User Accounts (tests/fixtures/users.json)
json
{
  "roles": {
    "user": {
      "email": "testuser@cleancity.com",
      "password": "Passw0rd!",
      "permissions": ["schedule_pickup"]
    },
    "admin": {
      "email": "admin@cleancity.com",
      "password": "Admin123!",
      "permissions": ["manage_users", "view_reports"]
    }
  }
}
Edge Case Scenarios (tests/edge-cases.md)

### Extreme Input Validation
1. **Long Strings**: Submit form with 1000+ character inputs  
   - Expected: Truncation or graceful error  
2. **Special Characters**: Use SQL injection patterns in form fields  
   - Expected: Input sanitization  
Sample Content (tests/fixtures/content.json)
json
{
  "blogPosts": [
    {
      "title": "Proper Waste Sorting",
      "content": "Lorem ipsum...",
      "author": "admin@cleancity.com"
    }
  ],
  "pickupRequests": [
    {
      "location": "Nairobi",
      "wasteType": "Hazardous",
      "status": "Pending"
    }
  ]
}
4. Implementation Checklist
Task	Owner	Deliverable	Jira Reference
Draft 30+ functional test cases	QA Lead	functional/*.md files	CWS-101
Create 10 accessibility tests	Tester 1	accessibility.md	CWS-103
Prepare test data	Tester 2	fixtures/ directory	CWS-104
Log Jira stories	All	Screenshots of Jira board	-
5. Sample Automated Test
Cypress Accessibility Test (tests/e2e/accessibility.spec.js)

javascript
describe('Accessibility Checks', () => {
  it('Passes WCAG 2.1 AA standards', () => {
    cy.visit('/home')
      .injectAxe()
      .checkA11y({
        includedImpacts: ['critical', 'serious']
      });
  });
});
Jest Security Test (tests/unit/security.test.js)

javascript
test('Sanitizes HTML inputs', () => {
  const maliciousInput = '<script>alert(1)</script>';
  expect(sanitizeInput(maliciousInput)).not.toContain('<script>');
});
6. Edge Case Testing Strategy
File: tests/edge-cases/README.md


## Boundary Testing
1. **Date Picker**: 
   - Minimum: Today's date  
   - Maximum: 1 year in future  
2. **File Uploads**:  
   - Invalid formats (e.g., .exe)  
   - Oversized files (>10MB)  

## Error Handling
- Test localStorage quota exceeded errors  
- Simulate offline mode during form submission  
