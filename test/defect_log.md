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