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
| **Definitie** | Beschermde status van het ErfgoedObject<br />Verplicht gevuld in combinatie met aardRegistratie=beschermd |
| **Herkomst definitie** | ERS |
| **Toelichting** | Mogelijk geen waarde is alleen van toepassing bij ErfgoedObjecten die _niet_ als beschermd staan geregistreerd.<br />Een ErfgoedObject heeft maximaal 1 beschermde status.<br />Bij de overgang van In procedure naar definitief wordt de aanwijzingsdatum gevuld.<br />Bij NietAanwijzen en Afvoeren wordt de status verwijderd; ook aardRegistratie dient dan te worden aangepast. |
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
| **Toelichting** | Mogelijk geen waarde is alleen van toepassing bij ErfgoedObjecten die _niet_ als beschermd staan geregistreerd.<br />Wanneer een status wordt 'overgenomen' door het Rijk (wat soms gebeurt bij monumenten) dan ontstaat een situatie van afvoeren van de ene lijst en opvoeren op de andere lijst. De bescherming als Rijksmonument gaat 'boven' de bescherming als Gemeentelijk monument. De betreffende datumvelden worden overschreven zodat deze betrekking hebben op de 'hoogst' beschermde status. |
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
| **Toelichting** | Dient gevuld indien vanaf de start van de procedure de beschermende werking intreedt |
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
| **Toelichting** | Verplicht indien sprake is van een beschermende werking |
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
| **Toelichting** | Verplicht indien vanaf de start van de procedure de beschermende werking intrad en deze met dit besluit wordt opgeheven |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### datumAfvoeren
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | datumAfvoeren |
| **Herkomst** | ERS |
| **Definitie** | Datum waarop de beschermde status van het object is opgeheven middels een besluit |
| **Herkomst definitie** | ERS |
| **Toelichting** | Verplicht indien hiermee de geregistreerde beschermende werking is opgeheven |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

#### toelichtingProcedure
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | toelichtingProcedure |
| **Herkomst** | ERS |
| **Definitie** | Aantekening met betrekking tot de doorlopen of beoogde procedure tot bescherming van het ErfgoedObject. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Verplicht in combinatie met datumNietAanwijzen en datumAfvoeren waarbij de beschermde status die is opgeheven wordt vermeld, met eventueel een toelichting op de reden van beëindiging. Ook te gebruiken om een eerder doorlopen procedure vast te leggen, of om relevante inventarisatienummers en dergelijke te noteren. |
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
| **Toelichting** | Verwijzing naar het identificerende nummer (id) in de landelijke voorziening. Dit veld is verplicht indien het een Gemeentelijk Monument betreft. Op dit moment is echter nog onvoldoende duidelijk hoe en waar de nummer na ingang van de omgevingswet wordt beheerd (kadaster, DSO). Daarom is het veld in de praktijk nog niet vaak gevuld. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### monumentnummer
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | monumentnummer |
| **Herkomst** | ERS |
| **Definitie** | Uniek nummer of unieke code, toegekend door de bronhouder van de monumentregistratie (Rijk, Provincie of Gemeente).<br />Verplicht gevuld in combinatie met aardRegistratie=beschermd |
| **Herkomst definitie** | ERS |
| **Toelichting** | Mogelijk geen waarde is alleen van toepassing bij ErfgoedObjecten die _niet_ als beschermd staan geregistreerd. |
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
| **Toelichting** | Onderzoek naar de juistheid van de registratie. Dit kan zijn naar aanleiding van een interne terugmelding bij de gemeente, of naar aanleiding van een signalering uit een controle met een landelijke service. |
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
| **Definitie** | de tweedimensionale geometrische representatie van het vlak dat wordt gevormd door de omtrekken van een ErfgoedObject. |
| **Herkomst definitie** | BAG |
| **Toelichting** | Een samengesteld geometriegegevenstype waarbij wordt afgedwongen dat voor de geometrie een keuze gemaakt moet worden tussen een vlak (Polygon) of een multivlak (MultiPolygon), conform ISO/IEC 13249-3:2016. Deze standaard beschrijft de vastlegging in WKT-formaat.<br />Alleen geometrieën die voldoen aan het Simple Features profile conform ISO 19125-1:2004 zijn toegestaan.<br /><br />Het toegepaste coördinatenstelsel is dat van de Rijksdriehoeksmeting (RD-stelsel). De coördinaten zijn op de millimeter nauwkeurig en de eenheid is meter. Elk coördinaat heeft maximaal drie decimalen. Zo nodig wordt daarvoor afgerond. Wanneer de bron voor een geometrie beperkt is tot een punt of een lijn, kan deze als vlak worden geregistreerd door een buffer toe te voegen. Daarbij wordt de breedte van de buffer geschat. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### bronContour
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | bronContour |
| **Herkomst** | ERS |
| **Definitie** | De registratie of het informatiemodel waaraan de contour ontleend is dan wel de eigen organisatie indien het door de eigen organisatie toegevoegd is. |
| **Herkomst definitie** | ERS |
| **Toelichting** | De contour van een ErfgoedObject kan zijn overgenomen uit de BAG of de BGT. Voor ErfgoedObjecten met type=pand(en) geniet het overnemen van de pandgeometrie uit de BAG de nadrukkelijke voorkeur. Er kunnen redenen zijn om een BAG-contour niet over te nemen; in dat geval is sprake van een maatwerkcontour. Ook voor alle ErfgoedObjecten die niet het type=pand(en) hebben, is een maatwerkcontour van toepassing. Wanneer bij de vastlegging gebruik is gemaakt van een buffer om een punt of lijn-geometrie, wordt dit ook in de bronContour vermeld. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### puntCoördinaten
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | puntCoördinaten |
| **Herkomst** | ERS |
| **Definitie** | de geometrische representatie van een punt dat zich binnen de omtrek(ken) van een ErfgoedObject bevindt. |
| **Herkomst definitie** | ERS |
| **Toelichting** | de puntcoördinaten worden vastgelegd in WKT-formaat conform ISO/IEC 13249-3:2016. Dit betekent dat het veld als volgt is opgebouwd: POINT (x-coördinaat y-coördinaat). Bijvoorbeeld: POINT (136840.123 455874.123) voor de Dom in Utrecht. Multipoints zijn niet toegestaan. Het toegepaste coördinatenstelsel is dat van de Rijksdriehoeksmeting (RD-stelsel). De coördinaten zijn op de millimeter nauwkeurig en de eenheid is meter. Elk coördinaat heeft maximaal drie decimalen. Zo nodig wordt daarvoor afgerond. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |

