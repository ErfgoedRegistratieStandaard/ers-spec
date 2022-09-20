### Attribuutsoorten
#### type
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | type |
| **Herkomst** | ERS |
| **Definitie** | Typering van de fysieke verschijningsvorm van het deelobject zoals constructief deel van het gebouw of element dat op/aan/in het object is verbonden (kunst, interieur) |
| **Herkomst definitie** | ERS |
| **Toelichting** | vgl Klassen Functioneel gebied: begrensd en benoemd gebied dat door een functionele eenheid wordt beschreven. Vb: bedrijventerrein, bungalowpark, plantsoen, begraafplaats, jachthaven, windmolenpark, recreatiegebied. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Indicatie classificerend** | Ja |

#### aanwezig
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | aanwezig |
| **Herkomst** |  |
| **Definitie** |  |
| **Herkomst definitie** |  |
| **Toelichting** |  |
| **Datum opname** |  |
| **Indicatie formele historie** | Ja |
| **Authentiek** |  |

#### contour
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | contour |
| **Herkomst** | ERS |
| **Definitie** | Ruimtelijke contour en ligging van het object in het Rijksdriehoekstelsel (bovenaanzicht, zoals in de BAG) |
| **Herkomst definitie** | ERS |
| **Toelichting** | mogelijk formaat: wkt bij aanlevering als xml of xls bij aanlevering als gisbestand is de geometrie formaatspecifiek. |
| **Datum opname** | 20191001 |
| **Indicatie materiële historie** | Ja |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### broncontour
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | broncontour |
| **Herkomst** | ERS |
| **Definitie** | Toelichting op de contour. Waar is deze op gebaseerd? Bijvoorbeeld een historische kaart, de BGT, etc. |
| **Herkomst definitie** | ERS |
| **Toelichting** |  |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### puntcoördinaten
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | puntcoördinaten |
| **Herkomst** | ERS |
| **Definitie** | De X- en Y-co&#246;rdinaat die als co&#246;rdinatenpaar de ligging van het monument representeert in het Rijksdriehoekstelsel |
| **Herkomst definitie** | ERS |
| **Toelichting** | mogelijk formaat: wkt bij aanlevering als xml of xls bij aanlevering als gisbestand is de geometrie formaatspecifiek. MULTIPOINT wordt niet geaccepteerd. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |

#### betreftPand
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | betreftPand |
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
| **Herkomst** | ERS |
| **Definitie** | Jaartal begin materi&#235;le levensduur van het deelobject |
| **Herkomst definitie** | ERS |
| **Toelichting** | het begin van de levensduur van het deelobject wordt bepaald door het ontstaan van de erfgoedwaarde. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### jaarEind
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | jaarEind |
| **Herkomst** | ERS |
| **Definitie** | Jaartal einde materi&#235;le levensduur van het deelobject |
| **Herkomst definitie** | ERS |
| **Toelichting** | het einde van de levensduur van het deelobject wordt bepaald door het verdwijnen van de erfgoedwaarde (bijvoorbeeld door sloop of aanpassingen). Na beeindiging van de levensduur kan de registratie nog voortduren. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### annotatieJaarBegin
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | annotatieJaarBegin |
| **Herkomst** | ERS |
| **Definitie** | Opmerking betreffende de precisie van de gegeven jaar |
| **Herkomst definitie** | ERS |
| **Toelichting** | Niet altijd is het jaartal exact bekend; soms is alleen een tijdvak te duiden of een geschatte periode voor/na een bepaald jaar. Met een (standaard) annotatie is aan te geven welk moment en met welke precisie het bouwjaar gegeven is. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### annotatieJaarEind
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | annotatieJaarEind |
| **Herkomst** | ERS |
| **Definitie** | Opmerking betreffende de precisie van de gegeven jaar |
| **Herkomst definitie** | ERS |
| **Toelichting** | Niet altijd is het jaartal exact bekend; soms is alleen een tijdvak te duiden of een geschatte periode voor/na een bepaald jaar. Met een (standaard) annotatie is aan te geven welk moment en met welke precisie het bouwjaar gegeven is. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### naam
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | naam |
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
| **Herkomst** | ERS |
| **Definitie** | Beschrijving van (bouw)type, geschiedenis, architectonische verschijningsvorm en/ of stedebouwkundige en cultuurhistorische context |
| **Herkomst definitie** | ERS |
| **Toelichting** |  |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### architectOntwerp
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | architectOntwerp |
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
| **Herkomst** | ERS |
| **Definitie** | De schepper van een beeldhouwwerk (als objectType) |
| **Herkomst definitie** | ERS |
| **Toelichting** | alleen indien afwijkend (nader specificerend) tov het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### oospronkelijkeFunctie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | oospronkelijkeFunctie |
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
| **Herkomst** | ERS |
| **Definitie** | Indeling naar stijlperiode of stroming |
| **Herkomst definitie** | ERS |
| **Toelichting** | vb: chaletstijl, nieuwe bouwen, art nouveau, modernisme; alleen indien afwijkend van het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..* |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

