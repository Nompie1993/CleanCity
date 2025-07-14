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

**Console Logs:**  
```log
[Form Submission] POST /api/pickups - 200 OK
Request payload: {"pickupDate":"2024-02-30",...}
