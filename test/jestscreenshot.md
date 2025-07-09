**Document Automation Strategy and Results**

### **Automation Strategy**

- **Framework:** Jest with React Testing Library
- **Scope:** Covers form validation, accessibility, dashboard analytics, and critical user flows (pickup request, dashboard view)
- **Test Data:** Uses realistic user input and dashboard data
- **Execution:** Automated using npm test
- **Maintainability:** Tests are modular and map to user stories/flows

### **Results**

- All test suites pass, confirming that:
  - Form validation works for both empty and filled states
  - Dashboard renders all critical analytics and stats
  - Accessibility roles and labels are present
  - Critical user flows (pickup request, dashboard view) are functional

## **Sample Output:**

 PASS  src/tests/PickupRequest.test.js
 PASS  src/tests/DashboardView.test.js
 PASS  src/tests/HomeFormValidation.test.js
 PASS  src/tests/Dashboard.test.js
 PASS  src/tests/DashboardAccessibility.test.js

Test Suites: 5 passed, 5 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        3.5 s
```
## **Sample Results Table:**

| Test Suite                    | Status  |
|-------------------------------|---------|
| HomeFormValidation.test.js    | Passed  |
| Dashboard.test.js             | Passed  |
| DashboardAccessibility.test.js| Passed  |
| PickupRequest.test.js| Passed  |
| DashboardView.test.js| Passed  |

---

**Summary:**  
- We have automated coverage for all critical user flows.
- Tests are executed automatically and results are tracked.
- The strategy ensures reliability and maintainability for CleanCity’s QA process.



<img width="487" alt="Jest_1" src="https://github.com/user-attachments/assets/c579ebdd-1835-4cbd-8625-b3453ce64703" />
#
<img width="488" alt="Jest_3" src="https://github.com/user-attachments/assets/37b7e94e-ce33-44a1-92ff-cebe939027cb" />
#
<img width="443" alt="Jest_2" src="https://github.com/user-attachments/assets/2b67bf16-e999-4554-8d1f-33a5df06d6e6" />
