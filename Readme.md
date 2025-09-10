# Verziókezelés - git
## Helyi repo létrehozása

- inicializálás, megszületik a helyi repo:
    > git init
- ellenőrzés, mi módosult?
    > git status
- minden fájlt amiben történt módosulás szeretnék az új verzióba menteni:
    > git add .
- az előkészített adatokat(commit előtt) ellenőrzöm (a stage-n):
    > git status
- felhasználónév és email beállítása:
    > git config user.name ...
    > git config user.email ...
- új verzió megszületése(commit):
    > git commit -m "first commit"
- ellenőrzés:
    > git status