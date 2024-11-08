import { FirebaseError } from "firebase/app";
import toast from "react-hot-toast";

// https://firebase.google.com/docs/auth/admin/errors

export const generateFirebaseAuthErrorMessage = (error) => {
  switch (error?.code) {
    case "auth/invalid-email":
      toast.error("Invalid email address. Please enter a valid email.");
      break;
    case "auth/user-not-found":
      toast.error("User not found. Please check the email address.");
      break;
    case "auth/wrong-password":
      toast.error("Incorrect password. Please try again.");
      break;
    case "auth/email-already-in-use":
      toast.error("Email already in use. Please try another email.");
      break;
    case "auth/weak-password":
      toast.error("Password should be at least 6 characters.");
      break;
    case "auth/operation-not-allowed":
      toast.error("Operation not allowed. Please try again later.");
      break;
    case "auth/invalid-verification-code":
      toast.error("Invalid verification code. Please try again.");
      break;
    case "auth/invalid-verification-id":
      toast.error("Invalid verification ID. Please try again.");
      break;
    case "auth/code-expired":
      toast.error("Code expired. Please try again.");
      break;
    case "auth/invalid-action-code":
      toast.error("Invalid action code. Please try again.");
      break;
    case "auth/user-disabled":
      toast.error("User disabled. Please contact support.");
      break;
    case "auth/invalid-credential":
      toast.error("Invalid credential. Please try again.");
      break;
    case "auth/invalid-continue-uri":
      toast.error("Invalid continue URL. Please try again.");
      break;
    case "auth/unauthorized-continue-uri":
      toast.error("Unauthorized continue URL. Please try again.");
      break;
    case "auth/missing-continue-uri":
      toast.error("Missing continue URL. Please try again.");
      break;
    case "auth/missing-verification-code":
      toast.error("Missing verification code. Please try again.");
      break;
    case "auth/missing-verification-id":
      toast.error("Missing verification ID. Please try again.");
      break;
    case "auth/captcha-check-failed":
      toast.error("Captcha check failed. Please try again.");
      break;
    case "auth/invalid-phone-number":
      toast.error("Invalid phone number. Please try again.");
      break;
    case "auth/missing-phone-number":
      toast.error("Missing phone number. Please try again.");
      break;
    case "auth/quota-exceeded":
      toast.error("Quota exceeded. Please try again.");
      break;
    case "auth/missing-app-credential":
      toast.error("Missing app credential. Please try again.");
      break;
    case "auth/invalid-app-credential":
      toast.error("Invalid app credential. Please try again.");
      break;
    case "auth/session-expired":
      toast.error("Session expired. Please try again.");
      break;
    case "auth/missing-or-invalid-nonce":
      toast.error("Missing or invalid nonce. Please try again.");
      break;
    case "auth/missing-client-identifier":
      toast.error("Missing client identifier. Please try again.");
      break;
    case "auth/key-retrieval-failed":
      toast.error("Key retrieval failed. Please try again.");
      break;
    case "auth/invalid-oauth-provider":
      toast.error("Invalid OAuth provider. Please try again.");
      break;
    case "auth/invalid-oauth-client-id":
      toast.error("Invalid OAuth client ID. Please try again.");
      break;
    case "auth/invalid-cert-hash":
      toast.error("Invalid cert hash. Please try again.");
      break;
    case "auth/invalid-user-token":
      toast.error("Invalid user token. Please try again.");
      break;
    case "auth/invalid-custom-token":
      toast.error("Invalid custom token. Please try again.");
      break;
    case "auth/app-deleted":
      toast.error("App deleted. Please try again.");
      break;
    case "auth/app-not-authorized":
      toast.error("App not authorized. Please try again.");
      break;
    case "auth/argument-error":
      toast.error("Argument error. Please try again.");
      break;
    case "auth/invalid-api-key":
      toast.error("Invalid API key. Please try again.");
      break;
    case "auth/network-request-failed":
      toast.error("Network request failed. Please try again.");
      break;
    case "auth/requires-recent-login":
      toast.error("Requires recent login. Please try again.");
      break;
    case "auth/too-many-requests":
      toast.error("Too many requests. Please try again.");
      break;
    case "auth/unauthorized-domain":
      toast.error("Unauthorized domain. Please try again.");
      break;
    case "auth/user-token-expired":
      toast.error("User token expired. Please try again.");
      break;
    case "auth/web-storage-unsupported":
      toast.error("Web storage unsupported. Please try again.");
      break;
    case "auth/account-exists-with-different-credential":
      toast.error(
        "Account exists with different credential. Please try again."
      );
      break;
    case "auth/auth-domain-config-required":
      toast.error("Auth domain config required. Please try again.");
      break;
    case "auth/cancelled-popup-request":
      toast.error("Cancelled popup request. Please try again.");
      break;
    case "auth/credential-already-in-use":
      toast.error("Credential already in use. Please try again.");
      break;
    case "auth/custom-token-mismatch":
      toast.error("Custom token mismatch. Please try again.");
      break;
    case "auth/provider-already-linked":
      toast.error("Provider already linked. Please try again.");
      break;
    case "auth/timeout":
      toast.error("Timeout. Please try again.");
      break;
    case "auth/missing-android-pkg-name":
      toast.error("Missing Android package name. Please try again.");
      break;
    case "auth/missing-ios-bundle-id":
      toast.error("Missing iOS bundle ID. Please try again.");
      break;
    case "auth/invalid-dynamic-link-domain":
      toast.error("Invalid dynamic link domain. Please try again.");
      break;
    case "auth/invalid-persistence-type":
      toast.error("Invalid persistence type. Please try again.");
      break;
    case "auth/unsupported-persistence-type":
      toast.error("Unsupported persistence type. Please try again.");
      break;
    case "auth/invalid-oauth-client-secret":
      toast.error("Invalid OAuth client secret. Please try again.");
      break;
    case "auth/invalid-argument":
      toast.error("Invalid argument. Please try again.");
      break;
    case "auth/invalid-creation-time":
      toast.error("Invalid creation time. Please try again.");
      break;
    case "auth/invalid-disabled-field":
      toast.error("Invalid disabled field. Please try again.");
      break;
    case "auth/invalid-display-name":
      toast.error("Invalid display name. Please try again.");
      break;
    case "auth/invalid-email-verified":
      toast.error("Invalid email verified. Please try again.");
      break;
    case "auth/invalid-hash-algorithm":
      toast.error("Invalid hash algorithm. Please try again.");
      break;
    case "auth/invalid-hash-block-size":
      toast.error("Invalid hash block size. Please try again.");
      break;
    case "auth/invalid-hash-derived-key-length":
      toast.error("Invalid hash derived key length. Please try again.");
      break;
    case "auth/invalid-hash-key":
      toast.error("Invalid hash key. Please try again.");
      break;
    case "auth/invalid-hash-memory-cost":
      toast.error("Invalid hash memory cost. Please try again.");
      break;
    case "auth/invalid-hash-parallelization":
      toast.error("Invalid hash parallelization. Please try again.");
      break;
    case "auth/invalid-hash-rounds":
      toast.error("Invalid hash rounds. Please try again.");
      break;
    case "auth/invalid-hash-salt-separator":
      toast.error("Invalid hash salt separator. Please try again.");
      break;
    case "auth/invalid-id-token":
      toast.error("Invalid ID token. Please try again.");
      break;
    case "auth/invalid-last-sign-in-time":
      toast.error("Invalid last sign in time. Please try again.");
      break;
    case "auth/invalid-page-token":
      toast.error("Invalid page token. Please try again.");
      break;
    case "auth/invalid-password":
      toast.error("Invalid password. Please try again.");
      break;
    case "auth/invalid-password-hash":
      toast.error("Invalid password hash. Please try again.");
      break;
    case "auth/invalid-password-salt":
      toast.error("Invalid password salt. Please try again.");
      break;
    case "auth/invalid-photo-url":
      toast.error("Invalid photo URL. Please try again.");
      break;
    case "auth/invalid-provider-id":
      toast.error("Invalid provider ID. Please try again.");
      break;
    case "auth/invalid-session-cookie-duration":
      toast.error("Invalid session cookie duration. Please try again.");
      break;
    case "auth/invalid-uid":
      toast.error("Invalid UID. Please try again.");
      break;
    case "auth/invalid-user-import":
      toast.error("Invalid user import. Please try again.");
      break;
    case "auth/invalid-provider-data":
      toast.error("Invalid provider data. Please try again.");
      break;
    case "auth/maximum-user-count-exceeded":
      toast.error("Maximum user count exceeded. Please try again.");
      break;
    case "auth/missing-hash-algorithm":
      toast.error("Missing hash algorithm. Please try again.");
      break;
    case "auth/missing-uid":
      toast.error("Missing UID. Please try again.");
      break;
    case "auth/reserved-claims":
      toast.error("Reserved claims. Please try again.");
      break;
    case "auth/session-cookie-revoked":
      toast.error("Session cookie revoked. Please try again.");
      break;
    case "auth/uid-already-exists":
      toast.error("UID already exists. Please try again.");
      break;
    case "auth/email-already-exists":
      toast.error("Email already exists. Please try again.");
      break;
    case "auth/phone-number-already-exists":
      toast.error("Phone number already exists. Please try again.");
      break;
    case "auth/project-not-found":
      toast.error("Project not found. Please try again.");
      break;
    case "auth/insufficient-permission":
      toast.error("Insufficient permission. Please try again.");
      break;
    case "auth/internal-error":
      toast.error("Internal error. Please try again.");
      break;

    default:
      toast.error("Oops! Something went wrong. Please try again later.");
  }
};
