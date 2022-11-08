### Attribuutsoorten
#### identificatie
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | identificatie |
| **Herkomst** | ERS |
| **Definitie** | Identificerende sleutel |
| **Herkomst definitie** | ERS |
| **Toelichting** |  |
| **Datum opname** | 20191001 |
| **Kardinaliteit** | 0..1 |
| **Authentiek** | Overig |
| **Identificerend** | Ja |

#### situering
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | situering |
| **Herkomst** | ERS |
| **Definitie** | Aanduiding van de plaats van het ErfgoedObject ten opzichte van het adres. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Deze aanduiding is verplicht in het geval dat het ErfgoedObject een type heeft ongelijk aan "pand(en)". Deze ErfgoedObjecten zijn namelijk per definitie niet adresseerbaar. Een gekoppeld adres moet daarom worden voorzien van een situering: hoe verhoudt het ErfgoedObject zich tot dit adres. Alle enumeraties zijn in deze situatie mogelijk, met uitzondering van de waarde 'via'.<br />De waarde 'via' is voorbehouden aan ErfgoedObjecten met type is gelijk aan "pand(en)". Het gebruik van 'via' is daarbij van toepassing bij verblijfsobjecten die uit meerdere panden beslaan, waarbij het ErfgoedObject een subset van die panden betreft. Bijvoorbeeld twee buurpanden die zijn doorgebroken (tot één verblijfsobject), waar slechts één van beide panden het ErfgoedObject betreft. Gebruik de situering 'via' om te benadrukken dat het ErfgoedObject slechts een deel van het verblijfsobject betreft en mogelijk juist een ánder deel dan waar de ingang zich bevindt. Het gebruik van de waarde 'via' is niet verplicht; het nut ervan is afhankelijk van de context ter plaatse.<br /><br />Een ErfgoedObject van het type "pand(en)" kan ook een situering hebben om een andere reden. In de BAG komen immers panden voor zonder adres. In die gevallen kan in de Erfgoedregistratie een adres worden gekoppeld in combinatie met (verplicht) een situering. Alle voorkomende waarden van situering zijn dan toegestaan.<br /><br />Bij het gebruik van een situering in combinatie met een ErfgoedObject met type "pand(en)" is per definitie sprake van maatwerk ten opzichte van de BAG. Met andere woorden: geen automatische overeenstemming met de via de pandId's gerelateerde adressen in de BAG (of van het ontbreken daarvan). |
| **Datum opname** | 20191001 |
| **Authentiek** | Overig |

#### betreftAdres
| **Attribuutsoort-eigenschap** | **Waarde** |
| ---- | ---- |
| **Naam** | betreftAdres |
| **Herkomst** | BAG |
| **Definitie** | Verwijzing naar een Nummeraanduiding in de BAG. |
| **Herkomst definitie** | ERS |
| **Toelichting** | Adressen kunnen in de Basisregistratie Adressen en Gebouwen (BAG) worden gevonden aan de hand van het unieke id van de Nummeraanduiding. De Nummeraanduiding bevat het volledige adres, inclusief de verwijzingen naar straatnaam en woonplaats. |
| **Datum opname** | 20191001 |
| **Authentiek** | Overig |

