# Informatiemodel

Het informatiemodel beschrijft de logische relaties tussen de belangrijkste entiteiten van de
registratie. In dit schema is te zien dat het model bestaat uit drie lagen. <mark>~~Op het niveau van
het ErfgoedObject ligt tevens een relatie met de Basisregistratie Gebouwen (BAG), via een
pandID en/of adresID.~~</mark>

![](ers-media/Informatiemodel.png)

## ErfgoedObject

Gebouwen, andere bouwwerken zoals bruggen of sculpturen, alsook parken en andere
bovengrondse structuren kunnen zijn geregistreerd als ErfgoedObject. Dit vanwege hun
waarde bijvoorbeeld op grond van hun schoonheid of door het belang dat aan hun
geschiedenis wordt gehecht. Registratie betekent dat aan het object regels kunnen zijn
verbonden waar een beschermende werking van uitgaat. Registratie kan ook betekenen dat
de objectinformatie context geeft voor het toepassen van deze regelgeving.

<mark>Zie [[[#objecttype-erfgoedobject]]] voor detailinformatie.</mark>

## ErfgoedOmgeving

ErfgoedObjecten kunnen deel uitmaken van een omgeving, waaraan zij ook een bepaalde
waarde ontlenen. De bescherming van het ErfgoedObject heeft omgekeerd ook betekenis
voor de bescherming van de omgeving. Dit kan nader zijn uitgewerkt in de regels. Voor één
ErfgoedObject geldt dat er meerdere ErfgoedOmgevingen relevant kunnen zijn.

<mark>Zie [[[#objecttype-erfgoedomgeving]]] voor detailinformatie.</mark>

## ErfgoedDeelobject

ErfgoedObjecten kunnen één of meerdere ErfgoedDeelobjecten hebben. Deze deelobjecten
beschrijven bijvoorbeeld een bepaald onderdeel in detail. ErfgoedDeelobjecten ontlenen hun
bescherming aan de bescherming van het ErfgoedObject als geheel.

<mark>Zie [[[#objecttype-erfgoeddeelobject]]] voor detailinformatie.</mark>

## Situering
<mark>
Op het niveau van het ErfgoedObject ligt tevens een relatie met de Basisregistratie Gebouwen (BAG), via een pandID en/of adresID.</mark>

<mark>Zie [[[#objecttype-situering]]] voor detailinformatie.</mark>

