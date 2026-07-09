# Bus-Eignungstraining

Interaktive statische Übungswebseite zur Vorbereitung auf eine psychologische / leistungsbezogene Eignungsuntersuchung im Kontext Busfahrer-Qualifizierung.

## Zweck

Die Seite ist ein realitätsnahes Vorbereitungstraining, aber keine Kopie offizieller Testsysteme und keine medizinische, augenärztliche oder psychologische Begutachtung.

Trainiert werden:

- Deutschverständnis von Aufgaben und Prüfungsanweisungen
- Reaktionsfähigkeit
- Go-/No-Go-Reaktion ohne Fehlklicks
- Aufmerksamkeit und visuelle Suche
- Konzentration bei ähnlichen Zeichen
- Orientierung in Raster, Route und Liniengrafik
- Logik und Arbeitsgedächtnis
- Belastbarkeit bei Regelwechsel und mehreren Bedingungen

## Version 2

Diese Version enthält gegenüber der ersten Fassung:

- drei Modi: Lernmodus, kurzer Prüfungsmodus, langer Prüfungsmodus
- zufällig erzeugte Aufgabenvarianten
- grafische Linienverfolgung per SVG
- Raster- und Routenaufgaben
- interaktive Reaktionsspiele
- Arbeitsgedächtnis-Aufgaben mit kurzer Merkphase
- lokale Fortschrittsspeicherung
- Auswertung nach Bereichen
- Empfehlung für den nächsten Übungsschritt

## Arabische Hilfe

Bei jeder Aufgabe kann eine arabische Hilfe geöffnet werden. Sobald diese Hilfe genutzt wird, zählt die jeweilige Aufgabe mit 0 Punkten. So kann die Seite zuerst als Lernhilfe genutzt werden; das eigentliche Ziel bleibt aber, die deutschen Aufgaben ohne Übersetzung zu verstehen.

## Speicherung

Die Testergebnisse werden im Browser per `localStorage` gespeichert. Es werden keine Daten an einen Server gesendet. Der Verlauf bleibt nur auf dem jeweiligen Gerät und Browser erhalten.

## Datenschutz

Die Seite fragt keine personenbezogenen Daten ab. Bitte keine Namen, Kundennummern, Adressen oder sonstigen sensiblen Daten in die Seite eintragen.

## GitHub Pages

Die Seite besteht nur aus statischen Dateien:

- `index.html`
- `styles.css`
- `app.js`

Sie kann direkt über GitHub Pages bereitgestellt werden: **Settings → Pages → Deploy from a branch → Branch `main` → Folder `/root`**.
