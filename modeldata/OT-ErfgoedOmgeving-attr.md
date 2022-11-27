### Attribuutsoorten
#### type
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | type |
| **Herkomst** | ERS |
| **Definitie** | Indeling van omgeving naar de ruimtelijke betekenis van de omgeving voor het ErfgoedObject. |
| **Herkomst definitie** | ERS |
| **Toelichting** | De ruimtelijke betekenis van de omgeving voor een ErfgoedObject kan van belang zijn voor de bescherming en daarmee voor de regels of de toepassing van regels die deze bescherming moeten bewerkstelligen. Het type bepaalt ook of de ErfgoedOmgeving een eigen contour heeft. |
| **Datum opname** | 20191001 |
| **Authentiek** | Overig |
| **Indicatie classificerend** | Ja |

#### contour
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | contour |
| **Herkomst** | ERS |
| **Definitie** | De tweedimensionale geometrische representatie van het vlak dat wordt gevormd door de omtrekken van een ErfgoedOmgeving. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Een samengesteld geometriegegevenstype waarbij wordt afgedwongen dat voor de geometrie een keuze gemaakt moet worden tussen een vlak (Polygon) of een multivlak (MultiPolygon), conform ISO/IEC 13249-3:2016. Deze standaard beschrijft de vastlegging in WKT-formaat.<br />Alleen geometrieën die voldoen aan het Simple Features profile conform ISO 19125-1:2004 zijn toegestaan.<br />Het toegepaste coördinatenstelsel is dat van de Rijksdriehoeksmeting (RD-stelsel). De coördinaten zijn op de millimeter nauwkeurig en de eenheid is meter. Elk coördinaat heeft maximaal drie decimalen. Zo nodig wordt daarvoor afgerond. Wanneer de bron voor een geometrie beperkt is tot een punt of een lijn, kan deze als vlak worden geregistreerd door een buffer toe te voegen. Daarbij wordt de breedte van de buffer geschat.<br />De aanwezigheid van een contour is afhankelijk van het type. Wanneer type=complex, dan heeft het OmgevingsObject geen eigen contour. Bij de overige types heeft het OmgevingsObject in principe wel een contour. |
| **Datum opname** | 20191001 |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### naam
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | naam |
| **Herkomst** | ERS |
| **Definitie** | Naam waaronder het OmgevingsObject bekend staat. |
| **Herkomst definitie** | ERS |
| **Toelichting** | De naam van een complex kan overeenkomen met de naam van een van de samenstellende ErfgoedObjecten. Ten behoeve van de registratie kan een naam worden toegekend of van het ErfgoedObject herhaald. |
| **Datum opname** | 20191001 |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### beschrijving
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | beschrijving |
| **Herkomst** | ERS |
| **Definitie** | Beschrijving van de aard, verschijningsvorm, bron of oorsprong en eventueel beoogde bescherming van het OmgevingsObject. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Naar keuze in te vullen vrije tekst. |
| **Datum opname** | 20191001 |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

