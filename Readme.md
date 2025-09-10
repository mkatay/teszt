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

## Távoli repo létrehozása, összekapcsolás
- GitHub új repo létrehozás
- összekapcsolás:
    > git remote add origin https://github.com/mkatay/teszt.git
- első push:
    > git push -u origin master
- további push:
    > git push