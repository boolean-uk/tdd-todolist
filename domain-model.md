# Todo List
Create a list of todo items with basic crud functionalities

## TodoItem
    - id:uid?
    - text:string
    - status:boolean

## Interactions
**feature**: Create a new item

    - scenario : Create a new entry with valid data
    - given: the user has a list
    - when: he adds a new item with text:"Buy groceries"
    - then: the new item should be added
    - and: should have an assigned uid
    - and: should have text "Buy groceries"
    - and: should have an incomplete status

**feature**: Search for an item

    - Scenario Outline : Search for one of the item properties
    - given: the list is not empty
    - when: the users searches for "<field>" with value "<value>"
    - then: the results should include all of the items with matching "<field>"
    - and the results may contain other matching items if the search has multiple fields

    -examples
        | field  | value  |
        | id        | 123    |
        | text      | Buy Gr |
        | status    | false  |

**feature**: Update an item

    - Scenario Outline : Update an item's "<editable>"
    - given: the user has selected an existing TodoItem
    - when: the user sets "<field>" with value "<value>"
    - then: the item should be updated

    -examples
        | editable  | value         |
        | text      | Buy new tires |
        | status    | true          |


**feature**: Delete an item

    - Scenario : Delete
    - given: the user has selected an existing TodoItem
    - when: the user confirms the irreversible action
    - then: the item should be removed from the list
