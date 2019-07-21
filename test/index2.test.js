import {WrittenNumber} from "../lib";
import En from '../lib/i18n/en';

describe("written-number2", () => {
    describe("Converter.convert(n, { lang: 'en', ... })", function () {
        const Converter = new WrittenNumber({language: En});

        it("negative numbers return \"\"", function () {
            Converter.convert(-3).should.equal("");
            Converter.convert(-5).should.equal("");
        });

        it("doesn't blow up weirdly with invalid input", function () {
            Converter.convert("asdfasdfasdf").should.equal("");
            Converter.convert("0.as").should.equal("");
            Converter.convert("0.123").should.equal("zero");
            Converter.convert("0.8").should.equal("one");
            Converter.convert("2.8").should.equal("three");
            Converter.convert("asdf.8").should.equal("");
            Converter.convert("120391938123..").should.equal("");
            Converter.convert("1000000000.123").should.equal("one billion");
            Converter.convert("1/3").should.equal("");
            Converter.convert(1 / 3).should.equal("zero");
            Converter.convert("1/2").should.equal("");
            Converter.convert("1.123/2").should.equal("");
        });

        it("correctly converts numbers < 10", function () {
            Converter.convert(1000000000).should.equal("one billion");
            Converter.convert(3).should.equal("three");
            Converter.convert(8).should.equal("eight");
        });

        it("correctly converts numbers < 20", function () {
            Converter.convert(13).should.equal("thirteen");
            Converter.convert(19).should.equal("nineteen");
        });

        it("correctly converts numbers < 100", function () {
            Converter.convert(20).should.equal("twenty");
            Converter.convert(25).should.equal("twenty-five");
            Converter.convert(88).should.equal("eighty-eight");
            Converter.convert(73).should.equal("seventy-three");
        });

        it("correctly converts numbers < 1000", function () {
            Converter.convert(200).should.equal("two hundred");
            Converter.convert(242).should.equal("two hundred and forty-two");
            Converter.convert(1234).should.equal(
                "one thousand two hundred and thirty-four"
            );
            Converter.convert(4323).should.equal(
                "four thousand three hundred and twenty-three"
            );
        });

        it("correctly converts numbers > 1000", function () {
            Converter.convert(4323000).should.equal(
                "four million three hundred twenty-three thousand"
            );
            Converter.convert(4323055).should.equal(
                "four million three hundred twenty-three thousand and fifty-five"
            );
            Converter.convert(1570025).should.equal(
                "one million five hundred seventy thousand and twenty-five"
            );
        });

        it("correctly converts numbers > 1 000 000 000", function () {
            Converter.convert(1000000000).should.equal("one billion");
            Converter.convert(2580000000).should.equal(
                "two billion five hundred eighty million"
            );
            Converter.convert(1000000000000).should.equal("one trillion");
            Converter.convert(3627000000000).should.equal(
                "three trillion six hundred twenty-seven billion"
            );
        });
    });
});