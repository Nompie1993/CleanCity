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
// API Response
{
  "status": 200,
  "data": {
    "pickupId": 8473,
    "scheduledDate": "2024-01-15" // Should be rejected
  }
}


-------------------------------------------------------------------------------------------------------------------------------

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
**Date:** 2025-07-12 

# Test Case: TC-40 - Verify Follow/Unfollow Functionality Is Non-Existent/Non-Functional

**Module:** User Authentication  
**Priority:** Medium  
**Type:** Functional  

## **Test Steps**
1. Precondition:
   - User is on login page
2. Action: Enter wrong password
3. Action: Click "Login"
4. Expected Result: 
   - Follow/unfollow functionality should NOT be available for unauthenticated users

## **Test Data**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |
| Password | Incorrect   |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Evidence:**  
![image1](https://github.com/user-attachments/assets/b0e1321c-b846-402d-a59d-577abdfa10d8)  
![image2](https://github.com/user-attachments/assets/d43012eb-9e37-4d1a-bd9d-2bfb401e8ae4)  

**Notes:**  
- Follow and unfollow functionality is visible and operational despite failed login.

**Tester:** LusandaMO  
**Date:** 2025-07-14  


----------------------------------------------------------------------------------------------------------------------------

# Test Case: TC-29 - Error Does Not Appear When Invalid Password Is Entered

**Module:** User Authentication  
**Priority:** High  
**Type:** Validation  

## **Test Steps**
1. Precondition:
   - User is on login page
2. Action: Enter wrong password
3. Action: Click "Login"
4. Expected Result: 
   - Error message should appear indicating invalid password
   - User should NOT be able to access dashboard

## **Test Data**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |
| Password | Incorrect   |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Evidence:**  
![image1](https://github.com/user-attachments/assets/802e81f4-b000-4da8-a450-c2ce41b25204)  
![image2](https://github.com/user-attachments/assets/4620b063-d190-4486-94d2-e9c4c769d6a9)  

**Notes:**  
- Invalid password allows login and user is taken to dashboard without error.

**Tester:** LusandaMO  
**Date:** 2025-07-14  


----------------------------------------------------------------------------------------------------------------------------

# Test Case: TC-27 - Verification Error for Mismatched Passwords is Non-Functional

**Module:** User Authentication  
**Priority:** High  
**Type:** Validation  

## **Test Steps**
1. Precondition:
   - User is on login page
2. Action: Enter wrong password
3. Action: Click "Login"
4. Expected Result: 
   - Error message should appear indicating password mismatch
   - Page should NOT crash

## **Test Data**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |
| Password | Incorrect   |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Evidence:**  
![image1](https://github.com/user-attachments/assets/53fb6e93-2461-4d97-a5db-a5dca32cd31b)  
![image2](https://github.com/user-attachments/assets/a6bc1ad1-c6be-4e7c-8554-ae7445db0127)  
![image3](https://github.com/user-attachments/assets/a604dd38-272c-4031-bc7c-85aac43af914)  

**Notes:**  
- Page crashes instead of showing error for mismatched password.

**Tester:** LusandaMO  
**Date:** 2025-07-14  


----------------------------------------------------------------------------------------------------------------------------

# Test Case: TC-62 - Verify Custom Tooltip for Pickup Date Field

**Module:** Schedule Pickup  
**Priority:** Medium  
**Type:** Usability  

## **Test Steps**
1. Precondition:
   - User is on the schedule pickup page
2. Action: Locate the pickup date input field
3. Action: Hover mouse cursor over the pickup date field (do not select a date)
4. Expected Result: 
   - Custom tooltip or helper text appears with:
     "Select date 24h+ in advance. Max 30 days"

## **Test Data**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Evidence:**  
![image1](https://github.com/user-attachments/assets/80ff0c33-4a03-446a-b854-9f5017c42f11)  

**Notes:**  
- Only default browser tooltip "Please fill in this field" is shown
- No custom guidance about the valid date range (24h+ in advance, max 30 days)

**Tester:** LusandaMO  
**Date:** 2025-07-14  


----------------------------------------------------------------------------------------------------------------------------

# Test Case: TC-64 - Live Chat Is Non-Functional Across All Pages

**Module:** Customer Support (Live Chat)  
**Priority:** High  
**Type:** Functional  

## **Test Steps**
1. Precondition:
   - User is on any site page (Homepage, Dashboard, Blog, Community)
2. Action: Scroll down to the footer section
3. Action: Observe for presence of live chat icon/widget
4. Action: Navigate between pages, repeat observation
5. Expected Result:
   - Live chat icon/widget is visible and accessible on the footer and all key pages
   - Clicking the icon opens a functional live chat interface

## **Test Data**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |

## **Actual Result**
- [ ] Pass  
- [X] Fail  
- [ ] Blocked  

**Evidence:**  
![image1](https://github.com/user-attachments/assets/9e35a097-7dd0-4f23-a3a8-b01645c77f9e)  
![image2](https://github.com/user-attachments/assets/bae9eb91-c822-4e5a-b22c-2921d5dacaa6)  
![image3](https://github.com/user-attachments/assets/db28f0fa-cf93-4ee3-bae3-f95daccdbb78)  
![image4](https://github.com/user-attachments/assets/d237749b-5d0e-45c6-aefd-4328d6eadde6)  

**Notes:**  
- No live chat icon or widget displayed on footer or any pages
- Users unable to access live chat functionality anywhere on the site

**Tester:** LusandaMO  
**Date:** 2025-07-14  
