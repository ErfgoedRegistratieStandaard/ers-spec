### Kenmerken

#### Registratiekenmerken

Deze leggen vast vanaf wanneer een object is geregistreerd, wanneer de registratie is gewijzigd (versies van registraties) en welke aard de registratie heeft.

De aard van een registratie vertelt iets over de beleidsmatige betekenis van het object: gaat het om een verwachte cultuurhistorische waarde, een aanwezige, een beschermde of een historische waarde. Dit betekent dat er ook registraties kunnen zijn van cultuurhistorische waarden die worden vermoed, maar niet zeker zijn. En van waarden die er ooit waren, maar inmiddels niet meer bestaan. De aard van een registratie kan in de loop van de tijd wijzigen.
Onderstaand schema toont de mogelijke overgangen:
![](ers-media/Overgangen.png)

De overgangen hoeven niet stuk voor stuk doorlopen te worden; er kunnen ook stappen worden overgeslagen.
Is de aard van de registratie een beschermde waarde, dan is een reeks attributen verplicht.
Deze attributen gaan bijvoorbeeld over de datum waarop de bescherming in werking trad en welk bevoegd gezag daartoe besloot.

De overgang naar historisch is interessant. Dit betekent dat de cultuurhistorische waarde zoals door het record is beschreven er niet meer is. Er is een belangrijke relatie met het veld jaarEind, dat het einde van de materiële levensduur van het object markeert. Dit veld hoort gevuld te zijn in combinatie met aardRegistratie historisch.

Dat de cultuurhistorische waarde is vernietigd kan betekenen dat het object er niet meer is, maar dat hoeft niet. Er kan dus nog een actuele koppeling met een bestaand pand en een bestaand adres zijn. Is het fysieke object er helemaal niet meer, dan dienen deze koppelingen te worden verwijderd.

Als een object beschermd is en de waarde wordt (of blijkt) vernietigd, dan wordt de bescherming doorgaans opgeheven. Ook kan het zijn dat een procedure is gestart, maar eindigt in het besluit niet aan te wijzen. De velden die de bescherming vastleggen worden op dat moment geschoond. Aan de datumvelden is te zien dat het object eerder wel bescherming genoot; een toelichting hierop (zoals welke bescherming dit betrof) is verplicht.

Een apart geval betreft waarden die verwacht worden en na inventarisatie niet aanwezig blijken. In dat geval kan de aanduiding 'niet aangetroffen' worden genoteerd als alternatief voor het beëindigen van de registratie.

#### Locatiekenmerken

Om de locatie van een object te kennen zijn zowel geometrie als adresgegevens van belang. De geometrie en de adressen hebben een vergelijkbare functie: ze dienen de
kenbaarheid van het object.

De registratie gaat ervan uit dat een bescherming rust op een object. Dit object kan in de loop van de tijd wijzigen; de bescherming blijft rusten op het object als geheel. Dat betekent dat de contour in de loop van de tijd kan wijzigen. De contour is dus niet bedoeld om precies te begrenzen wat er wel of niet beschermd is.

Met behulp van landelijke basisregistraties kunnen de locatiegegevens (contour en adres) actueel blijven. Een wijziging in de basisregistratie zal niet altijd geautomatiseerd kunnen worden verwerkt; dat hangt af van de aard van de wijziging.

#### Waardekenmerken
Deze kenmerken beschrijven inhoudelijk de cultuurhistorische waarde van het object. De standaard maakt daarbij gebruik van tekst velden en van lijsten. De lijsten zijn bij voorkeur afgeleid van nationale termenlijsten. Het beheer op deze lijsten zal in de toekomst verder vorm moeten krijgen.
