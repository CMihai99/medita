<!--
===-----------------------------------------------------------------------------------===
Copyright (c) 2021 Calinescu Mihai, Bencu Bogdan

For copying notice, see https://github.com/CMihai99/medita/blob/main/COPYING.
For licenses we use, see https://github.com/CMihai99/medita/tree/main/LICENSES.
===-----------------------------------------------------------------------------------===
-->

# The Medita documentation

The documentation for Medita is divided into the following sections:

-   [How-To Guides](#how-to-guides), which help you complete
    specific tasks in a step-by-step fashion.

-   [Recommended Practices](#recommended-practices), which suggest
    guidelines for writing code and documentation.

<!-- -   [Reference Guides](#reference-guides), which contain a thorough
    technical reference for complex topics. They assume some overall
    understanding of surrounding subsystems. -->

-   [Uncategorized](#uncategorized) is for documentation which
    does not fit neatly into any of the above categories.

## How-To Guides

<!-- -   [DependencyAnalysis.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/DependencyAnalysis.md)
    describes different kinds of dependencies across files in the
    same module, important for understanding incremental builds. -->

<!-- -   [GettingStarted.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/GettingStarted.md)
    describes how to set up a working development environment
    for Windows, and get an edit-build-test-debug loop going. -->

<!-- -   [ReportingIssues.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/ReportingIssues.md)
    describes how to report issues to Medita developers. -->

<!-- -   Building:

    -   [Changelog.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/building/Changelog.md)
        is a list of all the releases that Medita has gone through.
        Each stable Medita release comes out every 4-6 months.

    -   [macOS.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/building/macOS.md)
        is an overview on how to build Medita for macOS.

    -   [Refactoring.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/building/Refactoring.md)
        describes how refactorings work and how they can be tested.

    -   [Windows.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/building/Windows.md)
        is an overview on how to build Medita for Windows.

    -   [WindowsCrossBuild.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/building/WindowsCrossCBuild.md)
        describes how to cross build Medita for Windows
        on a non-Windows host OS. -->

-   Maintaining:

    <!-- -   [ErrorHandling.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/maintaining/ErrorHandling.md)
    describes how to handle errors and spelling mistakes throughout Medita. -->

    <!-- -   [ManagementStyle.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/maintaining/ManagementStyle.md)
        describes the preferred (or made up, depending on who you ask)
        management style. It's mainly written to avoid answering the same
        (or similar) questions over and over again. -->

    -   [ModifyingPatches.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/maintaining/ModifyingPatches.md)
        describes how to to slightly modify patches you receive in order to
        merge them, because the code is not exactly the same in your tree
        and the submitters'.

    -   [PullRequests.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/maintaining/PullRequests.md)
    describes how to submit your pull requests. This is
    the place to start if you're new to the project!

    -   [RebasingAndMerging.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/maintaining/RebasingAndMerging.md)
        describes how to rebase (changing the history of a series of commits
        within a repository) and merge branches for easier maintaining.

    -   [SecurityBugs.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/maintaining/SecurityBugs.md)
    describes how to report security bugs so that it
    can be fixed and disclosed as quickly as possible.

    <!-- -   [SubmittingChecklist.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/maintaining/SubmittingChecklist.md)
        describes basic things that developers should do if they want
        to see their patch submissions accepted quicklier. -->

    -   [SubmittingPatches.md](https://github.com/CMihai99/medita/blob/main/docs/how-to/maintaining/SubmittingPatches.md)
        contains a large number of suggestions in a relatively terse format
        about getting your code submitted. It also assumes that you're using
        git to prepare your patches.

## Recommended Practices

-   [CommitMessageTemplate.md](https://github.com/CMihai99/medita/blob/main/docs/practices/CommitMessageTemplate.md)
    specifies the perfect commit description you will want to use to help
    maintainers understand the patch you fixed or feature you added.

<!-- -   [OptimizationTips.md](https://github.com/CMihai99/medita/blob/main/docs/practices/OptimizationTips.md)
    provides guidelines for writing high-performance code. -->

-   [PullRequestGuidelines.md](https://github.com/CMihai99/medita/blob/main/docs/practices/PullRequestGuidelines.md)
    specifies how to describe your pull request, requesting review,
    and incorporating feedback to make it clear and unambiguous.

-   [PullRequestTemplate.md](https://github.com/CMihai99/medita/blob/main/docs/practices/PullRequestTemplate.md)
    contains a pull request template for easier contributions.

<!-- -   [TextFormatting.md](https://github.com/CMihai99/medita/blob/main/docs/practices/TextFormatting.md)
    describes how to format text, ranging from documentation,
    all the way to functioning code. -->

<!-- ## Reference Guides

-   [Evolution.md](https://github.com/CMihai99/medita/blob/main/docs/references/Evolution.md)
    specifies what changes can be made without breaking compatibility.

-   [Lexicon.md](https://github.com/CMihai99/medita/blob/main/docs/references/Lexicon.md)
    are canonical references for terminology used throughout the project.

-   [LicenseRules.md](https://github.com/CMihai99/medita/blob/main/docs/references/LicenseRules.md)
    provides a description of how each source file should be annotated
    to make its license clear and unambiguous.

-   [StableRules.md](https://github.com/CMihai99/medita/blob/main/docs/references/StableRules.md)
    specifies rules on what kind of patches are accepted,
    and which ones are not. -->

## Uncategorized

<!-- -   [CommonQuestions.md](https://github.com/CMihai99/medita/blob/main/docs/CommonQuestions.md)
    answers "How do I do X?" for a variety of common tasks. -->

-   Design:

    -   [Color.md](https://github.com/CMihai99/medita/blob/main/docs/design/Color.md)
        specifies our color schemes.

    -   [Icon.md](https://github.com/CMihai99/medita/blob/main/docs/design/Icon.md)
        specifies our branding.

    -   [Logo.md](https://github.com/CMihai99/medita/blob/main/docsdesign/Logo.md)
        specifies our branding.

    -   [Typography.md](https://github.com/CMihai99/medita/blob/main/docs/design/Typography.md)
        specifies our typography selections.
