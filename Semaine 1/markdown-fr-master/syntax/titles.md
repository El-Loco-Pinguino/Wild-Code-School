# Titres

Comme nous venons de commencer à écrire un document en Markdown, nous devons définir un titre et des sous-titres.

Markdown accepte 2 types de titres, Setext et atx.

Les titres de style Setext sont "soulignés" en utilisant des signes égal (pour les titres de niveau 1) et des tirets (pour les titres de niveau 2). Par exemple:

```
Ceci est un H1
==============

Ceci est un H2
--------------
```

N'importe quel nombre de = ou - fonctionnera.

Les titres de style Atx utilisent 1 à 6 dièses au début de la ligne, correspondant au niveau du titre 1-6. Par exemple:

```
# Ceci est un H1

## Ceci est un H2

###### Ceci est un H6
```


En option, vous avez le droit de "fermer" les titres de style atx. Ceci est purement esthétique, vous pouvez le faire si vous jugez que ça passe mieux. Les dièses de fermeture n'ont même pas à être autant que les dièses d'ouverture. (Le nombre de dièses d'ouverture détermine le niveau du titre.) :

```
# Ceci est un H1 #

## Ceci est un H2 ##

### Ceci est un H3 ######
```


---

Voici un quiz concernant les titres Markdown.

Sélectionnez le titre valide:
- [x] `# salut`
- [ ] `#salut`

> Un espace entre le dièse et le titre est imposé.

Sélectionnez les titres valides:
- [ ]  
```
Test
########
```
- [x]   
```
Test
=======
```

> Seuls "=" et "-" sont tolérés quand il faut souligner un titre.

---


