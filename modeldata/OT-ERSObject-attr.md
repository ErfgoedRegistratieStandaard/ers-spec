### Attribuutsoorten
#### identificatie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | identificatie |
| **Datatype** | NEN3610ID |
| **Herkomst** | ERS |
| **Definitie** | attribuut voor unieke identificatie volgens NEN 3610 |
| **Herkomst definitie** | NEN3610 |
| **Toelichting** | Door het systeem wordt aan de identificatie een Namespace toegevoegd.<br />Namespace: een unieke verwijzing naar de registratie die de identificatie uitdeelt (de bronhouder). Deze lijst van registraties wordt beheerd binnen de context van NEN 3610.<br /><br />Binnen Nederland zal deze namespace vrijwel altijd met ‘NL’ beginnen.<br />Lokaal id: unieke identificatiecode binnen de registratie van de bronhouder. Deze is verplicht omdat een nieuwe aanlevering (update) altijd per object herleidbaar moet zijn naar de eerdere aanlevering.<br /><br />Ook records die gegevens over Rijksmonumenten bevatten krijgen de Namespace van de aanleverende partij (betreffende gemeente). |
| **Datum opname** | 20191001 |
| **Authentiek** | Overig |
| **Identificerend** | Ja |

#### bronhouder
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | bronhouder |
| **Datatype** | CharacterString |
| **Herkomst** | ERS |
| **Definitie** | Naam van de gemeente die de bronhouder is voor het object. |
| **Herkomst definitie** | ERS |
| **Toelichting** | De (naam van de) bronhouder kan wijzigen als gevolg van gemeentelijke herindelingen. |
| **Datum opname** | 20221202 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |

#### tijdstipRegistratie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | tijdstipRegistratie |
| **Datatype** | DateTime |
| **Herkomst** | ERS |
| **Definitie** | Tijdstip waarop deze instantie van het object is opgenomen in de registratie |
| **Herkomst definitie** | ERS |
| **Toelichting** | Begindatum en -tijd van de registratie van het object. De begintijd is het moment dat de registratie voor het eerst is aangemaakt. |
| **Datum opname** | 20220701 |
| **Authentiek** | Overig |

#### eindRegistratie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | eindRegistratie |
| **Datatype** | DateTime |
| **Herkomst** | ERS |
| **Definitie** | Formele levensduur van het omgevingselement |
| **Herkomst definitie** | ERS |
| **Toelichting** | Einddatum en -tijd van de registratie van het object. Zolang de eindtijd niet is ingevuld is de registratie aanwezig en voor gebruik raadpleegbaar. |
| **Datum opname** | 20220701 |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

