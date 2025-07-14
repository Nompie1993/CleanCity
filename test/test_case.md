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

---

## TC-40 - Verify Follow/Unfollow Functionality Is Non-Existent/Non-Functional

**Module:** User Authentication  
**Priority:** Medium  
**Type:** Functional  

**Test Steps:**
1. Go to login page.
2. Enter wrong password.
3. Click "Login".

**Expected Result:**  
- Follow/unfollow functionality should NOT be available for unauthenticated users.

**Test Data:**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |
| Password | Incorrect   |

---

## TC-29 - Error Does Not Appear When Invalid Password Is Entered

**Module:** User Authentication  
**Priority:** High  
**Type:** Validation  

**Test Steps:**
1. Go to login page.
2. Enter wrong password.
3. Click "Login".

**Expected Result:**  
- Error message should appear indicating invalid password.
- User should NOT be able to access dashboard.

**Test Data:**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |
| Password | Incorrect   |

---

## TC-27 - Verification Error for Mismatched Passwords is Non-Functional

**Module:** User Authentication  
**Priority:** High  
**Type:** Validation  

**Test Steps:**
1. Go to login page.
2. Enter wrong password.
3. Click "Login".

**Expected Result:**  
- Error message should appear indicating password mismatch.
- Page should NOT crash.

**Test Data:**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |
| Password | Incorrect   |

---

## TC-62 - Verify Custom Tooltip for Pickup Date Field

**Module:** Schedule Pickup  
**Priority:** Medium  
**Type:** Usability  

**Test Steps:**
1. Go to the schedule pickup page.
2. Locate the pickup date input field.
3. Hover mouse cursor over the pickup date field (do not select a date).

**Expected Result:**  
- Custom tooltip or helper text appears with:  
  "Select date 24h+ in advance. Max 30 days"

**Test Data:**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |

---

## TC-64 - Live Chat Is Non-Functional Across All Pages

**Module:** Customer Support (Live Chat)  
**Priority:** High  
**Type:** Functional  

**Test Steps:**
1. Navigate to the home page.
2. Scroll down to the footer section.
3. Observe the absence of the live chat icon/widget.
4. Navigate to other pages (e.g., dashboard, blog, community).
5. Check the footer and page sections for live chat availability.

**Expected Result:**  
- Live chat icon/widget should be visible and accessible on the footer and all key pages.  
- Clicking the icon should open a functional live chat window or interface.

**Test Data:**
| Field    | Value        |
|----------|-------------|
| OS       | MacOS       |
| Browser  | Chrome 120  |
