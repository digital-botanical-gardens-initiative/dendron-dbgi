# This is Edouard's DBGI daily open-notebook.

Today is 2024.08.19

# Writing an issue about QField Sync plugin that doesn't support segment paths for a QFieldCloud self-hosted instance

I've encountered a bug with the QField Sync plugin where it incorrectly handles the base URL for connecting to a self-hosted QFieldCloud instance, served using a custom nginx configuration. Specifically, the plugin is removing the /qfieldcloud/ segment from the URL, which leads to a 404 Not Found error when attempting to authenticate or interact with the API.

**Steps to Reproduce:**

  - Configure the QField Sync plugin with a base URL that includes the /qfieldcloud/ segment, e.g., https://emi-collection.unifr.ch/qfieldcloud/.
  - Attempt to perform an action that requires authentication or interaction with the API (e.g., logging in or syncing).
  - Observe that the plugin makes requests to URLs without the /qfieldcloud/ segment, e.g., https://emi-collection.unifr.ch/api/v1/auth/login/.

**Expected Behavior:**

The QField Sync plugin should use the full base URL provided, including all path segments, so that requests are correctly routed to the API endpoints. For example, the URL https://emi-collection.unifr.ch/qfieldcloud/api/v1/auth/login/ should be used instead of https://emi-collection.unifr.ch/api/v1/auth/login/.

**Actual Behavior:**

The plugin removes the /qfieldcloud/ path segment from the URL, resulting in incorrect requests like https://emi-collection.unifr.ch/api/v1/auth/login/, which leads to 404 Not Found errors.

**Additional Information:**

  I have tested to connect to the instance using a web browser, QField application and directly using curl and confirmed that it works with the /qfieldcloud/ path segment.
  The issue seems to be specific to how the plugin constructs URLs.

**Environment:**

  - QField Sync Plugin Version: 4.10.1
  - QGIS Version: 3.38.2
  - Operating System: Ubuntu 22.04
  - QFieldCloud URL: https://emi-collection.unifr.ch/qfieldcloud/

Thank you for your attention to this issue. Please let me know if you need any further details or if there is a workaround available.

