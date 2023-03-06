# easy-generator-assignment

## Set up
- Clone repository
- Run ```npm install``` to get relevant node modules

## Run Tests
- Tests can be run Headless using ```npm run cypress:run -- --spec cypress\e2e\tests\home.cy.ts```
- Alternatively tests can be run headed using ```npm run cypress:run -- --headed --spec cypress\e2e\tests\home.cy.ts```


### Notes:

The following 3rd party plugins have been used in this repo:
- ```cypress-real-events``` to handle mouse hover actions
- ```prettier``` for code formatting 


Known Issues:

The following are things to keep in mind when executing the script
- The URL for clicking a new window seems to have broken since 05/03/2023. This causes the test to fail. The functionality of the script works however and this can be checked by overriding the url passed  in the test with a different one. Change ```newWindowUrl``` value.
- When running in headed mode do keep in mind that moving the mouse during test execution will result in the mouse hover test failing if the test window is the active window. 


Video:
https://user-images.githubusercontent.com/57134240/223018076-1b671020-5bfd-479c-8d81-b7331a85342c.mp4

