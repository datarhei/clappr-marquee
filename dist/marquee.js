(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@clappr/core')) :
  typeof define === 'function' && define.amd ? define(['@clappr/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Marquee = factory(global.Clappr));
}(this, (function (core) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var _nodeResolve_empty = {};

  var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
  });

  const word = '[a-fA-F\\d:]';
  const b = options => options && options.includeBoundaries ?
  	`(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` :
  	'';

  const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

  const v6seg = '[a-fA-F\\d]{1,4}';
  const v6 = `
(?:
(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

  // Pre-compile only the exact regexes because adding a global flag make regexes stateful
  const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
  const v4exact = new RegExp(`^${v4}$`);
  const v6exact = new RegExp(`^${v6}$`);

  const ip = options => options && options.exact ?
  	v46Exact :
  	new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g');

  ip.v4 = options => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g');
  ip.v6 = options => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g');

  var ipRegex = ip;

  var tlds = [
  	"aaa",
  	"aarp",
  	"abarth",
  	"abb",
  	"abbott",
  	"abbvie",
  	"abc",
  	"able",
  	"abogado",
  	"abudhabi",
  	"ac",
  	"academy",
  	"accenture",
  	"accountant",
  	"accountants",
  	"aco",
  	"actor",
  	"ad",
  	"adac",
  	"ads",
  	"adult",
  	"ae",
  	"aeg",
  	"aero",
  	"aetna",
  	"af",
  	"afamilycompany",
  	"afl",
  	"africa",
  	"ag",
  	"agakhan",
  	"agency",
  	"ai",
  	"aig",
  	"airbus",
  	"airforce",
  	"airtel",
  	"akdn",
  	"al",
  	"alfaromeo",
  	"alibaba",
  	"alipay",
  	"allfinanz",
  	"allstate",
  	"ally",
  	"alsace",
  	"alstom",
  	"am",
  	"amazon",
  	"americanexpress",
  	"americanfamily",
  	"amex",
  	"amfam",
  	"amica",
  	"amsterdam",
  	"analytics",
  	"android",
  	"anquan",
  	"anz",
  	"ao",
  	"aol",
  	"apartments",
  	"app",
  	"apple",
  	"aq",
  	"aquarelle",
  	"ar",
  	"arab",
  	"aramco",
  	"archi",
  	"army",
  	"arpa",
  	"art",
  	"arte",
  	"as",
  	"asda",
  	"asia",
  	"associates",
  	"at",
  	"athleta",
  	"attorney",
  	"au",
  	"auction",
  	"audi",
  	"audible",
  	"audio",
  	"auspost",
  	"author",
  	"auto",
  	"autos",
  	"avianca",
  	"aw",
  	"aws",
  	"ax",
  	"axa",
  	"az",
  	"azure",
  	"ba",
  	"baby",
  	"baidu",
  	"banamex",
  	"bananarepublic",
  	"band",
  	"bank",
  	"bar",
  	"barcelona",
  	"barclaycard",
  	"barclays",
  	"barefoot",
  	"bargains",
  	"baseball",
  	"basketball",
  	"bauhaus",
  	"bayern",
  	"bb",
  	"bbc",
  	"bbt",
  	"bbva",
  	"bcg",
  	"bcn",
  	"bd",
  	"be",
  	"beats",
  	"beauty",
  	"beer",
  	"bentley",
  	"berlin",
  	"best",
  	"bestbuy",
  	"bet",
  	"bf",
  	"bg",
  	"bh",
  	"bharti",
  	"bi",
  	"bible",
  	"bid",
  	"bike",
  	"bing",
  	"bingo",
  	"bio",
  	"biz",
  	"bj",
  	"black",
  	"blackfriday",
  	"blockbuster",
  	"blog",
  	"bloomberg",
  	"blue",
  	"bm",
  	"bms",
  	"bmw",
  	"bn",
  	"bnpparibas",
  	"bo",
  	"boats",
  	"boehringer",
  	"bofa",
  	"bom",
  	"bond",
  	"boo",
  	"book",
  	"booking",
  	"bosch",
  	"bostik",
  	"boston",
  	"bot",
  	"boutique",
  	"box",
  	"br",
  	"bradesco",
  	"bridgestone",
  	"broadway",
  	"broker",
  	"brother",
  	"brussels",
  	"bs",
  	"bt",
  	"budapest",
  	"bugatti",
  	"build",
  	"builders",
  	"business",
  	"buy",
  	"buzz",
  	"bv",
  	"bw",
  	"by",
  	"bz",
  	"bzh",
  	"ca",
  	"cab",
  	"cafe",
  	"cal",
  	"call",
  	"calvinklein",
  	"cam",
  	"camera",
  	"camp",
  	"cancerresearch",
  	"canon",
  	"capetown",
  	"capital",
  	"capitalone",
  	"car",
  	"caravan",
  	"cards",
  	"care",
  	"career",
  	"careers",
  	"cars",
  	"casa",
  	"case",
  	"cash",
  	"casino",
  	"cat",
  	"catering",
  	"catholic",
  	"cba",
  	"cbn",
  	"cbre",
  	"cbs",
  	"cc",
  	"cd",
  	"center",
  	"ceo",
  	"cern",
  	"cf",
  	"cfa",
  	"cfd",
  	"cg",
  	"ch",
  	"chanel",
  	"channel",
  	"charity",
  	"chase",
  	"chat",
  	"cheap",
  	"chintai",
  	"christmas",
  	"chrome",
  	"church",
  	"ci",
  	"cipriani",
  	"circle",
  	"cisco",
  	"citadel",
  	"citi",
  	"citic",
  	"city",
  	"cityeats",
  	"ck",
  	"cl",
  	"claims",
  	"cleaning",
  	"click",
  	"clinic",
  	"clinique",
  	"clothing",
  	"cloud",
  	"club",
  	"clubmed",
  	"cm",
  	"cn",
  	"co",
  	"coach",
  	"codes",
  	"coffee",
  	"college",
  	"cologne",
  	"com",
  	"comcast",
  	"commbank",
  	"community",
  	"company",
  	"compare",
  	"computer",
  	"comsec",
  	"condos",
  	"construction",
  	"consulting",
  	"contact",
  	"contractors",
  	"cooking",
  	"cookingchannel",
  	"cool",
  	"coop",
  	"corsica",
  	"country",
  	"coupon",
  	"coupons",
  	"courses",
  	"cpa",
  	"cr",
  	"credit",
  	"creditcard",
  	"creditunion",
  	"cricket",
  	"crown",
  	"crs",
  	"cruise",
  	"cruises",
  	"csc",
  	"cu",
  	"cuisinella",
  	"cv",
  	"cw",
  	"cx",
  	"cy",
  	"cymru",
  	"cyou",
  	"cz",
  	"dabur",
  	"dad",
  	"dance",
  	"data",
  	"date",
  	"dating",
  	"datsun",
  	"day",
  	"dclk",
  	"dds",
  	"de",
  	"deal",
  	"dealer",
  	"deals",
  	"degree",
  	"delivery",
  	"dell",
  	"deloitte",
  	"delta",
  	"democrat",
  	"dental",
  	"dentist",
  	"desi",
  	"design",
  	"dev",
  	"dhl",
  	"diamonds",
  	"diet",
  	"digital",
  	"direct",
  	"directory",
  	"discount",
  	"discover",
  	"dish",
  	"diy",
  	"dj",
  	"dk",
  	"dm",
  	"dnp",
  	"do",
  	"docs",
  	"doctor",
  	"dog",
  	"domains",
  	"dot",
  	"download",
  	"drive",
  	"dtv",
  	"dubai",
  	"duck",
  	"dunlop",
  	"dupont",
  	"durban",
  	"dvag",
  	"dvr",
  	"dz",
  	"earth",
  	"eat",
  	"ec",
  	"eco",
  	"edeka",
  	"edu",
  	"education",
  	"ee",
  	"eg",
  	"email",
  	"emerck",
  	"energy",
  	"engineer",
  	"engineering",
  	"enterprises",
  	"epson",
  	"equipment",
  	"er",
  	"ericsson",
  	"erni",
  	"es",
  	"esq",
  	"estate",
  	"et",
  	"etisalat",
  	"eu",
  	"eurovision",
  	"eus",
  	"events",
  	"exchange",
  	"expert",
  	"exposed",
  	"express",
  	"extraspace",
  	"fage",
  	"fail",
  	"fairwinds",
  	"faith",
  	"family",
  	"fan",
  	"fans",
  	"farm",
  	"farmers",
  	"fashion",
  	"fast",
  	"fedex",
  	"feedback",
  	"ferrari",
  	"ferrero",
  	"fi",
  	"fiat",
  	"fidelity",
  	"fido",
  	"film",
  	"final",
  	"finance",
  	"financial",
  	"fire",
  	"firestone",
  	"firmdale",
  	"fish",
  	"fishing",
  	"fit",
  	"fitness",
  	"fj",
  	"fk",
  	"flickr",
  	"flights",
  	"flir",
  	"florist",
  	"flowers",
  	"fly",
  	"fm",
  	"fo",
  	"foo",
  	"food",
  	"foodnetwork",
  	"football",
  	"ford",
  	"forex",
  	"forsale",
  	"forum",
  	"foundation",
  	"fox",
  	"fr",
  	"free",
  	"fresenius",
  	"frl",
  	"frogans",
  	"frontdoor",
  	"frontier",
  	"ftr",
  	"fujitsu",
  	"fun",
  	"fund",
  	"furniture",
  	"futbol",
  	"fyi",
  	"ga",
  	"gal",
  	"gallery",
  	"gallo",
  	"gallup",
  	"game",
  	"games",
  	"gap",
  	"garden",
  	"gay",
  	"gb",
  	"gbiz",
  	"gd",
  	"gdn",
  	"ge",
  	"gea",
  	"gent",
  	"genting",
  	"george",
  	"gf",
  	"gg",
  	"ggee",
  	"gh",
  	"gi",
  	"gift",
  	"gifts",
  	"gives",
  	"giving",
  	"gl",
  	"glade",
  	"glass",
  	"gle",
  	"global",
  	"globo",
  	"gm",
  	"gmail",
  	"gmbh",
  	"gmo",
  	"gmx",
  	"gn",
  	"godaddy",
  	"gold",
  	"goldpoint",
  	"golf",
  	"goo",
  	"goodyear",
  	"goog",
  	"google",
  	"gop",
  	"got",
  	"gov",
  	"gp",
  	"gq",
  	"gr",
  	"grainger",
  	"graphics",
  	"gratis",
  	"green",
  	"gripe",
  	"grocery",
  	"group",
  	"gs",
  	"gt",
  	"gu",
  	"guardian",
  	"gucci",
  	"guge",
  	"guide",
  	"guitars",
  	"guru",
  	"gw",
  	"gy",
  	"hair",
  	"hamburg",
  	"hangout",
  	"haus",
  	"hbo",
  	"hdfc",
  	"hdfcbank",
  	"health",
  	"healthcare",
  	"help",
  	"helsinki",
  	"here",
  	"hermes",
  	"hgtv",
  	"hiphop",
  	"hisamitsu",
  	"hitachi",
  	"hiv",
  	"hk",
  	"hkt",
  	"hm",
  	"hn",
  	"hockey",
  	"holdings",
  	"holiday",
  	"homedepot",
  	"homegoods",
  	"homes",
  	"homesense",
  	"honda",
  	"horse",
  	"hospital",
  	"host",
  	"hosting",
  	"hot",
  	"hoteles",
  	"hotels",
  	"hotmail",
  	"house",
  	"how",
  	"hr",
  	"hsbc",
  	"ht",
  	"hu",
  	"hughes",
  	"hyatt",
  	"hyundai",
  	"ibm",
  	"icbc",
  	"ice",
  	"icu",
  	"id",
  	"ie",
  	"ieee",
  	"ifm",
  	"ikano",
  	"il",
  	"im",
  	"imamat",
  	"imdb",
  	"immo",
  	"immobilien",
  	"in",
  	"inc",
  	"industries",
  	"infiniti",
  	"info",
  	"ing",
  	"ink",
  	"institute",
  	"insurance",
  	"insure",
  	"int",
  	"international",
  	"intuit",
  	"investments",
  	"io",
  	"ipiranga",
  	"iq",
  	"ir",
  	"irish",
  	"is",
  	"ismaili",
  	"ist",
  	"istanbul",
  	"it",
  	"itau",
  	"itv",
  	"iveco",
  	"jaguar",
  	"java",
  	"jcb",
  	"je",
  	"jeep",
  	"jetzt",
  	"jewelry",
  	"jio",
  	"jll",
  	"jm",
  	"jmp",
  	"jnj",
  	"jo",
  	"jobs",
  	"joburg",
  	"jot",
  	"joy",
  	"jp",
  	"jpmorgan",
  	"jprs",
  	"juegos",
  	"juniper",
  	"kaufen",
  	"kddi",
  	"ke",
  	"kerryhotels",
  	"kerrylogistics",
  	"kerryproperties",
  	"kfh",
  	"kg",
  	"kh",
  	"ki",
  	"kia",
  	"kim",
  	"kinder",
  	"kindle",
  	"kitchen",
  	"kiwi",
  	"km",
  	"kn",
  	"koeln",
  	"komatsu",
  	"kosher",
  	"kp",
  	"kpmg",
  	"kpn",
  	"kr",
  	"krd",
  	"kred",
  	"kuokgroup",
  	"kw",
  	"ky",
  	"kyoto",
  	"kz",
  	"la",
  	"lacaixa",
  	"lamborghini",
  	"lamer",
  	"lancaster",
  	"lancia",
  	"land",
  	"landrover",
  	"lanxess",
  	"lasalle",
  	"lat",
  	"latino",
  	"latrobe",
  	"law",
  	"lawyer",
  	"lb",
  	"lc",
  	"lds",
  	"lease",
  	"leclerc",
  	"lefrak",
  	"legal",
  	"lego",
  	"lexus",
  	"lgbt",
  	"li",
  	"lidl",
  	"life",
  	"lifeinsurance",
  	"lifestyle",
  	"lighting",
  	"like",
  	"lilly",
  	"limited",
  	"limo",
  	"lincoln",
  	"linde",
  	"link",
  	"lipsy",
  	"live",
  	"living",
  	"lixil",
  	"lk",
  	"llc",
  	"llp",
  	"loan",
  	"loans",
  	"locker",
  	"locus",
  	"loft",
  	"lol",
  	"london",
  	"lotte",
  	"lotto",
  	"love",
  	"lpl",
  	"lplfinancial",
  	"lr",
  	"ls",
  	"lt",
  	"ltd",
  	"ltda",
  	"lu",
  	"lundbeck",
  	"luxe",
  	"luxury",
  	"lv",
  	"ly",
  	"ma",
  	"macys",
  	"madrid",
  	"maif",
  	"maison",
  	"makeup",
  	"man",
  	"management",
  	"mango",
  	"map",
  	"market",
  	"marketing",
  	"markets",
  	"marriott",
  	"marshalls",
  	"maserati",
  	"mattel",
  	"mba",
  	"mc",
  	"mckinsey",
  	"md",
  	"me",
  	"med",
  	"media",
  	"meet",
  	"melbourne",
  	"meme",
  	"memorial",
  	"men",
  	"menu",
  	"merckmsd",
  	"mg",
  	"mh",
  	"miami",
  	"microsoft",
  	"mil",
  	"mini",
  	"mint",
  	"mit",
  	"mitsubishi",
  	"mk",
  	"ml",
  	"mlb",
  	"mls",
  	"mm",
  	"mma",
  	"mn",
  	"mo",
  	"mobi",
  	"mobile",
  	"moda",
  	"moe",
  	"moi",
  	"mom",
  	"monash",
  	"money",
  	"monster",
  	"mormon",
  	"mortgage",
  	"moscow",
  	"moto",
  	"motorcycles",
  	"mov",
  	"movie",
  	"mp",
  	"mq",
  	"mr",
  	"ms",
  	"msd",
  	"mt",
  	"mtn",
  	"mtr",
  	"mu",
  	"museum",
  	"mutual",
  	"mv",
  	"mw",
  	"mx",
  	"my",
  	"mz",
  	"na",
  	"nab",
  	"nagoya",
  	"name",
  	"natura",
  	"navy",
  	"nba",
  	"nc",
  	"ne",
  	"nec",
  	"net",
  	"netbank",
  	"netflix",
  	"network",
  	"neustar",
  	"new",
  	"news",
  	"next",
  	"nextdirect",
  	"nexus",
  	"nf",
  	"nfl",
  	"ng",
  	"ngo",
  	"nhk",
  	"ni",
  	"nico",
  	"nike",
  	"nikon",
  	"ninja",
  	"nissan",
  	"nissay",
  	"nl",
  	"no",
  	"nokia",
  	"northwesternmutual",
  	"norton",
  	"now",
  	"nowruz",
  	"nowtv",
  	"np",
  	"nr",
  	"nra",
  	"nrw",
  	"ntt",
  	"nu",
  	"nyc",
  	"nz",
  	"obi",
  	"observer",
  	"off",
  	"office",
  	"okinawa",
  	"olayan",
  	"olayangroup",
  	"oldnavy",
  	"ollo",
  	"om",
  	"omega",
  	"one",
  	"ong",
  	"onl",
  	"online",
  	"ooo",
  	"open",
  	"oracle",
  	"orange",
  	"org",
  	"organic",
  	"origins",
  	"osaka",
  	"otsuka",
  	"ott",
  	"ovh",
  	"pa",
  	"page",
  	"panasonic",
  	"paris",
  	"pars",
  	"partners",
  	"parts",
  	"party",
  	"passagens",
  	"pay",
  	"pccw",
  	"pe",
  	"pet",
  	"pf",
  	"pfizer",
  	"pg",
  	"ph",
  	"pharmacy",
  	"phd",
  	"philips",
  	"phone",
  	"photo",
  	"photography",
  	"photos",
  	"physio",
  	"pics",
  	"pictet",
  	"pictures",
  	"pid",
  	"pin",
  	"ping",
  	"pink",
  	"pioneer",
  	"pizza",
  	"pk",
  	"pl",
  	"place",
  	"play",
  	"playstation",
  	"plumbing",
  	"plus",
  	"pm",
  	"pn",
  	"pnc",
  	"pohl",
  	"poker",
  	"politie",
  	"porn",
  	"post",
  	"pr",
  	"pramerica",
  	"praxi",
  	"press",
  	"prime",
  	"pro",
  	"prod",
  	"productions",
  	"prof",
  	"progressive",
  	"promo",
  	"properties",
  	"property",
  	"protection",
  	"pru",
  	"prudential",
  	"ps",
  	"pt",
  	"pub",
  	"pw",
  	"pwc",
  	"py",
  	"qa",
  	"qpon",
  	"quebec",
  	"quest",
  	"qvc",
  	"racing",
  	"radio",
  	"raid",
  	"re",
  	"read",
  	"realestate",
  	"realtor",
  	"realty",
  	"recipes",
  	"red",
  	"redstone",
  	"redumbrella",
  	"rehab",
  	"reise",
  	"reisen",
  	"reit",
  	"reliance",
  	"ren",
  	"rent",
  	"rentals",
  	"repair",
  	"report",
  	"republican",
  	"rest",
  	"restaurant",
  	"review",
  	"reviews",
  	"rexroth",
  	"rich",
  	"richardli",
  	"ricoh",
  	"ril",
  	"rio",
  	"rip",
  	"rmit",
  	"ro",
  	"rocher",
  	"rocks",
  	"rodeo",
  	"rogers",
  	"room",
  	"rs",
  	"rsvp",
  	"ru",
  	"rugby",
  	"ruhr",
  	"run",
  	"rw",
  	"rwe",
  	"ryukyu",
  	"sa",
  	"saarland",
  	"safe",
  	"safety",
  	"sakura",
  	"sale",
  	"salon",
  	"samsclub",
  	"samsung",
  	"sandvik",
  	"sandvikcoromant",
  	"sanofi",
  	"sap",
  	"sarl",
  	"sas",
  	"save",
  	"saxo",
  	"sb",
  	"sbi",
  	"sbs",
  	"sc",
  	"sca",
  	"scb",
  	"schaeffler",
  	"schmidt",
  	"scholarships",
  	"school",
  	"schule",
  	"schwarz",
  	"science",
  	"scjohnson",
  	"scot",
  	"sd",
  	"se",
  	"search",
  	"seat",
  	"secure",
  	"security",
  	"seek",
  	"select",
  	"sener",
  	"services",
  	"ses",
  	"seven",
  	"sew",
  	"sex",
  	"sexy",
  	"sfr",
  	"sg",
  	"sh",
  	"shangrila",
  	"sharp",
  	"shaw",
  	"shell",
  	"shia",
  	"shiksha",
  	"shoes",
  	"shop",
  	"shopping",
  	"shouji",
  	"show",
  	"showtime",
  	"si",
  	"silk",
  	"sina",
  	"singles",
  	"site",
  	"sj",
  	"sk",
  	"ski",
  	"skin",
  	"sky",
  	"skype",
  	"sl",
  	"sling",
  	"sm",
  	"smart",
  	"smile",
  	"sn",
  	"sncf",
  	"so",
  	"soccer",
  	"social",
  	"softbank",
  	"software",
  	"sohu",
  	"solar",
  	"solutions",
  	"song",
  	"sony",
  	"soy",
  	"spa",
  	"space",
  	"sport",
  	"spot",
  	"spreadbetting",
  	"sr",
  	"srl",
  	"ss",
  	"st",
  	"stada",
  	"staples",
  	"star",
  	"statebank",
  	"statefarm",
  	"stc",
  	"stcgroup",
  	"stockholm",
  	"storage",
  	"store",
  	"stream",
  	"studio",
  	"study",
  	"style",
  	"su",
  	"sucks",
  	"supplies",
  	"supply",
  	"support",
  	"surf",
  	"surgery",
  	"suzuki",
  	"sv",
  	"swatch",
  	"swiftcover",
  	"swiss",
  	"sx",
  	"sy",
  	"sydney",
  	"systems",
  	"sz",
  	"tab",
  	"taipei",
  	"talk",
  	"taobao",
  	"target",
  	"tatamotors",
  	"tatar",
  	"tattoo",
  	"tax",
  	"taxi",
  	"tc",
  	"tci",
  	"td",
  	"tdk",
  	"team",
  	"tech",
  	"technology",
  	"tel",
  	"temasek",
  	"tennis",
  	"teva",
  	"tf",
  	"tg",
  	"th",
  	"thd",
  	"theater",
  	"theatre",
  	"tiaa",
  	"tickets",
  	"tienda",
  	"tiffany",
  	"tips",
  	"tires",
  	"tirol",
  	"tj",
  	"tjmaxx",
  	"tjx",
  	"tk",
  	"tkmaxx",
  	"tl",
  	"tm",
  	"tmall",
  	"tn",
  	"to",
  	"today",
  	"tokyo",
  	"tools",
  	"top",
  	"toray",
  	"toshiba",
  	"total",
  	"tours",
  	"town",
  	"toyota",
  	"toys",
  	"tr",
  	"trade",
  	"trading",
  	"training",
  	"travel",
  	"travelchannel",
  	"travelers",
  	"travelersinsurance",
  	"trust",
  	"trv",
  	"tt",
  	"tube",
  	"tui",
  	"tunes",
  	"tushu",
  	"tv",
  	"tvs",
  	"tw",
  	"tz",
  	"ua",
  	"ubank",
  	"ubs",
  	"ug",
  	"uk",
  	"unicom",
  	"university",
  	"uno",
  	"uol",
  	"ups",
  	"us",
  	"uy",
  	"uz",
  	"va",
  	"vacations",
  	"vana",
  	"vanguard",
  	"vc",
  	"ve",
  	"vegas",
  	"ventures",
  	"verisign",
  	"versicherung",
  	"vet",
  	"vg",
  	"vi",
  	"viajes",
  	"video",
  	"vig",
  	"viking",
  	"villas",
  	"vin",
  	"vip",
  	"virgin",
  	"visa",
  	"vision",
  	"viva",
  	"vivo",
  	"vlaanderen",
  	"vn",
  	"vodka",
  	"volkswagen",
  	"volvo",
  	"vote",
  	"voting",
  	"voto",
  	"voyage",
  	"vu",
  	"vuelos",
  	"wales",
  	"walmart",
  	"walter",
  	"wang",
  	"wanggou",
  	"watch",
  	"watches",
  	"weather",
  	"weatherchannel",
  	"webcam",
  	"weber",
  	"website",
  	"wed",
  	"wedding",
  	"weibo",
  	"weir",
  	"wf",
  	"whoswho",
  	"wien",
  	"wiki",
  	"williamhill",
  	"win",
  	"windows",
  	"wine",
  	"winners",
  	"wme",
  	"wolterskluwer",
  	"woodside",
  	"work",
  	"works",
  	"world",
  	"wow",
  	"ws",
  	"wtc",
  	"wtf",
  	"xbox",
  	"xerox",
  	"xfinity",
  	"xihuan",
  	"xin",
  	"कॉम",
  	"セール",
  	"佛山",
  	"ಭಾರತ",
  	"慈善",
  	"集团",
  	"在线",
  	"한국",
  	"ଭାରତ",
  	"大众汽车",
  	"点看",
  	"คอม",
  	"ভাৰত",
  	"ভারত",
  	"八卦",
  	"ישראל",
  	"موقع",
  	"বাংলা",
  	"公益",
  	"公司",
  	"香格里拉",
  	"网站",
  	"移动",
  	"我爱你",
  	"москва",
  	"қаз",
  	"католик",
  	"онлайн",
  	"сайт",
  	"联通",
  	"срб",
  	"бг",
  	"бел",
  	"קום",
  	"时尚",
  	"微博",
  	"淡马锡",
  	"ファッション",
  	"орг",
  	"नेट",
  	"ストア",
  	"アマゾン",
  	"삼성",
  	"சிங்கப்பூர்",
  	"商标",
  	"商店",
  	"商城",
  	"дети",
  	"мкд",
  	"ею",
  	"ポイント",
  	"新闻",
  	"家電",
  	"كوم",
  	"中文网",
  	"中信",
  	"中国",
  	"中國",
  	"娱乐",
  	"谷歌",
  	"భారత్",
  	"ලංකා",
  	"電訊盈科",
  	"购物",
  	"クラウド",
  	"ભારત",
  	"通販",
  	"भारतम्",
  	"भारत",
  	"भारोत",
  	"网店",
  	"संगठन",
  	"餐厅",
  	"网络",
  	"ком",
  	"укр",
  	"香港",
  	"亚马逊",
  	"诺基亚",
  	"食品",
  	"飞利浦",
  	"台湾",
  	"台灣",
  	"手机",
  	"мон",
  	"الجزائر",
  	"عمان",
  	"ارامكو",
  	"ایران",
  	"العليان",
  	"اتصالات",
  	"امارات",
  	"بازار",
  	"موريتانيا",
  	"پاکستان",
  	"الاردن",
  	"بارت",
  	"بھارت",
  	"المغرب",
  	"ابوظبي",
  	"البحرين",
  	"السعودية",
  	"ڀارت",
  	"كاثوليك",
  	"سودان",
  	"همراه",
  	"عراق",
  	"مليسيا",
  	"澳門",
  	"닷컴",
  	"政府",
  	"شبكة",
  	"بيتك",
  	"عرب",
  	"გე",
  	"机构",
  	"组织机构",
  	"健康",
  	"ไทย",
  	"سورية",
  	"招聘",
  	"рус",
  	"рф",
  	"تونس",
  	"大拿",
  	"ລາວ",
  	"みんな",
  	"グーグル",
  	"ευ",
  	"ελ",
  	"世界",
  	"書籍",
  	"ഭാരതം",
  	"ਭਾਰਤ",
  	"网址",
  	"닷넷",
  	"コム",
  	"天主教",
  	"游戏",
  	"vermögensberater",
  	"vermögensberatung",
  	"企业",
  	"信息",
  	"嘉里大酒店",
  	"嘉里",
  	"مصر",
  	"قطر",
  	"广东",
  	"இலங்கை",
  	"இந்தியா",
  	"հայ",
  	"新加坡",
  	"فلسطين",
  	"政务",
  	"xxx",
  	"xyz",
  	"yachts",
  	"yahoo",
  	"yamaxun",
  	"yandex",
  	"ye",
  	"yodobashi",
  	"yoga",
  	"yokohama",
  	"you",
  	"youtube",
  	"yt",
  	"yun",
  	"za",
  	"zappos",
  	"zara",
  	"zero",
  	"zip",
  	"zm",
  	"zone",
  	"zuerich",
  	"zw"
  ];

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var RE2 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






  /* istanbul ignore next */


  var SafeRegExp = typeof RE2 === 'function' ? RE2 : RegExp;
  var ipv4 = ipRegex.v4().source;
  var ipv6 = ipRegex.v6().source;

  var lib = function (options) {
    options = _objectSpread({
      exact: false,
      strict: false,
      auth: false,
      localhost: true,
      parens: false,
      apostrophes: false,
      trailingPeriod: false,
      ipv4: true,
      ipv6: true,
      tlds: tlds,
      returnString: false
    }, options);
    var protocol = "(?:(?:[a-z]+:)?//)".concat(options.strict ? '' : '?'); // Add option to disable matching urls with HTTP Basic Authentication
    // <https://github.com/kevva/url-regex/pull/63>

    var auth = options.auth ? '(?:\\S+(?::\\S*)?@)?' : '';
    var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"; // Add ability to pass custom list of tlds
    // <https://github.com/kevva/url-regex/pull/66>

    var tld = "(?:\\.".concat(options.strict ? "(?:[a-z\\u00a1-\\uffff]{2,})" : "(?:".concat(options.tlds.sort(function (a, b) {
      return b.length - a.length;
    }).join('|'), ")"), ")").concat(options.trailingPeriod ? '\\.?' : '');
    var port = '(?::\\d{2,5})?'; // Not accept closing parenthesis
    // <https://github.com/kevva/url-regex/pull/35>
    // Don't allow apostrophes
    // <https://github.com/kevva/url-regex/pull/55>

    var path = options.parens ? options.apostrophes ? '(?:[/?#][^\\s"]*)?' : '(?:[/?#][^\\s"\']*)?' : options.apostrophes ? '(?:[/?#][^\\s"\\)]*)?' : '(?:[/?#][^\\s"\\)\']*)?'; // Added IPv6 support
    // <https://github.com/kevva/url-regex/issues/60>

    var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:");
    if (options.localhost) regex += 'localhost|';
    if (options.ipv4) regex += "".concat(ipv4, "|");
    if (options.ipv6) regex += "".concat(ipv6, "|");
    regex += "".concat(host).concat(domain).concat(tld, ")").concat(port).concat(path); // Add option to return the regex string instead of a RegExp

    if (options.returnString) return regex;
    return options.exact ? new SafeRegExp("(?:^".concat(regex, "$)"), 'i') : new SafeRegExp(regex, 'ig');
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".marquee[data-marquee] {\n  display: none;\n  position: absolute;\n  width: 100%;\n  z-index: 9000;\n  left: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #fff;\n}\n.marquee[data-marquee] a,\n.marquee[data-marquee] a:hover,\n.marquee[data-marquee] a:active,\n.marquee[data-marquee] a:focus {\n  text-decoration: underline;\n  color: #fff;\n}\n.marquee[data-marquee] hr {\n  margin-top: 25px;\n  border-color: rgba(255, 255, 255, 0.5);\n}";
  styleInject(css_248z);

  var _icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMi43NSAzaC0xLjVMNi41IDE0aDIuMWwuOS0yLjJoNWwuOSAyLjJoMi4xTDEyLjc1IDN6bS0yLjYyIDdMMTIgNC45OCAxMy44NyAxMGgtMy43NHptMTAuMzcgOGwtMy0zdjJINXYyaDEyLjV2MmwzLTN6Ii8+PC9zdmc+';

  var icon_disabled = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmaWxsPSIjQURBREFEIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyLjc1IDNoLTEuNUw2LjUgMTRoMi4xbC45LTIuMmg1bC45IDIuMmgyLjFMMTIuNzUgM3ptLTIuNjIgN0wxMiA0Ljk4IDEzLjg3IDEwaC0zLjc0em0xMC4zNyA4bC0zLTN2Mkg1djJoMTIuNXYybDMtM3oiLz48L3N2Zz4=';

  var Marquee = /*#__PURE__*/function (_UIContainerPlugin) {
    _inherits(Marquee, _UIContainerPlugin);

    var _super = _createSuper(Marquee);

    function Marquee(container) {
      var _this;

      _classCallCheck(this, Marquee);

      _this = _super.call(this, container);

      _this.configure();

      return _this;
    }

    _createClass(Marquee, [{
      key: "version",
      get: function get() {
        return "0.2.11";
      }
    }, {
      key: "supportedVersion",
      get: function get() {
        return {
          min: "0.4.18"
        };
      }
    }, {
      key: "name",
      get: function get() {
        return 'marquee';
      }
    }, {
      key: "attributes",
      get: function get() {
        return {
          'class': this.name,
          'data-marquee': ''
        };
      }
    }, {
      key: "events",
      get: function get() {
        return {};
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        var _this2 = this;

        this.listenTo(this.container, core.Events.CONTAINER_MEDIACONTROL_SHOW, function () {
          if (_this2.cfg && _this2.cfg.position === 'bottom') {
            // Move the marquee up such that it will not be covered by the mediacontrol
            var offset = 2 * core.$('.media-control-layer').height();
            var currentOffset = parseInt(_this2.$el.css('bottom'));

            if (currentOffset < offset) {
              _this2.$el.css('bottom', offset + 'px');
            }
          }
        });
        this.listenTo(this.container, core.Events.CONTAINER_MEDIACONTROL_HIDE, function () {
          if (_this2.cfg && _this2.cfg.position === 'bottom') {
            _this2.$el.css('bottom', _this2.cfg.offset);
          }
        });
        this.listenTo(this.container, core.Events.CONTAINER_OPTIONS_CHANGE, this.configure);
        this.listenTo(this.container, core.Events.CONTAINER_RESIZE, function () {
          _this2.pause();

          _this2.start(true);
        });
        this.listenTo(this.container, core.Events.CONTAINER_PLAY, function () {
          _this2.show();

          _this2.start(true);
        });
        this.listenTo(this.container, core.Events.CONTAINER_STOP, function () {
          _this2.hide();

          _this2.pause();
        });
        document.addEventListener('fullscreenchange', function () {
          _this2.resize();
        });
        window.addEventListener('resize', function () {
          _this2.resize();
        });
      }
    }, {
      key: "configure",
      value: function configure() {
        // Defaults
        this.cfg = {
          text: '',
          speed: 10,
          fps: 25,
          direction: 'left',
          position: 'top',
          offset: '0px',
          height: '40px',
          style: {},
          linkStyle: {},
          pauseOnHover: true
        };
        var cfg = this.options.marqueeConfig || {};

        if ('text' in cfg) {
          this.cfg.text = cfg.text;
        }

        if ('speed' in cfg) {
          this.cfg.speed = parseInt(cfg.speed);
        }

        if ('fps' in cfg) {
          this.cfg.fps = parseInt(cfg.fps);
        }

        if ('direction' in cfg) {
          if (cfg.direction === 'right') {
            this.cfg.direction = 'right';
          }
        }

        if ('style' in cfg) {
          if (_typeof(cfg.style) === 'object') {
            this.cfg.style = cfg.style;
          }
        }

        if ('linkStyle' in cfg) {
          if (_typeof(cfg.linkStyle) === 'object') {
            this.cfg.linkStyle = cfg.linkStyle;
          }
        }

        if ('pauseOnHover' in cfg) {
          this.cfg.pauseOnHover = !!cfg.pauseOnHover;
        }

        if ('position' in cfg) {
          if (cfg.position === 'bottom') {
            this.cfg.position = 'bottom';
          }
        }

        if ('offset' in cfg) {
          this.cfg.offset = cfg.offset;
        }

        if ('height' in cfg) {
          this.cfg.height = cfg.height;
        }

        this.state = {
          container: null,
          div: null,
          position: 0,
          interval: null,
          // ticker for the animation
          resize: null,
          // delay recalculation of elements during resize
          stepsize: this.cfg.speed / this.cfg.fps,
          windowWidth: 0,
          textWidth: 0
        };
        this.render();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.$el.remove();
      }
    }, {
      key: "enable",
      value: function enable() {
        this.enabled = true;
        this.show();
        this.start(true);
      }
    }, {
      key: "disable",
      value: function disable() {
        this.enabled = false;
        this.hide();
        this.pause();
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.width = '100%';
        var div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = '0px';
        var matches = [];
        var match = null; // Parse the text for links

        var re = lib({
          exact: false,
          strict: false,
          auth: false,
          localhost: false,
          parens: false,
          apostrophes: false,
          trailingPeriod: false,
          ipv4: false,
          ipv6: false,
          returnString: false
        });

        while ((match = re.exec(this.cfg.text)) !== null) {
          // This is necessary to avoid infinite loops with zero-width matches
          if (match.index === re.lastIndex) {
            re.lastIndex++;
          }

          var link = document.createElement('a');

          if (/^https?:\/\//.test(match[0])) {
            link.href = match[0];
          } else {
            link.href = 'https://' + match[0];
          }

          link.setAttribute('target', '_blank');

          for (var key in this.cfg.linkStyle) {
            link.style[key] = this.cfg.linkStyle[key];
          }

          link.append(document.createTextNode(match[0]));
          matches.push({
            element: link,
            start: match.index,
            end: re.lastIndex
          });
        }

        if (matches.length == 0) {
          div.append(document.createTextNode(this.cfg.text));
        } else {
          var pos = 0;

          var _iterator = _createForOfIteratorHelper(matches),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var m = _step.value;

              var _text = this.cfg.text.substring(pos, m.start);

              if (_text.length != 0) {
                div.append(document.createTextNode(_text));
              }

              div.append(m.element);
              pos = m.end;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var text = this.cfg.text.substring(pos);

          if (text.length != 0) {
            div.append(document.createTextNode(text));
          }
        }

        container.append(div);
        container.append(document.createElement('hr'));
        this.state.div = div;
        this.state.container = container;
        this.$el.empty();
        this.$el.append(this.state.container);

        if (this.cfg.pauseOnHover == true) {
          this.$el.mouseover(function () {
            _this3.pause();
          });
          this.$el.mouseleave(function () {
            _this3.start(false);
          });
        }

        for (var _key in this.cfg.style) {
          this.$el.css(_key, this.cfg.style[_key]);
        }

        if (this.cfg.position == 'bottom') {
          this.$el.css('bottom', this.cfg.offset);
        } else {
          this.$el.css('top', this.cfg.offset);
        }

        this.$el.css('height', this.cfg.height);
        this.$el.css('opacity', 0);
        this.$el.hide();
        this.$el.remove();
        this.container.$el.append(this.$el);
      }
    }, {
      key: "resize",
      value: function resize() {
        var _this4 = this;

        if (!this.state) {
          return;
        }

        if (this.state.resize !== null) {
          clearTimeout(this.state.resize);
          this.state.resize = null;
        }

        this.hide();
        this.pause();
        this.state.resize = setTimeout(function () {
          _this4.state.resize = null;

          _this4.show();

          _this4.start(true);
        }, 1000);
      }
    }, {
      key: "update",
      value: function update() {
        this.state.div.style.left = Math.round(this.state.position) + 'px';
      }
    }, {
      key: "show",
      value: function show() {
        if (this.enabled === true && this.cfg.text.length == 0) {
          return;
        }

        this.$el.show();
        this.$el.css('opacity', 1);
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$el.css('opacity', 0);
        this.$el.hide();
      }
    }, {
      key: "start",
      value: function start(recalculate) {
        var _this5 = this;

        if (this.state.interval !== null) {
          return;
        }

        if (recalculate === true) {
          // The width of the player (w)
          this.state.windowWidth = this.container.$el.width(); // The width of the text (t)

          this.state.textWidth = this.state.div.clientWidth; // 0        t                            w+t      w+2t
          // |--text--|------------player-----------|--text--|
          //                           <- |--text--| ->

          this.state.container.style.width = this.state.windowWidth + 2 * this.state.textWidth + 'px';
          this.state.container.style.left = -this.state.textWidth + 'px';

          if (this.cfg.direction == 'right') {
            this.state.position = 0;
          } else {
            this.state.position = this.state.windowWidth + this.state.textWidth;
          }
        }

        this.update();
        this.state.interval = setInterval(function () {
          if (_this5.cfg.direction == 'right') {
            _this5.state.position += _this5.state.stepsize;

            if (_this5.state.position >= _this5.state.windowWidth + _this5.state.textWidth) {
              _this5.state.position = 0;
            }
          } else {
            _this5.state.position -= _this5.state.stepsize;

            if (_this5.state.position <= 0) {
              _this5.state.position = _this5.state.windowWidth + _this5.state.textWidth;
            }
          }

          _this5.update();
        }, 1000 / this.cfg.fps);
      }
    }, {
      key: "pause",
      value: function pause() {
        clearInterval(this.state.interval);
        this.state.interval = null;
      } // PluginControl interface

    }, {
      key: "pluginControl",
      value: function pluginControl() {
        var self = this;

        if (this.cfg.text.length == 0) {
          return null;
        }

        return {
          icon: function icon() {
            if (self.enabled === true) {
              return _icon;
            } else {
              return icon_disabled;
            }
          },
          name: function name() {
            var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
            var name = 'Marquee';

            switch (lang) {
              case 'de':
                name = 'Lauftext';
                break;
            }

            return name;
          },
          toggle: function toggle() {
            if (self.enabled === true) {
              self.disable();
            } else {
              self.enable();
            }

            return self.enabled;
          },
          toggled: function toggled() {
            return self.enabled;
          }
        };
      }
    }]);

    return Marquee;
  }(core.UIContainerPlugin);

  return Marquee;

})));
//# sourceMappingURL=marquee.js.map
