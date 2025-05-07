## Challenge 1: Automation Testing (Test Strategy)

### Task 1 Test Strategy

My overall approach to test new Dealls Mentoring feature is to ensure its high quality, reliability, usability and security. We will employ a risk-based strategy to guide our testing efforts. This means prioritizing and dedicating more resources to areas of the feature that are most critical to its success.

Adopting Shift-Left Testing is important for the feature's success, integrating the QA team from the very start of development. This early involvement will help identify and address any potential bugs much sooner, which reduces the effort and cost associated with fixing them, and also improves the overall quality of the feature from the start. This will also help ensure that the feature meets the required standards and is delivered on time. This proactive approach also enables planning for a combination of manual and automated testing from an early stage, ensuring the feature is thoroughly tested throughout its entire development lifecycle.

The testing will focus on validating complete workflows from the perspective of both Mentor and Mentee roles. All testing activities will progress through the defined test environments , ensuring that the feature is thoroughly tested in a controlled environment before it is released to production.

#### Types of Testing: 
- Functional testing 
- UI/UX Testing
- Performance Testing
- Compatibility Testing
- Integration Testing
- Regression Testing
- Security Testing

#### Key areas of focus:
- Mentor Onboarding and Profile Management
- Mentee Search and Matching
- Booking and Scheduling Flow
- Feedback and Rating System
- Data Privacy and PII Protection


#### Test Environment:
- Local: For initial testing and development
- Staging: For testing before deployment
- Production: For final deployment and monitoring

#### Assumption:
- The application is a web-based application   
- Distinct user role (Mentor/Mentee) 
- Stable base platform
- Staging environment suitable for testing


### Task 2 High-Level Test Scenarios

#### Registration and Login
1. Register as user (Mentor/Mentee)
2. Login as user (Mentor/Mentee)
3. Failed Login (Incorrect Password/Forgot Password)
4. Failed Login (Non-existent User)
5. Role -based Access Control (Mentor/Mentee)

#### Mentor Profile Management
6. Create Mentor Profile
7. Edit Mentor Profile
8. Delete Mentor Profile
9. Mentor Profile Validation (Incomplete/Invalid Data)
10. Mentor Sets Availability (Calendar View)
11. Mentor Updates Availability (Calendar View)

#### Mentee Search and Filtering
12. Search for Mentor with specific criteria
13. Filter Mentors by location, expertise, etc.
14. Sort Mentors by rating, experience, etc.
15. Search with Multiple Filters
16. Search with No Matching Mentors

#### Booking and Scheduling
17. Mentee Request Booking
18. Mentor Accepts Booking
19. Mentor Declines Booking
20. Booking Cancellation (Mentor/Mentee)
21. Booking Rescheduling (Mentor/Mentee)
22. Mentee attempts to double-book an overlapping time slot.
23. Booking Status (Pending, Confirmed, Cancelled)
24. Booking Details (Mentor/Mentee)

#### Feedback
25. Mentee Provides Feedback
26. Mentor Provides Feedback
27. Feedback Rating (1-5)
28. Feedback Comment
29. Feedback Visibility (Public/Private)
30. Feedback Sorting (Newest/Oldest)
31. Feedback Filtering (Mentor/Mentee)

#### Data Privacy and Consent
32. Verify appropriate handling and visibility controls for PII in Mentor/Mentee profiles and session data.
33. Verify user consent is clearly obtained for data collection and processing related to the mentoring feature.
34. Verify data collected adheres to data minimization principles for the mentoring feature.





