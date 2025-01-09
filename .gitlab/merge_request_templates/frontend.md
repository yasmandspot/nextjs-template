# Task Reference

- Task URL (Trello/Jira):

# Summary of Changes

<!-- List the key changes made in this MR -->

-
-
-

# Context

<!-- Explain why you chose this implementation approach and any important considerations -->

- Implementation approach:
- Technical decisions:
- Alternatives considered:

# Checklist

- [ ] Should include the label 'HP' in the MR if the card has a high-priority
- [ ] Should include an image of the requirements covered in the MR
- [ ] Should include the MR link in the requirement (or the issue description point) listed in the card
- [ ] Should the tests run successfully in the MR
- [ ] Should include the behaviour test that covers the requirements included in the MR
- [ ] Should the implementation fulfil the described requirement
- [ ] Should not include more than one requirement per MR unless the requirements are too tight and small
- [ ] Should not include more than 5 requirements in the MR
- [ ] Should use descriptive and concise names for variables and functions
- [ ] Should the implementation code be readable
- [ ] Should the implementation code be maintainable in the time
- [ ] Should use descriptive and concise error messages
- [ ] Should refactor duplicate code into reusable functions
- [ ] Should include the role label 'Frontend' in the MR
- [ ] Should include the label 'Cypress' if the MR contains updates in the Cypress tests
- [ ] Should not include frontend and Cypress updates in the same MR
- [ ] Should add the corresponding storybooks when a visual component is added or updated
- [ ] Should the test descriptions include the requirement as redacted in the Trello card
  - This will make it easier for the reviewer to determine whether the tests were included or not and review if the tests accomplish what the requirement was meant for.
- [ ] Should avoid merging business logic with any extra implementation detail
  - For example: third-party service integrations, must be kept isolated from the business logic
- [ ] Should certainly include comments for the parts of the code that refer to tricky corner cases, special conditions, third-party service issues avoided by using a specific approach, parts of the code that can’t be changed like in the third-party service issues, and similar conditions, including the reference link if proceed
- [ ] Should avoid adding new dependencies unnecessarily
- [ ] Should the code be well-designed and fitted to the surrounding architecture

## Only for bugs:

- [ ] Should update or add the related behaviour tests when an issue was discovered and the tests didn’t detect it
- [ ] Should update or add the storybooks when a visual error was discovered but not detected in the storybooks
- [ ] Should update or add the Cypress tests an error was discovered but not detected in the Cypress tests
