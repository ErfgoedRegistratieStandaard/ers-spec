### Attribuutsoorten
#### aardRegistratie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | aardRegistratie |
| **Herkomst** | ERS |
| **Definitie** | Verwijzing naar de materi&#235;le levensduur en bescherming van het ErfgoedObject. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Deze informatie is van belang voor de beleidsmatige betekenis van de registratie. Bijvoorbeeld om een antwoord te vinden op de mate van bescherming en de mate van zekerheid omtrent de aanwezigheid van cultuurhistorische waarden. Zie ook de toelichting onder Registratiekenmerken. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |

#### beschermdAls
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | beschermdAls |
| **Herkomst** | ERS |
| **Definitie** | Beschermde status van het ErfgoedObject<br /><br />Verplicht gevuld in combinatie met aardRegistratie=beschermd |
| **Herkomst definitie** | ERS |
| **Toelichting** | een ErfgoedObject heeft maximaal 1 beschermde status.<br />Bij de overgang van In procedure naar definitief wordt de aanwijzingsdatum gevuld.<br />Bij NietAanwijzen en Afvoeren wordt de status verwijderd; ook aardRegistratie dient dan te worden aangepast. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### beschermdDoor
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | beschermdDoor |
| **Herkomst** | ERS |
| **Definitie** | Bevoegd gezag dat de status toekent<br />Verplicht gevuld in combinatie met aardRegistratie=beschermd |
| **Herkomst definitie** | ERS |
| **Toelichting** | wanneer een status wordt 'overgenomen' door het Rijk (wat soms gebeurt bij monumenten) dan ontstaat een situatie van afvoeren van de ene lijst en opvoeren op de andere lijst. De bescherming als Rijksmonument gaat 'boven' de bescherming als Gemeentelijk monument. De betreffende datumvelden worden overschreven zodat deze betrekking hebben op de 'hoogst' beschermde status. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### datumInProcedure
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | datumInProcedure |
| **Herkomst** | ERS |
| **Definitie** | Datum waarop voor het object de procedure tot aanwijzing als monument is gestart en de beschermde status in werking treedt |
| **Herkomst definitie** | ERS |
| **Toelichting** | dient gevuld indien vanaf de start van de procedure de beschermende werking intreedt |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### datumAanwijzing
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | datumAanwijzing |
| **Herkomst** | ERS |
| **Definitie** | Datum waarop het object is aangewezen als monument cq de beschermende status in werking treedt |
| **Herkomst definitie** | ERS |
| **Toelichting** | verplicht indien sprake is van een beschermende werking |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### datumNietAanwijzen
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | datumNietAanwijzen |
| **Herkomst** | ERS |
| **Definitie** | Datum waarop als onderdeel van de procedure is besloten tot niet aanwijzen |
| **Herkomst definitie** | ERS |
| **Toelichting** | verplicht indien vanaf de start van de procedure de beschermende werking intrad en deze met dit besluit wordt opgeheven |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### datumAfvoeren
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | datumAfvoeren |
| **Herkomst** | ERS |
| **Definitie** | Datum waarop de beschermde status van het object is opgeheven middels een besluit |
| **Herkomst definitie** | ERS |
| **Toelichting** | verplicht indien hiermee de geregistreerde beschermende werking is opgeheven |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### toelichtingProcedure
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | toelichtingProcedure |
| **Herkomst** | ERS |
| **Definitie** | Aantekening van de beschermde status die is opgeheven met eventueel een toelichting op de reden van be&#235;indiging |
| **Herkomst definitie** | ERS |
| **Toelichting** | verplicht in combinatie met datumNietAanwijzen en datumAfvoeren<br />ook te gebruiken om de gegevens van een eerder doorlopen procedure vast te leggen, indien van toepassing |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### grondslag
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | grondslag |
| **Herkomst** | ERS |
| **Definitie** | Verwijzing naar het identificerende nummer waarmee dit object is aangewezen als gemeentelijk monument |
| **Herkomst definitie** | ERS |
| **Toelichting** | verwijzing naar het identificerende nr in de landelijke voorziening;<br />verplicht indien het een Gemeentelijk Monument betreft.<br />Het besluit verwijst naar de betreffende percelen (werkingsgebied); die koppeling wordt (vooralsnog) onderhouden in de Wkpb |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### monumentnummer
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | monumentnummer |
| **Herkomst** | ERS |
| **Definitie** | Nummer, toegekend door de bronhouder van monumentregistraties (gemeente of RCE) |
| **Herkomst definitie** | ERS |
| **Toelichting** | verplicht bij gemeentelijk monumenten en rijksmonumenten<br />bij gemeentelijk monumenten wordt door het systeem een gemeentecode toegevoegd bij rijksmonumenten wordt het nummer voorafgegaan door een landelijke code |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### inOnderzoek
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | inOnderzoek |
| **Herkomst** |  |
| **Definitie** | Hiermee wordt aangegeven dat een onderzoek wordt uitgevoerd naar de juistheid van een of meer gegevens van het betreffende object |
| **Herkomst definitie** |  |
| **Toelichting** | Onderzoek naar de juistheid van de registratie. Dit kan zijn nav een interne terugmelding bij de gemeente, of (toekomst) nav een terugmelding door de landelijke service.<br />Default: nee |
| **Datum opname** |  |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** |  |

