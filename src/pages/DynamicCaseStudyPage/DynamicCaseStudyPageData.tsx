import postproduction from '/src/assets/images/concreteGold/Postproduktion.png'
import production from '/src/assets/images/concreteGold/Produktion.png'
import preproduction from '/src/assets/images/concreteGold/Vorproduktion.png'
import storyboard from '/src/assets/images/concreteGold/Storyboard.jpg'
import moodboard from '/src/assets/images/concreteGold/Moodboard.jpg'
import statistikDiagramm from '/src/assets/images/concreteGold/statista.jpg'
import game from '/src/assets/images/elearning/game.png'
import start from '/src/assets/images/elearning/start.png'
import profil from '/src/assets/images/elearning/profil.png'

// Separate Image Maps
const elearningImageMap = {
  'game': game,
  'start': start,  // Korrigiert: startMap -> start
  'profil': profil,
}

const goldImageMap = {
  'postproduction': postproduction,
  'production': production,
  'preproduction': preproduction,
  'storyboard': storyboard,
  'moodboard': moodboard,
  'statistik': statistikDiagramm
}
// E-Learning Case Study
export const elearningData = {
  id: 'elearning',
  slug: 'elearning',
  title: "E-Learning Konzept für Kinder",
  subtitle: "Fallstudie zur Entwicklung einer E-Learning-Anwendung für Grundschulkinder",
  client: "Siegfried Igener",
  date: "November 2024",
  duration: "3 Monate",
  category: "E-Learning",
  tags: ["E-Learning", "Konzeption", "Kinder", "Bildung"],
  coverImage: game, // Cover Image hinzufügen
  imageMap: elearningImageMap,

  // Sections mit Subsections
  sections: [{

    id: 'einleitung',
    title: 'Einleitung',
    subsections: [
      {
        subtitle: 'Die Problemstellung',
        text: `Diese Fallstudie wurde im Auftrag von Siegfried Igener erstellt. Der Autor hat bereits mehrere erfolgreiche Kinderbücher über den kleinen Drachen Ananas verfasst, die für Kinder ab sechs Jahren geeignet sind. Durch eine Vorabrecherche hat sich herausgestellt, dass Mathematik bei Kindern wenig beliebt ist und diese häufigen Schwierigkeiten haben, sich mit dem Fach auseinanderzusetzen. Ein wesentlicher Faktor für diese Problematik ist die fehlende Motivation der Kinder. Lehrer stehen daher oft vor der Herausforderung, den Kindern Mathematik beizubringen und ihnen Spaß an dem Fach zu vermitteln. 
        
        Da die Bücher von Siegfried Igener bei Kindern sehr populär sind, soll nun eine E-Learning- Anwendung konzipiert werden, die den Kindern Mathematik durch die Geschichten von Siegfried Igener auf spielerische Weise näherbringt. Zudem hat sich gezeigt, dass Kinder, die sich untereinander austauschen und gegenseitig unterstützen, größere Lernerfolge erzielen.`
      },
      {
        subtitle: 'Zielsetzung dieser Fallstudie',
        text: 'Das Ziel dieser Fallstudie ist es, mithilfe der Geschichten über den kleinen Drachen Ananas ein E-Learning-Konzept zu entwickeln, das Kinder auf spielerische Weise mit Mathematik inKontakt bringt. Das Konzept richtet sich vor allem an Grundschulkinder im Alter von sechsJahren oder der ersten bis vierten Klasse. Die Anwendung soll die Geschichten des kleinenDrachen Ananas nutzen, um Kindern mathematische Inhalte interessanter zu vermitteln,sodass ihre Motivation, sich mit Mathematik auseinanderzusetzen und sie zu lernen, steigt.Darüber hinaus soll das Konzept personalisierte Lernpfade anbieten, die den Lernfortschrittan die individuellen Bedürfnisse der Kinder anpassen. Zusätzlich soll die AnwendungMöglichkeiten bieten, sich mit anderen Kindern auszutauschen.'
      },
    ]
  },
  {
    id: 'überblick',
    title: 'Überblick über aktuelle E-Learning Anwendungen für Kinder',
    subsections: [
      {
        subtitle: 'Die Vorgehensweise der Recherche',
        text: `Um einen kurzen Überblick über die derzeitigen E-Learning-Angebote für Kinder im Grundschulalter ab ca. sechs Jahren zu erhalten, werden im folgenden Abschnitt mehrere Plattformen und Anwendungen sowie deren Angebote aufgelistet. Anschließend werden die Vor- und Nachteile der einzelnen Angebote näher erläutert, um die Unterschiede zwischen den Anwendungen besser nachvollziehen zu können.
 
Diese Arbeit baut auf den Vor- und Nachteilen auf, die sich aus der Recherche zu den verschiedenen Anwendungen ergeben haben. Die Ergebnisse und Inhalte zu den Anwendungen und Plattformen wurden durch Recherchen im Internet, im App Store sowie größtenteils direkt von den Webseiten der Softwareanbieter bezogen. Die Kriterien für die Auswahl der jeweiligen Anwendung bzw. Plattform basierten in erster Linie auf dem Umfang der angebotenen Inhalte und der inhaltlichen Differenzierung der einzelnen Angebote.`
      },
      {
        subtitle: `iOS & Android-App „Fiete Math"`,
        text: `Fiete Math ist eine Lern-App, die sich im Wesentlichen von den beiden folgenden Angeboten  unterscheidet. Die App ist für Android und iOS erhältlich und wurde speziell für Kinder im Alter von 5 bis 10 Jahren konzipiert. Sie bietet Kindern die Möglichkeit, die Grundrechenarten der Mathematik auf spielerische Weise zu erlernen und deckt dabei den Zahlenraum von 1 bis 1000 ab. 

Ein wesentlicher Vorteil dieser App ist das spielerische Konzept, das durch ein  Belohnungssystem die Motivation der Kinder steigert. Die Gestaltung und das Design der App sind besonders ansprechend für die Altersgruppe. Ein weiterer Vorteil ist die leicht und intuitiv bedienbare Benutzeroberfläche, die es ermöglicht, den Fortschritt der Kinder nach zuverfolgen. 

Zu den Nachteilen dieser App gehört, dass die Vollversion kostenpflichtig ist, wobei der einmalige Betrag von 3,99€ relativ gering ausfällt. Ein weiterer negativer Aspekt ist, dass sich die App ausschließlich auf Mathematik fokussiert und keine anderen Lernangebote zur Verfügung stellt, was die Anzahl der verfügbaren Übungen für die Kinder begrenzt (Ahoiii Entertainment, 2024).`
      },
      {
        subtitle: `Die E-Learning-Plattform „Scoyo“`,
        text: `Die Plattform Scoyo deckt eine Vielzahl von Fächern ab, darunter Mathematik, Deutsch und Allgemeinwissen, und orientiert sich dabei strikt an den Lehrplänen der deutschen Bundesländer. Sie ermöglicht es den Kindern, selbstständig und in ihrem eigenen Tempo zu lernen. Dies wird durch eine intuitive Benutzeroberfläche und eine Vorlesefunktion unterstützt, die speziell darauf ausgelegt sind, den Lernprozess zu erleichtern und die Motivation der Kinder zu fördern. 

Zu den Vorteilen der Plattform gehört, dass sie Lerninhalte bietet, die speziell auf das Alter und die Bedürfnisse der Kinder abgestimmt sind (siehe Anhang 1). Durch eine ansprechende Gestaltung werden die Lerninhalte attraktiv und leicht verständlich präsentiert. Scoyo passt die Lernpfade individuell an den Fortschritt jedes Kindes an, was ein personalisiertes Lernen ermöglicht, das auf die spezifischen Stärken und Schwächen des Kindes eingeht. Um die Lernmotivation zu steigern, integriert Scoyo verschiedene Elemente wie Belohnungssysteme und interaktive Spiele. Diese sorgen für eine spielerische und zugleich lehrreiche Erfahrung. Die Plattform ist vollständig werbefrei und bietet eine sichere Lernumgebung, in der sich die Kinder ungestört auf ihre Aufgaben konzentrieren können (scoyo, 2024). 

Zu den Nachteilen gehört, dass nach Ablauf der kostenlosen Testphase Abonnementgebühren anfallen (siehe Anhang 2). Zudem bietet die Plattform nur eingeschränkte Möglichkeiten für Interaktionen zwischen den Kindern.`
      },
      {
        subtitle: `Das kostenlose Online-Angebot „Schlaukopf"`,
        text: `Schlaukopf.de bietet kostenlose, interaktive Online-Übungen für Schüler der ersten bis vierten Klasse in Fächern wie Mathematik, Deutsch und weiteren Fächern (Schlaukopf, 2024.).

Die Vorteile von Schlaukopf sind, dass es vollständig kostenlos ist und eine breite Palette an Übungen und Aufgaben zur Verfügung stellt. Zudem bietet die Plattform sofortiges Feedback und Lösungen, wodurch die Kinder direkt sehen können, ob ihre Antworten richtig oder falsch sind.

Die Nachteile der Plattform sind jedoch, dass das Design im Vergleich zu anderen Plattformen weniger ansprechend ist (siehe Anhang 3). Darüber hinaus bietet Schlaukopf keine personalisierten Lernpfade und hat ein eher geringes Spielerlebnis für Kinder.`
      },
    ]
  },
  {
    id: 'medienplattform',
    title: 'Die passende Medienplattform',

    subsections: [
      {
        subtitle: 'Die Auswahlkriterien für die passende Plattform',
        text: `Die Auswahl der geeigneten Medienplattform erfolgt nach den Kriterien verschiedener Dimensionen der User Experience:

• Effektivität und Effizienz
• Sicherheit
• Funktionalität
• Erlernbarkeit
• Zufriedenheit und Spaß

Als wichtigstes Kriterium wird die Erlernbarkeit angesehen, da die Kinder spielerisch Mathematik lernen sollen und nicht schon Schwierigkeiten mit der Bedienung der E-Learning-Anwendung haben sollten. Darauf folgen die Effektivität und Effizienz. Die Anwendung soll zwar Spaß und Zufriedenheit vermitteln, jedoch sollten diese nicht über der Effektivität und Effizienz stehen, da der Sinn der Anwendung darin besteht, Kindern ein besseres Verständnis in Mathematik zu vermitteln und nicht in erster Linie nur Spaß zu bereiten.

Als drittes Kriterium wird die Sicherheit betrachtet. Die Sicherheit im World Wide Web bzw. ininternetabhängigen Anwendungen ist gerade im Bereich der Kinder unerlässlich und sollteeinen bestimmten Mindeststandard einhalten. Dies bedeutet keine unnötigen Werbeanzeigen,Links oder die Gefahr, dass das Kind Kaufabwicklungen abschließt. Der vorletzte Kritikpunktist die Zufriedenheit und der Spaß. Je höher diese für die Kinder sind, desto größer wird auchder Lernerfolg und desto höher die Motivation der Kinder, mit der Anwendung zu interagieren(Moser, 2012, S. 2ff.). Ein Beispiel, das die Motivation zur Interaktion mit der Anwendung gutwiedergibt, ist das „The Fun Theory“-Projekt (Volkswagen, 2009).

Der letzte Kritikpunkt, nach dem die User Experience in diesem Fall bewertet wird, ist dieFunktionalität. Es sei jedoch angemerkt, dass alle fünf Kritikpunkte von großer Wichtigkeit sindund sich die einzelnen Kriterien nur minimal in ihrer Relevanz unterscheiden. Im Großen undGanzen ist der Lernerfolg der Kinder das angestrebte Ziel, welcher sich durch positiveEmotionen der Kinder bei der Interaktion wahrscheinlich verbessert (Norman, 2003).`
      },
      {
        subtitle: 'Begründung & Vorstellung der ausgewählten Plattform',
        text: `Neben den bereits erwähnten Kriterien kamen noch weitere Überlegungen hinzu, die dieEntscheidung beeinflussen, welche Plattform für die Veröffentlichung unserer Anwendunginfrage kommt. Um die Anwendung für jedermann leicht zugänglich zu machen, wird sie alsWeb-App konzipiert, sodass sie betriebssystemunabhängig läuft. Dies ermöglicht es denKindern, frei zu entscheiden, ob sie sich am Desktop-Computer, auf dem Smartphone oder aufdem Tablet mit der Anwendung beschäftigen möchten. Da die Anwendung lediglich aufSensoren wie das Mikrofon zugreifen muss, wäre die Entwicklung einer nativen App oder einerCross-Plattform-App zu kosten- und zeitaufwändig. Die Entwicklung einer Web-App bietetsomit den Vorteil der betriebssystemunabhängigen Zugänglichkeit sowie geringere Zeit- undAufwandskosten.

Die Plattform, auf der die Anwendung erscheinen sollte, ist Scoyo. Auf der Plattform Scoyohaben Kinder nicht nur die Möglichkeit, werbefrei unterschiedliche Unterrichtsfächerspielerisch besser zu verstehen, sondern sie können auch durch ein ansprechendes Designund ein gutes Interaktionsdesign Spaß am Lernen und Verstehen haben.

Über eine eigene Schnittstelle lässt sich die Anwendung zudem in virtuelle Klassenzimmerintegrieren und bietet die Möglichkeit, durch einen Lehrer in Echtzeit betreut zu werden. Dietechnische Umsetzung dieser Funktion würde jedoch den Rahmen dieser Fallstudie sprengenund wird daher nicht genauer erläutert.`
      }],

  },
  {
    id: 'entwicklung',
    title: 'Entwicklung des E-Learning Konzepts',
    subsections: [
      {
        subtitle: 'Grundidee',
        name: 'Quelle: Eigene Darstellung',
        text: 'Die Vorproduktion stellt einen der wichtigsten Teile des gesamten Ablaufs für den Imagefilm dar. Am Anfang jeder Vorproduktion steht das Briefing. Hier werden Budget und Wünsche in Absprache mit dem Kunden bzw. dem Auftraggeber besprochen. Nun folgt die Phase des Research und Developments, in der alle Informationen, die zu dem Thema passen, die es schon gibt, zusammengetragen werden, um sich so Inspirationen zu holen (Kamp, 2022, S. 227). Eine gute Methode für diese Phase ist es, mithilfe einer Brainstorming- Mindmap schnell und effizient Ideen zu erstellen, die im Anschluss als Ausgangspunkt dienen können (Jovy, 2021, S. 49). Nach der Research Phase beginnt die Ideenentwicklung, in der mit Moodboards die ersten Stimmungen für den Film gesammelt werden. Das Moodboard ist Collage aus Bildern und Schriftzügen, um, wie schon der Name herleiten lässt, eine gewisse Stimmung einzufangen (Heiser, 2020, S. 353). In dieser Phase sollen hauptsächlich viele unterschiedliche Eindrücke mithilfe der Moodboards festgehalten werden, die im Anschluss in Rücksprache mit Concrete Gold betrachtet und beurteilt werden können. Nachdem die ersten Ideen mit Concrete Gold besprochen sind, folgt der nächste Schritt. Meist werden die drei stärksten Ideen für die Weiterverarbeitung genommen und in den darauffolgenden Schritten weiter ausgearbeitet.',
      },
      {
        subtitle: 'Struktur & Aufbau',
        text: `Die Produktion ist der kosten intensivste Teil des gesamten Verlaufs. Neben den technischen Notwendigkeiten, die die Vorproduktion zuvor ermittelt und festgelegt hat, sind auch die Leistungen der Schauspieler und die Gegebenheiten wie das Wetter ausschlaggebend und wichtig. Gerade bei der Arbeit mit vielen Menschen ist deshalb das Wohlbefinden der Mitarbeiter und der Schauspieler ein ausschlaggebender Parameter, wie schnell und wie gut die Dreharbeiten vonstattengehen (Petzke & Graf, 2019, S. 100). Die Dreharbeiten für den Imagefilm von Concrete Gold teilen sich in zwei Teile auf, die einen Ressourcen optimierten Ablauf verfolgen, der mithilfe des Drehbuchs erstellt wird. Zuerst werden die Aufnahmen im Studio mit den Schauspielern erstellt. Wichtig ist es zudem, die Anfänge jeder Szene und das Ende jeder Szene nie aus den Augen zu verlieren. Die Post-Produktion soll zwar erst die flüssige Abfolge der Szenen gewährleisten, benötigt aber trotzdem passendes Bildmaterial, um dies zu erreichen. Der Ablaufplan wird dementsprechend zuerst die 1. Szene mit der glücklichen Frau aufnehmen, im Anschluss die Gruppenaufnahme, gefolgt von der 5. Szene. Die letzten Aufnahmen, bei denen die Schauspieler mitwirken, sind die handwerklichen Nahaufnahmen, bei denen der Schauspieler aber nur eine nebensächliche Rolle spielt, da die Aufnahmen ihren Fokus auf den Schmuckstücken haben. Die einzelnen Aufnahmen werden mithilfe von Takes nummeriert und in einem direkten Online-Backup gespeichert, somit werden Datenverluste direkt vermieden (Petzke & Graf, 2019, S. 191ff.). Der zweite Teil der Dreharbeiten findet on Location statt, jedoch mit einer kleineren Crew, da keine Schauspieler benötigt werden. Die Aufnahmen erfolgen mithilfe einer Drohne, um so gute Luftaufnahmen zu gewährleisten. Auch hier werden die Aufnahmen mit Takes nummeriert & durch ein sofortiges Backup gesichert.
          
![Start-Screen, Quelle: Eigene Darstellung](start)

Wie schon kurz erwähnt, haben die Kinder die Möglichkeit, ihre Erfolge über die Profilansicht zu sehen und dort ihren Lernerfolg und Lernfortschritt zu betrachten (siehe Abbildung 2 Profil-Screen).

![Profil-Screen, Quelle: Eigene Darstellung](profil)

Die Lernumgebung und Aufgaben gestalten sich im Design ähnlich wie die Start- und Profil-Screens. Stets an der Seite des Nutzers ist der kleine Drache Ananas mit dem individuellen Charakteraussehen zu sehen. Die Spiele lassen sich durch Spracheingaben, Touch-, Maus- und Tastatureingaben lösen. Zwischen den Lernaufgaben erscheinen gelegentlich kleine Minispiele, um die Konzentration der Schüler wieder etwas aufzulockern und dem Ganzen den spielerischen Charakter zu verleihen, der das Lernen so amüsant macht (siehe Abbildung 3 Minispiel).

![Minispiel, Quelle: Eigene Darstellung](game)`}]
   },
  {
    id: 'interaktionskonzepte',
    title: 'Interaktionskonzepte zur Förderung der Motivation',
    subsections: [
      {
        subtitle: 'Gamification',
        text: `Da Motivation einer der wichtigsten Faktoren für Lernerfolg ist (Sailer et al., 2017), ist das
Interaktionskonzept der Gamification von besonderer Bedeutung. Für Kinder spielt auch der
Spaßfaktor eine wichtige Rolle, welcher in der Anwendung durch ein Belohnungssystem erzielt
wird. Kinder können nach bestandenen Aufgaben und Modulen ihren Lernerfolg in Form von
Abzeichen und anderen Orden einsehen, die auf ihrem öffentlichen, nur für registrierte Nutzer
der Anwendung einsehbaren Profil angezeigt werden. Um dieses Belohnungssystem noch
interessanter zu gestalten, können nach dem Bestehen verschiedener oder besonders
anspruchsvoller Module und Zusatzlernaufgaben verschiedene Outfits für den Charakter des
Kindes gewonnen werden. Diese Outfits können dann individuell ausgewählt werden, und das
gewählte Aussehen ist während der Lernaufgaben sichtbar. Dieses Konzept basiert auf der
Achievement Goal Theory, bei der den Lernenden ein Ziel gesetzt wird, das es zu erreichen
gilt, wodurch die Motivation gesteigert wird (Kim et al., 2018, S. 41).`
      },
      {
        subtitle: 'Personalisierte Lernwege',
        text: `Die personalisierten Lernwege basieren auf behavioristischen Lernansätzen, genauer gesagt
auf der Lerntheorie der verzweigten Programme und tutoriellen Systeme. Die Anwendung
passt sich demnach an die Lernenden an, indem sie erkennt, welche Aufgaben der Nutzer gut
und schnell löst und welche ihm schwieriger fallen. Die darauffolgenden Aufgaben werden
zunehmend darauf ausgerichtet sein, die Schwächen der Nutzer zu thematisieren und die
Problemgebiete zu bearbeiten. Dieses Konzept der Anwendung kann jedoch dazu führen,
dass die Motivation der Nutzer eher sinkt anstatt zunimmt, da die Erfolgsquote beim
Bearbeiten der Aufgaben zunächst abnimmt. Aus diesem Grund wird dieser Ansatz eher subtil
in die Anwendung integriert, um die Motivation der Nutzer nicht zu beeinträchtigen.`
      },
      {
        subtitle: 'Interaktive Geschichten',
        text: `Gerade für die jüngeren Kinder ist es wichtig, die Interaktivität mit der Anwendung so einfach
und intuitiv wie möglich zu gestalten. Die Geschichten, die der kleine Drache Ananas erlebt,
werden deshalb in die Lernumgebung integriert, sodass durch Spracheingaben und kleine
Minispiele mit Touch- oder Mauseingabe den Kindern zunächst gar nicht bewusst sein wird,
dass sie sich mit Mathematik befassen. Der Sinn dieser Herangehensweise liegt darin, den
Kindern durch fehlende Vorurteile oder falsche Annahmen nicht direkt den Spaß oder die
Chance zu nehmen, sich für mathematische Aufgaben und Themengebiete begeistern zu
können.`
      }
    ]
  },

  {
    id: 'möglichkeiten',
    title: 'Möglichkeiten für gemeinsames Lernen mit anderen Kindern',
    subsections: [
      {
        subtitle: 'Chats, Foren & Diskussionsgruppen',
        text: `Für die jüngeren Teilnehmer dieser Anwendung wird die Möglichkeit zur Nutzung von Foren
und Diskussionsgruppen nur begrenzt verfügbar sein. Erst ab einem Lernniveau, das sicher
der 3. Klasse oder höher entspricht, wird den Nutzern Zugang zu diesen Funktionen
ermöglicht. Aufgrund des noch jungen Alters der Kinder sind reife Diskussionen und
Erarbeitungen durch Chats und Foren eher unwahrscheinlich. Deshalb sind die
Diskussionsgruppen primär für die Eltern gedacht, um sich über den Lernerfolg und Fortschritt
ihrer Kinder auszutauschen. Zusätzlich ermöglichen diese Gruppen auch ein durch Eltern oder
Lehrer arrangiertes gemeinsames Gruppenlernen.`
      },
      {
        subtitle: 'Virtuelle Klassenzimmer',
        text: `Der Vorteil von virtuellen Klassenzimmern liegt vor allem darin, dass Kinder nicht nur an ihrer
Fachkompetenz, sondern gleichzeitig an ihrer sozialen Kompetenz arbeiten (Seufert & Euler,
2009, S. 286). In virtuellen Klassenzimmern haben Kinder und Lehrende die Möglichkeit, sich
über Themen und Dokumente asynchron auszutauschen (Mentzel, 2018, S. 202).

Die Integration dieser Anwendung in ein virtuelles Klassenzimmer kann eine effiziente
Möglichkeit sein, um Kindern die Möglichkeit zu geben, sich bei Fragen oder Problemen direkt
an Mitlernende und Lehrende zu wenden. Das virtuelle Klassenzimmer kann mithilfe der
Drachen-Profile, die nach außen hin anonym und nur mit einem Nickname versehen sind,
zusätzlich den Kindern die Chance geben, anderen zu helfen. Das System, das hier zum
Einsatz kommt, ist demnach speziell für kooperatives Lernen vorgesehen.`
      },
      {
        subtitle: 'Gemeinsame Aufgaben & Wettbewerbe',
        text: `Durch die zuvor beschriebenen kooperativen Lernkonzepte können Kinder in inszenierten
Situationen gemeinsam in Gruppenaufgaben arbeiten, sich gegenseitig beim Lernen
unterstützen, gemeinsam Aufgaben lösen und sich auch untereinander messen. Die
wettbewerbsbezogenen Spiele sollten jedoch nicht das Wesentliche, den Lernerfolg aller
Kinder, aus den Augen verlieren und die schwächeren Kinder nicht durch zu großen
Wettbewerbsdruck demotivieren.In gemeinsamen Minispielen können Kinder sich gegenseitig
helfen. Zudem sollten die Spiele sich nicht nur auf den Lernerfolg des Einzelnen fokussieren,
sondern vielmehr darauf, anderen helfen zu können. Mithilfe des Gamification-Ansatzes, der
Belohnungssysteme nutzt, können die Kinder durch Erfolge und Belohnungen gezielt auf das
gegenseitige Fördern gelenkt werden.`
      }
    ]
  },

  {
    id: 'schlussteil',
    title: 'Schlussteil',
    subsections: [
      {
        subtitle: 'Reflexion',
        text: `Es ist schwierig, ein Konzept zu entwerfen, das jedem Kind Mathematik leicht zugänglich
macht und die Freude an diesem Fach weckt. Trotzdem ist der Ansatz, der in dieser Fallstudie
erarbeitet wird, ein guter Anfang, um damit einige Kinder mehr für dieses Fach zu begeistern.
Aufgrund der eher geringen Interaktionsmöglichkeiten, die Kinder von zu Hause aus
miteinander haben können, gestaltet sich das Konzept hinsichtlich Foren und Chats noch
etwas wackelig. Kinder in diesem Alter haben wahrscheinlich noch Schwierigkeiten, über
schriftliche Konversationen mit anderen zu kommunizieren.

Dennoch sind die Ansätze dieses Konzepts gut gewählt. Durch die eingebauten Konzepte wie
Gamification oder die interaktiven Geschichten, bei denen sich jedes Kind in Form eines
eigenen Drachencharakters personifizieren kann, bietet die Anwendung mit Sicherheit vielen
Kindern die Chance, leichter und spielerischer mit den Themen der Mathematik
klarzukommen.`
      },
      {
        subtitle: 'Ausblick',
        text: `Dass der Ansatz des in der Fallstudie erarbeiteten E-Learning-Konzepts noch nicht perfekt ist,
steht außer Frage. Die Erkenntnisse, die uns diese Arbeit jedoch geben konnte, umfassen
unter anderem die Frage, ob es noch bessere und intuitivere Möglichkeiten für einen
kooperativen Lernansatz im Themengebiet der Mathematik gibt. Die Schwierigkeit wird vor
allem darin liegen, die Motivation der Kinder zu mobilisieren, die in Mathematik eher
durchschnittlich oder nicht sehr gut sind.

Da Mathematik oft ein Fachbereich ist, der Kindern entweder gut oder nicht gut gefällt, stellt
sich zusätzlich die Frage, ob es eine Möglichkeit gibt, die in Mathematik stärkeren Schüler so
in das Konzept zu integrieren, dass sie auf die schwächeren einen positiven Einfluss auf die
Motivation ausüben, anstatt das Gegenteil zu bewirken`
      },
   
    ]
  },
  {
    id: 'literaturverzeichnis',
    title: 'Literaturverzeichnis',
    subsections: [
      {
        text: `Ahoiii Entertainment. (2024). Fiete Math Climber [App Store]. Apple App Store.
https://apps.apple.com/de/app/fiete-math-climber/id1271712039

Kim, S., Song, K., Lockee, B. B., & Burton, J. (2018). Gamification in Learning and Education
[electronic resource]: Enjoy Learning Like Gaming (Fernstudium). Springer
International Publishing.

Kritzenberger, H. (2009). Multimediale und interaktive Lernräume [electronic resource]
(Fernstudium POL). Oldenbourg.

Mentzel, W. (2018). Personalentwicklung [electronic resource]: Wie Sie Ihre Mitarbeiter
erfolgreich motivieren, fördern und weiterbilden (Fernstudium; 5., überarbeitete
Auflage, Originalausgabe). dtv.

Moser, C. (2012). User Experience Design [electronic resource]: Mit erlebniszentrierter
Softwareentwicklung zu Produkten, die begeistern (Fernstudium). Imprint: Springer.

Norman, D. (2003). Emotional Design: Why We Love (or Hate) Everyday Things. In The
Journal of American Culture (Bd. 27). Basic Books.

Sailer, M., Hense, J., Mayr, S., & Mandl, H. (2017). How gamification motivates: An
experimental study of the effects of specific game design elements on psychological
need satisfaction. Computers in Human Behavior, 69, 371–380.
https://doi.org/10.1016/j.chb.2016.12.033

Schlaukopf. (o. J.). Schlaukopf.de—Lernen kann Spaß machen! [E-Learning]. Abgerufen 12.
Juli 2024, von https://www.schlaukopf.de

scoyo. (2024). Einfach leichter lernen mit scoyo | Mathe, Deutsch, Englisch & mehr | Klasse
1-7 [E-Learning]. Lerne mit scoyo! https://www.scoyo.de/

Seufert, S., & Euler, D. (2009). E-Learning in Hochschulen und Bildungszentren. Oldenbourg
Wissenschaftsverlag. https://doi.org/10.1515/9783486593754

Stephan, A., & Walter, S. (2013). Handbuch Kognitionswissenschaft. J.B. Metzler.
Volkswagen (Regisseur). (2009). The Volkswagen Fun Theory 1 – Piano Staircase Initiative
Drive Ingram Volkswagen [Video recording].
https://www.youtube.com/watch?v=QU8Rms94C5c`
      },
    
    ]
  },  
 
  ],

}



