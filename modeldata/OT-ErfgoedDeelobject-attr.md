### Attribuutsoorten
#### type
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | type |
| **Datatype** | ErfgoedDeelobjectType |
| **Herkomst** | ERS |
| **Definitie** | Typering van de fysieke verschijningsvorm van het deelobject zoals constructief deel van het gebouw of element dat op/aan/in het object is verbonden (kunst, interieur) |
| **Herkomst definitie** | ERS |
| **Toelichting** | vgl Klassen Functioneel gebied: begrensd en benoemd gebied dat door een functionele eenheid wordt beschreven. Vb: bedrijventerrein, bungalowpark, plantsoen, begraafplaats, jachthaven, windmolenpark, recreatiegebied. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Indicatie classificerend** | Ja |

#### contour
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | contour |
| **Datatype** | VlakOfMultivlak |
| **Herkomst** | ERS |
| **Definitie** | de tweedimensionale geometrische representatie van het vlak dat wordt gevormd door de omtrekken van een ErfgoedDeelObject. |
| **Herkomst definitie** | BAG |
| **Toelichting** | Een samengesteld geometriegegevenstype waarbij wordt afgedwongen dat voor de geometrie een keuze gemaakt moet worden tussen een vlak (Polygon) of een multivlak (MultiPolygon), conform ISO/IEC 13249-3:2016. Deze standaard beschrijft de vastlegging in WKT-formaat.<br />Alleen geometrieën die voldoen aan het Simple Features profile conform ISO 19125-1:2004 zijn toegestaan.<br /><br />Het toegepaste coördinatenstelsel is dat van de Rijksdriehoeksmeting (RD-stelsel). De coördinaten zijn op de millimeter nauwkeurig en de eenheid is meter. Elk coördinaat heeft maximaal drie decimalen. Zo nodig wordt daarvoor afgerond. Wanneer de bron voor een geometrie beperkt is tot een punt of een lijn, kan deze als vlak worden geregistreerd door een buffer toe te voegen. Daarbij wordt de breedte van de buffer geschat. |
| **Datum opname** | 20191001 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### bronContour
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | bronContour |
| **Datatype** | CharacterString |
| **Herkomst** | ERS |
| **Definitie** | De registratie of het informatiemodel waaraan de contour ontleend is dan wel de eigen organisatie indien het door de eigen organisatie toegevoegd is. |
| **Herkomst definitie** | ERS |
| **Toelichting** |  |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### puntCoördinaten
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | puntCoördinaten |
| **Datatype** | GM_Point |
| **Herkomst** | ERS |
| **Definitie** | De geometrische representatie van een punt dat zich binnen de omtrek(ken) van een ErfgoedObject bevindt. |
| **Herkomst definitie** | ERS |
| **Toelichting** | de puntcoördinaten worden vastgelegd in WKT-formaat conform ISO/IEC 13249-3:2016. Dit betekent dat het veld als volgt is opgebouwd: POINT (x-coördinaat y-coördinaat). Bijvoorbeeld: POINT (136840.123 455874.123) voor de Dom in Utrecht. Multipoints zijn niet toegestaan. Het toegepaste coördinatenstelsel is dat van de Rijksdriehoeksmeting (RD-stelsel). De coördinaten zijn op de millimeter nauwkeurig en de eenheid is meter. Elk coördinaat heeft maximaal drie decimalen. Zo nodig wordt daarvoor afgerond. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |

