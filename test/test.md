# CleanCity QA Test Case Classification

## 1. Functional Test Cases
*(Verify core features work as intended)*  
**File**: `tests/functional/README.md`

### Authentication
| ID  | Scenario                | Steps                                                                 | Expected Result                     |
|-----|-------------------------|-----------------------------------------------------------------------|-------------------------------------|
| F1  | Valid user login        | 1. Enter valid credentials<br>2. Click "Sign In"                     | Redirect to dashboard               |
| F2  | Invalid password        | 1. Enter valid email + wrong password<br>2. Submit                   | Show "Invalid credentials" error    |

### Scheduling
| ID  | Scenario                | Steps                                                                 | Expected Result                     |
|-----|-------------------------|-----------------------------------------------------------------------|-------------------------------------|
| F3  | Submit pickup request   | 1. Fill all required fields<br>2. Select future date<br>3. Submit     | Success notification appears        |
| F4  | Missing location        | 1. Submit form without selecting location                            | Show "Location required" error      |

---

## 2. Non-Functional Test Cases
*(Validate performance, security, etc.)*  
**File**: `tests/non-functional/README.md`

### Performance
| ID  | Scenario                | Metric               | Threshold          | Tool          |
|-----|-------------------------|----------------------|--------------------|---------------|
| NF1 | Dashboard load time     | Page load            | < 2.0 sec          | Lighthouse    |
| NF2 | Form submission         | API response time    | < 1.5 sec          | Chrome DevTools |

### Security
| ID  | Scenario                | Steps                             | Expected Result               |
|-----|-------------------------|-----------------------------------|-------------------------------|
| NF3 | XSS prevention          | 1. Inject `<script>` in form      | Input sanitized               |
| NF4 | Session timeout         | 1. Wait 30 mins inactive          | Auto-logout occurs            |

---

## 3. Accessibility Test Cases
*(WCAG 2.1 AA compliance)*  
**File**: `tests/accessibility/README.md`

### Visual & Navigation
| ID  | WCAG Criteria           | Test Method                      | Expected Result       |
|-----|-------------------------|----------------------------------|-----------------------|
| A1  | 1.1.1 (Alt Text)        | Scan images with axe DevTools    | All images have alt text |
| A2  | 2.1.1 (Keyboard)        | Tab through entire application   | All elements reachable |

### Color & Contrast
| ID  | WCAG Criteria           | Test Method                      | Expected Result       |
|-----|-------------------------|----------------------------------|-----------------------|
| A3  | 1.4.3 (Contrast)        | Check color ratios               | Text ≥ 4.5:1 ratio   |

---

## 4. Cross-Browser Tests
*(Consistency across browsers)*  
**File**: `tests/cross-browser/README.md`

### Browser Matrix
| ID  | Browser       | OS          | Key Tests                     |
|-----|---------------|-------------|-------------------------------|
| CB1 | Chrome 125    | Windows 11  | All functional test cases     |
| CB2 | Safari 17     | macOS       | Critical paths only          |

### Specific Checks
| ID  | Scenario                | Browser(s)           | Expected Result               |
|-----|-------------------------|----------------------|-------------------------------|
| CB3 | Date picker rendering   | Firefox 120+         | Consistent UI/functionality   |
| CB4 | CSS Flexbox support     | Edge 110+            | Proper layout alignment       |

---

## Implementation Structure
