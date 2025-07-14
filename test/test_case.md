# Test Case: TC-47 - Verify Homepage Color Contrast Compliance

**Module:** Accessibility (Homepage)  
**Priority:** High  
**Type:** Functional  

## **Test Steps**
1. Precondition: 
   - Homepage loaded in Chrome browser
   - Axe DevTools extension installed
2. Action: Navigate to (https://nimble-trifle-da8abd.netlify.app/)
3. Action: Run Axe DevTools scan with "color-contrast" rule enabled
4. Expected Result: All text elements meet WCAG AA contrast ratio (4.5:1)

## **Test Data**
| Field | Value |
|-------|-------|
| Browser | Chrome v118 |
| Testing Tool | Axe DevTools v4.7 |
| WCAG Standard | AA (4.5:1 minimum) |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Notes:**  
- 3 contrast violations found (see screenshot)
- Most severe violation: Main navigation (3.8:1 ratio)
- Full results: [Axe Report](https://github.com/user-attachments/assets/08135134-8276-4fd8-97ae-b3c0a0cecfeb)

**Tester:** Nompie Dube 
**Date:** 2025-07-12

-----------------------------------------------------------------------------------------------------------------------------

# Test Case: TC-095 - Verify Live Chat Availability

**Linked FR:** FR-095  
**Module:** Customer Support  
**Priority:** High  
**Type:** Functional  

## **Test Steps**
1. Precondition: 
   - User logged in with valid account
   - Business hours (9AM-5PM EST)
2. Action: Scroll to page footer
3. Action: Click "Contact Support" link
4. Action: Select "Live Chat" option
5. Expected Result: 
   - Chat widget opens with agent greeting
   - Average wait time <2m displayed
   - Message input field is active

## **Test Data**
| Field | Value |
|-------|-------|
| Test Time | Business Hours (9:00-17:00 EST) |
| Browser | Chrome v120 |
| Account Type | Registered User |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Notes:**  
- Chat widget fails to load (see defect #64)
- Console shows "LiveChat SDK not found" error
- No network calls to chat service observed

**Tester:** Neo  
**Date:** 2025-07-12  

----------------------------------------------------------------------------------------------------------------------------

# Test Case: TC-14.1.01 - Verify 31-Day Pickup Blocking

**Linked Requirement:** FR-14.1 (Pickup Scheduling Limits)  
**Module:** Order Management  
**Priority:** High  
**Type:** Boundary/Validation  
 

## **Test Steps**
1. Precondition:
   - User logged in with "Create Pickup" permission
   - System date: ${currentDate}
2. Action: Navigate to "Schedule Pickup" form
3. Action: Open date picker component
4. Action: Attempt to select date ${currentDate + 31 days}
5. Action: Submit form with invalid date
6. Expected Result:
   - Date picker visually disables dates beyond 30 days
   - Form shows error: "Maximum advance scheduling is 30 days"
   - Submission prevented with status 400 (Bad Request)

## **Test Data**
| Field | Value | 
|-------|-------|
| Test Date | 2023-12-15 |
| Invalid Date | 2024-01-15 |
| Valid Max Date | 2024-01-14 |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Evidence:**  
![Date picker allowing 31-day selection](https://github.com/user-attachments/assets/f35de4c3-df4b-47dd-859b-090d16180e07)  
```json
// API Response
{
  "status": 200,
  "data": {
    "pickupId": 8473,
    "scheduledDate": "2024-01-15" // Should be rejected
  }
}


------------------------------------------------------------------------------------------------------------------------------
# Test Case: TC-33 - Verify Recent Pickups Display

**Module:** User Dashboard  
**Priority:** Medium  
**Type:** Functional  

## **Test Steps**
1. Precondition:
   - User has completed ≥1 pickup request
   - Test URLs:
     - http://localhost:3000/dashboard
     - http://127.0.0.1:5500/index.html
2. Action: Log in with test credentials
3. Action: Navigate to dashboard
4. Action: Inspect "Recent Pickups" section
5. Expected Result:
   - Last 5 pickups displayed with:
     - Status (Completed/Scheduled)
     - Date
     - Waste type
     - Quantity

## **Test Data**
| Field | Test Value |
|-------|------------|
| Test User | user_with_pickups@test.com |
| Expected Entries | 5 |
| Required Fields | Status, Date, Type, Qty |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Notes:**  
1. localhost:3000 - Missing entire "Recent Pickups" section  
2. 127.0.0.1 - Shows date/type but missing quantity and status  
3. Both fail to display 5 entries  

**Tester:** Lusanda  
**Date:** 2025-7-12

-----------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------
