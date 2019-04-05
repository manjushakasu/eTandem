/* eslint no-multi-spaces: 0 */
import {Meteor} from 'meteor/meteor';
import TandemLanguageLevels from './models/TandemLanguageLevels';
import TandemLanguages from './models/TandemLanguages';

Meteor.startup(function () {

	// Developer note - language name must not contain spaces and brackets otherwise rooms and room requests cannot be created
	const languages = [
		{_id: "tdl_albanian", code: "alb", name: "Albanian"},
		{_id: "tdl_arabic", code: "ara", name: "Arabic"},
		{_id: "tdl_azerbaijani", code: "aze", name: "Azerbaijani"},
		{_id: "tdl_basque", code: "baq", name: "Basque"},
		{_id: "tdl_belarusian", code: "bel", name: "Belarusian"},
		{_id: "tdl_bengali", code: "ben", name: "Bengali (Bangla)"},
		{_id: "tdl_bosnian", code: "bos", name: "Bosnian"},
		{_id: "tdl_bulgarian", code: "bul", name: "Bulgarian"},
		{_id: "tdl_burmese", code: "bur", name: "Burmese"},
		{_id: "tdl_catalan", code: "cat", name: "Catalan"},
		{_id: "tdl_corsican", code: "cos", name: "Corsican"},
		{_id: "tdl_croatian", code: "hrv", name: "Croatian"},
		{_id: "tdl_czech", code: "ces", name: "Czech"},
		{_id: "tdl_danish", code: "dan", name: "Danish"},
		{_id: "tdl_dutch", code: "nld", name: "Dutch"},
		{_id: "tdl_english", code: "eng", name: "English"},
		{_id: "tdl_estonian", code: "est", name: "Estonian"},
		{_id: "tdl_faroese", code: "fao", name: "Faroese"},
		{_id: "tdl_finnish", code: "fin", name: "Finnish"},
		{_id: "tdl_french", code: "fra", name: "French"},
		{_id: "tdl_frisian", code: "fry", name: "Frisian"},
		{_id: "tdl_germany", code: "deu", name: "Germany"},
		{_id: "tdl_greek", code: "ell", name: "Greek"},
		{_id: "tdl_gujarati", code: "guj", name: "Gujarati"},
		{_id: "tdl_haitian", code: "hat", name: "Haitian"},
		{_id: "tdl_hebrew", code: "heb", name: "Hebrew"},
		{_id: "tdl_hausa", code: "hau", name: "Hausa"},
		{_id: "tdl_hiligaynon", code: "hil", name: "Hiligaynon"},
		{_id: "tdl_hindi", code: "hin", name: "Hindi"},
		{_id: "tdl_hungarian", code: "hun", name: "Hungarian"},
		{_id: "tdl_icelandic", code: "ice", name: "Icelandic"},
		{_id: "tdl_italian", code: "ita", name: "Italian"},
		{_id: "tdl_irish", code: "gle", name: "Irish"},
		{_id: "tdl_japanese", code: "jpn", name: "Japanese"},
		{_id: "tdl_javanese", code: "jav", name: "Javanese"},
		{_id: "tdl_karelian", code: "krl", name: "Karelian"},
		{_id: "tdl_kazakh", code: "kaz", name: "Kazakh"},
		{_id: "tdl_khmer", code: "khm", name: "Khmer"},
		{_id: "tdl_korean", code: "kor", name: "Korean"},
		{_id: "tdl_kurdish", code: "kur", name: "Kurdish"},
		{_id: "tdl_latin", code: "lat", name: "Latin"},
		{_id: "tdl_latvian", code: "lav", name: "Latvian"},
		{_id: "tdl_lithuanian", code: "lit", name: "Lithuanian"},
		{_id: "tdl_luxebourgish", code: "ltz", name: "Luxebourgish"},
		{_id: "tdl_macedonian", code: "mac", name: "Macedonian"},
		{_id: "tdl_malay", code: "may", name: "Malay"},
		{_id: "tdl_malayalam", code: "mak", name: "Malayalam"},
		{_id: "tdl_maltese", code: "mlt", name: "Maltese"},
		{_id: "tdl_mandarin", code: "cmn", name: "Chinese,\x20Mandarin"},
		{_id: "tdl_marathi", code: "mar", name: "Marathi"},
		{_id: "tdl_mari", code: "chm", name: "Mari"},
		// {_id: "tdl_monterigin", code: "", name: "Monterigin"},
		{_id: "tdl_nepali", code: "nep", name: "Nepali"},
		{_id: "tdl_norwegian", code: "nor", name: "Norwegian"},
		{_id: "tdl_persian", code: "fas", name: "Persian"},
		{_id: "tdl_polish", code: "pol", name: "Polish"},
		{_id: "tdl_portuguese", code: "por", name: "Portuguese"},
		{_id: "tdl_punjabi", code: "pan", name: "Punjabi"},
		{_id: "tdl_rhaeto_romance", code: "rre", name: "RhaetoRomance"},
		{_id: "tdl_romani", code: "rom", name: "Romani"},
		{_id: "tdl_romanian", code: "ron", name: "Romanian"},
		{_id: "tdl_russian", code: "rus", name: "Russian"},
		{_id: "tdl_sami", code: "smi", name: "Sami (the Finnish variants)"},
		{_id: "tdl_sardinian", code: "srd", name: "Sardinian"},
		{_id: "tdl_scottish", code: "sco", name: "Scottish"},
		{_id: "tdl_scottish_g", code: "gla", name: "ScottishGaleic"},
		{_id: "tdl_serbian", code: "srp", name: "Serbian"},
		{_id: "tdl_sicilian", code: "scn", name: "Sicilian"},
		{_id: "tdl_silesian", code: "szl", name: "Silesian"},
		{_id: "tdl_sindhi", code: "snd", name: "Sindhi"},
		{_id: "tdl_sinhalese", code: "sin", name: "Sinhalese"},
		{_id: "tdl_slovak", code: "slk", name: "Slovak"},
		{_id: "tdl_slovenian", code: "slv", name: "Slovene"},
		{_id: "tdl_somali", code: "som", name: "Somali"},
		{_id: "tdl_spanish", code: "spa", name: "Spanish"},
		{_id: "tdl_sundanese", code: "sun", name: "Sundanese"},
		{_id: "tdl_swahili", code: "swa", name: "Swahili"},
		{_id: "tdl_swedish", code: "swe", name: "Swedish"},
		{_id: "tdl_tagalog", code: "tgl", name: "Tagalog (Filipino)"},
		{_id: "tdl_tamil", code: "tam", name: "Tamil"},
		{_id: "tdl_tatar", code: "tat", name: "Tatar"},
		{_id: "tdl_telugu", code: "tel", name: "Telugu"},
		{_id: "tdl_thai", code: "tha", name: "Thai"},
		{_id: "tdl_turkish", code: "tur", name: "Turkish"},
		{_id: "tdl_turkmen", code: "tuk", name: "Turkmen"},
		{_id: "tdl_urdmurt", code: "ukr", name: "Urdmurt"},
		{_id: "tdl_ukrainian", code: "ukr", name: "Ukrainian"},
		{_id: "tdl_urdu", code: "urd", name: "Urdu"},
		{_id: "tdl_uyghur", code: "uig", name: "Uyghur"},
		{_id: "tdl_uzbek", code: "uzb", name: "Uzbek"},
		{_id: "tdl_vietnamese", code: "vie", name: "Vietnamese"},
		{_id: "tdl_welsh", code: "wel", name: "Welsh"},
		{_id: "tdl_xhosa", code: "xho", name: "Xhosa"},
		{_id: "tdl_yiddish", code: "yid", name: "Yiddish"},
		{_id: "tdl_yue", code: "yue", name: "Chinese,\x20Yue"},
		{_id: "tdl_zulu", code: "zul", name: "Zulu"},
	];

	for (const language of languages) {
		if (!TandemLanguages.findOneById(language._id)) {
			TandemLanguages.upsert(language._id, {$set: language});
		}
	}


	const languageLevels = [
		{_id: "tdll_a1", level: "A1"},
		{_id: "tdll_a2", level: "A2"},
		{_id: "tdll_b1", level: "B1"},
		{_id: "tdll_b2", level: "B2"},
		{_id: "tdll_c1", level: "C1"},
		{_id: "tdll_c2", level: "C2"},
	];

	for (const languageLevel of languageLevels) {
		if (!TandemLanguageLevels.findOneById(languageLevel._id)) {
			TandemLanguageLevels.upsert(languageLevel._id, {$set: languageLevel});
		}
	}
});
