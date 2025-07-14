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

**Tester:** Jane Doe  
**Date:** 2023-11-15