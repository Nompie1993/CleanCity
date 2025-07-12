

# CleanCity Test Plan

<details>
<summary><strong>📋 Document Information</strong></summary>

| **Field**         | **Value**                     |
|--------------------|-------------------------------|
| Version            | 1.0                           |
| Last Updated       | `YYYY-MM-DD`                  |
| Target Release     | v1.0                          |
| GitHub Project     | [CleanCity QA Board](#)       |
| Related Docs       | [FRS](#), [Test Data](#)      |

</details>

## 🗺️ Test Scope
```mermaid
%% GitHub supports Mermaid diagrams
pie showData
    title Requirement Coverage
    "Authentication (FR1-11)" : 15
    "Waste Mgmt (FR12-22)" : 30
    "Dashboard (FR23-30)" : 20
    "Community (FR41-52)" : 20
    "Admin (FR53-64)" : 15
```

## ⚙️ GitHub Setup
### 1. Project Board
```markdown
[GitHub Project](https://github.com/users/Nompie1993/projects/5)
```
**Columns:**
```
Backlog → Todo → In Progress → Blocked → Done
```

### 2. Issue Templates
```bash
# Create in .github/ISSUE_TEMPLATES/
touch test_case.md defect_report.md
```
**Sample Test Case Template:**
```markdown
---
name: Test Case
about: Create new test case
title: 'TC-[MODULE]-[ID]: [Description]'
labels: 'test-case'
assignees: ''

---
### Linked FR: 
FR-XXX

### Test Steps:
1. 
2. 

### Expected Result:

### Actual Result:
```

## 🔍 Test Cases (Examples)
<details>
<summary><strong>🔐 Authentication (FR-001 to FR-011)</strong></summary>

### TC-AUTH-01: Valid Registration
```gherkin
Scenario: Successful user registration
  Given I enter valid registration data
  When I submit the form
  Then Account is created (FR-003)
  And I'm redirected to dashboard (FR-007)
```

### TC-AUTH-02: Admin Access Control
```markdown
**Preconditions:** Admin user logged in  
**Steps:**  
1. Navigate to `/admin/users`  
**Expected:**  
- User management panel loads (FR-011)  
- Regular users see 403 error  
```
</details>

<details>
<summary><strong>🗑️ Waste Management (FR-012 to FR-022)</strong></summary>

### TC-WASTE-01: Pickup Scheduling
```yaml
# testdata/pickups/valid.yaml
date: tomorrow
waste_type: Recyclable
quantity: Medium
expected: status:Confirmed (FR-012, FR-019)
```

### TC-WASTE-07: Hazardous Waste
```markdown
**Test Data:**  
- Type: "Batteries"  
- Date: tomorrow + 1day  

**Expected:**  
- Status: "Pending Approval" (FR-015)  
- Admin notification sent  
```
</details>

## 🛠️ GitHub Actions
```yaml
name: Regression Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: cypress-io/github-action@v6
        with:
          browser: chrome
          env:
            BASE_URL: ${{ secrets.STAGING_URL }}
          config-file: cypress/config/FR-001_to_FR-030.json
```

## 📊 Tracking
### Requirement Coverage
| FR Range       | Test Cases | Coverage |
|----------------|------------|----------|
| FR-001 - FR-011 | 15         | 100%     |
| FR-012 - FR-022 | 22         | 95%      |

### Defect Stats
```diff
# Latest Run (2024-03-20)
+ 142 Passed
- 3 Failed (2 P2, 1 P3)
! 2 Blocked
```

## ✅ Approval
**QA Lead:**  
Signed-off: ___________________  
Date: `YYYY-MM-DD`  

[![View in GitHub](https://img.shields.io/badge/View_in-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/CleanCity/qa)
```

### Key GitHub Features Used:
1. **Collapsible Sections** - For organizing test modules
2. **Mermaid Diagrams** - Native GitHub support for visualizations
3. **Shields.io Badges** - For clickable project links
4. **Syntax Highlighting** - For code/test case formatting
5. **Task Lists** - For tracking completion
6. **Diff Highlighting** - For test results

### Implementation Steps:
1. Create `.github/ISSUE_TEMPLATES/` with the templates
2. Set up GitHub Projects board with the specified columns
3. Add the GitHub Actions workflow file
4. Store test data in `/testdata/` directory
5. Use issue labels: `test-case`, `defect`, `module:auth`, `priority:p0`

The markdown renders perfectly in GitHub and provides:
- One-click navigation to related resources
- Clear visual hierarchy
- Ready-to-use templates
- Automated test tracking
