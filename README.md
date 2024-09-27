# ParadoxLabs Authnetcim Integration

This module integrates [paradoxlabs/authnetcim](https://github.com/ParadoxLabs-Inc/authnetcim)
module with Breeze Frontend.

## Installation

```bash
composer require swissup/module-breeze-paradoxlabs-authnetcim
bin/magento module:enable Swissup_BreezeParadoxlabsAuthnetcim
```

## Required patches

paradoxlabs/authnetcim/view/base/web/js/view/customer/hosted/paymentinfo.js

```diff
--- paradoxlabs/authnetcim/view/base/web/js/view/customer/hosted/paymentinfo.js
+++ paradoxlabs/authnetcim/view/base/web/js/view/customer/hosted/paymentinfo.js
@@ -101,7 +101,7 @@
          * Rescroll window upon address confirmation, if needed
          */
         fixScroll: function () {
-            var topPosition = $('fieldset.payment:first').position().top;
+            var topPosition = $('fieldset.payment').first().position().top;

             if (topPosition < window.scrollY) {
                 window.scrollTo(0, topPosition);
```