#### type
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | type |
| **Herkomst** | ERS |
| **Definitie** | Typering van de fysieke verschijningsvorm van het object<br />Dit veld is verplicht. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Met het type van een ErfgoedObject kan bijvoorbeeld een grove legenda worden gemaakt voor het weergeven van terreinen, gebouwd erfgoed en losse elementen. Het onderscheid tussen panden en bouwwerken is van belang omdat alleen type=pand een koppeling kan hebben met een of meer pandID's in de BAG. Een bouwwerk daarentegen heeft altijd een maatwerkcontour en is niet adresseerbaar. Verder is met park/terrein versus gebied beoogd om grotere cultuurhistorische gebieden te kunnen onderscheiden van een specifieke aanleg/inrichting, zoals bijvoorbeeld een begraafplaats of een tuin.<br /><br />Nota Bene: een ErfgoedObject behoort tot één objectType. Wanneer sprake is van samenhang tussen objecten met verschillende objectTypes kan dat met behulp van ErfgoedOmgeving (bijvoorbeeld type Complex) worden vastgelegd. Dus een pand met een tuin wordt niet als één ErfgoedObject beschreven. Hier gelden 2 opties:<br />1 pand en 1 park/terrein, samen onder 1 ErfgoedOmgeving, omgevingstype Complex<br />of: 1 pand met 1 ErfgoedOmgeving, omgevingstype Biotoop, waarin de ruimere contour inclusief tuin is begrepen |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Indicatie classificerend** | Ja |

#### contour
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | contour |
| **Herkomst** | ERS |
| **Definitie** | Ruimtelijke contour en ligging van het object in het<br />Rijksdriehoekstelsel (bovenaanzicht, zo-als in de BAG).<br />Aanlevering van een contour is zeer wenselijk (doch nog niet verplicht) |
| **Herkomst definitie** | ERS |
| **Toelichting** | mogelijk formaat: wkt bij aanlevering als xml of xls<br />bij aanlevering als gisbestand is de geometrie formaatspecifiek (nog te bepalen welke formaten worden geaccepteerd) of GML<br />Indien Betreft >BAGpand is gevuld, is de geometrie gelijk aan de BAGpandcountour zal de geometrie worden opgehaald uit de BAG; deze hoeft hier dan niet ingevuld te worden. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### broncontour
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | broncontour |
| **Herkomst** | ERS |
| **Definitie** | Toelichting op de herkomst van de contour.<br />Verplicht als een contour wordt aangeleverd. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Waar is de contour op gebaseerd? Bijvoorbeeld een historische kaart, de BGT, handwerk, etc. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### puntCoördinaten
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | puntCoördinaten |
| **Herkomst** | ERS |
| **Definitie** | De X- en Y-co&#246;rdinaat die als co&#246;rdinatenpaar de ligging van het monument representeert in het Rijksdriehoekstelsel |
| **Herkomst definitie** | ERS |
| **Toelichting** | mogelijk formaat: wkt bij aanlevering als xml of xls<br />bij aanlevering als gisbestand is de geometrie formaatspecifiek.<br />MULTIPOINT wordt niet geaccepteerd<br />bij aanlevering van een contour kan een puntcoördinaat worden afgeleid; afzonderlijk aanleveren is dan niet verplicht |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |

