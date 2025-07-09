# Test Cases for CleanCity Waste Scheduler

## Authentication
| ID  | Scenario                  | Steps                                                                 | Expected Result                     |
|-----|---------------------------|-----------------------------------------------------------------------|-------------------------------------|
| TC1 | Valid user login          | 1. Enter valid email/password<br>2. Click "Sign In"                   | Redirect to dashboard               |
| TC2 | Invalid password          | 1. Enter valid email<br>2. Enter wrong password<br>3. Click "Sign In" | Show error message                  |
| TC3 | Empty credentials         | 1. Leave fields blank<br>2. Click "Sign In"                          | Show validation errors              |
| TC4 | Admin login               | 1. Enter admin credentials<br>2. Click "Sign In"                     | Show admin dashboard with admin link|

## Pickup Scheduling
| ID  | Scenario                  | Steps                                                                 | Expected Result                     |
|-----|---------------------------|-----------------------------------------------------------------------|-------------------------------------|
| TC5 | Valid pickup submission   | 1. Fill all required fields<br>2. Select future date<br>3. Submit     | Show success message                |
| TC6 | Missing required fields   | 1. Skip name field<br>2. Submit                                      | Show validation error for name      |
| TC7 | Past date selection       | 1. Fill form<br>2. Select yesterday's date<br>3. Submit              | Show date validation error          |
| TC8 | Hazardous waste selection | 1. Select "Hazardous" waste type<br>2. Submit                        | Request shows hazardous type        |

## Dashboard
| ID  | Scenario                  | Steps                                                                 | Expected Result                     |
|-----|---------------------------|-----------------------------------------------------------------------|-------------------------------------|
| TC9 | Filter by location        | 1. Go to dashboard<br>2. Filter by "Nairobi"                         | Only Nairobi requests displayed     |
| TC10| Filter by status          | 1. Go to dashboard<br>2. Filter by "Completed"                       | Only completed requests shown       |
| TC11| Pagination                | 1. View dashboard with 15+ requests<br>2. Click next page            | Next 10 requests displayed          |

## Feedback Submission
| ID  | Scenario                  | Steps                                                                 | Expected Result                     |
|-----|---------------------------|-----------------------------------------------------------------------|-------------------------------------|
| TC12| Valid feedback            | 1. Enter valid request ID<br>2. Select reason<br>3. Submit            | Show success message                |
| TC13| Invalid request ID        | 1. Enter non-existent ID<br>2. Submit                                | Show "Request not found" error      |