#### betreftPand
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | betreftPand |
| **Datatype** | Objectnummering (BAG) |
| **Herkomst** | ERS |
| **Definitie** | Alleen gevuld indien het deelobject een pand is (conform de definitie van een pand in de BAG) |
| **Herkomst definitie** | ERS |
| **Toelichting** | verwijzing naar de landelijke PandIdentificatie; alleen mogelijk indien het DeelErfgoedObject van het type Pand is; tenzij de pandcontour in de BAG onjuist is (bijvoorbeeld te ruim is ten opzichte het oorspronkelijke historische pand dat is aangewezen). In dat geval kan een eigen 'maatwerk' contour te worden aangeleverd.<br /><br />Het verwijzen naar een BAGpand(en) is op het niveau van DeelErfgoedObject niet verplicht; het aanleveren van een contour is ook niet verplicht. als een BAGPand wordt aangeleverd dan wordt de contour van dit pand automatisch overgenomen. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..* |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### betreftBGT
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | betreftBGT |
| **Datatype** | BGTIdentificatie |
| **Herkomst** | ERS |
| **Definitie** | Gevuld indien het object geen pand is, maar een ander object uit de BGT, waarbij je de contour uit de BGT op zal willen halen |
| **Herkomst definitie** | ERS |
| **Toelichting** | verwijzing naar de landelijke BGTIdentificatie; kan alleen gebruikt worden indien het DeelErfgoedObject niet van het type Pand is |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..* |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### jaarBegin
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | jaarBegin |
| **Datatype** | Year |
| **Herkomst** | ERS |
| **Definitie** | Jaartal begin materi&#235;le levensduur van het deelobject |
| **Herkomst definitie** | ERS |
| **Toelichting** | het begin van de levensduur van het deelobject wordt bepaald door het ontstaan van de erfgoedwaarde. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### jaarEind
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | jaarEind |
| **Datatype** | Year |
| **Herkomst** | ERS |
| **Definitie** | Jaartal einde materi&#235;le levensduur van het deelobject |
| **Herkomst definitie** | ERS |
| **Toelichting** | het einde van de levensduur van het deelobject wordt bepaald door het verdwijnen van de erfgoedwaarde (bijvoorbeeld door sloop of aanpassingen). Na beeindiging van de levensduur kan de registratie nog voortduren. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### annotatieJaarBegin
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | annotatieJaarBegin |
| **Datatype** | JaarAnnotatie |
| **Herkomst** | ERS |
| **Definitie** | Opmerking betreffende de precisie van de gegeven jaar |
| **Herkomst definitie** | ERS |
| **Toelichting** | Niet altijd is het jaartal exact bekend; soms is alleen een tijdvak te duiden of een geschatte periode voor/na een bepaald jaar. Met een (standaard) annotatie is aan te geven welk moment en met welke precisie het bouwjaar gegeven is. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### annotatieJaarEind
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | annotatieJaarEind |
| **Datatype** | JaarAnnotatie |
| **Herkomst** | ERS |
| **Definitie** | Opmerking betreffende de precisie van de gegeven jaar |
| **Herkomst definitie** | ERS |
| **Toelichting** | Niet altijd is het jaartal exact bekend; soms is alleen een tijdvak te duiden of een geschatte periode voor/na een bepaald jaar. Met een (standaard) annotatie is aan te geven welk moment en met welke precisie het bouwjaar gegeven is. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### naam
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | naam |
| **Datatype** | CharacterString |
| **Herkomst** | ERS |
| **Definitie** | Naam waaronder het object bekend staat |
| **Herkomst definitie** | ERS |
| **Toelichting** | cultuurhistorische naam; bij voorkeur de naam die aansluit bij de oorspronkelijke functie |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### beschrijving
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | beschrijving |
| **Datatype** | CharacterString |
| **Herkomst** | ERS |
| **Definitie** | Beschrijving van (bouw)type, geschiedenis, architectonische verschijningsvorm en/ of stedebouwkundige en cultuurhistorische context |
| **Herkomst definitie** | ERS |
| **Toelichting** |  |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### aanwezig
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | aanwezig |
| **Datatype** | Aanwezigheid |
| **Herkomst** |  |
| **Definitie** | Kwalificatie van de materi&#235;le aanwezigheid van het ErfgoedDeelobject |
| **Herkomst definitie** |  |
| **Toelichting** | Kwalificatie die de actuele staat van het ErfgoedDeelobject relativeert en dient als aangrijpingspunt voor duiding van de aanwezige waarde. De contour van een verdwenen, verplaatst of verschoven ErfgoedDeelobject toont de oorspronkelijk locatie. |
| **Datum opname** |  |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** |  |

#### architectOntwerp
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | architectOntwerp |
| **Datatype** | CharacterString |
| **Herkomst** | ERS |
| **Definitie** | Degene die ontwerper is van het object, die dit ontwerp visualiseert (op tekening zet) en die de verwerkelijking van dit concept technisch en administratief begeleidt |
| **Herkomst definitie** | ERS |
| **Toelichting** | alleen indien afwijkend (nader specificerend) tov het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### opdrachtgeverBouw
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | opdrachtgeverBouw |
| **Datatype** | CharacterString |
| **Herkomst** | ERS |
| **Definitie** | Degene die de opdracht heeft gegeven tot ontwerp en realisatie van het deelobject |
| **Herkomst definitie** | ERS |
| **Toelichting** | alleen indien afwijkend (nader specificerend) tov het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### uitvoerendKunstenaar
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | uitvoerendKunstenaar |
| **Datatype** | CharacterString |
| **Herkomst** | ERS |
| **Definitie** | De schepper van een beeldhouwwerk (als objectType) |
| **Herkomst definitie** | ERS |
| **Toelichting** | alleen indien afwijkend (nader specificerend) tov het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### oorspronkelijkeFunctie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | oorspronkelijkeFunctie |
| **Datatype** | Functie |
| **Herkomst** | ERS |
| **Definitie** | Indeling naar functie(s) die leidend zijn geweest in het ontwerp en de realisatie van het object. |
| **Herkomst definitie** | ERS |
| **Toelichting** | alleen indien afwijkend (nader specificerend) tov het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..* |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### gebouwtype
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | gebouwtype |
| **Datatype** | Gebouwtype |
| **Herkomst** | ERS |
| **Definitie** | Indeling naar aard van het gebouw |
| **Herkomst definitie** | ERS |
| **Toelichting** | vb: bungalow, grachtenhuis, hofjeswoning, villa, woonblok ontleend aan RCE indeling woningen en woningbouwcomplexen; alleen indien afwijkend van het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..* |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### bouwstijl
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | bouwstijl |
| **Datatype** | Bouwstijl |
| **Herkomst** | ERS |
| **Definitie** | Indeling naar stijlperiode of stroming |
| **Herkomst definitie** | ERS |
| **Toelichting** | vb: chaletstijl, nieuwe bouwen, art nouveau, modernisme; alleen indien afwijkend van het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..* |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

