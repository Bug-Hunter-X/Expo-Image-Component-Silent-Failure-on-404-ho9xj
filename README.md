# Expo Image Component Silent Failure on 404

This repository demonstrates a subtle bug in Expo's `Image` component where loading failures (e.g., 404 errors) from remote URLs are not explicitly reported. The image simply won't render without any console errors or warnings, making debugging challenging.

The `bug.js` file shows the problematic implementation.  The solution, in `bugSolution.js`, uses a custom error handling mechanism to address this.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run the app. Observe that the image in `bug.js` does not load.
4. Compare with the behavior in `bugSolution.js` which addresses this issue.

## Solution

The solution uses the `onError` prop of the `Image` component to handle loading errors gracefully.  It logs an error message to the console and potentially displays a placeholder image if needed.