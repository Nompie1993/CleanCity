# Defect Report: #47 - Color Contrast Violations on Homepage

**Environment:**  
- OS: Windows 11  
- Browser: Chrome v118  
- Device: Desktop  

## **Steps to Reproduce**
1. Go to homepage (https://nimble-trifle-da8abd.netlify.app/home )
2. Run Axe DevTools accessibility scan
3. Observe color contrast violations

## **Expected vs Actual**
| Expected | Actual |
|----------|--------|
| All text passes WCAG AA (4.5:1 contrast ratio) | 7 color contrast violations found (see evidence) |

**Severity:** Major  
**Priority:** High (Accessibility Compliance)  

## **Evidence**
- Screenshot: ![Axe DevTools contrast errors](https://github.com/user-attachments/assets/08135134-8276-4fd8-97ae-b3c0a0cecfeb)
- Violation Details:
  ```log
  1. #main-nav (contrast ratio 3.8:1)
  2. .promo-text (contrast ratio 4.1:1) 
  3. Footer links (contrast ratio 3.9:1)

---------------------------------------------------------------------------------------------------
# Defect Report: #59 - Date Picker Allows Unlimited Future Scheduling

**Environment:**  
- OS: macOS Ventura 13.5  
- Browser: Chrome 120.0.6099.216  
- Device: MacBook Pro 14" (M1 Pro)  

## **Steps to Reproduce**
1. Log in to the application with valid credentials
2. Navigate to "Schedule Pickup" via main menu
3. Click the date picker field
4. Select a date >31 days in the future (e.g., February 30, 2024)
5. Complete other required fields
6. Click "Submit Request"

## **Expected vs Actual**
| Expected Behavior | Actual Behavior |
|------------------|----------------|
| Date picker should disable dates beyond 30-day limit | All future dates are selectable |
| System should reject submissions beyond max range | System accepts and processes invalid dates |
| Clear error message should appear | No validation/warning displayed |

**Severity:** High (Business Logic Failure)  
**Priority:** Critical (Allows impossible scheduling)  

## **Evidence**
![Unlimited date selection](https://github.com/user-attachments/assets/f35de4c3-df4b-47dd-859b-090d16180e07)  
![Successful submission with invalid date](https://github.com/user-attachments/assets/a1ff1799-ba6d-495c-9108-bc74c90b5123)  


----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #64 - Live Chat Widget Missing Across Site

**Environment:**  
- OS: macOS Ventura 13.5  
- Browser: Chrome 120.0.6099.216  
- Device: MacBook Pro 14" (M1 Pro)  

## **Steps to Reproduce**
1. Navigate to https://[yourdomain].com
2. Scroll to footer section
3. Verify absence of chat icon
4. Repeat on:
   - Dashboard page
   - Blog page
   - Community page
5. Attempt to trigger chat via keyboard shortcut (expected: none working)

## **Expected vs Actual**
| Expected Behavior | Actual Behavior |
|------------------|----------------|
| Visible chat icon in footer | No chat interface detected |
| Functional chat window on click | No interactive elements found |
| Consistent across all pages | Missing site-wide |

**Severity:** High (Critical Feature Missing)  
**Priority:** Urgent (Customer Support Impact)  

## **Evidence**
![Missing chat in footer](https://github.com/user-attachments/assets/d237749b-5d0e-45c6-aefd-4328d6eadde6)  
![Dashboard page verification](https://github.com/user-attachments/assets/db28f0fa-cf93-4ee3-bae3-f95daccdbb78)  

-------------------------------------------------------------------------------------------------------------------------------

[Error] LiveChat: Widget initialization failed - SDK not loaded (line 142, chat-plugin.js)
[Warning] Missing chat container element (footer-chat-widget)

-------------------------------------------------------------------------------------------------------------------------------

# Defect Report: DR-33 - Recent Pickups Section Missing/Incomplete

**Environment:**  
- OS: macOS Ventura 13.5  
- Browser: Chrome 120.0.6099.216  

## **Steps to Reproduce**
1. Log in as user with historical pickups
2. Access either:
   - http://localhost:3000/dashboard (no section)
   - http://127.0.0.1:5500/index.html (partial data)

## **Expected vs Actual**
| Expected | Actual |
|----------|--------|
| Complete pickup history cards | Missing section or incomplete data |
| 5 entries by default | Zero/partial entries displayed |

**Severity:** Medium  
**Priority:** High (User Experience)  

## **Evidence**
![Missing section](https://github.com/user-attachments/assets/039dcfb7-876e-4bf3-a293-ef6cacab47e8)  
![Partial data](https://github.com/user-attachments/assets/27463571-0a0a-4614-b206-88769a557d4a)  

[Error] Failed to load pickups: 404 (Not Found) - /api/user/pickups

---------------------------------------------------------------------------------------------------------------------------------
- Screenshot: ![Screenshot 2](https://github.com/user-attachments/assets/db28f0fa-cf93-4ee3-bae3-f95daccdbb78)
- Screenshot: ![Screenshot 3](https://github.com/user-attachments/assets/bae9eb91-c822-4e5a-b22c-2921d5dacaa6)
- Screenshot: ![Screenshot 4](https://github.com/user-attachments/assets/9e35a097-7dd0-4f23-a3a8-b01645c77f9e)

# Defect Report: #27 - Verification Error for Mismatched Passwords Is Non-Functional

**Environment:**  
- OS: MacOS  
- Browser: Chrome 120  
- Device: Desktop  

## **Steps to Reproduce**
1. Go to login page
2. Enter wrong password
3. Click "Login"

## **Expected vs Actual**
| Expected | Actual |
|----------|--------|
| Error message should appear indicating password mismatch | Page crashes instead of showing an error message |

**Severity:** Major  
**Priority:** High  

## **Evidence**
- Screenshot: ![Screenshot 1](https://github.com/user-attachments/assets/a604dd38-272c-4031-bc7c-85aac43af914)
- Screenshot: ![Screenshot 2](https://github.com/user-attachments/assets/a6bc1ad1-c6be-4e7c-8554-ae7445db0127)
- Screenshot: ![Screenshot 3](https://github.com/user-attachments/assets/53fb6e93-2461-4d97-a5db-a5dca32cd31b)

---



# Defect Report: #62 - No Custom Tooltip for Pickup Date Field

**Environment:**  
- OS: MacOS  
- Browser: Chrome 120  
- Device: Desktop  

## Steps to Reproduce
1. Go to the schedule pickup page.
2. Locate the pickup date input field.
3. Hover your mouse cursor over the pickup date field without selecting a date.

## Expected vs Actual
| Expected | Actual |
|----------|--------|
| A custom tooltip or message should appear on hover, clearly stating: "Select date 24h+ in advance. Max 30 days". This guides the user about valid input expectations. | Only the browser’s default validation message appears: "Please fill in this field". The user receives no guidance about the required date range (24h+ in advance, max 30 days). |

**Severity:** Medium  
**Priority:** Medium  

## Evidence
- Screenshot: ![Screenshot](https://github.com/user-attachments/assets/80ff0c33-4a03-446a-b854-9f5017c42f11)

---

# Defect Report: #64 - Live Chat Is Non-Functional Across All Pages

**Environment:**  
- OS: MacOS  
- Browser: Chrome 120  
- Device: Desktop  

## Steps to Reproduce
1. Navigate to the home page.
2. Scroll down to the footer section.
3. Observe the absence of the live chat icon/widget.
4. Navigate to other pages (e.g., dashboard, blog, community).
5. Again, check the footer and page sections for live chat availability.

## Expected vs Actual
| Expected | Actual |
|----------|--------|
| A live chat icon/widget should be visible and accessible on the footer and all key pages. Clicking the icon should open a functional live chat window or interface. | No live chat icon or widget is displayed on the footer or any pages. Users are unable to access live chat functionality anywhere on the site. |

**Severity:** Major  
**Priority:** High  

## Evidence
- Screenshot: ![Screenshot 1](https://github.com/user-attachments/assets/d237749b-5d0e-45c6-aefd-4328d6eadde6)
- Screenshot: ![Screenshot 2](https://github.com/user-attachments/assets/db28f0fa-cf93-4ee3-bae3-f95daccdbb78)
- Screenshot: ![Screenshot 3](https://github.com/user-attachments/assets/bae9eb91-c822-4e5a-b22c-2921d5dacaa6)
- Screenshot: ![Screenshot 4](https://github.com/user-attachments/assets/9e35a097-7dd0-4f23-a3a8-b01645c77f9e)
  
----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #56 - Website Allows Pickup Scheduling Offline  

**Environment:**  
- OS: macOS  
- Browser: Chrome v120  
- Device: Desktop  

## **Steps to Reproduce**  
1. Open the website (may be cached in the browser).  
2. Disconnect the device from the internet (go offline).  
3. Navigate to the **Pickup Scheduling** page.  
4. Fill in the form with valid information and click **Submit**.  

## **Expected vs Actual**  
| Expected | Actual |  
|----------|--------|  
| Error message should appear (e.g., "No internet connection") | Page behaves as if online; shows "Request submitted" message |  

**Severity:** Major (functional integrity compromised)  
**Priority:** High (misleads users with false confirmations)  

## **Evidence**  
- Screenshot 1: [Offline form submission](https://github.com/user-attachments/assets/6acb7362-dd0f-45d5-8b8c-d1fc0b619c62)  
- Screenshot 2: [Fake "Request submitted" message](https://github.com/user-attachments/assets/09f05326-cd1b-4dd2-b8ed-9d65b685e383)  

### Additional Notes:  
- **Root Cause:** Likely missing offline state validation or uncaught `navigator.onLine` API checks.  
- **Repro Rate:** 100% (if cached).

----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #44 - Missing Search Bar and Request Data on Dashboard  

**Environment:**  
- OS: macOS  
- Browser: Chrome v120  
- Device: Desktop  

## **Steps to Reproduce**  
1. Log in with valid credentials  
2. Navigate to **Dashboard** or **Dashboard Analytics** page  
3. Observe top navigation and content area  

## **Expected vs Actual**  
| Expected | Actual |  
|----------|--------|  
| Search bar visible in navigation | No search bar present |  
| Requests/analytics data displayed | Blank/empty dashboard area |  

**Severity:** Major (core functionality missing)  
**Priority:** High (impairs user workflow and data visibility)  

## **Evidence**  
- Screenshot 1: [Missing search bar](https://github.com/user-attachments/assets/5d6f6f0a-1c39-415a-a4e1-1c61bbfc2ca6)  
- Screenshot 2: [Empty dashboard section](https://github.com/user-attachments/assets/9e68432c-7d76-410e-aa69-9961bff4c486)  
- Screenshot 3: [Blank analytics view](https://github.com/user-attachments/assets/54d9cb47-518b-46ae-9cb2-6db24ce7f1a6)  

### Additional Notes:  
- **Potential Causes:**  
  - Broken API endpoint for data fetching  
  - UI rendering logic failure  
  - Incorrect user permissions  
- **Repro Rate:** 100% (consistent across tested environments)

----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #43 - Pending Requests Filtering and Notification Issues

**Environment:**
- OS: macOS
- Browser: Chrome v120
- Device: Desktop

## **Steps to Reproduce**
1. Log in as admin
2. Navigate to "Pending Requests" section
3. Click "Reject" on any request (e.g., Request #123)
4. Attempt to enter rejection reason

## **Expected vs Actual**
| Expected | Actual |
|----------|--------|
| Only pending requests should be displayed | Shows completed/missed/scheduled requests |
| Email notification sent upon pickup request | No email is sent to user |
| "Enter reason" section visible when rejecting | Missing reason input field |
| Request status updates after action | Status remains unchanged |

**Severity:** High (multiple critical workflow failures)
**Priority:** High (affects core admin functionality and user communication)

## **Evidence**
- Screenshot 1: [Mixed request types in pending view](https://github.com/user-attachments/assets/a9694bb2-bc80-4595-9b58-8aa5e2cbc51d)
- Screenshot 2: [Missing rejection reason field](https://github.com/user-attachments/assets/683a8dbd-92e3-4308-9323-6fef50cffff2)
- Screenshot 3: [No status update after action](https://github.com/user-attachments/assets/8aae4dce-700c-44d5-91dd-4a2608ae588f)

### Additional Notes:
- **Root Causes:**
  - Backend: Improper request filtering logic
  - Frontend: Missing form fields/components
  - Email service: Broken notification trigger
- **Impact Areas:**
  - Admin workflow efficiency
  - User communication
  - Audit trail completeness
 
--------------------------------------------------------------------------------------------------------------------------------------- 
# Defect Report: TC-42 - Pending Requests Filtering and Email Notification Failures

**Environment:**
- OS: macOS
- Browser: Chrome v120
- Device: Desktop
- User Role: Admin

## **Steps to Reproduce**
1. Log in with admin credentials
2. Navigate to "Pending Requests" section
3. Observe displayed request list
4. Submit a new pickup request as regular user (parallel test)

## **Expected vs Actual**
| Expected Behavior | Actual Behavior |
|-------------------|-----------------|
| Only pending requests displayed | Shows mixed status requests (completed/missed/scheduled) |
| Email notification sent to user upon request submission | No email notification received |
| Request status updates immediately after admin action | Status remains unchanged after rejection |

**Severity:** High (core functionality failures)
**Priority:** High (impacts operational workflow and user communication)

## **Evidence**
1. **UI Issues:**
   - [Mixed request types in pending view](https://github.com/user-attachments/assets/a9694bb2-bc80-4595-9b58-8aa5e2cbc51d)
   - [Status not updating after rejection](https://github.com/user-attachments/assets/8aae4dce-700c-44d5-91dd-4a2608ae588f)

2. **Email System:**
   - [Missing rejection reason field](https://github.com/user-attachments/assets/683a8dbd-92e3-4308-9323-6fef50cffff2)
   - (Add email server logs if available)

## **Technical Analysis**
1. **Frontend:**
   - Broken request filtering in API calls
   - Missing status update handlers

2. **Backend:**
   - Email service not triggering on request events
   - Possible database query issues in request filtering

3. **System:**
   - SMTP service may be misconfigured
   - Webhook failures for status updates
  
----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #41 - Challenge System Functionality Missing

**Environment:**
- OS: macOS
- Browser: Chrome v120
- Device: Desktop
- User State: Authenticated user

## **Steps to Reproduce**
1. Log in with valid credentials
2. Navigate to "Challenges" section
3. Attempt to participate in:
   - Available quiz (note question repetition)
   - Non-existent challenges/competitions
4. Complete quiz and observe reward system

## **Expected vs Actual**
| Expected Behavior | Actual Behavior |
|-------------------|-----------------|
| Diverse challenges/competitions available | Only one quiz exists |
| Unique quiz questions per attempt | Same 3 questions repeat |
| Badges awarded upon completion | No reward system implemented |
| Progress tracking visible | No challenge progress tracker |

**Severity:** Major (missing promised features)
**Priority:** Medium (affects engagement but not core functionality)

## **Evidence**
- [Limited quiz interface](https://github.com/user-attachments/assets/9934f97e-4990-4334-b04c-6ccb8f1663d4)
- [Missing badge/achievement system](https://github.com/user-attachments/assets/cb6da594-41c2-4ad7-bb32-26d8caf4d2c4)

## **Technical Analysis**
1. **Frontend Issues:**
   - Static quiz data (no question rotation)
   - Missing challenge components UI

2. **Backend Issues:**
   - No challenge database/API endpoints
   - Badge reward system not implemented

3. **System Design:**
   - Gamification features incomplete
   - No progress tracking service

**Reproduction Rate:** 100% (systemic feature absence)

## **Recommendations**
1. Implement question randomization logic
2. Build challenge creation framework
3. Develop badge award system
4. Add user progress tracking

----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #60 - Pending Approval Status Functionality Failure

**Environment:**
- OS: macOS
- Browser: Chrome v120
- Device: Desktop
- User Type: Standard User

## **Steps to Reproduce**
1. Navigate to Schedule Pickup page
2. Fill all required fields with valid information
3. Click "Submit Request" button
4. Observe status behavior post-submission

## **Expected vs Actual**
| Expected Behavior | Actual Behavior |
|-------------------|-----------------|
| System displays functional "Pending Admin Approval" status | Status appears but is non-functional |
| Admin notification trigger works correctly | Admin notification functions properly |
| Status updates reflect in database | Status remains static despite UI display |

**Severity:** High (breaks approval workflow)
**Priority:** High (blocks pickup scheduling process)

## **Evidence**
- [Non-functional status display](https://github.com/user-attachments/assets/61574ac5-d9b0-4e95-8c66-075fc13ed857)
- [Functional admin notification](https://github.com/user-attachments/assets/7abee0e5-a789-4124-aa4a-7b5a99f09951)

## **Technical Analysis**
1. **Frontend Issues:**
   - Status UI component not bound to actual state
   - Missing API polling for status updates

2. **Backend Issues:**
   - Possible broken PATCH/PUT endpoint for status updates
   - Database trigger not firing for status changes

3. **Workflow Issues:**
   - State machine incomplete for approval process
   - Event-driven architecture failure point

**Reproduction Rate:** 100% (consistent failure)

## **Root Cause Hypothesis**
1. Frontend shows hardcoded status instead of querying backend
2. Missing webhook subscription for status update events
3. Orphaned database transaction for status changes

## **Debugging Checklist**
- [ ] Verify status API endpoint response
- [ ] Check browser network tab for status updates
- [ ] Audit admin notification service logs
- [ ] Validate database triggers

----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #40 - Follow/Unfollow Functionality Verification

**Environment:**
- OS: macOS
- Browser: Chrome v120
- Device: Desktop

## **Steps to Reproduce**
1. Log in with valid credentials
2. Navigate to user profile page
3. Locate follow/unfollow button
4. Attempt to follow/unfollow another user

## **Expected vs Actual**
| Expected Behavior | Actual Behavior |
|-------------------|-----------------|
| Functional follow/unfollow buttons available | Buttons exist but are non-functional |
| Status updates when action performed | No state change occurs |
| Database records follow actions | No records created in database |

**Severity:** Medium (impairs social features)
**Priority:** Medium (affects user engagement)

## **Evidence**
- [Non-responsive follow button](https://github.com/user-attachments/assets/d43012eb-9e37-4d1a-bd9d-2bfb401e8ae4)
- [Unfollow button state unchanged](https://github.com/user-attachments/assets/b0e1321c-b846-402d-a59d-577abdfa10d8)

## **Technical Analysis**
1. **Frontend Issues:**
   - Click handlers missing/unbound
   - State management not updating UI

2. **Backend Issues:**
   - API endpoints may not be properly connected
   - Database operations failing silently

3. **Network Issues:**
   - Possible CORS restrictions
   - Authentication token not passed

**Debugging Checklist:**
- [ ] Verify click event bindings
- [ ] Check network tab for API calls
- [ ] Test API endpoints directly
- [ ] Validate database permissions

----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #29 - Missing Password Validation

**Environment:**
- OS: macOS
- Browser: Chrome v120
- Device: Desktop
- Security Level: Critical Vulnerability

## **Steps to Reproduce**
1. Navigate to login page
2. Enter valid username with incorrect password
3. Click "Login" button

## **Expected vs Actual**
| Expected Behavior | Actual Behavior |
|-------------------|-----------------|
| Error message displays for invalid credentials | System accepts wrong password |
| User remains on login page | Grants full dashboard access |
| Failed login attempt logged | No security logging occurs |

**Severity:** Critical (security breach)
**Priority:** Highest (immediate fix required)

## **Evidence**
- [Successful login with wrong password](https://github.com/user-attachments/assets/4620b063-d190-4486-94d2-e9c4c769d6a9)
- [Dashboard access with invalid credentials](https://github.com/user-attachments/assets/802e81f4-b000-4da8-a450-c2ce41b25204)

## **Technical Analysis**
1. **Authentication Flow:**
   - Password validation completely bypassed
   - Session created without credential verification

2. **Security Implications:**
   - Allows unauthorized access to all user data
   - Violates basic security principles

3. **Root Causes:**
   - Missing server-side password validation
   - Broken authentication middleware
   - Possible test mode left enabled

## **Immediate Actions Required**
1. Disable login functionality until fixed
2. Audit all user sessions
3. Force password resets for all accounts

## **Debugging Checklist**
- [ ] Verify authentication API response
- [ ] Check server logs for validation attempts
- [ ] Test with authentication middleware disabled
- [ ] Review recent authentication code changes

----------------------------------------------------------------------------------------------------------------------------------------
# Defect Report: #27 - Password Verification Error Causes System Crash

**Environment:**
- OS: macOS
- Browser: Chrome v120
- Device: Desktop
- Security Impact: High

## **Steps to Reproduce**
1. Navigate to login page
2. Enter valid username with incorrect password
3. Click "Login" button
4. Observe system response

## **Expected vs Actual**
| Expected Behavior | Actual Behavior |
|-------------------|-----------------|
| Clear error message displays | Complete system crash occurs |
| User remains on login page | White screen/application failure |
| Graceful error handling | Uncaught exception in console |

**Severity:** Critical (system stability + security)
**Priority:** Highest (requires immediate attention)

## **Evidence**
1. Crash Sequence:
   - [Initial error state](https://github.com/user-attachments/assets/a604dd38-272c-4031-bc7c-85aac43af914)
   - [System failure progression](https://github.com/user-attachments/assets/a6bc1ad1-c6be-4e7c-8554-ae7445db0127)
   - [Final crash state](https://github.com/user-attachments/assets/53fb6e93-2461-4d97-a5db-a5dca32cd31b)

## **Technical Analysis**
1. **Frontend Issues:**
   - Unhandled promise rejection
   - Missing error boundaries
   - State management failure

2. **Backend Issues:**
   - API returning malformed error response
   - Possible 500 server error
   - Authentication service timeout

3. **Console Errors:**
   ```log
   Uncaught TypeError: Cannot read property 'message' of undefined
   at auth.js:127:15

----------------------------------------------------------------------------------------------------------------------------------------
