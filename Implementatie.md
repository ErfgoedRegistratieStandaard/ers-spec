
## API documentatie

Er is een [standaard API-specificatie](https://erfgoedregistratiestandaard.github.io/ers-spec/yaml/ers-oas3.yaml) met [bijbehorende documentatie](https://erfgoedregistratiestandaard.github.io/ers-spec/yaml) beachikbaar. 

De standaard API-specificatie is gebaseerd op deze ERS-standaard, en biedt een vertaling van het informatiemodel uit de specificatie naar een concrete (REST) API. Deze API kan worden geïmplementeerd door registraties die op een gestandaardiseerde wijze informatie conform de ERS-specificatie willen ontsluiten.

De API-specificatie definieert endpoints voor collecties en individuele objecten. In een collectie worden voor elk object de registratiekenmerken en locatiekenmerken in het resultaat opgenomen. In het resultaat voor een individueel object wordt deze informatie aangevuld met de waardekenmerken van het object.

Het is mogelijk om de API-specificatie aan te vullen met lokale uitbreidingen die buiten de Erfgoedregistratiestandaard vallen. Dergelijke uitbreidingen vallen onder de verantwoordelijkheid van de implementerende partij. Voor schema-uitbreidingen kan gebruik gemaakt worden van de blokken 'ErfgoedObject-Extension' en 'ErfgoedDeelobject-Extension'. Aanvullingen in deze blokken worden opgenomen in het resultaat voor individuele objecten. Voor aanvullende endpoints wordt aangeraden deze te registreren onder /v1/local/ en te voorzien van de tag 'Lokaal', zodat voor de gebruiker van de API duidelijk is dat deze endpoints aanvullend zijn ten opzichte van de standaard.

In de standaard API-specificatie (en de bijbehorende documentatie) is als voorbeeld van het uitbreidingsmechanisme een invulling de ErfgoedObject-Extension en een aanvullend endpoint /v1/local/erfgoedobjecten opgenomen. Deze uitbreidingen zijn voorbeeldmatig en zijn geen deel van de standaard-specificatie; bij implementatie moeten deze uitbreidingen worden weggelaten of - indien dat gewenst is - vervangen door een eigen lokale aanvulling.

## Uitwisseling via bestanden

Sommige bestanden ondersteunen enkel veldnamen met een maximaal aantal karakters. Om deze veldnamen gemakkelijk te kunnen mappen naar de ERS-veldnamen is een lijst opgesteld van alternatieve veldnamen. Deze lijst is te vinden op Github.

## Coördinatenstelsel  

De ERS volgt het toegepaste coördinatenstelsel van de BAG en BGT, dat is dat van de Rijksdriehoeksmeting (RDstelsel). De coördinaten zijn op de millimeter nauwkeurig en de eenheid is meter. Elk coördinaat heef maximaal drie decimalen. Zo nodig wordt daarvoor afgerond, zodanig dat als de vierde decimaal de waarde 0, 1, 2, 3 of 4 heef, de derde decimaal niet wijzigt en als de vierde decimaal de waarde 5, 6, 7, 8 of 9 heef, de derde decimaal met één wordt verhoogd. Als de op te hogen decimaal de waarde 9 had (en dus 10 zou moeten worden), herhaalt deze regel zich voor de voorliggende decimalen. Bijvoorbeeld een coördinaat 155004,329098765 komt in de BAG als 155004.329 en een coördinaat 155004,329598765 als 155004.330 .  

## Geometrie 

In ieder ErfgoedObject, ErfgoedDeelObject en ErfgoedOmgeving zit geometrie verwerkt. Deze geometrie betref het loodrechte bovenaanzicht van het object met de ware vorm, afmeting en oriëntatie en positie ten opzichte van de aarde, inclusief alle zichtbare en onzichtbare delen boven en onder de grond, maar exclusief alle delen die kunnen bewegen ten opzichte van de aarde.  

De geometrische representatie van de objectypen in de BAG, waaronder de geldige geometrietypen, de geldige ruimtelijke dimensies van de geometrie en de geldige ruimtelijke dimensies van de coördinaten van de geometrie, is afhankelijk van het objectype. In de ERS wordt er alleen gebruik gemaakt van het BAG objecttype pand. Een BAG pand heeft een vlak geometrie die standaard in 2 dimensies wordt uitgedrukt. Optioneel kan een bronhouder ook hoogte toevoegen, maar 3D objecten worden niet door de ERS ondersteund. 

## Verschillen tussen BAG- en BGT-objecten
De ERS staat het toe om naar BAG- en BGT-objecten te verwijzen. Deze twee basisregistraties overlappen semantisch alleen op het objecttype pand. Ieder pand object dat in de BAG zit, is ook terug te vinden in de BGT. Zowel BGT als BAG panden hebben een 2D geometrie, maar deze kan verschillend zijn. De BAG tekent de geometrie vanuit het bovenaanzicht (zoals bij een luchtfoto), terwijl de BGT de geometrie tekent vanaf de grond, oftwel de omtrek waar het gebouw het terrein raakt. Zie voor een aantal voorbeelden van deze verschillen: https://geonovum.github.io/IMGeo-objectenhandboek/pand#overbouw-pilaren-kolommen-pijlers  