#### betreftPand
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | betreftPand |
| **Herkomst** | ERS |
| **Definitie** | Verwijzing naar een of meer Panden in de BAG. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Het veld betreftPand is verplicht voor ErfgoedObjecten met type=pand(en). Panden kunnen in de Basisregistratie Adressen en Gebouwen (BAG) worden gevonden aan de hand van het unieke id van het Pand. ErfgoedObjecten van het type pand(en) vallen per definitie samen met één of meer Panden in de BAG.<br /><br />Een Pand is in de BAG als volgt gedefinieerd: de kleinste bij de totstandkoming functioneel en bouwkundig-constructief zelfstandige eenheid die direct en duurzaam met de aarde is verbonden en betreedbaar en afsluitbaar is. Er is sprake van een bouwkundig-constructief zelfstandige eenheid, als het slopen ervan redelijkerwijs geen aangrenzende bouwkundige constructies doet instorten. Bij eventuele doorbraken van panden worden de pandbegrenzingen in de BAG niet aangepast. Deze definities worden door het Erfgoedobject met type=pand(en) overgenomen.<br /><br />Een Pand in de BAG heeft als eigenschap bouwjaar. Dit bouwjaar wordt niet per definitie overgenomen als jaarBegin van het ErfgoedObject. Dit is vanwege onvoldoende zekerheid over de kwaliteit van dit gegeven in de BAG.<br />Aan de hand van een Pand in de BAG kunnen gerelateerde adressen (Nummeraanduidingen) worden gevonden. Zie hierover de toelichting bij objectklasse Situering en attribuutsoort situering.<br /><br />Een Pand in de BAG heeft een Geometrie. Zie hierover de toelichting bij attribuutsoort contour. |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..* |
| **Authentiek** | Overig |

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
| **Definitie** | Jaartal begin materi&#235;le levensduur van het object |
| **Herkomst definitie** | ERS |
| **Toelichting** | Het begin van de levensduur van het object wordt bepaald door het ontstaan van de erfgoedwaarde. Theoretisch hoeft dit niet hetzelfde moment te zijn als het begin van de levensduur van het object zelf. Denk bijvoorbeeld aan een belangrijke verbouwing aan een pand dat daarvoor weinig waarde had. Of een woonhuis dat cultuurhistorische waarde heeft vanwege een bijzondere bewoner. In deze situaties wordt in de praktijk meestal toch het ontstaan van het object als begin van de levensduur gekozen, maar er kan van worden afgeweken.<br /><br />Anderzijds komt het voor dat een object in oorsprong ouder is, maar dat de precieze ontstaansgeschiedenis niet bekend is. Of dat onduidelijk is hoeveel waarde uit het vroege begin nog aanwezig is. Het jaarBegin kan een ijkpunt zijn in deze ontstaansgeschiedenis. In annotatieJaarBegin kan deze nuance worden aangegeven (in de kern ouder). |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Authentiek** | Overig |
| **Mogelijk geen waarde** | Ja |

#### jaarEind
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | jaarEind |
| **Herkomst** | ERS |
| **Definitie** | Jaartal einde materi&#235;le levensduur van het object |
| **Herkomst definitie** | ERS |
| **Toelichting** | Het einde van de levensduur van het object wordt bepaald door het verdwijnen van de erfgoedwaarde (bijvoorbeeld door sloop of aanpassingen). Na beëindiging van de levensduur kan de registratie nog voortduren; aardRegistratie hoort dan de waarde 'historisch' te krijgen.<br /><br />Een bijzondere omstandigheid doet zich voor bij cultuurhistorische waarden die betrekking hebben op restanten, relicten of zelfs een compleet verdwenen object dat alleen nog herkenbaar is in bijvoorbeeld het landschap. Sommige kenmerken van de registratie hebben dan betrekking op het object dat er materieel gezien niet (of bijna niet) meer is. Denk bijvoorbeeld aan oorspronkelijke functie. Het veld jaarEind wordt alleen gevuld in combinatie met aardRegistratie is 'historisch'. Zolang er nog bescherming rust op het object blijft het jaarEind leeg (aardRegistratie is 'beschermd'). |
| **Datum opname** | 20191001 |
| **Indicatie formele historie** | Ja |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |

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
| **Definitie** | Categorisering van landschap naar ontstaan van fysisch geografische eigenschappen zoals reli&#235;f en grondsoort, waarop de nu nog herkenbare ontginning in het verleden plaatsvond. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Het typeren van fysische geografie vindt plaats in combinatie met het beschrijven van het cultuurlandschap. Dit gebeurt in principe voor gebieden (of eventueel terreinen). De gebieden (en terreinen) vormen een landsdekkend geheel. |
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

