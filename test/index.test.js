import should from 'should';
import { WrittenNumber } from '../lib';
import {
  Ar,
  Az,
  En,
  EnIndian,
  Es,
  Fr,
  Id,
  It,
  Pt,
  PtPt,
  Ru,
  Tr,
  Uk,
} from '../lib/i18n';

describe('written-number', () => {
  describe('writtenNumber initialization and setOptions', () => {
    it("throw an error if user didn't pass a language in constructor", () => {
      (() => new WrittenNumber()).should.throw('WrittenNumber: you need to pass your language object');
    });

    it("throw an error if user didn't pass new options for setOptions", () => {
      const Converter = new WrittenNumber({ language: En });
      (() => Converter.setOptions()).should.throw('WrittenNumber: you need to pass options of you want to change it');
    });

    it("setOptions: if user passed options change it in class", () => {
      const Converter = new WrittenNumber({ language: En });
        should.deepEqual(Converter.options, {
            noAnd: false,
            alternativeBase: null,
            language: En,
        });
        Converter.setOptions({language: Es, noAnd: true, });
        should.deepEqual(Converter.options, {
            alternativeBase: null,
            language: Es,
            noAnd: true,
        });
    });
  });

  describe("writtenNumber: 'En' language", () => {
    const Converter = new WrittenNumber({ language: En });

    it('negative numbers return ""', () => {
      Converter.convert(-3).should.equal('');
      Converter.convert(-5).should.equal('');
    });

    it("doesn't blow up weirdly with invalid input", () => {
      Converter.convert('asdfasdfasdf').should.equal('');
      Converter.convert('0.as').should.equal('');
      Converter.convert('0.123').should.equal('zero');
      Converter.convert('0.8').should.equal('one');
      Converter.convert('2.8').should.equal('three');
      Converter.convert('asdf.8').should.equal('');
      Converter.convert('120391938123..').should.equal('');
      Converter.convert('1000000000.123').should.equal('one billion');
      Converter.convert('1/3').should.equal('');
      Converter.convert(1 / 3).should.equal('zero');
      Converter.convert('1/2').should.equal('');
      Converter.convert('1.123/2').should.equal('');
    });

    it('correctly converts numbers < 10', () => {
      Converter.convert(1000000000).should.equal('one billion');
      Converter.convert(3).should.equal('three');
      Converter.convert(8).should.equal('eight');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('thirteen');
      Converter.convert(19).should.equal('nineteen');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('twenty');
      Converter.convert(25).should.equal('twenty-five');
      Converter.convert(88).should.equal('eighty-eight');
      Converter.convert(73).should.equal('seventy-three');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(200).should.equal('two hundred');
      Converter.convert(242).should.equal('two hundred and forty-two');
      Converter.convert(1234).should.equal(
        'one thousand two hundred and thirty-four',
      );
      Converter.convert(4323).should.equal(
        'four thousand three hundred and twenty-three',
      );
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(4323000).should.equal(
        'four million three hundred twenty-three thousand',
      );
      Converter.convert(4323055).should.equal(
        'four million three hundred twenty-three thousand and fifty-five',
      );
      Converter.convert(1570025).should.equal(
        'one million five hundred seventy thousand and twenty-five',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('one billion');
      Converter.convert(2580000000).should.equal(
        'two billion five hundred eighty million',
      );
      Converter.convert(1000000000000).should.equal('one trillion');
      Converter.convert(3627000000000).should.equal(
        'three trillion six hundred twenty-seven billion',
      );
    });
  });

  describe("writtenNumber: 'Es' language", () => {
    const Converter = new WrittenNumber({ language: Es });

    it('correctly converts numbers < 10', () => {
      Converter.convert(1).should.equal('uno');
      Converter.convert(3).should.equal('tres');
      Converter.convert(8).should.equal('ocho');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('trece');
      Converter.convert(16).should.equal('dieciséis');
      Converter.convert(19).should.equal('diecinueve');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('veinte');
      Converter.convert(25).should.equal('veinticinco');
      Converter.convert(88).should.equal('ochenta y ocho');
      Converter.convert(73).should.equal('setenta y tres');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(144).should.equal('ciento cuarenta y cuatro');
      Converter.convert(200).should.equal('doscientos');
      Converter.convert(1234).should.equal('mil doscientos treinta y cuatro');
      Converter.convert(4323).should.equal('cuatro mil trescientos veintitrés');
      Converter.convert(242).should.equal('doscientos cuarenta y dos');
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(4323000).should.equal(
        'cuatro millones trescientos veintitrés mil',
      );
      Converter.convert(4323055).should.equal(
        'cuatro millones trescientos veintitrés mil cincuenta y cinco',
      );
      Converter.convert(1570025).should.equal(
        'uno millón quinientos setenta mil veinticinco',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('mil millones');
      Converter.convert(2580000000).should.equal(
        'dos mil quinientos ochenta millones',
      );
      Converter.convert(1000000000000).should.equal('un billón');
      Converter.convert(3627000000000).should.equal(
        'tres billones seiscientos veintisiete mil millones',
      );
    });
  });

  describe("writtenNumber: 'Pt' language", () => {
    const Converter = new WrittenNumber({ language: Pt });

    it('correctly converts numbers < 10', () => {
      Converter.convert(3).should.equal('três');
      Converter.convert(8).should.equal('oito');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('treze');
      Converter.convert(19).should.equal('dezenove');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('vinte');
      Converter.convert(25).should.equal('vinte e cinco');
      Converter.convert(88).should.equal('oitenta e oito');
      Converter.convert(73).should.equal('setenta e três');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(144).should.equal('cento e quarenta e quatro');
      Converter.convert(200).should.equal('duzentos');
      Converter.convert(1234).should.equal('mil duzentos e trinta e quatro');
      Converter.convert(4323).should.equal('quatro mil trezentos e vinte e três');
      Converter.convert(242).should.equal('duzentos e quarenta e dois');
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(4323000).should.equal(
        'quatro milhões trezentos e vinte e três mil',
      );
      Converter.convert(4323055).should.equal(
        'quatro milhões trezentos e vinte e três mil e cinquenta e cinco',
      );
      Converter.convert(1570025).should.equal(
        'um milhão quinhentos e setenta mil e vinte e cinco',
      );
    });

    it('works for 14101 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(14101).should.equal('catorze mil cento e um');
    });

    it('works for 14201 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(14201).should.equal('catorze mil duzentos e um');
    });

    it('works for 1001000 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(1001000).should.equal('um milhão e mil');
    });

    it('works for 1001200 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(1001200).should.equal('um milhão mil e duzentos');
    });

    it('works for 14200 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(14200).should.equal('catorze mil e duzentos');
    });

    it('works for 14100 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(14100).should.equal('catorze mil e cem');
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('um bilhão');
      Converter.convert(2580000000).should.equal(
        'dois bilhões quinhentos e oitenta milhões',
      );
      Converter.convert(1000000000000000).should.equal('um quadrilhão');
      Converter.convert(3627000000000).should.equal(
        'três trilhões seiscentos e vinte e sete bilhões',
      );
    });
  });

  describe("writtenNumber: 'ptPT' language", () => {
    const Converter = new WrittenNumber({ language: PtPt });

    it('correctly converts numbers < 10', () => {
      Converter.convert(3).should.equal('três');
      Converter.convert(8).should.equal('oito');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('treze');
      Converter.convert(19).should.equal('dezanove');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('vinte');
      Converter.convert(25).should.equal('vinte e cinco');
      Converter.convert(88).should.equal('oitenta e oito');
      Converter.convert(73).should.equal('setenta e três');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(144).should.equal('cento e quarenta e quatro');
      Converter.convert(200).should.equal('duzentos');
      Converter.convert(1234).should.equal('mil duzentos e trinta e quatro');
      Converter.convert(4323).should.equal('quatro mil trezentos e vinte e três');
      Converter.convert(242).should.equal('duzentos e quarenta e dois');
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(4323000).should.equal(
        'quatro milhões trezentos e vinte e três mil',
      );
      Converter.convert(4323055).should.equal(
        'quatro milhões trezentos e vinte e três mil e cinquenta e cinco',
      );
      Converter.convert(1570025).should.equal(
        'um milhão quinhentos e setenta mil e vinte e cinco',
      );
    });

    it('works for 14101 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(14101).should.equal('catorze mil cento e um');
    });

    it('works for 14201 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(14201).should.equal('catorze mil duzentos e um');
    });

    it('works for 1001000 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(1001000).should.equal('um milhão e mil');
    });

    it('works for 1001200 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(1001200).should.equal('um milhão mil e duzentos');
    });

    it('works for 14200 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(14200).should.equal('catorze mil e duzentos');
    });

    it('works for 14100 (https://github.com/yamadapc/js-written-number/issues/38)', () => {
      Converter.convert(14100).should.equal('catorze mil e cem');
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('mil milhões');
      Converter.convert(2580000000).should.equal(
        'dois mil quinhentos e oitenta milhões',
      );
      Converter.convert(1000000000000000).should.equal('mil biliões');
      Converter.convert(3627000000000).should.equal(
        'três biliões seiscentos e vinte e sete mil milhões',
      );
    });
  });

  describe("writtenNumber: 'Fr' language", () => {
    const Converter = new WrittenNumber({ language: Fr });

    it('correctly converts numbers < 10', () => {
      Converter.convert(0).should.equal('zéro');
      Converter.convert(3).should.equal('trois');
      Converter.convert(8).should.equal('huit');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('treize');
      Converter.convert(19).should.equal('dix-neuf');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('vingt');
      Converter.convert(25).should.equal('vingt-cinq');
      Converter.convert(73).should.equal('soixante-treize');
      Converter.convert(80).should.equal('quatre-vingts');
      Converter.convert(88).should.equal('quatre-vingt-huit');
      Converter.convert(90).should.equal('quatre-vingt-dix');
      Converter.convert(91).should.equal('quatre-vingt-onze');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(100).should.equal('cent');
      Converter.convert(110).should.equal('cent dix');
      Converter.convert(200).should.equal('deux cents');
      Converter.convert(242).should.equal('deux cent quarante-deux');
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(1234).should.equal('mille deux cent trente-quatre');
      Converter.convert(4000).should.equal('quatre mille');
      Converter.convert(4323).should.equal('quatre mille trois cent vingt-trois');
      Converter.convert(1000000).should.equal('un million');
      Converter.convert(2000000).should.equal('deux millions');
      Converter.convert(2000001).should.equal('deux millions un');
      Converter.convert(4323000).should.equal(
        'quatre millions trois cent vingt-trois mille',
      );
      Converter.convert(4323055).should.equal(
        'quatre millions trois cent vingt-trois mille cinquante-cinq',
      );
      Converter.convert(1570025).should.equal(
        'un million cinq cent soixante-dix mille vingt-cinq',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('un milliard');
      Converter.convert(2580000000).should.equal(
        'deux milliards cinq cent quatre-vingts millions',
      );
      Converter.convert(1000000000000).should.equal('un billion');
      Converter.convert(3627000000000).should.equal(
        'trois billions six cent vingt-sept milliards',
      );
    });
  });

  describe("writtenNumber: 'It' language", () => {
    const Converter = new WrittenNumber({ language: It });

    it('correctly converts numbers < 10', () => {
      Converter.convert(3).should.equal('tre');
      Converter.convert(8).should.equal('otto');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('tredici');
      Converter.convert(19).should.equal('diciannove');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('venti');
      Converter.convert(23).should.equal('ventitré');
      Converter.convert(73).should.equal('settantatré');
      Converter.convert(80).should.equal('ottanta');
      Converter.convert(88).should.equal('ottantotto');
      Converter.convert(90).should.equal('novanta');
      Converter.convert(91).should.equal('novantuno');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(100).should.equal('cento');
      Converter.convert(101).should.equal('centuno');
      Converter.convert(201).should.equal('duecentuno');
      Converter.convert(242).should.equal('due cento quarantadue');
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(1234).should.equal('mille due cento trentaquattro');
      Converter.convert(4000).should.equal('quattro mila');
      Converter.convert(4323).should.equal('quattro mila tre cento ventitré');
      Converter.convert(1000000).should.equal('un milione');
      Converter.convert(2000000).should.equal('due milioni');
      Converter.convert(2000001).should.equal('due milioni un');
      Converter.convert(4323000).should.equal(
        'quattro milioni tre cento ventitré mila',
      );
      Converter.convert(4323055).should.equal(
        'quattro milioni tre cento ventitré mila cinquantacinque',
      );
      Converter.convert(1570025).should.equal(
        'un milione cinque cento settanta mila venticinque',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('un miliardo');
      Converter.convert(2580000000).should.equal(
        'due miliardi cinque cento ottanta milioni',
      );
      Converter.convert(1000000000000).should.equal('un bilione');
      Converter.convert(3627000000000).should.equal(
        'tre bilioni sei cento ventisette miliardi',
      );
    });
  });

  describe("writtenNumber: 'EnIndian' language", () => {
    const Converter = new WrittenNumber({ language: EnIndian });

    it("doesn't blow up weirdly with invalid input", () => {
      Converter.convert('asdfasdfasdf').should.equal('');
      Converter.convert('0.as').should.equal('');
      Converter.convert('0.123').should.equal('zero');
      Converter.convert('0.8').should.equal('one');
      Converter.convert('2.8').should.equal('three');
      Converter.convert('asdf.8').should.equal('');
      Converter.convert('120391938123..').should.equal('');
      Converter.convert(1000000000).should.equal('one hundred crore');
      Converter.convert('1/3').should.equal('');
      Converter.convert(1 / 3).should.equal('zero');
      Converter.convert('1/2').should.equal('');
      Converter.convert('1.123/2').should.equal('');
    });

    it('correctly converts numbers < 10', () => {
      Converter.convert(1000000000).should.equal('one hundred crore');
      Converter.convert(3).should.equal('three');
      Converter.convert(8).should.equal('eight');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('thirteen');
      Converter.convert(19).should.equal('nineteen');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('twenty');
      Converter.convert(25).should.equal('twenty-five');
      Converter.convert(88).should.equal('eighty-eight');
      Converter.convert(73).should.equal('seventy-three');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(200).should.equal('two hundred');
      Converter.convert(242).should.equal('two hundred and forty-two');
      Converter.convert(1234).should.equal(
        'one thousand two hundred and thirty-four',
      );
      Converter.convert(4323).should.equal(
        'four thousand three hundred and twenty-three',
      );
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(4323000).should.equal(
        'forty-three lakh twenty-three thousand',
      );
      Converter.convert(4323055).should.equal(
        'forty-three lakh twenty-three thousand and fifty-five',
      );
      Converter.convert(1570025).should.equal(
        'fifteen lakh seventy thousand and twenty-five',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('one hundred crore');
      Converter.convert(2580000000).should.equal('two hundred fifty-eight crore');
      Converter.convert(1000000000000).should.equal('one lakh crore');
      Converter.convert(3627000000000).should.equal(
        'three lakh sixty-two thousand seven hundred crore',
      );
    });
  });

  describe("writtenNumber: 'Tr' language", () => {
    const Converter = new WrittenNumber({ language: Tr });

    it("doesn't blow up weirdly with invalid input", () => {
      Converter.convert('asdfasdfasdf').should.equal('');
      Converter.convert('0.as').should.equal('');
      Converter.convert('0.123').should.equal('sıfır');
      Converter.convert('0.8').should.equal('bir');
      Converter.convert('2.8').should.equal('üç');
      Converter.convert('asdf.8').should.equal('');
      Converter.convert('120391938123..').should.equal('');
      Converter.convert('1/3').should.equal('');
      Converter.convert(1 / 3).should.equal('sıfır');
      Converter.convert('1/2').should.equal('');
      Converter.convert('1.123/2').should.equal('');
    });

    it('correctly converts numbers < 10', () => {
      Converter.convert(0).should.equal('sıfır');
      Converter.convert(3).should.equal('üç');
      Converter.convert(6).should.equal('altı');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('on üç');
      Converter.convert(19).should.equal('on dokuz');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('yirmi');
      Converter.convert(25).should.equal('yirmi beş');
      Converter.convert(40).should.equal('kırk');
      Converter.convert(88).should.equal('seksen sekiz');
      Converter.convert(73).should.equal('yetmiş üç');
    });

    it('correctly converts numbers < 10000', () => {
      Converter.convert(200).should.equal('iki yüz');
      Converter.convert(242).should.equal('iki yüz kırk iki');
      Converter.convert(1234).should.equal(
        'bin iki yüz otuz dört',
      );
      Converter.convert(4323).should.equal(
        'dört bin üç yüz yirmi üç',
      );
    });

    it('correctly converts numbers > 10000', () => {
      Converter.convert(4323000).should.equal(
        'dört milyon üç yüz yirmi üç bin',
      );
      Converter.convert(4323055).should.equal(
        'dört milyon üç yüz yirmi üç bin elli beş',
      );
      Converter.convert(1570025).should.equal(
        'bir milyon beş yüz yetmiş bin yirmi beş',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('bir milyar');
      Converter.convert(2580000000).should.equal(
        'iki milyar beş yüz seksen milyon',
      );
      Converter.convert(1000000000000).should.equal('bir trilyon');
      Converter.convert(3627000000000).should.equal(
        'üç trilyon altı yüz yirmi yedi milyar',
      );
    });
  });

  describe("writtenNumber: 'Az' language", () => {
    const Converter = new WrittenNumber({ language: Az });

    it("doesn't blow up weirdly with invalid input", () => {
      Converter.convert('asdfasdfasdf').should.equal('');
      Converter.convert('0.as').should.equal('');
      Converter.convert('0.123').should.equal('sıfır');
      Converter.convert('0.8').should.equal('bir');
      Converter.convert('2.8').should.equal('üç');
      Converter.convert('asdf.8').should.equal('');
      Converter.convert('120391938123..').should.equal('');
      Converter.convert('1/3').should.equal('');
      Converter.convert(1 / 3).should.equal('sıfır');
      Converter.convert('1/2').should.equal('');
      Converter.convert('1.123/2').should.equal('');
    });

    it('correctly converts numbers < 10', () => {
      Converter.convert(0).should.equal('sıfır');
      Converter.convert(3).should.equal('üç');
      Converter.convert(6).should.equal('altı');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('on üç');
      Converter.convert(19).should.equal('on doqquz');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('iyirmi');
      Converter.convert(25).should.equal('iyirmi beş');
      Converter.convert(40).should.equal('qırx');
      Converter.convert(88).should.equal('səksən səkkiz');
      Converter.convert(73).should.equal('yetmiş üç');
    });

    it('correctly converts numbers < 10000', () => {
      Converter.convert(200).should.equal('iki yüz');
      Converter.convert(242).should.equal('iki yüz qırx iki');
      Converter.convert(1234).should.equal(
        'min iki yüz otuz dörd',
      );
      Converter.convert(4323).should.equal(
        'dörd min üç yüz iyirmi üç',
      );
    });

    it('correctly converts numbers > 10000', () => {
      Converter.convert(4323000).should.equal(
        'dörd milyon üç yüz iyirmi üç min',
      );
      Converter.convert(4323055).should.equal(
        'dörd milyon üç yüz iyirmi üç min əlli beş',
      );
      Converter.convert(1570025).should.equal(
        'bir milyon beş yüz yetmiş min iyirmi beş',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('bir milyard');
      Converter.convert(2580000000).should.equal(
        'iki milyard beş yüz səksən milyon',
      );
      Converter.convert(1000000000000).should.equal('bir trilyon');
      Converter.convert(3627000000000).should.equal(
        'üç trilyon altı yüz iyirmi yeddi milyard',
      );
    });
  });

  describe("writtenNumber: 'Uk' language", () => {
    const Converter = new WrittenNumber({ language: Uk });

    it('correctly converts numbers < 10', () => {
      Converter.convert(0).should.equal('нуль');
      Converter.convert(1).should.equal('один');
      Converter.convert(2).should.equal('два');
      Converter.convert(3).should.equal('три');
      Converter.convert(9).should.equal('дев’ять');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(11).should.equal('одинадцять');
      Converter.convert(13).should.equal('тринадцять');
      Converter.convert(19).should.equal('дев’ятнадцять');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('двадцять');
      Converter.convert(21).should.equal('двадцять один');
      Converter.convert(25).should.equal('двадцять п’ять');
      Converter.convert(73).should.equal('сімдесят три');
      Converter.convert(80).should.equal('вісімдесят');
      Converter.convert(88).should.equal('вісімдесят вісім');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(100).should.equal('сто');
      Converter.convert(101).should.equal('сто один');
      Converter.convert(110).should.equal('сто десять');
      Converter.convert(111).should.equal('сто одинадцять');
      Converter.convert(146).should.equal('сто сорок шість');
      Converter.convert(200).should.equal('двісті');
      Converter.convert(242).should.equal('двісті сорок два');
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(1000).should.equal('одна тисяча');
      Converter.convert(2000).should.equal('дві тисячі');
      Converter.convert(3000).should.equal('три тисячі');
      Converter.convert(4000).should.equal('чотири тисячі');
      Converter.convert(5000).should.equal('п’ять тисяч');
      Converter.convert(1234).should.equal('одна тисяча двісті тридцять чотири');
      Converter.convert(4323).should.equal('чотири тисячі триста двадцять три');
      Converter.convert(1000000).should.equal('один мільйон');
      Converter.convert(2000000).should.equal('два мільйони');
      Converter.convert(2000001).should.equal('два мільйони один');
      Converter.convert(5000000).should.equal('п’ять мільйонів');
      Converter.convert(21000000).should.equal(
        'двадцять один мільйон',
      );
      Converter.convert(111000000).should.equal(
        'сто одинадцять мільйонів',
      );
      Converter.convert(214567891).should.equal(
        'двісті чотирнадцять мільйонів п’ятсот шістдесят сім тисяч вісімсот дев’яносто один',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('один мільярд');
      Converter.convert(2580000000).should.equal(
        'два мільярди п’ятсот вісімдесят мільйонів',
      );
      Converter.convert(1000000000000).should.equal('один трильйон');
      Converter.convert(3627000000000).should.equal(
        'три трильйони шістсот двадцять сім мільярдів',
      );
    });
  });

  describe("writtenNumber: 'Ar' language", () => {
    const Converter = new WrittenNumber({ language: Ar });

    it("doesn't blow up weirdly with invalid input", () => {
      Converter.convert('asdfasdfasdf').should.equal('');
      Converter.convert('0.as').should.equal('');
      Converter.convert('0.123').should.equal('صفر');
      Converter.convert('0.8').should.equal('واحد');
      Converter.convert('2.8').should.equal('ثلاثة');
      Converter.convert('asdf.8').should.equal('');
      Converter.convert('120391938123..').should.equal('');
      Converter.convert('1/3').should.equal('');
      Converter.convert(1 / 3).should.equal('صفر');
      Converter.convert('1/2').should.equal('');
      Converter.convert('1.123/2').should.equal('');
    });

    it('correctly converts numbers < 10', () => {
      Converter.convert(0).should.equal('صفر');
      Converter.convert(3).should.equal('ثلاثة');
      Converter.convert(6).should.equal('ستة');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(11).should.equal('أحد عشر');
      Converter.convert(13).should.equal('ثلاثة عشر');
      Converter.convert(19).should.equal('تسعة عشر');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('عشرون');
      Converter.convert(25).should.equal('خمسة وعشرون');
      Converter.convert(40).should.equal('أربعون');
      Converter.convert(88).should.equal('ثمانية وثمانون');
      Converter.convert(73).should.equal('ثلاثة وسبعون');
      Converter.convert(99).should.equal('تسعة وتسعون');
    });

    it('correctly converts numbers < 10000', () => {
      Converter.convert(200).should.equal('مائتان');
      Converter.convert(310).should.equal('ثلاثمائة وعشرة');
      Converter.convert(242).should.equal('مائتان واثنان وأربعون');
      Converter.convert(1234).should.equal('ألف ومائتان وأربعة وثلاثون');
      Converter.convert(3000).should.equal('ثلاثة آلاف');
      Converter.convert(4323).should.equal('أربعة آلاف وثلاثمائة وثلاثة وعشرون');
    });

    it('correctly converts numbers > 10000', () => {
      Converter.convert(10000).should.equal('عشرة آلاف');
      Converter.convert(11000).should.equal('أحد عشر ألف');
      Converter.convert(4323000).should.equal('أربعة ملايين وثلاثمائة وثلاثة وعشرون ألف');
      Converter.convert(4323055).should.equal('أربعة ملايين وثلاثمائة وثلاثة وعشرون ألف وخمسة وخمسون');
      Converter.convert(1570025).should.equal('مليون وخمسمائة وسبعون ألف وخمسة وعشرون');
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('مليار');
      Converter.convert(2580000000).should.equal('ملياران وخمسمائة وثمانون مليون');
      Converter.convert(1000000000000).should.equal('تريليون');
      Converter.convert(3627000000000).should.equal('ثلاثة تريليون وستمائة وسبعة وعشرون مليار');
    });
  });

  describe("writtenNumber: 'Id' language", () => {
    const Converter = new WrittenNumber({ language: Id });

    it('correctly converts numbers < 10', () => {
      Converter.convert(1).should.equal('satu');
      Converter.convert(3).should.equal('tiga');
      Converter.convert(8).should.equal('delapan');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(11).should.equal('sebelas');
      Converter.convert(13).should.equal('tiga belas');
      Converter.convert(19).should.equal('sembilan belas');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('dua puluh');
      Converter.convert(25).should.equal('dua puluh lima');
      Converter.convert(88).should.equal('delapan puluh delapan');
      Converter.convert(73).should.equal('tujuh puluh tiga');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(144).should.equal('seratus empat puluh empat');
      Converter.convert(200).should.equal('dua ratus');
      Converter.convert(242).should.equal('dua ratus empat puluh dua');
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(1111).should.equal('seribu seratus sebelas');
      Converter.convert(1234).should.equal('seribu dua ratus tiga puluh empat');
      Converter.convert(111234).should.equal(
        'seratus sebelas ribu dua ratus tiga puluh empat',
      );
      Converter.convert(432055).should.equal(
        'empat ratus tiga puluh dua ribu lima puluh lima',
      );
      Converter.convert(1111234).should.equal(
        'satu juta seratus sebelas ribu dua ratus tiga puluh empat',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('satu miliar');
      Converter.convert(2580000000).should.equal(
        'dua miliar lima ratus delapan puluh juta',
      );
      Converter.convert(1000000000000).should.equal('satu triliun');
      Converter.convert(3627000000000).should.equal(
        'tiga triliun enam ratus dua puluh tujuh miliar',
      );
    });
  });

  describe("writtenNumber: 'Ru' language", () => {
    const Converter = new WrittenNumber({ language: Ru });

    it('negative numbers return ""', () => {
      Converter.convert(-3).should.equal('');
      Converter.convert(-5).should.equal('');
    });

    it("doesn't blow up weirdly with invalid input", () => {
      Converter.convert('asdfasdfasdf').should.equal('');
      Converter.convert('0.as').should.equal('');
      Converter.convert('0.123').should.equal('ноль');
      Converter.convert('0.8').should.equal('один');
      Converter.convert('2.8').should.equal('три');
      Converter.convert('asdf.8').should.equal('');
      Converter.convert('120391938123..').should.equal('');
      Converter.convert('1000000000.123').should.equal('один миллиард');
      Converter.convert('1/3').should.equal('');
      Converter.convert(1 / 3).should.equal('ноль');
      Converter.convert('1/2').should.equal('');
      Converter.convert('1.123/2').should.equal('');
    });

    it('correctly converts numbers < 10', () => {
      Converter.convert(1000000000).should.equal('один миллиард');
      Converter.convert(3).should.equal('три');
      Converter.convert(8).should.equal('восемь');
    });

    it('correctly converts numbers < 20', () => {
      Converter.convert(13).should.equal('тринадцать');
      Converter.convert(19).should.equal('девятнадцать');
    });

    it('correctly converts numbers < 100', () => {
      Converter.convert(20).should.equal('двадцать');
      Converter.convert(25).should.equal('двадцать пять');
      Converter.convert(88).should.equal('восемьдесят восемь');
      Converter.convert(73).should.equal('семьдесят три');
    });

    it('correctly converts numbers < 1000', () => {
      Converter.convert(200).should.equal('двести');
      Converter.convert(242).should.equal('двести сорок два');
      Converter.convert(1234).should.equal(
        'одна тысяча двести тридцать четыре',
      );
      Converter.convert(4323).should.equal(
        'четыре тысячи триста двадцать три',
      );
    });

    it('correctly converts numbers > 1000', () => {
      Converter.convert(4323000).should.equal(
        'четыре миллиона триста двадцать три тысячи',
      );
      Converter.convert(4323055).should.equal(
        'четыре миллиона триста двадцать три тысячи пятьдесят пять',
      );
      Converter.convert(1570025).should.equal(
        'один миллион пятьсот семьдесят тысяч двадцать пять',
      );
    });

    it('correctly converts numbers > 1 000 000 000', () => {
      Converter.convert(1000000000).should.equal('один миллиард');
      Converter.convert(2580000000).should.equal(
        'два миллиарда пятьсот восемьдесят миллионов',
      );
      Converter.convert(1000000000000).should.equal('один триллион');
      Converter.convert(3627000000000).should.equal(
        'три триллиона шестьсот двадцать семь миллиардов',
      );
    });
  });
});
