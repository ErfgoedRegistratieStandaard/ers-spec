//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de
//--              betreffende standaard.
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie
//--			  20220712 - RdB - Fork t.b.v. ERS
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

var respecConfig =
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "unofficial",              // Not a W3C spec
  copyrightStart: 2019,
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                     // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijk Richtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "US",                   // Uitwisselings standaard
  //specType: "PS",                   // Presentatie sstandaard
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown"
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2021-06-04",  	      // Format is "YYYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
  [
    {
      name:       "Marjolein Steeman",
      company:    "FGM - Werkgroep De Databeet",
      companyURL: "https://monumentengemeenten.nl/werkgroepen-2/werkgroep-data-beet"
    },      
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors:
  [
    {
      name:       "Marjolein Steeman",
      company:    "FGM - Werkgroep De Databeet",
      companyURL: "https://monumentengemeenten.nl/werkgroepen-2/werkgroep-data-beet"
    },
    {
      name:       "Francien van Zaanen Durand",
      company:    "FGM - Werkgroep De Databeet",
      companyURL: "https://monumentengemeenten.nl/werkgroepen-2/werkgroep-data-beet"
    },   
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "ers", 	              // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  pubDomain: "ers", 	              // Erfgoed Registratie Standaard  
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/ErfgoedRegistratieStandaard/ers-spec",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/ErfgoedRegistratieStandaard/ers-spec/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://erfgoedregistratiestandaard.github.io/ers-spec/ers-respec-template.html",
  latestVersion: "https://erfgoedregistratiestandaard.github.io/ers-spec/",
  otherLinks: [
	  {
		  key: "Implementatie",
		  data: [
			  {
				  value: "YAML",
				  href: "https://erfgoedregistratiestandaard.github.io/ers-spec/yaml"
			  },
		  ],
	  },
  ],
  //-- license: voor de geldende gebruiksvoorwaarden
  license: "cc-by",              //-- bronvermelding, geen afgeleide werken (default)
  // licence: "cc0",                //-- Public Domain Dedication
  // licence: "cc-by",              //-- Attribution, met bronvermelding

  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging
  localBiblio:
  {
    "MDA":
    {
      title:      "Model Driven Architecture (MDA) Guide",
      href:       "",
      status:     "rev. 2.0, 1-6-2014",
      publisher:  "",
      company:    "Object Management Group",
    },
    "UML":
    {
      title:      "Unified Modeling Language (UML)",
      href:       "http://uml.org",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "ODM":
    {
      title:      "Ontology Definition Metamodel",
      href:       "https://www.omg.org/spec/ODM/1.1",
      status:     "versie 1.1, September 2014",
      publisher:  "",
      company:    "Object Management Group",
    },
    "OMG":
    {
      title:      "OMG Unified Modeling Language TM",
      href:       "http://www.omg.org/spec/UML/2.5",
      status:     "versie 2.5",
      publisher:  "",
      company:    "",
    },
    "SCAT":
    {
      title:      "Stelselcatalogus",
      href:       "http://www.stelselcatalogus.nl",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "GAB":
    {
      title:      "GAB",
      href:       "https://www.noraonline.nl/wiki/Gemeenschappelijke_Afspraken_Berichten",
      status:     "",
      publisher:  "",
      company:    "",
    },
	"Linked-Data":
    {
      title:      "Linked Data",
      href:       "https://www.noraonline.nl/wiki/Linked_Data",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "iso-8601":
    {
      title:      "Representation of dates and times. ISO 8601:2004.",
      href:       "http://www.iso.org/iso/catalogue_detail?csnumber=40874",
      publisher:  "International Organization for Standardization (ISO)",
      date:       "2004",
      status:     "ISO 8601:2004",
    },
    "NORA":
    {
      title:      "Handreiking gegevensbeschrijving (NORA)",
      href:       "http://noraonline.nl/wiki/Gegevensbeschrijvingen/Handreiking",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "iso-11404":
    {
      title:      "11404:2008 Information technology – General Purpose Datatypes (GPD)",
      href:       "https://www.nen.nl/nen-iso-iec-11404-2008-en-122652",
      status:     "",
      publisher:  "",
      company:    "NEN-ISO/IEC",
    },
    "REGEXP":
    {
      title:      "Formeel patroon (Reguliere Expressies)",
      href:       "http://perldoc.perl.org/perlre.html",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "OCL":
    {
      title:      "OCL",
      href:       "http://www.omg.org/spec/OCL/2.4/",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "NEN 3610":
    {
      title:      "NEN-3610 Basismodel geo-informatie",
      href:       "https://www.nen.nl/nen-3610-2022-nl-296137",
      date:       "Juni 2022",
	  status:	  "NEN 3610:2022 nl",
      publisher:  "NEN",
    },
	 "GeoJSON":
    {
      title:      "GeoJSON",
      href:       "https://geojson.org/",
      publisher:  "",
      status:     "",
      company:    "",
    },
	 "SOAP":
    {
      title:      "SOAP Specifications",
      href:       "https://www.w3.org/TR/SOAP/",
      publisher:  "",
      status:     "",
      company:    "",
    },
	 "MIM":
	{
	  title:      "MIM - Metamodel Informatie Modellering",
	  href:       "https://docs.geostandaarden.nl/mim/def-st-mim-20220217/",
	  date:       "17 februari 2022",
	  status:     "versie 1.1.1",
	  publisher:  "Geonovum",	  
	},
	 "BAG":
	{
		title:    "Catalogus Basisregistratie Adressen en Gebouwen",
		href:     "https://www.geobasisregistraties.nl/documenten/publicatie/2018/03/12/catalogus-2018",
		date:     "1 juli 2018",
		status:   "definitieve versie 1.0",
		publisher: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",		
	},
  },
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit!
  previousPublishDate: "2019-09-11",    	    // Format is "YYYY-MM-DD"
  //reviousMaturity: "GN-DEF",                 // kies 1 van deze 3 regels
  //previousMaturity: "GN-CV",                   // kies 1 van deze 3 regels
  previousMaturity: "GN-CV",  	                // kies 1 van deze 3 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  maxTocLevel: 4,                             // Aantal niveau's ToC, default is 0
};
