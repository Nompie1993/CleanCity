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

