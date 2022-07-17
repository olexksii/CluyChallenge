# Cluey Coding Challenge

## Objective

**Objective** is to build this login page with basic functionality

### Desktop

![desktop](./example.png)

### Mobile

![mobile](./example-mobile.png)

## Requirements

1. Allow a user to enter a username and password then click "Login"
2. Store that username in redux state
3. Redirect the user to the Home Screen
4. Should validate that the fields are not empty before proceeding (password does **NOT** need to be validated)
5. At home screen the simple "logout" button can be clicked to clear the auth state and return the user to the login screen
6. Write a simple automated test to validate logging (see: LoginView.test.ts)
7. NPM script `validate` must pass
8. Use TailwindCSS for styling

## Scripts

`npm run dev` to start dev server

`npm run test` to run test suite

`npm run lint` to run eslint validation

## Notes

- All images and icons are in the src/assets folder
- Mobile breakpoint is the tailwindcss `md:` breakpoint
- Sizes do not need to _exactly_ match image provided, but as close as possible is appreciated
