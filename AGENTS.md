# AGENT.md

## Règles Angular

### Signals

- Ne jamais muter un signal en place (`push`, `items[0] = …`, `splice`).
- Toujours créer une nouvelle valeur : `this.items.update(items => [...items, product])`.

### Services

- Jamais de `new MonService()` dans un composant : utiliser `inject(MonService)`.
- Le composant qui a besoin d'une donnée injecte le service lui-même. Pas de prop drilling (un `input()` reçu juste pour le passer à un enfant).
- Pas d'adresse d'API dans un composant : l'appel HTTP vit dans le service de la ressource (ex. `ProductApiService`).

### Navigation

- Lien interne : `<a routerLink="/cart">`, jamais `<a href="/cart">` (le rechargement détruit le panier en mémoire).

### HTTP

- Tout appel HTTP gère les trois états : chargement, erreur, données (`try`, `catch`, `finally`).

### CSS

- Pas de `width` fixe en px sur un bloc entier : `max-width` ou largeur en %.
- Vérifier le rendu à 375 px.

## Angular moderne (obligatoire)

| Interdit                                 | À utiliser                                    |
| ---------------------------------------- | --------------------------------------------- |
| `@Input()`, `@Output()`                  | `input()`, `output()`                         |
| `*ngIf`, `*ngFor`                        | `@if`, `@for`                                 |
| `@Injectable({ providedIn: 'root' })`    | `@Service()`                                  |
| `constructor(private cart: CartService)` | `private readonly cart = inject(CartService)` |
| `FormGroup`, `FormControl`               | Signal Forms : `form()`                       |

Ne jamais mélanger ancien et nouveau style dans le projet.

## Règles métier de l'app

- **Une seule source de vérité** : une donnée vit à un seul endroit (dans un service), les autres composants la lisent. Pas de copie qui peut diverger.
- **Le panier est unique** : un seul `CartService` partagé.
- **Un produit ne compte qu'une fois** dans le total.
- **Comparer par `id`**, jamais par `===` sur des objets ni via un `Set` d'objets : `a.id === b.id`.
- **Formulaires** : chaque champ a une règle de validation dans le schéma, avec un message affiché une fois le champ touché.
- **Sécurité** :
  - Un guard guide l'utilisateur, il ne protège pas les données. Le serveur vérifie le token à chaque requête.
  - L'interceptor n'ajoute le token que pour les requêtes vers notre API (vérifier l'adresse avant d'ajouter le header).

## Avant de rendre le code

Relire chaque fichier avec cette liste, une règle après l'autre :

1. Le code compile-t-il ?
2. Une mutation de signal s'est-elle glissée ?
3. Un service est-il instancié à la main ?
4. L'ancienne syntaxe Angular est-elle présente ?
5. Une donnée est-elle dupliquée à deux endroits ?
6. Des objets sont-ils comparés avec `===` ?
7. Le token peut-il partir vers un autre site ?
