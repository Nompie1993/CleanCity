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

## TC-40 - Validate follow actions blocked for unauthenticated users

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

## TC-29 - Validate invalid password error handling

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

## TC-27 - Check login Error Message functionality

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

## TC-64 - Validate live chat widget presence and functionality

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

---

## TC-56 - Check if Website Allows Pickup Scheduling While Offline

**Module:** Pickup Scheduling  
**Priority:** High  
**Type:** Functional  

**Test Steps:**
1. Open the website (may be cached in the browser).
2. Disconnect the device from the internet (go offline).
3. Navigate to the Pickup Scheduling page.
4. Fill in the form with valid information.
5. Click Submit.

**Expected Result:**  
- Error message should appear, preventing pickup scheduling while offline.

**Test Data:**
| Field    | Value        |
|----------|-------------|
| OS       | (Specify)    |
| Browser  | (Specify)    |
| Status   | Offline      |

---

## TC-43 - Validate pending request rejection workflow

**Module:** Pickup Requests  
**Priority:** High  
**Type:** Functional  

**Test Steps:**
1. Log in as admin.
2. Open "Pending Requests".
3. Click "Reject" on request #123.
4. Enter reason: "Incomplete address".

**Expected Result:**  
- Only pending requests are displayed (completed, missed, scheduled requests should not be shown).
- Email notification should be received upon pickup request creation.
- "Enter reason" section should be available on the pickup requests page.

**Test Data:**
| Field      | Value              |
|------------|-------------------|
| Role       | Admin             |
| Request ID | 123               |
| Reason     | Incomplete address|

---

## TC-42 - Validate admin rejection of pending requests

**Module:** Pickup Requests  
**Priority:** High  
**Type:** Functional  

**Test Steps:**
1. Log in as admin.
2. Open "Pending Requests".
3. Click "Reject" on request #123.
4. Enter reason: "Incomplete address".

**Expected Result:**  
- Only pending requests are displayed, not completed, missed, or scheduled requests.
- Email notification should be received by user upon making pickup request.
- Request status should update accordingly.

**Actual Result:**  
- Shows other requests (completed, missed, scheduled) when viewing pending.
- User does not receive email when pickup request is sent.
- Request status does not change.

**Test Data:**
| Field    | Value      |
|----------|-----------|
| OS       | MacOS     |
| Browser  | Chrome 120|
| Role     | Admin     |
| Request  | #123      |

---

## TC-52 - Schedule Pickup Modal Performance

**Module:** Pickup Scheduling  
**Priority:** Medium  
**Type:** Performance  

**Test Steps:**
1. Click "Schedule Pickup" button.
2. Measure time until modal appears.

**Expected Result:**  
- Modal opens within 1000ms.
- No UI freezing.

**Test Data:**
| Field       | Value         |
|-------------|--------------|
| Environment | Chrome DevTools |

---

## TC-41 - Validate badge rewards upon challenge completion

**Module:** Challenges & Badges  
**Priority:** High  
**Type:** Functional  

**Test Steps:**
1. Go to login page with valid account.
2. Navigate to the “Challenges” section.
3. Select an active challenge, complete the required task and be awarded badges upon completion.
4. Return to the dashboard or challenge progress tracker.

**Expected Result:**  
- Badges awarded upon completion of tasks, quiz, challenges, or competitions.

**Actual Result:**  
- Only a functional quiz is available and repeats the same three questions each time, even when already answered.
- No badges awarded upon completion.
- No other tasks, challenges, or competitions available.

**Test Data:**
| Field    | Value      |
|----------|-----------|
| OS       | MacOS     |
| Browser  | Chrome 120|

---

## TC-44 - Verify dashboard search and data rendering

**Module:** Dashboard & Analytics  
**Priority:** High  
**Type:** Functional  

**Test Steps:**
1. Log in with valid credentials.
2. Navigate to the Dashboard or Dashboard Analytics page.
3. Observe the top navigation and content area.

**Expected Result:**  
- A search bar should be visible on the dashboard or analytics page.
- The page should display a list or summary of user requests or analytics data.

**Actual Result:**  
- The search bar is missing.
- No requests or analytics data are displayed on the dashboard.

**Test Data:**
| Field    | Value      |
|----------|-----------|
| OS       | MacOS     |
| Browser  | Chrome 120|

---

## TC-59 - Validate date picker restrictions for future pickups

**Module:** Pickup Scheduling  
**Priority:** Critical  
**Type:** Functional  

**Test Steps:**
1. Log in to the application.
2. Navigate to the "Schedule Pickup" page.
3. Open the date picker/calendar.
4. Select today’s date (valid).
5. Select a future date that is more than 31 days from today.
6. Submit the request.

**Expected Result:**  
- The date picker should disable or prevent selection of dates beyond a defined scheduling limit (e.g., 30 days in advance).
- An error or warning should appear if a user attempts to schedule a pickup beyond the maximum allowed range.
- The system should not submit requests with invalid future dates.

**Actual Result:**  
- The date picker allows selection of any future date, including dates more than 31 days ahead.
- The system accepts and processes the request without any validation or warning.
- No error is displayed, and the request is submitted successfully regardless of how far in the future the date is.

**Test Data:**
| Field    | Value      |
|----------|-----------|
| OS       | MacOS     |
| Browser  | Chrome 120|
