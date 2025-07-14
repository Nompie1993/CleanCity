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

**Console Errors:**  
```log
[Error] LiveChat: Widget initialization failed - SDK not loaded (line 142, chat-plugin.js)
[Warning] Missing chat container element (footer-chat-widget)
