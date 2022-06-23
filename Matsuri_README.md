# What I learned
## Grid
- ```css minmax(minValue, maxValue)```: use to size the row or column size responsively until 1 limit
    eg:
    ```scss
        grid-template: 
        "store" minmax(51px, 0.8fr)
        "faq" minmax(51px, 0.8fr)
        "help" minmax(51px, 0.8fr)
        "about" minmax(51px, 0.8fr)
        "." 5fr
        "login" 1.1fr
        "download" 1.1fr /
        auto
        ;
    ```