// Concrete Gold Case Study
export const concreteGoldData = {
  id: 'concrete-gold',
  slug: 'concretegold',
  title: "Concrete Gold - Imagefilm Konzeption",
  subtitle: "Fallstudie zur Entwicklung eines Imagefilms für ein Schmuck-Startup",
  client: "Concrete Gold",
  date: "November 2023",
  duration: "3 Monate",
  category: "Video & Motion Design",
  tags: ["Imagefilm", "Konzeption", "Produktion", "Branding"],
  imageMap: goldImageMap, // Füge die Image Map hinzu


  // Sections mit Subsections
  sections: [{
    id: 'einleitung',
    title: 'Einleitung',
    subsections: [
      {
        subtitle: 'Einführung in das Thema',
        text: 'Die folgende Fallstudie wird sich mit der Erarbeitung und Planung des Imagefilms für Concrete Gold befassen. Zu Beginn werden alle Informationen zusammentragen und analysiert, die für den im Anschluss folgenden Ablauf benötigt werden. Nachdem alle wichtigen Details über das Unternehmen und die Zielgruppe vorhanden sind, werden die Problemstellungen und die Herausforderungen, die der Imagefilm bestehen muss, betrachtet. Anschließend folgt die Entwicklung eines Konzeptes für den Imagefilm und die Planung der technischen Bedingungen und Anforderungen für die Umsetzung des Films. Auf die Vorproduktion folgt im Anschluss noch eine Beschreibung der Produktion, sowie der danach noch notwendigen Postproduktion. Im Fokus der gesamten konzeptionellen und technischen stehen die Wünsche und Ziele, die Concrete Gold mit dem Imagefilm erreichen will.'
      },
      {
        subtitle: 'Vorstellung des Unternehmens „Concrete Gold',
        text: 'Das junge Start-up-Unternehmen „Concrete Gold“ ist im Bereich des Schmuckdesigns tätig und kann mit einer außergewöhnlichen Ästhetik mit seinen Produkten dienen. Letzteres wird vor allem durch die außergewöhnliche Herstellung der Schmuckstücke erreicht. Concrete Gold benutzt in der Herstellung nämlich High-End-Beton in Kombination mit hochwertigem Gold & Edelsteinen. Im Angebot des aktuellen Sortiments befinden sich Ringe, Ohrstecker & Kettenanhänger mit Ketten aus Edelmetall. In ihrer Unternehmens-Philosophie steht klar die besondere Aufgeschlossenheit gegenüber neuen Dingen im Fokus. Eine zu konventionelle und konservative Ansichtsweise würde nicht mit der Einstellung, mit dem Zeitgeist gehen zu wollen, übereinstimmen. Neben dieser aufgeschlossenen Art kommt noch das Augenmerk auf das für die Herstellung angewendete Handwerk. Trotz, dass das Preissegment des Unternehmens im Hinblick auf die Branche, in der sie sich befinden, im „unteren“ Bereich bei 100–500 €, soll aber trotz dessen eine edle Ausstrahlung erzeugen.'
      },
      {
        subtitle: 'Problemstellung und Zielsetzung',
        text: `In der heutigen Zeit sind der Wiedererkennungswert und die Bekanntheit, die eine Marke ausstrahlt und mit sich bringt, die ausschlaggebenden Einflüsse, die den Erfolg der Marke und des Unternehmens darstellen. Die visuellen Eindrücke, die auf uns jeden Tag, ununterbrochen einwirken, sind so gigantisch, dass der größte Teil dieser wahrgenommenen Informationen von uns ausgeblendet und gar nicht bewusst erlebt wird. Angesichts dessen hat sich das noch junge Start-up-Unternehmen „Concrete Gold“, dass im Bereich Schmuckdesign tätig ist und in der Herstellung der Schmuckstücke High-End-Beton in Kombination mit Gold und Edelsteinen verwendet, dazu entschieden einen Imagefilm zu produzieren. Das Besondere an 3 dem Design ihrer Schmuckstücke ist das Alleinstellungsmerkmal, nämlich die Verarbeitung von High End Beton in Kombination mit Edelsteinen und Gold, um so eine einzigartige Ästhetik zu erzeugen, die einen modernen und unkonventionellen Stil prägt. Trotz des noch jungen Alters aber konnte sich „Concrete Gold“ schon einmal den ersten Platz bei einem internationalen Award für Schmuckdesign erkämpfen. 
        
        Um noch weitere Erfolge zu erreichen und eine stabile Marktpositionierung der Marke zu bekommen, benötigt Concrete Gold jedoch mehr als nur diese einzigartige Ästhetik, da in der heutigen Zeit der Markt stark umkämpft ist. Concrete Gold will mit der Entwicklung eines Imagefilms die Bekanntheit, der noch wenig bekannten Marke, auf eine positive und kraftvolle Art und Weise steigern. Der Film soll nicht einfach eine Produktwerbung sein, die eine Botschaft zur Kauf-Aufforderung darstellt, sondern soll die Werte und die Geschichte des Unternehmens wiedergeben. Durch die Verwendung dieses Imagefilms soll das Image und die Identität von Concrete Gold in ein Licht gerückt werden, das die modernen und zeitgenössischen Bedürfnisse der Zielgruppe erfüllt. Gleichzeitig aber nicht zu verspielt und naiv zu wirken, um somit den Wünschen und Vorlieben der etwas älteren Zielgruppe gerecht werden. Es ergeben sich somit mehrere Problemstellen, die der Imagefilm lösen soll. Zum einen ist der noch kleine Bekanntheitsgrad der Marke. 
        
        Besonders in einer so auf Markenqualität gestützten Branche, ist der Name der Marke und das damit verbundene Gefühl, das die Marke auslöst, ein sehr hoher Einflussfaktor auf die Kaufentscheidungen der Kunden. Ein weiterer Punkt, der durch die Produktion und Veröffentlichung des Imagefilms einhergeht, ist die schon etwas größere Zielgruppe. Somit muss gut durchdacht sein, was der Film zeigen soll, um Personen im Alter von 16–40 Jahren gleichermaßen anzusprechen, wie die Zielgruppe der Personen im Alter von über 40. Mit diesen beiden Problemstellungen, würden sich definitiv einige Lösungsansätze erstellen lassen, die den Wert, die Bekanntheit und das Image, also die Brandawarness der Marke erhöht. 
        
        Jedoch gibt es diesbezüglichen noch ein weiteres Problem, welches die Auswahl der richtigen Kommunikationskanäle erfordert. Heutzutage sind die Kommunikationskanäle, die zur Verfügung stehen, um einiges umfangreicher als vor noch 50 Jahren. Zudem ist es noch wichtig, die Tatsache zu berücksichtigen, dass neben diesen unzähligen Vertriebskanälen, noch der Nutzungsumfang dieser Kanäle bei jeweiligen Altersgruppen stark variieren. Der Imagefilm muss somit inhaltlich gut auf die Wünsche der Zielgruppen abgestimmt werden und gleichzeitig den vom Unternehmen gerne erzielten Eindruck hinterlassen. Der geeignete Kommunikationsweg muss definiert werden, um somit während der Dreharbeiten, schon bewusst mit dem Format und dem Anschnitt arbeiten zu können, um so noch zusätzlich die Wirkung des Films zu beeinflussen.`
      }
    ]
  },
  {
    id: 'marktanalyse',
    title: 'Marktdurchdringung & Reichweite',
    subsections: [
      {
        subtitle: 'Zielgruppenanalyse',
        text: `Eine gute Zielgruppenanalyse ist der erste Punkt, um einen guten Lösungsweg weg für die eben definierten Problemstellungen zu entwickeln. Die Zielgruppe von Concrete Gold besteht zu 70 % aus der Altersgruppe der 16–40-Jährigen und zu 30 % aus der Altersgruppe der über 40-Jährigen. Um sich nun ein Bild, davonzumachen, was die Zielgruppen für Ansprüche und Bedürfnisse haben, ist es wichtig sogenannte Lebensstildaten von der Zielgruppe zu sammeln, umso leichter die Denkweise und Ansichten nachvollziehen zu können (Werner Kroeber-Riel & Andrea Gröppel-Klein, 2019, S. 534). Das Konsumentenverhalten verschiedener Generationen variiert vor allem noch in den jüngeren Generationen stark (Werner Kroeber-Riel & Andrea Gröppel-Klein, 2019, S. 455–458). Um Concrete Gold für den Imagefilm einen guten Ansatz zu bieten, an dem man den Inhalt etwas orientieren kann, folgen im Anschluss 2 kurze fiktive Persona, die in die Zielgruppe passen könnten.
        
        ![Quelle: https://www.statista.com/](statistik)`,
           },
      {
        subtitle: 'Konkurrenzvergleich',
        text: `Der Distributionskanal spielt die zweite wichtige Rolle, um unsere Zielgruppe auf die bestmögliche Art und Weise zu erreichen. Aufgrund dessen, dass der Imagefilm 1 – 2 Minuten lang werden wird, ist die Wahrscheinlichkeit für einen Fernsehauftritt sehr gering. 
                Ein wichtiger Punkt, der auch eine Rolle spielt, ist die Erkenntnis, welche schon durch mehrere Studien bewiesen wurde, dass der Content auf Social-Media-Plattformen nur bei 20 % aller Konsumenten wirklich eine Kaufentscheidung verursachen. Den Social Media Kanälen wird hingegen ein Einfluss auf die Markenbekanntheit und einer Zunahme der Word-of-Mouth-Aktivitäten zugeschrieben (Werner Kroeber-Riel & Andrea Gröppel-Klein, 2019, S.598). Somit ist klar, dass die sozialen Medien wahrscheinlich das größte Potenzial dazu haben, all unsere Zielgruppen zu erreichen und vor allem das gewünschte Ziel der Brandawarness und der größeren Bekanntheit der Marke zu bewirken. Unter den beiden wohl am stärksten konsumierten Social-Media-Plattformen zählen Facebook und Twitter, wobei Twitter noch den Vorteil der barrierefreien Erreichbarkeit besitzt, die bei Facebook leider nur mit einer Anmeldung oder Registrierung möglich ist (Fleischmann, 2015, S.80).`
      }
    ]
  },
  {
    id: 'konzeption',
    title: 'Inhaltliche Konzeption',
    subsections: [
      {
        subtitle: 'Konzeption',
        text: 'Der inhaltliche Ablauf, den der Imagefilm beinhalten soll, sollte in erster Linie das Unternehmen in das gewünschte Licht rücken, sowie aber auch gleichzeitig die Brandawarness auf positive Weise verstärken. Da Concrete Gold wie schon zu Anfang erwähnt ein unkonventionelles Unternehmen ist, dass mit dem Zeitgeist geht, solle der Inhalt auf eine lockere, unbeschwerte, freie Art und Weise arrangiert werden. Auf diese Art und Weise sollte schneller das Interesse geweckt werden. Da sich die Zielgruppe zum größten Teil im Altersbereich der jungen Erwachsenen befindet, ist noch darauf zu achten der Marke eine gewisse Stabilität und Eigenständigkeit zu verleihen. Aus Kundensicht wird somit durch das Tragen solchen Schmucks das eigene Image und Selbstvertrauen gestärkt. Da die Identifikation von sich selbst mit einer Marke eine sehr hohe Bindung mit dem Kunden aufbaut, sollte gerade, weil auch Schmuck in den Bereich der Luxus-Artikel fällt und dementsprechend zur Selbstverwirklichung dient, auf die richtigen Darstellungswerte geachtet werden. Zudem soll der Imagefilm positiv wirken, indem vor allem glückliche Gesichter zu sehen sein sollten. Der Inhalt wird zudem eine Aneinanderreihung, sehr vieler kleiner Cut-Szenen.'
      },
      {
        subtitle: 'Ablauf',
        text: 'Die Szenen werden sich bis zum Finale in einem sprunghaften Wechsel von Aufnahmen mit Menschen zu Aufnahmen ohne Menschen, mit erhabenem und starkem Bildmaterial bewegen, das ein Gefühl von Freiheit und Stabilität vermitteln soll. Nach jeder Szene mit Natur oder Handwerk folgt eine kurze Szene mit einer glücklichen Person, entweder ein Kunde, der sich über sein neues Schmuckstück freut, oder ein Mitarbeiter, der stolz von der Herstellung der "High End Beton, mit Gold" kombinierten Schmuckstücke erzählt. Diese „Interview-Szenen“ sollten jeweils maximal nur 2 bis 3 aussagekräftige Sätze pro Person enthalten. Das Ziel des Imagevideos ist es, den edlen Charakter und die Ästhetik der Marke "Concrete Gold" auf subtile, aber spürbare Weise zu präsentieren. Die Szenen, die das Handwerk zeigen, sollen nicht nur Einblicke in die Herstellung bieten, sondern auch ein Gefühl von Stärke und Kraft vermitteln, welches die Marke ausstrahlt. Bis etwa 1:15 Minuten besteht das Video aus dieser Abfolge von Natur, Handwerk und Menschen. Die Musik wird während der Szenen ohne Menschen lauter und gewinnt kontinuierlich an Spannung. Die letzte Szene wird plötzlich von einer starken, spannungssteigernden Musik eingeleitet und von einer epischen Chor- und Orchestermischung begleitet. Zusätzlich zu den beschriebenen Szenen und Einstellungen sollte die Kamera so eingestellt werden, dass sie die Schönheit der Natur und die Präzision des Handwerks einfängt, während sie gleichzeitig die Emotionen und das Glück der Menschen authentisch wiedergibt.'
      },
      {
        subtitle: 'Szenen',
        subsubsections: [
          {
            sub: '1. Szene',
            text: 'Der Film beginnt mit einer glücklichen Frau, die den Ausdruck "Wahnsinn, es ist etwas Schönes, passiert" verbildlicht und sich freut. Der genaue Grund dafür wird nicht gezeigt. Die Szene sollte in einer leichten Unschärfe in den Schnitt laufen. Zudem ist direkt zu Beginn auch ihre Freude deutlich zu hören. Die Frau wird in einer halbnahen Aufnahme gezeigt.'
          },
          {
            sub: '2. Szene',
            text: 'Ab hier setzt auch die musikalische Tonuntermalung in Form eines noch leisen Orchesters, dass eine leichte, anregende und aufregende Melodie spielt. Die Lautstärke wird sich mit dem Musikspielstil kontinuierlich langsam bis zur finalen Szene etwas steigern. Der Stil der Musik erlebt dadurch eine immer spannendere Stimmung. Das visuelle Bewegtbild in dieser Szene knüpft an die Unschärfe von Szene 1 an. Diese Aufnahme zeigt eine steinige Klippe gegen die, die Wellen des Meeres peitschen. Der Bildausschnitt sollte hier in einer Totalen oder Supertotalen gedreht werden.'
          },
          {
            sub: '3. Szene',
            text: 'Diese Szene zeigt nun wieder glücklichen Menschen, die mit der Familie oder Freunden gemeinsam eine gute Zeit erleben. Nach etwa der Hälfte der Zeit, die diese Szene gezeigt wird, fängt eine ruhige freundliche Männerstimme an einzelne Phrasen, wie die aus einem Interview zu sagen. Inhaltlich wird sich das Gesagte mehr oder weniger als ein stolzer Mitarbeiter oder sogar Unternehmensinhaber anhören, der auf ganz verspielte Art und Weise von den Werten des Unternehmens schwärmt.'
          },
          {
            sub: '4. Szene',
            text: 'Hier wieder ohne sprachliche Vertonung, nur mit dem energetisch klingenden Orchester. In dieser Szene werden kurze Ausschnitte der Herstellung und Produktion der Schmuckstücke gezeigt werden, im Idealfall zeigen diese Bilder die spannendsten Momente der Herstellung. Kurz vor Ende dieser Szene beginnt der Sprecher weiterzureden.'
          },
          {
            sub: '5. Szene',
            text: 'Halb nahe Aufnahme von dem Sprecher, der scheinbar wirklich wie auf eine Art Interview antwortet, wichtig ist es hier, mit der Ausstrahlung und Überzeugung der glücklichen Gefühle, die der Mann verspürt so realistisch wie möglich zu sein, aber gleichzeitig nicht zu übertreiben.'
          },
          {
            sub: '6. Szene',
            text: 'Diese Szene sollte wieder Freiheit und Klarheit erzeugen, indem wieder Bilder von Landschaften gezeigt werden. Die gezeigten Landschaftsbilder sollten immer in einer Supertotalen aufgenommen werden, um das Gefühl von Freiheit zu verstärken.'
          },
          {
            sub: '7. Szene',
            text: 'Die vorletzte Szene zeigt noch einmal eine Frau, die strahlend einen sehr kurzen Aufruf wie: „Unvergleichbar einzigartig!“, von sich gibt. Ab dem Beginn dieser Szene fängt die musikalische Untermalung noch an einen kurzen und schnellen Spannungsbogen zu ziehen, der in der bildlichen Szene eines hellen Lichtes verstummt.'
          },
          {
            sub: '8. Szene',
            text: 'In der letzten Szene werden neben dem Logo des Unternehmens einige beispielhafte Schmuckstücke gezeigt. Die Szene wirkt wie ein Standbild, bei dem die Schmuckstücke etwas im Hintergrund liegen, während das Logo im Fokus steht. Ein künstlerischer Leuchteffekt des Logos oder des Goldes könnte die Szene bereichern. Die Schmuckstücke könnten sich in einer langsamen, subtilen Kurve von links nach rechts bewegen, ohne das Bild zu verlassen, wie auf einer Art „Drehteller“. In dieser Szene wird der Markenname "Concrete Gold" von einer ruhigen Männerstimme noch einmal gesagt, um der dem ganzen einen Abschluss zu geben.'
          },
        ]
      },

      {
        subtitle: 'Szenenbeschreibung',
        text: 'Die erste Szene soll sofort emotionale Neugier wecken und mit den darauffolgenden Szenen, die glückliche Menschen zeigen, weiter die Emotionen der Zuschauer ansprechen, Naturaufnahmen sollen die Beständigkeit und die Stabilität der Marke verstärken. Szenen, die das Handwerk und die Schmuckstücke zeigen, sollen die Authentizität und Seriosität der Marke unterstreichen. Die letzte Szene soll einen ruhigen und sicheren Abschluss mit dem Logo der Marke zeigen. Trotz der Vielzahl an verschiedenen Sequenzen ist es notwendig, dass der Imagefilm eine flüssige Abfolge aufweist, um zu vermeiden, dass der Zuschauer die Szenenwechsel als störend oder unpassend empfindet.'
      }
      ,
      {
        subtitle: 'Kommunikationsziel',
        text: 'Der Imagefilm soll mithilfe der genutzten Stilmittel und Techniken, einen Spannungsbogen erzeugen, der im Laufe des Films, mithilfe der sprachlichen Inhalte und der immer deutlicheren Bildinhalte dem Zuschauer den Hintergrund dieser Aufnahme nur langsam erahnen lässt. Die gezeigten Bilder sollen sehr selektiv wirken, was die bildlichen Inhalte betrifft, sollen aber den Zuschauer die Emotionen der Marke spüren lassen. Das Ziel der Bildausschnitte ohne Menschen ist es vorwiegend durch die Berge und steinige Strukturen, das Gefühl der Stabilität zu vermitteln. Die weiten Landschaftsaufnahmen geben der Marke das gewisse Maß an Freiheit, sowie die handwerkliche Präzision durch die detaillierten Nahaufnahmen der Schmuckstücke.'
      }
    ]
  },
  {
    id: 'umsetzung',
    title: 'Technische Umsetzung',
    subsections: [
      {
        subtitle: 'Vorproduktion',
       
        text: `
        
        
          Die Vorproduktion stellt einen der wichtigsten Teile des gesamten Ablaufs für den Imagefilm dar. Am Anfang jeder Vorproduktion steht das Briefing. Hier werden Budget und Wünsche in Absprache mit dem Kunden bzw. dem Auftraggeber besprochen. Nun folgt die Phase des Research und Developments, in der alle Informationen, die zu dem Thema passen, die es schon gibt, zusammengetragen werden, um sich so Inspirationen zu holen (Kamp, 2022, S. 227). Eine gute Methode für diese Phase ist es, mithilfe einer Brainstorming- Mindmap schnell und effizient Ideen zu erstellen, die im Anschluss als Ausgangspunkt dienen können (Jovy, 2021, S. 49). Nach der Research Phase beginnt die Ideenentwicklung, in der mit Moodboards die ersten Stimmungen für den Film gesammelt werden. Das Moodboard ist Collage aus Bildern und Schriftzügen, um, wie schon der Name herleiten lässt, eine gewisse Stimmung einzufangen (Heiser, 2020, S. 353). In dieser Phase sollen hauptsächlich viele unterschiedliche Eindrücke mithilfe der Moodboards festgehalten werden, die im Anschluss in Rücksprache mit Concrete Gold betrachtet und beurteilt werden können. Nachdem die ersten Ideen mit Concrete Gold besprochen sind, folgt der nächste Schritt. Meist werden die drei stärksten Ideen für die Weiterverarbeitung genommen und in den darauffolgenden Schritten weiter ausgearbeitet.',
     
     ![Vorproduktionsplan, Quelle: Eigene Darstellung](preproduction)

        Gefolgt auf die Ideenentwicklung, wird ein erstes Konzept des Films erstellt. In dieser Phase entsteht auch der aus Kapitel 3 beschriebene Plot, der für den nächsten Schritt eine entscheidende Rolle spielt. Der Plot beschreibt eine Szeneaneinanderreihung und dient mithilfe von Skizzen der Erstellung des Drehbuchs (Kamp, 2022, S. 215). Auf den Plot folgt dann die Ausarbeitung des Drehbuchs. Das Drehbuch ist jedoch nicht zwingend vor Produktionsstart fertigzustellen (Petzke & Graf, 2019, S. 76). Sobald das Drehbuch fertig ist, wird in Form eines Storyboards die erste Visualisierung des Imagefilms für Concrete Gold erstellt. Hier werden die Handlungen und Darstellungen, die das Drehbuch beschreibt, mithilfe von Skizzen visualisiert. Wichtig ist es hierbei mithilfe von Pfeilen und Anmerkungen schon der Regie eine gewisse Hilfestellung für die Kameraführung zu geben (David Harland Rousseau & Benjamin Reid Phillips, 2013, S. 14). Nachdem das Storyboard alle Szenen skizzenhaft in Darstellungen festgehalten hat, kann mithilfe eines Schnittprogramms der Inhalt so zusammengefügt werden, dass eine lückenlose inhaltliche Darstellung möglich ist. Dieser Schritt wird als Animatic bezeichnet. In diesem Schritt können mitunter auftretende Lücken somit schon erkannt und notfalls beseitigt werden.
        
         ![Moodboard, Quelle: Eigene Darstellung](moodboard)
         
         Da in diesem Projekt mehrere Arbeitsschritte von unterschiedlichen Personen bearbeitet werden, wie die Landschaftsaufnahmen mit der Drohne oder die Tonkomposition und Aufnahme mit dem Orchester und dem Tontechniker, ist es wichtig eine Pipeline aufzubauen. Die Pipeline ermöglicht es einen reibungslosen Übergang der einzelnen Projektphasen mit den jeweils unterschiedlichen Softwareprogrammen. Besonders wichtig wird der Aufbau der Pipeline ab der Verwendung von visuellen Effekten (Okun et al., 2015, S. 885), wie in der letzten Szene, in der das Concrete Gold Logo mit einem goldenen Schimmer glitzern soll. Nachdem der Pipelineaufbau steht, werden noch mithilfe von Produktionsskizzen wichtige Details für die spätere Produktion festgehalten. Unter anderem sollen die Produktionsskizzen die Hintergrundkulisse für die 5. Szene beschreiben. Zudem werden nun die Kulissen angefertigt und vorbereitet. Sonstige Requisiten wie die gezeigten Schmuckstücke werden von Concrete Gold zur Verfügung gestellt. Der vorletzte Schritt, bevor es mit der Produktion und den Dreharbeiten losgeht, ist das Casting für die Filmbesetzung. Benötigt werden etwa 4–5 junge Personen im Alter von ca. 20–40 Jahren für die Familien/Gruppenaufnahmen, zudem noch zwei junge Frauen für die 1. & 7. Szene sowie den authentisch wirkenden Mann mittleren Alters für die 5. Szene und die Sprachaufnahmen. Die Auswahl sollte immer vor Ort und in realer Begegnung erfolgen, da eine Auswahl lediglich über Fotos zu unerwarteten Komplikationen führen kann (Petzke & Graf, 2019, S. 68). Jetzt wird die entstandene noch einmal, falls nötig eingewiesen, um so eine reibungslose und gut funktionierende Teamarbeit zu gewährleisten (Petzke & Graf, 2019, S. 37).
         
         ![Storyboard, Quelle: Eigene Darstellung](storyboard)
         `
      },
      {
        subtitle: 'Produktion',
       text: `Die Produktion ist der kosten intensivste Teil des gesamten Verlaufs. Neben den technischen Notwendigkeiten, die die Vorproduktion zuvor ermittelt und festgelegt hat, sind auch die Leistungen der Schauspieler und die Gegebenheiten wie das Wetter ausschlaggebend und wichtig. Gerade bei der Arbeit mit vielen Menschen ist deshalb das Wohlbefinden der Mitarbeiter und der Schauspieler ein ausschlaggebender Parameter, wie schnell und wie gut die Dreharbeiten vonstattengehen (Petzke & Graf, 2019, S. 100). Die Dreharbeiten für den Imagefilm von Concrete Gold teilen sich in zwei Teile auf, die einen Ressourcen optimierten Ablauf verfolgen, der mithilfe des Drehbuchs erstellt wird. Zuerst werden die Aufnahmen im Studio mit den Schauspielern erstellt. Wichtig ist es zudem, die Anfänge jeder Szene und das Ende jeder Szene nie aus den Augen zu verlieren. Die Post-Produktion soll zwar erst die flüssige Abfolge der Szenen gewährleisten, benötigt aber trotzdem passendes Bildmaterial, um dies zu erreichen. Der Ablaufplan wird dementsprechend zuerst die 1. Szene mit der glücklichen Frau aufnehmen, im Anschluss die Gruppenaufnahme, gefolgt von der 5. Szene. Die letzten Aufnahmen, bei denen die Schauspieler mitwirken, sind die handwerklichen Nahaufnahmen, bei denen der Schauspieler aber nur eine nebensächliche Rolle spielt, da die Aufnahmen ihren Fokus auf den Schmuckstücken haben. Die einzelnen Aufnahmen werden mithilfe von Takes nummeriert und in einem direkten Online-Backup gespeichert, somit werden Datenverluste direkt vermieden (Petzke & Graf, 2019, S. 191ff.). Der zweite Teil der Dreharbeiten findet on Location statt, jedoch mit einer kleineren Crew, da keine Schauspieler benötigt werden. Die Aufnahmen erfolgen mithilfe einer Drohne, um so gute Luftaufnahmen zu gewährleisten. Auch hier werden die Aufnahmen mit Takes nummeriert & durch ein sofortiges Backup gesichert.
       
       ![Produktionsplan, Quelle: Eigene Darstellung](production)
       `
      },
      {
        subtitle: 'Post-Produktion',
      
        text: `Die Post-Produktion erfolgt als letzter Teil auf die zuvor durchgeführten Dreharbeiten. In diesem Teil werden die Aufnahmen zuerst während der Sichtung ausgewählt. Der Schnitt erfolgt zuerst in Form eines Rohschnittes, bei dem alle ausgewählten Aufnahmen in die richtige Reihenfolge gelegt werden, um somit schon einmal den groben Ablauf zu visualisieren und auch die Übergänge der Aufnahmeschnitte besser im Blick zu haben. Nach dem Rohschnitt erfolgt das Compositing, um die letzte Szene überhaupt erst komplett zu visualisieren, da diese Szene mehrere VFX beinhaltet. Außerdem werden mithilfe des Compositings die Szenenübergänge so nahtlos wie möglich gemacht. Der Feinschnitt passt die jetzt vorliegenden Aufnahmen der einzelnen Szenen bestmöglich aufeinander an, um eine für den Zuschauer flüssig ablaufende Filmeinheit zu erschaffen. Sobald die einzelnen Bilder des Filmes komplett sind, erfolgt der sogenannte Picture Lock. Der Picture Lock ist der Punkt in der Post-Produktion, ab dem sich nichts mehr am vorhandenen Bildmaterial ändern sollte. Das Grading ermöglicht es im Anschluss dem Film ein einheitliches Licht und Farbstimmung zu geben. Somit verschmelzen die einzelnen Szenen noch mehr miteinander und optimieren den gewünschten Effekt einer homogenen Bildsprache (Jovy, 2021, S. 551). Der letzte Teil vor der Fertigstellung des Filmes erfolgt mit der Vertonung. Die Akustik dient dazu, die emotionale Wahrnehmung der Zuschauer zu beeinflussen, um somit den visuellen Eindrücken eine noch prägendere Wirkung zu verleihen und dem Imagefilm von Concrete das gewünschte Image zu verleihen. 
        
        ![Post-Produktionsplan, Quelle: Eigene Darstellung](postproduction)
        `
      }
    ]
  },
  {
    id: 'fazit',
    title: 'Fazit',
    subsections: [
      {
        text: 'Der Inhalt dieser Fallstudie dreht sich um die Erstellung eines Imagefilms für das Startup-Unternehmen Concrete Gold und sollte den Effekt einer Steigerung der Markenbekanntheit und Reichweite erzielen. Die Umsetzung erfolgte mithilfe einer Ausarbeitung und umfangreichen Planung der technischen Inhalte und der inhaltlichen Konzeption und führte zu guter Letzt auch zum gewünschten Resultat. Der mit dieser Fallstudie produzierte Imagefilm konnte Concrete Gold in das von Ihnen gewünschte Licht rücken und auf eine nicht zu aufdringlich wirkende Art und Weise der Look & Feel der Marke Stabilität, Freiheit, Unabhängigkeit und den gegenwärtigen Zeitgeist verleihen. Der Film fesselt vorrangig durch den Spannungsbogen die Zuschauer und erhöht somit schon die Zahlen der Zuschauer, gleichzeitig werden aber die Emotionen auf eine subtile, aber wirkungsvolle Art und Weise angesprochen, um der Marke einen unvergesslichen Wiedererkennungswert zu geben.',

      }]
  },

  {
    id: 'literaturverzeichnis',
    title: 'Literaturverzeichnis',
    subsections: [
      {
        text: `Fleischmann, S. (2015). Approximation von Markenindikatoren durch Social Media Analytics.
In Evidenzbasiertes Markenmanagement; S. 79–149; ISBN 9783658119973,
9783658119980 (edsbas.AE62A594). BASE. https://doi.org/10.1007/978-3-658-
11998-0_3

Harland Rousseau, D. & Reid Phillips, B. (2013). Storyboarding Essentials: SCAD Creative
Essentials (How to Translate Your Story to the Screen for Film, TV, and Other Media):
Bd. 1st ed. Watson-Guptill.

Heiser, A. (2020). Das Drehbuch zum Drehbuch: Storytelling, Konzeption und Produktion für
Werbefilme, Trailer, Imagefilme und Viral-Videos /. Springer.

Jovy, J. (2021). Digital filmen: Das umfassende Handbuch (3095224). eBook Index. https://se-
arch.ebscohost.com/login.aspx?direct=true&db=edsebk&AN=3095224&site=eds-live

Kamp, W. (2022). AV-Mediengestaltung Grundwissen. Europa-Lehrmittel.

Kroeber-Riel, W.& Gröppel-Klein, A. (2019). Konsumentenverhalten. Vahlen.

Okun, J. A., Zwerman, S., Rafferty, K. & Squires, S. (2015). The VES handbook of visual ef-
fects: Industry standard VFX practices and procedures. Focal Press.

Petzke, J. & Graf, D. (2019). Drehplanung (2. überarbeitete Auflage). Herbert von Halem Ver-
lag.

Schwuchow K. & Gutmann, J. (2017). HR-Trends 2018: Strategie, Kultur, Innovation, Kon-
zepte (1607487; Bd. 14048). eBook Collection (EBSCOhost). https://se-
arch.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=1607487&site=eds-live`,

      }]
  }
  ],

}



// Alle Case Studies sammeln
export const allCaseStudies = [
  concreteGoldData,
  elearningData,
  // Weitere Studies...
]

// Helper-Funktionen
export const getCaseStudyBySlug = (slug) => {
  return allCaseStudies.find(study => study.slug === slug)
}

export const getCaseStudyById = (id) => {
  return allCaseStudies.find(study => study.id === id)
}

export const getRelatedStudies = (currentId, limit = 3) => {
  return allCaseStudies
    .filter(study => study.id !== currentId)
    .slice(0, limit)
}