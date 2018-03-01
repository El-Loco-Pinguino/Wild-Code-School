# Liens

Le Markdown supporte deux types de liens: en ligne et référence.

Avec les deux méthodes, le texte du lien est délimité par des [crochets].

Pour créer un lien en ligne, utilisez des parenthèses juste après l'accolade fermante du texte du lien. Dans ces parenthèses, indiquez l'URL où vous voulez que le lien mène, avec un titre optionnel pour ce dernier, entouré par des guillemets. Par exemple:
```markdown
[Je suis un lien en ligne](https://www.google.com)

[Je suis un lien en ligne avec un titre](https://www.google.com "Page d'accueil de Google")

[Je suis un lien type référence][Texte de référence insensible à la casse]

[Je suis une référence relative à un répertoire](../blob/master/LICENSE)
```

Les liens de type référence utilisent une deuxième fois des crochets, dans lesquels vous indiquez une étiquette permettant d'identifier le lien:
```markdown
Ceci est [un exemple][id] de lien style référence.
```

Vous pouvez laisser un espace entre les deux séries de crochets:
```markdown
Ceci est [un example] [id] de lien style référence.
```

Ensuite, n'importe où dans le document, vous pouvez définir le libellé du lien de cette façon, sur la même ligne:
```markdown
[id]: http://exemple.com/  "Titre optionnel ici"
```

**GitHub** et **GitBook** supportent les URL auto-liées. Ils auto-lieront les URL standard, alors si vous voulez lier à une autre URL (au lieu de définir le texte du lien), vous pouvez tout simplement entrer l'URL et elle deviendra une URL auto-liée vers cette dernière.


---

Voici un quiz concernant les liens Markdown.

Sélectionnez les liens valides:
- [x] `[a link](http://google.fr)`
- [ ] `(a link)[http://google.fr]`

> Le texte du lien est défini par des [crochets].

Quelles affirmations sont correctes concernant ce lien: ```[un lien](http://google.fr "google")```
- [ ] Le lien est https://google.fr
- [x] Le titre du lien est "google"
- [ ] Le texte "google" sera affiché
- [x] Le texte "un lien" sera affiché

> Les liens peuvent se décomposer en 3 éléments: le texte, l'URL et un titre.

---

