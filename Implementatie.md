
## API documentatie

De documentatie enz enz

## Uitwisseling via bestanden

Sommige bestanden ondersteunen enkel veldnamen met een maximaal aantal karakters. Om deze veldnamen gemakkelijk te kunnen mappen naar de ERS-veldnamen is een lijst opgesteld van alternatieve veldnamen. Deze lijst is te vinden op Github.

## Coördinatenstelsel  

De ERS volgt het toegepaste coördinatenstelsel van de BAG en BGT, dat is dat van de Rijksdriehoeksmeting (RDstelsel). De coördinaten zijn op de millimeter nauwkeurig en de eenheid is meter. Elk coördinaat heef maximaal drie decimalen. Zo nodig wordt daarvoor afgerond, zodanig dat als de vierde decimaal de waarde 0, 1, 2, 3 of 4 heef, de derde decimaal niet wijzigt en als de vierde decimaal de waarde 5, 6, 7, 8 of 9 heef, de derde decimaal met één wordt verhoogd. Als de op te hogen decimaal de waarde 9 had (en dus 10 zou moeten worden), herhaalt deze regel zich voor de voorliggende decimalen. Bijvoorbeeld een coördinaat 155004,329098765 komt in de BAG als 155004.329 en een coördinaat 155004,329598765 als 155004.330 .  

## Geometrie 

In ieder ErfgoedObject, ErfgoedDeelObject en ErfgoedOmgeving zit geometrie verwerkt. Deze geometrie betref het loodrechte bovenaanzicht van het object met de ware vorm, afmeting en oriëntatie en positie ten opzichte van de aarde, inclusief alle zichtbare en onzichtbare delen boven en onder de grond, maar exclusief alle delen die kunnen bewegen ten opzichte van de aarde.  

De geometrische representatie van de objectypen in de BAG, waaronder de geldige geometrietypen, de geldige ruimtelijke dimensies van de geometrie en de geldige ruimtelijke dimensies van de coördinaten van de geometrie, is afhankelijk van het objectype. In de ERS wordt er alleen gebruik gemaakt van het BAG objecttype pand. Een BAG pand heeft een vlak geometrie die standaard in 2 dimensies wordt uitgedrukt. Optioneel kan een bronhouder ook hoogte toevoegen, maar 3D objecten worden niet door de ERS ondersteund. 

## Verschillen tussen BAG- en BGT-objecten
De ERS staat het toe om naar BAG- en BGT-objecten te verwijzen. Deze twee basisregistraties overlappen semantisch alleen op het objecttype pand. Ieder pand object dat in de BAG zit, is ook terug te vinden in de BGT. Zowel BGT als BAG panden hebben een 2D geometrie, maar deze kan verschillend zijn. De BAG tekent de geometrie vanuit het bovenaanzicht (zoals bij een luchtfoto), terwijl de BGT de geometrie tekent vanaf de grond, oftwel de omtrek waar het gebouw het terrein raakt. Zie voor een aantal voorbeelden van deze verschillen: https://geonovum.github.io/IMGeo-objectenhandboek/pand#overbouw-pilaren-kolommen-pijlers  
