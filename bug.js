This error occurs when using Expo's `Image` component with a remote image URL that returns a 404 or other non-200 status code.  The console may not show an explicit error, which makes debugging difficult.  The image simply won't render. This is often missed as the standard error handling for image loading does not seem to trigger.