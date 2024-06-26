## Inleiding

De Erfgoed Registratie standaard is ontwikkeld in opdracht van de [Federatie Grote Monumentengemeenten](https://monumentengemeenten.nl/) door de werkgroep 
[De DataBeet](https://monumentengemeenten.nl/werkgroepen-2/werkgroep-data-beet/). Ze is gebaseerd op een inventarisatie van registraties van 9 gemeenten plus de registratie van Rijksmonumenten door de Rijksdienst Cultureel Erfgoed. Deze publicatie is de uitkomst van een pilot waarin de omzetting van een aantal gemeentelijke registraties naar deze standaard is getoetst. De standaard staat open voor feedback en vragen. De website van de FGM (contactpagina De DataBeet) biedt daartoe de mogelijkheid.

Bij het uitwerken van de standaard is gebruik gemaakt van de beschrijvingsregels uit [[MIM]]. We lichten eerst het informatiemodel toe en geven daarna een beschrijving van de entiteiten ('Objecttypen') van het informatiemodel. Vervolgens worden de gebruikte  keuzelijsten uitgewerkt ('Enumeraties'), en de open lijsten ('Codelijsten'). Het verschil tussen beiden is dat nieuwe waarden in de keuzelijsten leiden tot een aanpassing van de standaard, terwijl codelijsten buiten de standaard om kunnen worden aangepast of aangevuld.

Een paar begrippen uit [[MIM]] zijn handig te weten. 

**authentiek gegeven**: Een kenmerk is authentiek indien de juistheid (hoogwaardige kwaliteit) van het gegeven gewaarborgd wordt via formele inwinningsprocessen en wettelijk regelingen. De waarde refereert aan het inwinningsproces of de regeling in questie, bijvoorbeeld de basisregistratie. Een authentiek gegeven in de Erfgoed Registratie standaard (indien van toepassing) heeft waarde 'Overig'. Dat betekent dat het gegeven hoogwaardige kwaliteit heeft op basis van de eigen (domeinspecifieke) inwinningsprocessen van de erfgoedregistratie. 

**classificerend**: Een kenmerk is classificerend wanneer het een objecttype indeelt in subtypen. In de erfgoedstandaard geldt dit voor attribuutsoort 'type'. Dit komt voor bij zowel objecten als deelobjecten en omgevingen. De keuzelijsten (enumeraties) op de drie niveaus verschillen enigszins; een efgoeddeelobject kent een iets andere indeling naar subtypen dan het erfgoedobject. En een omgeving kent heel eigen subtypen.

**mogelijk geen waarde**: Een kenmerk heeft 'mogelijk geen waarde' wanneer niet op voorhand zeker is dat de waarde bekend is en ook of er wel een waarde is. Dit behoeft enige toelichting in combinatie met het de vraag of het gaat om een verplicht gegeven of een optioneel gegeven.

Een **verplicht gegeven** heeft kardinaliteit 1..1 of 1..n (tenminste 1 waarde, max 1 respectievelijk n waarden). In combinatie met 'mogelijk geen waarde' kan dit veld toch leeg zijn, ook al is het verplicht. De waarde is niet bekend. Denk bijvoorbeeld aan bouwjaar (jaarBegin): elk object heeft een ontstaansmoment, een beginjaar. Maar niet altijd is de waarde bekend. 
Staat 'mogelijk geen waarde' niet vermeld, dan móet het veld een waarde hebben. Bijvoorbeeld de identificatie van een Object.

Een **optioneel gegeven** heeft kardinaliteit 0..1 of 0..n (kan leeg zijn, heeft max 1 respectievelijk n waarden). In combinatie met 'mogelijk geen waarde' moeten we ons realiseren dat een leeg veld kán betekenen dat de waarde onbekend is. Denk bijvoorbeeld aan verschillende cultuurhistorische kenmerken zoals architect. Het is goed mogelijk dat er geen architect was. Maar ook dat we de naam van de architect niet weten.
Staat 'mogelijk geen waarde' niet vermeld, dan betekent een leeg veld dat er echt geen waarde is. Bijvoorbeeld de einddatum van een Object: als deze leeg is, mag men ervan uitgaan dat het Object er echt nog is en niet is gesloopt of verdwenen.

NOTA BENE: In enkele gevallen is gekozen voor een verplicht gegeven voor velden die ook ook écht leeg kunnen zijn. De verplichting geldt in deze gevallen alleen als het Object beschermd is.  Dit geldt voor: beschermdAls, beschermdDoor, monumentnummer en grondslag. Eigenlijk zijn dit dus optionele velden, met 'Mogelijk geen waarde' = nee. Maar vanwege het belang van de verplichting in combinatie met aardRegistratie=beschermd, is gekozen voor de modellering 'verplicht' in combinatie met 'Mogelijk geen waarde'.
