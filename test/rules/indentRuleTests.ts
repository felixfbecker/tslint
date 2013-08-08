/// <reference path='../references.ts' />

describe("<indent>", () => {
    var fileName = "rules/indent_tabs.test.ts";
    var failureString = Lint.Rules.IndentRule.FAILURE_STRING + "expected 4, got ";
    var failureString8 = Lint.Rules.IndentRule.FAILURE_STRING + "expected 8, got ";
    var actualFailures;

    before(() => {
        actualFailures = Lint.Test.applyRuleOnFile(fileName, "indent", 4);
    });

    it("enforces module indentation", () => {
        var expectedFailure = Lint.Test.createFailure(fileName, [58, 4], [58, 27], failureString + "6");
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
    });

    it("enforces function indentation", () => {
        var expectedFailure = Lint.Test.createFailure(fileName, [62, 4], [62, 19], failureString + "9");
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
    });

    it("enforces class variable indentation", () => {
        var expectedFailure = Lint.Test.createFailure(fileName, [66, 3], [66, 10], failureString + "2");
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
    });

    it("enforces class method indentation", () => {
        var expectedFailure = Lint.Test.createFailure(fileName, [68, 3], [68, 15], failureString + "2");
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
    });

    it("enforces object literal indentation", () => {
        var expectedFailure1 = Lint.Test.createFailure(fileName, [74, 3], [74, 7], failureString + "5");
        var expectedFailure2 = Lint.Test.createFailure(fileName, [75, 4], [75, 8], failureString + "6");
        var expectedFailure3 = Lint.Test.createFailure(fileName, [76, 5], [76, 9], failureString + "7");

        Lint.Test.assertContainsFailure(actualFailures, expectedFailure1);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure2);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure3);
    });

    it("enforces enum indentation", () => {
        var expectedFailure1 = Lint.Test.createFailure(fileName, [80, 4], [80, 10], failureString + "6");
        var expectedFailure2 = Lint.Test.createFailure(fileName, [81, 3], [81, 9], failureString + "5");

        Lint.Test.assertContainsFailure(actualFailures, expectedFailure1);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure2);
    });

    it("enforces switch indentation", () => {
        var expectedFailure1 = Lint.Test.createFailure(fileName, [85, 3], [85, 7], failureString + "5");
        var expectedFailure2 = Lint.Test.createFailure(fileName, [86, 4], [86, 22], failureString8 + "6");
        var expectedFailure3 = Lint.Test.createFailure(fileName, [88, 3], [88, 10], failureString + "2");
        var expectedFailure4 = Lint.Test.createFailure(fileName, [89, 4], [89, 28], failureString8 + "6");

        Lint.Test.assertContainsFailure(actualFailures, expectedFailure1);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure2);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure3);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure4);
    });

    it("enforces block indentation", () => {
        var expectedFailure1 = Lint.Test.createFailure(fileName, [94, 3], [94, 9], failureString + "2");
        var expectedFailure2 = Lint.Test.createFailure(fileName, [98, 4], [98, 10], failureString + "6");
        var expectedFailure3 = Lint.Test.createFailure(fileName, [102, 3], [102, 9], failureString + "5");
        var expectedFailure4 = Lint.Test.createFailure(fileName, [106, 5], [106, 11], failureString + "7");

        Lint.Test.assertContainsFailure(actualFailures, expectedFailure1);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure2);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure3);
        Lint.Test.assertContainsFailure(actualFailures, expectedFailure4);
    });
});