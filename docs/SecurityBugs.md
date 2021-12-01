<!--
===-----------------------------------------------------------------------------------===
Copyright (c) 2021 Calinescu Mihai, Bencu Bogdan

For copying notice, see https://github.com/CMihai99/medita/blob/main/COPYING.
For licenses we use, see https://github.com/CMihai99/medita/tree/main/LICENSES.
===-----------------------------------------------------------------------------------===
-->

# Security bugs

Eureka developers take security very seriously. As such, we'd like to know when a
security bug is found so that it can be fixed and disclosed as quickly as possible.
Please report security bugs to the security team.

## Contact

As it is with any bug, the more information provided the easier it will be to
diagnose and fix. Please review the procedure outlined in [ReportingIssues.md](https://github.com/CMihai99/eureka/blob/main/docs/how-to/ReportingIssues.md)
if you are unclear about what information is helpful. Any exploit code is very
helpful and will not be released without consent from the reporter unless
it has already been made public.

Always send plain text without attachments where possible. It is much harder to have a
context-quoted discussion about a complex issue if all the details are hidden away in
attachments. Think of it like a regular patch submission: describe the problem and
impact, list reproduction steps, and follow it with a proposed fix, all in plain text.

## Disclosure and embargoed information

The security list is not a disclosure channel. For that, see Coordination below.

Once a robust fix has been developed, the release process starts.
Fixes for publicly known bugs are released immediately.

Although our preference is to release fixes for publicly undisclosed bugs as soon
as they become available, this may be postponed at the request of the reporter or
an affected party for up to 7 calendar days from the start of the release process,
with an exceptional extension to 14 calendar days if it is agreed that the
criticality of the bug requires more time. The only valid reason for deferring
the publication of a fix is to accommodate the logistics of QA and large
scale rollouts which require release coordination.

While embargoed information may be shared with trusted individuals
in order to develop a fix, such information will not be published alongside
the fix or on any other disclosure channel without the permission of the reporter.
This includes but is not limited to the original bug report and followup
discussions (if any), exploits, CVE information or the identity of the reporter.

In other words, our only interest is in getting bugs fixed. All other information
submitted to the security list and any followup discussions of the report are
treated confidentially even after the embargo has been lifted, in perpetuity.

Fixes for sensitive bugs, such as those that might lead to privilege
escalations, will take our security team some time to test the proposed
patch and will generally request at least a few days of embargo.

## CVE assignment

The security team does not normally assign CVEs, nor do we require them for reports
or fixes, as this can needlessly complicate the process and may delay the bug handling.

## Non-disclosure agreements

The security team is not a formal body and therefore
unable to enter any non-disclosure agreements.