#### betreftPand
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | betreftPand |
| **Herkomst** | ERS |
| **Definitie** | Alleen gevuld indien het object een pand is (conform de definitie van een pand in de BAG) |
| **Herkomst definitie** | ERS |
| **Toelichting** | verwijzing naar de landelijke PandIdentificatie; verplicht indien het ErfgoedObject van het type Pand is; tenzij de pandcontour in de BAG onjuist is (bijvoorbeeld te ruim is ten opzichte het oorspronkelijke historische pand dat is aangewezen). In dat geval dient een eigen 'maatwerk' contour te worden aangeleverd.<br /><br />een ErfgoedObject kan naar meerdere BAGPanden verwijzen. De BAGPanden vormen samen één contour die geldt voor het ErfgoedObject |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 1..* |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### betreftBGT
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | betreftBGT |
| **Herkomst** | ERS |
| **Definitie** | Gevuld indien het object geen pand is, maar een ander object uit de BGT, waarbij je de contour uit de BGT op zal willen halen |
| **Herkomst definitie** | ERS |
| **Toelichting** | verwijzing naar de landelijke BGTIdentificatie; kan alleen gebruikt worden indien het erfgoedobject niet van het type Pand is |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..* |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### toelichtingAdressering
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | toelichtingAdressering |
| **Herkomst** | ERS |
| **Definitie** | Adressering van het object waarbij het oorspronkelijke adres wordt geduid, of een reeks adressen wordt samengevat |
| **Herkomst definitie** | ERS |
| **Toelichting** | vb:<br />Dorpsstraat 5 (oude nummering)<br />Aweg 2-20 (even) en Bweg 1-5 (oneven) |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
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
| **Definitie** | Opmerking betreffende de precisie van het gegeven jaartal voor de start van de materi&#235;le levensduur (het ontstaan van de erfgoed waarde)<br />Indien leeg verwijst het jaarBegin met voldoende zekerheid naar het jaar waarin de bouw/verbouw is opgeleverd. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Niet altijd is het jaartal exact bekend; soms is alleen een tijdvak te duiden of een geschatte periode voor/na een bepaald jaar. Soms is alleen het jaartal van het ontwerp bekend, of van de verleende vergunning.<br />Met een (standaard) annotatie is aan te geven welk moment en met welke precisie het bouwjaar gegeven is.<br />De duur van de bouw is minder relevant als gegeven. Daarom is gekozen voor één bouwjaar ipv begin-einde. Bij voorkeur verwijst het jaartal naar de oplevering van het bouwwerk (of de afronding van de verbouwing). |
| **Datum opname** | 20191001 |
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
| **Toelichting** | Niet altijd is het jaartal exact bekend; soms is alleen een tijdvak te duiden of een geschatte periode voor/na een bepaald jaar. Soms is alleen het jaartal van het ontwerp bekend, of van de verleende vergunning.<br />Met een (standaard) annotatie is aan te geven welk moment en met welke precisie het bouwjaar gegeven is.<br />De duur van de bouw is minder relevant als gegeven. Daarom is gekozen voor één bouwjaar ipv begin-einde. Bij voorkeur verwijst het jaartal naar de oplevering van het bouwwerk (of de afronding van de verbouwing). |
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

#### toelichtingWaarde
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | toelichtingWaarde |
| **Herkomst** | ERS |
| **Definitie** | Een toelichting op de cultuurhistorische waardering en/of de beschermde status van een ErgoedObject. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Deze kan bestaan uit een herhaling, samenvatting van of verwijzing naar de redengevende omschrijving. Of bevat een korte toelichting op waardekenmerken in het algemeen en/of waarderingsuitkomsten. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

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

#### aanwezig
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | aanwezig |
| **Herkomst** | ERS |
| **Definitie** | Kwalificatie van de materi&#235;le aanwezigheid van het ErfgoedObject |
| **Herkomst definitie** | ERS |
| **Toelichting** | Kwalificatie die de actuele staat van het ErfgoedObject relativeert en dient als aangrijpingspunt voor duiding en eventuele bescherming van de (nog) aanwezige waarde. Als de waarde van attribuutsoort aardRegistratie gelijk is aan historisch, dan dient (indien gevuld) attribuutsoort aanwezig de waarde verdwenen, verplaatst of verschoven te hebben (en vise versa). De contour van een verdwenen, verplaatst of verschoven ErfgoedObject toont de oorspronkelijk locatie. |
| **Datum opname** | 20221006 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### verwachteBouwhistWaarde
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | verwachteBouwhistWaarde |
| **Herkomst** | ERS |
| **Definitie** | Een signalering voor de mogelijke aanwezigheid van bouwhistorische waarden |
| **Herkomst definitie** | ERS |
| **Toelichting** | Het aantonen van de verwachte bouwhistorische waarde vereist nader onderzoek of toegang. Bij niet aantreffen wordt de waarde nee. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

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

#### oorspronkelijkeFunctie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | oorspronkelijkeFunctie |
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

#### themaCultuurhistorie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | themaCultuurhistorie |
| **Herkomst** | ERS |
| **Definitie** | categorisering van de oorspronkelijke functie in relatie tot maatschappelijk gebruik en ruimtelijke situering. |
| **Herkomst definitie** | ERS |
| **Toelichting** | indeling naar thema's ten behoeve van de presentatie van Erfgoedobjecten in herkenbare maatschappelijke thematiek en bijbehorende cultuurhistorische verhalen. |
| **Datum opname** | 20221006 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### fysischLandschap
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | fysischLandschap |
| **Herkomst** | ERS |
| **Definitie** | Indeling naar stijlperiode of stroming |
| **Herkomst definitie** | ERS |
| **Toelichting** | combineren met Type is 'gebied' |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### cultuurLandschap
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | cultuurLandschap |
| **Herkomst** | ERS |
| **Definitie** | Indeling naar stijlperiode of stroming |
| **Herkomst definitie** | ERS |
| **Toelichting** | combineren met Type is 'gebied' |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### toelichtingLandschap
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | toelichtingLandschap |
| **Herkomst** | ERS |
| **Definitie** |  |
| **Herkomst definitie** | ERS |
| **Toelichting** |  |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

